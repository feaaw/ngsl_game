// --- ゲームの状態変数 ---
let score = 0;              // 現在のスコア
let timeLeft = 60;          // 残り時間（秒）
let timerInterval;          // タイマーのインターバルID
let currentQuestion = null; // 現在出題中の問題データ
let combo = 0;              // 現在のコンボ数
let isGameActive = false;   // ゲーム中かどうか
let masteredWords = new Set(); // 習得済み単語のID（Setで重複排除）
let newMasteredSession = 0; // このセッションで新しく覚えた単語数

// --- データ読み込み・保存 ---

// LocalStorageから進捗を読み込む
function loadProgress() {
    const saved = localStorage.getItem('ngsl_mastered');
    if (saved) {
        masteredWords = new Set(JSON.parse(saved));
    }
    updateStartScreen();
}

// LocalStorageに進捗を保存
function saveProgress() {
    localStorage.setItem('ngsl_mastered', JSON.stringify([...masteredWords]));
}

// スタート画面の統計情報を更新
function updateStartScreen() {
    document.getElementById('total-mastered-count').innerText = masteredWords.size;
    document.getElementById('collection-total').innerText = masteredWords.size;
    const percent = ((masteredWords.size / NGSL_WORDS.length) * 100).toFixed(1);
    document.getElementById('collection-percent').innerText = `${percent}%`;
}

// --- 画面遷移関数 ---

// スタート画面を表示
function showStartScreen() {
    loadProgress();
    // 全ての画面を隠してスタート画面だけ表示
    document.querySelectorAll('.screen, #game-screen').forEach(el => el.classList.add('hidden'));
    document.getElementById('start-screen').classList.remove('hidden');
}

// コレクション画面を表示
function showCollection() {
    updateStartScreen();
    // リストを描画
    const list = document.getElementById('collection-list');
    list.innerHTML = '';

    if (masteredWords.size === 0) {
        list.innerHTML = '<p style="color:#bdc3c7; padding:20px;">まだ単語を覚えていません。<br>ゲームをプレイして単語を集めよう！</p>';
    } else {
        // ID順にソートして表示
        const masteredList = NGSL_WORDS.filter(w => masteredWords.has(w.id));
        masteredList.forEach(w => {
            const div = document.createElement('div');
            div.className = 'word-item';
            div.innerHTML = `
                <div class="word-en">${w.word}</div>
                <div class="word-jp">${w.meaning}</div>
            `;
            list.appendChild(div);
        });
    }

    document.querySelectorAll('.screen, #game-screen').forEach(el => el.classList.add('hidden'));
    document.getElementById('collection-screen').classList.remove('hidden');
}

// --- ゲームロジック ---

// ゲーム開始処理
function startGame() {
    score = 0;
    timeLeft = 60;
    combo = 0;
    isGameActive = true;
    newMasteredSession = 0;

    // 画面切り替え
    document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
    document.getElementById('game-screen').classList.remove('hidden');

    updateScore();
    nextQuestion(); // 最初の問題を出題
    startTimer();   // タイマースタート
}

// タイマー処理
function startTimer() {
    clearInterval(timerInterval);
    const timeBar = document.getElementById('time-bar');

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;

        // 残り時間バーの長さを更新
        const percent = (timeLeft / 60) * 100;
        timeBar.style.width = `${percent}%`;

        // 残り時間が少ないと赤くする
        if (timeLeft <= 10) timeBar.style.background = '#e74c3c';
        else timeBar.style.background = '#FF6B6B';

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// ゲーム終了処理
function endGame() {
    isGameActive = false;
    clearInterval(timerInterval);
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    // 結果表示
    document.getElementById('final-score').innerText = score;
    document.getElementById('new-words-count').innerText = newMasteredSession;
    document.getElementById('result-stats').style.display = newMasteredSession > 0 ? 'flex' : 'none';

    saveProgress(); // 保存
}

// 次の問題を出題
function nextQuestion() {
    if (!isGameActive) return;

    // 未習得の単語を優先的に出題するロジック
    // 70%の確率で未習得単語リスト(pool)から選ぶ
    let pool;
    if (Math.random() < 0.7 && masteredWords.size < NGSL_WORDS.length) {
        pool = NGSL_WORDS.filter(w => !masteredWords.has(w.id));
    } else {
        pool = NGSL_WORDS;
    }

    if (pool.length === 0) pool = NGSL_WORDS; // フォールバック

    // 正解の単語をランダムに選定
    const correctWord = pool[Math.floor(Math.random() * pool.length)];

    // 不正解の選択肢（ダミー）を3つ選ぶ
    const distractors = [];
    while (distractors.length < 3) {
        const idx = Math.floor(Math.random() * NGSL_WORDS.length);
        const w = NGSL_WORDS[idx];
        if (w.id !== correctWord.id && !distractors.includes(w)) {
            distractors.push(w);
        }
    }

    // 正解とダミーを混ぜてシャッフル
    const options = [correctWord, ...distractors];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    currentQuestion = { word: correctWord, options: options };
    renderQuestion(); // 画面描画
}

// スキップ処理
function handleSkip() {
    if (!isGameActive) return;

    combo = 0;
    showCombo(0);
    timeLeft = Math.max(timeLeft - 2, 0); // ペナルティ -2秒
    document.getElementById('timer').innerText = timeLeft;

    // 正解をグレーでハイライトして教える
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => {
        b.disabled = true;
        if (b.innerText === currentQuestion.word.meaning) {
            b.classList.add('correct');
            b.style.backgroundColor = '#95a5a6';
            b.style.borderColor = '#95a5a6';
        }
    });

    setTimeout(() => nextQuestion(), 800);
}

// 問題画面の描画
function renderQuestion() {
    const qLabel = document.getElementById('question-word');
    const hLabel = document.getElementById('hint-text');
    const optsDiv = document.getElementById('options-container');

    qLabel.innerText = currentQuestion.word.word;

    // ヒント（例文）を完全に非表示
    hLabel.style.display = 'none';
    hLabel.innerHTML = '';

    optsDiv.innerHTML = '';

    // 選択肢ボタン生成
    currentQuestion.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt.meaning;
        btn.onclick = () => handleAnswer(opt, btn);
        optsDiv.appendChild(btn);
    });

    // スキップボタン追加
    const skipBtn = document.createElement('button');
    skipBtn.className = 'option-btn';
    skipBtn.innerHTML = "SKIP <span style='font-size:0.8em'>(-2s)</span>";
    skipBtn.style.gridColumn = "1 / -1"; // 横幅いっぱいに
    skipBtn.style.minHeight = "45px";
    skipBtn.style.marginTop = "5px";
    skipBtn.style.color = "#95a5a6";
    skipBtn.style.borderColor = "#e0e0e0";
    skipBtn.onclick = handleSkip;
    optsDiv.appendChild(skipBtn);
}

// 回答時の処理
function handleAnswer(selectedOpt, btnElement) {
    if (!isGameActive) return;

    // ボタンを無効化（連打防止）
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = selectedOpt.id === currentQuestion.word.id;

    if (isCorrect) {
        // 正解
        btnElement.classList.add('correct');
        combo++;
        score += 100 + (combo * 10); // コンボボーナス加算

        // 習得リストに追加
        if (!masteredWords.has(currentQuestion.word.id)) {
            masteredWords.add(currentQuestion.word.id);
            newMasteredSession++;
        }

        showCombo(combo);

        // 5コンボごとに時間回復
        if (combo % 5 === 0) {
            timeLeft = Math.min(timeLeft + 5, 60);
            document.getElementById('timer').innerText = timeLeft;
        }

        setTimeout(() => nextQuestion(), 600); // 少し待って次へ
    } else {
        // 不正解
        btnElement.classList.add('wrong');
        combo = 0;
        showCombo(0);

        // 正解のボタンをハイライトして教える
        allBtns.forEach(b => {
            if (b.innerText === currentQuestion.word.meaning) {
                b.classList.add('correct');
            }
        });

        timeLeft = Math.max(timeLeft - 5, 0); // ペナルティ -5秒
        document.getElementById('timer').innerText = timeLeft;

        setTimeout(() => nextQuestion(), 1500); // 長めに待って次へ（正解を確認させるため）
    }
    updateScore();
}

// スコア表示更新
function updateScore() {
    document.getElementById('score').innerText = score;
}

// コンボ表示更新
function showCombo(count) {
    const el = document.getElementById('combo-display');
    if (count > 1) {
        el.innerText = `${count} COMBO!`;
        el.classList.add('combo-active');
    } else {
        el.classList.remove('combo-active');
    }
}

// --- 初期化実行 ---
loadProgress();
