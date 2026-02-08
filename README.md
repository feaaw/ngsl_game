# NGSL Word Rush - 完全静的サイト版

英単語学習ゲーム「NGSL Word Rush」を完全な静的サイトに変換しました。

## 📁 プロジェクト構造

```
ngsl_game/
├── static/          # Fetch API版（Webサーバー必要）
│   ├── index.html
│   ├── game.js     # CSVをfetchで読み込む
│   ├── style.css
│   └── ngsl.csv
│
├── build/           # words.js版（完全静的）
│   ├── index.html
│   ├── game.js
│   ├── style.css
│   └── words.js    # CSVから生成したJSファイル
│
└── build_static.py  # ビルドスクリプト
```

## 🚀 使い方

### 方法1: static版（Webサーバー必要）

CSVをブラウザで直接読み込む版です。CORS制限のため、Webサーバーが必要です。

```bash
cd static

# Node.jsの場合
npx http-server -p 8000

# Pythonの場合
python -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いてください。

### 方法2: build版（推奨・サーバー不要）

CSVを事前にJavaScriptファイルに変換した完全静的版です。

#### ビルド手順

```bash
# Node.jsでwords.jsを生成
node convert_csv.js

# 生成されたwords.jsとその他のファイルをbuildフォルダにコピー
copy words.js build\
copy index.html build\
copy game.js build\
copy style.css build\
```

または、

```bash
# Pythonビルドスクリプトを使用（推奨）
python build_static.py
```

#### 実行

```bash
cd build

# Webサーバーで実行
npx http-server -p 8000
# または
python -m http.server 8000
```

ファイルプロトコル（`file://`）では動作しません。必ずWebサーバーで実行してください。

## 🌐 デプロイ

### GitHub Pages

1. リポジトリを作成
2. `build`フォルダの内容をプッシュ
3. Settings > Pages > Source で`main`ブランチを選択
4. デプロイ完了！

### Netlify / Vercel

`build`フォルダをドラッグ&ドロップするだけでデプロイできます。

## 📝 2つのバージョンの違い

| 特徴 | static版 | build版 |
|------|---------|---------|
| CSVの読み込み | ブラウザでfetch | 事前にJSに変換 |
| ビルドステップ | 不要 | 必要 |
| ファイルサイズ | 小さい | 大きい（words.js） |
| 起動速度 | 初回読み込みに時間 | 高速 |
| 推奨用途 | 開発中 | 本番環境 |

## 🎮 ゲームの特徴

- ✨ NGSL 2800語対応
- 🎯 クイズ形式で楽しく学習
- 💾 LocalStorageで進捗保存
- 🔥 コンボシステム
- ⏱️ タイムアタック
- 📊 学習統計表示

## 元のバージョンからの変更点

### 動的版（元）
- Node.jsで`convert_csv.js`を実行してwords.jsを生成
- ローカルサーバーで実行

### 静的版（新）
- **static版**: CSVをブラウザで読み込み（サーバー必要）
- **build版**: 事前ビルドで完全静的化（推奨）
- GitHub Pagesなどに即座にデプロイ可能

---

**Enjoy Learning! 🚀**
# ngsl_game
