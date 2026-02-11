const NGSL_WORDS = [
  {
    "id": 1,
    "word": "the",
    "meaning": "その",
    "example": "used to point to something already mentioned",
    "exampleJP": "（定義）"
  },
  {
    "id": 2,
    "word": "be",
    "meaning": "である",
    "example": "used to show the identity of a thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 3,
    "word": "and",
    "meaning": "～と",
    "example": "used to join words or groups of words",
    "exampleJP": "（定義）"
  },
  {
    "id": 4,
    "word": "of",
    "meaning": "の",
    "example": "belonging to or connected with something",
    "exampleJP": "（定義）"
  },
  {
    "id": 5,
    "word": "to",
    "meaning": "～へ",
    "example": "used to indicate place or direction",
    "exampleJP": "（定義）"
  },
  {
    "id": 6,
    "word": "a",
    "meaning": "一つの",
    "example": "one particular thing or one of a class of things",
    "exampleJP": "（定義）"
  },
  {
    "id": 7,
    "word": "in",
    "meaning": "～の中",
    "example": "used to indicate being inside of or surrounded by something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 8,
    "word": "have",
    "meaning": "持つ",
    "example": "to own, possess, or hold something",
    "exampleJP": "（定義）"
  },
  {
    "id": 9,
    "word": "it",
    "meaning": "それ",
    "example": "a thing that has been previously mentioned",
    "exampleJP": "（定義）"
  },
  {
    "id": 10,
    "word": "you",
    "meaning": "あなた",
    "example": "used to refer to the person the speaker is addressing",
    "exampleJP": "（定義）"
  },
  {
    "id": 11,
    "word": "he",
    "meaning": "彼",
    "example": "used to refer to a male person that is the subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 12,
    "word": "for",
    "meaning": "～のため",
    "example": "indicating the purpose or need of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 13,
    "word": "they",
    "meaning": "彼ら",
    "example": "used to refer to two or more people, animals, or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 14,
    "word": "not",
    "meaning": "～でない",
    "example": "used to make an expression negative",
    "exampleJP": "（定義）"
  },
  {
    "id": 15,
    "word": "that",
    "meaning": "あの",
    "example": "used to identify a specific person, thing, fact or idea",
    "exampleJP": "（定義）"
  },
  {
    "id": 16,
    "word": "we",
    "meaning": "私たち",
    "example": "used to refer to the speaker and another person as the subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 17,
    "word": "on",
    "meaning": "～に接して",
    "example": "touching and being supported or physically in contact by something",
    "exampleJP": "（定義）"
  },
  {
    "id": 18,
    "word": "with",
    "meaning": "～と一緒",
    "example": "used to express that people or things are together",
    "exampleJP": "（定義）"
  },
  {
    "id": 19,
    "word": "this",
    "meaning": "この",
    "example": "used to identify a specific person, thing, or idea that is close",
    "exampleJP": "（定義）"
  },
  {
    "id": 20,
    "word": "I",
    "meaning": "私は",
    "example": "the person who is speaking or writing",
    "exampleJP": "（定義）"
  },
  {
    "id": 21,
    "word": "do",
    "meaning": "する",
    "example": "to perform an action or activity; to work on something",
    "exampleJP": "（定義）"
  },
  {
    "id": 22,
    "word": "as",
    "meaning": "～のように",
    "example": "used to refer to the same degree or amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 23,
    "word": "at",
    "meaning": "～で",
    "example": "used to indicate place, location, or arrival",
    "exampleJP": "（定義）"
  },
  {
    "id": 24,
    "word": "she",
    "meaning": "彼女",
    "example": "used to refer to a female that is the subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 25,
    "word": "but",
    "meaning": "でも",
    "example": "used to contrast a statement with a to previous one",
    "exampleJP": "（定義）"
  },
  {
    "id": 26,
    "word": "from",
    "meaning": "～から",
    "example": "indicating the starting point of motion or action",
    "exampleJP": "（定義）"
  },
  {
    "id": 27,
    "word": "by",
    "meaning": "の近くに",
    "example": "close to or next to, up to and beyond, beside a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 28,
    "word": "will",
    "meaning": "～だろう",
    "example": "expressing the future, to say something is expected to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 29,
    "word": "or",
    "meaning": "～か",
    "example": "used to link alternatives, to introduce another choice",
    "exampleJP": "（定義）"
  },
  {
    "id": 30,
    "word": "say",
    "meaning": "言う",
    "example": "to use your voice to express something with words",
    "exampleJP": "（定義）"
  },
  {
    "id": 31,
    "word": "go",
    "meaning": "行く",
    "example": "to move or travel from one place to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 32,
    "word": "so",
    "meaning": "とても",
    "example": "to a  degree that is suggested or stated",
    "exampleJP": "（定義）"
  },
  {
    "id": 33,
    "word": "all",
    "meaning": "全て",
    "example": "the whole, entire or total amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 34,
    "word": "if",
    "meaning": "もし",
    "example": "introducing a condition for something to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 35,
    "word": "one",
    "meaning": "1、ひとり、ひとつ",
    "example": "the number 1, a single person or thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 36,
    "word": "would",
    "meaning": "～だろう",
    "example": "indicating someone thinking about what will happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 37,
    "word": "about",
    "meaning": "～について",
    "example": "on the subject of, or concerning something",
    "exampleJP": "（定義）"
  },
  {
    "id": 38,
    "word": "can",
    "meaning": "～できる",
    "example": "to be able to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 39,
    "word": "which",
    "meaning": "どちらか",
    "example": "what one or ones of a group, one or more people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 40,
    "word": "there",
    "meaning": "そこ",
    "example": "in that place or position, at that location",
    "exampleJP": "（定義）"
  },
  {
    "id": 41,
    "word": "know",
    "meaning": "知る",
    "example": "to have in your mind, be aware of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 42,
    "word": "more",
    "meaning": "もっと",
    "example": "greater in amount, number, or size",
    "exampleJP": "（定義）"
  },
  {
    "id": 43,
    "word": "get",
    "meaning": "得る",
    "example": "to obtain, receive or be given something",
    "exampleJP": "（定義）"
  },
  {
    "id": 44,
    "word": "who",
    "meaning": "誰",
    "example": "what or which person or people, to ask about, talking about",
    "exampleJP": "（定義）"
  },
  {
    "id": 45,
    "word": "like",
    "meaning": "好む",
    "example": "to find something agreeable or enjoyable",
    "exampleJP": "（定義）"
  },
  {
    "id": 46,
    "word": "when",
    "meaning": "どこ",
    "example": "at what time, at, in, during which, how soon",
    "exampleJP": "（定義）"
  },
  {
    "id": 47,
    "word": "think",
    "meaning": "思う",
    "example": "to believe or have a particular idea",
    "exampleJP": "（定義）"
  },
  {
    "id": 48,
    "word": "make",
    "meaning": "作る",
    "example": "to build, create, or produce something",
    "exampleJP": "（定義）"
  },
  {
    "id": 49,
    "word": "time",
    "meaning": "時間",
    "example": "something measured in minutes, hours, days, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 50,
    "word": "see",
    "meaning": "見る",
    "example": "to notice or become aware of with the eyes",
    "exampleJP": "（定義）"
  },
  {
    "id": 51,
    "word": "what",
    "meaning": "なに",
    "example": "asking for information about someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 52,
    "word": "up",
    "meaning": "上がる",
    "example": "to move towards a high place from a lower one",
    "exampleJP": "（定義）"
  },
  {
    "id": 53,
    "word": "some",
    "meaning": "いくらか",
    "example": "used to refer to an unspecified amount or number",
    "exampleJP": "（定義）"
  },
  {
    "id": 54,
    "word": "other",
    "meaning": "他",
    "example": "used to mention a person or thing is different from already mentioned",
    "exampleJP": "（定義）"
  },
  {
    "id": 55,
    "word": "out",
    "meaning": "外へ",
    "example": "in a direction or movement away from the inside or center",
    "exampleJP": "（定義）"
  },
  {
    "id": 56,
    "word": "good",
    "meaning": "良い",
    "example": "of high quality",
    "exampleJP": "（定義）"
  },
  {
    "id": 57,
    "word": "people",
    "meaning": "人々",
    "example": "human beings in general, plural of person",
    "exampleJP": "（定義）"
  },
  {
    "id": 58,
    "word": "year",
    "meaning": "年",
    "example": "a unit of time equal to 12 months or 365 days",
    "exampleJP": "（定義）"
  },
  {
    "id": 59,
    "word": "take",
    "meaning": "持っていく、取る",
    "example": "to carry or move with one's hands, to reach for",
    "exampleJP": "（定義）"
  },
  {
    "id": 60,
    "word": "no",
    "meaning": "いいえ、ない",
    "example": "not at all, in a way that shows a negative response",
    "exampleJP": "（定義）"
  },
  {
    "id": 61,
    "word": "well",
    "meaning": "上手く、上手に",
    "example": "in a successful way, in a good or satisfactory way",
    "exampleJP": "（定義）"
  },
  {
    "id": 62,
    "word": "because",
    "meaning": "なぜならば",
    "example": "for a reason",
    "exampleJP": "（定義）"
  },
  {
    "id": 63,
    "word": "very",
    "meaning": "とても",
    "example": "to a high degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 64,
    "word": "just",
    "meaning": "ただ～",
    "example": "exactly, to an exact degree or manner",
    "exampleJP": "（定義）"
  },
  {
    "id": 65,
    "word": "come",
    "meaning": "来る",
    "example": "to move toward someone, to approach",
    "exampleJP": "（定義）"
  },
  {
    "id": 66,
    "word": "could",
    "meaning": "できた",
    "example": "used as the past tense of can, to indicate possibility",
    "exampleJP": "（定義）"
  },
  {
    "id": 67,
    "word": "work",
    "meaning": "働く",
    "example": "to have a job or activity involving mental or physical effort",
    "exampleJP": "（定義）"
  },
  {
    "id": 68,
    "word": "use",
    "meaning": "使う",
    "example": "to do something with another thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 69,
    "word": "than",
    "meaning": "～より",
    "example": "used to introduce a second part that is being compared",
    "exampleJP": "（定義）"
  },
  {
    "id": 70,
    "word": "now",
    "meaning": "今",
    "example": "at the present time or moment",
    "exampleJP": "（定義）"
  },
  {
    "id": 71,
    "word": "then",
    "meaning": "その時、それから",
    "example": "at that time, at the time mentioned, after that",
    "exampleJP": "（定義）"
  },
  {
    "id": 72,
    "word": "also",
    "meaning": "～もまた",
    "example": "in addition, too, in a similar way",
    "exampleJP": "（定義）"
  },
  {
    "id": 73,
    "word": "into",
    "meaning": "～の中に",
    "example": "introduce movement toward the inside of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 74,
    "word": "only",
    "meaning": "たった",
    "example": "alone in a class or category",
    "exampleJP": "（定義）"
  },
  {
    "id": 75,
    "word": "look",
    "meaning": "見る",
    "example": "to direct one's gaze in a particular direction",
    "exampleJP": "（定義）"
  },
  {
    "id": 76,
    "word": "want",
    "meaning": "欲しい",
    "example": "to desire or wish for",
    "exampleJP": "（定義）"
  },
  {
    "id": 77,
    "word": "give",
    "meaning": "与える",
    "example": "to hand over or present something to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 78,
    "word": "first",
    "meaning": "最初",
    "example": "coming before all others in time or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 79,
    "word": "new",
    "meaning": "新しい",
    "example": "not old, recently born, built or created",
    "exampleJP": "（定義）"
  },
  {
    "id": 80,
    "word": "way",
    "meaning": "方法",
    "example": "a manner or characteristic of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 81,
    "word": "find",
    "meaning": "見つける",
    "example": "to discover something",
    "exampleJP": "（定義）"
  },
  {
    "id": 82,
    "word": "over",
    "meaning": "超える",
    "example": "in an upward direction across something",
    "exampleJP": "（定義）"
  },
  {
    "id": 83,
    "word": "any",
    "meaning": "何か",
    "example": "used to refer to something not particular or specific",
    "exampleJP": "（定義）"
  },
  {
    "id": 84,
    "word": "after",
    "meaning": "後で",
    "example": "following in time, at a later time",
    "exampleJP": "（定義）"
  },
  {
    "id": 85,
    "word": "day",
    "meaning": "日",
    "example": "each of the 24 hours beginning at midnight",
    "exampleJP": "（定義）"
  },
  {
    "id": 86,
    "word": "where",
    "meaning": "どこ",
    "example": "to be in at or in what place?",
    "exampleJP": "（定義）"
  },
  {
    "id": 87,
    "word": "thing",
    "meaning": "物",
    "example": "an object, animal, or quality doesn't have a specific name",
    "exampleJP": "（定義）"
  },
  {
    "id": 88,
    "word": "most",
    "meaning": "もっとも",
    "example": "almost all of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 89,
    "word": "should",
    "meaning": "～すべき",
    "example": "used to indicate what is proper or reasonable",
    "exampleJP": "（定義）"
  },
  {
    "id": 90,
    "word": "need",
    "meaning": "必要とする",
    "example": "require because it is essential or important",
    "exampleJP": "（定義）"
  },
  {
    "id": 91,
    "word": "much",
    "meaning": "たくさん",
    "example": "large in amount or extent",
    "exampleJP": "（定義）"
  },
  {
    "id": 92,
    "word": "right",
    "meaning": "正しい",
    "example": "to be true, correct or acceptable",
    "exampleJP": "（定義）"
  },
  {
    "id": 93,
    "word": "how",
    "meaning": "どのようにして",
    "example": "by what means or manner?",
    "exampleJP": "（定義）"
  },
  {
    "id": 94,
    "word": "back",
    "meaning": "背",
    "example": "the rear surface of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 95,
    "word": "mean",
    "meaning": "～するつもりだ",
    "example": "to have in mind as your purpose or intention",
    "exampleJP": "（定義）"
  },
  {
    "id": 96,
    "word": "even",
    "meaning": "平らな、等しい",
    "example": "being flat, equal or smooth",
    "exampleJP": "（定義）"
  },
  {
    "id": 97,
    "word": "may",
    "meaning": "かもしれない",
    "example": "used to express possibility or probability",
    "exampleJP": "（定義）"
  },
  {
    "id": 98,
    "word": "here",
    "meaning": "ここ",
    "example": "in this place, at this location or position",
    "exampleJP": "（定義）"
  },
  {
    "id": 99,
    "word": "many",
    "meaning": "たくさん",
    "example": "used to refer a large number of things",
    "exampleJP": "（定義）"
  },
  {
    "id": 100,
    "word": "such",
    "meaning": "そのような",
    "example": "like or similar",
    "exampleJP": "（定義）"
  },
  {
    "id": 101,
    "word": "last",
    "meaning": "最後",
    "example": "coming after others, final",
    "exampleJP": "（定義）"
  },
  {
    "id": 102,
    "word": "child",
    "meaning": "子供",
    "example": "a young person",
    "exampleJP": "（定義）"
  },
  {
    "id": 103,
    "word": "tell",
    "meaning": "話す",
    "example": "to say or communicate information to someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 104,
    "word": "really",
    "meaning": "本当に",
    "example": "very or very much",
    "exampleJP": "（定義）"
  },
  {
    "id": 105,
    "word": "call",
    "meaning": "呼ぶ",
    "example": "to speak, announce or shout in a loud voice",
    "exampleJP": "（定義）"
  },
  {
    "id": 106,
    "word": "before",
    "meaning": "以前",
    "example": "at an earlier time, in front of",
    "exampleJP": "（定義）"
  },
  {
    "id": 107,
    "word": "company",
    "meaning": "会社",
    "example": "a business that sells thing or provides services",
    "exampleJP": "（定義）"
  },
  {
    "id": 108,
    "word": "through",
    "meaning": "～の間",
    "example": "into one side and out of the other side",
    "exampleJP": "（定義）"
  },
  {
    "id": 109,
    "word": "down",
    "meaning": "下へ",
    "example": "going from a higher position to a lower position",
    "exampleJP": "（定義）"
  },
  {
    "id": 110,
    "word": "show",
    "meaning": "見せる",
    "example": "to cause or allow to be seen",
    "exampleJP": "（定義）"
  },
  {
    "id": 111,
    "word": "life",
    "meaning": "生命",
    "example": "the existence of a human being or animal",
    "exampleJP": "（定義）"
  },
  {
    "id": 112,
    "word": "man",
    "meaning": "男性",
    "example": "an adult male human being",
    "exampleJP": "（定義）"
  },
  {
    "id": 113,
    "word": "change",
    "meaning": "変える",
    "example": "to make or become different",
    "exampleJP": "（定義）"
  },
  {
    "id": 114,
    "word": "place",
    "meaning": "場所",
    "example": "a particular area or region",
    "exampleJP": "（定義）"
  },
  {
    "id": 115,
    "word": "long",
    "meaning": "長い",
    "example": "extending a great distance",
    "exampleJP": "（定義）"
  },
  {
    "id": 116,
    "word": "between",
    "meaning": "～の間",
    "example": "in the space that separates to objects",
    "exampleJP": "（定義）"
  },
  {
    "id": 117,
    "word": "feel",
    "meaning": "感じる",
    "example": "to be aware of or experience an emotion or sensation",
    "exampleJP": "（定義）"
  },
  {
    "id": 118,
    "word": "too",
    "meaning": "～もまた",
    "example": "in addition, also",
    "exampleJP": "（定義）"
  },
  {
    "id": 119,
    "word": "still",
    "meaning": "まだ",
    "example": "used to express that an action or condition continues",
    "exampleJP": "（定義）"
  },
  {
    "id": 120,
    "word": "problem",
    "meaning": "問題",
    "example": "something that is difficult to deal with or needs to overcome",
    "exampleJP": "（定義）"
  },
  {
    "id": 121,
    "word": "write",
    "meaning": "書く",
    "example": "to compose letters and words on a surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 122,
    "word": "same",
    "meaning": "同じ",
    "example": "identical, not different",
    "exampleJP": "（定義）"
  },
  {
    "id": 123,
    "word": "lot",
    "meaning": "用地",
    "example": "a small piece of land that is or could be used for building something or for some other purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 124,
    "word": "great",
    "meaning": "巨大な、多量の",
    "example": "very large in size, extent or amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 125,
    "word": "try",
    "meaning": "試す",
    "example": "to make an effort, to attempt to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 126,
    "word": "leave",
    "meaning": "去る",
    "example": "to go away from, depart from",
    "exampleJP": "（定義）"
  },
  {
    "id": 127,
    "word": "number",
    "meaning": "数字",
    "example": "a word or symbol that stands for a specific amount or quantity",
    "exampleJP": "（定義）"
  },
  {
    "id": 128,
    "word": "both",
    "meaning": "両方とも",
    "example": "used to emphasis two things at the same time",
    "exampleJP": "（定義）"
  },
  {
    "id": 129,
    "word": "own",
    "meaning": "自身の",
    "example": "when something belongs to someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 130,
    "word": "part",
    "meaning": "部品",
    "example": "one of the pieces of a whole",
    "exampleJP": "（定義）"
  },
  {
    "id": 131,
    "word": "point",
    "meaning": "主張",
    "example": "an idea that you try to make others accept or understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 132,
    "word": "little",
    "meaning": "少し、小さい",
    "example": "small in size, amount, or degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 133,
    "word": "help",
    "meaning": "助ける",
    "example": "to assist in order to make it easier for someone to do a job",
    "exampleJP": "（定義）"
  },
  {
    "id": 134,
    "word": "ask",
    "meaning": "求める",
    "example": "to request",
    "exampleJP": "（定義）"
  },
  {
    "id": 135,
    "word": "meet",
    "meaning": "会う",
    "example": "to be introduced for the first time",
    "exampleJP": "（定義）"
  },
  {
    "id": 136,
    "word": "start",
    "meaning": "始める",
    "example": "to begin doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 137,
    "word": "talk",
    "meaning": "話す",
    "example": "using words to express opinions or give information",
    "exampleJP": "（定義）"
  },
  {
    "id": 138,
    "word": "something",
    "meaning": "何か",
    "example": "a thing that is not yet know, specified or named",
    "exampleJP": "（定義）"
  },
  {
    "id": 139,
    "word": "put",
    "meaning": "置く",
    "example": "to move or place in a particular position",
    "exampleJP": "（定義）"
  },
  {
    "id": 140,
    "word": "another",
    "meaning": "もう一つ",
    "example": "one more in addition",
    "exampleJP": "（定義）"
  },
  {
    "id": 141,
    "word": "become",
    "meaning": "なる",
    "example": "to begin to be, grow to be, develop into",
    "exampleJP": "（定義）"
  },
  {
    "id": 142,
    "word": "interest",
    "meaning": "興味",
    "example": "a feeling of wanting to know or learn about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 143,
    "word": "country",
    "meaning": "国",
    "example": "an area, nation that is controlled by government",
    "exampleJP": "（定義）"
  },
  {
    "id": 144,
    "word": "old",
    "meaning": "古い",
    "example": "having lived for many years, no longer young",
    "exampleJP": "（定義）"
  },
  {
    "id": 145,
    "word": "each",
    "meaning": "各々",
    "example": "every one of two more things",
    "exampleJP": "（定義）"
  },
  {
    "id": 146,
    "word": "school",
    "meaning": "学校",
    "example": "a place where children go to learn",
    "exampleJP": "（定義）"
  },
  {
    "id": 147,
    "word": "late",
    "meaning": "遅れる",
    "example": "happening near the end of a given time",
    "exampleJP": "（定義）"
  },
  {
    "id": 148,
    "word": "high",
    "meaning": "高い",
    "example": "rising upward a great distance",
    "exampleJP": "（定義）"
  },
  {
    "id": 149,
    "word": "different",
    "meaning": "違う",
    "example": "not of the same kind, unlike in nature",
    "exampleJP": "（定義）"
  },
  {
    "id": 150,
    "word": "off",
    "meaning": "離れて",
    "example": "away from a place or at a distance",
    "exampleJP": "（定義）"
  },
  {
    "id": 151,
    "word": "next",
    "meaning": "次",
    "example": "coming immediately after this time",
    "exampleJP": "（定義）"
  },
  {
    "id": 152,
    "word": "end",
    "meaning": "終わり",
    "example": "a point that marks the limit of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 153,
    "word": "live",
    "meaning": "生きる",
    "example": "to be alive, to remain or continue to be alive",
    "exampleJP": "（定義）"
  },
  {
    "id": 154,
    "word": "why",
    "meaning": "なぜ",
    "example": "for what reason or purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 155,
    "word": "while",
    "meaning": "間",
    "example": "during the time that, at the same time",
    "exampleJP": "（定義）"
  },
  {
    "id": 156,
    "word": "world",
    "meaning": "世界",
    "example": "the earth and all people and things on it",
    "exampleJP": "（定義）"
  },
  {
    "id": 157,
    "word": "week",
    "meaning": "週",
    "example": "a period of seven days,  starts on Sunday and end on Saturday",
    "exampleJP": "（定義）"
  },
  {
    "id": 158,
    "word": "play",
    "meaning": "遊ぶ",
    "example": "to do activities for fun or enjoyment",
    "exampleJP": "（定義）"
  },
  {
    "id": 159,
    "word": "might",
    "meaning": "～かもしれない",
    "example": "to say something is possible",
    "exampleJP": "（定義）"
  },
  {
    "id": 160,
    "word": "must",
    "meaning": "～しなければならない",
    "example": "used to say that something is required or necessary",
    "exampleJP": "（定義）"
  },
  {
    "id": 161,
    "word": "home",
    "meaning": "住まい",
    "example": "the place where a person or a family lives",
    "exampleJP": "（定義）"
  },
  {
    "id": 162,
    "word": "never",
    "meaning": "決して～しない",
    "example": "not ever, not at any time",
    "exampleJP": "（定義）"
  },
  {
    "id": 163,
    "word": "include",
    "meaning": "含む",
    "example": "to have as a part of a group",
    "exampleJP": "（定義）"
  },
  {
    "id": 164,
    "word": "course",
    "meaning": "進路",
    "example": "the route or direction that something moves along",
    "exampleJP": "（定義）"
  },
  {
    "id": 165,
    "word": "house",
    "meaning": "家",
    "example": "a building in which a family lives",
    "exampleJP": "（定義）"
  },
  {
    "id": 166,
    "word": "report",
    "meaning": "報告",
    "example": "a story given about a particular matter",
    "exampleJP": "（定義）"
  },
  {
    "id": 167,
    "word": "group",
    "meaning": "集団",
    "example": "a number of people or things located or gathered together",
    "exampleJP": "（定義）"
  },
  {
    "id": 168,
    "word": "case",
    "meaning": "事例",
    "example": "an example or instance of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 169,
    "word": "woman",
    "meaning": "女性",
    "example": "an adult female human being",
    "exampleJP": "（定義）"
  },
  {
    "id": 170,
    "word": "around",
    "meaning": "～の周りに",
    "example": "located on every side or along something",
    "exampleJP": "（定義）"
  },
  {
    "id": 171,
    "word": "book",
    "meaning": "本",
    "example": "a printed or written work that is bound together and has a cover",
    "exampleJP": "（定義）"
  },
  {
    "id": 172,
    "word": "family",
    "meaning": "家族",
    "example": "a group of people who are related to each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 173,
    "word": "seem",
    "meaning": "～のように思われる",
    "example": "to appear to be something",
    "exampleJP": "（定義）"
  },
  {
    "id": 174,
    "word": "let",
    "meaning": "させる",
    "example": "to allow or permit to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 175,
    "word": "again",
    "meaning": "再び",
    "example": "one more time, once more",
    "exampleJP": "（定義）"
  },
  {
    "id": 176,
    "word": "kind",
    "meaning": "親切",
    "example": "having a friendly, gentle nature",
    "exampleJP": "（定義）"
  },
  {
    "id": 177,
    "word": "keep",
    "meaning": "保つ",
    "example": "to continue holding or retaining possession of",
    "exampleJP": "（定義）"
  },
  {
    "id": 178,
    "word": "hear",
    "meaning": "聞く",
    "example": "to be aware of sound, to perceive with the ear",
    "exampleJP": "（定義）"
  },
  {
    "id": 179,
    "word": "system",
    "meaning": "システム",
    "example": "a set of related parts that move or work together",
    "exampleJP": "（定義）"
  },
  {
    "id": 180,
    "word": "every",
    "meaning": "毎",
    "example": "including each person or thing in a group",
    "exampleJP": "（定義）"
  },
  {
    "id": 181,
    "word": "question",
    "meaning": "質問する",
    "example": "to ask for or elicit information",
    "exampleJP": "（定義）"
  },
  {
    "id": 182,
    "word": "during",
    "meaning": "間",
    "example": "throughout the entire time",
    "exampleJP": "（定義）"
  },
  {
    "id": 183,
    "word": "always",
    "meaning": "いつも",
    "example": "at all times",
    "exampleJP": "（定義）"
  },
  {
    "id": 184,
    "word": "big",
    "meaning": "大きい",
    "example": "large in size or extent",
    "exampleJP": "（定義）"
  },
  {
    "id": 185,
    "word": "set",
    "meaning": "設置する",
    "example": "to put or stand something in a place or position",
    "exampleJP": "（定義）"
  },
  {
    "id": 186,
    "word": "small",
    "meaning": "小さい",
    "example": "little in size, not great in amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 187,
    "word": "study",
    "meaning": "勉強する、研究する",
    "example": "devoting time to learn about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 188,
    "word": "follow",
    "meaning": "ついて行く",
    "example": "to come after, to move or travel behind",
    "exampleJP": "（定義）"
  },
  {
    "id": 189,
    "word": "begin",
    "meaning": "始める",
    "example": "to do the first part of an action, to start",
    "exampleJP": "（定義）"
  },
  {
    "id": 190,
    "word": "important",
    "meaning": "大切",
    "example": "having great significance",
    "exampleJP": "（定義）"
  },
  {
    "id": 191,
    "word": "since",
    "meaning": "～なので、～だから",
    "example": "because, for the reason that",
    "exampleJP": "（定義）"
  },
  {
    "id": 192,
    "word": "run",
    "meaning": "走る",
    "example": "to move with your legs at a speed that is faster than walking",
    "exampleJP": "（定義）"
  },
  {
    "id": 193,
    "word": "under",
    "meaning": "下に",
    "example": "to be below something",
    "exampleJP": "（定義）"
  },
  {
    "id": 194,
    "word": "turn",
    "meaning": "回る",
    "example": "to move around a central point",
    "exampleJP": "（定義）"
  },
  {
    "id": 195,
    "word": "few",
    "meaning": "少し",
    "example": "not many, a small number",
    "exampleJP": "（定義）"
  },
  {
    "id": 196,
    "word": "bring",
    "meaning": "持っていく",
    "example": "to take or go with to a place,",
    "exampleJP": "（定義）"
  },
  {
    "id": 197,
    "word": "early",
    "meaning": "早い",
    "example": "at or near the beginning of time, done before the expected time",
    "exampleJP": "（定義）"
  },
  {
    "id": 198,
    "word": "hand",
    "meaning": "手",
    "example": "the body parts at the end of a person's arm",
    "exampleJP": "（定義）"
  },
  {
    "id": 199,
    "word": "state",
    "meaning": "状態",
    "example": "a way of living or existing",
    "exampleJP": "（定義）"
  },
  {
    "id": 200,
    "word": "move",
    "meaning": "動かす",
    "example": "to cause to go in a specified direction or manner",
    "exampleJP": "（定義）"
  },
  {
    "id": 201,
    "word": "money",
    "meaning": "金",
    "example": "something used to pay for goods and services",
    "exampleJP": "（定義）"
  },
  {
    "id": 202,
    "word": "fact",
    "meaning": "事実",
    "example": "something that is known or proved to be true",
    "exampleJP": "（定義）"
  },
  {
    "id": 203,
    "word": "however",
    "meaning": "しかし",
    "example": "used to introduce a different statement",
    "exampleJP": "（定義）"
  },
  {
    "id": 204,
    "word": "area",
    "meaning": "地域",
    "example": "a part or section in a large place",
    "exampleJP": "（定義）"
  },
  {
    "id": 205,
    "word": "provide",
    "meaning": "提供する",
    "example": "to make available, to supply for use",
    "exampleJP": "（定義）"
  },
  {
    "id": 206,
    "word": "name",
    "meaning": "名前",
    "example": "a word that addressed or refers to a specific person",
    "exampleJP": "（定義）"
  },
  {
    "id": 207,
    "word": "read",
    "meaning": "読む",
    "example": "to look at and comprehend the meaning of something written",
    "exampleJP": "（定義）"
  },
  {
    "id": 208,
    "word": "friend",
    "meaning": "友達",
    "example": "a person who you like and enjoy being with",
    "exampleJP": "（定義）"
  },
  {
    "id": 209,
    "word": "month",
    "meaning": "口",
    "example": "one of the 12 periods of time a year is broken into",
    "exampleJP": "（定義）"
  },
  {
    "id": 210,
    "word": "large",
    "meaning": "大きい",
    "example": "great in size, extent, or capacity",
    "exampleJP": "（定義）"
  },
  {
    "id": 211,
    "word": "business",
    "meaning": "ビジネス、商売",
    "example": "the activity of making, buying, selling or providing goods",
    "exampleJP": "（定義）"
  },
  {
    "id": 212,
    "word": "without",
    "meaning": "～なしに",
    "example": "not having or including something, in the absence of",
    "exampleJP": "（定義）"
  },
  {
    "id": 213,
    "word": "information",
    "meaning": "情報",
    "example": "facts or data about a situation, person, event, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 214,
    "word": "open",
    "meaning": "開いている",
    "example": "not closed",
    "exampleJP": "（定義）"
  },
  {
    "id": 215,
    "word": "order",
    "meaning": "命令",
    "example": "an instruction or direction that must be obeyed",
    "exampleJP": "（定義）"
  },
  {
    "id": 216,
    "word": "government",
    "meaning": "政府",
    "example": "the group of people who officially control a country",
    "exampleJP": "（定義）"
  },
  {
    "id": 217,
    "word": "word",
    "meaning": "語",
    "example": "a unit of language that has a meaning",
    "exampleJP": "（定義）"
  },
  {
    "id": 218,
    "word": "issue",
    "meaning": "問題",
    "example": "problems that people are talking or thinking about",
    "exampleJP": "（定義）"
  },
  {
    "id": 219,
    "word": "market",
    "meaning": "市場",
    "example": "a place that products are bought and sold",
    "exampleJP": "（定義）"
  },
  {
    "id": 220,
    "word": "pay",
    "meaning": "はらう",
    "example": "give money for goods or work done",
    "exampleJP": "（定義）"
  },
  {
    "id": 221,
    "word": "build",
    "meaning": "建てる",
    "example": "to construct by putting parts or materials together",
    "exampleJP": "（定義）"
  },
  {
    "id": 222,
    "word": "hold",
    "meaning": "手に持つ",
    "example": "to have or keep in your hand",
    "exampleJP": "（定義）"
  },
  {
    "id": 223,
    "word": "service",
    "meaning": "奉仕、勤務",
    "example": "the action of helping or doing work for someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 224,
    "word": "against",
    "meaning": "反対に、逆らって",
    "example": "in opposition to",
    "exampleJP": "（定義）"
  },
  {
    "id": 225,
    "word": "believe",
    "meaning": "信じる",
    "example": "to accept that something is true",
    "exampleJP": "（定義）"
  },
  {
    "id": 226,
    "word": "second",
    "meaning": "秒",
    "example": "a unit of time, one sixtieth of a minute",
    "exampleJP": "（定義）"
  },
  {
    "id": 227,
    "word": "though",
    "meaning": "だが",
    "example": "although, despite the fact that",
    "exampleJP": "（定義）"
  },
  {
    "id": 228,
    "word": "yes",
    "meaning": "はい",
    "example": "used to give a positive answer or reply to a question, request, or offer",
    "exampleJP": "（定義）"
  },
  {
    "id": 229,
    "word": "love",
    "meaning": "愛",
    "example": "feel great affection for",
    "exampleJP": "（定義）"
  },
  {
    "id": 230,
    "word": "increase",
    "meaning": "増える",
    "example": "to become larger or greater in size, amount, or degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 231,
    "word": "job",
    "meaning": "仕事",
    "example": "the regular work of earning money",
    "exampleJP": "（定義）"
  },
  {
    "id": 232,
    "word": "plan",
    "meaning": "予定",
    "example": "a set of actions as a way to do, detailed proposal for doing",
    "exampleJP": "（定義）"
  },
  {
    "id": 233,
    "word": "result",
    "meaning": "結果",
    "example": "a thing that is caused by something else that happened",
    "exampleJP": "（定義）"
  },
  {
    "id": 234,
    "word": "away",
    "meaning": "離れて・去って",
    "example": "at a distance from a particular person or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 235,
    "word": "example",
    "meaning": "例",
    "example": "a thing which is seen as a model",
    "exampleJP": "（定義）"
  },
  {
    "id": 236,
    "word": "happen",
    "meaning": "起こる",
    "example": "to take place or occur",
    "exampleJP": "（定義）"
  },
  {
    "id": 237,
    "word": "offer",
    "meaning": "申し出る",
    "example": "to give someone the opportunity to accept something",
    "exampleJP": "（定義）"
  },
  {
    "id": 238,
    "word": "young",
    "meaning": "若い",
    "example": "in an early stage of life  or growth",
    "exampleJP": "（定義）"
  },
  {
    "id": 239,
    "word": "close",
    "meaning": "閉める",
    "example": "to move so that things cannot path through",
    "exampleJP": "（定義）"
  },
  {
    "id": 240,
    "word": "program",
    "meaning": "プログラム",
    "example": "a plan of things that are done to achieve a result",
    "exampleJP": "（定義）"
  },
  {
    "id": 241,
    "word": "lead",
    "meaning": "導く",
    "example": "to guide someone to a place , to go with, be in charge",
    "exampleJP": "（定義）"
  },
  {
    "id": 242,
    "word": "buy",
    "meaning": "買う",
    "example": "to get something by paying money for it;  purchase",
    "exampleJP": "（定義）"
  },
  {
    "id": 243,
    "word": "understand",
    "meaning": "理解する",
    "example": "to know, to perceive or comprehend something",
    "exampleJP": "（定義）"
  },
  {
    "id": 244,
    "word": "thank",
    "meaning": "感謝する",
    "example": "to tell (someone) that you are grateful for something that he or she has done or given",
    "exampleJP": "（定義）"
  },
  {
    "id": 245,
    "word": "far",
    "meaning": "遠い",
    "example": "to a great distance in space or time",
    "exampleJP": "（定義）"
  },
  {
    "id": 246,
    "word": "today",
    "meaning": "今日",
    "example": "this day, this present day, at the present time",
    "exampleJP": "（定義）"
  },
  {
    "id": 247,
    "word": "hour",
    "meaning": "時間",
    "example": "a period of time equal to 60 minutes",
    "exampleJP": "（定義）"
  },
  {
    "id": 248,
    "word": "student",
    "meaning": "生徒",
    "example": "a person who attends a school",
    "exampleJP": "（定義）"
  },
  {
    "id": 249,
    "word": "face",
    "meaning": "顔",
    "example": "the front part of a person's head, the surface of a thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 250,
    "word": "hope",
    "meaning": "望む",
    "example": "a feeling of expectation, to want something to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 251,
    "word": "idea",
    "meaning": "アイデア",
    "example": "a thought, suggestion, opinion or plan",
    "exampleJP": "（定義）"
  },
  {
    "id": 252,
    "word": "cost",
    "meaning": "費用",
    "example": "the price of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 253,
    "word": "less",
    "meaning": "より少ない",
    "example": "not so much, a smaller amount of",
    "exampleJP": "（定義）"
  },
  {
    "id": 254,
    "word": "room",
    "meaning": "部屋",
    "example": "a space that can be occupied which has its own floor and ceiling",
    "exampleJP": "（定義）"
  },
  {
    "id": 255,
    "word": "until",
    "meaning": "まで",
    "example": "up to, to indicate the point in time when a particular situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 256,
    "word": "reason",
    "meaning": "理由",
    "example": "a cause for an action or event",
    "exampleJP": "（定義）"
  },
  {
    "id": 257,
    "word": "form",
    "meaning": "形",
    "example": "a type or kind of something, the visible shape, style",
    "exampleJP": "（定義）"
  },
  {
    "id": 258,
    "word": "spend",
    "meaning": "費やす",
    "example": "to use money to pay for something",
    "exampleJP": "（定義）"
  },
  {
    "id": 259,
    "word": "head",
    "meaning": "頭",
    "example": "the upper part of the body",
    "exampleJP": "（定義）"
  },
  {
    "id": 260,
    "word": "car",
    "meaning": "車",
    "example": "a vehicle with four wheels and engine that can carry things",
    "exampleJP": "（定義）"
  },
  {
    "id": 261,
    "word": "learn",
    "meaning": "学ぶ",
    "example": "to acquire knowledge by study or experience",
    "exampleJP": "（定義）"
  },
  {
    "id": 262,
    "word": "level",
    "meaning": "高さ",
    "example": "a specific height or line",
    "exampleJP": "（定義）"
  },
  {
    "id": 263,
    "word": "person",
    "meaning": "人",
    "example": "a human being",
    "exampleJP": "（定義）"
  },
  {
    "id": 264,
    "word": "experience",
    "meaning": "経験",
    "example": "the act of having things happen to you",
    "exampleJP": "（定義）"
  },
  {
    "id": 265,
    "word": "once",
    "meaning": "一度",
    "example": "one time only",
    "exampleJP": "（定義）"
  },
  {
    "id": 266,
    "word": "member",
    "meaning": "メンバー",
    "example": "a person or country belonging to a group or team",
    "exampleJP": "（定義）"
  },
  {
    "id": 267,
    "word": "enough",
    "meaning": "十分",
    "example": "equal to what is needed, as much as required",
    "exampleJP": "（定義）"
  },
  {
    "id": 268,
    "word": "bad",
    "meaning": "悪い",
    "example": "low or poor in quality, not correct or proper",
    "exampleJP": "（定義）"
  },
  {
    "id": 269,
    "word": "city",
    "meaning": "都市",
    "example": "many people living in a place larger than a town",
    "exampleJP": "（定義）"
  },
  {
    "id": 270,
    "word": "night",
    "meaning": "夜",
    "example": "the period of time of darkness between sunset and sunrise",
    "exampleJP": "（定義）"
  },
  {
    "id": 271,
    "word": "able",
    "meaning": "できる",
    "example": "having the power, skill, money, or means to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 272,
    "word": "support",
    "meaning": "支える",
    "example": "to give assistance to",
    "exampleJP": "（定義）"
  },
  {
    "id": 273,
    "word": "whether",
    "meaning": "～かどうか",
    "example": "expressing a doubt between alternatives",
    "exampleJP": "（定義）"
  },
  {
    "id": 274,
    "word": "line",
    "meaning": "線",
    "example": "a long narrow mark or band on a surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 275,
    "word": "present",
    "meaning": "現在",
    "example": "existing or happening now, not in the past or future",
    "exampleJP": "（定義）"
  },
  {
    "id": 276,
    "word": "side",
    "meaning": "端",
    "example": "a position or direction that is away from the center",
    "exampleJP": "（定義）"
  },
  {
    "id": 277,
    "word": "quite",
    "meaning": "かなり",
    "example": "to a very large degree, very",
    "exampleJP": "（定義）"
  },
  {
    "id": 278,
    "word": "although",
    "meaning": "だけれども",
    "example": "despite the fact that, however,",
    "exampleJP": "（定義）"
  },
  {
    "id": 279,
    "word": "sure",
    "meaning": "確信",
    "example": "completely confident of being right, not having any doubt",
    "exampleJP": "（定義）"
  },
  {
    "id": 280,
    "word": "term",
    "meaning": "用語",
    "example": "a word or phrase that describes something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 281,
    "word": "least",
    "meaning": "最小",
    "example": "smallest in amount, extent or degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 282,
    "word": "age",
    "meaning": "年齢",
    "example": "the amount of time a person has lived",
    "exampleJP": "（定義）"
  },
  {
    "id": 283,
    "word": "low",
    "meaning": "低い",
    "example": "not rising or extending upward",
    "exampleJP": "（定義）"
  },
  {
    "id": 284,
    "word": "speak",
    "meaning": "話す",
    "example": "to use words to tell information or express thoughts",
    "exampleJP": "（定義）"
  },
  {
    "id": 285,
    "word": "within",
    "meaning": "以内に",
    "example": "inside something",
    "exampleJP": "（定義）"
  },
  {
    "id": 286,
    "word": "process",
    "meaning": "過程",
    "example": "a series of actions that produce achievement",
    "exampleJP": "（定義）"
  },
  {
    "id": 287,
    "word": "public",
    "meaning": "公共",
    "example": "concerning or affecting all or most of the people in a group",
    "exampleJP": "（定義）"
  },
  {
    "id": 288,
    "word": "often",
    "meaning": "しばしば",
    "example": "many times, frequently, on many occasions",
    "exampleJP": "（定義）"
  },
  {
    "id": 289,
    "word": "train",
    "meaning": "電車",
    "example": "a group of connected vehicles traveling on railways",
    "exampleJP": "（定義）"
  },
  {
    "id": 290,
    "word": "possible",
    "meaning": "可能性",
    "example": "to be able to be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 291,
    "word": "actually",
    "meaning": "実際",
    "example": "used when you are saying what is the truth of a situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 292,
    "word": "rather",
    "meaning": "やや、割に",
    "example": "to a certain extent",
    "exampleJP": "（定義）"
  },
  {
    "id": 293,
    "word": "view",
    "meaning": "見解",
    "example": "an opinion or way of thinking",
    "exampleJP": "（定義）"
  },
  {
    "id": 294,
    "word": "together",
    "meaning": "一緒に",
    "example": "to be with each other or in one group",
    "exampleJP": "（定義）"
  },
  {
    "id": 295,
    "word": "consider",
    "meaning": "よく考える",
    "example": "to think about carefully",
    "exampleJP": "（定義）"
  },
  {
    "id": 296,
    "word": "price",
    "meaning": "価格",
    "example": "the amount of money that you pay for something or that something costs",
    "exampleJP": "（定義）"
  },
  {
    "id": 297,
    "word": "parent",
    "meaning": "親",
    "example": "a person who is a father or mother",
    "exampleJP": "（定義）"
  },
  {
    "id": 298,
    "word": "hard",
    "meaning": "固い",
    "example": "something that is firm or difficult to bend",
    "exampleJP": "（定義）"
  },
  {
    "id": 299,
    "word": "party",
    "meaning": "政党",
    "example": "an organization of people who have the same political beliefs",
    "exampleJP": "（定義）"
  },
  {
    "id": 300,
    "word": "local",
    "meaning": "地方の",
    "example": "relating or restricted to a particular area, city, or town",
    "exampleJP": "（定義）"
  },
  {
    "id": 301,
    "word": "control",
    "meaning": "操作する",
    "example": "to direct or influence the behavior of something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 302,
    "word": "already",
    "meaning": "すでに",
    "example": "before this time",
    "exampleJP": "（定義）"
  },
  {
    "id": 303,
    "word": "concern",
    "meaning": "心配する",
    "example": "a feeling of worry or anxiety",
    "exampleJP": "（定義）"
  },
  {
    "id": 304,
    "word": "product",
    "meaning": "製品、生産物",
    "example": "something that is made or grown to be sold or used",
    "exampleJP": "（定義）"
  },
  {
    "id": 305,
    "word": "lose",
    "meaning": "失う",
    "example": "to be unable to find something you once had",
    "exampleJP": "（定義）"
  },
  {
    "id": 306,
    "word": "story",
    "meaning": "物語",
    "example": "a description of how something happened",
    "exampleJP": "（定義）"
  },
  {
    "id": 307,
    "word": "almost",
    "meaning": "ほとんど",
    "example": "only a little less than, nearly, not quite",
    "exampleJP": "（定義）"
  },
  {
    "id": 308,
    "word": "continue",
    "meaning": "続ける",
    "example": "to do something without stopping",
    "exampleJP": "（定義）"
  },
  {
    "id": 309,
    "word": "stand",
    "meaning": "立つ",
    "example": "to be in an upright position supported by on your feet",
    "exampleJP": "（定義）"
  },
  {
    "id": 310,
    "word": "whole",
    "meaning": "全体",
    "example": "complete or full, all of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 311,
    "word": "yet",
    "meaning": "まだ",
    "example": "until now, up until the present",
    "exampleJP": "（定義）"
  },
  {
    "id": 312,
    "word": "rate",
    "meaning": "速度、率",
    "example": "the measure of speed or frequency over a particular period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 313,
    "word": "care",
    "meaning": "注意",
    "example": "effort made to do something correctly or well",
    "exampleJP": "（定義）"
  },
  {
    "id": 314,
    "word": "expect",
    "meaning": "期待する",
    "example": "to be regarded as likely to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 315,
    "word": "effect",
    "meaning": "効果",
    "example": "a change or results of something being done",
    "exampleJP": "（定義）"
  },
  {
    "id": 316,
    "word": "sort",
    "meaning": "一部",
    "example": "a group of people or things that have some shared quality",
    "exampleJP": "（定義）"
  },
  {
    "id": 317,
    "word": "ever",
    "meaning": "今までに",
    "example": "at any time, at all times",
    "exampleJP": "（定義）"
  },
  {
    "id": 318,
    "word": "anything",
    "meaning": "何でも",
    "example": "a thing of any kind, used to refer to a thing, no matter what",
    "exampleJP": "（定義）"
  },
  {
    "id": 319,
    "word": "cause",
    "meaning": "要因",
    "example": "something that produces an effect",
    "exampleJP": "（定義）"
  },
  {
    "id": 320,
    "word": "fall",
    "meaning": "落ちる",
    "example": "to come or go down from a higher to a lower place",
    "exampleJP": "（定義）"
  },
  {
    "id": 321,
    "word": "deal",
    "meaning": "取引",
    "example": "to trade or do business with someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 322,
    "word": "water",
    "meaning": "水",
    "example": "the clear liquid which forms the seas, rivers and rain",
    "exampleJP": "（定義）"
  },
  {
    "id": 323,
    "word": "send",
    "meaning": "送る",
    "example": "to cause to go to another destination",
    "exampleJP": "（定義）"
  },
  {
    "id": 324,
    "word": "allow",
    "meaning": "許可する",
    "example": "to permit or treat as acceptable",
    "exampleJP": "（定義）"
  },
  {
    "id": 325,
    "word": "soon",
    "meaning": "すぐに",
    "example": "at a time not long from now",
    "exampleJP": "（定義）"
  },
  {
    "id": 326,
    "word": "watch",
    "meaning": "見る",
    "example": "to pay attention to what is happening",
    "exampleJP": "（定義）"
  },
  {
    "id": 327,
    "word": "base",
    "meaning": "土台",
    "example": "the bottom or lowest part of something : the part on which something rests or is supported",
    "exampleJP": "（定義）"
  },
  {
    "id": 328,
    "word": "probably",
    "meaning": "おそらく",
    "example": "used to mean that something is very likely",
    "exampleJP": "（定義）"
  },
  {
    "id": 329,
    "word": "suggest",
    "meaning": "提案する",
    "example": "to mention something as a possible thing to be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 330,
    "word": "past",
    "meaning": "過去",
    "example": "a time before the present",
    "exampleJP": "（定義）"
  },
  {
    "id": 331,
    "word": "power",
    "meaning": "力",
    "example": "the ability, capacity or right to control things",
    "exampleJP": "（定義）"
  },
  {
    "id": 332,
    "word": "test",
    "meaning": "テスト",
    "example": "a set of questions designed to measure a person's ability",
    "exampleJP": "（定義）"
  },
  {
    "id": 333,
    "word": "visit",
    "meaning": "訪問する",
    "example": "to go somewhere to spend time with",
    "exampleJP": "（定義）"
  },
  {
    "id": 334,
    "word": "center",
    "meaning": "中央",
    "example": "the middle point or part",
    "exampleJP": "（定義）"
  },
  {
    "id": 335,
    "word": "grow",
    "meaning": "育つ",
    "example": "to become larger",
    "exampleJP": "（定義）"
  },
  {
    "id": 336,
    "word": "nothing",
    "meaning": "無",
    "example": "not anything, no a single thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 337,
    "word": "return",
    "meaning": "戻る",
    "example": "to come back to a place again",
    "exampleJP": "（定義）"
  },
  {
    "id": 338,
    "word": "mother",
    "meaning": "母",
    "example": "a female who has a child or children",
    "exampleJP": "（定義）"
  },
  {
    "id": 339,
    "word": "walk",
    "meaning": "歩く",
    "example": "to move with your legs, to go on foot",
    "exampleJP": "（定義）"
  },
  {
    "id": 340,
    "word": "matter",
    "meaning": "物質",
    "example": "the physical substance things are made of",
    "exampleJP": "（定義）"
  },
  {
    "id": 341,
    "word": "mind",
    "meaning": "心",
    "example": "the part of person that enables us to think, feel, and reason",
    "exampleJP": "（定義）"
  },
  {
    "id": 342,
    "word": "value",
    "meaning": "価値",
    "example": "the amount of money something is worth",
    "exampleJP": "（定義）"
  },
  {
    "id": 343,
    "word": "office",
    "meaning": "事務所",
    "example": "a building of set of rooms used to do business or professional activities",
    "exampleJP": "（定義）"
  },
  {
    "id": 344,
    "word": "record",
    "meaning": "記録",
    "example": "an official piece of evidence or document about past events",
    "exampleJP": "（定義）"
  },
  {
    "id": 345,
    "word": "stay",
    "meaning": "とどまる",
    "example": "to continue to be in the same place;  remain",
    "exampleJP": "（定義）"
  },
  {
    "id": 346,
    "word": "force",
    "meaning": "強いる",
    "example": "to use physical strength, power, or energy used on something",
    "exampleJP": "（定義）"
  },
  {
    "id": 347,
    "word": "stop",
    "meaning": "止まる",
    "example": "to not move or come to an end",
    "exampleJP": "（定義）"
  },
  {
    "id": 348,
    "word": "several",
    "meaning": "数個の",
    "example": "more than two but not many",
    "exampleJP": "（定義）"
  },
  {
    "id": 349,
    "word": "light",
    "meaning": "光、明かり",
    "example": "the form of energy that makes things visible",
    "exampleJP": "（定義）"
  },
  {
    "id": 350,
    "word": "develop",
    "meaning": "発展させる",
    "example": "to cause to grow or bigger or more advanced",
    "exampleJP": "（定義）"
  },
  {
    "id": 351,
    "word": "remember",
    "meaning": "思い出す",
    "example": "to bring a previous image or idea to your mind",
    "exampleJP": "（定義）"
  },
  {
    "id": 352,
    "word": "bit",
    "meaning": "少し",
    "example": "a small piece of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 353,
    "word": "share",
    "meaning": "共有する",
    "example": "to have or use something with others",
    "exampleJP": "（定義）"
  },
  {
    "id": 354,
    "word": "real",
    "meaning": "本当の",
    "example": "actually existing or happening, not imagined or supposed",
    "exampleJP": "（定義）"
  },
  {
    "id": 355,
    "word": "answer",
    "meaning": "答え",
    "example": "a reaction to a question someone asks",
    "exampleJP": "（定義）"
  },
  {
    "id": 356,
    "word": "sit",
    "meaning": "座る",
    "example": "to be in a resting position on a chair or couch",
    "exampleJP": "（定義）"
  },
  {
    "id": 357,
    "word": "figure",
    "meaning": "図",
    "example": "a an amount that is expressed in numbers",
    "exampleJP": "（定義）"
  },
  {
    "id": 358,
    "word": "letter",
    "meaning": "文字",
    "example": "a written, typed or printed message",
    "exampleJP": "（定義）"
  },
  {
    "id": 359,
    "word": "decide",
    "meaning": "決める",
    "example": "to make a choice about something or choose after thinking",
    "exampleJP": "（定義）"
  },
  {
    "id": 360,
    "word": "language",
    "meaning": "言語",
    "example": "the system of words or signs that people use to express thoughts and feelings to each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 361,
    "word": "subject",
    "meaning": "主題",
    "example": "the thing being discussed or described",
    "exampleJP": "（定義）"
  },
  {
    "id": 362,
    "word": "class",
    "meaning": "クラス",
    "example": "a group of students who often meet and are taught together",
    "exampleJP": "（定義）"
  },
  {
    "id": 363,
    "word": "development",
    "meaning": "開発",
    "example": "when someone or something grows or changes and becomes more advanced",
    "exampleJP": "（定義）"
  },
  {
    "id": 364,
    "word": "town",
    "meaning": "町",
    "example": "a place people live, larger than a village, smaller than a city",
    "exampleJP": "（定義）"
  },
  {
    "id": 365,
    "word": "half",
    "meaning": "半分",
    "example": "one of two equal parts something can be divided into",
    "exampleJP": "（定義）"
  },
  {
    "id": 366,
    "word": "minute",
    "meaning": "分",
    "example": "a period of time equal to 60 seconds",
    "exampleJP": "（定義）"
  },
  {
    "id": 367,
    "word": "food",
    "meaning": "食べ物",
    "example": "the things that people and animals eat",
    "exampleJP": "（定義）"
  },
  {
    "id": 368,
    "word": "break",
    "meaning": "壊す",
    "example": "to separate into pieces",
    "exampleJP": "（定義）"
  },
  {
    "id": 369,
    "word": "clear",
    "meaning": "明らかに",
    "example": "very obvious or easy to perceive",
    "exampleJP": "（定義）"
  },
  {
    "id": 370,
    "word": "future",
    "meaning": "未来",
    "example": "the period of time coming after the present",
    "exampleJP": "（定義）"
  },
  {
    "id": 371,
    "word": "either",
    "meaning": "どちらか",
    "example": "one or the other of two",
    "exampleJP": "（定義）"
  },
  {
    "id": 372,
    "word": "ago",
    "meaning": "以前に",
    "example": "in the past",
    "exampleJP": "（定義）"
  },
  {
    "id": 373,
    "word": "per",
    "meaning": "～につき",
    "example": "for each one, by means of, as directed by or stated in",
    "exampleJP": "（定義）"
  },
  {
    "id": 374,
    "word": "remain",
    "meaning": "残る",
    "example": "to be left behind, to continue to exist",
    "exampleJP": "（定義）"
  },
  {
    "id": 375,
    "word": "top",
    "meaning": "最上部",
    "example": "the highest part, point, or level of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 376,
    "word": "among",
    "meaning": "～の間で",
    "example": "situated centrally, in relation to several things",
    "exampleJP": "（定義）"
  },
  {
    "id": 377,
    "word": "win",
    "meaning": "勝つ",
    "example": "to achieve victory in a fight or game",
    "exampleJP": "（定義）"
  },
  {
    "id": 378,
    "word": "color",
    "meaning": "色",
    "example": "a quality such as red, blue, green, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 379,
    "word": "involve",
    "meaning": "巻き込む",
    "example": "to have or include in a part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 380,
    "word": "reach",
    "meaning": "届く",
    "example": "to come to or arrive at a goal or destination",
    "exampleJP": "（定義）"
  },
  {
    "id": 381,
    "word": "social",
    "meaning": "社会の",
    "example": "involving activities among people",
    "exampleJP": "（定義）"
  },
  {
    "id": 382,
    "word": "period",
    "meaning": "期間",
    "example": "a length or portion of time during a series of events",
    "exampleJP": "（定義）"
  },
  {
    "id": 383,
    "word": "across",
    "meaning": "横切って",
    "example": "from one side to the other of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 384,
    "word": "note",
    "meaning": "メモ",
    "example": "a brief, short record of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 385,
    "word": "history",
    "meaning": "歴史",
    "example": "the study of past event",
    "exampleJP": "（定義）"
  },
  {
    "id": 386,
    "word": "create",
    "meaning": "作る",
    "example": "to make, cause, or bring into existence",
    "exampleJP": "（定義）"
  },
  {
    "id": 387,
    "word": "drive",
    "meaning": "運転する",
    "example": "to control the movement of a car",
    "exampleJP": "（定義）"
  },
  {
    "id": 388,
    "word": "along",
    "meaning": "沿って",
    "example": "at a point on something",
    "exampleJP": "（定義）"
  },
  {
    "id": 389,
    "word": "type",
    "meaning": "型",
    "example": "a particular category of people or objects with a common characteristic",
    "exampleJP": "（定義）"
  },
  {
    "id": 390,
    "word": "sound",
    "meaning": "音",
    "example": "something that is heard",
    "exampleJP": "（定義）"
  },
  {
    "id": 391,
    "word": "eye",
    "meaning": "目",
    "example": "the part of the body that you see with",
    "exampleJP": "（定義）"
  },
  {
    "id": 392,
    "word": "music",
    "meaning": "音楽",
    "example": "the art of making sounds that are sung or played",
    "exampleJP": "（定義）"
  },
  {
    "id": 393,
    "word": "game",
    "meaning": "ゲーム、競技",
    "example": "one of the games that are part of a larger contest",
    "exampleJP": "（定義）"
  },
  {
    "id": 394,
    "word": "political",
    "meaning": "政治の",
    "example": "relating to government or public affairs",
    "exampleJP": "（定義）"
  },
  {
    "id": 395,
    "word": "free",
    "meaning": "自由",
    "example": "without control by others",
    "exampleJP": "（定義）"
  },
  {
    "id": 396,
    "word": "receive",
    "meaning": "受け取る",
    "example": "to get or be presented with something",
    "exampleJP": "（定義）"
  },
  {
    "id": 397,
    "word": "moment",
    "meaning": "瞬間",
    "example": "a very short or brief period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 398,
    "word": "sale",
    "meaning": "販売",
    "example": "the act of selling something or exchanging for money",
    "exampleJP": "（定義）"
  },
  {
    "id": 399,
    "word": "policy",
    "meaning": "政策",
    "example": "a course of action proposed by an organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 400,
    "word": "further",
    "meaning": "さらに",
    "example": "at a more distant place than here",
    "exampleJP": "（定義）"
  },
  {
    "id": 401,
    "word": "body",
    "meaning": "体",
    "example": "a person's physical self",
    "exampleJP": "（定義）"
  },
  {
    "id": 402,
    "word": "require",
    "meaning": "必要とする",
    "example": "to need something, to make it necessary",
    "exampleJP": "（定義）"
  },
  {
    "id": 403,
    "word": "wait",
    "meaning": "待つ",
    "example": "to stay or remain until an expected event happens",
    "exampleJP": "（定義）"
  },
  {
    "id": 404,
    "word": "general",
    "meaning": "一般的な",
    "example": "widespread, normal or usual",
    "exampleJP": "（定義）"
  },
  {
    "id": 405,
    "word": "appear",
    "meaning": "現れる",
    "example": "come into sight",
    "exampleJP": "（定義）"
  },
  {
    "id": 406,
    "word": "toward",
    "meaning": "向かって",
    "example": "in the direction of",
    "exampleJP": "（定義）"
  },
  {
    "id": 407,
    "word": "team",
    "meaning": "チーム",
    "example": "a group of people who compete in a sport, game",
    "exampleJP": "（定義）"
  },
  {
    "id": 408,
    "word": "easy",
    "meaning": "簡単な",
    "example": "not hard to do, not difficult",
    "exampleJP": "（定義）"
  },
  {
    "id": 409,
    "word": "individual",
    "meaning": "個人の",
    "example": "existing as just one member",
    "exampleJP": "（定義）"
  },
  {
    "id": 410,
    "word": "full",
    "meaning": "いっぱい",
    "example": "containing or holding as much as possible",
    "exampleJP": "（定義）"
  },
  {
    "id": 411,
    "word": "black",
    "meaning": "黒い",
    "example": "having the very dark color of coal or the night sky",
    "exampleJP": "（定義）"
  },
  {
    "id": 412,
    "word": "sense",
    "meaning": "感覚",
    "example": "one of our natural abilities for receiving information",
    "exampleJP": "（定義）"
  },
  {
    "id": 413,
    "word": "perhaps",
    "meaning": "ひょっとして",
    "example": "possibly but not certainly, maybe",
    "exampleJP": "（定義）"
  },
  {
    "id": 414,
    "word": "add",
    "meaning": "加える",
    "example": "to put something together with another thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 415,
    "word": "rule",
    "meaning": "規則",
    "example": "something that is not allowed in some situations",
    "exampleJP": "（定義）"
  },
  {
    "id": 416,
    "word": "pass",
    "meaning": "通る",
    "example": "to move past something",
    "exampleJP": "（定義）"
  },
  {
    "id": 417,
    "word": "produce",
    "meaning": "生産する",
    "example": "to use machines to make something from raw materials",
    "exampleJP": "（定義）"
  },
  {
    "id": 418,
    "word": "sell",
    "meaning": "売る",
    "example": "to exchange (something) for money",
    "exampleJP": "（定義）"
  },
  {
    "id": 419,
    "word": "short",
    "meaning": "短い",
    "example": "a small distance from one end to the other",
    "exampleJP": "（定義）"
  },
  {
    "id": 420,
    "word": "agree",
    "meaning": "賛成する",
    "example": "to  the same opinion about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 421,
    "word": "law",
    "meaning": "法律",
    "example": "the system or rules made by the government",
    "exampleJP": "（定義）"
  },
  {
    "id": 422,
    "word": "everything",
    "meaning": "すべて",
    "example": "every thing there is or all that exists",
    "exampleJP": "（定義）"
  },
  {
    "id": 423,
    "word": "research",
    "meaning": "調査研究",
    "example": "careful study to find and report new knowledge",
    "exampleJP": "（定義）"
  },
  {
    "id": 424,
    "word": "cover",
    "meaning": "覆う",
    "example": "put something over or on top of something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 425,
    "word": "paper",
    "meaning": "紙",
    "example": "the material that is used in the form of thin sheets for writing",
    "exampleJP": "（定義）"
  },
  {
    "id": 426,
    "word": "position",
    "meaning": "位置",
    "example": "the place something is located in",
    "exampleJP": "（定義）"
  },
  {
    "id": 427,
    "word": "near",
    "meaning": "近く",
    "example": "close to something",
    "exampleJP": "（定義）"
  },
  {
    "id": 428,
    "word": "human",
    "meaning": "人",
    "example": "relating to or characteristic of people",
    "exampleJP": "（定義）"
  },
  {
    "id": 429,
    "word": "computer",
    "meaning": "コンピューター",
    "example": "an electronic machine that can store and process large amounts of information",
    "exampleJP": "（定義）"
  },
  {
    "id": 430,
    "word": "situation",
    "meaning": "状況",
    "example": "a condition, location or position",
    "exampleJP": "（定義）"
  },
  {
    "id": 431,
    "word": "staff",
    "meaning": "スタッフ",
    "example": "a group of people who work for an organization or business",
    "exampleJP": "（定義）"
  },
  {
    "id": 432,
    "word": "activity",
    "meaning": "活動",
    "example": "something which you do for enjoyment; action",
    "exampleJP": "（定義）"
  },
  {
    "id": 433,
    "word": "film",
    "meaning": "フィルム",
    "example": "movie or a special material that is used for taking photographs",
    "exampleJP": "（定義）"
  },
  {
    "id": 434,
    "word": "morning",
    "meaning": "朝",
    "example": "the early part of the day",
    "exampleJP": "（定義）"
  },
  {
    "id": 435,
    "word": "war",
    "meaning": "戦争",
    "example": "a period of fighting or conflict between countries,",
    "exampleJP": "（定義）"
  },
  {
    "id": 436,
    "word": "account",
    "meaning": "報告",
    "example": "a story or report about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 437,
    "word": "shop",
    "meaning": "店",
    "example": "a building or room where goods and services are sold",
    "exampleJP": "（定義）"
  },
  {
    "id": 438,
    "word": "major",
    "meaning": "主要な",
    "example": "important, serious,  or large in number",
    "exampleJP": "（定義）"
  },
  {
    "id": 439,
    "word": "someone",
    "meaning": "だれか",
    "example": "some person;  somebody",
    "exampleJP": "（定義）"
  },
  {
    "id": 440,
    "word": "above",
    "meaning": "～の上",
    "example": "in a higher place",
    "exampleJP": "（定義）"
  },
  {
    "id": 441,
    "word": "design",
    "meaning": "設計する",
    "example": "to make something for a specific use or purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 442,
    "word": "event",
    "meaning": "行事",
    "example": "something especially something important or notable that happens",
    "exampleJP": "（定義）"
  },
  {
    "id": 443,
    "word": "special",
    "meaning": "特別",
    "example": "different from what is usual, better or greater than normal",
    "exampleJP": "（定義）"
  },
  {
    "id": 444,
    "word": "sometimes",
    "meaning": "ときどき",
    "example": "occasionally; only at certain times,",
    "exampleJP": "（定義）"
  },
  {
    "id": 445,
    "word": "condition",
    "meaning": "状況",
    "example": "a way or quality of living or existing",
    "exampleJP": "（定義）"
  },
  {
    "id": 446,
    "word": "carry",
    "meaning": "運ぶ",
    "example": "to move something from one place to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 447,
    "word": "choose",
    "meaning": "選ぶ",
    "example": "to decide that a particular person or thing is the one that you want",
    "exampleJP": "（定義）"
  },
  {
    "id": 448,
    "word": "father",
    "meaning": "父親",
    "example": "a male parent",
    "exampleJP": "（定義）"
  },
  {
    "id": 449,
    "word": "decision",
    "meaning": "決断",
    "example": "a choice that you make about something after thinking about it",
    "exampleJP": "（定義）"
  },
  {
    "id": 450,
    "word": "table",
    "meaning": "テーブル",
    "example": "a piece of furniture with a flat top and legs",
    "exampleJP": "（定義）"
  },
  {
    "id": 451,
    "word": "certain",
    "meaning": "確かな",
    "example": "not having any doubt about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 452,
    "word": "forward",
    "meaning": "前方の",
    "example": "toward the front : to or toward what is ahead or in front",
    "exampleJP": "（定義）"
  },
  {
    "id": 453,
    "word": "main",
    "meaning": "主要な",
    "example": "most important",
    "exampleJP": "（定義）"
  },
  {
    "id": 454,
    "word": "die",
    "meaning": "死ぬ",
    "example": "to stop living or end life",
    "exampleJP": "（定義）"
  },
  {
    "id": 455,
    "word": "bear",
    "meaning": "耐える、負う",
    "example": "to accept or endure difficulties",
    "exampleJP": "（定義）"
  },
  {
    "id": 456,
    "word": "cut",
    "meaning": "切る",
    "example": "to use a sharp tool or object to open or divide something",
    "exampleJP": "（定義）"
  },
  {
    "id": 457,
    "word": "describe",
    "meaning": "言い表す",
    "example": "to tell someone the appearance, sound or smell of",
    "exampleJP": "（定義）"
  },
  {
    "id": 458,
    "word": "himself",
    "meaning": "彼自身",
    "example": "the reflexive form of the pronoun 'he'",
    "exampleJP": "（定義）"
  },
  {
    "id": 459,
    "word": "available",
    "meaning": "利用できる",
    "example": "when something is there to be used easily",
    "exampleJP": "（定義）"
  },
  {
    "id": 460,
    "word": "especially",
    "meaning": "特に",
    "example": "more than usually;  very, extremely",
    "exampleJP": "（定義）"
  },
  {
    "id": 461,
    "word": "strong",
    "meaning": "強い",
    "example": "having physical power or strength",
    "exampleJP": "（定義）"
  },
  {
    "id": 462,
    "word": "rise",
    "meaning": "昇る",
    "example": "to move from a lower position to a higher one",
    "exampleJP": "（定義）"
  },
  {
    "id": 463,
    "word": "girl",
    "meaning": "少女",
    "example": "a female child,  a young woman",
    "exampleJP": "（定義）"
  },
  {
    "id": 464,
    "word": "maybe",
    "meaning": "～かもしれない",
    "example": "possibly but not certainly : perhaps",
    "exampleJP": "（定義）"
  },
  {
    "id": 465,
    "word": "community",
    "meaning": "社会",
    "example": "a group of people who share a common idea or area",
    "exampleJP": "（定義）"
  },
  {
    "id": 466,
    "word": "else",
    "meaning": "他の",
    "example": "in a different or additional manner or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 467,
    "word": "particular",
    "meaning": "特定の",
    "example": "used to single out an individual member",
    "exampleJP": "（定義）"
  },
  {
    "id": 468,
    "word": "role",
    "meaning": "役",
    "example": "the character played by an actor",
    "exampleJP": "（定義）"
  },
  {
    "id": 469,
    "word": "join",
    "meaning": "合わせる",
    "example": "to put or bring (two or more things) together",
    "exampleJP": "（定義）"
  },
  {
    "id": 470,
    "word": "difficult",
    "meaning": "難しい",
    "example": "not easy : requiring much work or skill to do or make",
    "exampleJP": "（定義）"
  },
  {
    "id": 471,
    "word": "please",
    "meaning": "どうか",
    "example": "used to ask for something in a polite way",
    "exampleJP": "（定義）"
  },
  {
    "id": 472,
    "word": "detail",
    "meaning": "詳細",
    "example": "a small part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 473,
    "word": "difference",
    "meaning": "違い",
    "example": "a quality that is unlike something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 474,
    "word": "action",
    "meaning": "行動",
    "example": "something that a person does",
    "exampleJP": "（定義）"
  },
  {
    "id": 475,
    "word": "health",
    "meaning": "健康",
    "example": "the condition of being well or free from disease",
    "exampleJP": "（定義）"
  },
  {
    "id": 476,
    "word": "eat",
    "meaning": "食べる",
    "example": "to take food into your mouth and swallow it",
    "exampleJP": "（定義）"
  },
  {
    "id": 477,
    "word": "step",
    "meaning": "一歩歩む",
    "example": "moving by lifting  a foot and putting it down in a different place",
    "exampleJP": "（定義）"
  },
  {
    "id": 478,
    "word": "true",
    "meaning": "本当の",
    "example": "agreeing with the facts, not false, real or actual",
    "exampleJP": "（定義）"
  },
  {
    "id": 479,
    "word": "phone",
    "meaning": "電話",
    "example": "a communication system that is used to talk to someone who is in another place",
    "exampleJP": "（定義）"
  },
  {
    "id": 480,
    "word": "themselves",
    "meaning": "彼ら自身",
    "example": "the reflexive form of the pronoun 'they'",
    "exampleJP": "（定義）"
  },
  {
    "id": 481,
    "word": "draw",
    "meaning": "描く",
    "example": "to produce by making lines on a paper",
    "exampleJP": "（定義）"
  },
  {
    "id": 482,
    "word": "white",
    "meaning": "白",
    "example": "having the color of snow, to be light or pale in color",
    "exampleJP": "（定義）"
  },
  {
    "id": 483,
    "word": "date",
    "meaning": "日付",
    "example": "a particular day of a month or year",
    "exampleJP": "（定義）"
  },
  {
    "id": 484,
    "word": "practice",
    "meaning": "練習する",
    "example": "to do something again and again in order to become better at it",
    "exampleJP": "（定義）"
  },
  {
    "id": 485,
    "word": "model",
    "meaning": "模型",
    "example": "a usually small copy of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 486,
    "word": "raise",
    "meaning": "上げる",
    "example": "to lift or move something to a higher position",
    "exampleJP": "（定義）"
  },
  {
    "id": 487,
    "word": "customer",
    "meaning": "顧客",
    "example": "someone who buys goods or services from a business",
    "exampleJP": "（定義）"
  },
  {
    "id": 488,
    "word": "front",
    "meaning": "前",
    "example": "the forward part of an object",
    "exampleJP": "（定義）"
  },
  {
    "id": 489,
    "word": "explain",
    "meaning": "説明する",
    "example": "to make clear or easy to understand by describing",
    "exampleJP": "（定義）"
  },
  {
    "id": 490,
    "word": "door",
    "meaning": "ドア",
    "example": "a movable entrance to a building or room",
    "exampleJP": "（定義）"
  },
  {
    "id": 491,
    "word": "outside",
    "meaning": "外",
    "example": "an area around or near something such as a building",
    "exampleJP": "（定義）"
  },
  {
    "id": 492,
    "word": "behind",
    "meaning": "後ろに",
    "example": "in or toward the back",
    "exampleJP": "（定義）"
  },
  {
    "id": 493,
    "word": "economic",
    "meaning": "経済の",
    "example": "relating to trade, industry, and money",
    "exampleJP": "（定義）"
  },
  {
    "id": 494,
    "word": "site",
    "meaning": "現場",
    "example": "the place where something is, was, or will be located",
    "exampleJP": "（定義）"
  },
  {
    "id": 495,
    "word": "approach",
    "meaning": "近づく",
    "example": "to get close to reaching something or somewhere",
    "exampleJP": "（定義）"
  },
  {
    "id": 496,
    "word": "teacher",
    "meaning": "教師",
    "example": "someone whose job is to teach in a school, college, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 497,
    "word": "land",
    "meaning": "陸",
    "example": "the solid part of the surface of the Earth",
    "exampleJP": "（定義）"
  },
  {
    "id": 498,
    "word": "charge",
    "meaning": "請求する",
    "example": "to ask for money as a price for a service or goods",
    "exampleJP": "（定義）"
  },
  {
    "id": 499,
    "word": "finally",
    "meaning": "最後に",
    "example": "after a long time or some difficulty;  the last point or idea",
    "exampleJP": "（定義）"
  },
  {
    "id": 500,
    "word": "sign",
    "meaning": "しるし",
    "example": "something which shows that something else exists, is true, or will happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 501,
    "word": "claim",
    "meaning": "主張する",
    "example": "to say something is true when others may not agree",
    "exampleJP": "（定義）"
  },
  {
    "id": 502,
    "word": "relationship",
    "meaning": "関係",
    "example": "a connection between two or more people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 503,
    "word": "travel",
    "meaning": "旅する",
    "example": "to go on a trip or journey : to go to a place and especially one that is far away",
    "exampleJP": "（定義）"
  },
  {
    "id": 504,
    "word": "enjoy",
    "meaning": "楽しむ",
    "example": "to take pleasure in (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 505,
    "word": "death",
    "meaning": "死",
    "example": "the end of life, the fact of dying, being killed",
    "exampleJP": "（定義）"
  },
  {
    "id": 506,
    "word": "nice",
    "meaning": "素晴らしい",
    "example": "giving pleasure or joy : good and enjoyable",
    "exampleJP": "（定義）"
  },
  {
    "id": 507,
    "word": "amount",
    "meaning": "量",
    "example": "a quantity of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 508,
    "word": "improve",
    "meaning": "改善する",
    "example": "to make or to become something better",
    "exampleJP": "（定義）"
  },
  {
    "id": 509,
    "word": "picture",
    "meaning": "写真、絵",
    "example": "a painting, drawing or photograph on paper or screen",
    "exampleJP": "（定義）"
  },
  {
    "id": 510,
    "word": "boy",
    "meaning": "男の子",
    "example": "a male child or youth, a young man",
    "exampleJP": "（定義）"
  },
  {
    "id": 511,
    "word": "regard",
    "meaning": "顧慮する",
    "example": "to care or think about something in a specific way",
    "exampleJP": "（定義）"
  },
  {
    "id": 512,
    "word": "organization",
    "meaning": "組織",
    "example": "an official group of people who work together for the same purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 513,
    "word": "happy",
    "meaning": "幸福な",
    "example": "feeling pleasure and enjoyment because of your life",
    "exampleJP": "（定義）"
  },
  {
    "id": 514,
    "word": "couple",
    "meaning": "一対",
    "example": "two people or things being together",
    "exampleJP": "（定義）"
  },
  {
    "id": 515,
    "word": "act",
    "meaning": "行動する",
    "example": "take action",
    "exampleJP": "（定義）"
  },
  {
    "id": 516,
    "word": "range",
    "meaning": "範囲、幅",
    "example": "the area of variation on a particular scale",
    "exampleJP": "（定義）"
  },
  {
    "id": 517,
    "word": "quality",
    "meaning": "質、品質",
    "example": "how good or bad something is",
    "exampleJP": "（定義）"
  },
  {
    "id": 518,
    "word": "project",
    "meaning": "企画",
    "example": "a planned piece of work for specific purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 519,
    "word": "round",
    "meaning": "丸い",
    "example": "shaped like a circle or ball",
    "exampleJP": "（定義）"
  },
  {
    "id": 520,
    "word": "opportunity",
    "meaning": "機会",
    "example": "an amount of time or a situation in which something can be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 521,
    "word": "road",
    "meaning": "道",
    "example": "a hard flat surface for people or vehicles can use",
    "exampleJP": "（定義）"
  },
  {
    "id": 522,
    "word": "accord",
    "meaning": "合意",
    "example": "a formal or official agreement",
    "exampleJP": "（定義）"
  },
  {
    "id": 523,
    "word": "list",
    "meaning": "リスト",
    "example": "a series of written names, words or numbers",
    "exampleJP": "（定義）"
  },
  {
    "id": 524,
    "word": "wish",
    "meaning": "願う",
    "example": "to want something to be true or to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 525,
    "word": "therefore",
    "meaning": "従って、だから",
    "example": "for that reason or because of that",
    "exampleJP": "（定義）"
  },
  {
    "id": 526,
    "word": "wear",
    "meaning": "着る",
    "example": "to use or have as clothing over part of your body",
    "exampleJP": "（定義）"
  },
  {
    "id": 527,
    "word": "fund",
    "meaning": "資金",
    "example": "a sum of money that is used for a special purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 528,
    "word": "rest",
    "meaning": "休憩",
    "example": "not at work, to have time to relax, sleep or do nothing",
    "exampleJP": "（定義）"
  },
  {
    "id": 529,
    "word": "kid",
    "meaning": "子供",
    "example": "a child or young person",
    "exampleJP": "（定義）"
  },
  {
    "id": 530,
    "word": "industry",
    "meaning": "産業",
    "example": "referring to the making of all products in a given field",
    "exampleJP": "（定義）"
  },
  {
    "id": 531,
    "word": "education",
    "meaning": "教育",
    "example": "the process of giving or receiving instruction",
    "exampleJP": "（定義）"
  },
  {
    "id": 532,
    "word": "measure",
    "meaning": "測る",
    "example": "an amount or degree of something, ascertain in size or degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 533,
    "word": "kill",
    "meaning": "殺す",
    "example": "to cause the death of a person, animal or plant",
    "exampleJP": "（定義）"
  },
  {
    "id": 534,
    "word": "serve",
    "meaning": "供給する、～を出す",
    "example": "to give or provide something to another person",
    "exampleJP": "（定義）"
  },
  {
    "id": 535,
    "word": "likely",
    "meaning": "～しそうだ",
    "example": "used to indicate the chance that something will happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 536,
    "word": "certainly",
    "meaning": "確実な",
    "example": "used to emphasize something and show that there is no doubt about it; used to agree to a request",
    "exampleJP": "（定義）"
  },
  {
    "id": 537,
    "word": "national",
    "meaning": "国の",
    "example": "relating to the whole of a country",
    "exampleJP": "（定義）"
  },
  {
    "id": 538,
    "word": "itself",
    "meaning": "それなり",
    "example": "the reflexive form of the pronoun 'it'",
    "exampleJP": "（定義）"
  },
  {
    "id": 539,
    "word": "teach",
    "meaning": "教える",
    "example": "to instruct or help to learn",
    "exampleJP": "（定義）"
  },
  {
    "id": 540,
    "word": "field",
    "meaning": "野原",
    "example": "an open area of land, especially without trees or buildings",
    "exampleJP": "（定義）"
  },
  {
    "id": 541,
    "word": "security",
    "meaning": "警備",
    "example": "the things that are done to keep someone or something safe",
    "exampleJP": "（定義）"
  },
  {
    "id": 542,
    "word": "air",
    "meaning": "空気",
    "example": "the invisible mixture of gases that we breathe",
    "exampleJP": "（定義）"
  },
  {
    "id": 543,
    "word": "benefit",
    "meaning": "利益、恩恵",
    "example": "a good result or effect, something helpful",
    "exampleJP": "（定義）"
  },
  {
    "id": 544,
    "word": "trade",
    "meaning": "交換する",
    "example": "the activity of buying, selling, or exchanging",
    "exampleJP": "（定義）"
  },
  {
    "id": 545,
    "word": "risk",
    "meaning": "リスク",
    "example": "the possibility that something bad or unpleasant (such as an injury or a loss) will happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 546,
    "word": "news",
    "meaning": "ニュース",
    "example": "new information or a report about something that has happened recently",
    "exampleJP": "（定義）"
  },
  {
    "id": 547,
    "word": "standard",
    "meaning": "基準",
    "example": "a level of quality or achievement that is considered acceptable",
    "exampleJP": "（定義）"
  },
  {
    "id": 548,
    "word": "vote",
    "meaning": "投票する",
    "example": "to make an official choice for or against someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 549,
    "word": "percent",
    "meaning": "㌫",
    "example": "a certain part of a whole",
    "exampleJP": "（定義）"
  },
  {
    "id": 550,
    "word": "focus",
    "meaning": "焦点",
    "example": "the main purpose or center of interest or activity",
    "exampleJP": "（定義）"
  },
  {
    "id": 551,
    "word": "stage",
    "meaning": "段階",
    "example": "a particular point in a process",
    "exampleJP": "（定義）"
  },
  {
    "id": 552,
    "word": "space",
    "meaning": "場所",
    "example": "the amount of an area, room, or surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 553,
    "word": "instead",
    "meaning": "代わり",
    "example": "used to say that one thing is done or is chosen when another is not chosen",
    "exampleJP": "（定義）"
  },
  {
    "id": 554,
    "word": "realize",
    "meaning": "気づく",
    "example": "to understand or become aware of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 555,
    "word": "usually",
    "meaning": "たいてい",
    "example": "in the way that most often happens",
    "exampleJP": "（定義）"
  },
  {
    "id": 556,
    "word": "data",
    "meaning": "データ",
    "example": "facts or information used usually to calculate or analyze",
    "exampleJP": "（定義）"
  },
  {
    "id": 557,
    "word": "single",
    "meaning": "単独",
    "example": "not having or including another, only one",
    "exampleJP": "（定義）"
  },
  {
    "id": 558,
    "word": "address",
    "meaning": "住所",
    "example": "the words and numbers that are used to describe the location of a building and that are written on letters, envelopes, and packages so that they can be mailed to that location",
    "exampleJP": "（定義）"
  },
  {
    "id": 559,
    "word": "performance",
    "meaning": "演技",
    "example": "an activity (such as singing a song or acting in a play) that a person or group does to entertain an audience",
    "exampleJP": "（定義）"
  },
  {
    "id": 560,
    "word": "chance",
    "meaning": "機会",
    "example": "an opportunity to do something;  an amount of time or a situation in which something can be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 561,
    "word": "accept",
    "meaning": "引き受ける",
    "example": "to receive or take something that is offered",
    "exampleJP": "（定義）"
  },
  {
    "id": 562,
    "word": "society",
    "meaning": "社会",
    "example": "a community of people living together",
    "exampleJP": "（定義）"
  },
  {
    "id": 563,
    "word": "technology",
    "meaning": "科学技術、テクノロジー",
    "example": "the use, knowledge of science in industry, engineering",
    "exampleJP": "（定義）"
  },
  {
    "id": 564,
    "word": "mention",
    "meaning": "言及する",
    "example": "to talk about, write about, or refer to (something or someone) especially in a brief way",
    "exampleJP": "（定義）"
  },
  {
    "id": 565,
    "word": "choice",
    "meaning": "選択",
    "example": "the act of choosing : the act of picking or deciding between two or more possibilities",
    "exampleJP": "（定義）"
  },
  {
    "id": 566,
    "word": "save",
    "meaning": "救う",
    "example": "to keep (someone or something) safe : to stop (someone or something) from dying or being hurt, damaged, or lost",
    "exampleJP": "（定義）"
  },
  {
    "id": 567,
    "word": "common",
    "meaning": "一般的な",
    "example": "something that is found or done often",
    "exampleJP": "（定義）"
  },
  {
    "id": 568,
    "word": "culture",
    "meaning": "文化",
    "example": "the beliefs and customs of a particular group",
    "exampleJP": "（定義）"
  },
  {
    "id": 569,
    "word": "total",
    "meaning": "合計",
    "example": "the whole number or amount of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 570,
    "word": "demand",
    "meaning": "需要",
    "example": "forcefully saying that something must be done or given to you",
    "exampleJP": "（定義）"
  },
  {
    "id": 571,
    "word": "material",
    "meaning": "材料",
    "example": "a substance from which a thing is made of",
    "exampleJP": "（定義）"
  },
  {
    "id": 572,
    "word": "limit",
    "meaning": "限度",
    "example": "a point beyond which it is not possible to pass",
    "exampleJP": "（定義）"
  },
  {
    "id": 573,
    "word": "listen",
    "meaning": "聞く",
    "example": "to pay attention to someone or something in order to hear what is being said, sung, played, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 574,
    "word": "due",
    "meaning": "期限",
    "example": "required or expected to happen : expected to be in a particular place at a particular time",
    "exampleJP": "（定義）"
  },
  {
    "id": 575,
    "word": "wrong",
    "meaning": "悪い、間違いの",
    "example": "not agreeing with the facts or truth : incorrect",
    "exampleJP": "（定義）"
  },
  {
    "id": 576,
    "word": "foot",
    "meaning": "足（くるぶしから下）",
    "example": "the part of the leg below ankle",
    "exampleJP": "（定義）"
  },
  {
    "id": 577,
    "word": "effort",
    "meaning": "努力",
    "example": "work done by the mind or body",
    "exampleJP": "（定義）"
  },
  {
    "id": 578,
    "word": "attention",
    "meaning": "注意",
    "example": "an act or power of carefully thinking about",
    "exampleJP": "（定義）"
  },
  {
    "id": 579,
    "word": "upon",
    "meaning": "～の上に",
    "example": "more formal term for \"on\"",
    "exampleJP": "（定義）"
  },
  {
    "id": 580,
    "word": "check",
    "meaning": "確認する",
    "example": "to look at (something) carefully to find mistakes, problems, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 581,
    "word": "complete",
    "meaning": "完璧",
    "example": "having all necessary parts",
    "exampleJP": "（定義）"
  },
  {
    "id": 582,
    "word": "lie",
    "meaning": "横になる",
    "example": "to be in a horizontal or flat position",
    "exampleJP": "（定義）"
  },
  {
    "id": 583,
    "word": "pick",
    "meaning": "選ぶ",
    "example": "to choose or select (someone or something) from a group",
    "exampleJP": "（定義）"
  },
  {
    "id": 584,
    "word": "reduce",
    "meaning": "減らす",
    "example": "to make something smaller in size, amount or number",
    "exampleJP": "（定義）"
  },
  {
    "id": 585,
    "word": "personal",
    "meaning": "個人的な",
    "example": "relating to or belonging to a particular person; someone's private information",
    "exampleJP": "（定義）"
  },
  {
    "id": 586,
    "word": "ground",
    "meaning": "地面",
    "example": "the solid surface of the earth that we stand on",
    "exampleJP": "（定義）"
  },
  {
    "id": 587,
    "word": "animal",
    "meaning": "動物",
    "example": "a living thing that is not a human being or plant",
    "exampleJP": "（定義）"
  },
  {
    "id": 588,
    "word": "arrive",
    "meaning": "到着する",
    "example": "to come to or reach a place after traveling, being sent, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 589,
    "word": "patient",
    "meaning": "忍耐強い",
    "example": "able to remain calm and not become annoyed when waiting for a long time or when dealing with problems or difficult people",
    "exampleJP": "（定義）"
  },
  {
    "id": 590,
    "word": "current",
    "meaning": "現在の",
    "example": "happening or existing now :belonging to or existing in the present time",
    "exampleJP": "（定義）"
  },
  {
    "id": 591,
    "word": "century",
    "meaning": "世紀",
    "example": "a period of 100 years",
    "exampleJP": "（定義）"
  },
  {
    "id": 592,
    "word": "evidence",
    "meaning": "証拠",
    "example": "something that makes you believe that something is true or exists",
    "exampleJP": "（定義）"
  },
  {
    "id": 593,
    "word": "exist",
    "meaning": "存在する",
    "example": "to have actual being or to be real",
    "exampleJP": "（定義）"
  },
  {
    "id": 594,
    "word": "similar",
    "meaning": "似ている",
    "example": "almost the same, alike as something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 595,
    "word": "fight",
    "meaning": "戦う",
    "example": "take part in a battle to defeat an enemy",
    "exampleJP": "（定義）"
  },
  {
    "id": 596,
    "word": "leader",
    "meaning": "リーダー",
    "example": "a person in control of a group, country, or situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 597,
    "word": "fine",
    "meaning": "よい",
    "example": "good, acceptable, or satisfactory",
    "exampleJP": "（定義）"
  },
  {
    "id": 598,
    "word": "street",
    "meaning": "街路",
    "example": "a public road in a city or town",
    "exampleJP": "（定義）"
  },
  {
    "id": 599,
    "word": "former",
    "meaning": "前の",
    "example": "used to say what someone or something was in the past",
    "exampleJP": "（定義）"
  },
  {
    "id": 600,
    "word": "contact",
    "meaning": "接触",
    "example": "the state or condition where two things are touching",
    "exampleJP": "（定義）"
  },
  {
    "id": 601,
    "word": "particularly",
    "meaning": "特に",
    "example": "especially",
    "exampleJP": "（定義）"
  },
  {
    "id": 602,
    "word": "wife",
    "meaning": "妻",
    "example": "a married woman",
    "exampleJP": "（定義）"
  },
  {
    "id": 603,
    "word": "sport",
    "meaning": "スポーツ",
    "example": "a contest or game in which people do certain physical activities according to a specific set of rules and compete against each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 604,
    "word": "prepare",
    "meaning": "用意する",
    "example": "to make something ready for use",
    "exampleJP": "（定義）"
  },
  {
    "id": 605,
    "word": "discuss",
    "meaning": "議論する",
    "example": "to talk about (something) with another person or group",
    "exampleJP": "（定義）"
  },
  {
    "id": 606,
    "word": "response",
    "meaning": "応答",
    "example": "an answer or reaction to something that has been said or done",
    "exampleJP": "（定義）"
  },
  {
    "id": 607,
    "word": "voice",
    "meaning": "声",
    "example": "the sound a person produces with their mouth",
    "exampleJP": "（定義）"
  },
  {
    "id": 608,
    "word": "piece",
    "meaning": "一切れ",
    "example": "a part that is cut or separated from a whole",
    "exampleJP": "（定義）"
  },
  {
    "id": 609,
    "word": "finish",
    "meaning": "終り",
    "example": "to reach the end of (something) : to stop doing (something) because it is completed",
    "exampleJP": "（定義）"
  },
  {
    "id": 610,
    "word": "suppose",
    "meaning": "想定する",
    "example": "to think of something as happening or being true in order to imagine what might happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 611,
    "word": "apply",
    "meaning": "申し込む",
    "example": "to ask formally for something such as a job",
    "exampleJP": "（定義）"
  },
  {
    "id": 612,
    "word": "president",
    "meaning": "大統領",
    "example": "the head of a government",
    "exampleJP": "（定義）"
  },
  {
    "id": 613,
    "word": "fire",
    "meaning": "火",
    "example": "the light, heat and the flame produced by burning something",
    "exampleJP": "（定義）"
  },
  {
    "id": 614,
    "word": "compare",
    "meaning": "比べる",
    "example": "to say that (something) is similar to something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 615,
    "word": "court",
    "meaning": "裁判所",
    "example": "a formal legal meeting place that judges about crimes",
    "exampleJP": "（定義）"
  },
  {
    "id": 616,
    "word": "police",
    "meaning": "警察",
    "example": "the people or the department of people who enforce laws, investigate crimes, and make arrests",
    "exampleJP": "（定義）"
  },
  {
    "id": 617,
    "word": "store",
    "meaning": "店",
    "example": "a building or room where things are sold",
    "exampleJP": "（定義）"
  },
  {
    "id": 618,
    "word": "poor",
    "meaning": "貧しい",
    "example": "having little money or few possessions : not having enough money for the basic things that people need to live properly",
    "exampleJP": "（定義）"
  },
  {
    "id": 619,
    "word": "knowledge",
    "meaning": "知識",
    "example": "information, understanding, or skill that you get from experience or education",
    "exampleJP": "（定義）"
  },
  {
    "id": 620,
    "word": "laugh",
    "meaning": "笑う",
    "example": "to show that you are happy or that you think something is funny by smiling and making a sound from your throat",
    "exampleJP": "（定義）"
  },
  {
    "id": 621,
    "word": "arm",
    "meaning": "腕",
    "example": "each of the two long body parts from shoulder to the hand",
    "exampleJP": "（定義）"
  },
  {
    "id": 622,
    "word": "heart",
    "meaning": "心",
    "example": "the organ in your chest that pumps blood through your body",
    "exampleJP": "（定義）"
  },
  {
    "id": 623,
    "word": "source",
    "meaning": "源",
    "example": "produces or provides what is wanted or needed",
    "exampleJP": "（定義）"
  },
  {
    "id": 624,
    "word": "employee",
    "meaning": "従業員",
    "example": "a person who works for another person or for a company for wages or a salary",
    "exampleJP": "（定義）"
  },
  {
    "id": 625,
    "word": "manage",
    "meaning": "管理する",
    "example": "to control or be in charge of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 626,
    "word": "simply",
    "meaning": "簡単に",
    "example": "in a way which is not complicated or difficult to understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 627,
    "word": "bank",
    "meaning": "堤防",
    "example": "the higher ground that is along the edge of a river, stream, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 628,
    "word": "firm",
    "meaning": "堅い",
    "example": "fairy hard or solid; not soft",
    "exampleJP": "（定義）"
  },
  {
    "id": 629,
    "word": "cell",
    "meaning": "細胞",
    "example": "the smallest living part of an animal or a plant",
    "exampleJP": "（定義）"
  },
  {
    "id": 630,
    "word": "article",
    "meaning": "記事",
    "example": "a piece of writing about a particular subject that is included in a magazine, newspaper, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 631,
    "word": "fast",
    "meaning": "速い",
    "example": "moving or able to move quickly",
    "exampleJP": "（定義）"
  },
  {
    "id": 632,
    "word": "attack",
    "meaning": "攻撃する",
    "example": "to act violently against or to try to hurt, injure or destroy",
    "exampleJP": "（定義）"
  },
  {
    "id": 633,
    "word": "foreign",
    "meaning": "異国（の）",
    "example": "coming from or belonging to a different place or country",
    "exampleJP": "（定義）"
  },
  {
    "id": 634,
    "word": "surprise",
    "meaning": "驚く",
    "example": "an unexpected event, piece of information, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 635,
    "word": "feature",
    "meaning": "特徴",
    "example": "a distinctive or important point of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 636,
    "word": "factor",
    "meaning": "要因",
    "example": "something that influences a result",
    "exampleJP": "（定義）"
  },
  {
    "id": 637,
    "word": "pretty",
    "meaning": "かなりの、すてきな",
    "example": "large or impressive",
    "exampleJP": "（定義）"
  },
  {
    "id": 638,
    "word": "recently",
    "meaning": "最近",
    "example": "not long ago",
    "exampleJP": "（定義）"
  },
  {
    "id": 639,
    "word": "affect",
    "meaning": "影響を与える",
    "example": "to make an effect on someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 640,
    "word": "drop",
    "meaning": "落とす",
    "example": "to let something fall",
    "exampleJP": "（定義）"
  },
  {
    "id": 641,
    "word": "recent",
    "meaning": "最近",
    "example": "happening or beginning not long ago, close to the present",
    "exampleJP": "（定義）"
  },
  {
    "id": 642,
    "word": "relate",
    "meaning": "関連付ける",
    "example": "to show or make a connection between (two or more things)",
    "exampleJP": "（定義）"
  },
  {
    "id": 643,
    "word": "official",
    "meaning": "職務上の",
    "example": "of or relating to the job or work of someone in a position of authority",
    "exampleJP": "（定義）"
  },
  {
    "id": 644,
    "word": "financial",
    "meaning": "財政的な",
    "example": "relating to money or how money is managed",
    "exampleJP": "（定義）"
  },
  {
    "id": 645,
    "word": "miss",
    "meaning": "外す、逃す",
    "example": "to fail to hit, catch, reach, or get (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 646,
    "word": "art",
    "meaning": "芸術",
    "example": "a human creative skill using the imagination",
    "exampleJP": "（定義）"
  },
  {
    "id": 647,
    "word": "campaign",
    "meaning": "キャンペーン",
    "example": "a series of organized activities or events intended to achieve a result",
    "exampleJP": "（定義）"
  },
  {
    "id": 648,
    "word": "private",
    "meaning": "私的な",
    "example": "for the use of a single person or group",
    "exampleJP": "（定義）"
  },
  {
    "id": 649,
    "word": "pause",
    "meaning": "一時停止",
    "example": "a temporary stop : a period of time in which something is stopped before it is started again",
    "exampleJP": "（定義）"
  },
  {
    "id": 650,
    "word": "everyone",
    "meaning": "全員",
    "example": "every person;  everybody",
    "exampleJP": "（定義）"
  },
  {
    "id": 651,
    "word": "forget",
    "meaning": "忘れる",
    "example": "to be unable to think of or remember (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 652,
    "word": "page",
    "meaning": "ページ",
    "example": "one side of a sheet of paper especially in a book, magazine, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 653,
    "word": "worry",
    "meaning": "心配する",
    "example": "to think about problems or fears",
    "exampleJP": "（定義）"
  },
  {
    "id": 654,
    "word": "summer",
    "meaning": "夏",
    "example": "the warmest season of the year that is after spring and before autumn",
    "exampleJP": "（定義）"
  },
  {
    "id": 655,
    "word": "drink",
    "meaning": "飲む",
    "example": "to take a liquid into your mouth and swallow it",
    "exampleJP": "（定義）"
  },
  {
    "id": 656,
    "word": "opinion",
    "meaning": "意見",
    "example": "a belief, judgment, or way of thinking about something : what someone thinks about a particular thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 657,
    "word": "park",
    "meaning": "公園",
    "example": "a piece of public land in or near a city that can be used for pleasure and exercise",
    "exampleJP": "（定義）"
  },
  {
    "id": 658,
    "word": "represent",
    "meaning": "代表を務める",
    "example": "to act or speak officially for someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 659,
    "word": "key",
    "meaning": "鍵",
    "example": "a device that is used to open a lock or start an automobile ◊The usual type of key is a small metal object that you insert into a narrow opening and turn.",
    "exampleJP": "（定義）"
  },
  {
    "id": 660,
    "word": "inside",
    "meaning": "内側",
    "example": "an inner side, edge, or surface of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 661,
    "word": "manager",
    "meaning": "経営者、管理者、部長",
    "example": "someone in control of an office, shop, team, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 662,
    "word": "international",
    "meaning": "国際的な",
    "example": "involving two or more countries",
    "exampleJP": "（定義）"
  },
  {
    "id": 663,
    "word": "contain",
    "meaning": "含む",
    "example": "to have something inside or include something",
    "exampleJP": "（定義）"
  },
  {
    "id": 664,
    "word": "notice",
    "meaning": "気づく",
    "example": "to become aware of (something or someone) by seeing, hearing, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 665,
    "word": "wonder",
    "meaning": "驚くべきこと",
    "example": "something that is very surprising or amazing",
    "exampleJP": "（定義）"
  },
  {
    "id": 666,
    "word": "nature",
    "meaning": "物質界",
    "example": "the physical world and everything in it",
    "exampleJP": "（定義）"
  },
  {
    "id": 667,
    "word": "structure",
    "meaning": "構造",
    "example": "the way that something is built, arranged, or organized",
    "exampleJP": "（定義）"
  },
  {
    "id": 668,
    "word": "section",
    "meaning": "部分",
    "example": "one of the parts that form something",
    "exampleJP": "（定義）"
  },
  {
    "id": 669,
    "word": "myself",
    "meaning": "自分自身",
    "example": "the reflexive form of the pronouns 'me' or 'I'",
    "exampleJP": "（定義）"
  },
  {
    "id": 670,
    "word": "exactly",
    "meaning": "まさに",
    "example": "completely correct",
    "exampleJP": "（定義）"
  },
  {
    "id": 671,
    "word": "plant",
    "meaning": "植物",
    "example": "a living thing that grows in the ground such as a tree or flower",
    "exampleJP": "（定義）"
  },
  {
    "id": 672,
    "word": "paint",
    "meaning": "ペンキ",
    "example": "a liquid that dries to form a thin colored layer",
    "exampleJP": "（定義）"
  },
  {
    "id": 673,
    "word": "worker",
    "meaning": "従業員",
    "example": "someone who works for a company or organization but does not have a powerful position",
    "exampleJP": "（定義）"
  },
  {
    "id": 674,
    "word": "press",
    "meaning": "新聞、雑誌、報道機関",
    "example": "newspapers, magazines, and TV news reports",
    "exampleJP": "（定義）"
  },
  {
    "id": 675,
    "word": "whatever",
    "meaning": "なんでも",
    "example": "anything or everything that or no matter what",
    "exampleJP": "（定義）"
  },
  {
    "id": 676,
    "word": "necessary",
    "meaning": "必要",
    "example": "needing to be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 677,
    "word": "region",
    "meaning": "地域",
    "example": "a part of a country, of the world, area, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 678,
    "word": "growth",
    "meaning": "成長",
    "example": "the process of growing",
    "exampleJP": "（定義）"
  },
  {
    "id": 679,
    "word": "evening",
    "meaning": "夕べ",
    "example": "the last part of the day and early part of the night",
    "exampleJP": "（定義）"
  },
  {
    "id": 680,
    "word": "influence",
    "meaning": "影響",
    "example": "the power to change or affect someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 681,
    "word": "respect",
    "meaning": "尊敬",
    "example": "a feeling of admiring someone that is good or valuable",
    "exampleJP": "（定義）"
  },
  {
    "id": 682,
    "word": "various",
    "meaning": "さまざまな",
    "example": "used to refer to several different or many different things",
    "exampleJP": "（定義）"
  },
  {
    "id": 683,
    "word": "catch",
    "meaning": "捕まえる",
    "example": "to use your hands to stop and hold",
    "exampleJP": "（定義）"
  },
  {
    "id": 684,
    "word": "thus",
    "meaning": "そのように",
    "example": "as a result, in this way",
    "exampleJP": "（定義）"
  },
  {
    "id": 685,
    "word": "skill",
    "meaning": "技術",
    "example": "the ability to do something that comes from training, experience, or practice",
    "exampleJP": "（定義）"
  },
  {
    "id": 686,
    "word": "attempt",
    "meaning": "試みる",
    "example": "to try to do something or to accomplish or complete",
    "exampleJP": "（定義）"
  },
  {
    "id": 687,
    "word": "son",
    "meaning": "息子",
    "example": "a male child",
    "exampleJP": "（定義）"
  },
  {
    "id": 688,
    "word": "simple",
    "meaning": "易しい、単純な",
    "example": "not hard to understand or do",
    "exampleJP": "（定義）"
  },
  {
    "id": 689,
    "word": "medium",
    "meaning": "中くらい",
    "example": "a middle size, something between other things",
    "exampleJP": "（定義）"
  },
  {
    "id": 690,
    "word": "average",
    "meaning": "平均",
    "example": "a number that is calculated by adding quantities together and then dividing the total by the number of quantities",
    "exampleJP": "（定義）"
  },
  {
    "id": 691,
    "word": "stock",
    "meaning": "在庫",
    "example": "the supply of goods available for sale in a store",
    "exampleJP": "（定義）"
  },
  {
    "id": 692,
    "word": "management",
    "meaning": "経営者",
    "example": "the people who are in control of an office, shop, team, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 693,
    "word": "character",
    "meaning": "性格",
    "example": "the way someone thinks, feels and behaves",
    "exampleJP": "（定義）"
  },
  {
    "id": 694,
    "word": "bed",
    "meaning": "ベッド",
    "example": "a piece of furniture that people sleep on",
    "exampleJP": "（定義）"
  },
  {
    "id": 695,
    "word": "hit",
    "meaning": "打つ",
    "example": "to move your hand, a bat, etc., quickly so that it touches someone or something in a forceful or violent way",
    "exampleJP": "（定義）"
  },
  {
    "id": 696,
    "word": "establish",
    "meaning": "設立する",
    "example": "to set or create something that last for a long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 697,
    "word": "indeed",
    "meaning": "実に、まさに",
    "example": "without any question- used to stress the truth of a statement",
    "exampleJP": "（定義）"
  },
  {
    "id": 698,
    "word": "final",
    "meaning": "最終",
    "example": "happening or coming at the end of a series",
    "exampleJP": "（定義）"
  },
  {
    "id": 699,
    "word": "economy",
    "meaning": "経済",
    "example": "a large system of production and consumption",
    "exampleJP": "（定義）"
  },
  {
    "id": 700,
    "word": "fit",
    "meaning": "適切である",
    "example": "proper or acceptable : morally or socially correct",
    "exampleJP": "（定義）"
  },
  {
    "id": 701,
    "word": "guy",
    "meaning": "男",
    "example": "a man",
    "exampleJP": "（定義）"
  },
  {
    "id": 702,
    "word": "function",
    "meaning": "機能",
    "example": "a particular purpose for which something is used",
    "exampleJP": "（定義）"
  },
  {
    "id": 703,
    "word": "yesterday",
    "meaning": "昨日",
    "example": "the day before today",
    "exampleJP": "（定義）"
  },
  {
    "id": 704,
    "word": "image",
    "meaning": "絵、像",
    "example": "a picture, sculpture or painting of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 705,
    "word": "size",
    "meaning": "サイズ、寸法",
    "example": "the total amount of physical space that a person or thing occupies",
    "exampleJP": "（定義）"
  },
  {
    "id": 706,
    "word": "behavior",
    "meaning": "態度、行動",
    "example": "the way a person or animal acts or behaves",
    "exampleJP": "（定義）"
  },
  {
    "id": 707,
    "word": "addition",
    "meaning": "追加物",
    "example": "a new or extra thing which is added to something",
    "exampleJP": "（定義）"
  },
  {
    "id": 708,
    "word": "determine",
    "meaning": "決定する",
    "example": "cause to occur in a particular way",
    "exampleJP": "（定義）"
  },
  {
    "id": 709,
    "word": "station",
    "meaning": "駅",
    "example": "a place where buses or trains regularly stop",
    "exampleJP": "（定義）"
  },
  {
    "id": 710,
    "word": "population",
    "meaning": "人口",
    "example": "the number of people who live in a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 711,
    "word": "fail",
    "meaning": "失敗する",
    "example": "to not succeed : to end without success",
    "exampleJP": "（定義）"
  },
  {
    "id": 712,
    "word": "environment",
    "meaning": "環境",
    "example": "the conditions that surround people, animals or plants",
    "exampleJP": "（定義）"
  },
  {
    "id": 713,
    "word": "production",
    "meaning": "生産",
    "example": "the process of making or growing something for sale or use",
    "exampleJP": "（定義）"
  },
  {
    "id": 714,
    "word": "contract",
    "meaning": "契約",
    "example": "a legal written agreement between people",
    "exampleJP": "（定義）"
  },
  {
    "id": 715,
    "word": "player",
    "meaning": "プレーヤー",
    "example": "someone who plays a sport or game",
    "exampleJP": "（定義）"
  },
  {
    "id": 716,
    "word": "comment",
    "meaning": "コメントする",
    "example": "to discuss or write an opinion on something",
    "exampleJP": "（定義）"
  },
  {
    "id": 717,
    "word": "enter",
    "meaning": "入る",
    "example": "to go or come into something",
    "exampleJP": "（定義）"
  },
  {
    "id": 718,
    "word": "occur",
    "meaning": "起こる",
    "example": "to happen, to take place",
    "exampleJP": "（定義）"
  },
  {
    "id": 719,
    "word": "alone",
    "meaning": "単独",
    "example": "not including or without anyone or anything else",
    "exampleJP": "（定義）"
  },
  {
    "id": 720,
    "word": "significant",
    "meaning": "著しい",
    "example": "large enough to be noticed or have an effect",
    "exampleJP": "（定義）"
  },
  {
    "id": 721,
    "word": "drug",
    "meaning": "薬",
    "example": "a chemical substance used as a medicine; an illegal substance taken for recreation",
    "exampleJP": "（定義）"
  },
  {
    "id": 722,
    "word": "wall",
    "meaning": "壁",
    "example": "the layer of brick or stone that separates areas",
    "exampleJP": "（定義）"
  },
  {
    "id": 723,
    "word": "series",
    "meaning": "一続き、連続の",
    "example": "a number of things that happen one after another",
    "exampleJP": "（定義）"
  },
  {
    "id": 724,
    "word": "direct",
    "meaning": "向かわせる",
    "example": "to cause to turn or move in a desired way",
    "exampleJP": "（定義）"
  },
  {
    "id": 725,
    "word": "success",
    "meaning": "成功",
    "example": "to accomplish a purpose or achieving something",
    "exampleJP": "（定義）"
  },
  {
    "id": 726,
    "word": "tomorrow",
    "meaning": "明日",
    "example": "the day after today",
    "exampleJP": "（定義）"
  },
  {
    "id": 727,
    "word": "director",
    "meaning": "監督",
    "example": "a person who manages an organized group of people or a part of an organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 728,
    "word": "clearly",
    "meaning": "はっきりと",
    "example": "in a way that is easy to see, hear, read, or understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 729,
    "word": "lack",
    "meaning": "欠けている",
    "example": "to not have something",
    "exampleJP": "（定義）"
  },
  {
    "id": 730,
    "word": "review",
    "meaning": "精査",
    "example": "an act of carefully looking at or examining the quality or condition of something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 731,
    "word": "depend",
    "meaning": "頼る",
    "example": "to need (someone or something) for support, help, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 732,
    "word": "race",
    "meaning": "人種",
    "example": "one of the groups that people can be divided into based on certain physical qualities (such as skin color)",
    "exampleJP": "（定義）"
  },
  {
    "id": 733,
    "word": "recognize",
    "meaning": "認識する",
    "example": "to know and remember because of previous knowledge or experience",
    "exampleJP": "（定義）"
  },
  {
    "id": 734,
    "word": "window",
    "meaning": "窓",
    "example": "an opening in a wall or door that usually contains a sheet of glass",
    "exampleJP": "（定義）"
  },
  {
    "id": 735,
    "word": "purpose",
    "meaning": "目的",
    "example": "the reason for which something is done",
    "exampleJP": "（定義）"
  },
  {
    "id": 736,
    "word": "department",
    "meaning": "部門",
    "example": "a division of a larger part or organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 737,
    "word": "gain",
    "meaning": "得る",
    "example": "to get something wanted or valued",
    "exampleJP": "（定義）"
  },
  {
    "id": 738,
    "word": "tree",
    "meaning": "木",
    "example": "a usually tall plant that has a thick, wooden stem and many large branches",
    "exampleJP": "（定義）"
  },
  {
    "id": 739,
    "word": "college",
    "meaning": "大学",
    "example": "an school or educational institution for adults",
    "exampleJP": "（定義）"
  },
  {
    "id": 740,
    "word": "argue",
    "meaning": "主張する",
    "example": "give reasons for or against something : to say or write things in order to change someone's opinion about what is true, what should be done, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 741,
    "word": "board",
    "meaning": "板",
    "example": "a long, thin, flat piece of wood",
    "exampleJP": "（定義）"
  },
  {
    "id": 742,
    "word": "holiday",
    "meaning": "休日",
    "example": "a special day of celebration",
    "exampleJP": "（定義）"
  },
  {
    "id": 743,
    "word": "mark",
    "meaning": "印をつける",
    "example": "to make or leave a visible mark on something",
    "exampleJP": "（定義）"
  },
  {
    "id": 744,
    "word": "church",
    "meaning": "教会",
    "example": "a building used for Christian religious worship or services",
    "exampleJP": "（定義）"
  },
  {
    "id": 745,
    "word": "machine",
    "meaning": "機械",
    "example": "a piece of equipment with moving parts that does work when it is given power from electricity, gasoline, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 746,
    "word": "achieve",
    "meaning": "達成する",
    "example": "to reach a goal, to get something",
    "exampleJP": "（定義）"
  },
  {
    "id": 747,
    "word": "item",
    "meaning": "品物",
    "example": "an individual article, unit or piece of information",
    "exampleJP": "（定義）"
  },
  {
    "id": 748,
    "word": "prove",
    "meaning": "証明する",
    "example": "to show the existence, truth, or correctness of (something) by using evidence, logic, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 749,
    "word": "cent",
    "meaning": "セント",
    "example": "a unit of money that is equal to 1/100 of the basic unit of money",
    "exampleJP": "（定義）"
  },
  {
    "id": 750,
    "word": "season",
    "meaning": "季節",
    "example": "one of the four periods (spring, summer, autumn, and winter) into which the year is commonly divided",
    "exampleJP": "（定義）"
  },
  {
    "id": 751,
    "word": "floor",
    "meaning": "床",
    "example": "the part of a room on which you stand",
    "exampleJP": "（定義）"
  },
  {
    "id": 752,
    "word": "stuff",
    "meaning": "材料",
    "example": "materials, supplies, or equipment",
    "exampleJP": "（定義）"
  },
  {
    "id": 753,
    "word": "wide",
    "meaning": "広い",
    "example": "extending a great distance from one side to the other;  not narrow",
    "exampleJP": "（定義）"
  },
  {
    "id": 754,
    "word": "anyone",
    "meaning": "だれか",
    "example": "any person",
    "exampleJP": "（定義）"
  },
  {
    "id": 755,
    "word": "method",
    "meaning": "方法",
    "example": "a way of doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 756,
    "word": "analysis",
    "meaning": "分析",
    "example": "the process of analyzing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 757,
    "word": "election",
    "meaning": "選挙",
    "example": "the act or process of choosing someone for a public office by voting",
    "exampleJP": "（定義）"
  },
  {
    "id": 758,
    "word": "military",
    "meaning": "軍の",
    "example": "of or relating to soldiers or the armed forces",
    "exampleJP": "（定義）"
  },
  {
    "id": 759,
    "word": "hotel",
    "meaning": "ホテル",
    "example": "a place that has rooms in which people can stay especially when they are traveling :a place that provides food, lodging, and other services for paying guests",
    "exampleJP": "（定義）"
  },
  {
    "id": 760,
    "word": "club",
    "meaning": "クラブ",
    "example": "a group of people who meet to participate in an activity",
    "exampleJP": "（定義）"
  },
  {
    "id": 761,
    "word": "below",
    "meaning": "下に",
    "example": "in or to a lower place",
    "exampleJP": "（定義）"
  },
  {
    "id": 762,
    "word": "movie",
    "meaning": "映画",
    "example": "a film or video",
    "exampleJP": "（定義）"
  },
  {
    "id": 763,
    "word": "doctor",
    "meaning": "医師",
    "example": "a person who skilled to treat people who are ill, sick and injured",
    "exampleJP": "（定義）"
  },
  {
    "id": 764,
    "word": "discussion",
    "meaning": "議論",
    "example": "the act of talking about something with another person or a group of people : a conversation about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 765,
    "word": "sorry",
    "meaning": "気の毒に思う",
    "example": "feeling sorrow or regret",
    "exampleJP": "（定義）"
  },
  {
    "id": 766,
    "word": "challenge",
    "meaning": "異議を申し立てる",
    "example": "to try, to say or show that something may not be true",
    "exampleJP": "（定義）"
  },
  {
    "id": 767,
    "word": "nation",
    "meaning": "国家",
    "example": "a large area of land controlled by government, territory",
    "exampleJP": "（定義）"
  },
  {
    "id": 768,
    "word": "nearly",
    "meaning": "ほとんど",
    "example": "almost",
    "exampleJP": "（定義）"
  },
  {
    "id": 769,
    "word": "statement",
    "meaning": "声明",
    "example": "something that someone says or writes officially",
    "exampleJP": "（定義）"
  },
  {
    "id": 770,
    "word": "link",
    "meaning": "結びつける",
    "example": "to join or connect together, a relationship",
    "exampleJP": "（定義）"
  },
  {
    "id": 771,
    "word": "despite",
    "meaning": "にもかかわらず",
    "example": "without being affected by something: in spite of",
    "exampleJP": "（定義）"
  },
  {
    "id": 772,
    "word": "introduce",
    "meaning": "紹介する",
    "example": "to make (someone) known to someone else by name",
    "exampleJP": "（定義）"
  },
  {
    "id": 773,
    "word": "advantage",
    "meaning": "利点",
    "example": "something (such as a good position or condition) that helps to make someone or something better or more likely to succeed than others",
    "exampleJP": "（定義）"
  },
  {
    "id": 774,
    "word": "ready",
    "meaning": "準備ができている",
    "example": "prepared to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 775,
    "word": "marry",
    "meaning": "結婚する",
    "example": "to become the husband or wife of (someone)",
    "exampleJP": "（定義）"
  },
  {
    "id": 776,
    "word": "strike",
    "meaning": "打つ",
    "example": "to hit something in a forceful way",
    "exampleJP": "（定義）"
  },
  {
    "id": 777,
    "word": "mile",
    "meaning": "マイル",
    "example": "a unit of measurement used in the US that is about 1600 meters",
    "exampleJP": "（定義）"
  },
  {
    "id": 778,
    "word": "seek",
    "meaning": "探し求める",
    "example": "to search for;  to try to find;  look for",
    "exampleJP": "（定義）"
  },
  {
    "id": 779,
    "word": "ability",
    "meaning": "能力",
    "example": "the power or skill to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 780,
    "word": "unit",
    "meaning": "単位",
    "example": "a single thing, person or group that is a part of something larger",
    "exampleJP": "（定義）"
  },
  {
    "id": 781,
    "word": "card",
    "meaning": "カード",
    "example": "a small piece of stiff paper that is marked with symbols or pictures to show its value, comes in a set, and is used for playing games",
    "exampleJP": "（定義）"
  },
  {
    "id": 782,
    "word": "hospital",
    "meaning": "病院",
    "example": "a place where sick or injured people are given care or treatment and where children are often born",
    "exampleJP": "（定義）"
  },
  {
    "id": 783,
    "word": "quickly",
    "meaning": "速く",
    "example": "fast or in a short time",
    "exampleJP": "（定義）"
  },
  {
    "id": 784,
    "word": "interview",
    "meaning": "面接",
    "example": "a meeting in which someone asks you questions to see if you are suitable for a job or course",
    "exampleJP": "（定義）"
  },
  {
    "id": 785,
    "word": "agreement",
    "meaning": "合意",
    "example": "a promise or decision made between two or more people",
    "exampleJP": "（定義）"
  },
  {
    "id": 786,
    "word": "release",
    "meaning": "釈放する",
    "example": "to allow to leave a jail, cage, prison, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 787,
    "word": "tax",
    "meaning": "税金",
    "example": "money that a government requires people to pay",
    "exampleJP": "（定義）"
  },
  {
    "id": 788,
    "word": "solution",
    "meaning": "解決策",
    "example": "something that is used or done to deal with and end a problem : something that solves a problem",
    "exampleJP": "（定義）"
  },
  {
    "id": 789,
    "word": "capital",
    "meaning": "首都",
    "example": "having the main offices of a government",
    "exampleJP": "（定義）"
  },
  {
    "id": 790,
    "word": "popular",
    "meaning": "人気がある",
    "example": "liked or enjoyed by many people",
    "exampleJP": "（定義）"
  },
  {
    "id": 791,
    "word": "specific",
    "meaning": "独特な、特に",
    "example": "special or particular, clearly presented or stated",
    "exampleJP": "（定義）"
  },
  {
    "id": 792,
    "word": "beautiful",
    "meaning": "美しい",
    "example": "very attractive",
    "exampleJP": "（定義）"
  },
  {
    "id": 793,
    "word": "fear",
    "meaning": "恐れ",
    "example": "an unpleasant feeling caused by being aware of danger",
    "exampleJP": "（定義）"
  },
  {
    "id": 794,
    "word": "aim",
    "meaning": "狙う",
    "example": "to have a specified goal or purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 795,
    "word": "television",
    "meaning": "テレビ",
    "example": "a piece of equipment with a screen on the front, used for watching programs",
    "exampleJP": "（定義）"
  },
  {
    "id": 796,
    "word": "serious",
    "meaning": "深刻な",
    "example": "having an important or dangerous possible result",
    "exampleJP": "（定義）"
  },
  {
    "id": 797,
    "word": "target",
    "meaning": "目的",
    "example": "something that you are trying to do or achieve",
    "exampleJP": "（定義）"
  },
  {
    "id": 798,
    "word": "degree",
    "meaning": "度",
    "example": "a unit for measuring temperature or the size of an angle",
    "exampleJP": "（定義）"
  },
  {
    "id": 799,
    "word": "pull",
    "meaning": "引く",
    "example": "to hold onto and move (someone or something) in a particular direction and especially toward yourself",
    "exampleJP": "（定義）"
  },
  {
    "id": 800,
    "word": "red",
    "meaning": "赤",
    "example": "having the color of blood",
    "exampleJP": "（定義）"
  },
  {
    "id": 801,
    "word": "husband",
    "meaning": "夫",
    "example": "a married man : the man someone is married to",
    "exampleJP": "（定義）"
  },
  {
    "id": 802,
    "word": "access",
    "meaning": "アクセス",
    "example": "a way of getting near to somewhere",
    "exampleJP": "（定義）"
  },
  {
    "id": 803,
    "word": "movement",
    "meaning": "動き",
    "example": "a change of position or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 804,
    "word": "treat",
    "meaning": "扱う",
    "example": "the way you behave towards someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 805,
    "word": "identify",
    "meaning": "識別する",
    "example": "to indicate who  or what someone or something is",
    "exampleJP": "（定義）"
  },
  {
    "id": 806,
    "word": "loss",
    "meaning": "失うこと",
    "example": "failure to keep or to continue to have something",
    "exampleJP": "（定義）"
  },
  {
    "id": 807,
    "word": "shall",
    "meaning": "～となるだろう",
    "example": "expressing the future tense, to expect to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 808,
    "word": "modern",
    "meaning": "現代的な",
    "example": "relating to the present or recent time",
    "exampleJP": "（定義）"
  },
  {
    "id": 809,
    "word": "pressure",
    "meaning": "圧力",
    "example": "the weight or force that is produced when something presses or pushes against something",
    "exampleJP": "（定義）"
  },
  {
    "id": 810,
    "word": "bus",
    "meaning": "バス",
    "example": "a large vehicle that is used for carrying passengers especially along a particular route at particular times",
    "exampleJP": "（定義）"
  },
  {
    "id": 811,
    "word": "treatment",
    "meaning": "治療",
    "example": "something which you do to try to cure an illness or injury, especially something suggested or done by a doctor",
    "exampleJP": "（定義）"
  },
  {
    "id": 812,
    "word": "yourself",
    "meaning": "あなた自身",
    "example": "the reflexive form of the pronoun 'you'",
    "exampleJP": "（定義）"
  },
  {
    "id": 813,
    "word": "supply",
    "meaning": "供給",
    "example": "the amount of something that is available to be used",
    "exampleJP": "（定義）"
  },
  {
    "id": 814,
    "word": "village",
    "meaning": "村",
    "example": "a small town in the country",
    "exampleJP": "（定義）"
  },
  {
    "id": 815,
    "word": "worth",
    "meaning": "価値",
    "example": "used to indicate the value of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 816,
    "word": "natural",
    "meaning": "自然",
    "example": "something that exists or happens because of nature; not made or done by people",
    "exampleJP": "（定義）"
  },
  {
    "id": 817,
    "word": "express",
    "meaning": "表現する、伝える",
    "example": "to talk or write about (something that you are thinking or feeling)",
    "exampleJP": "（定義）"
  },
  {
    "id": 818,
    "word": "indicate",
    "meaning": "指し示す",
    "example": "to show something, direct attention to or point out",
    "exampleJP": "（定義）"
  },
  {
    "id": 819,
    "word": "attend",
    "meaning": "出席する",
    "example": "to go to and be present at (an event, meeting, etc.)",
    "exampleJP": "（定義）"
  },
  {
    "id": 820,
    "word": "brother",
    "meaning": "兄弟",
    "example": "a boy or man who has one or both of the same parents as you",
    "exampleJP": "（定義）"
  },
  {
    "id": 821,
    "word": "investment",
    "meaning": "投資",
    "example": "the money that you put in a bank, business, etc. in order to make a profit",
    "exampleJP": "（定義）"
  },
  {
    "id": 822,
    "word": "score",
    "meaning": "スコア",
    "example": "the number of points someone gets in a game or test",
    "exampleJP": "（定義）"
  },
  {
    "id": 823,
    "word": "organize",
    "meaning": "まとめる",
    "example": "to arrange systematically",
    "exampleJP": "（定義）"
  },
  {
    "id": 824,
    "word": "trip",
    "meaning": "旅",
    "example": "a journey to a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 825,
    "word": "beyond",
    "meaning": "～を越えて",
    "example": "on or to the farther part or side, in addition",
    "exampleJP": "（定義）"
  },
  {
    "id": 826,
    "word": "sleep",
    "meaning": "寝る",
    "example": "to rest your mind and body by closing your eyes and becoming unconscious",
    "exampleJP": "（定義）"
  },
  {
    "id": 827,
    "word": "fish",
    "meaning": "魚",
    "example": "a cold-blooded animal that lives in water, breathes with gills, and usually has fins and scales",
    "exampleJP": "（定義）"
  },
  {
    "id": 828,
    "word": "promise",
    "meaning": "約束",
    "example": "a statement telling someone that you will definitely do something or that something will definitely happen in the future",
    "exampleJP": "（定義）"
  },
  {
    "id": 829,
    "word": "potential",
    "meaning": "潜在能力",
    "example": "having or showing a capacity for the future",
    "exampleJP": "（定義）"
  },
  {
    "id": 830,
    "word": "energy",
    "meaning": "エネルギー",
    "example": "having physical or mental strength",
    "exampleJP": "（定義）"
  },
  {
    "id": 831,
    "word": "trouble",
    "meaning": "困難",
    "example": "problems or difficulties",
    "exampleJP": "（定義）"
  },
  {
    "id": 832,
    "word": "relation",
    "meaning": "関係",
    "example": "a person who is a member of your family",
    "exampleJP": "（定義）"
  },
  {
    "id": 833,
    "word": "touch",
    "meaning": "触る",
    "example": "to put your hand, fingers, etc., on someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 834,
    "word": "file",
    "meaning": "ファイル",
    "example": "a folder or box for documents that are similar",
    "exampleJP": "（定義）"
  },
  {
    "id": 835,
    "word": "middle",
    "meaning": "中間",
    "example": "equally distant from the ends or sides : halfway between two points",
    "exampleJP": "（定義）"
  },
  {
    "id": 836,
    "word": "bar",
    "meaning": "酒場",
    "example": "a building or room where alcoholic drinks and sometimes food are served",
    "exampleJP": "（定義）"
  },
  {
    "id": 837,
    "word": "suffer",
    "meaning": "苦しむ",
    "example": "to experience pain, illness, or injury",
    "exampleJP": "（定義）"
  },
  {
    "id": 838,
    "word": "strategy",
    "meaning": "戦略",
    "example": "a careful plan or method for reaching a goal",
    "exampleJP": "（定義）"
  },
  {
    "id": 839,
    "word": "deep",
    "meaning": "深い",
    "example": "having a large distance to the bottom from the surface or highest point",
    "exampleJP": "（定義）"
  },
  {
    "id": 840,
    "word": "except",
    "meaning": "～以外",
    "example": "not including or other than",
    "exampleJP": "（定義）"
  },
  {
    "id": 841,
    "word": "clean",
    "meaning": "綺麗にする、きれいな",
    "example": "free from dirt, marks, etc. : not dirty",
    "exampleJP": "（定義）"
  },
  {
    "id": 842,
    "word": "tend",
    "meaning": "傾向がある",
    "example": "used to describe what often happens or what someone often does or is likely to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 843,
    "word": "advance",
    "meaning": "進む",
    "example": "to move forward",
    "exampleJP": "（定義）"
  },
  {
    "id": 844,
    "word": "fill",
    "meaning": "満たす",
    "example": "to make something full or to spread through",
    "exampleJP": "（定義）"
  },
  {
    "id": 845,
    "word": "star",
    "meaning": "星",
    "example": "any one of the objects in space that are made of burning gas and that look like points of light in the night sky",
    "exampleJP": "（定義）"
  },
  {
    "id": 846,
    "word": "network",
    "meaning": "ネットワーク",
    "example": "a system of lines, wires, etc., that are connected to each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 847,
    "word": "generally",
    "meaning": "一般的に",
    "example": "usually, or in most situations",
    "exampleJP": "（定義）"
  },
  {
    "id": 848,
    "word": "operation",
    "meaning": "手術",
    "example": "when a doctor cuts into someone's body to remove a sick part",
    "exampleJP": "（定義）"
  },
  {
    "id": 849,
    "word": "match",
    "meaning": "匹敵する",
    "example": "someone or something that is equal to or as good as another person or thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 850,
    "word": "avoid",
    "meaning": "避ける",
    "example": "to stay away from (someone or something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 851,
    "word": "seat",
    "meaning": "席",
    "example": "something (such as a chair) that you sit on",
    "exampleJP": "（定義）"
  },
  {
    "id": 852,
    "word": "throw",
    "meaning": "投げる",
    "example": "to cause (something) to move out of your hand and through the air by quickly moving your arm forward",
    "exampleJP": "（定義）"
  },
  {
    "id": 853,
    "word": "task",
    "meaning": "仕事",
    "example": "a piece of work to have done given by a person",
    "exampleJP": "（定義）"
  },
  {
    "id": 854,
    "word": "normal",
    "meaning": "普通",
    "example": "conforming to a standard, usual, ordinary, not strange",
    "exampleJP": "（定義）"
  },
  {
    "id": 855,
    "word": "goal",
    "meaning": "目標",
    "example": "something you try to do or achieve, an aim or result",
    "exampleJP": "（定義）"
  },
  {
    "id": 856,
    "word": "associate",
    "meaning": "関連付ける、連想する",
    "example": "to relate two things, people, etc. in your mind",
    "exampleJP": "（定義）"
  },
  {
    "id": 857,
    "word": "blue",
    "meaning": "青",
    "example": "having the color of the clear sky",
    "exampleJP": "（定義）"
  },
  {
    "id": 858,
    "word": "positive",
    "meaning": "前向きな",
    "example": "good or useful in qualities, constructive, confident",
    "exampleJP": "（定義）"
  },
  {
    "id": 859,
    "word": "option",
    "meaning": "選択",
    "example": "something which may be chosen",
    "exampleJP": "（定義）"
  },
  {
    "id": 860,
    "word": "box",
    "meaning": "箱",
    "example": "a container that is made of a hard material (such as wood, metal, or cardboard) and that usually has four straight sides",
    "exampleJP": "（定義）"
  },
  {
    "id": 861,
    "word": "huge",
    "meaning": "とてつもなく大きい",
    "example": "extremely large",
    "exampleJP": "（定義）"
  },
  {
    "id": 862,
    "word": "message",
    "meaning": "メッセージ,伝言",
    "example": "a piece of information that is sent or given to someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 863,
    "word": "instance",
    "meaning": "事例",
    "example": "an example of a particular action or situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 864,
    "word": "style",
    "meaning": "型",
    "example": "a particular way something is done or created",
    "exampleJP": "（定義）"
  },
  {
    "id": 865,
    "word": "refer",
    "meaning": "言及する",
    "example": "to talk about or write about (someone or something) especially briefly : to mention (someone or something) in speech or in writing",
    "exampleJP": "（定義）"
  },
  {
    "id": 866,
    "word": "cold",
    "meaning": "冷たい",
    "example": "having a very low temperature",
    "exampleJP": "（定義）"
  },
  {
    "id": 867,
    "word": "push",
    "meaning": "押す",
    "example": "to use force to move (someone or something) forward or away from you",
    "exampleJP": "（定義）"
  },
  {
    "id": 868,
    "word": "quarter",
    "meaning": "４分の１",
    "example": "one of four equal parts of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 869,
    "word": "assume",
    "meaning": "負う",
    "example": "to accept a responsibility or debt",
    "exampleJP": "（定義）"
  },
  {
    "id": 870,
    "word": "baby",
    "meaning": "赤ん坊",
    "example": "a very young child",
    "exampleJP": "（定義）"
  },
  {
    "id": 871,
    "word": "successful",
    "meaning": "成功した",
    "example": "achieving what you want to achieve",
    "exampleJP": "（定義）"
  },
  {
    "id": 872,
    "word": "sing",
    "meaning": "歌う",
    "example": "to use your voice to make musical sounds in the form of a song or tune",
    "exampleJP": "（定義）"
  },
  {
    "id": 873,
    "word": "doubt",
    "meaning": "疑う",
    "example": "to be uncertain about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 874,
    "word": "competition",
    "meaning": "競争",
    "example": "the act or process of trying to get or win something (such as a prize or a higher level of success) that someone else is also trying to get or win",
    "exampleJP": "（定義）"
  },
  {
    "id": 875,
    "word": "theory",
    "meaning": "理論",
    "example": "an idea that is explain facts or events academically",
    "exampleJP": "（定義）"
  },
  {
    "id": 876,
    "word": "propose",
    "meaning": "提案する",
    "example": "to suggest (something, such as a plan or theory) to a person or group of people to consider",
    "exampleJP": "（定義）"
  },
  {
    "id": 877,
    "word": "reference",
    "meaning": "言及する",
    "example": "the act of mentioning something in speech or in writing",
    "exampleJP": "（定義）"
  },
  {
    "id": 878,
    "word": "argument",
    "meaning": "口論",
    "example": "an angry discussion with someone in which you both disagree",
    "exampleJP": "（定義）"
  },
  {
    "id": 879,
    "word": "adult",
    "meaning": "大人",
    "example": "a person or animal that is grown up",
    "exampleJP": "（定義）"
  },
  {
    "id": 880,
    "word": "fly",
    "meaning": "飛ぶ",
    "example": "to move through the air with wings",
    "exampleJP": "（定義）"
  },
  {
    "id": 881,
    "word": "document",
    "meaning": "文書",
    "example": "an official record that gives information",
    "exampleJP": "（定義）"
  },
  {
    "id": 882,
    "word": "pattern",
    "meaning": "パターン",
    "example": "a repeated form or design especially that is used to decorate something",
    "exampleJP": "（定義）"
  },
  {
    "id": 883,
    "word": "application",
    "meaning": "応募書",
    "example": "a formal and usually written request for something (such as a job",
    "exampleJP": "（定義）"
  },
  {
    "id": 884,
    "word": "hot",
    "meaning": "熱い",
    "example": "having a high temperature",
    "exampleJP": "（定義）"
  },
  {
    "id": 885,
    "word": "obviously",
    "meaning": "明らかに",
    "example": "in a way that is easy to understand or see",
    "exampleJP": "（定義）"
  },
  {
    "id": 886,
    "word": "unclear",
    "meaning": "明確でない",
    "example": "not easy to understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 887,
    "word": "bill",
    "meaning": "請求書",
    "example": "a document that says how much money you owe for something you have bought or used",
    "exampleJP": "（定義）"
  },
  {
    "id": 888,
    "word": "search",
    "meaning": "探す",
    "example": "to carefully look for someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 889,
    "word": "separate",
    "meaning": "分かれた",
    "example": "not joined, connected, or combined : placed or kept apart",
    "exampleJP": "（定義）"
  },
  {
    "id": 890,
    "word": "central",
    "meaning": "真ん中の",
    "example": "in or near the center of a place or object",
    "exampleJP": "（定義）"
  },
  {
    "id": 891,
    "word": "career",
    "meaning": "キャリア",
    "example": "a job that you do for a long period of your life",
    "exampleJP": "（定義）"
  },
  {
    "id": 892,
    "word": "anyway",
    "meaning": "とにかく",
    "example": "despite something that has been stated before",
    "exampleJP": "（定義）"
  },
  {
    "id": 893,
    "word": "speech",
    "meaning": "スピーチ",
    "example": "a spoken expression of ideas, opinions, etc., that is made by someone who is speaking in front of a group of people",
    "exampleJP": "（定義）"
  },
  {
    "id": 894,
    "word": "dog",
    "meaning": "犬",
    "example": "a type of animal that is often kept as a pet or trained to work for people by guarding buildings, hunting, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 895,
    "word": "officer",
    "meaning": "会社員",
    "example": "a person who has an important position in a company or organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 896,
    "word": "throughout",
    "meaning": "～にわたって、～を通じて",
    "example": "in every part of a place; during the whole of a period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 897,
    "word": "oil",
    "meaning": "オイル,油",
    "example": "a thick, black liquid that comes from the ground and that is used in making various products (such as gasoline)",
    "exampleJP": "（定義）"
  },
  {
    "id": 898,
    "word": "dress",
    "meaning": "ドレス",
    "example": "a piece of clothing for a woman or a girl that has a top part that covers the upper body and a skirt that hangs down to cover the legs",
    "exampleJP": "（定義）"
  },
  {
    "id": 899,
    "word": "profit",
    "meaning": "利益",
    "example": "money that is made in a business, through investing, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 900,
    "word": "guess",
    "meaning": "推測する",
    "example": "to form an opinion or give an answer about something when you do not know much or anything about it",
    "exampleJP": "（定義）"
  },
  {
    "id": 901,
    "word": "fun",
    "meaning": "楽しい",
    "example": "someone or something that is amusing or enjoyable",
    "exampleJP": "（定義）"
  },
  {
    "id": 902,
    "word": "protect",
    "meaning": "守る",
    "example": "to keep (someone or something) from being harmed, lost, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 903,
    "word": "resource",
    "meaning": "資源",
    "example": "an essential supply of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 904,
    "word": "science",
    "meaning": "科学",
    "example": "knowledge about or study of the natural world based on facts",
    "exampleJP": "（定義）"
  },
  {
    "id": 905,
    "word": "disease",
    "meaning": "病気",
    "example": "an illness that affects a person, animal, or plant",
    "exampleJP": "（定義）"
  },
  {
    "id": 906,
    "word": "balance",
    "meaning": "バランス",
    "example": "the state of having your weight spread equally so that you do not fall",
    "exampleJP": "（定義）"
  },
  {
    "id": 907,
    "word": "damage",
    "meaning": "損傷",
    "example": "physical harm that is done to something or to someone's body",
    "exampleJP": "（定義）"
  },
  {
    "id": 908,
    "word": "basis",
    "meaning": "基礎",
    "example": "something from which another thing develops",
    "exampleJP": "（定義）"
  },
  {
    "id": 909,
    "word": "author",
    "meaning": "著者",
    "example": "a person who writes book",
    "exampleJP": "（定義）"
  },
  {
    "id": 910,
    "word": "basic",
    "meaning": "基本的な",
    "example": "forming or relating to the most important part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 911,
    "word": "encourage",
    "meaning": "勇気づける",
    "example": "to make (someone) more determined, hopeful, or confident",
    "exampleJP": "（定義）"
  },
  {
    "id": 912,
    "word": "hair",
    "meaning": "毛髪、毛",
    "example": "a thin threadlike growth from the skin of a person or animal",
    "exampleJP": "（定義）"
  },
  {
    "id": 913,
    "word": "male",
    "meaning": "男性",
    "example": "characteristic of boys or men",
    "exampleJP": "（定義）"
  },
  {
    "id": 914,
    "word": "operate",
    "meaning": "動作する",
    "example": "to function or behave in a proper or particular way",
    "exampleJP": "（定義）"
  },
  {
    "id": 915,
    "word": "reflect",
    "meaning": "反射する",
    "example": "to move in one direction, hit a surface, and then quickly move in a different and usually opposite direction",
    "exampleJP": "（定義）"
  },
  {
    "id": 916,
    "word": "exercise",
    "meaning": "運動",
    "example": "physical activity that is done in order to become stronger and healthier",
    "exampleJP": "（定義）"
  },
  {
    "id": 917,
    "word": "useful",
    "meaning": "便利",
    "example": "helpful for doing or achieving something",
    "exampleJP": "（定義）"
  },
  {
    "id": 918,
    "word": "restaurant",
    "meaning": "レストラン",
    "example": "a place where you can buy and eat a meal",
    "exampleJP": "（定義）"
  },
  {
    "id": 919,
    "word": "income",
    "meaning": "収入",
    "example": "earned money from work, investments or business",
    "exampleJP": "（定義）"
  },
  {
    "id": 920,
    "word": "property",
    "meaning": "所有物",
    "example": "something that is owned by a person or business",
    "exampleJP": "（定義）"
  },
  {
    "id": 921,
    "word": "previous",
    "meaning": "前の",
    "example": "existing or happening before the present time",
    "exampleJP": "（定義）"
  },
  {
    "id": 922,
    "word": "dark",
    "meaning": "暗い",
    "example": "having very little light, not light in color",
    "exampleJP": "（定義）"
  },
  {
    "id": 923,
    "word": "imagine",
    "meaning": "想像する",
    "example": "to think of or create something in one's mind that is not real",
    "exampleJP": "（定義）"
  },
  {
    "id": 924,
    "word": "okay",
    "meaning": "ＯＫ、いいよ",
    "example": "used when agreeing to do something or when allowing someone to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 925,
    "word": "earn",
    "meaning": "稼ぐ",
    "example": "to get (money, a salary, etc.) for work that you have done",
    "exampleJP": "（定義）"
  },
  {
    "id": 926,
    "word": "daughter",
    "meaning": "娘",
    "example": "a female child",
    "exampleJP": "（定義）"
  },
  {
    "id": 927,
    "word": "post",
    "meaning": "郵便物",
    "example": "letters or packages sent by post",
    "exampleJP": "（定義）"
  },
  {
    "id": 928,
    "word": "newspaper",
    "meaning": "新聞",
    "example": "a set of large sheets of paper that have news stories, information about local events, advertisements, etc., and that are folded together and sold every day",
    "exampleJP": "（定義）"
  },
  {
    "id": 929,
    "word": "define",
    "meaning": "定義する",
    "example": "to state the meaning of a word, phrase, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 930,
    "word": "conclusion",
    "meaning": "結論",
    "example": "the opinion you have after considering all the information about something; the final part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 931,
    "word": "clock",
    "meaning": "時計",
    "example": "a device that shows what time it is and that is usually placed in a room or attached to a wall",
    "exampleJP": "（定義）"
  },
  {
    "id": 932,
    "word": "everybody",
    "meaning": "全員",
    "example": "every person;  everyone",
    "exampleJP": "（定義）"
  },
  {
    "id": 933,
    "word": "weekend",
    "meaning": "週末",
    "example": "Saturday and Sunday",
    "exampleJP": "（定義）"
  },
  {
    "id": 934,
    "word": "perform",
    "meaning": "演じる",
    "example": "to do an action or activity that usually requires training or skill",
    "exampleJP": "（定義）"
  },
  {
    "id": 935,
    "word": "professional",
    "meaning": "専門の",
    "example": "relating to a job that requires special skill",
    "exampleJP": "（定義）"
  },
  {
    "id": 936,
    "word": "mine",
    "meaning": "私のもの",
    "example": "that which belongs to me : my one : my ones",
    "exampleJP": "（定義）"
  },
  {
    "id": 937,
    "word": "debate",
    "meaning": "討論",
    "example": "a formal discussion between people",
    "exampleJP": "（定義）"
  },
  {
    "id": 938,
    "word": "memory",
    "meaning": "記憶",
    "example": "the power or process of remembering what has been learned",
    "exampleJP": "（定義）"
  },
  {
    "id": 939,
    "word": "green",
    "meaning": "緑",
    "example": "having the color of growing grass",
    "exampleJP": "（定義）"
  },
  {
    "id": 940,
    "word": "song",
    "meaning": "歌",
    "example": "a short piece of music with words that are sung",
    "exampleJP": "（定義）"
  },
  {
    "id": 941,
    "word": "object",
    "meaning": "物体",
    "example": "a thing that you can see and touch and that is not alive",
    "exampleJP": "（定義）"
  },
  {
    "id": 942,
    "word": "maintain",
    "meaning": "維持する",
    "example": "to keep exist or continue without changing",
    "exampleJP": "（定義）"
  },
  {
    "id": 943,
    "word": "credit",
    "meaning": "信用",
    "example": "the quality of being believed or having a good reputation",
    "exampleJP": "（定義）"
  },
  {
    "id": 944,
    "word": "ring",
    "meaning": "指輪",
    "example": "a piece of jewelry that is worn usually on a finger",
    "exampleJP": "（定義）"
  },
  {
    "id": 945,
    "word": "discover",
    "meaning": "発見する",
    "example": "to see, find, or become aware of (something) for the first time",
    "exampleJP": "（定義）"
  },
  {
    "id": 946,
    "word": "dead",
    "meaning": "死んでいる",
    "example": "no longer alive or living , no longer having life",
    "exampleJP": "（定義）"
  },
  {
    "id": 947,
    "word": "afternoon",
    "meaning": "午後",
    "example": "the middle part of the day : the part of the day between noon and evening",
    "exampleJP": "（定義）"
  },
  {
    "id": 948,
    "word": "prefer",
    "meaning": "～をより好む",
    "example": "to like (someone or something) better than someone or something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 949,
    "word": "extend",
    "meaning": "伸ばす",
    "example": "to cause (something, such as your arm or leg) to straighten out or to stretch out",
    "exampleJP": "（定義）"
  },
  {
    "id": 950,
    "word": "possibility",
    "meaning": "可能性",
    "example": "a chance that something may happen or be true",
    "exampleJP": "（定義）"
  },
  {
    "id": 951,
    "word": "direction",
    "meaning": "方向",
    "example": "the course or path on which something is moving or pointing",
    "exampleJP": "（定義）"
  },
  {
    "id": 952,
    "word": "facility",
    "meaning": "施設",
    "example": "a place where a particular activity happens",
    "exampleJP": "（定義）"
  },
  {
    "id": 953,
    "word": "variety",
    "meaning": "多様な",
    "example": "a number or collection of different things or people",
    "exampleJP": "（定義）"
  },
  {
    "id": 954,
    "word": "daily",
    "meaning": "日誌",
    "example": "happening, done, made, used, or existing every day",
    "exampleJP": "（定義）"
  },
  {
    "id": 955,
    "word": "clothes",
    "meaning": "衣服",
    "example": "items such as shirts and trousers that you wear on your body",
    "exampleJP": "（定義）"
  },
  {
    "id": 956,
    "word": "screen",
    "meaning": "画面",
    "example": "the usually flat part of a television or computer monitor that shows the images or text : the part of a television or computer that you look at when you are using it",
    "exampleJP": "（定義）"
  },
  {
    "id": 957,
    "word": "track",
    "meaning": "(人・車などの）通った跡",
    "example": "a path or trail that is made by people or animals walking through a field, forest, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 958,
    "word": "dance",
    "meaning": "踊る",
    "example": "to move your body with rhythm to music",
    "exampleJP": "（定義）"
  },
  {
    "id": 959,
    "word": "completely",
    "meaning": "完全に",
    "example": "in every way or as much as possible",
    "exampleJP": "（定義）"
  },
  {
    "id": 960,
    "word": "female",
    "meaning": "女性",
    "example": "characteristic of girls or women",
    "exampleJP": "（定義）"
  },
  {
    "id": 961,
    "word": "responsibility",
    "meaning": "責任",
    "example": "something that it is your job or duty to do or deal with",
    "exampleJP": "（定義）"
  },
  {
    "id": 962,
    "word": "original",
    "meaning": "オリジナル",
    "example": "special and interesting because of not being the same as others; the earliest form of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 963,
    "word": "sister",
    "meaning": "姉妹",
    "example": "a girl or woman who has one or both of the same parents as you",
    "exampleJP": "（定義）"
  },
  {
    "id": 964,
    "word": "rock",
    "meaning": "揺れ動く",
    "example": "to move (someone or something) back and forth or from side to side",
    "exampleJP": "（定義）"
  },
  {
    "id": 965,
    "word": "dream",
    "meaning": "夢",
    "example": "a series of thoughts, visions, or feelings that happen during sleep",
    "exampleJP": "（定義）"
  },
  {
    "id": 966,
    "word": "nor",
    "meaning": "AもBも～でない",
    "example": "used after neither to show something is also not true or possible",
    "exampleJP": "（定義）"
  },
  {
    "id": 967,
    "word": "university",
    "meaning": "大学",
    "example": "a high-level educational school where academic research is done",
    "exampleJP": "（定義）"
  },
  {
    "id": 968,
    "word": "easily",
    "meaning": "簡単に",
    "example": "with no difficulty",
    "exampleJP": "（定義）"
  },
  {
    "id": 969,
    "word": "agency",
    "meaning": "代理店",
    "example": "a business that provides a particular service",
    "exampleJP": "（定義）"
  },
  {
    "id": 970,
    "word": "dollar",
    "meaning": "ドル",
    "example": "a basic unit of money in the U.S., Canada, Australia, and other countries that is equal to 100 cents",
    "exampleJP": "（定義）"
  },
  {
    "id": 971,
    "word": "garden",
    "meaning": "庭",
    "example": "an area of ground where plants (such as flowers or vegetables) are grown",
    "exampleJP": "（定義）"
  },
  {
    "id": 972,
    "word": "fix",
    "meaning": "修理する",
    "example": "to make (something) whole or able to work properly again",
    "exampleJP": "（定義）"
  },
  {
    "id": 973,
    "word": "ahead",
    "meaning": "前",
    "example": "in or toward the front",
    "exampleJP": "（定義）"
  },
  {
    "id": 974,
    "word": "cross",
    "meaning": "交差する",
    "example": "to go from one side of (something) to the other : to go across (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 975,
    "word": "yeah",
    "meaning": "ああ",
    "example": "used to give a positive answer or reply to a question, request, or offer (informal)",
    "exampleJP": "（定義）"
  },
  {
    "id": 976,
    "word": "weight",
    "meaning": "重さ",
    "example": "a measurement that indicates how heavy a person or thing is",
    "exampleJP": "（定義）"
  },
  {
    "id": 977,
    "word": "legal",
    "meaning": "法律上の、法的な",
    "example": "of or relating to the law, required by the law",
    "exampleJP": "（定義）"
  },
  {
    "id": 978,
    "word": "proposal",
    "meaning": "提案",
    "example": "something (such as a plan or suggestion) that is presented to a person or group of people to consider",
    "exampleJP": "（定義）"
  },
  {
    "id": 979,
    "word": "version",
    "meaning": "版",
    "example": "a particular form of something and other forms",
    "exampleJP": "（定義）"
  },
  {
    "id": 980,
    "word": "conversation",
    "meaning": "会話",
    "example": "an informal talk involving two people or a small group of people",
    "exampleJP": "（定義）"
  },
  {
    "id": 981,
    "word": "somebody",
    "meaning": "誰か",
    "example": "person who is not known, named, or specified",
    "exampleJP": "（定義）"
  },
  {
    "id": 982,
    "word": "pound",
    "meaning": "ポンド",
    "example": "a unit of weight that is equal to 16 ounces or 0.4536 kilograms",
    "exampleJP": "（定義）"
  },
  {
    "id": 983,
    "word": "magazine",
    "meaning": "雑誌",
    "example": "a thin book published every week or month, that has shiny, colorful pages with articles and pictures",
    "exampleJP": "（定義）"
  },
  {
    "id": 984,
    "word": "shape",
    "meaning": "形",
    "example": "the form or outline of an object",
    "exampleJP": "（定義）"
  },
  {
    "id": 985,
    "word": "sea",
    "meaning": "海",
    "example": "the salt water that covers much of the Earth's surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 986,
    "word": "immediately",
    "meaning": "ただちに",
    "example": "now or without waiting or thinking about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 987,
    "word": "welcome",
    "meaning": "ようこそ",
    "example": "used as a friendly greeting to someone who has arrived at a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 988,
    "word": "smile",
    "meaning": "笑顔",
    "example": "an expression on your face that shows happiness, amusement or pleasure",
    "exampleJP": "（定義）"
  },
  {
    "id": 989,
    "word": "communication",
    "meaning": "コミュニケーション",
    "example": "the act of communicating with other people",
    "exampleJP": "（定義）"
  },
  {
    "id": 990,
    "word": "agent",
    "meaning": "代理人",
    "example": "a person who does business for another person : a person who acts on behalf of another",
    "exampleJP": "（定義）"
  },
  {
    "id": 991,
    "word": "traditional",
    "meaning": "伝統的な",
    "example": "following the customs or ways of behaving that have continued in a group of people or society for a long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 992,
    "word": "replace",
    "meaning": "取って代わる",
    "example": "to be used instead of (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 993,
    "word": "judge",
    "meaning": "審判",
    "example": "a person who has the power to make a decision",
    "exampleJP": "（定義）"
  },
  {
    "id": 994,
    "word": "herself",
    "meaning": "彼女自身",
    "example": "the reflexive form of the pronoun 'she'",
    "exampleJP": "（定義）"
  },
  {
    "id": 995,
    "word": "suddenly",
    "meaning": "突然",
    "example": "quickly and unexpectedly",
    "exampleJP": "（定義）"
  },
  {
    "id": 996,
    "word": "generation",
    "meaning": "世代",
    "example": "people born and living during about the same time",
    "exampleJP": "（定義）"
  },
  {
    "id": 997,
    "word": "estimate",
    "meaning": "予算",
    "example": "a rough idea or guess",
    "exampleJP": "（定義）"
  },
  {
    "id": 998,
    "word": "favorite",
    "meaning": "お気に入りの",
    "example": "most liked",
    "exampleJP": "（定義）"
  },
  {
    "id": 999,
    "word": "difficulty",
    "meaning": "困難",
    "example": "the quality of something that makes it hard to do : the difficult nature of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1000,
    "word": "purchase",
    "meaning": "購入する",
    "example": "to buy something, to get by paying money for it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1001,
    "word": "shoot",
    "meaning": "撃つ",
    "example": "to cause a bullet, arrow, etc., to move forward with great force from a weapon",
    "exampleJP": "（定義）"
  },
  {
    "id": 1002,
    "word": "announce",
    "meaning": "発表する",
    "example": "to tell people about something officially or with force or confidence",
    "exampleJP": "（定義）"
  },
  {
    "id": 1003,
    "word": "unless",
    "meaning": "～でない限り",
    "example": "used to say what will happen, be done, or be true if something else does not happen, is not done, or is not true",
    "exampleJP": "（定義）"
  },
  {
    "id": 1004,
    "word": "independent",
    "meaning": "独立",
    "example": "not controlled or ruled by anyone else",
    "exampleJP": "（定義）"
  },
  {
    "id": 1005,
    "word": "recommend",
    "meaning": "薦める",
    "example": "to say that (someone or something) is good and deserves to be chosen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1006,
    "word": "survey",
    "meaning": "調査",
    "example": "an act of studying to make a judgment about it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1007,
    "word": "majority",
    "meaning": "大多数",
    "example": "more than half of a group of people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1008,
    "word": "stick",
    "meaning": "棒",
    "example": "a cut or broken branch or twig",
    "exampleJP": "（定義）"
  },
  {
    "id": 1009,
    "word": "request",
    "meaning": "要請",
    "example": "an act of politely or formally asking for something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1010,
    "word": "rich",
    "meaning": "金持ち",
    "example": "having a lot of money and possessions",
    "exampleJP": "（定義）"
  },
  {
    "id": 1011,
    "word": "wind",
    "meaning": "風",
    "example": "a natural movement of air outside",
    "exampleJP": "（定義）"
  },
  {
    "id": 1012,
    "word": "none",
    "meaning": "誰も・何も～ない",
    "example": "not any of a group of people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1013,
    "word": "exchange",
    "meaning": "交換",
    "example": "an occurrence in which people give things of similar value to each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 1014,
    "word": "budget",
    "meaning": "予算",
    "example": "a plan of how you will spend your money; the amount of money you have for something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1015,
    "word": "famous",
    "meaning": "有名",
    "example": "known or recognized by many people",
    "exampleJP": "（定義）"
  },
  {
    "id": 1016,
    "word": "blood",
    "meaning": "血液",
    "example": "the red liquid that flows through the bodies of people and animals",
    "exampleJP": "（定義）"
  },
  {
    "id": 1017,
    "word": "appropriate",
    "meaning": "適切な",
    "example": "right or suited for some situation or purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1018,
    "word": "block",
    "meaning": "ブロック",
    "example": "a solid piece of material (such as rock or wood) that has flat sides and is usually square or rectangular in shape",
    "exampleJP": "（定義）"
  },
  {
    "id": 1019,
    "word": "warm",
    "meaning": "暖かい",
    "example": "somewhat hot : not cool or cold",
    "exampleJP": "（定義）"
  },
  {
    "id": 1020,
    "word": "count",
    "meaning": "数える",
    "example": "to add (people or things) together to find the total number",
    "exampleJP": "（定義）"
  },
  {
    "id": 1021,
    "word": "scene",
    "meaning": "場面",
    "example": "a division of an act in a play during which the action takes place in a single place without a break in time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1022,
    "word": "writer",
    "meaning": "作家",
    "example": "someone whose job is writing books, stories, articles, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1023,
    "word": "content",
    "meaning": "内容",
    "example": "the things that are in something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1024,
    "word": "prevent",
    "meaning": "防ぐ",
    "example": "to stop (something) from happening or existing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1025,
    "word": "safe",
    "meaning": "安全な",
    "example": "not able or likely to be hurt or harmed in any way : not in danger",
    "exampleJP": "（定義）"
  },
  {
    "id": 1026,
    "word": "invite",
    "meaning": "誘う",
    "example": "to ask (someone) to go somewhere or do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1027,
    "word": "mix",
    "meaning": "混ぜる",
    "example": "to combine (two or more things) to make one thing that is the same throughout",
    "exampleJP": "（定義）"
  },
  {
    "id": 1028,
    "word": "element",
    "meaning": "要素",
    "example": "an essential or particular part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1029,
    "word": "effective",
    "meaning": "効果的な",
    "example": "producing a result that is wanted or having an intended effect",
    "exampleJP": "（定義）"
  },
  {
    "id": 1030,
    "word": "correct",
    "meaning": "正しい",
    "example": "true or accurate;  agreeing with facts",
    "exampleJP": "（定義）"
  },
  {
    "id": 1031,
    "word": "medical",
    "meaning": "医療の",
    "example": "of or relating to the treatment of diseases and injuries",
    "exampleJP": "（定義）"
  },
  {
    "id": 1032,
    "word": "admit",
    "meaning": "認める",
    "example": "to say usually in an unwilling way that you accept or do not deny the truth or existence of (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1033,
    "word": "beat",
    "meaning": "打つ",
    "example": "to hit (something) repeatedly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1034,
    "word": "telephone",
    "meaning": "電話",
    "example": "a system that uses wires and radio signals to send sounds (such as people's voices) over long distances",
    "exampleJP": "（定義）"
  },
  {
    "id": 1035,
    "word": "copy",
    "meaning": "うり二つ",
    "example": "something that is or looks exactly or almost exactly like something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 1036,
    "word": "committee",
    "meaning": "委員会",
    "example": "a group of people who are chosen to make decisions about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1037,
    "word": "aware",
    "meaning": "気づく",
    "example": "knowing or feeling that something exists",
    "exampleJP": "（定義）"
  },
  {
    "id": 1038,
    "word": "advice",
    "meaning": "アドバイス、助言",
    "example": "an opinion or suggestion about what someone should do",
    "exampleJP": "（定義）"
  },
  {
    "id": 1039,
    "word": "handle",
    "meaning": "ハンドル",
    "example": "a part of something that is designed to be held by your hand",
    "exampleJP": "（定義）"
  },
  {
    "id": 1040,
    "word": "glass",
    "meaning": "ガラス",
    "example": "a hard usually transparent material that is used for making windows and other products",
    "exampleJP": "（定義）"
  },
  {
    "id": 1041,
    "word": "trial",
    "meaning": "裁判",
    "example": "a formal meeting in a court in which evidence about crimes",
    "exampleJP": "（定義）"
  },
  {
    "id": 1042,
    "word": "stress",
    "meaning": "ストレス",
    "example": "a state of mental tension and worry caused by problems",
    "exampleJP": "（定義）"
  },
  {
    "id": 1043,
    "word": "radio",
    "meaning": "ラジオ、無線",
    "example": "the system or process that is used for sending and receiving signals through the air without using wires",
    "exampleJP": "（定義）"
  },
  {
    "id": 1044,
    "word": "administration",
    "meaning": "経営管理",
    "example": "the work of organizing and arranging the operation of something, such as a company",
    "exampleJP": "（定義）"
  },
  {
    "id": 1045,
    "word": "complex",
    "meaning": "複雑な",
    "example": "difficult, not easy to understand or explain",
    "exampleJP": "（定義）"
  },
  {
    "id": 1046,
    "word": "text",
    "meaning": "本文",
    "example": "the original words in main writing or speech",
    "exampleJP": "（定義）"
  },
  {
    "id": 1047,
    "word": "context",
    "meaning": "事情",
    "example": "a set of facts surrounding a person or event",
    "exampleJP": "（定義）"
  },
  {
    "id": 1048,
    "word": "ride",
    "meaning": "乗る",
    "example": "to sit on and control the movements of a horse or vehicle",
    "exampleJP": "（定義）"
  },
  {
    "id": 1049,
    "word": "directly",
    "meaning": "直接",
    "example": "with no other person or thing involved or between",
    "exampleJP": "（定義）"
  },
  {
    "id": 1050,
    "word": "heavy",
    "meaning": "重い",
    "example": "having great weight or difficult to lift or move",
    "exampleJP": "（定義）"
  },
  {
    "id": 1051,
    "word": "remove",
    "meaning": "取り除く",
    "example": "to move, erase or take away from a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1052,
    "word": "conduct",
    "meaning": "導く",
    "example": "to direct, lead or guide something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1053,
    "word": "equipment",
    "meaning": "設備",
    "example": "the things that are used for a particular activity or purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1054,
    "word": "otherwise",
    "meaning": "さもなければ",
    "example": "in a different way or  in all ways except the one mentioned",
    "exampleJP": "（定義）"
  },
  {
    "id": 1055,
    "word": "title",
    "meaning": "題名",
    "example": "the name given to something (such as a book, song, or movie) to identify or describe it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1056,
    "word": "extra",
    "meaning": "余計な",
    "example": "more than is usual or necessary : additional",
    "exampleJP": "（定義）"
  },
  {
    "id": 1057,
    "word": "executive",
    "meaning": "幹部",
    "example": "people who have important jobs in business",
    "exampleJP": "（定義）"
  },
  {
    "id": 1058,
    "word": "chair",
    "meaning": "いす",
    "example": "a seat for one person that has a back and usually four legs",
    "exampleJP": "（定義）"
  },
  {
    "id": 1059,
    "word": "expensive",
    "meaning": "高い",
    "example": "costing a lot of money",
    "exampleJP": "（定義）"
  },
  {
    "id": 1060,
    "word": "sample",
    "meaning": "見本",
    "example": "a small amount of something that gives you information about the thing it was taken from",
    "exampleJP": "（定義）"
  },
  {
    "id": 1061,
    "word": "sex",
    "meaning": "性別",
    "example": "the state of being male or female mostly biological",
    "exampleJP": "（定義）"
  },
  {
    "id": 1062,
    "word": "deliver",
    "meaning": "届ける",
    "example": "to take (something) to a person or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1063,
    "word": "video",
    "meaning": "ビデオ",
    "example": "a film or television program recorded on videotape",
    "exampleJP": "（定義）"
  },
  {
    "id": 1064,
    "word": "connection",
    "meaning": "接続",
    "example": "something that joins or connects two or more things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1065,
    "word": "primary",
    "meaning": "主要な",
    "example": "most important, most basic or essential",
    "exampleJP": "（定義）"
  },
  {
    "id": 1066,
    "word": "weather",
    "meaning": "天気",
    "example": "the state of the air and atmosphere at a particular time and place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1067,
    "word": "collect",
    "meaning": "集める",
    "example": "to get (things) from different places and bring them together",
    "exampleJP": "（定義）"
  },
  {
    "id": 1068,
    "word": "inform",
    "meaning": "知らせる",
    "example": "to give information or facts about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1069,
    "word": "principle",
    "meaning": "原理、原則",
    "example": "a moral rule or belief that governs person's behavior",
    "exampleJP": "（定義）"
  },
  {
    "id": 1070,
    "word": "straight",
    "meaning": "真っすぐな",
    "example": "not having curves, bends, or angles",
    "exampleJP": "（定義）"
  },
  {
    "id": 1071,
    "word": "appeal",
    "meaning": "訴え、要請",
    "example": "when a lot of people are asked to give money, information, or help; a request to change an official decision",
    "exampleJP": "（定義）"
  },
  {
    "id": 1072,
    "word": "highly",
    "meaning": "非常に、高く",
    "example": "very or to a large degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 1073,
    "word": "trust",
    "meaning": "信頼",
    "example": "belief that someone or something is reliable, good, honest, effective, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1074,
    "word": "wonderful",
    "meaning": "素晴らしい",
    "example": "very good",
    "exampleJP": "（定義）"
  },
  {
    "id": 1075,
    "word": "flat",
    "meaning": "平らな",
    "example": "having a smooth, level, or even surface : not having curves or bumps",
    "exampleJP": "（定義）"
  },
  {
    "id": 1076,
    "word": "absolutely",
    "meaning": "全く",
    "example": "completely",
    "exampleJP": "（定義）"
  },
  {
    "id": 1077,
    "word": "flow",
    "meaning": "流れる",
    "example": "to move in a steady and continuous way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1078,
    "word": "fair",
    "meaning": "公平",
    "example": "agreeing with what is thought to be right or acceptable",
    "exampleJP": "（定義）"
  },
  {
    "id": 1079,
    "word": "additional",
    "meaning": "追加の",
    "example": "extra to what already exists",
    "exampleJP": "（定義）"
  },
  {
    "id": 1080,
    "word": "responsible",
    "meaning": "責任のある",
    "example": "having the duty of dealing with something important",
    "exampleJP": "（定義）"
  },
  {
    "id": 1081,
    "word": "farm",
    "meaning": "農場",
    "example": "land that is used for growing crops or raising animals",
    "exampleJP": "（定義）"
  },
  {
    "id": 1082,
    "word": "collection",
    "meaning": "収集",
    "example": "the act or process of getting things from different places and bringing them together",
    "exampleJP": "（定義）"
  },
  {
    "id": 1083,
    "word": "hang",
    "meaning": "吊るす",
    "example": "to attach or place something so that it is held up without support from below",
    "exampleJP": "（定義）"
  },
  {
    "id": 1084,
    "word": "negative",
    "meaning": "否定的な",
    "example": "not having enthusiasm or positive opinions about something; an amount less than zero",
    "exampleJP": "（定義）"
  },
  {
    "id": 1085,
    "word": "band",
    "meaning": "バンド",
    "example": "a group of people or animals",
    "exampleJP": "（定義）"
  },
  {
    "id": 1086,
    "word": "relative",
    "meaning": "関係性のある",
    "example": "compared to someone or something else or to each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 1087,
    "word": "tour",
    "meaning": "旅行",
    "example": "a journey through the different parts of a country, region, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1088,
    "word": "alternative",
    "meaning": "選択肢",
    "example": "to give or express a choice",
    "exampleJP": "（定義）"
  },
  {
    "id": 1089,
    "word": "software",
    "meaning": "ソフトウェア",
    "example": "programs that you use to make a computer do different things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1090,
    "word": "pair",
    "meaning": "一組、一対",
    "example": "two things that are the same and are meant to be used together",
    "exampleJP": "（定義）"
  },
  {
    "id": 1091,
    "word": "ship",
    "meaning": "船",
    "example": "a large boat used for traveling long distances over the sea",
    "exampleJP": "（定義）"
  },
  {
    "id": 1092,
    "word": "attitude",
    "meaning": "態度",
    "example": "the way you act, think and feel about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1093,
    "word": "cheap",
    "meaning": "安い",
    "example": "not costing a lot of money",
    "exampleJP": "（定義）"
  },
  {
    "id": 1094,
    "word": "double",
    "meaning": "二重の",
    "example": "made of two parts that are similar or exactly the same",
    "exampleJP": "（定義）"
  },
  {
    "id": 1095,
    "word": "leg",
    "meaning": "脚",
    "example": "one of the long body parts that are used especially for standing, walking, and running",
    "exampleJP": "（定義）"
  },
  {
    "id": 1096,
    "word": "observe",
    "meaning": "観察する",
    "example": "to notice or perceive carefully",
    "exampleJP": "（定義）"
  },
  {
    "id": 1097,
    "word": "sentence",
    "meaning": "文",
    "example": "a group of words that expresses a statement, question, command, or wish Sentences usually contain a subject and verb.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1098,
    "word": "print",
    "meaning": "印刷する",
    "example": "to cause (words, images, etc.) to appear on paper or cloth by using a machine",
    "exampleJP": "（定義）"
  },
  {
    "id": 1099,
    "word": "progress",
    "meaning": "前進",
    "example": "movement forward or toward a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1100,
    "word": "truth",
    "meaning": "真実",
    "example": "the real facts about something : the things that are true",
    "exampleJP": "（定義）"
  },
  {
    "id": 1101,
    "word": "nobody",
    "meaning": "だれも～ない",
    "example": "no person, no one",
    "exampleJP": "（定義）"
  },
  {
    "id": 1102,
    "word": "examine",
    "meaning": "調べる",
    "example": "to look at (something) closely and carefully in order to learn more about it, to find problems, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1103,
    "word": "lay",
    "meaning": "敷く、置く",
    "example": "to place (someone or something) down gently in a flat position",
    "exampleJP": "（定義）"
  },
  {
    "id": 1104,
    "word": "speed",
    "meaning": "速度",
    "example": "the rate at which someone or something moves or travels",
    "exampleJP": "（定義）"
  },
  {
    "id": 1105,
    "word": "politics",
    "meaning": "政治",
    "example": "activities that relate to influencing the actions and policies of a government or getting and keeping power in a government",
    "exampleJP": "（定義）"
  },
  {
    "id": 1106,
    "word": "reply",
    "meaning": "返事をする",
    "example": "to say, write, or do something as an answer or response",
    "exampleJP": "（定義）"
  },
  {
    "id": 1107,
    "word": "display",
    "meaning": "展示する",
    "example": "to put  where people can see it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1108,
    "word": "transfer",
    "meaning": "移動する",
    "example": "to move from one place to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 1109,
    "word": "perfect",
    "meaning": "完璧",
    "example": "having no mistakes or flaws",
    "exampleJP": "（定義）"
  },
  {
    "id": 1110,
    "word": "slightly",
    "meaning": "わずかに",
    "example": "a little",
    "exampleJP": "（定義）"
  },
  {
    "id": 1111,
    "word": "overall",
    "meaning": "全体の",
    "example": "when everything is included",
    "exampleJP": "（定義）"
  },
  {
    "id": 1112,
    "word": "intend",
    "meaning": "～するつもりだ",
    "example": "to plan or want to do (something) : to have (something) in your mind as a purpose or goal",
    "exampleJP": "（定義）"
  },
  {
    "id": 1113,
    "word": "user",
    "meaning": "使用者",
    "example": "someone who uses a product, machine, or service",
    "exampleJP": "（定義）"
  },
  {
    "id": 1114,
    "word": "respond",
    "meaning": "返事をする",
    "example": "to say or write to answer the question",
    "exampleJP": "（定義）"
  },
  {
    "id": 1115,
    "word": "dinner",
    "meaning": "夕食",
    "example": "the main meal of the day",
    "exampleJP": "（定義）"
  },
  {
    "id": 1116,
    "word": "slow",
    "meaning": "遅い",
    "example": "not moving quickly or not able to move quickly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1117,
    "word": "regular",
    "meaning": "定期的な",
    "example": "happening over and over again at the same time or in the same way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1118,
    "word": "physical",
    "meaning": "身体の",
    "example": "relating to the body of a person",
    "exampleJP": "（定義）"
  },
  {
    "id": 1119,
    "word": "apart",
    "meaning": "離れた",
    "example": "separated by an amount of space",
    "exampleJP": "（定義）"
  },
  {
    "id": 1120,
    "word": "suit",
    "meaning": "スーツ",
    "example": "a set of clothes that usually consists of a jacket and a skirt or pair of pants that are made out of the same material",
    "exampleJP": "（定義）"
  },
  {
    "id": 1121,
    "word": "federal",
    "meaning": "連邦の",
    "example": "a system of  government",
    "exampleJP": "（定義）"
  },
  {
    "id": 1122,
    "word": "reveal",
    "meaning": "明かす",
    "example": "to make known, to show or prove",
    "exampleJP": "（定義）"
  },
  {
    "id": 1123,
    "word": "percentage",
    "meaning": "割合",
    "example": "an amount of something, expressed as a number out of 100",
    "exampleJP": "（定義）"
  },
  {
    "id": 1124,
    "word": "peace",
    "meaning": "平和",
    "example": "freedom from any disturbance; when there is no war or fighting",
    "exampleJP": "（定義）"
  },
  {
    "id": 1125,
    "word": "status",
    "meaning": "地位",
    "example": "the position or rank compared in a society",
    "exampleJP": "（定義）"
  },
  {
    "id": 1126,
    "word": "crime",
    "meaning": "犯罪",
    "example": "an illegal act for which someone can be punished by the government",
    "exampleJP": "（定義）"
  },
  {
    "id": 1127,
    "word": "decline",
    "meaning": "下降する",
    "example": "to become lower, smaller or fewer in amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 1128,
    "word": "decade",
    "meaning": "１０年",
    "example": "a period of 10 years",
    "exampleJP": "（定義）"
  },
  {
    "id": 1129,
    "word": "launch",
    "meaning": "発射する、進水させる、発売する",
    "example": "to send a spacecraft or missile into the sky, or a ship into the water; to start to sell a new product",
    "exampleJP": "（定義）"
  },
  {
    "id": 1130,
    "word": "warn",
    "meaning": "警告する",
    "example": "to tell (someone) about possible danger or trouble",
    "exampleJP": "（定義）"
  },
  {
    "id": 1131,
    "word": "consumer",
    "meaning": "消費者",
    "example": "someone who buys or uses goods or services",
    "exampleJP": "（定義）"
  },
  {
    "id": 1132,
    "word": "favor",
    "meaning": "恩恵、世話",
    "example": "a kind or helpful act that you do for someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1133,
    "word": "dry",
    "meaning": "乾く",
    "example": "having no or very little water or liquid",
    "exampleJP": "（定義）"
  },
  {
    "id": 1134,
    "word": "partner",
    "meaning": "相棒",
    "example": "someone's husband or wife or the person someone has sexual relations with",
    "exampleJP": "（定義）"
  },
  {
    "id": 1135,
    "word": "institution",
    "meaning": "機関",
    "example": "a large and important organization, such as a university or bank",
    "exampleJP": "（定義）"
  },
  {
    "id": 1136,
    "word": "spot",
    "meaning": "場所",
    "example": "a small area of a surface that is different from other areas",
    "exampleJP": "（定義）"
  },
  {
    "id": 1137,
    "word": "horse",
    "meaning": "馬",
    "example": "a large animal that is used for riding and for carrying and pulling things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1138,
    "word": "eventually",
    "meaning": "最終的に",
    "example": "in the end, especially after a long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1139,
    "word": "heat",
    "meaning": "熱",
    "example": "energy that causes things to become warmer",
    "exampleJP": "（定義）"
  },
  {
    "id": 1140,
    "word": "excite",
    "meaning": "興奮させる",
    "example": "to cause feelings of enthusiasm in (someone)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1141,
    "word": "reader",
    "meaning": "先導者",
    "example": "someone who reads",
    "exampleJP": "（定義）"
  },
  {
    "id": 1142,
    "word": "importance",
    "meaning": "重要性",
    "example": "the quality or state of being important",
    "exampleJP": "（定義）"
  },
  {
    "id": 1143,
    "word": "distance",
    "meaning": "距離",
    "example": "the amount of space between two places or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1144,
    "word": "guide",
    "meaning": "案内人",
    "example": "a person who leads or directs other people on a journey",
    "exampleJP": "（定義）"
  },
  {
    "id": 1145,
    "word": "grant",
    "meaning": "許諾する、与える",
    "example": "to agree to do, give, or allow something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1146,
    "word": "taxi",
    "meaning": "タクシー",
    "example": "a car that carries passengers to a place for an amount of money that is based on the distance traveled",
    "exampleJP": "（定義）"
  },
  {
    "id": 1147,
    "word": "feed",
    "meaning": "食物を与える",
    "example": "to give food to someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1148,
    "word": "pain",
    "meaning": "痛み",
    "example": "the physical feeling caused by disease, injury, or something that hurts the body",
    "exampleJP": "（定義）"
  },
  {
    "id": 1149,
    "word": "sector",
    "meaning": "課",
    "example": "an area that includes certain kinds of job",
    "exampleJP": "（定義）"
  },
  {
    "id": 1150,
    "word": "mistake",
    "meaning": "誤り",
    "example": "something that is not correct : a wrong action, statement, or judgment",
    "exampleJP": "（定義）"
  },
  {
    "id": 1151,
    "word": "ensure",
    "meaning": "確保する",
    "example": "to make something sure, certain, or safe",
    "exampleJP": "（定義）"
  },
  {
    "id": 1152,
    "word": "satisfy",
    "meaning": "満足させる",
    "example": "to cause (someone) to be happy or pleased",
    "exampleJP": "（定義）"
  },
  {
    "id": 1153,
    "word": "chief",
    "meaning": "長、主任",
    "example": "the person who is the leader of a group of people, of an organization, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1154,
    "word": "cool",
    "meaning": "冷たい、涼しい",
    "example": "somewhat cold : not warm or hot",
    "exampleJP": "（定義）"
  },
  {
    "id": 1155,
    "word": "expert",
    "meaning": "専門家",
    "example": "a person who is very skillful or knowledgeable",
    "exampleJP": "（定義）"
  },
  {
    "id": 1156,
    "word": "wave",
    "meaning": "波",
    "example": "an area of moving water that is raised above the main surface of an ocean, a lake, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1157,
    "word": "south",
    "meaning": "南",
    "example": "the direction that is the opposite of north",
    "exampleJP": "（定義）"
  },
  {
    "id": 1158,
    "word": "labor",
    "meaning": "労働",
    "example": "work, especially the type of work that needs a lot of physical effort; workers",
    "exampleJP": "（定義）"
  },
  {
    "id": 1159,
    "word": "surface",
    "meaning": "表面",
    "example": "an outside or upper layer of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1160,
    "word": "library",
    "meaning": "図書館",
    "example": "a place where books, magazines, and other materials (such as videos and musical recordings) are available for people to use or borrow",
    "exampleJP": "（定義）"
  },
  {
    "id": 1161,
    "word": "excellent",
    "meaning": "すばらしい",
    "example": "very good : extremely good",
    "exampleJP": "（定義）"
  },
  {
    "id": 1162,
    "word": "edge",
    "meaning": "端",
    "example": "the line or part where an object or area begins or ends",
    "exampleJP": "（定義）"
  },
  {
    "id": 1163,
    "word": "camp",
    "meaning": "キャンプ",
    "example": "a place that is usually far away from cities and that has tents, small houses, etc., that people can live in for a short period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1164,
    "word": "audience",
    "meaning": "観衆",
    "example": "a group of people who gather together to listen to something (such as a concert) or watch something (such as a movie or play)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1165,
    "word": "lift",
    "meaning": "持ち上げる",
    "example": "to move (something or someone) to a higher position",
    "exampleJP": "（定義）"
  },
  {
    "id": 1166,
    "word": "procedure",
    "meaning": "手続き",
    "example": "the official or usual way of doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1167,
    "word": "email",
    "meaning": "e-メール",
    "example": "to send a message electronically; a message sent electronically; a system for sending messages electronically",
    "exampleJP": "（定義）"
  },
  {
    "id": 1168,
    "word": "global",
    "meaning": "グローバル",
    "example": "relating to the whole world",
    "exampleJP": "（定義）"
  },
  {
    "id": 1169,
    "word": "struggle",
    "meaning": "奮闘する",
    "example": "to try very hard to do, achieve, or deal with something that is difficult or that causes problems",
    "exampleJP": "（定義）"
  },
  {
    "id": 1170,
    "word": "advertise",
    "meaning": "宣伝する",
    "example": "to make the public aware of something (such as a product) that is being sold",
    "exampleJP": "（定義）"
  },
  {
    "id": 1171,
    "word": "select",
    "meaning": "選択する",
    "example": "to choose from a group, something most suitable",
    "exampleJP": "（定義）"
  },
  {
    "id": 1172,
    "word": "surround",
    "meaning": "周り",
    "example": "to be on every side of (someone or something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1173,
    "word": "extent",
    "meaning": "規模",
    "example": "the range, distance, or space that is covered or affected by something or included in something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1174,
    "word": "river",
    "meaning": "川",
    "example": "a large natural flow of water that crosses an area of land that goes into the ocean",
    "exampleJP": "（定義）"
  },
  {
    "id": 1175,
    "word": "annual",
    "meaning": "年に一度",
    "example": "happening once a year",
    "exampleJP": "（定義）"
  },
  {
    "id": 1176,
    "word": "fully",
    "meaning": "完全に",
    "example": "completely",
    "exampleJP": "（定義）"
  },
  {
    "id": 1177,
    "word": "contrast",
    "meaning": "対比する",
    "example": "to compare, the state of being different",
    "exampleJP": "（定義）"
  },
  {
    "id": 1178,
    "word": "roll",
    "meaning": "転がる",
    "example": "to move across the ground or another surface by turning over and over",
    "exampleJP": "（定義）"
  },
  {
    "id": 1179,
    "word": "reality",
    "meaning": "現実",
    "example": "the way things or situations really are",
    "exampleJP": "（定義）"
  },
  {
    "id": 1180,
    "word": "photograph",
    "meaning": "写真",
    "example": "a picture made by a camera",
    "exampleJP": "（定義）"
  },
  {
    "id": 1181,
    "word": "artist",
    "meaning": "芸術家",
    "example": "someone who creates art, especially paintings and drawings",
    "exampleJP": "（定義）"
  },
  {
    "id": 1182,
    "word": "conflict",
    "meaning": "闘争",
    "example": "a struggle or fight for an idea, power, property, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1183,
    "word": "entire",
    "meaning": "全体の",
    "example": "complete or full, with no part left out, whole",
    "exampleJP": "（定義）"
  },
  {
    "id": 1184,
    "word": "presence",
    "meaning": "存在",
    "example": "the fact of being in a particular place : the state of being present",
    "exampleJP": "（定義）"
  },
  {
    "id": 1185,
    "word": "crowd",
    "meaning": "人混み",
    "example": "a large group of people who are together in one place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1186,
    "word": "corner",
    "meaning": "角",
    "example": "the point or area where two lines, edges, or sides of something meet",
    "exampleJP": "（定義）"
  },
  {
    "id": 1187,
    "word": "gas",
    "meaning": "ガソリン",
    "example": "a substance (such as oxygen or hydrogen) that is like air and has no fixed shape",
    "exampleJP": "（定義）"
  },
  {
    "id": 1188,
    "word": "shift",
    "meaning": "移す",
    "example": "to move or to cause a different place, position",
    "exampleJP": "（定義）"
  },
  {
    "id": 1189,
    "word": "net",
    "meaning": "網",
    "example": "a device that is used for catching or holding things or for keeping things out of a space and that is made of pieces of string, rope, wire, etc., woven together with spaces in between",
    "exampleJP": "（定義）"
  },
  {
    "id": 1190,
    "word": "category",
    "meaning": "分類",
    "example": "a group of people or things that are similar in some way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1191,
    "word": "secretary",
    "meaning": "秘書",
    "example": "a person whose job is to do routine work for someone else",
    "exampleJP": "（定義）"
  },
  {
    "id": 1192,
    "word": "defense",
    "meaning": "防御",
    "example": "the act of defending someone from attack",
    "exampleJP": "（定義）"
  },
  {
    "id": 1193,
    "word": "quick",
    "meaning": "早い",
    "example": "done or happening in a short amount of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1194,
    "word": "cook",
    "meaning": "料理人",
    "example": "someone who prepares and cooks food for eating at home, in a restaurant, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1195,
    "word": "spread",
    "meaning": "広がる",
    "example": "to open, arrange, or place (something) over a large area",
    "exampleJP": "（定義）"
  },
  {
    "id": 1196,
    "word": "nuclear",
    "meaning": "核",
    "example": "relating to atomic power",
    "exampleJP": "（定義）"
  },
  {
    "id": 1197,
    "word": "scale",
    "meaning": "規模",
    "example": "a device that is used for weighing people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1198,
    "word": "driver",
    "meaning": "運転手",
    "example": "someone who drives a vehicle",
    "exampleJP": "（定義）"
  },
  {
    "id": 1199,
    "word": "ball",
    "meaning": "ボール",
    "example": "a usually round object that is used in a game or sport or as a toy",
    "exampleJP": "（定義）"
  },
  {
    "id": 1200,
    "word": "cry",
    "meaning": "泣く",
    "example": "to produce tears from your eyes often while making loud sounds because of pain, sorrow, or other strong emotions",
    "exampleJP": "（定義）"
  },
  {
    "id": 1201,
    "word": "introduction",
    "meaning": "導入",
    "example": "the act of making a person known to others by name",
    "exampleJP": "（定義）"
  },
  {
    "id": 1202,
    "word": "requirement",
    "meaning": "要件",
    "example": "something that is needed or demanded",
    "exampleJP": "（定義）"
  },
  {
    "id": 1203,
    "word": "north",
    "meaning": "北",
    "example": "the direction that is to your left when you are facing the rising sun",
    "exampleJP": "（定義）"
  },
  {
    "id": 1204,
    "word": "confirm",
    "meaning": "確認する",
    "example": "to make sure something is true or correct",
    "exampleJP": "（定義）"
  },
  {
    "id": 1205,
    "word": "senior",
    "meaning": "上級の、年上の",
    "example": "having a higher level job or position than someone else; older",
    "exampleJP": "（定義）"
  },
  {
    "id": 1206,
    "word": "photo",
    "meaning": "写真",
    "example": "a picture made by a camera",
    "exampleJP": "（定義）"
  },
  {
    "id": 1207,
    "word": "refuse",
    "meaning": "拒む",
    "example": "to say that you will not accept (something, such as a gift or offer)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1208,
    "word": "transport",
    "meaning": "運ぶ",
    "example": "to carry things from one place to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 1209,
    "word": "emerge",
    "meaning": "出現する",
    "example": "to become known or prominent",
    "exampleJP": "（定義）"
  },
  {
    "id": 1210,
    "word": "map",
    "meaning": "地図",
    "example": "a picture or chart that shows the rivers, mountains, streets, etc., in a particular area",
    "exampleJP": "（定義）"
  },
  {
    "id": 1211,
    "word": "concept",
    "meaning": "概念・発想",
    "example": "an abstract idea of something or how it works",
    "exampleJP": "（定義）"
  },
  {
    "id": 1212,
    "word": "island",
    "meaning": "島",
    "example": "an area of land that is surrounded by water",
    "exampleJP": "（定義）"
  },
  {
    "id": 1213,
    "word": "reform",
    "meaning": "改革",
    "example": "when changes are made to improve a system, organization, or law, or a change that is made",
    "exampleJP": "（定義）"
  },
  {
    "id": 1214,
    "word": "neither",
    "meaning": "どちらも～ない",
    "example": "not one or the other of two people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1215,
    "word": "football",
    "meaning": "サッカー",
    "example": "a game in which two teams of players try to kick, run with, or throw an oval ball across each other's goal line; a ball used to play football",
    "exampleJP": "（定義）"
  },
  {
    "id": 1216,
    "word": "survive",
    "meaning": "生き残る",
    "example": "to remain alive;  to continue to live",
    "exampleJP": "（定義）"
  },
  {
    "id": 1217,
    "word": "flight",
    "meaning": "飛行",
    "example": "a journey in an aircraft; the act of flying",
    "exampleJP": "（定義）"
  },
  {
    "id": 1218,
    "word": "left",
    "meaning": "左",
    "example": "located on the same side of your body as your heart",
    "exampleJP": "（定義）"
  },
  {
    "id": 1219,
    "word": "solve",
    "meaning": "解決する",
    "example": "to find a way to deal with and end (a problem)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1220,
    "word": "neighbor",
    "meaning": "隣の",
    "example": "a person who lives next to or near another person",
    "exampleJP": "（定義）"
  },
  {
    "id": 1221,
    "word": "background",
    "meaning": "背景",
    "example": "Sounds or images that are not the main focus; a persons life experience up to now",
    "exampleJP": "（定義）"
  },
  {
    "id": 1222,
    "word": "technique",
    "meaning": "技術",
    "example": "a way of doing by using special knowledge or skill",
    "exampleJP": "（定義）"
  },
  {
    "id": 1223,
    "word": "traffic",
    "meaning": "交通",
    "example": "the cars, trucks, etc. using a road",
    "exampleJP": "（定義）"
  },
  {
    "id": 1224,
    "word": "improvement",
    "meaning": "改善",
    "example": "when something gets better or when you make it better",
    "exampleJP": "（定義）"
  },
  {
    "id": 1225,
    "word": "tool",
    "meaning": "道具",
    "example": "something (such as a hammer, saw, shovel, etc.) that you hold in your hand and use for a particular task",
    "exampleJP": "（定義）"
  },
  {
    "id": 1226,
    "word": "consequence",
    "meaning": "結果",
    "example": "the result of an action or situation, especially a bad result",
    "exampleJP": "（定義）"
  },
  {
    "id": 1227,
    "word": "circumstance",
    "meaning": "取り巻く環境",
    "example": "a condition or fact affects a situation, environment",
    "exampleJP": "（定義）"
  },
  {
    "id": 1228,
    "word": "smoke",
    "meaning": "煙",
    "example": "the cloud of black, gray, or white gases and dust that is produced by burning something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1229,
    "word": "reaction",
    "meaning": "反応",
    "example": "something you say, feel, or do because of something that has happened",
    "exampleJP": "（定義）"
  },
  {
    "id": 1230,
    "word": "rain",
    "meaning": "雨",
    "example": "water that falls in drops from clouds in the sky",
    "exampleJP": "（定義）"
  },
  {
    "id": 1231,
    "word": "busy",
    "meaning": "忙しい",
    "example": "actively doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1232,
    "word": "lesson",
    "meaning": "授業",
    "example": "an activity that you do in order to learn something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1233,
    "word": "brain",
    "meaning": "脳",
    "example": "the organ of the body in the head that controls functions, movements, sensations, and thoughts",
    "exampleJP": "（定義）"
  },
  {
    "id": 1234,
    "word": "mass",
    "meaning": "巨大",
    "example": "a usually large amount of a substance that has no particular shape",
    "exampleJP": "（定義）"
  },
  {
    "id": 1235,
    "word": "funny",
    "meaning": "おかしい",
    "example": "causing laughter",
    "exampleJP": "（定義）"
  },
  {
    "id": 1236,
    "word": "contribute",
    "meaning": "貢献する",
    "example": "to give (money) or help to something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1237,
    "word": "failure",
    "meaning": "失敗",
    "example": "the act or result of failing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1238,
    "word": "schedule",
    "meaning": "日程",
    "example": "a plan of things that will be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 1239,
    "word": "speaker",
    "meaning": "スピーカー",
    "example": "the part of a radio, CD player, etc. which the sound comes out of; a person who is speaking",
    "exampleJP": "（定義）"
  },
  {
    "id": 1240,
    "word": "bottom",
    "meaning": "底",
    "example": "the lowest part, point, or level of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1241,
    "word": "adopt",
    "meaning": "採用する",
    "example": "to begin to use or have (a different manner, method, etc.)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1242,
    "word": "combine",
    "meaning": "組み合わせる",
    "example": "to cause (two or more things) to be together or to work together",
    "exampleJP": "（定義）"
  },
  {
    "id": 1243,
    "word": "mountain",
    "meaning": "山",
    "example": "an area of land that rises very high above the land around it and that is higher than a hill",
    "exampleJP": "（定義）"
  },
  {
    "id": 1244,
    "word": "waste",
    "meaning": "無駄にする",
    "example": "to use (something valuable) in a way that is not necessary or effective",
    "exampleJP": "（定義）"
  },
  {
    "id": 1245,
    "word": "hide",
    "meaning": "隠れる",
    "example": "to put (something) in a place where it cannot be seen or found",
    "exampleJP": "（定義）"
  },
  {
    "id": 1246,
    "word": "marriage",
    "meaning": "結婚",
    "example": "the relationship that exists between a husband and a wife",
    "exampleJP": "（定義）"
  },
  {
    "id": 1247,
    "word": "ticket",
    "meaning": "チケット",
    "example": "a piece of paper that allows you to see a show, participate in an event, travel on a vehicle, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1248,
    "word": "meal",
    "meaning": "ご飯",
    "example": "the foods eaten or prepared for eating at one time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1249,
    "word": "colleague",
    "meaning": "同僚",
    "example": "a person you work together or cooperate with",
    "exampleJP": "（定義）"
  },
  {
    "id": 1250,
    "word": "bag",
    "meaning": "バッグ",
    "example": "a container made of thin material (such as paper, plastic, or cloth) that opens at the top and is used for holding or carrying things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1251,
    "word": "repeat",
    "meaning": "繰り返す",
    "example": "to say (something) again",
    "exampleJP": "（定義）"
  },
  {
    "id": 1252,
    "word": "equal",
    "meaning": "等しい",
    "example": "the same in number, amount, degree or quality",
    "exampleJP": "（定義）"
  },
  {
    "id": 1253,
    "word": "expression",
    "meaning": "表現",
    "example": "the act of making your thoughts, feelings, etc., known by speech, writing, or some other method : the act of expressing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1254,
    "word": "plus",
    "meaning": "プラス",
    "example": "having a value that is above zero",
    "exampleJP": "（定義）"
  },
  {
    "id": 1255,
    "word": "extremely",
    "meaning": "極めて",
    "example": "very, or much more than usual",
    "exampleJP": "（定義）"
  },
  {
    "id": 1256,
    "word": "owner",
    "meaning": "持ち主",
    "example": "someone who legally owns something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1257,
    "word": "plane",
    "meaning": "飛行機",
    "example": "a vehicle that flies and has an engine and wings",
    "exampleJP": "（定義）"
  },
  {
    "id": 1258,
    "word": "commercial",
    "meaning": "商業の",
    "example": "related to or used in the buying and selling of goods and services",
    "exampleJP": "（定義）"
  },
  {
    "id": 1259,
    "word": "lady",
    "meaning": "女性",
    "example": "a woman who behaves in a polite way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1260,
    "word": "duty",
    "meaning": "業務",
    "example": "something that is done as part of a job",
    "exampleJP": "（定義）"
  },
  {
    "id": 1261,
    "word": "strength",
    "meaning": "体力",
    "example": "the quality or state of being physically strong",
    "exampleJP": "（定義）"
  },
  {
    "id": 1262,
    "word": "connect",
    "meaning": "つなぐ",
    "example": "to join (two or more things) together",
    "exampleJP": "（定義）"
  },
  {
    "id": 1263,
    "word": "cultural",
    "meaning": "文化の",
    "example": "relating to the habits, traditions, art, beliefs, etc. of a society",
    "exampleJP": "（定義）"
  },
  {
    "id": 1264,
    "word": "arrange",
    "meaning": "並べる",
    "example": "to move and organize (things) into a particular order or position",
    "exampleJP": "（定義）"
  },
  {
    "id": 1265,
    "word": "scheme",
    "meaning": "計画",
    "example": "a clever plan to do or get something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1266,
    "word": "payment",
    "meaning": "支払い",
    "example": "the act of paying; the amount of money that is paid",
    "exampleJP": "（定義）"
  },
  {
    "id": 1267,
    "word": "unfortunately",
    "meaning": "残念ながら",
    "example": "used to say that you wish something was not true or that something had not happened",
    "exampleJP": "（定義）"
  },
  {
    "id": 1268,
    "word": "brief",
    "meaning": "短時間の",
    "example": "lasting, having only a short period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1269,
    "word": "bird",
    "meaning": "鳥",
    "example": "an animal that has wings and is covered with feathers",
    "exampleJP": "（定義）"
  },
  {
    "id": 1270,
    "word": "demonstrate",
    "meaning": "実演する",
    "example": "to prove by showing examples",
    "exampleJP": "（定義）"
  },
  {
    "id": 1271,
    "word": "contribution",
    "meaning": "貢献",
    "example": "something that you do or give to help produce or develop something, or to help make something successful",
    "exampleJP": "（定義）"
  },
  {
    "id": 1272,
    "word": "appreciate",
    "meaning": "感謝する",
    "example": "to be grateful, thankful for (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1273,
    "word": "chapter",
    "meaning": "章",
    "example": "one of the main sections, periods of a book",
    "exampleJP": "（定義）"
  },
  {
    "id": 1274,
    "word": "secret",
    "meaning": "秘密な",
    "example": "kept hidden from others",
    "exampleJP": "（定義）"
  },
  {
    "id": 1275,
    "word": "apparently",
    "meaning": "～そうだ、～らしい",
    "example": "used to say that something seems to be true, although it is not certain",
    "exampleJP": "（定義）"
  },
  {
    "id": 1276,
    "word": "novel",
    "meaning": "小説",
    "example": "a book that tells a story about imaginary people and events",
    "exampleJP": "（定義）"
  },
  {
    "id": 1277,
    "word": "union",
    "meaning": "組合",
    "example": "an organization of workers formed to protect the rights",
    "exampleJP": "（定義）"
  },
  {
    "id": 1278,
    "word": "burn",
    "meaning": "燃える",
    "example": "to give off heat, light, and gases",
    "exampleJP": "（定義）"
  },
  {
    "id": 1279,
    "word": "trend",
    "meaning": "傾向、動向",
    "example": "a general direction of developing, proceeding",
    "exampleJP": "（定義）"
  },
  {
    "id": 1280,
    "word": "initial",
    "meaning": "最初の",
    "example": "existing or occurring at the beginning",
    "exampleJP": "（定義）"
  },
  {
    "id": 1281,
    "word": "pleasure",
    "meaning": "喜び",
    "example": "a feeling of happiness, enjoyment, or satisfaction : a pleasant or pleasing feeling",
    "exampleJP": "（定義）"
  },
  {
    "id": 1282,
    "word": "suggestion",
    "meaning": "提案",
    "example": "an idea about what someone should do or how someone should behave",
    "exampleJP": "（定義）"
  },
  {
    "id": 1283,
    "word": "critical",
    "meaning": "批判的な",
    "example": "used to describe negative comments or judgments about something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1284,
    "word": "gather",
    "meaning": "集合",
    "example": "to bring (things or people) together into a group or collect things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1285,
    "word": "mostly",
    "meaning": "たいていは",
    "example": "mainly or most of the time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1286,
    "word": "earth",
    "meaning": "地球",
    "example": "the planet on which we live",
    "exampleJP": "（定義）"
  },
  {
    "id": 1287,
    "word": "pop",
    "meaning": "ポンと音を立てる、破裂させる",
    "example": "to make a short sound like a small explosion, or to make something do this by breaking it (like a balloon)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1288,
    "word": "essential",
    "meaning": "不可欠な",
    "example": "extremely important and necessary",
    "exampleJP": "（定義）"
  },
  {
    "id": 1289,
    "word": "desire",
    "meaning": "望む",
    "example": "to want or wish for something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1290,
    "word": "promote",
    "meaning": "昇進させる",
    "example": "to raise the rank or position to a higher",
    "exampleJP": "（定義）"
  },
  {
    "id": 1291,
    "word": "currently",
    "meaning": "現在",
    "example": "happening or existing now",
    "exampleJP": "（定義）"
  },
  {
    "id": 1292,
    "word": "employ",
    "meaning": "雇う",
    "example": "to provide someone with a job that pays wages or a salary",
    "exampleJP": "（定義）"
  },
  {
    "id": 1293,
    "word": "path",
    "meaning": "小道",
    "example": "a track that is made by people or animals walking over the ground",
    "exampleJP": "（定義）"
  },
  {
    "id": 1294,
    "word": "topic",
    "meaning": "題",
    "example": "a matter people talk or write about",
    "exampleJP": "（定義）"
  },
  {
    "id": 1295,
    "word": "beach",
    "meaning": "海辺",
    "example": "an area of sand or rocks next to the sea",
    "exampleJP": "（定義）"
  },
  {
    "id": 1296,
    "word": "attract",
    "meaning": "ひきつける",
    "example": "to cause (someone) to like or be interested in something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1297,
    "word": "engage",
    "meaning": "関心を引き付ける",
    "example": "to interest someone in something and keep them thinking about it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1298,
    "word": "powerful",
    "meaning": "強力な",
    "example": "having a lot of strength or force",
    "exampleJP": "（定義）"
  },
  {
    "id": 1299,
    "word": "flower",
    "meaning": "花",
    "example": "the part of a plant that is often brightly colored, that usually lasts a short time, and from which the seed or fruit develops",
    "exampleJP": "（定義）"
  },
  {
    "id": 1300,
    "word": "crisis",
    "meaning": "危機",
    "example": "a situation or time that is extremely dangerous or difficult",
    "exampleJP": "（定義）"
  },
  {
    "id": 1301,
    "word": "settle",
    "meaning": "決着をつける",
    "example": "to end (something, such as an argument) by reaching an agreement",
    "exampleJP": "（定義）"
  },
  {
    "id": 1302,
    "word": "boat",
    "meaning": "ボート",
    "example": "a small vehicle that is used for traveling on water",
    "exampleJP": "（定義）"
  },
  {
    "id": 1303,
    "word": "aid",
    "meaning": "援助する",
    "example": "to provide what is useful or needed",
    "exampleJP": "（定義）"
  },
  {
    "id": 1304,
    "word": "fan",
    "meaning": "扇風機",
    "example": "a machine or device that is used to move the air and make people or things cooler",
    "exampleJP": "（定義）"
  },
  {
    "id": 1305,
    "word": "kitchen",
    "meaning": "台所",
    "example": "a room in which food is cooked",
    "exampleJP": "（定義）"
  },
  {
    "id": 1306,
    "word": "twice",
    "meaning": "2回",
    "example": "two times",
    "exampleJP": "（定義）"
  },
  {
    "id": 1307,
    "word": "fresh",
    "meaning": "新鮮な",
    "example": "newly produced, made, gathered, etc. : not preserved by being frozen, canned, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1308,
    "word": "delay",
    "meaning": "遅れる",
    "example": "a situation in which something happens later than it should",
    "exampleJP": "（定義）"
  },
  {
    "id": 1309,
    "word": "safety",
    "meaning": "安全",
    "example": "freedom from harm or danger : the state of being safe",
    "exampleJP": "（定義）"
  },
  {
    "id": 1310,
    "word": "engineer",
    "meaning": "技術者",
    "example": "a person who has scientific training and who designs and builds complicated products, machines, systems, or structures",
    "exampleJP": "（定義）"
  },
  {
    "id": 1311,
    "word": "quiet",
    "meaning": "静か",
    "example": "making very little noise",
    "exampleJP": "（定義）"
  },
  {
    "id": 1312,
    "word": "insurance",
    "meaning": "保険",
    "example": "an agreement in which a person makes regular payments to a company and the company promises to pay money if the person is injured or dies, or to pay money equal to the value of something (such as a house or car) if it is damaged, lost, or stolen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1313,
    "word": "nurse",
    "meaning": "看護師",
    "example": "a person who is trained to care for sick or injured people and who usually works in a hospital or doctor's office",
    "exampleJP": "（定義）"
  },
  {
    "id": 1314,
    "word": "divide",
    "meaning": "分ける",
    "example": "to separate (something) into two or more parts or pieces",
    "exampleJP": "（定義）"
  },
  {
    "id": 1315,
    "word": "length",
    "meaning": "長さ",
    "example": "the distance from one end of something to the other end",
    "exampleJP": "（定義）"
  },
  {
    "id": 1316,
    "word": "investigation",
    "meaning": "調査",
    "example": "when officials try to discover all the facts about something, especially a crime or an accident",
    "exampleJP": "（定義）"
  },
  {
    "id": 1317,
    "word": "package",
    "meaning": "パッケージ",
    "example": "a box or large envelope that is sent or delivered usually through the mail or by another delivery service",
    "exampleJP": "（定義）"
  },
  {
    "id": 1318,
    "word": "somewhere",
    "meaning": "どこか",
    "example": "in, at, or to a place not known, named, or specified",
    "exampleJP": "（定義）"
  },
  {
    "id": 1319,
    "word": "expand",
    "meaning": "拡大する",
    "example": "to become bigger or larger in size and amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 1320,
    "word": "commit",
    "meaning": "ささげる、専念する",
    "example": "to decide to do something for a particular purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1321,
    "word": "obvious",
    "meaning": "明らかな",
    "example": "easy to see, notice or understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 1322,
    "word": "jump",
    "meaning": "跳ぶ",
    "example": "to move your body upward from the ground and often forward, backward, or sideways through the air by pushing with your legs",
    "exampleJP": "（定義）"
  },
  {
    "id": 1323,
    "word": "weapon",
    "meaning": "武器",
    "example": "something (such as a gun, knife, club, or bomb) that is used for fighting or attacking someone or for defending yourself when someone is attacking you",
    "exampleJP": "（定義）"
  },
  {
    "id": 1324,
    "word": "relatively",
    "meaning": "比較的に",
    "example": "quite, when compared to other things or people",
    "exampleJP": "（定義）"
  },
  {
    "id": 1325,
    "word": "host",
    "meaning": "主催者、（客をもてなす）主人",
    "example": "a person (especially a man) who is entertaining guests socially or as a job",
    "exampleJP": "（定義）"
  },
  {
    "id": 1326,
    "word": "winter",
    "meaning": "冬",
    "example": "the coldest season of the year that is after autumn and before spring",
    "exampleJP": "（定義）"
  },
  {
    "id": 1327,
    "word": "district",
    "meaning": "区",
    "example": "an area or section of a country, city, or town",
    "exampleJP": "（定義）"
  },
  {
    "id": 1328,
    "word": "broad",
    "meaning": "幅広い",
    "example": "large from one side to the other side",
    "exampleJP": "（定義）"
  },
  {
    "id": 1329,
    "word": "tire",
    "meaning": "疲れる",
    "example": "to lose energy and begin to feel that you need to rest",
    "exampleJP": "（定義）"
  },
  {
    "id": 1330,
    "word": "spring",
    "meaning": "春",
    "example": "the season between winter and summer",
    "exampleJP": "（定義）"
  },
  {
    "id": 1331,
    "word": "spirit",
    "meaning": "魂",
    "example": "the non-physical part of a person, our emotions and soul",
    "exampleJP": "（定義）"
  },
  {
    "id": 1332,
    "word": "lunch",
    "meaning": "昼食",
    "example": "a light meal eaten in the middle of the day",
    "exampleJP": "（定義）"
  },
  {
    "id": 1333,
    "word": "actual",
    "meaning": "現実の",
    "example": "to be real or existing in fact",
    "exampleJP": "（定義）"
  },
  {
    "id": 1334,
    "word": "pool",
    "meaning": "水たまり",
    "example": "a small area of water",
    "exampleJP": "（定義）"
  },
  {
    "id": 1335,
    "word": "battle",
    "meaning": "戦い",
    "example": "a military fight between groups of soldiers, ships, airplanes, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1336,
    "word": "tradition",
    "meaning": "伝統",
    "example": "a way of thinking, behaving that used for a long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1337,
    "word": "cash",
    "meaning": "現金",
    "example": "money in the form of coins or notes (= paper money)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1338,
    "word": "hardly",
    "meaning": "ほとんど～ない",
    "example": "used to say that something was almost not possible or almost did not happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1339,
    "word": "award",
    "meaning": "賞",
    "example": "a prize given to someone for something they have achieved",
    "exampleJP": "（定義）"
  },
  {
    "id": 1340,
    "word": "coach",
    "meaning": "コーチ",
    "example": "someone whose job is to teach people to improve at a sport, skill, or school subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 1341,
    "word": "experiment",
    "meaning": "実験",
    "example": "a scientific test to observe the effect in order to learn",
    "exampleJP": "（定義）"
  },
  {
    "id": 1342,
    "word": "consideration",
    "meaning": "考慮",
    "example": "something that you have to think about when you make decisions or plans; the act of thinking about something carefully",
    "exampleJP": "（定義）"
  },
  {
    "id": 1343,
    "word": "strange",
    "meaning": "変な",
    "example": "different from what is usual, normal, or expected",
    "exampleJP": "（定義）"
  },
  {
    "id": 1344,
    "word": "code",
    "meaning": "暗号",
    "example": "a set of letters or numbers that identifies information",
    "exampleJP": "（定義）"
  },
  {
    "id": 1345,
    "word": "possibly",
    "meaning": "もしかしたら",
    "example": "used when something is not certain",
    "exampleJP": "（定義）"
  },
  {
    "id": 1346,
    "word": "threat",
    "meaning": "脅かす人・もの",
    "example": "someone or something that could cause trouble, harm, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1347,
    "word": "accident",
    "meaning": "事故",
    "example": "a sudden event (such as a crash) that is not planned or intended and that causes damage or injury",
    "exampleJP": "（定義）"
  },
  {
    "id": 1348,
    "word": "impossible",
    "meaning": "不可能",
    "example": "unable to be done or to happen : not possible",
    "exampleJP": "（定義）"
  },
  {
    "id": 1349,
    "word": "revenue",
    "meaning": "収益",
    "example": "money that is made by or paid to a business",
    "exampleJP": "（定義）"
  },
  {
    "id": 1350,
    "word": "enable",
    "meaning": "～を可能にする",
    "example": "to make it possible to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1351,
    "word": "afraid",
    "meaning": "怖がる",
    "example": "worried that something will cause pain or injury",
    "exampleJP": "（定義）"
  },
  {
    "id": 1352,
    "word": "active",
    "meaning": "積極的",
    "example": "requiring physical movement or energy",
    "exampleJP": "（定義）"
  },
  {
    "id": 1353,
    "word": "conclude",
    "meaning": "終える",
    "example": "to stop or finish: to come to the end of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1354,
    "word": "religious",
    "meaning": "宗教の",
    "example": "relating to religion; having a belief in religion",
    "exampleJP": "（定義）"
  },
  {
    "id": 1355,
    "word": "cancer",
    "meaning": "癌",
    "example": "a serious disease that is caused when cells in the body grow in a way that is uncontrolled and not normal",
    "exampleJP": "（定義）"
  },
  {
    "id": 1356,
    "word": "convince",
    "meaning": "納得させる",
    "example": "to cause someone to believe that something is true",
    "exampleJP": "（定義）"
  },
  {
    "id": 1357,
    "word": "vary",
    "meaning": "変わる",
    "example": "to be different or to be different, have variation",
    "exampleJP": "（定義）"
  },
  {
    "id": 1358,
    "word": "environmental",
    "meaning": "環境の",
    "example": "relating to the environment",
    "exampleJP": "（定義）"
  },
  {
    "id": 1359,
    "word": "sun",
    "meaning": "太陽",
    "example": "the star that the Earth moves around and that gives the Earth heat and light",
    "exampleJP": "（定義）"
  },
  {
    "id": 1360,
    "word": "healthy",
    "meaning": "健康な",
    "example": "physically strong and well; good for your health",
    "exampleJP": "（定義）"
  },
  {
    "id": 1361,
    "word": "blow",
    "meaning": "吹く",
    "example": "to cause (air or something carried by air) to move",
    "exampleJP": "（定義）"
  },
  {
    "id": 1362,
    "word": "volume",
    "meaning": "音量、巻",
    "example": "the amount of sound,  a book forming part, series",
    "exampleJP": "（定義）"
  },
  {
    "id": 1363,
    "word": "location",
    "meaning": "位置",
    "example": "a place or position",
    "exampleJP": "（定義）"
  },
  {
    "id": 1364,
    "word": "invest",
    "meaning": "投資する",
    "example": "to use money to earn more money",
    "exampleJP": "（定義）"
  },
  {
    "id": 1365,
    "word": "proceed",
    "meaning": "進める",
    "example": "to continue to do something、carry on",
    "exampleJP": "（定義）"
  },
  {
    "id": 1366,
    "word": "wash",
    "meaning": "洗う",
    "example": "to clean (something) with water and usually soap",
    "exampleJP": "（定義）"
  },
  {
    "id": 1367,
    "word": "actor",
    "meaning": "俳優",
    "example": "a person who acts in a play, movie, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1368,
    "word": "glad",
    "meaning": "喜び",
    "example": "feeling pleasure, joy, or delight",
    "exampleJP": "（定義）"
  },
  {
    "id": 1369,
    "word": "tape",
    "meaning": "テープ",
    "example": "a long, narrow piece of material used to stick things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1370,
    "word": "whereas",
    "meaning": "その一方で",
    "example": "in contrast, comparison, show the differences",
    "exampleJP": "（定義）"
  },
  {
    "id": 1371,
    "word": "opposite",
    "meaning": "反対",
    "example": "located at the other end, side, or corner of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1372,
    "word": "stone",
    "meaning": "石",
    "example": "a hard substance that comes from the ground and is used for building, carving, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1373,
    "word": "sum",
    "meaning": "合計",
    "example": "the result of adding two or more numbers together",
    "exampleJP": "（定義）"
  },
  {
    "id": 1374,
    "word": "murder",
    "meaning": "殺人犯",
    "example": "the crime of deliberately killing a person",
    "exampleJP": "（定義）"
  },
  {
    "id": 1375,
    "word": "monitor",
    "meaning": "監視する",
    "example": "to observe, watch or check something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1376,
    "word": "soldier",
    "meaning": "軍人",
    "example": "a person who is in the military",
    "exampleJP": "（定義）"
  },
  {
    "id": 1377,
    "word": "finance",
    "meaning": "財務",
    "example": "management of money that a company uses",
    "exampleJP": "（定義）"
  },
  {
    "id": 1378,
    "word": "hate",
    "meaning": "～をひどく嫌う",
    "example": "a very strong feeling of dislike",
    "exampleJP": "（定義）"
  },
  {
    "id": 1379,
    "word": "egg",
    "meaning": "卵",
    "example": "a hard-shelled oval thing from which a young bird is born",
    "exampleJP": "（定義）"
  },
  {
    "id": 1380,
    "word": "concert",
    "meaning": "コンサート",
    "example": "a performance of music and singing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1381,
    "word": "shock",
    "meaning": "衝撃",
    "example": "a sudden usually unpleasant or upsetting feeling caused by something unexpected",
    "exampleJP": "（定義）"
  },
  {
    "id": 1382,
    "word": "comfortable",
    "meaning": "心地よい",
    "example": "Comfortable furniture, clothes, rooms, etc. make you feel relaxed and do not cause any pain",
    "exampleJP": "（定義）"
  },
  {
    "id": 1383,
    "word": "usual",
    "meaning": "通常",
    "example": "the way things occur most of time, in most cases",
    "exampleJP": "（定義）"
  },
  {
    "id": 1384,
    "word": "carefully",
    "meaning": "慎重に",
    "example": "giving a lot of attention to what you are doing so that you do not have an accident, make a mistake, or damage something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1385,
    "word": "pack",
    "meaning": "詰める",
    "example": "to put (something) into a bag, suitcase, etc., so that you can take it with you",
    "exampleJP": "（定義）"
  },
  {
    "id": 1386,
    "word": "recall",
    "meaning": "思い出す",
    "example": "to remember something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1387,
    "word": "wine",
    "meaning": "ワイン",
    "example": "an alcoholic drink made from the juice of grapes",
    "exampleJP": "（定義）"
  },
  {
    "id": 1388,
    "word": "camera",
    "meaning": "カメラ",
    "example": "a device that is used for taking photographs or for making movies, television programs, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1389,
    "word": "swim",
    "meaning": "泳ぐ",
    "example": "to move through water by moving your arms and legs",
    "exampleJP": "（定義）"
  },
  {
    "id": 1390,
    "word": "manufacture",
    "meaning": "製造する",
    "example": "to make (something) usually in large amounts by using machines",
    "exampleJP": "（定義）"
  },
  {
    "id": 1391,
    "word": "theater",
    "meaning": "劇場",
    "example": "a building where plays, shows, etc., are performed on a stage",
    "exampleJP": "（定義）"
  },
  {
    "id": 1392,
    "word": "cycle",
    "meaning": "循環",
    "example": "a series of regular and repeated actions",
    "exampleJP": "（定義）"
  },
  {
    "id": 1393,
    "word": "coffee",
    "meaning": "コーヒー",
    "example": "a dark brown drink made from ground coffee beans and boiled water",
    "exampleJP": "（定義）"
  },
  {
    "id": 1394,
    "word": "totally",
    "meaning": "完全に",
    "example": "completely",
    "exampleJP": "（定義）"
  },
  {
    "id": 1395,
    "word": "museum",
    "meaning": "美術館",
    "example": "a building where you can look at important objects connected with art, history, or science",
    "exampleJP": "（定義）"
  },
  {
    "id": 1396,
    "word": "visitor",
    "meaning": "訪問者",
    "example": "someone who visits a person or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1397,
    "word": "freedom",
    "meaning": "自由",
    "example": "the state of being free: such as a : the power to do what you want to do : the ability to move or act freely",
    "exampleJP": "（定義）"
  },
  {
    "id": 1398,
    "word": "construction",
    "meaning": "建設",
    "example": "the work of building houses, offices, bridges, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1399,
    "word": "dear",
    "meaning": "親愛なる",
    "example": "loved or valued very much",
    "exampleJP": "（定義）"
  },
  {
    "id": 1400,
    "word": "objective",
    "meaning": "客観的",
    "example": "based on facts not influenced by feelings or opinions",
    "exampleJP": "（定義）"
  },
  {
    "id": 1401,
    "word": "moreover",
    "meaning": "そのうえに",
    "example": "in addition to what has been said",
    "exampleJP": "（定義）"
  },
  {
    "id": 1402,
    "word": "onto",
    "meaning": "～の上に",
    "example": "to a position that is on (something, such as a surface, area, or object)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1403,
    "word": "historical",
    "meaning": "歴史的な",
    "example": "relating to events or people in the past, or the study of history",
    "exampleJP": "（定義）"
  },
  {
    "id": 1404,
    "word": "oppose",
    "meaning": "反対する",
    "example": "to disagree with or disapprove of (something or someone)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1405,
    "word": "branch",
    "meaning": "枝",
    "example": "a part of a tree that grows out from the trunk",
    "exampleJP": "（定義）"
  },
  {
    "id": 1406,
    "word": "vehicle",
    "meaning": "乗り物",
    "example": "a machine (such as a car) that is used to carry things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1407,
    "word": "scientist",
    "meaning": "科学者",
    "example": "a person who is trained in a science and whose job involves doing scientific research or solving scientific problems",
    "exampleJP": "（定義）"
  },
  {
    "id": 1408,
    "word": "route",
    "meaning": "道",
    "example": "a way to get from one place to another place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1409,
    "word": "bind",
    "meaning": "縛る",
    "example": "to tie or wrap (something) with rope, string, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1410,
    "word": "belong",
    "meaning": "所属する",
    "example": "used to say that someone or something should be in a particular place or situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 1411,
    "word": "taste",
    "meaning": "味",
    "example": "the sweet, sour, bitter, or salty quality of a thing that you can sense when it is in your mouth",
    "exampleJP": "（定義）"
  },
  {
    "id": 1412,
    "word": "tonight",
    "meaning": "今夜",
    "example": "this night or the night following this day",
    "exampleJP": "（定義）"
  },
  {
    "id": 1413,
    "word": "fashion",
    "meaning": "流行",
    "example": "a popular way of dressing during a particular time or among a particular group of people",
    "exampleJP": "（定義）"
  },
  {
    "id": 1414,
    "word": "danger",
    "meaning": "危険",
    "example": "the possibility that you will be hurt or killed",
    "exampleJP": "（定義）"
  },
  {
    "id": 1415,
    "word": "bomb",
    "meaning": "爆弾",
    "example": "a weapon that explodes and causes damage",
    "exampleJP": "（定義）"
  },
  {
    "id": 1416,
    "word": "army",
    "meaning": "陸軍",
    "example": "a large group of soldiers organized to fight battles on land",
    "exampleJP": "（定義）"
  },
  {
    "id": 1417,
    "word": "dangerous",
    "meaning": "危険",
    "example": "If someone or something is dangerous, they could harm you; not safe",
    "exampleJP": "（定義）"
  },
  {
    "id": 1418,
    "word": "decrease",
    "meaning": "減少",
    "example": "to become smaller in size, amount, number, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1419,
    "word": "hurt",
    "meaning": "傷つける",
    "example": "to cause pain or injury to (yourself, someone else, or a part of your body)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1420,
    "word": "council",
    "meaning": "評議会",
    "example": "a group of people who are chosen to make rules, laws, or decisions about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1421,
    "word": "editor",
    "meaning": "編集者",
    "example": "someone whose job is to prepare text, film, etc. by deciding what to include and making mistakes correct",
    "exampleJP": "（定義）"
  },
  {
    "id": 1422,
    "word": "normally",
    "meaning": "通常",
    "example": "usually",
    "exampleJP": "（定義）"
  },
  {
    "id": 1423,
    "word": "sight",
    "meaning": "視力",
    "example": "the ability to see",
    "exampleJP": "（定義）"
  },
  {
    "id": 1424,
    "word": "generate",
    "meaning": "生成する",
    "example": "to produce, create or be produced",
    "exampleJP": "（定義）"
  },
  {
    "id": 1425,
    "word": "gift",
    "meaning": "贈り物",
    "example": "something that is given to another person or to a group or organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 1426,
    "word": "delivery",
    "meaning": "宅配",
    "example": "the act of taking something to a person or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1427,
    "word": "deny",
    "meaning": "否定する",
    "example": "to refuse to accept",
    "exampleJP": "（定義）"
  },
  {
    "id": 1428,
    "word": "guest",
    "meaning": "ゲスト",
    "example": "a person who is invited to visit or stay in someone's home",
    "exampleJP": "（定義）"
  },
  {
    "id": 1429,
    "word": "anybody",
    "meaning": "だれか",
    "example": "any person : anyone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1430,
    "word": "bedroom",
    "meaning": "寝室",
    "example": "a room used for sleeping",
    "exampleJP": "（定義）"
  },
  {
    "id": 1431,
    "word": "quote",
    "meaning": "引用する",
    "example": "to repeat exactly, to copy out",
    "exampleJP": "（定義）"
  },
  {
    "id": 1432,
    "word": "climb",
    "meaning": "登る",
    "example": "to move or go up (something) using your feet and often your hands",
    "exampleJP": "（定義）"
  },
  {
    "id": 1433,
    "word": "basically",
    "meaning": "基本的に",
    "example": "in the most important or fundamental ways",
    "exampleJP": "（定義）"
  },
  {
    "id": 1434,
    "word": "violence",
    "meaning": "暴力",
    "example": "the use of physical force to harm someone, to damage property, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1435,
    "word": "minister",
    "meaning": "大臣",
    "example": "an official who heads a government department or a major section of a department in some countries",
    "exampleJP": "（定義）"
  },
  {
    "id": 1436,
    "word": "mainly",
    "meaning": "投票者、有権者",
    "example": "mostly or to a large degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 1437,
    "word": "mouth",
    "meaning": "口",
    "example": "the opening through which food passes into the body",
    "exampleJP": "（定義）"
  },
  {
    "id": 1438,
    "word": "noise",
    "meaning": "騒音",
    "example": "a loud or unpleasant sound",
    "exampleJP": "（定義）"
  },
  {
    "id": 1439,
    "word": "manner",
    "meaning": "方法",
    "example": "the way that something is done or happens",
    "exampleJP": "（定義）"
  },
  {
    "id": 1440,
    "word": "gun",
    "meaning": "ピストル、鉄砲",
    "example": "a weapon that shoots bullets or shells",
    "exampleJP": "（定義）"
  },
  {
    "id": 1441,
    "word": "square",
    "meaning": "四角形",
    "example": "a four-sided shape that is made up of four straight sides that are the same length",
    "exampleJP": "（定義）"
  },
  {
    "id": 1442,
    "word": "occasion",
    "meaning": "機会",
    "example": "a special event or time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1443,
    "word": "familiar",
    "meaning": "親しい",
    "example": "frequently seen, heard, or experienced",
    "exampleJP": "（定義）"
  },
  {
    "id": 1444,
    "word": "ignore",
    "meaning": "無視する",
    "example": "to pay no attention to something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1445,
    "word": "destroy",
    "meaning": "破壊する",
    "example": "to cause (something) to end or no longer exist",
    "exampleJP": "（定義）"
  },
  {
    "id": 1446,
    "word": "affair",
    "meaning": "業務",
    "example": "work or activities done for a purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1447,
    "word": "civil",
    "meaning": "市民の",
    "example": "related to the people who live in a country",
    "exampleJP": "（定義）"
  },
  {
    "id": 1448,
    "word": "locate",
    "meaning": "（場所を）見つける",
    "example": "to discover the place or position of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1449,
    "word": "citizen",
    "meaning": "市民",
    "example": "a person who legally belongs to a country and has the rights and protection of that country",
    "exampleJP": "（定義）"
  },
  {
    "id": 1450,
    "word": "temperature",
    "meaning": "温度",
    "example": "a measurement that indicates how hot or cold something is",
    "exampleJP": "（定義）"
  },
  {
    "id": 1451,
    "word": "gold",
    "meaning": "金",
    "example": "a soft yellow metal that is very valuable and that is used especially in jewelry",
    "exampleJP": "（定義）"
  },
  {
    "id": 1452,
    "word": "domestic",
    "meaning": "家庭の、国内の",
    "example": "of, relating to, or made in your own family, country",
    "exampleJP": "（定義）"
  },
  {
    "id": 1453,
    "word": "load",
    "meaning": "積載貨物",
    "example": "something that is lifted and carried",
    "exampleJP": "（定義）"
  },
  {
    "id": 1454,
    "word": "belief",
    "meaning": "信念",
    "example": "a feeling of being sure that someone or something exists or that something is true",
    "exampleJP": "（定義）"
  },
  {
    "id": 1455,
    "word": "troop",
    "meaning": "一団、軍隊",
    "example": "a group of people, especially soldiers or theater actors",
    "exampleJP": "（定義）"
  },
  {
    "id": 1456,
    "word": "technical",
    "meaning": "技術の",
    "example": "the practical use of machines or science in industry",
    "exampleJP": "（定義）"
  },
  {
    "id": 1457,
    "word": "remind",
    "meaning": "思い出させる",
    "example": "to make (someone) think about something again : to cause (someone) to remember something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1458,
    "word": "arrangement",
    "meaning": "合意、取り決め",
    "example": "an agreement between two people or groups; a plan",
    "exampleJP": "（定義）"
  },
  {
    "id": 1459,
    "word": "skin",
    "meaning": "肌",
    "example": "the natural outer layer of tissue that covers the body of a person or animal",
    "exampleJP": "（定義）"
  },
  {
    "id": 1460,
    "word": "prison",
    "meaning": "牢獄",
    "example": "a building where people are kept as punishment for a crime or while they are waiting to go to court",
    "exampleJP": "（定義）"
  },
  {
    "id": 1461,
    "word": "switch",
    "meaning": "切り替える",
    "example": "to change from one thing to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 1462,
    "word": "acquire",
    "meaning": "得る",
    "example": "to get something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1463,
    "word": "corporate",
    "meaning": "法人の",
    "example": "involving or associated with large group",
    "exampleJP": "（定義）"
  },
  {
    "id": 1464,
    "word": "fairly",
    "meaning": "かなり",
    "example": "more than average, but less than very; something done in a fair way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1465,
    "word": "wood",
    "meaning": "木",
    "example": "the hard substance that makes up the stems and branches of trees and shrubs",
    "exampleJP": "（定義）"
  },
  {
    "id": 1466,
    "word": "participate",
    "meaning": "参加する",
    "example": "to take part with others in doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1467,
    "word": "tough",
    "meaning": "とても難しい",
    "example": "very difficult to do or deal with",
    "exampleJP": "（定義）"
  },
  {
    "id": 1468,
    "word": "tear",
    "meaning": "涙",
    "example": "a drop of liquid that comes from your eyes especially when you cry",
    "exampleJP": "（定義）"
  },
  {
    "id": 1469,
    "word": "representative",
    "meaning": "代表",
    "example": "typical of a particular group of people or of a particular thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1470,
    "word": "capacity",
    "meaning": "許容量",
    "example": "ability to hold, involve or contain people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1471,
    "word": "border",
    "meaning": "国境",
    "example": "a line separating one country or state from another",
    "exampleJP": "（定義）"
  },
  {
    "id": 1472,
    "word": "shake",
    "meaning": "振る",
    "example": "to move sometimes violently back and forth or up and down with short, quick movements",
    "exampleJP": "（定義）"
  },
  {
    "id": 1473,
    "word": "assessment",
    "meaning": "査定、評価",
    "example": "to make a judgment about the quality, size, value, etc. of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1474,
    "word": "shoe",
    "meaning": "くつ",
    "example": "an outer covering for your foot that usually has a stiff bottom part called a sole with a thicker part called a heel attached to it and an upper part that covers part or all of the top of your foot",
    "exampleJP": "（定義）"
  },
  {
    "id": 1475,
    "word": "ought",
    "meaning": "～すべき",
    "example": "used to indicate what is expected",
    "exampleJP": "（定義）"
  },
  {
    "id": 1476,
    "word": "ad",
    "meaning": "広告",
    "example": "an advertisement",
    "exampleJP": "（定義）"
  },
  {
    "id": 1477,
    "word": "fee",
    "meaning": "謝礼金",
    "example": "an amount of money  paid for a particular action",
    "exampleJP": "（定義）"
  },
  {
    "id": 1478,
    "word": "hall",
    "meaning": "ホール",
    "example": "the area inside the entrance of a building",
    "exampleJP": "（定義）"
  },
  {
    "id": 1479,
    "word": "regulation",
    "meaning": "規制",
    "example": "an official rule that controls how something is done",
    "exampleJP": "（定義）"
  },
  {
    "id": 1480,
    "word": "escape",
    "meaning": "逃げる",
    "example": "to get away from a place (such as a prison) where you are being held or kept",
    "exampleJP": "（定義）"
  },
  {
    "id": 1481,
    "word": "studio",
    "meaning": "スタジオ",
    "example": "a room where an artist or photographer works; a place where TV, radio, or movies are made or broadcast",
    "exampleJP": "（定義）"
  },
  {
    "id": 1482,
    "word": "proper",
    "meaning": "適切な",
    "example": "correct according to social or moral rules",
    "exampleJP": "（定義）"
  },
  {
    "id": 1483,
    "word": "relax",
    "meaning": "くつろぐ",
    "example": "to become or free from tense, tight, or stiff",
    "exampleJP": "（定義）"
  },
  {
    "id": 1484,
    "word": "tourist",
    "meaning": "旅行者",
    "example": "someone who visits a place for pleasure and does not live there",
    "exampleJP": "（定義）"
  },
  {
    "id": 1485,
    "word": "component",
    "meaning": "構成要素、部品",
    "example": "one of the parts that consists something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1486,
    "word": "afford",
    "meaning": "買うことができる",
    "example": "to be able to pay for (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1487,
    "word": "lawyer",
    "meaning": "弁護士",
    "example": "a person whose job is to guide and assist people in matters relating to the law",
    "exampleJP": "（定義）"
  },
  {
    "id": 1488,
    "word": "suspect",
    "meaning": "疑う",
    "example": "to think that (someone) is possibly guilty of a crime or of doing something wrong",
    "exampleJP": "（定義）"
  },
  {
    "id": 1489,
    "word": "cup",
    "meaning": "カップ",
    "example": "a small round container that often has a handle and that is used for drinking liquids (such as tea and coffee)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1490,
    "word": "description",
    "meaning": "描写",
    "example": "a statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1491,
    "word": "confidence",
    "meaning": "自信",
    "example": "a feeling or belief that you can do something well or succeed at something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1492,
    "word": "industrial",
    "meaning": "産業の",
    "example": "connected with industry; with a lot of factories",
    "exampleJP": "（定義）"
  },
  {
    "id": 1493,
    "word": "complain",
    "meaning": "不平を言う",
    "example": "to say or write that you are unhappy, sick, uncomfortable, etc., or that you do not like something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1494,
    "word": "perspective",
    "meaning": "観点",
    "example": "a way of thinking, an attitude toward something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1495,
    "word": "error",
    "meaning": "誤り、エラー",
    "example": "something that is not correct, a mistake",
    "exampleJP": "（定義）"
  },
  {
    "id": 1496,
    "word": "arrest",
    "meaning": "逮捕する",
    "example": "to use the power of the law to take and keep (someone, such as a criminal)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1497,
    "word": "assess",
    "meaning": "評価する",
    "example": "to judge something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1498,
    "word": "register",
    "meaning": "登録簿",
    "example": "an official list, book or system for keeping records",
    "exampleJP": "（定義）"
  },
  {
    "id": 1499,
    "word": "asset",
    "meaning": "貴重な人材、資産",
    "example": "a person, skill, or quality which is useful or helps you to succeed; something valuable which is owned",
    "exampleJP": "（定義）"
  },
  {
    "id": 1500,
    "word": "signal",
    "meaning": "信号",
    "example": "an event or act which shows that something exists or that gives information about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1501,
    "word": "finger",
    "meaning": "指",
    "example": "one of the five long parts of the hand that are used for holding things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1502,
    "word": "relevant",
    "meaning": "関係のある",
    "example": "relating to a subject in an considerable way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1503,
    "word": "explore",
    "meaning": "探る",
    "example": "to look at (something) in a careful way to learn more about it;  to study or analyze (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1504,
    "word": "leadership",
    "meaning": "指導権",
    "example": "a position as a leader of a group, organization, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1505,
    "word": "commitment",
    "meaning": "約束、義務",
    "example": "a promise or firm decision to do something; something that you must do that takes your time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1506,
    "word": "wake",
    "meaning": "起こす",
    "example": "to cause (a person or animal) to be awake after sleeping",
    "exampleJP": "（定義）"
  },
  {
    "id": 1507,
    "word": "necessarily",
    "meaning": "必ずしも",
    "example": "(esp. in negatives) in all cases; as an expected result",
    "exampleJP": "（定義）"
  },
  {
    "id": 1508,
    "word": "bright",
    "meaning": "輝く",
    "example": "producing a lot of light",
    "exampleJP": "（定義）"
  },
  {
    "id": 1509,
    "word": "frame",
    "meaning": "骨組み、体格",
    "example": "the basic structure and shape of the body of a person or animal",
    "exampleJP": "（定義）"
  },
  {
    "id": 1510,
    "word": "slowly",
    "meaning": "ゆっくりと",
    "example": "at a low speed",
    "exampleJP": "（定義）"
  },
  {
    "id": 1511,
    "word": "bond",
    "meaning": "絆",
    "example": "something that is shared between people or groups",
    "exampleJP": "（定義）"
  },
  {
    "id": 1512,
    "word": "hire",
    "meaning": "雇う",
    "example": "to give work or a job to (someone) in exchange for wages or a salary",
    "exampleJP": "（定義）"
  },
  {
    "id": 1513,
    "word": "hole",
    "meaning": "穴",
    "example": "an opening into or through something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1514,
    "word": "tie",
    "meaning": "つなげる",
    "example": "to attach (someone or something) to something with a string, rope, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1515,
    "word": "internal",
    "meaning": "内部の",
    "example": "existing or situated on the inside of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1516,
    "word": "chain",
    "meaning": "鎖",
    "example": "a series of usually metal links or rings that are connected to each other in a line and used for supporting heavy things, for holding things together, for decoration, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1517,
    "word": "literature",
    "meaning": "文学",
    "example": "written works (such as poems, plays, and novels) that are considered to be very good and to have lasting importance",
    "exampleJP": "（定義）"
  },
  {
    "id": 1518,
    "word": "victim",
    "meaning": "犠牲者",
    "example": "someone who has suffered the effects of violence, illness, or bad luck",
    "exampleJP": "（定義）"
  },
  {
    "id": 1519,
    "word": "threaten",
    "meaning": "脅かす",
    "example": "to say that you will harm someone or do something unpleasant or unwanted especially in order to make someone do what you want",
    "exampleJP": "（定義）"
  },
  {
    "id": 1520,
    "word": "division",
    "meaning": "分割",
    "example": "one of the parts into which a thing is divided",
    "exampleJP": "（定義）"
  },
  {
    "id": 1521,
    "word": "secure",
    "meaning": "確保する",
    "example": "protected from danger or harm, keep things safe",
    "exampleJP": "（定義）"
  },
  {
    "id": 1522,
    "word": "amaze",
    "meaning": "驚かす",
    "example": "to make someone very surprised",
    "exampleJP": "（定義）"
  },
  {
    "id": 1523,
    "word": "device",
    "meaning": "装置",
    "example": "an object, machine, or equipment for a specific use",
    "exampleJP": "（定義）"
  },
  {
    "id": 1524,
    "word": "birth",
    "meaning": "誕生",
    "example": "the time when a baby comes out from the body of its mother",
    "exampleJP": "（定義）"
  },
  {
    "id": 1525,
    "word": "forest",
    "meaning": "森",
    "example": "a thick growth of trees and bushes that covers a large area",
    "exampleJP": "（定義）"
  },
  {
    "id": 1526,
    "word": "label",
    "meaning": "ラベル",
    "example": "an attached piece of paper used to identify something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1527,
    "word": "root",
    "meaning": "根",
    "example": "the part of a plant that grows underground, gets water from the ground, and holds the plant in place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1528,
    "word": "factory",
    "meaning": "工場",
    "example": "a building or group of buildings where products are made",
    "exampleJP": "（定義）"
  },
  {
    "id": 1529,
    "word": "expense",
    "meaning": "費用",
    "example": "the amount of money that is needed to pay for or buy something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1530,
    "word": "channel",
    "meaning": "チャンネル",
    "example": "a station of TV, or radio",
    "exampleJP": "（定義）"
  },
  {
    "id": 1531,
    "word": "investigate",
    "meaning": "調査する",
    "example": "to try to find out the facts, to carry out research",
    "exampleJP": "（定義）"
  },
  {
    "id": 1532,
    "word": "recommendation",
    "meaning": "推薦",
    "example": "a piece of advice about what to do in a particular situation; a suggestion about something that is good in a certain situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 1533,
    "word": "rank",
    "meaning": "階級、地位",
    "example": "a position in a society, organization, group, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1534,
    "word": "typical",
    "meaning": "典型的な",
    "example": "having all the qualities you expect a particular person, object, place, etc. to have",
    "exampleJP": "（定義）"
  },
  {
    "id": 1535,
    "word": "west",
    "meaning": "西",
    "example": "the direction where the sun sets; opposite of east",
    "exampleJP": "（定義）"
  },
  {
    "id": 1536,
    "word": "friendly",
    "meaning": "友好的",
    "example": "acting like a friend : kind and helpful",
    "exampleJP": "（定義）"
  },
  {
    "id": 1537,
    "word": "resident",
    "meaning": "居住者",
    "example": "someone who lives in a particular place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1538,
    "word": "provision",
    "meaning": "規定",
    "example": "a rule that is part of a law or an agreement",
    "exampleJP": "（定義）"
  },
  {
    "id": 1539,
    "word": "concentrate",
    "meaning": "集中する",
    "example": "to think about or give attention to something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1540,
    "word": "plenty",
    "meaning": "たくさんの",
    "example": "a large number or amount of something;  a number or amount of something that is enough for a particular purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1541,
    "word": "export",
    "meaning": "輸出する",
    "example": "to send goods to be sold in another country",
    "exampleJP": "（定義）"
  },
  {
    "id": 1542,
    "word": "entirely",
    "meaning": "完全に",
    "example": "completely",
    "exampleJP": "（定義）"
  },
  {
    "id": 1543,
    "word": "strongly",
    "meaning": "強く",
    "example": "very much or in a very serious way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1544,
    "word": "bridge",
    "meaning": "橋",
    "example": "a structure built over something (such as a river) so that people or vehicles can get across",
    "exampleJP": "（定義）"
  },
  {
    "id": 1545,
    "word": "consist",
    "meaning": "成る",
    "example": "to have as an essential, necessary or main part",
    "exampleJP": "（定義）"
  },
  {
    "id": 1546,
    "word": "graduate",
    "meaning": "卒業する",
    "example": "someone who has studied for and received a degree (= qualification) from a school, college, or university",
    "exampleJP": "（定義）"
  },
  {
    "id": 1547,
    "word": "brand",
    "meaning": "商標",
    "example": "a product that is made by a particular company",
    "exampleJP": "（定義）"
  },
  {
    "id": 1548,
    "word": "moral",
    "meaning": "道義をわきまえた",
    "example": "concerning or relating to what is right and wrong in human behavior",
    "exampleJP": "（定義）"
  },
  {
    "id": 1549,
    "word": "insist",
    "meaning": "主張する",
    "example": "to say firmly that something is true, especially when other people do not believe you; to demand that something be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 1550,
    "word": "combination",
    "meaning": "組み合わせ",
    "example": "a mixture of different people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1551,
    "word": "abuse",
    "meaning": "乱用する",
    "example": "violent, cruel treatment of someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1552,
    "word": "ice",
    "meaning": "氷",
    "example": "frozen water",
    "exampleJP": "（定義）"
  },
  {
    "id": 1553,
    "word": "principal",
    "meaning": "長",
    "example": "most important person, main importance",
    "exampleJP": "（定義）"
  },
  {
    "id": 1554,
    "word": "master",
    "meaning": "管理人",
    "example": "someone who has control or power over others",
    "exampleJP": "（定義）"
  },
  {
    "id": 1555,
    "word": "definitely",
    "meaning": "間違いなく",
    "example": "without any doubt",
    "exampleJP": "（定義）"
  },
  {
    "id": 1556,
    "word": "session",
    "meaning": "期間",
    "example": "a period during which you do one activity",
    "exampleJP": "（定義）"
  },
  {
    "id": 1557,
    "word": "grade",
    "meaning": "成績",
    "example": "a level of study that is completed by a student",
    "exampleJP": "（定義）"
  },
  {
    "id": 1558,
    "word": "nevertheless",
    "meaning": "それにもかかわらず",
    "example": "in spite of that, notwithstanding",
    "exampleJP": "（定義）"
  },
  {
    "id": 1559,
    "word": "predict",
    "meaning": "予想する",
    "example": "say or estimate that will or might happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1560,
    "word": "previously",
    "meaning": "以前に",
    "example": "before the present time or the time referred to",
    "exampleJP": "（定義）"
  },
  {
    "id": 1561,
    "word": "protection",
    "meaning": "保護",
    "example": "the state of being kept from harm, loss, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1562,
    "word": "largely",
    "meaning": "だいたいは",
    "example": "mainly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1563,
    "word": "wed",
    "meaning": "結婚する",
    "example": "to marry someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1564,
    "word": "rent",
    "meaning": "賃借りする",
    "example": "to pay money in return for being able to use",
    "exampleJP": "（定義）"
  },
  {
    "id": 1565,
    "word": "shot",
    "meaning": "打つ",
    "example": "when a bullet is fired from a gun; a photograph; an attempt to score in sports by throwing or kicking a ball",
    "exampleJP": "（定義）"
  },
  {
    "id": 1566,
    "word": "appearance",
    "meaning": "外見",
    "example": "the way that someone or something looks",
    "exampleJP": "（定義）"
  },
  {
    "id": 1567,
    "word": "reasonable",
    "meaning": "程よい",
    "example": "fair and sensible",
    "exampleJP": "（定義）"
  },
  {
    "id": 1568,
    "word": "guarantee",
    "meaning": "保障する",
    "example": "a assurance that the quality of something is good",
    "exampleJP": "（定義）"
  },
  {
    "id": 1569,
    "word": "till",
    "meaning": "まで",
    "example": "until",
    "exampleJP": "（定義）"
  },
  {
    "id": 1570,
    "word": "theme",
    "meaning": "テーマ",
    "example": "the main subject to discuss or describe",
    "exampleJP": "（定義）"
  },
  {
    "id": 1571,
    "word": "judgment",
    "meaning": "判決",
    "example": "an opinion about someone or something that is decided after thinking carefully",
    "exampleJP": "（定義）"
  },
  {
    "id": 1572,
    "word": "odd",
    "meaning": "変な",
    "example": "to be strange or different from what is usual or expected",
    "exampleJP": "（定義）"
  },
  {
    "id": 1573,
    "word": "approve",
    "meaning": "承認する",
    "example": "to believe that something or someone is good or acceptable",
    "exampleJP": "（定義）"
  },
  {
    "id": 1574,
    "word": "loan",
    "meaning": "ローン",
    "example": "an amount of money that is given to someone for a period of time with a promise that it will be paid back",
    "exampleJP": "（定義）"
  },
  {
    "id": 1575,
    "word": "definition",
    "meaning": "定義",
    "example": "an explanation of the meaning of a word or phrase",
    "exampleJP": "（定義）"
  },
  {
    "id": 1576,
    "word": "elect",
    "meaning": "選ぶ",
    "example": "to select (someone) for a position, job, etc., by voting",
    "exampleJP": "（定義）"
  },
  {
    "id": 1577,
    "word": "atmosphere",
    "meaning": "雰囲気",
    "example": "the feeling which exists in a place or situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 1578,
    "word": "farmer",
    "meaning": "農夫",
    "example": "someone who owns or looks after a farm",
    "exampleJP": "（定義）"
  },
  {
    "id": 1579,
    "word": "comparison",
    "meaning": "比較",
    "example": "the act of looking at things to see how they are similar or different",
    "exampleJP": "（定義）"
  },
  {
    "id": 1580,
    "word": "characteristic",
    "meaning": "特徴",
    "example": "a typical or obvious quality that makes one person or thing different from others",
    "exampleJP": "（定義）"
  },
  {
    "id": 1581,
    "word": "license",
    "meaning": "免許",
    "example": "to give someone official permission to do or have something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1582,
    "word": "rely",
    "meaning": "頼る",
    "example": "rely on;  to need for support, depend on",
    "exampleJP": "（定義）"
  },
  {
    "id": 1583,
    "word": "narrow",
    "meaning": "狭い",
    "example": "long and not wide : small from one side to the other side",
    "exampleJP": "（定義）"
  },
  {
    "id": 1584,
    "word": "succeed",
    "meaning": "成功する",
    "example": "to do what you are trying to do : to achieve the correct or desired result",
    "exampleJP": "（定義）"
  },
  {
    "id": 1585,
    "word": "identity",
    "meaning": "身元、独自性",
    "example": "who someone is; the things that make one person or group of people different from others",
    "exampleJP": "（定義）"
  },
  {
    "id": 1586,
    "word": "desk",
    "meaning": "机",
    "example": "a piece of furniture that is like a table and often has drawers ◊People often sit at desks when they are writing or using a computer.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1587,
    "word": "permit",
    "meaning": "許可する",
    "example": "to allow something to happen or to give permission for",
    "exampleJP": "（定義）"
  },
  {
    "id": 1588,
    "word": "seriously",
    "meaning": "深刻に",
    "example": "in a serious way; not joking",
    "exampleJP": "（定義）"
  },
  {
    "id": 1589,
    "word": "wild",
    "meaning": "野生の",
    "example": "living in nature without human control or care : not tame",
    "exampleJP": "（定義）"
  },
  {
    "id": 1590,
    "word": "empty",
    "meaning": "空の",
    "example": "containing nothing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1591,
    "word": "commission",
    "meaning": "任務",
    "example": "people who are given the job of doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1592,
    "word": "unique",
    "meaning": "ユニークな、独特な",
    "example": "something is unlike anything, being the only one",
    "exampleJP": "（定義）"
  },
  {
    "id": 1593,
    "word": "association",
    "meaning": "協会、組合",
    "example": "an organized group of people who have the same interest",
    "exampleJP": "（定義）"
  },
  {
    "id": 1594,
    "word": "instrument",
    "meaning": "器具、楽器",
    "example": "a tool or device used for a particular purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1595,
    "word": "investor",
    "meaning": "投資家",
    "example": "someone who puts money in a bank, business, etc. in order to make a profit",
    "exampleJP": "（定義）"
  },
  {
    "id": 1596,
    "word": "practical",
    "meaning": "実際の",
    "example": "relating to what is real rather than to what is possible or imagined",
    "exampleJP": "（定義）"
  },
  {
    "id": 1597,
    "word": "tea",
    "meaning": "茶",
    "example": "a drink that is made by soaking the dried leaves of an Asian plant in hot water",
    "exampleJP": "（定義）"
  },
  {
    "id": 1598,
    "word": "lovely",
    "meaning": "美しい・素晴らしい",
    "example": "attractive or beautiful especially in a graceful way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1599,
    "word": "soft",
    "meaning": "柔らかい",
    "example": "easy to press, bend, cut, etc. : not hard or firm",
    "exampleJP": "（定義）"
  },
  {
    "id": 1600,
    "word": "row",
    "meaning": "列",
    "example": "a straight line of people or things that are next to each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 1601,
    "word": "youth",
    "meaning": "青年時代、若いころ",
    "example": "the time of life when someone is young : the time when a young person has not yet become an adult",
    "exampleJP": "（定義）"
  },
  {
    "id": 1602,
    "word": "lock",
    "meaning": "錠前",
    "example": "a device that keeps something (such as a door, window, or box) from being opened and that is usually opened by using a key",
    "exampleJP": "（定義）"
  },
  {
    "id": 1603,
    "word": "fuel",
    "meaning": "燃料",
    "example": "a substance that is burned to provide heat or power",
    "exampleJP": "（定義）"
  },
  {
    "id": 1604,
    "word": "expectation",
    "meaning": "期待",
    "example": "when you expect something to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1605,
    "word": "employment",
    "meaning": "雇用",
    "example": "when someone is paid to work for a person or company",
    "exampleJP": "（定義）"
  },
  {
    "id": 1606,
    "word": "celebrate",
    "meaning": "祝う",
    "example": "to do something enjoyable because it is a special day, or because something good has happened",
    "exampleJP": "（定義）"
  },
  {
    "id": 1607,
    "word": "sexual",
    "meaning": "性的な",
    "example": "relating to the activity of sex",
    "exampleJP": "（定義）"
  },
  {
    "id": 1608,
    "word": "shoulder",
    "meaning": "肩",
    "example": "the part of your body where your arm is connected",
    "exampleJP": "（定義）"
  },
  {
    "id": 1609,
    "word": "breath",
    "meaning": "息",
    "example": "the air that you take into your lungs and send out from your lungs when you breathe",
    "exampleJP": "（定義）"
  },
  {
    "id": 1610,
    "word": "increasingly",
    "meaning": "ますます",
    "example": "more and more",
    "exampleJP": "（定義）"
  },
  {
    "id": 1611,
    "word": "import",
    "meaning": "輸入する",
    "example": "to bring something into your country from another country for people to buy",
    "exampleJP": "（定義）"
  },
  {
    "id": 1612,
    "word": "bottle",
    "meaning": "ボトル",
    "example": "a glass or plastic container that has a narrow neck and usually has no handle Bottles are usually used to store liquid or tablets.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1613,
    "word": "ourselves",
    "meaning": "私たち自身",
    "example": "the reflexive form of the pronoun 'we'",
    "exampleJP": "（定義）"
  },
  {
    "id": 1614,
    "word": "sheet",
    "meaning": "シーツ",
    "example": "a large piece of cloth that is used to cover something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1615,
    "word": "engine",
    "meaning": "エンジン",
    "example": "a machine that changes energy (such as heat from burning fuel) into mechanical motion",
    "exampleJP": "（定義）"
  },
  {
    "id": 1616,
    "word": "cast",
    "meaning": "配役する",
    "example": "to choose an actor for a particular part in a film or play",
    "exampleJP": "（定義）"
  },
  {
    "id": 1617,
    "word": "notion",
    "meaning": "考え",
    "example": "an idea or opinion about doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1618,
    "word": "conservative",
    "meaning": "保守的な",
    "example": "not trusting sudden changes or new ideas",
    "exampleJP": "（定義）"
  },
  {
    "id": 1619,
    "word": "journey",
    "meaning": "旅",
    "example": "an act of traveling from one place to another : trip",
    "exampleJP": "（定義）"
  },
  {
    "id": 1620,
    "word": "opposition",
    "meaning": "反対",
    "example": "actions or opinions that show that you disagree with or disapprove of someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1621,
    "word": "relief",
    "meaning": "安堵",
    "example": "a pleasant and relaxed feeling that someone has when something unpleasant stops or does not happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1622,
    "word": "debt",
    "meaning": "借金",
    "example": "an amount of money that you owe to a person, bank, company, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1623,
    "word": "honor",
    "meaning": "名誉",
    "example": "respect that is given to someone who is admired",
    "exampleJP": "（定義）"
  },
  {
    "id": 1624,
    "word": "outcome",
    "meaning": "結果",
    "example": "something that happens as a result, consequence",
    "exampleJP": "（定義）"
  },
  {
    "id": 1625,
    "word": "blame",
    "meaning": "責める",
    "example": "to say or think that a person or thing is responsible for something bad that has happened",
    "exampleJP": "（定義）"
  },
  {
    "id": 1626,
    "word": "explanation",
    "meaning": "説明",
    "example": "the details or reasons that someone gives to make something clear or easy to understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 1627,
    "word": "arise",
    "meaning": "発生する",
    "example": "to begin to occur or to exist",
    "exampleJP": "（定義）"
  },
  {
    "id": 1628,
    "word": "musical",
    "meaning": "音楽の、音楽の才能がある",
    "example": "relating to music; skilled at music",
    "exampleJP": "（定義）"
  },
  {
    "id": 1629,
    "word": "recover",
    "meaning": "回復する",
    "example": "to revive, become healthy after an illness or injury",
    "exampleJP": "（定義）"
  },
  {
    "id": 1630,
    "word": "dad",
    "meaning": "パパ",
    "example": "father",
    "exampleJP": "（定義）"
  },
  {
    "id": 1631,
    "word": "stretch",
    "meaning": "伸ばす",
    "example": "to make (something) wider or longer by pulling it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1632,
    "word": "declare",
    "meaning": "宣言する",
    "example": "to say or state (something) in an official or public way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1633,
    "word": "retire",
    "meaning": "退職する、引退する",
    "example": "to stop a job or career because you have reached the age when you are not allowed to work anymore or do not need or want to work anymore",
    "exampleJP": "（定義）"
  },
  {
    "id": 1634,
    "word": "tiny",
    "meaning": "とても小さい",
    "example": "extremely small",
    "exampleJP": "（定義）"
  },
  {
    "id": 1635,
    "word": "careful",
    "meaning": "気を付ける",
    "example": "giving a lot of attention to what you are doing so that you do not have an accident, make a mistake, or damage something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1636,
    "word": "suitable",
    "meaning": "ふさわしい",
    "example": "acceptable or right for someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1637,
    "word": "native",
    "meaning": "母国",
    "example": "born in a particular place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1638,
    "word": "fruit",
    "meaning": "くだもの",
    "example": "a usually sweet food (such as a blueberry, orange, or apple) that grows on a tree or bush",
    "exampleJP": "（定義）"
  },
  {
    "id": 1639,
    "word": "analyze",
    "meaning": "分析する",
    "example": "to examine the details of something carefully, in order to understand or explain it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1640,
    "word": "witness",
    "meaning": "証人",
    "example": "a person who sees something (such as a crime) happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1641,
    "word": "mail",
    "meaning": "郵便",
    "example": "the system used for sending letters and packages from one person to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 1642,
    "word": "terrible",
    "meaning": "ひどい",
    "example": "very shocking and upsetting",
    "exampleJP": "（定義）"
  },
  {
    "id": 1643,
    "word": "researcher",
    "meaning": "研究者",
    "example": "a person who studies a subject in detail in order to discover new information about it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1644,
    "word": "ordinary",
    "meaning": "通常の",
    "example": "normal or usual : not unusual, different, or special",
    "exampleJP": "（定義）"
  },
  {
    "id": 1645,
    "word": "selection",
    "meaning": "選択",
    "example": "when someone or something is chosen; a thing or person who is chosen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1646,
    "word": "anywhere",
    "meaning": "どこでも、どこにも",
    "example": "in, at, or to any place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1647,
    "word": "mental",
    "meaning": "精神",
    "example": "of or relating to the mind",
    "exampleJP": "（定義）"
  },
  {
    "id": 1648,
    "word": "participant",
    "meaning": "参加者",
    "example": "someone who is involved in an activity",
    "exampleJP": "（定義）"
  },
  {
    "id": 1649,
    "word": "vision",
    "meaning": "視覚",
    "example": "the ability to see, sight, eyesight",
    "exampleJP": "（定義）"
  },
  {
    "id": 1650,
    "word": "personality",
    "meaning": "人柄",
    "example": "the way you are as a person",
    "exampleJP": "（定義）"
  },
  {
    "id": 1651,
    "word": "specifically",
    "meaning": "具体的に",
    "example": "for a particular reason, purpose, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1652,
    "word": "fat",
    "meaning": "太い",
    "example": "having a lot of extra flesh on your body : having a lot of body fat",
    "exampleJP": "（定義）"
  },
  {
    "id": 1653,
    "word": "entry",
    "meaning": "入場",
    "example": "when you come into or go into a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1654,
    "word": "fellow",
    "meaning": "仲間",
    "example": "used to describe people who belong to the same group or class or who share a situation, experience, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1655,
    "word": "chemical",
    "meaning": "化学的な",
    "example": "something relating to chemistry",
    "exampleJP": "（定義）"
  },
  {
    "id": 1656,
    "word": "capture",
    "meaning": "捕らえる",
    "example": "to catch someone and make them your prisoner; to get control of a place with force",
    "exampleJP": "（定義）"
  },
  {
    "id": 1657,
    "word": "tip",
    "meaning": "先端",
    "example": "the end of something that is usually long and thin",
    "exampleJP": "（定義）"
  },
  {
    "id": 1658,
    "word": "discount",
    "meaning": "値引き",
    "example": "a reduction in price",
    "exampleJP": "（定義）"
  },
  {
    "id": 1659,
    "word": "peak",
    "meaning": "頂点",
    "example": "the highest level or value of something; the top of a mountain",
    "exampleJP": "（定義）"
  },
  {
    "id": 1660,
    "word": "chairman",
    "meaning": "議長",
    "example": "he person (especially a man) who is in charge of a meeting, committee, or event",
    "exampleJP": "（定義）"
  },
  {
    "id": 1661,
    "word": "proportion",
    "meaning": "割合",
    "example": "an amount that is a part of a whole thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1662,
    "word": "ear",
    "meaning": "耳",
    "example": "the part of the body that you hear with",
    "exampleJP": "（定義）"
  },
  {
    "id": 1663,
    "word": "disappear",
    "meaning": "消える",
    "example": "to stop being visible : to pass out of sight",
    "exampleJP": "（定義）"
  },
  {
    "id": 1664,
    "word": "shout",
    "meaning": "叫ぶ",
    "example": "to say (something) very loudly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1665,
    "word": "yard",
    "meaning": "庭",
    "example": "an outdoor area that is next to a house and is usually covered by grass",
    "exampleJP": "（定義）"
  },
  {
    "id": 1666,
    "word": "constant",
    "meaning": "一定の",
    "example": "things happening always or at a regular rate",
    "exampleJP": "（定義）"
  },
  {
    "id": 1667,
    "word": "significantly",
    "meaning": "著しく、かなり",
    "example": "in a way that is easy to see or by a large amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 1668,
    "word": "hill",
    "meaning": "丘",
    "example": "a usually rounded area of land that is higher than the land around it but that is not as high as a mountain",
    "exampleJP": "（定義）"
  },
  {
    "id": 1669,
    "word": "considerable",
    "meaning": "かなりの",
    "example": "something large in size, amount, or quantity",
    "exampleJP": "（定義）"
  },
  {
    "id": 1670,
    "word": "instruction",
    "meaning": "指示",
    "example": "something that you have been told to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 1671,
    "word": "intelligence",
    "meaning": "知能",
    "example": "the ability to learn things or to consider situations",
    "exampleJP": "（定義）"
  },
  {
    "id": 1672,
    "word": "ideal",
    "meaning": "理想",
    "example": "exactly right for a particular purpose, situation, or person",
    "exampleJP": "（定義）"
  },
  {
    "id": 1673,
    "word": "folk",
    "meaning": "人々",
    "example": "people",
    "exampleJP": "（定義）"
  },
  {
    "id": 1674,
    "word": "surely",
    "meaning": "まさか",
    "example": "used to express surprise that something has happened or is going to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1675,
    "word": "guard",
    "meaning": "護衛する",
    "example": "a state in which someone is carefully looking for possible danger, threats, problems, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1676,
    "word": "cat",
    "meaning": "猫",
    "example": "a small animal that is related to lions and tigers and that is often kept by people as a pet",
    "exampleJP": "（定義）"
  },
  {
    "id": 1677,
    "word": "somewhat",
    "meaning": "いくらか、やや",
    "example": "in a small amount or degree;  to some degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 1678,
    "word": "kiss",
    "meaning": "キス",
    "example": "to touch (someone) with your lips as a greeting or as a way of showing love or sexual attraction",
    "exampleJP": "（定義）"
  },
  {
    "id": 1679,
    "word": "presentation",
    "meaning": "プレゼンテーション",
    "example": "a talk giving information about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1680,
    "word": "joint",
    "meaning": "関節",
    "example": "a point where two bones meet in the body",
    "exampleJP": "（定義）"
  },
  {
    "id": 1681,
    "word": "compete",
    "meaning": "競争する",
    "example": "to try to get or win something (such as a prize or reward) that someone else is also trying to win",
    "exampleJP": "（定義）"
  },
  {
    "id": 1682,
    "word": "poll",
    "meaning": "世論調査",
    "example": "when people are asked questions to discover what they think about a subject; a survey",
    "exampleJP": "（定義）"
  },
  {
    "id": 1683,
    "word": "weak",
    "meaning": "弱い",
    "example": "having little physical power or ability : not strong",
    "exampleJP": "（定義）"
  },
  {
    "id": 1684,
    "word": "faith",
    "meaning": "信仰、信条",
    "example": "strong belief or trust in someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1685,
    "word": "reduction",
    "meaning": "縮小",
    "example": "the act of making something smaller in size, amount, number, etc. : the act of reducing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1686,
    "word": "reserve",
    "meaning": "予約する",
    "example": "to make arrangements so that you will be able to use or have (something, such as a room, table, or seat) at a later time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1687,
    "word": "complaint",
    "meaning": "不平",
    "example": "a statement that you are unhappy or not satisfied with something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1688,
    "word": "bore",
    "meaning": "退屈させる",
    "example": "to make someone feel bored",
    "exampleJP": "（定義）"
  },
  {
    "id": 1689,
    "word": "mission",
    "meaning": "任務",
    "example": "an important job, usually traveling somewhere",
    "exampleJP": "（定義）"
  },
  {
    "id": 1690,
    "word": "somehow",
    "meaning": "なんとなく",
    "example": "in a way that is not known or certain",
    "exampleJP": "（定義）"
  },
  {
    "id": 1691,
    "word": "tone",
    "meaning": "音質",
    "example": "the quality of a sound, especially of someone's voice",
    "exampleJP": "（定義）"
  },
  {
    "id": 1692,
    "word": "neighborhood",
    "meaning": "隣人",
    "example": "the people who live near each other or a section of a town or city",
    "exampleJP": "（定義）"
  },
  {
    "id": 1693,
    "word": "passenger",
    "meaning": "乗客",
    "example": "a person who is traveling from one place to another in a car, bus, train, ship, airplane, etc., and who is not driving or working on it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1694,
    "word": "justice",
    "meaning": "裁判、裁き",
    "example": "the process or result of using laws to fairly judge and punish crimes and criminals",
    "exampleJP": "（定義）"
  },
  {
    "id": 1695,
    "word": "phase",
    "meaning": "段階",
    "example": "a distinct part or step in a process",
    "exampleJP": "（定義）"
  },
  {
    "id": 1696,
    "word": "thin",
    "meaning": "薄い",
    "example": "having a small distance between the top and bottom or front and back surfaces",
    "exampleJP": "（定義）"
  },
  {
    "id": 1697,
    "word": "rush",
    "meaning": "急ぐ",
    "example": "to move or do something very quickly or in a way that shows you are in a hurry",
    "exampleJP": "（定義）"
  },
  {
    "id": 1698,
    "word": "formal",
    "meaning": "形式的な",
    "example": "requiring or using serious and proper clothes and manners",
    "exampleJP": "（定義）"
  },
  {
    "id": 1699,
    "word": "religion",
    "meaning": "宗教",
    "example": "the belief in a god",
    "exampleJP": "（定義）"
  },
  {
    "id": 1700,
    "word": "employer",
    "meaning": "雇用者",
    "example": "a person or company that pays people to work for them",
    "exampleJP": "（定義）"
  },
  {
    "id": 1701,
    "word": "reject",
    "meaning": "断る",
    "example": "to refuse, deny to believe, accept, or consider",
    "exampleJP": "（定義）"
  },
  {
    "id": 1702,
    "word": "latter",
    "meaning": "後ろのほうの",
    "example": "coming or happening near the end of a process, activity, series, life, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1703,
    "word": "plate",
    "meaning": "皿",
    "example": "a flat and usually round dish that is used for eating or serving food",
    "exampleJP": "（定義）"
  },
  {
    "id": 1704,
    "word": "ban",
    "meaning": "禁止する",
    "example": "to officially say that someone must not do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1705,
    "word": "steal",
    "meaning": "盗む",
    "example": "to secretly take something that does not belong to you, without intending to return it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1706,
    "word": "protest",
    "meaning": "抗議",
    "example": "when people show that they disagree with something by standing somewhere, shouting, carrying signs, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1707,
    "word": "index",
    "meaning": "索引",
    "example": "a written or printed order list",
    "exampleJP": "（定義）"
  },
  {
    "id": 1708,
    "word": "sad",
    "meaning": "悲しい",
    "example": "not happy : feeling or showing grief or unhappiness",
    "exampleJP": "（定義）"
  },
  {
    "id": 1709,
    "word": "frequently",
    "meaning": "頻繁に",
    "example": "often",
    "exampleJP": "（定義）"
  },
  {
    "id": 1710,
    "word": "circle",
    "meaning": "丸い",
    "example": "a perfectly round shape : a line that is curved so that its ends meet and every point on the line is the same distance from the center",
    "exampleJP": "（定義）"
  },
  {
    "id": 1711,
    "word": "helpful",
    "meaning": "役立つ",
    "example": "useful; willing to help",
    "exampleJP": "（定義）"
  },
  {
    "id": 1712,
    "word": "command",
    "meaning": "命令する",
    "example": "to give (someone) an order",
    "exampleJP": "（定義）"
  },
  {
    "id": 1713,
    "word": "attractive",
    "meaning": "魅力的な",
    "example": "having a pleasing appearance",
    "exampleJP": "（定義）"
  },
  {
    "id": 1714,
    "word": "sick",
    "meaning": "病気",
    "example": "affected with a disease or illness",
    "exampleJP": "（定義）"
  },
  {
    "id": 1715,
    "word": "impression",
    "meaning": "印象",
    "example": "an idea, feeling, or opinion about something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1716,
    "word": "unable",
    "meaning": "できない",
    "example": "to not be able to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1717,
    "word": "joke",
    "meaning": "冗談",
    "example": "something said or done to cause laughter",
    "exampleJP": "（定義）"
  },
  {
    "id": 1718,
    "word": "sky",
    "meaning": "空",
    "example": "the space over the Earth where the sun, moon, stars, and clouds appear",
    "exampleJP": "（定義）"
  },
  {
    "id": 1719,
    "word": "column",
    "meaning": "欄",
    "example": "one of the vertical blocks of print into which a page of a newspaper, magazine, dictionary or spreadsheet, is divided",
    "exampleJP": "（定義）"
  },
  {
    "id": 1720,
    "word": "electronic",
    "meaning": "電子の",
    "example": "Electronic equipment consists of things such as computers, televisions, and radios",
    "exampleJP": "（定義）"
  },
  {
    "id": 1721,
    "word": "impose",
    "meaning": "課す",
    "example": "to make someone to do or endure something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1722,
    "word": "criminal",
    "meaning": "犯罪者、犯罪の",
    "example": "involving illegal activity : relating to crime",
    "exampleJP": "（定義）"
  },
  {
    "id": 1723,
    "word": "besides",
    "meaning": "～以外に、加えて、",
    "example": "other than or in addition to",
    "exampleJP": "（定義）"
  },
  {
    "id": 1724,
    "word": "properly",
    "meaning": "適切に",
    "example": "correctly, or in a satisfactory way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1725,
    "word": "ancient",
    "meaning": "古代な",
    "example": "very old : having lived or existed for a very long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1726,
    "word": "coast",
    "meaning": "海岸",
    "example": "the land along or near a sea or ocean",
    "exampleJP": "（定義）"
  },
  {
    "id": 1727,
    "word": "ill",
    "meaning": "病気",
    "example": "not well or healthy : sick or unhealthy",
    "exampleJP": "（定義）"
  },
  {
    "id": 1728,
    "word": "kick",
    "meaning": "蹴る",
    "example": "to hit (someone or something) with your foot",
    "exampleJP": "（定義）"
  },
  {
    "id": 1729,
    "word": "closely",
    "meaning": "じっくりと、注意深く",
    "example": "If you look at or listen to something closely, you look at it or listen to it very carefully.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1730,
    "word": "multiple",
    "meaning": "複合的な",
    "example": "with several parts",
    "exampleJP": "（定義）"
  },
  {
    "id": 1731,
    "word": "yield",
    "meaning": "産出する",
    "example": "to produce or provide (something, such as a plant or crop)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1732,
    "word": "via",
    "meaning": "経由で",
    "example": "by going through, by way of",
    "exampleJP": "（定義）"
  },
  {
    "id": 1733,
    "word": "legislation",
    "meaning": "法律",
    "example": "a law or a set of laws",
    "exampleJP": "（定義）"
  },
  {
    "id": 1734,
    "word": "county",
    "meaning": "州",
    "example": "an area of Britain, Ireland, or the US that has its own local government",
    "exampleJP": "（定義）"
  },
  {
    "id": 1735,
    "word": "unlike",
    "meaning": "～とは違って",
    "example": "different from someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1736,
    "word": "mobile",
    "meaning": "可動の",
    "example": "able to move or be moved easily",
    "exampleJP": "（定義）"
  },
  {
    "id": 1737,
    "word": "assistant",
    "meaning": "助手、補佐",
    "example": "someone whose job is to help a person who has a more important job",
    "exampleJP": "（定義）"
  },
  {
    "id": 1738,
    "word": "implement",
    "meaning": "実施する",
    "example": "to put something in place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1739,
    "word": "chart",
    "meaning": "チャート",
    "example": "a table or diagram that shows information",
    "exampleJP": "（定義）"
  },
  {
    "id": 1740,
    "word": "attach",
    "meaning": "付随する",
    "example": "to be associated or connected with",
    "exampleJP": "（定義）"
  },
  {
    "id": 1741,
    "word": "hell",
    "meaning": "地獄",
    "example": "according to some religions, the place where bad people go when they die; a very unpleasant experience",
    "exampleJP": "（定義）"
  },
  {
    "id": 1742,
    "word": "everywhere",
    "meaning": "どこでも",
    "example": "in or to every place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1743,
    "word": "advise",
    "meaning": "アドバイスする",
    "example": "to give an opinion or suggestion to someone about what should be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 1744,
    "word": "household",
    "meaning": "世帯",
    "example": "a family or group of people who live together in a house",
    "exampleJP": "（定義）"
  },
  {
    "id": 1745,
    "word": "acknowledge",
    "meaning": "認める",
    "example": "to consider or regard something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1746,
    "word": "reward",
    "meaning": "報酬",
    "example": "money or another kind of payment that is given or received for something that has been done or that is offered for something that might be done",
    "exampleJP": "（定義）"
  },
  {
    "id": 1747,
    "word": "east",
    "meaning": "東",
    "example": "the direction where the sun rises",
    "exampleJP": "（定義）"
  },
  {
    "id": 1748,
    "word": "hat",
    "meaning": "帽子",
    "example": "a covering for the head that often has a brim and a rounded or flat top",
    "exampleJP": "（定義）"
  },
  {
    "id": 1749,
    "word": "academic",
    "meaning": "学問的な",
    "example": "related to education, schools, universities, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1750,
    "word": "voter",
    "meaning": "有権者",
    "example": "someone who votes or who is officially allowed to vote",
    "exampleJP": "（定義）"
  },
  {
    "id": 1751,
    "word": "meanwhile",
    "meaning": "その間に",
    "example": "at or during the same time : in the meantime",
    "exampleJP": "（定義）"
  },
  {
    "id": 1752,
    "word": "furthermore",
    "meaning": "さらに",
    "example": "in addition to what has been said",
    "exampleJP": "（定義）"
  },
  {
    "id": 1753,
    "word": "accuse",
    "meaning": "責める",
    "example": "to blame (someone) for something wrong or illegal : to say that someone is guilty of a fault or crime",
    "exampleJP": "（定義）"
  },
  {
    "id": 1754,
    "word": "scientific",
    "meaning": "科学の",
    "example": "of or relating to science",
    "exampleJP": "（定義）"
  },
  {
    "id": 1755,
    "word": "wage",
    "meaning": "賃金",
    "example": "an amount of money that a worker is paid based on the number of hours, days, etc., that are worked",
    "exampleJP": "（定義）"
  },
  {
    "id": 1756,
    "word": "absence",
    "meaning": "欠如",
    "example": "a state or condition in which something expected, wanted, or looked for is not present or does not exist",
    "exampleJP": "（定義）"
  },
  {
    "id": 1757,
    "word": "construct",
    "meaning": "建築する",
    "example": "to build or create something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1758,
    "word": "remark",
    "meaning": "発言",
    "example": "the act of noticing or making a comment about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1759,
    "word": "medicine",
    "meaning": "薬",
    "example": "a substance that is used in treating disease or relieving pain and that is usually in the form of a pill or a liquid",
    "exampleJP": "（定義）"
  },
  {
    "id": 1760,
    "word": "professor",
    "meaning": "教授",
    "example": "a teacher of high rank in a university or college",
    "exampleJP": "（定義）"
  },
  {
    "id": 1761,
    "word": "rare",
    "meaning": "珍しい、まれな",
    "example": "not common or usual, not often",
    "exampleJP": "（定義）"
  },
  {
    "id": 1762,
    "word": "intention",
    "meaning": "意図",
    "example": "the thing that you plan to do or achieve : an aim or purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1763,
    "word": "dozen",
    "meaning": "ダース",
    "example": "a group of 12 people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1764,
    "word": "settlement",
    "meaning": "和解",
    "example": "an official agreement that finishes an argument",
    "exampleJP": "（定義）"
  },
  {
    "id": 1765,
    "word": "gap",
    "meaning": "差",
    "example": "a space between two people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1766,
    "word": "widely",
    "meaning": "広く",
    "example": "including a lot of different places, people, subjects, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1767,
    "word": "minimum",
    "meaning": "最小限",
    "example": "the lowest number or amount that is possible",
    "exampleJP": "（定義）"
  },
  {
    "id": 1768,
    "word": "northern",
    "meaning": "北の",
    "example": "located in or toward the north",
    "exampleJP": "（定義）"
  },
  {
    "id": 1769,
    "word": "estate",
    "meaning": "私有地",
    "example": "land that a person owns",
    "exampleJP": "（定義）"
  },
  {
    "id": 1770,
    "word": "equally",
    "meaning": "等しく",
    "example": "to the same degree or level; into amounts or parts that are the same size",
    "exampleJP": "（定義）"
  },
  {
    "id": 1771,
    "word": "expose",
    "meaning": "さらす",
    "example": "to make visible, without any covering or protection",
    "exampleJP": "（定義）"
  },
  {
    "id": 1772,
    "word": "alive",
    "meaning": "生きている",
    "example": "having life : living : not dead",
    "exampleJP": "（定義）"
  },
  {
    "id": 1773,
    "word": "shut",
    "meaning": "閉める",
    "example": "to close (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1774,
    "word": "victory",
    "meaning": "勝利",
    "example": "success in defeating an opponent or enemy",
    "exampleJP": "（定義）"
  },
  {
    "id": 1775,
    "word": "resolve",
    "meaning": "解決する",
    "example": "to find an answer to solve problems",
    "exampleJP": "（定義）"
  },
  {
    "id": 1776,
    "word": "critic",
    "meaning": "批評家",
    "example": "a person who gives opinions about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1777,
    "word": "variable",
    "meaning": "変わりやすい",
    "example": "changing often",
    "exampleJP": "（定義）"
  },
  {
    "id": 1778,
    "word": "enormous",
    "meaning": "巨大な",
    "example": "very large in size or amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 1779,
    "word": "sweet",
    "meaning": "甘い",
    "example": "containing a lot of sugar",
    "exampleJP": "（定義）"
  },
  {
    "id": 1780,
    "word": "permanent",
    "meaning": "永久的な",
    "example": "lasting or continuing for a very long time or forever : not temporary or changing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1781,
    "word": "emotion",
    "meaning": "感情",
    "example": "a feeling such as love or anger, or strong feelings in general",
    "exampleJP": "（定義）"
  },
  {
    "id": 1782,
    "word": "pursue",
    "meaning": "追求する",
    "example": "to follow and try to catch or to reach a goal",
    "exampleJP": "（定義）"
  },
  {
    "id": 1783,
    "word": "tall",
    "meaning": "高い",
    "example": "greater in height than the average person, building, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1784,
    "word": "urge",
    "meaning": "駆り立てる",
    "example": "to try to persuade (someone) in a serious way to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1785,
    "word": "enemy",
    "meaning": "敵",
    "example": "someone who hates another : someone who attacks or tries to harm another",
    "exampleJP": "（定義）"
  },
  {
    "id": 1786,
    "word": "appoint",
    "meaning": "任命する",
    "example": "to choose (someone) to have a particular job : to give (someone) a position or duty",
    "exampleJP": "（定義）"
  },
  {
    "id": 1787,
    "word": "milk",
    "meaning": "牛乳,ミルク",
    "example": "a white liquid produced by a woman to feed her baby or by female animals to feed their young",
    "exampleJP": "（定義）"
  },
  {
    "id": 1788,
    "word": "talent",
    "meaning": "才能",
    "example": "a natural ability to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1789,
    "word": "smell",
    "meaning": "におい",
    "example": "the quality of a thing that you can sense with your nose",
    "exampleJP": "（定義）"
  },
  {
    "id": 1790,
    "word": "prior",
    "meaning": "前の",
    "example": "existing or coming earlier in time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1791,
    "word": "priority",
    "meaning": "優先",
    "example": "the fact that is more important than other things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1792,
    "word": "online",
    "meaning": "オンライン",
    "example": "connected to a system of computers, especially the Internet",
    "exampleJP": "（定義）"
  },
  {
    "id": 1793,
    "word": "phrase",
    "meaning": "フレーズ",
    "example": "a group of words which are often used together and have a particular meaning",
    "exampleJP": "（定義）"
  },
  {
    "id": 1794,
    "word": "pilot",
    "meaning": "パイロット",
    "example": "someone who flies an aircraft",
    "exampleJP": "（定義）"
  },
  {
    "id": 1795,
    "word": "stable",
    "meaning": "安定した",
    "example": "in a good situation or condition not likely changed",
    "exampleJP": "（定義）"
  },
  {
    "id": 1796,
    "word": "merely",
    "meaning": "～にすぎない",
    "example": "used to emphasize that something is not large, important, or effective when compared to something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 1797,
    "word": "resolution",
    "meaning": "決議",
    "example": "an official decision that is made after a group or organization have voted",
    "exampleJP": "（定義）"
  },
  {
    "id": 1798,
    "word": "communicate",
    "meaning": "やりとりする",
    "example": "to give and exchange information by speaking or writing",
    "exampleJP": "（定義）"
  },
  {
    "id": 1799,
    "word": "injury",
    "meaning": "けが",
    "example": "damage to someone's body in an accident or attack",
    "exampleJP": "（定義）"
  },
  {
    "id": 1800,
    "word": "vast",
    "meaning": "広大",
    "example": "extremely big",
    "exampleJP": "（定義）"
  },
  {
    "id": 1801,
    "word": "exhibition",
    "meaning": "展示会",
    "example": "when objects such as paintings are shown to the public",
    "exampleJP": "（定義）"
  },
  {
    "id": 1802,
    "word": "producer",
    "meaning": "生産者",
    "example": "a company, country, or person that makes goods or grows food; someone who controls how a film, play, program, or musical recording is made",
    "exampleJP": "（定義）"
  },
  {
    "id": 1803,
    "word": "regional",
    "meaning": "地域の",
    "example": "relating to a region (= particular area)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1804,
    "word": "immediate",
    "meaning": "即時の",
    "example": "happening or done without delay or existing now",
    "exampleJP": "（定義）"
  },
  {
    "id": 1805,
    "word": "incident",
    "meaning": "事件",
    "example": "an event, especially one that is bad or unusual",
    "exampleJP": "（定義）"
  },
  {
    "id": 1806,
    "word": "childhood",
    "meaning": "子どもの頃",
    "example": "the period of time when a person is a child",
    "exampleJP": "（定義）"
  },
  {
    "id": 1807,
    "word": "draft",
    "meaning": "原稿、原案、下絵",
    "example": "a former version of something to make final",
    "exampleJP": "（定義）"
  },
  {
    "id": 1808,
    "word": "slip",
    "meaning": "滑り落ちる",
    "example": "to slide out of the proper position",
    "exampleJP": "（定義）"
  },
  {
    "id": 1809,
    "word": "accompany",
    "meaning": "同行する",
    "example": "to visit somewhere with someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 1810,
    "word": "politician",
    "meaning": "政治家",
    "example": "someone who is active in government usually as an elected official",
    "exampleJP": "（定義）"
  },
  {
    "id": 1811,
    "word": "angry",
    "meaning": "怒る",
    "example": "filled with anger : having a strong feeling of being upset or annoyed",
    "exampleJP": "（定義）"
  },
  {
    "id": 1812,
    "word": "knock",
    "meaning": "ノックする",
    "example": "to hit something (such as a door) with the knuckles of your hand or with a hard object (such as a knocker) in order to get people's attention",
    "exampleJP": "（定義）"
  },
  {
    "id": 1813,
    "word": "seed",
    "meaning": "種",
    "example": "a small object produced by a plant from which a new plant can grow",
    "exampleJP": "（定義）"
  },
  {
    "id": 1814,
    "word": "salary",
    "meaning": "給料",
    "example": "an amount of money that an employee is paid each year",
    "exampleJP": "（定義）"
  },
  {
    "id": 1815,
    "word": "illustrate",
    "meaning": "解説する",
    "example": "explain with examples to make easier to understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 1816,
    "word": "imply",
    "meaning": "暗示する",
    "example": "to express in an indirect way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1817,
    "word": "breakfast",
    "meaning": "朝食",
    "example": "the first meal of the day",
    "exampleJP": "（定義）"
  },
  {
    "id": 1818,
    "word": "temporary",
    "meaning": "一時的な",
    "example": "continuing for a limited time, not permanent",
    "exampleJP": "（定義）"
  },
  {
    "id": 1819,
    "word": "liberal",
    "meaning": "自由主義の、リベラルな",
    "example": "believing government should actively support social needs",
    "exampleJP": "（定義）"
  },
  {
    "id": 1820,
    "word": "lake",
    "meaning": "湖",
    "example": "a large area of water that is surrounded by land",
    "exampleJP": "（定義）"
  },
  {
    "id": 1821,
    "word": "qualify",
    "meaning": "資格を与える",
    "example": "to give (someone) the necessary skill or knowledge to do a particular job or activity",
    "exampleJP": "（定義）"
  },
  {
    "id": 1822,
    "word": "competitive",
    "meaning": "競争心の強い",
    "example": "wanting to win or to be more successful than other people",
    "exampleJP": "（定義）"
  },
  {
    "id": 1823,
    "word": "truly",
    "meaning": "本当に",
    "example": "used to emphasize a description of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1824,
    "word": "hi",
    "meaning": "こんちゃ",
    "example": "hello",
    "exampleJP": "（定義）"
  },
  {
    "id": 1825,
    "word": "yellow",
    "meaning": "黄色",
    "example": "having the color of the sun or of ripe lemons",
    "exampleJP": "（定義）"
  },
  {
    "id": 1826,
    "word": "habit",
    "meaning": "癖、習慣",
    "example": "a usual way of behaving : something that a person does often in a regular and repeated",
    "exampleJP": "（定義）"
  },
  {
    "id": 1827,
    "word": "disk",
    "meaning": "ディスク",
    "example": "a flat, round shape or object; a CD or DVD",
    "exampleJP": "（定義）"
  },
  {
    "id": 1828,
    "word": "core",
    "meaning": "核",
    "example": "the central part of something that is important",
    "exampleJP": "（定義）"
  },
  {
    "id": 1829,
    "word": "emotional",
    "meaning": "感情的な",
    "example": "showing strong feelings, or making people have strong feelings",
    "exampleJP": "（定義）"
  },
  {
    "id": 1830,
    "word": "aircraft",
    "meaning": "飛行機",
    "example": "a vehicle that can fly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1831,
    "word": "self",
    "meaning": "自身、自我",
    "example": "the person that someone normally or truly is — used to describe the way someone acts or feels",
    "exampleJP": "（定義）"
  },
  {
    "id": 1832,
    "word": "metal",
    "meaning": "金属",
    "example": "a substance (such as gold, tin, or copper) that usually has a shiny appearance, is a good conductor of electricity and heat, can be melted, and is usually capable of being shaped",
    "exampleJP": "（定義）"
  },
  {
    "id": 1833,
    "word": "existence",
    "meaning": "存在",
    "example": "the state of being real",
    "exampleJP": "（定義）"
  },
  {
    "id": 1834,
    "word": "bone",
    "meaning": "骨",
    "example": "any one of the hard pieces that form the frame (called a skeleton) inside a person's or animal's body",
    "exampleJP": "（定義）"
  },
  {
    "id": 1835,
    "word": "panel",
    "meaning": "パネル",
    "example": "a group of people who answer questions or give opinions",
    "exampleJP": "（定義）"
  },
  {
    "id": 1836,
    "word": "prime",
    "meaning": "主要な",
    "example": "most important, chief importance in value",
    "exampleJP": "（定義）"
  },
  {
    "id": 1837,
    "word": "appointment",
    "meaning": "予約",
    "example": "a time you have arranged to meet someone or go somewhere",
    "exampleJP": "（定義）"
  },
  {
    "id": 1838,
    "word": "emphasize",
    "meaning": "強調する",
    "example": "to show that something is especially important or needs special attention",
    "exampleJP": "（定義）"
  },
  {
    "id": 1839,
    "word": "maximum",
    "meaning": "最大限",
    "example": "The maximum amount of something is the largest amount that is allowed or possible",
    "exampleJP": "（定義）"
  },
  {
    "id": 1840,
    "word": "effectively",
    "meaning": "効率的な",
    "example": "in a way that is successful and achieves what you want",
    "exampleJP": "（定義）"
  },
  {
    "id": 1841,
    "word": "elsewhere",
    "meaning": "他の所で",
    "example": "in or to another place",
    "exampleJP": "（定義）"
  },
  {
    "id": 1842,
    "word": "bother",
    "meaning": "悩ます",
    "example": "to make someone feel worried or upset",
    "exampleJP": "（定義）"
  },
  {
    "id": 1843,
    "word": "initiative",
    "meaning": "取り組み",
    "example": "a plan or activity that is done to solve a problem or improve a situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 1844,
    "word": "sharp",
    "meaning": "鋭い",
    "example": "having a thin edge that is able to cut things or a fine point that is able to make a hole in things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1845,
    "word": "diet",
    "meaning": "食事、ダイエット",
    "example": "the type of food that someone usually eats; when someone eats less food to lose weight or because of a medical problem",
    "exampleJP": "（定義）"
  },
  {
    "id": 1846,
    "word": "motion",
    "meaning": "動き",
    "example": "an act or process of moving",
    "exampleJP": "（定義）"
  },
  {
    "id": 1847,
    "word": "gray",
    "meaning": "灰色",
    "example": "having a color between black and white : having a color that is like the color of smoke",
    "exampleJP": "（定義）"
  },
  {
    "id": 1848,
    "word": "plastic",
    "meaning": "プラスチック",
    "example": "a light, artificial substance that can be made into different shapes when it is soft and is used in a lot of different ways",
    "exampleJP": "（定義）"
  },
  {
    "id": 1849,
    "word": "complicate",
    "meaning": "複雑にする",
    "example": "to make (something) more difficult or less simple",
    "exampleJP": "（定義）"
  },
  {
    "id": 1850,
    "word": "discipline",
    "meaning": "訓練、しつけ、折檻",
    "example": "control that is gained by requiring that rules or orders be obeyed and punishing bad behavior",
    "exampleJP": "（定義）"
  },
  {
    "id": 1851,
    "word": "disappoint",
    "meaning": "がっかりさせる",
    "example": "to make (someone) unhappy by not being as good as expected or by not doing something that was hoped for or expected",
    "exampleJP": "（定義）"
  },
  {
    "id": 1852,
    "word": "boss",
    "meaning": "社長",
    "example": "someone who is responsible for employees and tells them what to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 1853,
    "word": "assumption",
    "meaning": "思い込み",
    "example": "something that you think is true without having any proof",
    "exampleJP": "（定義）"
  },
  {
    "id": 1854,
    "word": "freeze",
    "meaning": "凍る",
    "example": "to be become a hard substance (such as ice) because of cold",
    "exampleJP": "（定義）"
  },
  {
    "id": 1855,
    "word": "extreme",
    "meaning": "極度の",
    "example": "very great in degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 1856,
    "word": "passage",
    "meaning": "通路",
    "example": "a long, narrow space that connects one place to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 1857,
    "word": "reputation",
    "meaning": "評判",
    "example": "the common opinion that people have about someone or something : the way in which people think of someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1858,
    "word": "forth",
    "meaning": "前へ",
    "example": "out into notice or view",
    "exampleJP": "（定義）"
  },
  {
    "id": 1859,
    "word": "negotiation",
    "meaning": "交渉",
    "example": "when people try to make or change an agreement by discussion",
    "exampleJP": "（定義）"
  },
  {
    "id": 1860,
    "word": "mechanism",
    "meaning": "メカニズム",
    "example": "a piece of machinery : a mechanical part or group of parts having a particular function",
    "exampleJP": "（定義）"
  },
  {
    "id": 1861,
    "word": "coat",
    "meaning": "コート",
    "example": "an outer piece of clothing that can be long or short and that is worn to keep warm or dry",
    "exampleJP": "（定義）"
  },
  {
    "id": 1862,
    "word": "democracy",
    "meaning": "民主主義",
    "example": "a system of government in which people elect their leaders, or a country with this system",
    "exampleJP": "（定義）"
  },
  {
    "id": 1863,
    "word": "pocket",
    "meaning": "ポケット",
    "example": "a usually small cloth bag that is sewn into a piece of clothing, a larger bag, etc., and that is open at the top or side so that you can put things into it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1864,
    "word": "lucky",
    "meaning": "幸運な",
    "example": "having good things happen to you;  something that is believed to give good luck",
    "exampleJP": "（定義）"
  },
  {
    "id": 1865,
    "word": "crash",
    "meaning": "衝突する",
    "example": "to hit something hard enough to cause serious damage or destruction",
    "exampleJP": "（定義）"
  },
  {
    "id": 1866,
    "word": "observation",
    "meaning": "観察",
    "example": "when someone watches someone or something carefully",
    "exampleJP": "（定義）"
  },
  {
    "id": 1867,
    "word": "meat",
    "meaning": "肉",
    "example": "the flesh of an animal used as food",
    "exampleJP": "（定義）"
  },
  {
    "id": 1868,
    "word": "concentration",
    "meaning": "集中力",
    "example": "the ability to think carefully about something you are doing and nothing else",
    "exampleJP": "（定義）"
  },
  {
    "id": 1869,
    "word": "implication",
    "meaning": "暗示、影響",
    "example": "a result or effect that seems likely in the future; something suggested without being said directly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1870,
    "word": "deserve",
    "meaning": "～にふさわしい",
    "example": "used to say that someone or something should or should not have or be given",
    "exampleJP": "（定義）"
  },
  {
    "id": 1871,
    "word": "unusual",
    "meaning": "珍しい",
    "example": "different and not ordinary, often in a way that is interesting or exciting",
    "exampleJP": "（定義）"
  },
  {
    "id": 1872,
    "word": "defend",
    "meaning": "防御する",
    "example": "to fight in order to keep (someone or something) safe",
    "exampleJP": "（定義）"
  },
  {
    "id": 1873,
    "word": "classic",
    "meaning": "クラシック、古典",
    "example": "something popular or famous for a long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1874,
    "word": "king",
    "meaning": "王様",
    "example": "a male ruler of a country who usually inherits his position and rules for life",
    "exampleJP": "（定義）"
  },
  {
    "id": 1875,
    "word": "interaction",
    "meaning": "交流",
    "example": "the activity of talking and doing things with other people, or the way you do this",
    "exampleJP": "（定義）"
  },
  {
    "id": 1876,
    "word": "repair",
    "meaning": "修理する",
    "example": "to put (something that is broken or damaged) back into good condition : fix",
    "exampleJP": "（定義）"
  },
  {
    "id": 1877,
    "word": "collapse",
    "meaning": "倒壊する",
    "example": "to break down and fall apart suddenly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1878,
    "word": "borrow",
    "meaning": "借りる",
    "example": "to take and use (something that belongs to someone else) for a period of time before returning it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1879,
    "word": "fundamental",
    "meaning": "基本",
    "example": "forming a necessary part, base, or core",
    "exampleJP": "（定義）"
  },
  {
    "id": 1880,
    "word": "dish",
    "meaning": "皿",
    "example": "a shallow container that you cook or serve food in",
    "exampleJP": "（定義）"
  },
  {
    "id": 1881,
    "word": "abroad",
    "meaning": "外国",
    "example": "in or to a foreign country",
    "exampleJP": "（定義）"
  },
  {
    "id": 1882,
    "word": "soul",
    "meaning": "魂",
    "example": "the spiritual part of a person that is believed to give life to the body and in many religions is believed to live forever",
    "exampleJP": "（定義）"
  },
  {
    "id": 1883,
    "word": "capable",
    "meaning": "～する能力がある",
    "example": "having the ability to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1884,
    "word": "defeat",
    "meaning": "負かす",
    "example": "to win a victory over (someone or something) in a war, contest, game, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1885,
    "word": "presidential",
    "meaning": "大統領の",
    "example": "relating to the president of a country",
    "exampleJP": "（定義）"
  },
  {
    "id": 1886,
    "word": "perfectly",
    "meaning": "完全に",
    "example": "used to emphasize the word that follows it; in a perfect way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1887,
    "word": "enhance",
    "meaning": "向上させる",
    "example": "make effect to increase or improve",
    "exampleJP": "（定義）"
  },
  {
    "id": 1888,
    "word": "proud",
    "meaning": "誇りに思う",
    "example": "very happy and pleased because of something you have done, something you own, someone you know or are related to, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1889,
    "word": "emergency",
    "meaning": "緊急",
    "example": "a serious or dangerous situation that needs immediate action",
    "exampleJP": "（定義）"
  },
  {
    "id": 1890,
    "word": "educational",
    "meaning": "教育的な",
    "example": "providing education, or relating to education",
    "exampleJP": "（定義）"
  },
  {
    "id": 1891,
    "word": "distinguish",
    "meaning": "見分ける",
    "example": "to notice or recognize a difference between people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1892,
    "word": "substantial",
    "meaning": "かなりの",
    "example": "large in size or amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 1893,
    "word": "nearby",
    "meaning": "近くの",
    "example": "not far away",
    "exampleJP": "（定義）"
  },
  {
    "id": 1894,
    "word": "manufacturer",
    "meaning": "製造業者",
    "example": "a company that manufactures something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1895,
    "word": "slide",
    "meaning": "滑る",
    "example": "to move smoothly along a surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 1896,
    "word": "valuable",
    "meaning": "価値のある",
    "example": "worth a lot of money, very useful or helpful",
    "exampleJP": "（定義）"
  },
  {
    "id": 1897,
    "word": "personally",
    "meaning": "個人的に",
    "example": "done by you and not someone else",
    "exampleJP": "（定義）"
  },
  {
    "id": 1898,
    "word": "breast",
    "meaning": "乳房",
    "example": "one of the two soft, round parts on a woman's chest",
    "exampleJP": "（定義）"
  },
  {
    "id": 1899,
    "word": "cope",
    "meaning": "対処する",
    "example": "to deal successfully with a difficult situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 1900,
    "word": "approximately",
    "meaning": "およそ",
    "example": "close to a particular number or time although not exactly that number or time",
    "exampleJP": "（定義）"
  },
  {
    "id": 1901,
    "word": "accommodation",
    "meaning": "宿泊施設",
    "example": "a place where you live or stay",
    "exampleJP": "（定義）"
  },
  {
    "id": 1902,
    "word": "highlight",
    "meaning": "ハイライト、ヤマ場",
    "example": "the best or most interesting part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1903,
    "word": "reporter",
    "meaning": "レポーター",
    "example": "describes the news on television, radio, or in a newspaper",
    "exampleJP": "（定義）"
  },
  {
    "id": 1904,
    "word": "climate",
    "meaning": "気候",
    "example": "the weather conditions that an area usually has",
    "exampleJP": "（定義）"
  },
  {
    "id": 1905,
    "word": "shirt",
    "meaning": "シャツ",
    "example": "a piece of clothing for the upper body that has sleeves and usually a collar and buttons down the front",
    "exampleJP": "（定義）"
  },
  {
    "id": 1906,
    "word": "exception",
    "meaning": "例外",
    "example": "someone or something that is different from others : someone or something that is not included",
    "exampleJP": "（定義）"
  },
  {
    "id": 1907,
    "word": "corporation",
    "meaning": "企業",
    "example": "a large company or group of companies",
    "exampleJP": "（定義）"
  },
  {
    "id": 1908,
    "word": "chip",
    "meaning": "ポテトチップ、チップ",
    "example": "a piece of potato that is cooked in oil; a microchip in a computer",
    "exampleJP": "（定義）"
  },
  {
    "id": 1909,
    "word": "winner",
    "meaning": "勝者",
    "example": "someone who wins a game, competition, or election",
    "exampleJP": "（定義）"
  },
  {
    "id": 1910,
    "word": "encounter",
    "meaning": "出会う",
    "example": "unexpectedly be faced with or experience",
    "exampleJP": "（定義）"
  },
  {
    "id": 1911,
    "word": "brown",
    "meaning": "茶色",
    "example": "having a color like coffee or chocolate",
    "exampleJP": "（定義）"
  },
  {
    "id": 1912,
    "word": "breathe",
    "meaning": "息をする",
    "example": "to move air into and out of your lungs",
    "exampleJP": "（定義）"
  },
  {
    "id": 1913,
    "word": "excuse",
    "meaning": "許す",
    "example": "to forgive someone for making a mistake, doing something wrong, etc.,",
    "exampleJP": "（定義）"
  },
  {
    "id": 1914,
    "word": "partly",
    "meaning": "部分的に",
    "example": "used to show that something is true to some degree but not completely",
    "exampleJP": "（定義）"
  },
  {
    "id": 1915,
    "word": "tennis",
    "meaning": "テニス",
    "example": "a sport in which two or four people hit a small ball to each other over a net",
    "exampleJP": "（定義）"
  },
  {
    "id": 1916,
    "word": "urban",
    "meaning": "都会の",
    "example": "belonging or relating to a town or city",
    "exampleJP": "（定義）"
  },
  {
    "id": 1917,
    "word": "confuse",
    "meaning": "混乱させる",
    "example": "to make (someone) uncertain or unable to understand something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1918,
    "word": "southern",
    "meaning": "南の",
    "example": "in or from the south part of an area",
    "exampleJP": "（定義）"
  },
  {
    "id": 1919,
    "word": "output",
    "meaning": "生産高",
    "example": "the amount of something that is produced",
    "exampleJP": "（定義）"
  },
  {
    "id": 1920,
    "word": "beauty",
    "meaning": "美",
    "example": "the quality of being physically attractive",
    "exampleJP": "（定義）"
  },
  {
    "id": 1921,
    "word": "massive",
    "meaning": "巨大な",
    "example": "very big",
    "exampleJP": "（定義）"
  },
  {
    "id": 1922,
    "word": "install",
    "meaning": "インストール、設置する",
    "example": "to put a piece of equipment somewhere and make it ready to use;  to put software on a computer",
    "exampleJP": "（定義）"
  },
  {
    "id": 1923,
    "word": "calculate",
    "meaning": "計算する",
    "example": "to find (a number, answer, etc.) by using mathematical processes",
    "exampleJP": "（定義）"
  },
  {
    "id": 1924,
    "word": "mouse",
    "meaning": "鼠",
    "example": "a very small animal that has a pointed nose and a long, thin tail",
    "exampleJP": "（定義）"
  },
  {
    "id": 1925,
    "word": "mathematics",
    "meaning": "数学",
    "example": "the study or science of numbers and shapes",
    "exampleJP": "（定義）"
  },
  {
    "id": 1926,
    "word": "upper",
    "meaning": "上の",
    "example": "located above another or others of the same kind",
    "exampleJP": "（定義）"
  },
  {
    "id": 1927,
    "word": "creation",
    "meaning": "創作、作品",
    "example": "when someone makes something happen or exist; something that someone has made",
    "exampleJP": "（定義）"
  },
  {
    "id": 1928,
    "word": "occupy",
    "meaning": "占める",
    "example": "to live in, fill or take up something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1929,
    "word": "outline",
    "meaning": "概要",
    "example": "a written list or description of only the most important parts of an essay, speech, plan, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1930,
    "word": "sufficient",
    "meaning": "十分な",
    "example": "having or providing enough when needed",
    "exampleJP": "（定義）"
  },
  {
    "id": 1931,
    "word": "update",
    "meaning": "更新する",
    "example": "to add new information",
    "exampleJP": "（定義）"
  },
  {
    "id": 1932,
    "word": "luck",
    "meaning": "運",
    "example": "the things that happen to a person because of chance",
    "exampleJP": "（定義）"
  },
  {
    "id": 1933,
    "word": "preserve",
    "meaning": "保存する",
    "example": "to keep (something) in its original state or in good condition",
    "exampleJP": "（定義）"
  },
  {
    "id": 1934,
    "word": "split",
    "meaning": "分ける",
    "example": "to break apart or into pieces especially along a straight line",
    "exampleJP": "（定義）"
  },
  {
    "id": 1935,
    "word": "swing",
    "meaning": "揺れる",
    "example": "to move backward and forward or from side to side while hanging from something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1936,
    "word": "illness",
    "meaning": "病気",
    "example": "a disease of the body or mind; sickness",
    "exampleJP": "（定義）"
  },
  {
    "id": 1937,
    "word": "journalist",
    "meaning": "ジャーナリスト",
    "example": "someone whose job is journalism",
    "exampleJP": "（定義）"
  },
  {
    "id": 1938,
    "word": "sudden",
    "meaning": "突然",
    "example": "happening, coming, or done very quickly in a way that is not expected",
    "exampleJP": "（定義）"
  },
  {
    "id": 1939,
    "word": "advertisement",
    "meaning": "広告",
    "example": "a picture, short film, song, etc. which tries to persuade people to buy a product or service:",
    "exampleJP": "（定義）"
  },
  {
    "id": 1940,
    "word": "consistent",
    "meaning": "一貫した",
    "example": "always behaving or happening in a similar, usually positive, way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1941,
    "word": "originally",
    "meaning": "もともと",
    "example": "at the beginning or before any changes",
    "exampleJP": "（定義）"
  },
  {
    "id": 1942,
    "word": "aside",
    "meaning": "わきへ",
    "example": "to or toward the side",
    "exampleJP": "（定義）"
  },
  {
    "id": 1943,
    "word": "comfort",
    "meaning": "心地よい",
    "example": "a state or situation in which you are relaxed and do not have any physically unpleasant feelings caused by pain, heat, cold, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1944,
    "word": "secondly",
    "meaning": "第二に",
    "example": "used for introducing the second reason, idea, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1945,
    "word": "severe",
    "meaning": "深刻",
    "example": "very bad, serious, or unpleasant",
    "exampleJP": "（定義）"
  },
  {
    "id": 1946,
    "word": "gene",
    "meaning": "遺伝子",
    "example": "a part of a cell that is passed on from a parent to a child and that controls particular characteristics",
    "exampleJP": "（定義）"
  },
  {
    "id": 1947,
    "word": "prospect",
    "meaning": "見込み",
    "example": "the possibility that something will happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1948,
    "word": "snow",
    "meaning": "ゆき",
    "example": "soft, white pieces of frozen water that fall to the ground from the sky in cold weather",
    "exampleJP": "（定義）"
  },
  {
    "id": 1949,
    "word": "plot",
    "meaning": "構想、陰謀",
    "example": "the things that happen in a story; a plan to do something bad",
    "exampleJP": "（定義）"
  },
  {
    "id": 1950,
    "word": "neck",
    "meaning": "首",
    "example": "the part of the body between the head and the shoulders",
    "exampleJP": "（定義）"
  },
  {
    "id": 1951,
    "word": "criterion",
    "meaning": "判断基準",
    "example": "a fact or level of quality that you use when making a choice or decision",
    "exampleJP": "（定義）"
  },
  {
    "id": 1952,
    "word": "primarily",
    "meaning": "主に",
    "example": "mainly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1953,
    "word": "integrate",
    "meaning": "まとめる",
    "example": "to combine, join or create something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1954,
    "word": "criticism",
    "meaning": "批評",
    "example": "a negative comment; judgments and opinions on books, plays, films, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1955,
    "word": "convention",
    "meaning": "会議、大会",
    "example": "a large formal meeting of people with the same interest or work",
    "exampleJP": "（定義）"
  },
  {
    "id": 1956,
    "word": "bet",
    "meaning": "賭ける",
    "example": "to risk money on the result of a game, competition, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1957,
    "word": "retain",
    "meaning": "維持する",
    "example": "to continue to have or use, keep the quality",
    "exampleJP": "（定義）"
  },
  {
    "id": 1958,
    "word": "sequence",
    "meaning": "順序",
    "example": "the order in which things (should) happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 1959,
    "word": "plain",
    "meaning": "無地の、平易な",
    "example": "having no pattern or decoration, easy to see or understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 1960,
    "word": "volunteer",
    "meaning": "ボランティア",
    "example": "to offer to do something without being asked or told to do it",
    "exampleJP": "（定義）"
  },
  {
    "id": 1961,
    "word": "rural",
    "meaning": "田舎の",
    "example": "relating to the countryside and not to towns",
    "exampleJP": "（定義）"
  },
  {
    "id": 1962,
    "word": "calm",
    "meaning": "落ち着いた",
    "example": "not angry, upset, excited, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1963,
    "word": "abandon",
    "meaning": "断念する",
    "example": "to give up or quit, something not finished yet",
    "exampleJP": "（定義）"
  },
  {
    "id": 1964,
    "word": "examination",
    "meaning": "試験、検査",
    "example": "when someone looks at something very carefully; an exam",
    "exampleJP": "（定義）"
  },
  {
    "id": 1965,
    "word": "silence",
    "meaning": "静けさ",
    "example": "a lack of sound or noise",
    "exampleJP": "（定義）"
  },
  {
    "id": 1966,
    "word": "rapidly",
    "meaning": "急速に",
    "example": "happening or moving very quickly",
    "exampleJP": "（定義）"
  },
  {
    "id": 1967,
    "word": "efficient",
    "meaning": "有能な、敏腕な",
    "example": "capable of producing desired results without wasting materials, time, or energy",
    "exampleJP": "（定義）"
  },
  {
    "id": 1968,
    "word": "revolution",
    "meaning": "革命",
    "example": "the　attempt by many people to end the rule of one government",
    "exampleJP": "（定義）"
  },
  {
    "id": 1969,
    "word": "delight",
    "meaning": "歓喜",
    "example": "a strong feeling of happiness : great pleasure or satisfaction",
    "exampleJP": "（定義）"
  },
  {
    "id": 1970,
    "word": "spell",
    "meaning": "つづる",
    "example": "to say, write, or print the letters of (a word or name)",
    "exampleJP": "（定義）"
  },
  {
    "id": 1971,
    "word": "premise",
    "meaning": "前提",
    "example": "an idea that you use to support another theory",
    "exampleJP": "（定義）"
  },
  {
    "id": 1972,
    "word": "lean",
    "meaning": "傾く",
    "example": "to bend or move from a straight position",
    "exampleJP": "（定義）"
  },
  {
    "id": 1973,
    "word": "dramatic",
    "meaning": "劇的な、ドラマチックな",
    "example": "very sudden or noticeable; full of action and excitement",
    "exampleJP": "（定義）"
  },
  {
    "id": 1974,
    "word": "differ",
    "meaning": "異なる",
    "example": "to be different; to have a different opinion",
    "exampleJP": "（定義）"
  },
  {
    "id": 1975,
    "word": "grateful",
    "meaning": "感謝する",
    "example": "feeling or showing thanks",
    "exampleJP": "（定義）"
  },
  {
    "id": 1976,
    "word": "protein",
    "meaning": "タンパク質",
    "example": "food such as meat, cheese, fish, or eggs that is necessary for the body to grow and be strong",
    "exampleJP": "（定義）"
  },
  {
    "id": 1977,
    "word": "bike",
    "meaning": "バイク、自転車",
    "example": "bicycle; motorbike / motorcycle",
    "exampleJP": "（定義）"
  },
  {
    "id": 1978,
    "word": "distribute",
    "meaning": "配る",
    "example": "to hand in or deliver something to people",
    "exampleJP": "（定義）"
  },
  {
    "id": 1979,
    "word": "intellectual",
    "meaning": "知性の",
    "example": "using or relating to your ability to think and understand things",
    "exampleJP": "（定義）"
  },
  {
    "id": 1980,
    "word": "derive",
    "meaning": "得る",
    "example": "to take, obtain or get from something",
    "exampleJP": "（定義）"
  },
  {
    "id": 1981,
    "word": "crucial",
    "meaning": "極めて重要な",
    "example": "extremely important",
    "exampleJP": "（定義）"
  },
  {
    "id": 1982,
    "word": "unemployment",
    "meaning": "失業",
    "example": "the number of people who are without jobs; not having a job",
    "exampleJP": "（定義）"
  },
  {
    "id": 1983,
    "word": "wheel",
    "meaning": "タイヤ",
    "example": "one of the round parts underneath a car, wagon, etc., that rolls and allows something to move",
    "exampleJP": "（定義）"
  },
  {
    "id": 1984,
    "word": "crop",
    "meaning": "農作物",
    "example": "a plant or plant product that is grown by farmers",
    "exampleJP": "（定義）"
  },
  {
    "id": 1985,
    "word": "minority",
    "meaning": "少数派",
    "example": "a part of a group which is less than half of the whole group, often much less",
    "exampleJP": "（定義）"
  },
  {
    "id": 1986,
    "word": "origin",
    "meaning": "起源",
    "example": "the point or place where something begins or is created",
    "exampleJP": "（定義）"
  },
  {
    "id": 1987,
    "word": "interpretation",
    "meaning": "解説",
    "example": "an explanation or opinion of what something means",
    "exampleJP": "（定義）"
  },
  {
    "id": 1988,
    "word": "gentleman",
    "meaning": "紳士",
    "example": "a man who treats other people in a proper and polite way",
    "exampleJP": "（定義）"
  },
  {
    "id": 1989,
    "word": "drama",
    "meaning": "ドラマ",
    "example": "a play that is performed on stage, theater, or TV",
    "exampleJP": "（定義）"
  },
  {
    "id": 1990,
    "word": "landscape",
    "meaning": "地形",
    "example": "the appearance of an area of land, especially in the countryside",
    "exampleJP": "（定義）"
  },
  {
    "id": 1991,
    "word": "educate",
    "meaning": "教育する",
    "example": "to teach (someone) especially in a school, college, or university",
    "exampleJP": "（定義）"
  },
  {
    "id": 1992,
    "word": "toy",
    "meaning": "おもちゃ",
    "example": "something a child plays with",
    "exampleJP": "（定義）"
  },
  {
    "id": 1993,
    "word": "fault",
    "meaning": "責任",
    "example": "responsibility for a problem, mistake, bad situation, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 1994,
    "word": "exhibit",
    "meaning": "展示する",
    "example": "to display or make available for people to see",
    "exampleJP": "（定義）"
  },
  {
    "id": 1995,
    "word": "minor",
    "meaning": "小さな、ささいな",
    "example": "not so large in size, not important or valuable",
    "exampleJP": "（定義）"
  },
  {
    "id": 1996,
    "word": "hunt",
    "meaning": "狩る",
    "example": "to chase and kill (wild animals) for food or pleasure",
    "exampleJP": "（定義）"
  },
  {
    "id": 1997,
    "word": "storm",
    "meaning": "嵐",
    "example": "an occurrence of bad weather in which there is a lot of rain, snow, etc., and often strong winds",
    "exampleJP": "（定義）"
  },
  {
    "id": 1998,
    "word": "thick",
    "meaning": "厚い",
    "example": "having a large distance between the top and bottom or front and back surfaces",
    "exampleJP": "（定義）"
  },
  {
    "id": 1999,
    "word": "achievement",
    "meaning": "達成",
    "example": "when you succeed in doing something good, usually by working hard",
    "exampleJP": "（定義）"
  },
  {
    "id": 2000,
    "word": "negotiate",
    "meaning": "交渉する",
    "example": "to try to make or change an agreement by discussion",
    "exampleJP": "（定義）"
  },
  {
    "id": 2001,
    "word": "dominate",
    "meaning": "支配する",
    "example": "to have power or influence over",
    "exampleJP": "（定義）"
  },
  {
    "id": 2002,
    "word": "supplier",
    "meaning": "供給者",
    "example": "a company or person who provides things that people want or need",
    "exampleJP": "（定義）"
  },
  {
    "id": 2003,
    "word": "prize",
    "meaning": "賞",
    "example": "something that is won in a contest or given as an award",
    "exampleJP": "（定義）"
  },
  {
    "id": 2004,
    "word": "typically",
    "meaning": "典型的に",
    "example": "used for saying that something is usual type of a person, thing, place, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2005,
    "word": "peer",
    "meaning": "同級生、同僚",
    "example": "someone who is the same age, or who has the same social position or abilities as other members of a group",
    "exampleJP": "（定義）"
  },
  {
    "id": 2006,
    "word": "pension",
    "meaning": "年金",
    "example": "money that a person receives after retirement",
    "exampleJP": "（定義）"
  },
  {
    "id": 2007,
    "word": "wing",
    "meaning": "羽",
    "example": "a part of an animal's body that is used for flying or gliding",
    "exampleJP": "（定義）"
  },
  {
    "id": 2008,
    "word": "acquisition",
    "meaning": "取得、獲得",
    "example": "the process of learning or getting something; something you have bought",
    "exampleJP": "（定義）"
  },
  {
    "id": 2009,
    "word": "laughter",
    "meaning": "笑い",
    "example": "the action or sound of laughing",
    "exampleJP": "（定義）"
  },
  {
    "id": 2010,
    "word": "deeply",
    "meaning": "深く",
    "example": "very much",
    "exampleJP": "（定義）"
  },
  {
    "id": 2011,
    "word": "recognition",
    "meaning": "認識",
    "example": "the act of accepting that something is true or important or that it exists",
    "exampleJP": "（定義）"
  },
  {
    "id": 2012,
    "word": "electricity",
    "meaning": "電気",
    "example": "a type of energy that can produce light and heat, or make machines work",
    "exampleJP": "（定義）"
  },
  {
    "id": 2013,
    "word": "assistance",
    "meaning": "援助",
    "example": "help",
    "exampleJP": "（定義）"
  },
  {
    "id": 2014,
    "word": "roof",
    "meaning": "屋根",
    "example": "the cover or top of a building, vehicle, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2015,
    "word": "retirement",
    "meaning": "引退",
    "example": "when you leave your job and stop working, usually because you are old",
    "exampleJP": "（定義）"
  },
  {
    "id": 2016,
    "word": "respectively",
    "meaning": "それぞれ",
    "example": "in the same order as the people or things you have just talked about",
    "exampleJP": "（定義）"
  },
  {
    "id": 2017,
    "word": "variation",
    "meaning": "差異",
    "example": "a difference in amount or quality",
    "exampleJP": "（定義）"
  },
  {
    "id": 2018,
    "word": "ultimately",
    "meaning": "最終的に",
    "example": "finally, after a series of things have happened; in the end",
    "exampleJP": "（定義）"
  },
  {
    "id": 2019,
    "word": "proof",
    "meaning": "誇り",
    "example": "something which shows that something else is true or correct",
    "exampleJP": "（定義）"
  },
  {
    "id": 2020,
    "word": "soil",
    "meaning": "土",
    "example": "the top layer of earth in which plants grow",
    "exampleJP": "（定義）"
  },
  {
    "id": 2021,
    "word": "smart",
    "meaning": "賢い",
    "example": "intelligent",
    "exampleJP": "（定義）"
  },
  {
    "id": 2022,
    "word": "layer",
    "meaning": "層",
    "example": "referring to one of several sheets of a material or object",
    "exampleJP": "（定義）"
  },
  {
    "id": 2023,
    "word": "upset",
    "meaning": "取り乱す",
    "example": "angry or unhappy",
    "exampleJP": "（定義）"
  },
  {
    "id": 2024,
    "word": "tooth",
    "meaning": "歯",
    "example": "one of the hard white objects inside the mouth that are used for biting and chewing",
    "exampleJP": "（定義）"
  },
  {
    "id": 2025,
    "word": "representation",
    "meaning": "代表",
    "example": "speaking or doing something officially for another person",
    "exampleJP": "（定義）"
  },
  {
    "id": 2026,
    "word": "preparation",
    "meaning": "準備",
    "example": "the things that you do or the time that you spend preparing for something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2027,
    "word": "dispute",
    "meaning": "論争",
    "example": "a disagreement, especially one that lasts a long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2028,
    "word": "agenda",
    "meaning": "するべきこと",
    "example": "a list of subjects that people will discuss at a meeting",
    "exampleJP": "（定義）"
  },
  {
    "id": 2029,
    "word": "emphasis",
    "meaning": "強調",
    "example": "a special quality in the way something is said",
    "exampleJP": "（定義）"
  },
  {
    "id": 2030,
    "word": "edition",
    "meaning": "版",
    "example": "a book, newspaper, etc. that is one of several that are the same and were produced at the same time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2031,
    "word": "silver",
    "meaning": "銀",
    "example": "a soft grayish-white metal that is very valuable and is used to make jewelry, coins, knives, forks, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2032,
    "word": "entertainment",
    "meaning": "娯楽",
    "example": "shows, films, television, or other performances or activities that entertain people",
    "exampleJP": "（定義）"
  },
  {
    "id": 2033,
    "word": "honest",
    "meaning": "正直な",
    "example": "good and truthful : not lying, stealing, or cheating",
    "exampleJP": "（定義）"
  },
  {
    "id": 2034,
    "word": "undertake",
    "meaning": "着手する、取り組む",
    "example": "to begin or attempt, commit oneself to and begin",
    "exampleJP": "（定義）"
  },
  {
    "id": 2035,
    "word": "retail",
    "meaning": "小売り",
    "example": "when products are sold to customers from shops",
    "exampleJP": "（定義）"
  },
  {
    "id": 2036,
    "word": "wire",
    "meaning": "ワイヤー",
    "example": "a thin, flexible thread of metal",
    "exampleJP": "（定義）"
  },
  {
    "id": 2037,
    "word": "unlikely",
    "meaning": "なさそうな",
    "example": "not expected to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 2038,
    "word": "gay",
    "meaning": "同性愛者",
    "example": "sexually attracted to someone who is the same sex",
    "exampleJP": "（定義）"
  },
  {
    "id": 2039,
    "word": "publication",
    "meaning": "出版",
    "example": "the process of producing a book, magazine",
    "exampleJP": "（定義）"
  },
  {
    "id": 2040,
    "word": "slight",
    "meaning": "わずかな",
    "example": "very small in degree or amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 2041,
    "word": "unknown",
    "meaning": "未知の、無名の",
    "example": "not known; not famous",
    "exampleJP": "（定義）"
  },
  {
    "id": 2042,
    "word": "framework",
    "meaning": "枠組み",
    "example": "the basic structure of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2043,
    "word": "zone",
    "meaning": "地帯",
    "example": "an area where a particular thing happens:",
    "exampleJP": "（定義）"
  },
  {
    "id": 2044,
    "word": "restrict",
    "meaning": "制限する",
    "example": "to prevent from doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2045,
    "word": "trace",
    "meaning": "突き止める",
    "example": "find, describe or discover by investigation",
    "exampleJP": "（定義）"
  },
  {
    "id": 2046,
    "word": "inch",
    "meaning": "インチ",
    "example": "a unit of measurement equal to 1⁄36 yard or 1⁄12 of a foot (2.54 centimeters)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2047,
    "word": "equivalent",
    "meaning": "同等の",
    "example": "having equality in value, use or meaning",
    "exampleJP": "（定義）"
  },
  {
    "id": 2048,
    "word": "solid",
    "meaning": "固体",
    "example": "firm or hard : not having the form of a gas or liquid",
    "exampleJP": "（定義）"
  },
  {
    "id": 2049,
    "word": "enterprise",
    "meaning": "企業",
    "example": "a business or organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 2050,
    "word": "elderly",
    "meaning": "高齢者",
    "example": "a more polite word for 'old', used to describe people",
    "exampleJP": "（定義）"
  },
  {
    "id": 2051,
    "word": "owe",
    "meaning": "支払う義務がある、借りがある",
    "example": "to need to pay or repay money to a person, bank, business, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2052,
    "word": "governor",
    "meaning": "知事",
    "example": "a person who is the leader of the government of a state, province, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2053,
    "word": "uniform",
    "meaning": "ユニフォーム",
    "example": "same designed clothing that identifies belongings",
    "exampleJP": "（定義）"
  },
  {
    "id": 2054,
    "word": "port",
    "meaning": "港",
    "example": "a town or an area of a town next to water where ships arrive and leave from",
    "exampleJP": "（定義）"
  },
  {
    "id": 2055,
    "word": "pitch",
    "meaning": "投げる、売り込む",
    "example": "in baseball, to throw the ball towards the hitter; to try to persuade someone to buy or decide something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2056,
    "word": "arrival",
    "meaning": "到着",
    "example": "when someone or something arrives somewhere",
    "exampleJP": "（定義）"
  },
  {
    "id": 2057,
    "word": "contemporary",
    "meaning": "現代の",
    "example": "happening or beginning currently or now",
    "exampleJP": "（定義）"
  },
  {
    "id": 2058,
    "word": "gate",
    "meaning": "門",
    "example": "a place in a wall or a fence that has a movable part which can be opened or closed like a door",
    "exampleJP": "（定義）"
  },
  {
    "id": 2059,
    "word": "ease",
    "meaning": "緩和、楽であること",
    "example": "freedom from pain or trouble : comfort of body or mind",
    "exampleJP": "（定義）"
  },
  {
    "id": 2060,
    "word": "beer",
    "meaning": "ビール",
    "example": "an alcoholic drink made from grain, or a glass or container of this drink",
    "exampleJP": "（定義）"
  },
  {
    "id": 2061,
    "word": "specialist",
    "meaning": "専門家",
    "example": "someone who has a lot of experience, knowledge, or skill in a particular subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 2062,
    "word": "assure",
    "meaning": "保証する",
    "example": "to make sure of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2063,
    "word": "profile",
    "meaning": "プロフィール",
    "example": "a short description of someone's life, character, work, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2064,
    "word": "mood",
    "meaning": "気分",
    "example": "the way someone feels at a particular time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2065,
    "word": "episode",
    "meaning": "エピソード",
    "example": "one program of a series shown on television; a single event or period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2066,
    "word": "crack",
    "meaning": "ひびが入る",
    "example": "to break (something) so that there are lines in its surface but it is usually not separated into pieces",
    "exampleJP": "（定義）"
  },
  {
    "id": 2067,
    "word": "numerous",
    "meaning": "夥しい数の",
    "example": "existing in large numbers",
    "exampleJP": "（定義）"
  },
  {
    "id": 2068,
    "word": "submit",
    "meaning": "提出する",
    "example": "accept to a superior force, obey to someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2069,
    "word": "symptom",
    "meaning": "症状",
    "example": "a problem that is caused by and shows a more serious problem",
    "exampleJP": "（定義）"
  },
  {
    "id": 2070,
    "word": "virtually",
    "meaning": "実質的に",
    "example": "almost",
    "exampleJP": "（定義）"
  },
  {
    "id": 2071,
    "word": "era",
    "meaning": "時代",
    "example": "a period of time in history that is special for a particular reason",
    "exampleJP": "（定義）"
  },
  {
    "id": 2072,
    "word": "coverage",
    "meaning": "報道",
    "example": "the way a newspaper, television program, etc. reports an event or subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 2073,
    "word": "tension",
    "meaning": "緊張",
    "example": "a feeling that you are nervous, worried, and not relaxed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2074,
    "word": "cable",
    "meaning": "ケーブル",
    "example": "a wire covered by plastic that carries electricity, telephone signals, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2075,
    "word": "sensitive",
    "meaning": "繊細な",
    "example": "easily upset by the things that people think or say about you",
    "exampleJP": "（定義）"
  },
  {
    "id": 2076,
    "word": "nervous",
    "meaning": "緊張する",
    "example": "worried and anxious",
    "exampleJP": "（定義）"
  },
  {
    "id": 2077,
    "word": "input",
    "meaning": "情報などを入れる",
    "example": "to put in information, advice or opinions",
    "exampleJP": "（定義）"
  },
  {
    "id": 2078,
    "word": "isolate",
    "meaning": "隔離する",
    "example": "to keep in a place or situation apart from others",
    "exampleJP": "（定義）"
  },
  {
    "id": 2079,
    "word": "prisoner",
    "meaning": "囚人",
    "example": "someone who is being kept in prison as a punishment, or because they have been caught by an enemy",
    "exampleJP": "（定義）"
  },
  {
    "id": 2080,
    "word": "eliminate",
    "meaning": "取り除く",
    "example": "completely remove,  to get rid of",
    "exampleJP": "（定義）"
  },
  {
    "id": 2081,
    "word": "tight",
    "meaning": "きつい",
    "example": "difficult to move : fastened, attached, or held in a position that is not easy to move",
    "exampleJP": "（定義）"
  },
  {
    "id": 2082,
    "word": "wet",
    "meaning": "濡れた",
    "example": "covered or soaked with water or another liquid : not dry",
    "exampleJP": "（定義）"
  },
  {
    "id": 2083,
    "word": "secondary",
    "meaning": "第2の",
    "example": "less important than something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2084,
    "word": "welfare",
    "meaning": "福祉",
    "example": "a program for poor or unemployed people help living",
    "exampleJP": "（定義）"
  },
  {
    "id": 2085,
    "word": "recruit",
    "meaning": "新規採用する",
    "example": "to try to persuade someone to work for a company or to join an organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 2086,
    "word": "exclude",
    "meaning": "排除する",
    "example": "to prevent someone from access to a group",
    "exampleJP": "（定義）"
  },
  {
    "id": 2087,
    "word": "string",
    "meaning": "紐",
    "example": "a long, thin piece of twisted thread that you use to attach things, tie things together, or hang things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2088,
    "word": "cloud",
    "meaning": "雲",
    "example": "a white or gray mass in the sky that is made of many very small drops of water",
    "exampleJP": "（定義）"
  },
  {
    "id": 2089,
    "word": "persuade",
    "meaning": "説得する",
    "example": "to cause (someone) to do something by asking, arguing, or giving reasons",
    "exampleJP": "（定義）"
  },
  {
    "id": 2090,
    "word": "inspire",
    "meaning": "鼓舞する",
    "example": "to make someone feel that they want to do something and can do it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2091,
    "word": "grand",
    "meaning": "壮大な",
    "example": "involving or including many people or things : very large in scope",
    "exampleJP": "（定義）"
  },
  {
    "id": 2092,
    "word": "hence",
    "meaning": "今から、この先",
    "example": "from now, later than the present time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2093,
    "word": "crew",
    "meaning": "乗員",
    "example": "a team of people with special skills who work together",
    "exampleJP": "（定義）"
  },
  {
    "id": 2094,
    "word": "phenomenon",
    "meaning": "現象",
    "example": "a fact that can observed and studied",
    "exampleJP": "（定義）"
  },
  {
    "id": 2095,
    "word": "pupil",
    "meaning": "生徒",
    "example": "a child or young person who is being taught : student",
    "exampleJP": "（定義）"
  },
  {
    "id": 2096,
    "word": "false",
    "meaning": "偽の",
    "example": "not real or genuine — used to say that something is not really what it seems to be",
    "exampleJP": "（定義）"
  },
  {
    "id": 2097,
    "word": "assist",
    "meaning": "支援する",
    "example": "to support or help someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2098,
    "word": "restore",
    "meaning": "修復する",
    "example": "to put or bring back into existence or use, mend",
    "exampleJP": "（定義）"
  },
  {
    "id": 2099,
    "word": "formula",
    "meaning": "公式",
    "example": "a plan, rule or method for doing or making something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2100,
    "word": "alter",
    "meaning": "変える",
    "example": "to change a part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2101,
    "word": "perceive",
    "meaning": "気づく",
    "example": "to notice or become aware of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2102,
    "word": "routine",
    "meaning": "毎日の決まった仕事",
    "example": "the things you regularly do and how and when you do them",
    "exampleJP": "（定義）"
  },
  {
    "id": 2103,
    "word": "sink",
    "meaning": "沈む",
    "example": "to go down below the surface of water, mud, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2104,
    "word": "stare",
    "meaning": "見つめる",
    "example": "to look at someone or something for a long time and not move your eyes",
    "exampleJP": "（定義）"
  },
  {
    "id": 2105,
    "word": "anymore",
    "meaning": "これ以上～ない",
    "example": "If you do not do something or something does not happen any more, you have stopped doing it or it does not now happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 2106,
    "word": "hero",
    "meaning": "ヒーロー",
    "example": "someone who does something brave or good which people respect or admire them for",
    "exampleJP": "（定義）"
  },
  {
    "id": 2107,
    "word": "supporter",
    "meaning": "支持者",
    "example": "someone who supports a particular idea, group, or person; a sports fan",
    "exampleJP": "（定義）"
  },
  {
    "id": 2108,
    "word": "convert",
    "meaning": "変換する",
    "example": "to change into a different form, character, or function",
    "exampleJP": "（定義）"
  },
  {
    "id": 2109,
    "word": "steady",
    "meaning": "固定した、安定した",
    "example": "not shaking or moving : held firmly in one place or position",
    "exampleJP": "（定義）"
  },
  {
    "id": 2110,
    "word": "meter",
    "meaning": "メーター",
    "example": "a piece of equipment for measuring the amount of something such as electricity, time, or light",
    "exampleJP": "（定義）"
  },
  {
    "id": 2111,
    "word": "truck",
    "meaning": "トラック",
    "example": "a large road vehicle for carrying goods from place to place",
    "exampleJP": "（定義）"
  },
  {
    "id": 2112,
    "word": "nose",
    "meaning": "鼻",
    "example": "the part of the face or head through which a person or animal smells and breathes",
    "exampleJP": "（定義）"
  },
  {
    "id": 2113,
    "word": "beside",
    "meaning": "隣の、近くの",
    "example": "by the side of (someone or something) : next to (someone or something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2114,
    "word": "sail",
    "meaning": "航海する",
    "example": "to travel on water in a ship or boat",
    "exampleJP": "（定義）"
  },
  {
    "id": 2115,
    "word": "disaster",
    "meaning": "災害",
    "example": "something that causes a lot of harm or damage; a very bad situation or result",
    "exampleJP": "（定義）"
  },
  {
    "id": 2116,
    "word": "pace",
    "meaning": "ペース",
    "example": "the speed at which someone or something moves or does something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2117,
    "word": "heavily",
    "meaning": "激しく",
    "example": "a lot or to a great degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 2118,
    "word": "devote",
    "meaning": "ささげる、充てる",
    "example": "to decide to use or give something for something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2119,
    "word": "terrorist",
    "meaning": "テロリスト",
    "example": "someone who is involved in terrorism",
    "exampleJP": "（定義）"
  },
  {
    "id": 2120,
    "word": "justify",
    "meaning": "正当だと理由づける",
    "example": "giving reasons for doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2121,
    "word": "vital",
    "meaning": "必要不可欠な",
    "example": "necessary",
    "exampleJP": "（定義）"
  },
  {
    "id": 2122,
    "word": "fascinate",
    "meaning": "魅了する",
    "example": "to interest someone a lot",
    "exampleJP": "（定義）"
  },
  {
    "id": 2123,
    "word": "external",
    "meaning": "外部",
    "example": "to be outside of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2124,
    "word": "spare",
    "meaning": "予備、スペア",
    "example": "kept as something extra that can be used if it is needed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2125,
    "word": "whenever",
    "meaning": "いつでも",
    "example": "at any or every time that",
    "exampleJP": "（定義）"
  },
  {
    "id": 2126,
    "word": "depression",
    "meaning": "落ち込み、鬱病",
    "example": "when you feel very unhappy, or a mental illness that makes you feel very unhappy",
    "exampleJP": "（定義）"
  },
  {
    "id": 2127,
    "word": "guilty",
    "meaning": "有罪な",
    "example": "ashamed because you have done something wrong; having broken a law",
    "exampleJP": "（定義）"
  },
  {
    "id": 2128,
    "word": "underlie",
    "meaning": "下に横たわる",
    "example": "to lie or be situated under something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2129,
    "word": "mom",
    "meaning": "まま",
    "example": "mother",
    "exampleJP": "（定義）"
  },
  {
    "id": 2130,
    "word": "distinction",
    "meaning": "違い",
    "example": "a difference between two similar things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2131,
    "word": "satisfaction",
    "meaning": "満足",
    "example": "a happy or pleased feeling because of something that you did or something that happened to you",
    "exampleJP": "（定義）"
  },
  {
    "id": 2132,
    "word": "incorporate",
    "meaning": "組み込む",
    "example": "to include or involve as part of something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2133,
    "word": "pour",
    "meaning": "注ぐ",
    "example": "to cause (something) to flow in a steady stream from or into a container or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 2134,
    "word": "sweep",
    "meaning": "掃く",
    "example": "to remove (something, such as dust or dirt) from a surface with a broom or brush or with a quick movement of your hand, fingers, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2135,
    "word": "obligation",
    "meaning": "義務",
    "example": "something that you do because it is your duty or because you feel you have to",
    "exampleJP": "（定義）"
  },
  {
    "id": 2136,
    "word": "sir",
    "meaning": "（男性への丁寧な呼び掛け）旦那様、お客様",
    "example": "used without a name as a form of polite address to a man you do not know",
    "exampleJP": "（定義）"
  },
  {
    "id": 2137,
    "word": "evaluate",
    "meaning": "評価する",
    "example": "to form an idea to judge something carefully",
    "exampleJP": "（定義）"
  },
  {
    "id": 2138,
    "word": "anger",
    "meaning": "怒り",
    "example": "a strong feeling of being upset or annoyed because of something wrong or bad",
    "exampleJP": "（定義）"
  },
  {
    "id": 2139,
    "word": "pub",
    "meaning": "パブ",
    "example": "a place where you can get drinks such as beer and usually food",
    "exampleJP": "（定義）"
  },
  {
    "id": 2140,
    "word": "perception",
    "meaning": "見識",
    "example": "what you think or believe about someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2141,
    "word": "naturally",
    "meaning": "自然に",
    "example": "as you would expect; something that happens because of nature",
    "exampleJP": "（定義）"
  },
  {
    "id": 2142,
    "word": "currency",
    "meaning": "通貨",
    "example": "the money system that a country uses",
    "exampleJP": "（定義）"
  },
  {
    "id": 2143,
    "word": "database",
    "meaning": "データベース",
    "example": "information stored in a computer in an organized structure so that it can be searched in different ways",
    "exampleJP": "（定義）"
  },
  {
    "id": 2144,
    "word": "initially",
    "meaning": "初めは",
    "example": "at the beginning",
    "exampleJP": "（定義）"
  },
  {
    "id": 2145,
    "word": "territory",
    "meaning": "領土",
    "example": "land that is owned or controlled by a particular country",
    "exampleJP": "（定義）"
  },
  {
    "id": 2146,
    "word": "stream",
    "meaning": "小川",
    "example": "a natural flow of water that is smaller than a river",
    "exampleJP": "（定義）"
  },
  {
    "id": 2147,
    "word": "rarely",
    "meaning": "ほとんどない",
    "example": "not often",
    "exampleJP": "（定義）"
  },
  {
    "id": 2148,
    "word": "height",
    "meaning": "身長",
    "example": "a measurement of how tall a person or thing is;  the distance from the bottom to the top of a person or thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 2149,
    "word": "apparent",
    "meaning": "明らかな",
    "example": "easy to see or clearly understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 2150,
    "word": "western",
    "meaning": "西部の",
    "example": "located in or toward the west",
    "exampleJP": "（定義）"
  },
  {
    "id": 2151,
    "word": "expansion",
    "meaning": "拡大",
    "example": "when something increases in size or amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 2152,
    "word": "constantly",
    "meaning": "常に",
    "example": "happening a lot or all the time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2153,
    "word": "muscle",
    "meaning": "筋肉",
    "example": "one of many pieces of tissue in the body that are connected to bones and which produce movement by becoming longer or shorter",
    "exampleJP": "（定義）"
  },
  {
    "id": 2154,
    "word": "scare",
    "meaning": "怖がらせる",
    "example": "to frighten a person or animal",
    "exampleJP": "（定義）"
  },
  {
    "id": 2155,
    "word": "badly",
    "meaning": "ひどく",
    "example": "very seriously; in a way that is of low quality or in an unpleasant way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2156,
    "word": "everyday",
    "meaning": "普段の",
    "example": "used or seen every day : suitable for every day",
    "exampleJP": "（定義）"
  },
  {
    "id": 2157,
    "word": "boundary",
    "meaning": "境界",
    "example": "something (such as a river, a fence, or an imaginary line) that shows where an area ends and another area begins",
    "exampleJP": "（定義）"
  },
  {
    "id": 2158,
    "word": "ratio",
    "meaning": "比率",
    "example": "the quantitative relationship in size, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2159,
    "word": "essay",
    "meaning": "エッセイ",
    "example": "a short piece of writing about a particular subject, especially one written by a student",
    "exampleJP": "（定義）"
  },
  {
    "id": 2160,
    "word": "scream",
    "meaning": "絶叫する",
    "example": "to make a loud, high noise with your voice, or to shout something in a loud, high voice because you are afraid, hurt, or angry",
    "exampleJP": "（定義）"
  },
  {
    "id": 2161,
    "word": "withdraw",
    "meaning": "お金を引き出す、身を引く",
    "example": "to take money out of a bank account;  to move out of a position, competition, area, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2162,
    "word": "pollution",
    "meaning": "汚染",
    "example": "damage caused to water, air, etc. by harmful substances or waste",
    "exampleJP": "（定義）"
  },
  {
    "id": 2163,
    "word": "disorder",
    "meaning": "疾患、騒動",
    "example": "a disease or mental problem; uncontrolled, bad behavior, especially by large groups of people",
    "exampleJP": "（定義）"
  },
  {
    "id": 2164,
    "word": "furniture",
    "meaning": "家具",
    "example": "chairs, tables, beds, etc., that are used to make a room ready for use",
    "exampleJP": "（定義）"
  },
  {
    "id": 2165,
    "word": "symbol",
    "meaning": "象徴",
    "example": "an action, object that represents a particular idea or quality",
    "exampleJP": "（定義）"
  },
  {
    "id": 2166,
    "word": "apartment",
    "meaning": "アパート",
    "example": "a set of rooms for someone to live in on one level of a building or house",
    "exampleJP": "（定義）"
  },
  {
    "id": 2167,
    "word": "demonstration",
    "meaning": "デモ、実演",
    "example": "a protest in which people march or stand together; showing how to do something, or how something works",
    "exampleJP": "（定義）"
  },
  {
    "id": 2168,
    "word": "analyst",
    "meaning": "アナリスト",
    "example": "someone whose job is to examine the details of a situation carefully, and give their opinion about it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2169,
    "word": "platform",
    "meaning": "演壇、プラットホーム",
    "example": "a raised surface for people to stand on, especially when they are speaking to a lot of people; the area in a railway station where you get on and off the train",
    "exampleJP": "（定義）"
  },
  {
    "id": 2170,
    "word": "steel",
    "meaning": "鋼",
    "example": "a strong, hard metal made of iron and carbon",
    "exampleJP": "（定義）"
  },
  {
    "id": 2171,
    "word": "cake",
    "meaning": "ケーキ",
    "example": "a sweet baked food made from a mixture of flour, sugar, and other ingredients (such as eggs and butter)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2172,
    "word": "transform",
    "meaning": "変形する",
    "example": "to change the shape completely in a good way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2173,
    "word": "wound",
    "meaning": "傷",
    "example": "an injury that is caused when a knife, bullet, etc., cuts or breaks the skin",
    "exampleJP": "（定義）"
  },
  {
    "id": 2174,
    "word": "restriction",
    "meaning": "制限",
    "example": "a rule or law that limits what people can do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2175,
    "word": "foundation",
    "meaning": "設立",
    "example": "the action of establishing an organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 2176,
    "word": "designer",
    "meaning": "デザイナー、設計者",
    "example": "someone who draws and plans how something will be made",
    "exampleJP": "（定義）"
  },
  {
    "id": 2177,
    "word": "strain",
    "meaning": "緊張、体の一部を痛めること",
    "example": "when you feel worried and nervous about something; an injury to part of your body that is caused by using it too much",
    "exampleJP": "（定義）"
  },
  {
    "id": 2178,
    "word": "innovation",
    "meaning": "革新",
    "example": "a new idea or method that is being tried for the first time, or the use of such ideas or methods",
    "exampleJP": "（定義）"
  },
  {
    "id": 2179,
    "word": "album",
    "meaning": "アルバム",
    "example": "several songs or pieces of music on a CD or record; a book in which you keep photographs, stamps, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2180,
    "word": "singer",
    "meaning": "歌手",
    "example": "someone who sings",
    "exampleJP": "（定義）"
  },
  {
    "id": 2181,
    "word": "trail",
    "meaning": "小道",
    "example": "a path through the countryside, often where people walk",
    "exampleJP": "（定義）"
  },
  {
    "id": 2182,
    "word": "trap",
    "meaning": "罠、仕掛け",
    "example": "a device that is used for catching animals",
    "exampleJP": "（定義）"
  },
  {
    "id": 2183,
    "word": "loose",
    "meaning": "緩い",
    "example": "not tightly fastened, attached, or held",
    "exampleJP": "（定義）"
  },
  {
    "id": 2184,
    "word": "extension",
    "meaning": "拡張",
    "example": "the act of making something longer or greater",
    "exampleJP": "（定義）"
  },
  {
    "id": 2185,
    "word": "wealth",
    "meaning": "裕福",
    "example": "a large amount of money and possessions",
    "exampleJP": "（定義）"
  },
  {
    "id": 2186,
    "word": "gradually",
    "meaning": "しだいに",
    "example": "slowly over a period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2187,
    "word": "tank",
    "meaning": "タンク",
    "example": "a large container for storing liquid or gas",
    "exampleJP": "（定義）"
  },
  {
    "id": 2188,
    "word": "evil",
    "meaning": "邪悪な",
    "example": "morally bad, causing harm or injury to someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2189,
    "word": "remarkable",
    "meaning": "注目すべき",
    "example": "very unusual or noticeable in a way that you admire",
    "exampleJP": "（定義）"
  },
  {
    "id": 2190,
    "word": "tune",
    "meaning": "旋律",
    "example": "a series of musical notes that produce a pleasing sound when played or sung",
    "exampleJP": "（定義）"
  },
  {
    "id": 2191,
    "word": "grass",
    "meaning": "草",
    "example": "plants that have narrow green leaves, that are eaten by cows, sheep, horses, etc., and that are commonly grown on lawns and in gardens",
    "exampleJP": "（定義）"
  },
  {
    "id": 2192,
    "word": "invitation",
    "meaning": "招待",
    "example": "when someone invites you to do something or go somewhere",
    "exampleJP": "（定義）"
  },
  {
    "id": 2193,
    "word": "transition",
    "meaning": "推移",
    "example": "when something changes from one system or method to another, often gradually",
    "exampleJP": "（定義）"
  },
  {
    "id": 2194,
    "word": "frighten",
    "meaning": "怖がらせる",
    "example": "to cause (someone) to become afraid",
    "exampleJP": "（定義）"
  },
  {
    "id": 2195,
    "word": "bid",
    "meaning": "努力、入札",
    "example": "an attempt to achieve something; an offer to pay a particular amount of money for something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2196,
    "word": "breed",
    "meaning": "（動物の）種類",
    "example": "a type of dog, sheep, pig, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2197,
    "word": "extraordinary",
    "meaning": "並外れた",
    "example": "very unusual : very different from what is normal or ordinary",
    "exampleJP": "（定義）"
  },
  {
    "id": 2198,
    "word": "brilliant",
    "meaning": "素晴らしい",
    "example": "very good; extremely clever; full of light or color",
    "exampleJP": "（定義）"
  },
  {
    "id": 2199,
    "word": "adviser",
    "meaning": "アドバイザー",
    "example": "someone whose job is to give advice about a subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 2200,
    "word": "stem",
    "meaning": "茎",
    "example": "the main long and thin part of a plant that rises above the soil and supports the leaves and flowers",
    "exampleJP": "（定義）"
  },
  {
    "id": 2201,
    "word": "reverse",
    "meaning": "逆にする",
    "example": "to change to an opposite state ,way or condition",
    "exampleJP": "（定義）"
  },
  {
    "id": 2202,
    "word": "mode",
    "meaning": "方法",
    "example": "a particular form, way or type of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2203,
    "word": "mirror",
    "meaning": "鏡",
    "example": "a piece of glass with a shiny metallic material on one side which produces an image of anything that is in front of it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2204,
    "word": "awful",
    "meaning": "ひどい",
    "example": "very bad, of low quality, or unpleasant",
    "exampleJP": "（定義）"
  },
  {
    "id": 2205,
    "word": "pose",
    "meaning": "ポーズをとる",
    "example": "to put someone in a position to be photographed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2206,
    "word": "adjust",
    "meaning": "調節する",
    "example": "to change a position to be comfortable",
    "exampleJP": "（定義）"
  },
  {
    "id": 2207,
    "word": "creative",
    "meaning": "創造力がある",
    "example": "good at thinking of new ideas or using imagination to create new and unusual things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2208,
    "word": "nowadays",
    "meaning": "最近は",
    "example": "at the present time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2209,
    "word": "poem",
    "meaning": "詩",
    "example": "a piece of writing that usually has figurative language and that is written in separate lines that often have a repeated rhythm and sometimes rhyme",
    "exampleJP": "（定義）"
  },
  {
    "id": 2210,
    "word": "agricultural",
    "meaning": "農業の",
    "example": "the work and methods of growing crops and looking after animals which are then used for food",
    "exampleJP": "（定義）"
  },
  {
    "id": 2211,
    "word": "competitor",
    "meaning": "競争相手",
    "example": "someone who is trying to win or do better than all others especially in business or sports : someone who is competing",
    "exampleJP": "（定義）"
  },
  {
    "id": 2212,
    "word": "alcohol",
    "meaning": "アルコール",
    "example": "drinks such as wine and beer that can make you drunk",
    "exampleJP": "（定義）"
  },
  {
    "id": 2213,
    "word": "festival",
    "meaning": "祭り",
    "example": "a series of special events, performances, etc. that often takes place over several days",
    "exampleJP": "（定義）"
  },
  {
    "id": 2214,
    "word": "vegetable",
    "meaning": "野菜",
    "example": "a plant that you eat, for example potatoes, onions, beans, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2215,
    "word": "van",
    "meaning": "バン",
    "example": "a vehicle that is used for carrying things but which is smaller than a truck",
    "exampleJP": "（定義）"
  },
  {
    "id": 2216,
    "word": "confident",
    "meaning": "自信",
    "example": "having a feeling or belief that you can do something well or succeed at something : having confidence",
    "exampleJP": "（定義）"
  },
  {
    "id": 2217,
    "word": "planet",
    "meaning": "惑星",
    "example": "a large, round object in space that moves around the sun or another star",
    "exampleJP": "（定義）"
  },
  {
    "id": 2218,
    "word": "curve",
    "meaning": "曲線",
    "example": "a smooth, rounded line, shape, path, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2219,
    "word": "knee",
    "meaning": "膝",
    "example": "the joint that bends at the middle of your leg",
    "exampleJP": "（定義）"
  },
  {
    "id": 2220,
    "word": "overcome",
    "meaning": "打ち勝つ",
    "example": "to defeat (someone or something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2221,
    "word": "web",
    "meaning": "ウェブ",
    "example": "part of the Internet that consists of all the connected websites (= pages of text and pictures); a spider's net used to catch insects",
    "exampleJP": "（定義）"
  },
  {
    "id": 2222,
    "word": "depth",
    "meaning": "深さ",
    "example": "a distance below a surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 2223,
    "word": "entrance",
    "meaning": "入口",
    "example": "the act of entering something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2224,
    "word": "log",
    "meaning": "丸太",
    "example": "a long, heavy section of a tree that has fallen or been cut down",
    "exampleJP": "（定義）"
  },
  {
    "id": 2225,
    "word": "giant",
    "meaning": "巨大な",
    "example": "extremely big, or much bigger than other similar things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2226,
    "word": "god",
    "meaning": "神様",
    "example": "the creator and ruler of the universe",
    "exampleJP": "（定義）"
  },
  {
    "id": 2227,
    "word": "portion",
    "meaning": "部分",
    "example": "a part of a whole",
    "exampleJP": "（定義）"
  },
  {
    "id": 2228,
    "word": "substance",
    "meaning": "物質",
    "example": "a material of a particular kind",
    "exampleJP": "（定義）"
  },
  {
    "id": 2229,
    "word": "extensive",
    "meaning": "広範な",
    "example": "large in size or amount : very full or complete",
    "exampleJP": "（定義）"
  },
  {
    "id": 2230,
    "word": "interpret",
    "meaning": "解釈する",
    "example": "to understand or translate the meaning of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2231,
    "word": "independence",
    "meaning": "独立",
    "example": "when someone looks after themselves and does not need money, help, or permission from other people",
    "exampleJP": "（定義）"
  },
  {
    "id": 2232,
    "word": "sugar",
    "meaning": "砂糖",
    "example": "a sweet substance usually in the form of white or brown crystals or white powder that comes from plants and is used to make foods sweeter",
    "exampleJP": "（定義）"
  },
  {
    "id": 2233,
    "word": "inner",
    "meaning": "内部の",
    "example": "on the inside, or near the middle of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2234,
    "word": "harm",
    "meaning": "害",
    "example": "physical or mental damage or injury : something that causes someone or something to be hurt, broken, made less valuable or successful, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2235,
    "word": "consult",
    "meaning": "相談する",
    "example": "to talk about something to make a decision",
    "exampleJP": "（定義）"
  },
  {
    "id": 2236,
    "word": "pink",
    "meaning": "ピンク",
    "example": "a pale red color : a color that is a mixture of red and white",
    "exampleJP": "（定義）"
  },
  {
    "id": 2237,
    "word": "shadow",
    "meaning": "影",
    "example": "a dark shape that appears on a surface when someone or something moves between the surface and a source of light",
    "exampleJP": "（定義）"
  },
  {
    "id": 2238,
    "word": "strip",
    "meaning": "脱ぐ",
    "example": "to remove your clothing",
    "exampleJP": "（定義）"
  },
  {
    "id": 2239,
    "word": "smooth",
    "meaning": "滑らかな",
    "example": "having a flat, even surface : not rough : not having any bumps, ridges, or uneven parts",
    "exampleJP": "（定義）"
  },
  {
    "id": 2240,
    "word": "intervention",
    "meaning": "介入",
    "example": "when someone intervenes, especially to prevent something from happening",
    "exampleJP": "（定義）"
  },
  {
    "id": 2241,
    "word": "impress",
    "meaning": "好印象を与える",
    "example": "to make someone admire or respect you",
    "exampleJP": "（定義）"
  },
  {
    "id": 2242,
    "word": "exam",
    "meaning": "試験",
    "example": "a test of how much you know about something, or how well you can do something;  a series of medical tests",
    "exampleJP": "（定義）"
  },
  {
    "id": 2243,
    "word": "vice",
    "meaning": "悪徳",
    "example": "something bad that someone often does; crime that involves sex or drugs",
    "exampleJP": "（定義）"
  },
  {
    "id": 2244,
    "word": "radical",
    "meaning": "過激な",
    "example": "a very new and different from what is traditional",
    "exampleJP": "（定義）"
  },
  {
    "id": 2245,
    "word": "similarly",
    "meaning": "同様に",
    "example": "in a similar way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2246,
    "word": "behave",
    "meaning": "行儀よくする",
    "example": "to act in an acceptable way : to act properly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2247,
    "word": "loud",
    "meaning": "うるさい",
    "example": "making or causing a lot of noise : strong and noticeable in sound",
    "exampleJP": "（定義）"
  },
  {
    "id": 2248,
    "word": "dimension",
    "meaning": "寸法",
    "example": "a measurable extent of length, width, or height",
    "exampleJP": "（定義）"
  },
  {
    "id": 2249,
    "word": "subsequent",
    "meaning": "その後の",
    "example": "happening or coming after, later",
    "exampleJP": "（定義）"
  },
  {
    "id": 2250,
    "word": "infection",
    "meaning": "感染症",
    "example": "a disease in a part of your body that is caused by bacteria or a virus",
    "exampleJP": "（定義）"
  },
  {
    "id": 2251,
    "word": "jacket",
    "meaning": "ジャケット",
    "example": "a short coat",
    "exampleJP": "（定義）"
  },
  {
    "id": 2252,
    "word": "efficiency",
    "meaning": "効率",
    "example": "the ability to do something or produce something without wasting materials, time, or energy",
    "exampleJP": "（定義）"
  },
  {
    "id": 2253,
    "word": "dirty",
    "meaning": "汚い",
    "example": "not clean",
    "exampleJP": "（定義）"
  },
  {
    "id": 2254,
    "word": "statistic",
    "meaning": "統計",
    "example": "a number that represents a piece of information",
    "exampleJP": "（定義）"
  },
  {
    "id": 2255,
    "word": "regularly",
    "meaning": "定期的に",
    "example": "often; at the same time each day, week, month, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2256,
    "word": "resort",
    "meaning": "リゾート",
    "example": "a place where many people go for a holiday",
    "exampleJP": "（定義）"
  },
  {
    "id": 2257,
    "word": "iron",
    "meaning": "鉄分、鉄",
    "example": "a heavy type of metal that is very common, occurs naturally in blood, and is used to make steel and in many products",
    "exampleJP": "（定義）"
  },
  {
    "id": 2258,
    "word": "broadcast",
    "meaning": "放送する",
    "example": "to send out (signals, programs, etc.) by radio or television",
    "exampleJP": "（定義）"
  },
  {
    "id": 2259,
    "word": "membership",
    "meaning": "会員",
    "example": "the state of belonging to or being a part of a group or an organization : the state of being a member",
    "exampleJP": "（定義）"
  },
  {
    "id": 2260,
    "word": "bread",
    "meaning": "パン",
    "example": "a baked food made from a mixture of flour and water",
    "exampleJP": "（定義）"
  },
  {
    "id": 2261,
    "word": "blind",
    "meaning": "盲目",
    "example": "unable to see",
    "exampleJP": "（定義）"
  },
  {
    "id": 2262,
    "word": "pure",
    "meaning": "純粋な",
    "example": "not mixed with anything else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2263,
    "word": "bloody",
    "meaning": "血まみれの",
    "example": "covered in blood; violent and involving a lot of blood and injuries",
    "exampleJP": "（定義）"
  },
  {
    "id": 2264,
    "word": "ally",
    "meaning": "同盟",
    "example": "someone who supports you, especially when other people are against you; a country that has agreed to help another country, especially in a war",
    "exampleJP": "（定義）"
  },
  {
    "id": 2265,
    "word": "quantity",
    "meaning": "量",
    "example": "an amount or number of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2266,
    "word": "bend",
    "meaning": "曲げる",
    "example": "to use force to cause (something, such as a wire or pipe) to become curved",
    "exampleJP": "（定義）"
  },
  {
    "id": 2267,
    "word": "mature",
    "meaning": "成長した・熟慮した",
    "example": "being an adult, being fully developed physically",
    "exampleJP": "（定義）"
  },
  {
    "id": 2268,
    "word": "briefly",
    "meaning": "ちょっとの間",
    "example": "lasting only for a short time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2269,
    "word": "alarm",
    "meaning": "アラーム",
    "example": "a loud noise that warns you of danger or is used to wake you",
    "exampleJP": "（定義）"
  },
  {
    "id": 2270,
    "word": "disturb",
    "meaning": "邪魔をする",
    "example": "to stop (someone) from working, sleeping, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2271,
    "word": "sustain",
    "meaning": "維持する",
    "example": "to keep providing what is needed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2272,
    "word": "flood",
    "meaning": "洪水",
    "example": "a large amount of water covering an area of land that is usually dry",
    "exampleJP": "（定義）"
  },
  {
    "id": 2273,
    "word": "poverty",
    "meaning": "貧困",
    "example": "the state of being poor",
    "exampleJP": "（定義）"
  },
  {
    "id": 2274,
    "word": "crazy",
    "meaning": "気が狂った",
    "example": "stupid or strange",
    "exampleJP": "（定義）"
  },
  {
    "id": 2275,
    "word": "cite",
    "meaning": "引用する",
    "example": "to write or say the words from a book or other source",
    "exampleJP": "（定義）"
  },
  {
    "id": 2276,
    "word": "newly",
    "meaning": "新たに",
    "example": "recently",
    "exampleJP": "（定義）"
  },
  {
    "id": 2277,
    "word": "parallel",
    "meaning": "類似した、同時に起きる",
    "example": "very similar and often occurring at the same time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2278,
    "word": "gender",
    "meaning": "性別",
    "example": "the state of being male or female",
    "exampleJP": "（定義）"
  },
  {
    "id": 2279,
    "word": "sponsor",
    "meaning": "スポンサーを務める",
    "example": "to give money to someone to support an activity, event, or organization, sometimes as a way to advertise your company or product",
    "exampleJP": "（定義）"
  },
  {
    "id": 2280,
    "word": "boot",
    "meaning": "ブーツ",
    "example": "a strong shoe that covers your foot and part of your leg",
    "exampleJP": "（定義）"
  },
  {
    "id": 2281,
    "word": "accurate",
    "meaning": "正確",
    "example": "there is no mistake or error",
    "exampleJP": "（定義）"
  },
  {
    "id": 2282,
    "word": "dealer",
    "meaning": "販売業者",
    "example": "a person or company that buys and sells things for profit",
    "exampleJP": "（定義）"
  },
  {
    "id": 2283,
    "word": "button",
    "meaning": "ボタン",
    "example": "a small, usually round piece of plastic, glass, metal, etc., that is sewn to a piece of clothing and is pushed through a loop or hole to fasten one part of the clothing to another part",
    "exampleJP": "（定義）"
  },
  {
    "id": 2284,
    "word": "burden",
    "meaning": "負担",
    "example": "something difficult or unpleasant that you have to deal with or worry about",
    "exampleJP": "（定義）"
  },
  {
    "id": 2285,
    "word": "desert",
    "meaning": "砂漠",
    "example": "an area of very dry land that is usually covered with sand and is very hot",
    "exampleJP": "（定義）"
  },
  {
    "id": 2286,
    "word": "mate",
    "meaning": "仲間",
    "example": "a friend; an animal's sexual partner",
    "exampleJP": "（定義）"
  },
  {
    "id": 2287,
    "word": "occasionally",
    "meaning": "たまに",
    "example": "not happening often",
    "exampleJP": "（定義）"
  },
  {
    "id": 2288,
    "word": "shareholder",
    "meaning": "株主",
    "example": "someone who owns shares (stock) in a company",
    "exampleJP": "（定義）"
  },
  {
    "id": 2289,
    "word": "bowl",
    "meaning": "丼",
    "example": "a round container that has tall, curving sides and that is used for preparing or serving foods and liquids",
    "exampleJP": "（定義）"
  },
  {
    "id": 2290,
    "word": "discovery",
    "meaning": "発見",
    "example": "the act of finding or learning something for the first time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2291,
    "word": "resistance",
    "meaning": "抵抗",
    "example": "refusal to accept something new or different",
    "exampleJP": "（定義）"
  },
  {
    "id": 2292,
    "word": "bath",
    "meaning": "入浴",
    "example": "the act of washing the body usually by sitting or lying in a container filled with water",
    "exampleJP": "（定義）"
  },
  {
    "id": 2293,
    "word": "frequency",
    "meaning": "頻発",
    "example": "the fact or condition of happening often : common occurrence",
    "exampleJP": "（定義）"
  },
  {
    "id": 2294,
    "word": "criticize",
    "meaning": "批判する",
    "example": "to make negative comments about something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2295,
    "word": "tap",
    "meaning": "軽くたたく",
    "example": "to hit (someone or something) lightly especially with a small sound",
    "exampleJP": "（定義）"
  },
  {
    "id": 2296,
    "word": "philosophy",
    "meaning": "哲学",
    "example": "a study of ideas about the fundamental nature of life",
    "exampleJP": "（定義）"
  },
  {
    "id": 2297,
    "word": "lip",
    "meaning": "唇",
    "example": "either one of the two soft parts that surround the mouth",
    "exampleJP": "（定義）"
  },
  {
    "id": 2298,
    "word": "attribute",
    "meaning": "～のせいにする",
    "example": "to say that something is because of something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2299,
    "word": "apologize",
    "meaning": "謝る",
    "example": "to tell someone that you are sorry about something you have done",
    "exampleJP": "（定義）"
  },
  {
    "id": 2300,
    "word": "approval",
    "meaning": "承認",
    "example": "when you think that something or someone is good or right; official permission",
    "exampleJP": "（定義）"
  },
  {
    "id": 2301,
    "word": "grab",
    "meaning": "つかむ",
    "example": "to take hold of something or someone suddenly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2302,
    "word": "entitle",
    "meaning": "権利を与える",
    "example": "to give someone the right to do or have something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2303,
    "word": "lend",
    "meaning": "貸す",
    "example": "to give (something) to (someone) to be used for a period of time and then returned",
    "exampleJP": "（定義）"
  },
  {
    "id": 2304,
    "word": "involvement",
    "meaning": "関与",
    "example": "when someone or something is involved in an activity or event",
    "exampleJP": "（定義）"
  },
  {
    "id": 2305,
    "word": "exposure",
    "meaning": "（社会などに）触れること",
    "example": "when someone experiences something or is affected by it because they are in a particular situation or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 2306,
    "word": "conventional",
    "meaning": "伝統的な、従来の",
    "example": "Usual or traditional",
    "exampleJP": "（定義）"
  },
  {
    "id": 2307,
    "word": "digital",
    "meaning": "デジタル",
    "example": "electronic systems that change sounds or images into signals in the form of binary numbers",
    "exampleJP": "（定義）"
  },
  {
    "id": 2308,
    "word": "translate",
    "meaning": "翻訳する",
    "example": "to change words from one language into another language",
    "exampleJP": "（定義）"
  },
  {
    "id": 2309,
    "word": "edit",
    "meaning": "編集する",
    "example": "to make changes so that something can be used",
    "exampleJP": "（定義）"
  },
  {
    "id": 2310,
    "word": "formation",
    "meaning": "形成",
    "example": "the development of something into a particular thing or shape",
    "exampleJP": "（定義）"
  },
  {
    "id": 2311,
    "word": "deposit",
    "meaning": "預金",
    "example": "a payment that you make immediately when you decide to buy something, as proof that you will really buy it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2312,
    "word": "pleasant",
    "meaning": "心地良い、楽しい",
    "example": "causing a feeling of happiness or pleasure",
    "exampleJP": "（定義）"
  },
  {
    "id": 2313,
    "word": "overseas",
    "meaning": "海外",
    "example": "in or to a foreign country that is across a sea",
    "exampleJP": "（定義）"
  },
  {
    "id": 2314,
    "word": "advocate",
    "meaning": "主張する",
    "example": "to push for something positive",
    "exampleJP": "（定義）"
  },
  {
    "id": 2315,
    "word": "establishment",
    "meaning": "機関、設立",
    "example": "an organization or business; when an organization, school, business, etc. is started",
    "exampleJP": "（定義）"
  },
  {
    "id": 2316,
    "word": "summary",
    "meaning": "要約",
    "example": "a brief statement that gives the most important info",
    "exampleJP": "（定義）"
  },
  {
    "id": 2317,
    "word": "rough",
    "meaning": "ざらざらした",
    "example": "having a surface that is not even",
    "exampleJP": "（定義）"
  },
  {
    "id": 2318,
    "word": "pen",
    "meaning": "ペン",
    "example": "a writing instrument that uses ink",
    "exampleJP": "（定義）"
  },
  {
    "id": 2319,
    "word": "recovery",
    "meaning": "回復",
    "example": "when a system or situation or person returns to the way it was before something bad happened",
    "exampleJP": "（定義）"
  },
  {
    "id": 2320,
    "word": "seal",
    "meaning": "アシカ、アザラシ",
    "example": "an animal with smooth fur that eats fish and lives near the sea",
    "exampleJP": "（定義）"
  },
  {
    "id": 2321,
    "word": "tube",
    "meaning": "筒",
    "example": "a long, hollow object that is used especially to control the flow of a liquid or gas",
    "exampleJP": "（定義）"
  },
  {
    "id": 2322,
    "word": "tower",
    "meaning": "タワー",
    "example": "a tall, narrow building or structure that may stand apart from or be attached to another building or structure",
    "exampleJP": "（定義）"
  },
  {
    "id": 2323,
    "word": "characterize",
    "meaning": "特徴づける、描写する",
    "example": "to be typical of someone or something; to describe or show someone or something in a particular way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2324,
    "word": "specify",
    "meaning": "明記する",
    "example": "to state, name or mention exactly and clearly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2325,
    "word": "exact",
    "meaning": "正確な",
    "example": "fully and completely correct or accurate",
    "exampleJP": "（定義）"
  },
  {
    "id": 2326,
    "word": "spin",
    "meaning": "回転する",
    "example": "to turn or cause someone or something to turn around repeatedly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2327,
    "word": "operator",
    "meaning": "オペレーター",
    "example": "a person who uses and controls something (such as a machine, device, or business): someone who operates something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2328,
    "word": "infant",
    "meaning": "幼児",
    "example": "a baby or very young child",
    "exampleJP": "（定義）"
  },
  {
    "id": 2329,
    "word": "dig",
    "meaning": "掘る",
    "example": "to move soil, sand, snow, etc., in order to create a hole",
    "exampleJP": "（定義）"
  },
  {
    "id": 2330,
    "word": "drag",
    "meaning": "引きずる",
    "example": "to pull (someone or something that is heavy or difficult to move)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2331,
    "word": "mount",
    "meaning": "上がる",
    "example": "to increase in amount or level",
    "exampleJP": "（定義）"
  },
  {
    "id": 2332,
    "word": "wrap",
    "meaning": "包む",
    "example": "to cover (something) by winding or folding a piece of material around it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2333,
    "word": "anticipate",
    "meaning": "予測する",
    "example": "to expect or look ahead to something positively",
    "exampleJP": "（定義）"
  },
  {
    "id": 2334,
    "word": "dependent",
    "meaning": "依存している",
    "example": "decided or controlled by something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2335,
    "word": "specialize",
    "meaning": "専門とする",
    "example": "to spend most of your time studying one particular subject or doing one type of business",
    "exampleJP": "（定義）"
  },
  {
    "id": 2336,
    "word": "angle",
    "meaning": "角",
    "example": "the difference between the direction of two lines or surfaces that come together: the space or shape formed when two lines or surfaces meet each other",
    "exampleJP": "（定義）"
  },
  {
    "id": 2337,
    "word": "chicken",
    "meaning": "鶏肉",
    "example": "a bird that is raised by people for its eggs and meat",
    "exampleJP": "（定義）"
  },
  {
    "id": 2338,
    "word": "anxiety",
    "meaning": "不安",
    "example": "fear or nervousness about what might happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 2339,
    "word": "virus",
    "meaning": "ウイルス",
    "example": "an infectious organism too small to be seen that causes disease, or an illness that it causes; a harmful computer program",
    "exampleJP": "（定義）"
  },
  {
    "id": 2340,
    "word": "precisely",
    "meaning": "正確に",
    "example": "exactly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2341,
    "word": "rival",
    "meaning": "好敵手",
    "example": "a person or thing that tries to defeat or be more successful than another",
    "exampleJP": "（定義）"
  },
  {
    "id": 2342,
    "word": "offense",
    "meaning": "犯行",
    "example": "a criminal act; something that causes a person to be hurt, angry, or upset",
    "exampleJP": "（定義）"
  },
  {
    "id": 2343,
    "word": "detect",
    "meaning": "検出する",
    "example": "to discover or identify the presence of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2344,
    "word": "teenager",
    "meaning": "１０代の",
    "example": "someone who is between 13 and 19 years old",
    "exampleJP": "（定義）"
  },
  {
    "id": 2345,
    "word": "admire",
    "meaning": "称賛する",
    "example": "to feel respect or approval for (someone or something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2346,
    "word": "moderate",
    "meaning": "適度の",
    "example": "average in size or amount;  neither too much nor too little",
    "exampleJP": "（定義）"
  },
  {
    "id": 2347,
    "word": "surgery",
    "meaning": "手術",
    "example": "when a doctor cuts your body open and repairs or removes something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2348,
    "word": "musician",
    "meaning": "ミュージシャン",
    "example": "a person who writes, sings, or plays music",
    "exampleJP": "（定義）"
  },
  {
    "id": 2349,
    "word": "significance",
    "meaning": "意義、重要性",
    "example": "the importance or meaning of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2350,
    "word": "shower",
    "meaning": "シャワー",
    "example": "a device that produces a spray of water for you to stand under and wash your body",
    "exampleJP": "（定義）"
  },
  {
    "id": 2351,
    "word": "illegal",
    "meaning": "非合法の",
    "example": "not allowed by law",
    "exampleJP": "（定義）"
  },
  {
    "id": 2352,
    "word": "charity",
    "meaning": "慈善",
    "example": "an official organization that gives money, food, or help to people who need it; money, food, or other help",
    "exampleJP": "（定義）"
  },
  {
    "id": 2353,
    "word": "universal",
    "meaning": "普遍的な",
    "example": "done or experienced by everyone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2354,
    "word": "cigarette",
    "meaning": "たばこ",
    "example": "a thin tube of paper filled with tobacco, that people smoke",
    "exampleJP": "（定義）"
  },
  {
    "id": 2355,
    "word": "constitute",
    "meaning": "構成する",
    "example": "to make up or form something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2356,
    "word": "adequate",
    "meaning": "十分な",
    "example": "enough for someone's needs",
    "exampleJP": "（定義）"
  },
  {
    "id": 2357,
    "word": "consultant",
    "meaning": "コンサルタント",
    "example": "someone who advises people about a particular subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 2358,
    "word": "historian",
    "meaning": "歴史家",
    "example": "someone who studies or writes about history",
    "exampleJP": "（定義）"
  },
  {
    "id": 2359,
    "word": "cousin",
    "meaning": "いとこ",
    "example": "a child of your uncle or aunt",
    "exampleJP": "（定義）"
  },
  {
    "id": 2360,
    "word": "visual",
    "meaning": "視覚",
    "example": "relating to seeing or to the eyes, sight",
    "exampleJP": "（定義）"
  },
  {
    "id": 2361,
    "word": "stupid",
    "meaning": "頭が悪い",
    "example": "not intelligent : having or showing a lack of ability to learn and understand things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2362,
    "word": "keen",
    "meaning": "熱心な",
    "example": "very interested or enthusiastic; very good or well developed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2363,
    "word": "ethnic",
    "meaning": "民族",
    "example": "connected with people who shares a cultural tradition",
    "exampleJP": "（定義）"
  },
  {
    "id": 2364,
    "word": "twin",
    "meaning": "双子",
    "example": "one of two children who are born to the same mother at the same time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2365,
    "word": "clinical",
    "meaning": "臨床の",
    "example": "relating to medical treatment and tests",
    "exampleJP": "（定義）"
  },
  {
    "id": 2366,
    "word": "eastern",
    "meaning": "東部の",
    "example": "located toward the east",
    "exampleJP": "（定義）"
  },
  {
    "id": 2367,
    "word": "forecast",
    "meaning": "予測",
    "example": "a report saying what is likely to happen in the future",
    "exampleJP": "（定義）"
  },
  {
    "id": 2368,
    "word": "segment",
    "meaning": "部分",
    "example": "one of the parts that something can be divided into",
    "exampleJP": "（定義）"
  },
  {
    "id": 2369,
    "word": "custom",
    "meaning": "慣習",
    "example": "an action or way of behaving that is usual and traditional among the people in a particular group or place",
    "exampleJP": "（定義）"
  },
  {
    "id": 2370,
    "word": "adapt",
    "meaning": "適応する",
    "example": "to change something to fit a new purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 2371,
    "word": "sand",
    "meaning": "砂",
    "example": "the very tiny, loose pieces of rock that cover beaches, deserts, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2372,
    "word": "cap",
    "meaning": "帽子",
    "example": "a small, soft hat that often has a hard curved part (called a visor) that extends out over your eyes",
    "exampleJP": "（定義）"
  },
  {
    "id": 2373,
    "word": "prompt",
    "meaning": "促す",
    "example": "to cause (someone) to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2374,
    "word": "charm",
    "meaning": "魅力",
    "example": "a quality that causes someone or something to be very likable : an attractive quality",
    "exampleJP": "（定義）"
  },
  {
    "id": 2375,
    "word": "react",
    "meaning": "反応する",
    "example": "to behave or make change in a particular way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2376,
    "word": "lecture",
    "meaning": "講義",
    "example": "a talk or speech about a particular subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 2377,
    "word": "venture",
    "meaning": "冒険",
    "example": "a new activity that may not be successful",
    "exampleJP": "（定義）"
  },
  {
    "id": 2378,
    "word": "compound",
    "meaning": "調合する",
    "example": "combining two or more parts to form something new",
    "exampleJP": "（定義）"
  },
  {
    "id": 2379,
    "word": "rescue",
    "meaning": "救う",
    "example": "to save (someone or something) from danger or harm",
    "exampleJP": "（定義）"
  },
  {
    "id": 2380,
    "word": "mess",
    "meaning": "乱雑、混乱",
    "example": "Someone or something that is a mess, or is in a mess, is dirty or untidy; a confused or difficult situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 2381,
    "word": "preference",
    "meaning": "好み",
    "example": "a feeling of liking or wanting one person or thing more than another person or thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 2382,
    "word": "comprehensive",
    "meaning": "包括的な",
    "example": "including most or all things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2383,
    "word": "incentive",
    "meaning": "やる気、動機付け",
    "example": "something that encourages a person to work hard",
    "exampleJP": "（定義）"
  },
  {
    "id": 2384,
    "word": "league",
    "meaning": "リーグ",
    "example": "a group of teams which compete against each other in a sport",
    "exampleJP": "（定義）"
  },
  {
    "id": 2385,
    "word": "dialog",
    "meaning": "対話",
    "example": "a short conversation, especially written",
    "exampleJP": "（定義）"
  },
  {
    "id": 2386,
    "word": "cream",
    "meaning": "クリーム",
    "example": "a very thick liquid or soft substance that is rubbed into the skin to make it softer or is used as a medicine for the skin",
    "exampleJP": "（定義）"
  },
  {
    "id": 2387,
    "word": "rapid",
    "meaning": "急速に",
    "example": "happening in a short amount of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2388,
    "word": "cancel",
    "meaning": "中止、キャンセルする",
    "example": "to say that an organized event will not now happen; to stop an order for goods or services",
    "exampleJP": "（定義）"
  },
  {
    "id": 2389,
    "word": "regret",
    "meaning": "後悔する、残念に思う",
    "example": "to feel sad or sorry about (something that you did or did not do) : to have regrets about (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2390,
    "word": "dismiss",
    "meaning": "解雇する",
    "example": "to send (someone) away : to cause or allow (someone) to leave",
    "exampleJP": "（定義）"
  },
  {
    "id": 2391,
    "word": "margin",
    "meaning": "余白",
    "example": "the edge or border of a page on above, below",
    "exampleJP": "（定義）"
  },
  {
    "id": 2392,
    "word": "beneath",
    "meaning": "～の下で",
    "example": "in or to a lower position : below",
    "exampleJP": "（定義）"
  },
  {
    "id": 2393,
    "word": "opponent",
    "meaning": "対戦相手、反対者",
    "example": "someone who you compete against in a game or competition; someone who disagrees with an idea or action",
    "exampleJP": "（定義）"
  },
  {
    "id": 2394,
    "word": "resist",
    "meaning": "抵抗する",
    "example": "to fight against (something) : to try to stop or prevent (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2395,
    "word": "capability",
    "meaning": "能力",
    "example": "the ability or power to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2396,
    "word": "absolute",
    "meaning": "絶対的な",
    "example": "complete and total",
    "exampleJP": "（定義）"
  },
  {
    "id": 2397,
    "word": "correspond",
    "meaning": "相当する",
    "example": "to have similarity or equality with something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2398,
    "word": "stroke",
    "meaning": "脳卒中",
    "example": "a serious illness caused when a blood vessel in your brain suddenly breaks or is blocked",
    "exampleJP": "（定義）"
  },
  {
    "id": 2399,
    "word": "dare",
    "meaning": "勇気がある",
    "example": "to have enough courage or confidence to do something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2400,
    "word": "barrier",
    "meaning": "障害",
    "example": "something that prevents people from doing what they want to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2401,
    "word": "rid",
    "meaning": "取り除く",
    "example": "to no longer have or be affected or bothered by (someone or something that is unwanted or annoying)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2402,
    "word": "divorce",
    "meaning": "離婚する",
    "example": "when two people officially stop being married",
    "exampleJP": "（定義）"
  },
  {
    "id": 2403,
    "word": "ruin",
    "meaning": "台無しにする",
    "example": "to damage (something) so badly that it is no longer useful, valuable, enjoyable, etc.: to spoil or destroy (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2404,
    "word": "bury",
    "meaning": "埋葬する",
    "example": "to put (a dead person or animal) in a grave",
    "exampleJP": "（定義）"
  },
  {
    "id": 2405,
    "word": "counsel",
    "meaning": "弁護士、助言",
    "example": "a lawyer; advice",
    "exampleJP": "（定義）"
  },
  {
    "id": 2406,
    "word": "tendency",
    "meaning": "傾向",
    "example": "something that someone often does, or something that often happens",
    "exampleJP": "（定義）"
  },
  {
    "id": 2407,
    "word": "frequent",
    "meaning": "頻繁に",
    "example": "happening often",
    "exampleJP": "（定義）"
  },
  {
    "id": 2408,
    "word": "motor",
    "meaning": "モーター",
    "example": "a machine that produces motion or power for doing work",
    "exampleJP": "（定義）"
  },
  {
    "id": 2409,
    "word": "survival",
    "meaning": "生き残ること",
    "example": "when someone or something continues to live or exist, especially after a difficult or dangerous situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 2410,
    "word": "counter",
    "meaning": "対抗する",
    "example": "to prevent something or reduce the bad effect that it has",
    "exampleJP": "（定義）"
  },
  {
    "id": 2411,
    "word": "possess",
    "meaning": "所有する",
    "example": "to have or own (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2412,
    "word": "permission",
    "meaning": "許可",
    "example": "the right or ability to do something that is given by someone who has the power to decide if it will be allowed or permitted",
    "exampleJP": "（定義）"
  },
  {
    "id": 2413,
    "word": "valley",
    "meaning": "谷",
    "example": "an area of low land between hills or mountains",
    "exampleJP": "（定義）"
  },
  {
    "id": 2414,
    "word": "float",
    "meaning": "浮く",
    "example": "to rest on top of a liquid",
    "exampleJP": "（定義）"
  },
  {
    "id": 2415,
    "word": "mad",
    "meaning": "怒り狂ってる",
    "example": "very angry",
    "exampleJP": "（定義）"
  },
  {
    "id": 2416,
    "word": "greatly",
    "meaning": "大いに",
    "example": "very much",
    "exampleJP": "（定義）"
  },
  {
    "id": 2417,
    "word": "visible",
    "meaning": "目に見える",
    "example": "can see , easily seen or understood",
    "exampleJP": "（定義）"
  },
  {
    "id": 2418,
    "word": "electric",
    "meaning": "電気の",
    "example": "of or relating to electricity",
    "exampleJP": "（定義）"
  },
  {
    "id": 2419,
    "word": "impressive",
    "meaning": "印象的な",
    "example": "Someone or something that is impressive makes you admire and respect them",
    "exampleJP": "（定義）"
  },
  {
    "id": 2420,
    "word": "evolution",
    "meaning": "進化",
    "example": "the way in which living things gradually change and develop over millions of years; a gradual process of change and development",
    "exampleJP": "（定義）"
  },
  {
    "id": 2421,
    "word": "awareness",
    "meaning": "意識",
    "example": "when you know about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2422,
    "word": "violent",
    "meaning": "暴力",
    "example": "using or involving the use of physical force to cause harm or damage to someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2423,
    "word": "slave",
    "meaning": "奴隷",
    "example": "someone who is legally owned by another person and is forced to work for that person without pay",
    "exampleJP": "（定義）"
  },
  {
    "id": 2424,
    "word": "wealthy",
    "meaning": "豊か",
    "example": "rich",
    "exampleJP": "（定義）"
  },
  {
    "id": 2425,
    "word": "architecture",
    "meaning": "建築",
    "example": "the design and style of buildings; the profession of designing buildings",
    "exampleJP": "（定義）"
  },
  {
    "id": 2426,
    "word": "acceptable",
    "meaning": "容認できる、受諾可能な",
    "example": "good enough; allowed or approved of",
    "exampleJP": "（定義）"
  },
  {
    "id": 2427,
    "word": "journal",
    "meaning": "日記",
    "example": "a book for recording personal experiences and thoughts",
    "exampleJP": "（定義）"
  },
  {
    "id": 2428,
    "word": "coal",
    "meaning": "石炭",
    "example": "a black or brownish-black hard substance within the earth that is used as a fuel",
    "exampleJP": "（定義）"
  },
  {
    "id": 2429,
    "word": "measurement",
    "meaning": "測定、寸法",
    "example": "the process of measuring something; the size and shape of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2430,
    "word": "random",
    "meaning": "ランダムな",
    "example": "chosen, done without a particular plan or pattern",
    "exampleJP": "（定義）"
  },
  {
    "id": 2431,
    "word": "successfully",
    "meaning": "うまく",
    "example": "in a way that acomplishes what you want to achieve",
    "exampleJP": "（定義）"
  },
  {
    "id": 2432,
    "word": "depress",
    "meaning": "落ち込ませる",
    "example": "to make feel sad or depressed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2433,
    "word": "illustration",
    "meaning": "イラスト、例",
    "example": "a picture in a book, magazine, etc.; an example that explains or proves something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2434,
    "word": "burst",
    "meaning": "爆発",
    "example": "to break open or into pieces in a sudden and violent way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2435,
    "word": "privilege",
    "meaning": "特権",
    "example": "an advantage that only one person or group has, usually because of their position or because they are rich",
    "exampleJP": "（定義）"
  },
  {
    "id": 2436,
    "word": "buyer",
    "meaning": "買い手",
    "example": "someone who buys something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2437,
    "word": "mutual",
    "meaning": "共有の",
    "example": "shared between two or more people",
    "exampleJP": "（定義）"
  },
  {
    "id": 2438,
    "word": "rail",
    "meaning": "手すり、（電車の）レール",
    "example": "a bar that goes from one post or support to another and that is used to form a barrier",
    "exampleJP": "（定義）"
  },
  {
    "id": 2439,
    "word": "motivate",
    "meaning": "やる気にさせる",
    "example": "to make someone enthusiastic about doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2440,
    "word": "laboratory",
    "meaning": "研究室",
    "example": "a room used for scientific work",
    "exampleJP": "（定義）"
  },
  {
    "id": 2441,
    "word": "mortgage",
    "meaning": "抵当",
    "example": "money that you borrow to buy a home",
    "exampleJP": "（定義）"
  },
  {
    "id": 2442,
    "word": "promotion",
    "meaning": "促進、昇進",
    "example": "when someone is given a more important job in the same organization; an advertising campaign or sale",
    "exampleJP": "（定義）"
  },
  {
    "id": 2443,
    "word": "passion",
    "meaning": "情熱",
    "example": "a strong belief in something or a strong feeling about a subject; sexual feelings",
    "exampleJP": "（定義）"
  },
  {
    "id": 2444,
    "word": "champion",
    "meaning": "チャンピオン",
    "example": "a person, animal, or team that wins a competition",
    "exampleJP": "（定義）"
  },
  {
    "id": 2445,
    "word": "fulfill",
    "meaning": "遂行する",
    "example": "to do something that you have promised to do or that you are expected to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2446,
    "word": "dust",
    "meaning": "埃",
    "example": "fine dry powder that builds up inside buildings on surfaces that have not recently been cleaned",
    "exampleJP": "（定義）"
  },
  {
    "id": 2447,
    "word": "dedicate",
    "meaning": "専念する",
    "example": "to give energy and time to something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2448,
    "word": "roughly",
    "meaning": "およそ",
    "example": "approximately",
    "exampleJP": "（定義）"
  },
  {
    "id": 2449,
    "word": "skirt",
    "meaning": "スカート",
    "example": "a piece of clothing worn by women and girls that hangs from the waist down",
    "exampleJP": "（定義）"
  },
  {
    "id": 2450,
    "word": "province",
    "meaning": "州",
    "example": "one of the large areas which some countries are divided into because of the type of government they have",
    "exampleJP": "（定義）"
  },
  {
    "id": 2451,
    "word": "march",
    "meaning": "行進",
    "example": "to walk with regular steps as a group : to walk in the regular and organized way of soldiers",
    "exampleJP": "（定義）"
  },
  {
    "id": 2452,
    "word": "evaluation",
    "meaning": "評価",
    "example": "to consider or study something carefully and decide how good or bad it is",
    "exampleJP": "（定義）"
  },
  {
    "id": 2453,
    "word": "compromise",
    "meaning": "妥協する",
    "example": "when you agree to something which is not exactly what you want",
    "exampleJP": "（定義）"
  },
  {
    "id": 2454,
    "word": "accomplish",
    "meaning": "成し遂げる",
    "example": "to succeed in doing something good",
    "exampleJP": "（定義）"
  },
  {
    "id": 2455,
    "word": "weakness",
    "meaning": "弱点",
    "example": "when someone or something is not strong or powerful; a part of something or someone that is not good",
    "exampleJP": "（定義）"
  },
  {
    "id": 2456,
    "word": "announcement",
    "meaning": "発表、告知",
    "example": "something that someone says officially, giving information about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2457,
    "word": "salt",
    "meaning": "塩",
    "example": "a natural white substance that is used especially to flavor or preserve food",
    "exampleJP": "（定義）"
  },
  {
    "id": 2458,
    "word": "glance",
    "meaning": "ちらりと見る",
    "example": "to look somewhere for a short time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2459,
    "word": "opera",
    "meaning": "歌劇",
    "example": "a musical play in which most of the words are sung",
    "exampleJP": "（定義）"
  },
  {
    "id": 2460,
    "word": "contest",
    "meaning": "コンテスト",
    "example": "a competition or election",
    "exampleJP": "（定義）"
  },
  {
    "id": 2461,
    "word": "brush",
    "meaning": "刷毛",
    "example": "a tool with many stiff hairs, fibers, etc., that is used for cleaning, smoothing, or painting something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2462,
    "word": "embarrass",
    "meaning": "恥をかかせる",
    "example": "to make someone feel ashamed or shy",
    "exampleJP": "（定義）"
  },
  {
    "id": 2463,
    "word": "gallery",
    "meaning": "画廊",
    "example": "a room or building that is used for showing paintings and other art to the public",
    "exampleJP": "（定義）"
  },
  {
    "id": 2464,
    "word": "genetic",
    "meaning": "遺伝的な",
    "example": "relating to genes (= parts of cells which control particular characteristics)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2465,
    "word": "aggressive",
    "meaning": "積極的",
    "example": "behaving in an angry and violent way towards others; using forceful methods in order to achieve",
    "exampleJP": "（定義）"
  },
  {
    "id": 2466,
    "word": "chest",
    "meaning": "腰",
    "example": "the front part of the body between the neck and the stomach",
    "exampleJP": "（定義）"
  },
  {
    "id": 2467,
    "word": "format",
    "meaning": "書式、形式",
    "example": "the form, design, or arrangement of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2468,
    "word": "literary",
    "meaning": "文学の",
    "example": "of or relating to literature",
    "exampleJP": "（定義）"
  },
  {
    "id": 2469,
    "word": "govern",
    "meaning": "支配する",
    "example": "to officially control and lead, conduct the policy, make decisions",
    "exampleJP": "（定義）"
  },
  {
    "id": 2470,
    "word": "embrace",
    "meaning": "抱き締める、受け入れる",
    "example": "to hold, or hug, someone; to accept new ideas, beliefs, etc. in an enthusiastic way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2471,
    "word": "praise",
    "meaning": "称賛する",
    "example": "to say or write good things about (someone or something) : to express approval of (someone or something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2472,
    "word": "silent",
    "meaning": "静かな",
    "example": "not speaking or making noise",
    "exampleJP": "（定義）"
  },
  {
    "id": 2473,
    "word": "pump",
    "meaning": "ポンプ",
    "example": "a device that forces liquid, air, or gas into or out of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2474,
    "word": "publisher",
    "meaning": "出版社",
    "example": "a company or person who prepares and prints books, newspapers, magazines, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2475,
    "word": "celebration",
    "meaning": "お祝い",
    "example": "when you celebrate a special day or event",
    "exampleJP": "（定義）"
  },
  {
    "id": 2476,
    "word": "golf",
    "meaning": "ゴルフ",
    "example": "a game on grass where players try to hit a small ball into a series of holes using a long, thin stick",
    "exampleJP": "（定義）"
  },
  {
    "id": 2477,
    "word": "compensation",
    "meaning": "賠償",
    "example": "money that you pay to someone because you are responsible for injuring them or damaging something; money paid for work",
    "exampleJP": "（定義）"
  },
  {
    "id": 2478,
    "word": "classical",
    "meaning": "古典的な",
    "example": "music by people like Mozart and Stravinsky; traditional in style",
    "exampleJP": "（定義）"
  },
  {
    "id": 2479,
    "word": "weigh",
    "meaning": "量る",
    "example": "to find how heavy (someone or something) is : to measure the weight of",
    "exampleJP": "（定義）"
  },
  {
    "id": 2480,
    "word": "versus",
    "meaning": "対",
    "example": "used to say that one team or person is competing against another; used to compare two things or ideas",
    "exampleJP": "（定義）"
  },
  {
    "id": 2481,
    "word": "deficit",
    "meaning": "赤字",
    "example": "the amount by which the money that you spend is more than the money that you receive",
    "exampleJP": "（定義）"
  },
  {
    "id": 2482,
    "word": "modify",
    "meaning": "修正する",
    "example": "to make minor change to something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2483,
    "word": "flash",
    "meaning": "ひらめき、閃光",
    "example": "a sudden bright light",
    "exampleJP": "（定義）"
  },
  {
    "id": 2484,
    "word": "friendship",
    "meaning": "友情",
    "example": "the state of being friends : the relationship between friends",
    "exampleJP": "（定義）"
  },
  {
    "id": 2485,
    "word": "profession",
    "meaning": "専門",
    "example": "a type of job that requires special education or skill",
    "exampleJP": "（定義）"
  },
  {
    "id": 2486,
    "word": "literally",
    "meaning": "文字通りに",
    "example": "having the real or original meaning of a word or phrase",
    "exampleJP": "（定義）"
  },
  {
    "id": 2487,
    "word": "equation",
    "meaning": "方程式",
    "example": "when you show that two amounts are equal using mathematical symbols",
    "exampleJP": "（定義）"
  },
  {
    "id": 2488,
    "word": "gesture",
    "meaning": "ジェスチャー",
    "example": "a movement you make with your hand, arm, or head to express what you are thinking or feeling",
    "exampleJP": "（定義）"
  },
  {
    "id": 2489,
    "word": "entertain",
    "meaning": "楽しませる",
    "example": "to have people as guests in your home or in a public place",
    "exampleJP": "（定義）"
  },
  {
    "id": 2490,
    "word": "fantastic",
    "meaning": "すばらしい",
    "example": "very good",
    "exampleJP": "（定義）"
  },
  {
    "id": 2491,
    "word": "assign",
    "meaning": "割り当てる",
    "example": "to give someone a particular job or something to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2492,
    "word": "inflation",
    "meaning": "インフレ",
    "example": "the rate at which prices increase, or a continuing increase in prices",
    "exampleJP": "（定義）"
  },
  {
    "id": 2493,
    "word": "historic",
    "meaning": "歴史的な",
    "example": "important in history or likely to be important in history",
    "exampleJP": "（定義）"
  },
  {
    "id": 2494,
    "word": "injure",
    "meaning": "にけがをさせる",
    "example": "do physical harm or damage",
    "exampleJP": "（定義）"
  },
  {
    "id": 2495,
    "word": "remote",
    "meaning": "遠隔",
    "example": "far away",
    "exampleJP": "（定義）"
  },
  {
    "id": 2496,
    "word": "therapy",
    "meaning": "治療",
    "example": "the work of treating mental or physical illness without using an operation",
    "exampleJP": "（定義）"
  },
  {
    "id": 2497,
    "word": "orange",
    "meaning": "オレンジ",
    "example": "a citrus fruit that is round and that has an orange skin",
    "exampleJP": "（定義）"
  },
  {
    "id": 2498,
    "word": "twist",
    "meaning": "ひねる",
    "example": "to bend or turn (something) in order to change its shape",
    "exampleJP": "（定義）"
  },
  {
    "id": 2499,
    "word": "personnel",
    "meaning": "職員",
    "example": "the people who work for an organization",
    "exampleJP": "（定義）"
  },
  {
    "id": 2500,
    "word": "imagination",
    "meaning": "想像",
    "example": "the ability to create ideas or pictures in your mind",
    "exampleJP": "（定義）"
  },
  {
    "id": 2501,
    "word": "disagree",
    "meaning": "反対する",
    "example": "to have a different opinion : to fail to agree",
    "exampleJP": "（定義）"
  },
  {
    "id": 2502,
    "word": "throat",
    "meaning": "喉",
    "example": "the tube inside the neck that leads to the stomach and lungs",
    "exampleJP": "（定義）"
  },
  {
    "id": 2503,
    "word": "insight",
    "meaning": "洞察力",
    "example": "the capacity to understand something very clearly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2504,
    "word": "tackle",
    "meaning": "取り組む、タックルする",
    "example": "to try to deal with a problem; in sports, to try to take the ball from someone or knock them down",
    "exampleJP": "（定義）"
  },
  {
    "id": 2505,
    "word": "forever",
    "meaning": "永遠に",
    "example": "for all time in the future",
    "exampleJP": "（定義）"
  },
  {
    "id": 2506,
    "word": "exceed",
    "meaning": "超える",
    "example": "to be greater in number than something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2507,
    "word": "expenditure",
    "meaning": "出費",
    "example": "when you use energy, time, or money",
    "exampleJP": "（定義）"
  },
  {
    "id": 2508,
    "word": "joy",
    "meaning": "楽しさ",
    "example": "a feeling of great happiness",
    "exampleJP": "（定義）"
  },
  {
    "id": 2509,
    "word": "pregnant",
    "meaning": "妊娠した",
    "example": "A pregnant woman has a baby developing inside her uterus",
    "exampleJP": "（定義）"
  },
  {
    "id": 2510,
    "word": "reliable",
    "meaning": "信頼できる",
    "example": "able to be trusted or believed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2511,
    "word": "gear",
    "meaning": "ギア、衣服",
    "example": "a set of parts in a vehicle or bicycle that control how fast the wheels turn; the clothes and equipment used for a particular purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 2512,
    "word": "poet",
    "meaning": "詩人",
    "example": "a person who writes poems",
    "exampleJP": "（定義）"
  },
  {
    "id": 2513,
    "word": "fortune",
    "meaning": "大金",
    "example": "a very large amount of money",
    "exampleJP": "（定義）"
  },
  {
    "id": 2514,
    "word": "ceremony",
    "meaning": "式典",
    "example": "a formal act or event that is a part of a social or religious occasion",
    "exampleJP": "（定義）"
  },
  {
    "id": 2515,
    "word": "pile",
    "meaning": "山（積み重ね）",
    "example": "a group of things that are put one on top of another",
    "exampleJP": "（定義）"
  },
  {
    "id": 2516,
    "word": "pig",
    "meaning": "豚",
    "example": "an animal that has a fat body with short legs, a small tail, and a wide nose and that is raised on a farm or lives in the wild",
    "exampleJP": "（定義）"
  },
  {
    "id": 2517,
    "word": "mixture",
    "meaning": "混合物",
    "example": "something made by combining two or more ingredients",
    "exampleJP": "（定義）"
  },
  {
    "id": 2518,
    "word": "automatically",
    "meaning": "自動的に",
    "example": "without human control",
    "exampleJP": "（定義）"
  },
  {
    "id": 2519,
    "word": "scholar",
    "meaning": "学者",
    "example": "someone who has studied a subject and knows a lot about it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2520,
    "word": "psychological",
    "meaning": "心理的な",
    "example": "relating to the human mind and feelings",
    "exampleJP": "（定義）"
  },
  {
    "id": 2521,
    "word": "dramatically",
    "meaning": "ドラマチックに、劇的に",
    "example": "suddenly or unexpectedly; with much drama",
    "exampleJP": "（定義）"
  },
  {
    "id": 2522,
    "word": "stake",
    "meaning": "賭ける、出資金",
    "example": "If something is at stake, it is in a situation where it might be lost or damaged; an amount of money invested in a business",
    "exampleJP": "（定義）"
  },
  {
    "id": 2523,
    "word": "creature",
    "meaning": "生き物",
    "example": "an animal of any type",
    "exampleJP": "（定義）"
  },
  {
    "id": 2524,
    "word": "partnership",
    "meaning": "連携",
    "example": "when two people or organizations work together to achieve something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2525,
    "word": "participation",
    "meaning": "参加",
    "example": "to be involved with other people in an activity",
    "exampleJP": "（定義）"
  },
  {
    "id": 2526,
    "word": "clause",
    "meaning": "主節",
    "example": "a part of a sentence that has its own subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 2527,
    "word": "penalty",
    "meaning": "罪",
    "example": "a punishment for doing something which is against a law or rule",
    "exampleJP": "（定義）"
  },
  {
    "id": 2528,
    "word": "chamber",
    "meaning": "部屋",
    "example": "a room used for an official or special purpose",
    "exampleJP": "（定義）"
  },
  {
    "id": 2529,
    "word": "fancy",
    "meaning": "～したい気分だ",
    "example": "to want to have or do (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2530,
    "word": "poetry",
    "meaning": "詩",
    "example": "poems in general, or the writing of poetry",
    "exampleJP": "（定義）"
  },
  {
    "id": 2531,
    "word": "chat",
    "meaning": "お喋り",
    "example": "to talk with someone in a friendly and informal way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2532,
    "word": "clothing",
    "meaning": "衣類",
    "example": "clothes, especially of a particular type",
    "exampleJP": "（定義）"
  },
  {
    "id": 2533,
    "word": "evolve",
    "meaning": "進化する",
    "example": "to slowly change or develop into something better",
    "exampleJP": "（定義）"
  },
  {
    "id": 2534,
    "word": "sake",
    "meaning": "利益、～のため",
    "example": "the benefit of someone or something — used in phrases with for to say that something is done to help a particular person or thing",
    "exampleJP": "（定義）"
  },
  {
    "id": 2535,
    "word": "shelf",
    "meaning": "棚",
    "example": "a flat board which is attached to a wall, frame, etc., and on which objects can be placed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2536,
    "word": "boost",
    "meaning": "後押し",
    "example": "something that makes you feel more confident and happy, or that helps something increase or improve",
    "exampleJP": "（定義）"
  },
  {
    "id": 2537,
    "word": "tail",
    "meaning": "しっぽ",
    "example": "the part of an animal's body that extends from the animal's back end",
    "exampleJP": "（定義）"
  },
  {
    "id": 2538,
    "word": "possession",
    "meaning": "所有物",
    "example": "the condition of having or owning something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2539,
    "word": "abortion",
    "meaning": "中絶",
    "example": "a medical operation to end a pregnancy when the baby is still too small to live",
    "exampleJP": "（定義）"
  },
  {
    "id": 2540,
    "word": "curious",
    "meaning": "好奇心旺盛な",
    "example": "having a desire to learn or know more about something or someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2541,
    "word": "wooden",
    "meaning": "木製の",
    "example": "made of wood",
    "exampleJP": "（定義）"
  },
  {
    "id": 2542,
    "word": "boom",
    "meaning": "好況、ブーンとなる音",
    "example": "a period when there is a big increase in sales or profits; a loud, deep sound",
    "exampleJP": "（定義）"
  },
  {
    "id": 2543,
    "word": "tale",
    "meaning": "(事実・伝説・架空の）話、物語",
    "example": "a story, especially one which is not true or is difficult to believe",
    "exampleJP": "（定義）"
  },
  {
    "id": 2544,
    "word": "democratic",
    "meaning": "民主主義の、民主的な",
    "example": "following or supporting the political system of democracy; where everyone has equal rights and can help to make decisions",
    "exampleJP": "（定義）"
  },
  {
    "id": 2545,
    "word": "maintenance",
    "meaning": "保守",
    "example": "the work that is done to keep something in good condition",
    "exampleJP": "（定義）"
  },
  {
    "id": 2546,
    "word": "consequently",
    "meaning": "結果的に",
    "example": "as a result",
    "exampleJP": "（定義）"
  },
  {
    "id": 2547,
    "word": "pot",
    "meaning": "ポット",
    "example": "a deep, round container that is used for cooking",
    "exampleJP": "（定義）"
  },
  {
    "id": 2548,
    "word": "cow",
    "meaning": "牛",
    "example": "a large animal that is raised by people for milk or meat usually on a farm",
    "exampleJP": "（定義）"
  },
  {
    "id": 2549,
    "word": "strengthen",
    "meaning": "強化する",
    "example": "to make (someone or something) stronger, more forceful, more effective, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2550,
    "word": "whilst",
    "meaning": "の間に、一方で",
    "example": "during the same time; used to compare two different facts or situations",
    "exampleJP": "（定義）"
  },
  {
    "id": 2551,
    "word": "constraint",
    "meaning": "制約",
    "example": "something that limits what you can do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2552,
    "word": "fold",
    "meaning": "折る",
    "example": "to bend one part of (something) over or against another part",
    "exampleJP": "（定義）"
  },
  {
    "id": 2553,
    "word": "bin",
    "meaning": "ごみ箱",
    "example": "a container that is used to put waste in; a container for storing things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2554,
    "word": "undergo",
    "meaning": "経験する、耐える、受ける",
    "example": "to experience or endure, be subjected to",
    "exampleJP": "（定義）"
  },
  {
    "id": 2555,
    "word": "potentially",
    "meaning": "潜在的に",
    "example": "possibly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2556,
    "word": "scope",
    "meaning": "範囲、領域",
    "example": "the area that is included in or dealt with",
    "exampleJP": "（定義）"
  },
  {
    "id": 2557,
    "word": "pretend",
    "meaning": "ふりをする",
    "example": "to act as if something is true when it is not true",
    "exampleJP": "（定義）"
  },
  {
    "id": 2558,
    "word": "diversity",
    "meaning": "多様性",
    "example": "when many different types of things or people are included in something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2559,
    "word": "allege",
    "meaning": "申し立てる",
    "example": "to say that someone has done something wrong or illegal, but not prove it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2560,
    "word": "pride",
    "meaning": "誇り",
    "example": "a feeling that you respect yourself and deserve to be respected by other people",
    "exampleJP": "（定義）"
  },
  {
    "id": 2561,
    "word": "intense",
    "meaning": "激しい",
    "example": "very strong, great or extreme in degree",
    "exampleJP": "（定義）"
  },
  {
    "id": 2562,
    "word": "inquiry",
    "meaning": "照会",
    "example": "a request for information",
    "exampleJP": "（定義）"
  },
  {
    "id": 2563,
    "word": "resign",
    "meaning": "辞める",
    "example": "to give up (a job or position) in a formal or official way",
    "exampleJP": "（定義）"
  },
  {
    "id": 2564,
    "word": "craft",
    "meaning": "工作",
    "example": "an activity in which you make something using a lot of skill, especially with your hands; a boat, airplane, or spaceship",
    "exampleJP": "（定義）"
  },
  {
    "id": 2565,
    "word": "strict",
    "meaning": "厳しい",
    "example": "used to describe a command, rule, etc., that must be obeyed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2566,
    "word": "concrete",
    "meaning": "コンクリート",
    "example": "a hard substance that is used in building and is made by mixing sand, water, small stones, and cement",
    "exampleJP": "（定義）"
  },
  {
    "id": 2567,
    "word": "shell",
    "meaning": "殻",
    "example": "the hard outer covering of an animal, insect, etc., that protects it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2568,
    "word": "damn",
    "meaning": "くそっ",
    "example": "used to express anger",
    "exampleJP": "（定義）"
  },
  {
    "id": 2569,
    "word": "distinct",
    "meaning": "区別できる",
    "example": "recognizably different in nature from something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2570,
    "word": "humor",
    "meaning": "ユーモア",
    "example": "the ability to laugh and recognize that something is funny",
    "exampleJP": "（定義）"
  },
  {
    "id": 2571,
    "word": "limitation",
    "meaning": "制限",
    "example": "when something is controlled so that it is less than a particular amount or number",
    "exampleJP": "（定義）"
  },
  {
    "id": 2572,
    "word": "indication",
    "meaning": "兆候、印",
    "example": "a sign showing that something exists or is likely to be true",
    "exampleJP": "（定義）"
  },
  {
    "id": 2573,
    "word": "stability",
    "meaning": "安定性",
    "example": "when something is not likely to change or move",
    "exampleJP": "（定義）"
  },
  {
    "id": 2574,
    "word": "wise",
    "meaning": "賢い",
    "example": "having or showing wisdom or knowledge usually from learning or experiencing many things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2575,
    "word": "neglect",
    "meaning": "怠る",
    "example": "to fail to take care of or to give attention to (someone or something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2576,
    "word": "compose",
    "meaning": "構成する",
    "example": "to come together to form or make (something)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2577,
    "word": "jail",
    "meaning": "牢屋",
    "example": "a place where criminals are kept as a punishment",
    "exampleJP": "（定義）"
  },
  {
    "id": 2578,
    "word": "shelter",
    "meaning": "避難所",
    "example": "a structure that covers or protects people or things",
    "exampleJP": "（定義）"
  },
  {
    "id": 2579,
    "word": "mere",
    "meaning": "ほんの",
    "example": "used to say that something is small, unimportant, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2580,
    "word": "carbon",
    "meaning": "炭素",
    "example": "a chemical element present in all animals and plants and in coal and oil (symbol C)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2581,
    "word": "regulate",
    "meaning": "調節する、規制する",
    "example": "to set or adjust the amount, restrict something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2582,
    "word": "cheese",
    "meaning": "チーズ",
    "example": "a yellow or white solid food that is made from milk",
    "exampleJP": "（定義）"
  },
  {
    "id": 2583,
    "word": "trigger",
    "meaning": "引き金",
    "example": "a lever on a gun that you pull to fire",
    "exampleJP": "（定義）"
  },
  {
    "id": 2584,
    "word": "pipe",
    "meaning": "パイプ",
    "example": "a long, hollow tube for carrying water, steam, gas, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2585,
    "word": "destruction",
    "meaning": "破壊",
    "example": "the act or process of damaging something so badly that it no longer exists or cannot be repaired",
    "exampleJP": "（定義）"
  },
  {
    "id": 2586,
    "word": "guitar",
    "meaning": "ギター",
    "example": "a musical instrument with strings that you play by pulling the strings with your fingers or a piece of plastic",
    "exampleJP": "（定義）"
  },
  {
    "id": 2587,
    "word": "flag",
    "meaning": "旗",
    "example": "a piece of cloth with a special design that is used as a symbol of a nation or group",
    "exampleJP": "（定義）"
  },
  {
    "id": 2588,
    "word": "piano",
    "meaning": "ピアノ",
    "example": "a large wooden musical instrument with strings inside and black and white bars that produce sounds when you press them",
    "exampleJP": "（定義）"
  },
  {
    "id": 2589,
    "word": "magic",
    "meaning": "魔法",
    "example": "special powers that can make things happen that seem impossible",
    "exampleJP": "（定義）"
  },
  {
    "id": 2590,
    "word": "mystery",
    "meaning": "謎",
    "example": "something that is not known",
    "exampleJP": "（定義）"
  },
  {
    "id": 2591,
    "word": "ski",
    "meaning": "スキー",
    "example": "one of a pair of long, thin pieces of wood or plastic that you wear on the bottom of boots to move over snow",
    "exampleJP": "（定義）"
  },
  {
    "id": 2592,
    "word": "whisper",
    "meaning": "ささやく",
    "example": "to speak very softly or quietly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2593,
    "word": "rear",
    "meaning": "後ろ",
    "example": "the back part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2594,
    "word": "menu",
    "meaning": "お品書き",
    "example": "a list of food and drinks that you can order in a restaurant; a list of choices on a computer or electronic device",
    "exampleJP": "（定義）"
  },
  {
    "id": 2595,
    "word": "species",
    "meaning": "種",
    "example": "a group of plants or animals which share similar characteristics",
    "exampleJP": "（定義）"
  },
  {
    "id": 2596,
    "word": "moon",
    "meaning": "月",
    "example": "the large round object that circles the Earth and that shines at night by reflecting light from the sun",
    "exampleJP": "（定義）"
  },
  {
    "id": 2597,
    "word": "presumably",
    "meaning": "おそらく",
    "example": "used to say what you think is the likely situation",
    "exampleJP": "（定義）"
  },
  {
    "id": 2598,
    "word": "bless",
    "meaning": "神聖にする",
    "example": "to make (something or someone) holy by saying a special prayer",
    "exampleJP": "（定義）"
  },
  {
    "id": 2599,
    "word": "airline",
    "meaning": "航空",
    "example": "a company that provides regular flights to places",
    "exampleJP": "（定義）"
  },
  {
    "id": 2600,
    "word": "amendment",
    "meaning": "改正",
    "example": "a change in the words of a document, or the process of doing this",
    "exampleJP": "（定義）"
  },
  {
    "id": 2601,
    "word": "grandmother",
    "meaning": "祖母",
    "example": "the mother of your mother or father",
    "exampleJP": "（定義）"
  },
  {
    "id": 2602,
    "word": "jury",
    "meaning": "陪審",
    "example": "a group of people in a court of law who decide if someone is guilty or not",
    "exampleJP": "（定義）"
  },
  {
    "id": 2603,
    "word": "cooperation",
    "meaning": "協力",
    "example": "when you work together with someone or do what they ask you",
    "exampleJP": "（定義）"
  },
  {
    "id": 2604,
    "word": "civilian",
    "meaning": "民間人",
    "example": "someone who is not a member of a military organization or the police",
    "exampleJP": "（定義）"
  },
  {
    "id": 2605,
    "word": "composition",
    "meaning": "構成",
    "example": "the way in which something is put together or arranged",
    "exampleJP": "（定義）"
  },
  {
    "id": 2606,
    "word": "coin",
    "meaning": "硬貨",
    "example": "a small, flat, and usually round piece of metal issued by a government as money",
    "exampleJP": "（定義）"
  },
  {
    "id": 2607,
    "word": "regardless",
    "meaning": "～にかかわらず",
    "example": "without thinking about problems or difficulties",
    "exampleJP": "（定義）"
  },
  {
    "id": 2608,
    "word": "scan",
    "meaning": "スキャン",
    "example": "to examine something with a machine; to use a machine that copies a document into a computer",
    "exampleJP": "（定義）"
  },
  {
    "id": 2609,
    "word": "bunch",
    "meaning": "房",
    "example": "a group of things of the same kind that are held or tied together or that grow together",
    "exampleJP": "（定義）"
  },
  {
    "id": 2610,
    "word": "racial",
    "meaning": "人種の",
    "example": "relating to people's race",
    "exampleJP": "（定義）"
  },
  {
    "id": 2611,
    "word": "greet",
    "meaning": "挨拶する",
    "example": "to meet (someone who has just arrived) with usually friendly and polite words and actions : welcome",
    "exampleJP": "（定義）"
  },
  {
    "id": 2612,
    "word": "hopefully",
    "meaning": "願わくは",
    "example": "used, often at the start of a sentence, to express what you would like to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 2613,
    "word": "sanction",
    "meaning": "制裁",
    "example": "a punishment for not obeying a rule or a law",
    "exampleJP": "（定義）"
  },
  {
    "id": 2614,
    "word": "trick",
    "meaning": "巧妙な技",
    "example": "an action that is meant to deceive someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2615,
    "word": "paragraph",
    "meaning": "段落",
    "example": "a section of writing that usually deals with one subject",
    "exampleJP": "（定義）"
  },
  {
    "id": 2616,
    "word": "maker",
    "meaning": "製作者",
    "example": "the person or company that makes a product",
    "exampleJP": "（定義）"
  },
  {
    "id": 2617,
    "word": "chocolate",
    "meaning": "チョコレート",
    "example": "a sweet, brown food that is made from cocoa",
    "exampleJP": "（定義）"
  },
  {
    "id": 2618,
    "word": "stimulate",
    "meaning": "促す、刺激する",
    "example": "to make something happen or develop more; to make someone feel interested and excited",
    "exampleJP": "（定義）"
  },
  {
    "id": 2619,
    "word": "belt",
    "meaning": "ベルト",
    "example": "a band of material (such as leather) that is worn around a person's waist",
    "exampleJP": "（定義）"
  },
  {
    "id": 2620,
    "word": "potato",
    "meaning": "じゃがいも",
    "example": "a round vegetable with a brown, yellow, or red skin that grows in the ground",
    "exampleJP": "（定義）"
  },
  {
    "id": 2621,
    "word": "narrative",
    "meaning": "物語",
    "example": "a story or description of a series of events",
    "exampleJP": "（定義）"
  },
  {
    "id": 2622,
    "word": "tissue",
    "meaning": "ティッシュペーパー、組織",
    "example": "the material that animals and plants are made of; a soft piece of paper that you use for cleaning your nose",
    "exampleJP": "（定義）"
  },
  {
    "id": 2623,
    "word": "barely",
    "meaning": "かろうじて",
    "example": "only just",
    "exampleJP": "（定義）"
  },
  {
    "id": 2624,
    "word": "invent",
    "meaning": "発明する",
    "example": "to create or produce (something useful) for the first time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2625,
    "word": "tourism",
    "meaning": "観光事業",
    "example": "the business of providing services for tourists, including organizing their travel, hotels, entertainment, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2626,
    "word": "pro",
    "meaning": "プロ",
    "example": "someone who earns money for playing a sport",
    "exampleJP": "（定義）"
  },
  {
    "id": 2627,
    "word": "stair",
    "meaning": "階段",
    "example": "a series of steps that go from one level or floor to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 2628,
    "word": "hesitate",
    "meaning": "ためらう",
    "example": "to stop briefly before you do something especially because you are nervous or unsure about what to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2629,
    "word": "shine",
    "meaning": "輝く",
    "example": "to give off light",
    "exampleJP": "（定義）"
  },
  {
    "id": 2630,
    "word": "motivation",
    "meaning": "意欲、動機",
    "example": "enthusiasm for doing something; the need or reason for doing something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2631,
    "word": "romantic",
    "meaning": "ロマンティック",
    "example": "relating to feelings or stories of love",
    "exampleJP": "（定義）"
  },
  {
    "id": 2632,
    "word": "firmly",
    "meaning": "しっかりと",
    "example": "not gently, with some force",
    "exampleJP": "（定義）"
  },
  {
    "id": 2633,
    "word": "interior",
    "meaning": "内側",
    "example": "the inside part of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2634,
    "word": "stomach",
    "meaning": "胃",
    "example": "the organ in your body where food goes and begins to be digested after you swallow it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2635,
    "word": "nowhere",
    "meaning": "どこにも～ない",
    "example": "not in or at any place",
    "exampleJP": "（定義）"
  },
  {
    "id": 2636,
    "word": "pray",
    "meaning": "祈る",
    "example": "to hope or wish very much for something to happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 2637,
    "word": "championship",
    "meaning": "選手権",
    "example": "a competition to find the best team or player in a particular game or sport",
    "exampleJP": "（定義）"
  },
  {
    "id": 2638,
    "word": "servant",
    "meaning": "使用人",
    "example": "a person who is hired to do household or personal duties such as cleaning and cooking",
    "exampleJP": "（定義）"
  },
  {
    "id": 2639,
    "word": "immigrant",
    "meaning": "移民",
    "example": "someone who comes to live in a different country",
    "exampleJP": "（定義）"
  },
  {
    "id": 2640,
    "word": "excess",
    "meaning": "余分",
    "example": "an amount that is more than the usual or necessary amount",
    "exampleJP": "（定義）"
  },
  {
    "id": 2641,
    "word": "complexity",
    "meaning": "複雑さ",
    "example": "involving a lot of different but connected parts in a way that is difficult to understand",
    "exampleJP": "（定義）"
  },
  {
    "id": 2642,
    "word": "liability",
    "meaning": "法的責任、債務",
    "example": "when you are legally responsible for something; a debt; a disadvantage",
    "exampleJP": "（定義）"
  },
  {
    "id": 2643,
    "word": "surprisingly",
    "meaning": "驚くべき",
    "example": "in an unexpected way that makes someone feel surprised",
    "exampleJP": "（定義）"
  },
  {
    "id": 2644,
    "word": "extract",
    "meaning": "引き抜く",
    "example": "to remove or take out",
    "exampleJP": "（定義）"
  },
  {
    "id": 2645,
    "word": "implementation",
    "meaning": "実施、実装",
    "example": "to make a law, system, plan, etc. start to happen or operate",
    "exampleJP": "（定義）"
  },
  {
    "id": 2646,
    "word": "bias",
    "meaning": "偏見",
    "example": "a tendency to believe certain people or ideas",
    "exampleJP": "（定義）"
  },
  {
    "id": 2647,
    "word": "differently",
    "meaning": "異なって",
    "example": "not in the same way as someone or something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2648,
    "word": "catalog",
    "meaning": "カタログ",
    "example": "a book with a list of all the goods that you can buy from a shop, or of all the books, paintings, etc. that you can find in a place",
    "exampleJP": "（定義）"
  },
  {
    "id": 2649,
    "word": "continuous",
    "meaning": "連続的な",
    "example": "happening or existing without stopping",
    "exampleJP": "（定義）"
  },
  {
    "id": 2650,
    "word": "golden",
    "meaning": "金の",
    "example": "made of gold",
    "exampleJP": "（定義）"
  },
  {
    "id": 2651,
    "word": "stamp",
    "meaning": "切手",
    "example": "a small piece of paper that you buy and then stick to an envelope or package to pay the cost of mailing it",
    "exampleJP": "（定義）"
  },
  {
    "id": 2652,
    "word": "guideline",
    "meaning": "指針",
    "example": "a rule, instruction or principle",
    "exampleJP": "（定義）"
  },
  {
    "id": 2653,
    "word": "envelope",
    "meaning": "封筒",
    "example": "an enclosing cover for a letter, card, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2654,
    "word": "knife",
    "meaning": "ナイフ",
    "example": "a usually sharp blade attached to a handle that is used for cutting or as a weapon",
    "exampleJP": "（定義）"
  },
  {
    "id": 2655,
    "word": "biological",
    "meaning": "生物学的",
    "example": "relating to the study of living things such as plants and animals",
    "exampleJP": "（定義）"
  },
  {
    "id": 2656,
    "word": "consume",
    "meaning": "消費する",
    "example": "to eat, drink, buy or use up something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2657,
    "word": "luxury",
    "meaning": "贅沢な",
    "example": "something expensive that you enjoy but do not need",
    "exampleJP": "（定義）"
  },
  {
    "id": 2658,
    "word": "weekly",
    "meaning": "週１",
    "example": "happening once a week or every week",
    "exampleJP": "（定義）"
  },
  {
    "id": 2659,
    "word": "wherever",
    "meaning": "どこでも",
    "example": "in what place;  where - used in questions that express surprise or confusion",
    "exampleJP": "（定義）"
  },
  {
    "id": 2660,
    "word": "bite",
    "meaning": "かむ",
    "example": "to press down on or cut into (someone or something) with the teeth",
    "exampleJP": "（定義）"
  },
  {
    "id": 2661,
    "word": "printer",
    "meaning": "印刷機",
    "example": "a machine which is connected to a computer and which produces writing or images on paper",
    "exampleJP": "（定義）"
  },
  {
    "id": 2662,
    "word": "firstly",
    "meaning": "初めに",
    "example": "used to introduce the first idea, reason, etc. in a series",
    "exampleJP": "（定義）"
  },
  {
    "id": 2663,
    "word": "anxious",
    "meaning": "心配する",
    "example": "afraid or nervous especially about what may happen :feeling anxiety",
    "exampleJP": "（定義）"
  },
  {
    "id": 2664,
    "word": "adventure",
    "meaning": "冒険",
    "example": "an exciting or dangerous experience",
    "exampleJP": "（定義）"
  },
  {
    "id": 2665,
    "word": "fence",
    "meaning": "フェンス",
    "example": "a structure like a wall built outdoors usually of wood or metal that separates two areas or prevents people or animals from entering or leaving",
    "exampleJP": "（定義）"
  },
  {
    "id": 2666,
    "word": "exhaust",
    "meaning": "疲れ果てさせる、使い果たす",
    "example": "to finish all of the supply of something; to make someone very tired",
    "exampleJP": "（定義）"
  },
  {
    "id": 2667,
    "word": "attraction",
    "meaning": "ひきつけるもの",
    "example": "something interesting or enjoyable that people want to visit, see, or do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2668,
    "word": "ocean",
    "meaning": "海洋",
    "example": "the salt water that covers much of the Earth's surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 2669,
    "word": "quietly",
    "meaning": "静かに",
    "example": "making little or no noise",
    "exampleJP": "（定義）"
  },
  {
    "id": 2670,
    "word": "castle",
    "meaning": "城",
    "example": "a large building usually with high, thick walls and towers that was built in the past to protect against attack",
    "exampleJP": "（定義）"
  },
  {
    "id": 2671,
    "word": "veteran",
    "meaning": "ベテラン",
    "example": "someone who has been in the military; someone who has done a job or activity for a long time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2672,
    "word": "reflection",
    "meaning": "反射",
    "example": "an image that is seen in a mirror or on a shiny surface",
    "exampleJP": "（定義）"
  },
  {
    "id": 2673,
    "word": "nerve",
    "meaning": "神経",
    "example": "one of the threads in your body which carry messages between your brain and other parts of the body",
    "exampleJP": "（定義）"
  },
  {
    "id": 2674,
    "word": "determination",
    "meaning": "決意",
    "example": "when someone continues trying to do something, although it is very difficult",
    "exampleJP": "（定義）"
  },
  {
    "id": 2675,
    "word": "altogether",
    "meaning": "完全に",
    "example": "completely and fully : totally, entirely",
    "exampleJP": "（定義）"
  },
  {
    "id": 2676,
    "word": "fiction",
    "meaning": "フィクション",
    "example": "literature and stories about imaginary people or events; not real",
    "exampleJP": "（定義）"
  },
  {
    "id": 2677,
    "word": "carpet",
    "meaning": "カーペット",
    "example": "thick material for covering floors, often made of wool",
    "exampleJP": "（定義）"
  },
  {
    "id": 2678,
    "word": "cluster",
    "meaning": "群",
    "example": "a group of similar things that are close together",
    "exampleJP": "（定義）"
  },
  {
    "id": 2679,
    "word": "confusion",
    "meaning": "混乱",
    "example": "a situation in which people are uncertain about what to do or are unable to understand something clearly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2680,
    "word": "hurry",
    "meaning": "急ぐ",
    "example": "to move, act, or go quickly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2681,
    "word": "logic",
    "meaning": "論理",
    "example": "a proper or linear way of thinking about something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2682,
    "word": "controversial",
    "meaning": "議論を呼ぶ",
    "example": "causing a lot of disagreement or argument",
    "exampleJP": "（定義）"
  },
  {
    "id": 2683,
    "word": "raw",
    "meaning": "生の、未加工の",
    "example": "not cooked, or in a natural state;  not treated or prepared",
    "exampleJP": "（定義）"
  },
  {
    "id": 2684,
    "word": "grammar",
    "meaning": "文法",
    "example": "the set of rules that explain how words are used in a language",
    "exampleJP": "（定義）"
  },
  {
    "id": 2685,
    "word": "revise",
    "meaning": "修正する",
    "example": "to make changes, add something to improve",
    "exampleJP": "（定義）"
  },
  {
    "id": 2686,
    "word": "hint",
    "meaning": "ほのめかす、ヒント",
    "example": "when you say something that suggests what you think or want, but not in a direct way; a clue",
    "exampleJP": "（定義）"
  },
  {
    "id": 2687,
    "word": "hook",
    "meaning": "鉤",
    "example": "a curved or bent tool for catching, holding, or pulling something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2688,
    "word": "bell",
    "meaning": "ベル",
    "example": "a hollow usually cup-shaped metal object that makes a ringing sound when it is hit",
    "exampleJP": "（定義）"
  },
  {
    "id": 2689,
    "word": "liquid",
    "meaning": "液体",
    "example": "a substance that is able to flow freely",
    "exampleJP": "（定義）"
  },
  {
    "id": 2690,
    "word": "panic",
    "meaning": "パニック",
    "example": "a sudden, strong feeling of worry or fear that makes you unable to think or behave calmly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2691,
    "word": "uncle",
    "meaning": "叔父",
    "example": "the brother of your father or mother or the husband of your aunt",
    "exampleJP": "（定義）"
  },
  {
    "id": 2692,
    "word": "rice",
    "meaning": "おこめ",
    "example": "small white or brown grains that come from a southeast Asian plant and that are used for food",
    "exampleJP": "（定義）"
  },
  {
    "id": 2693,
    "word": "slope",
    "meaning": "坂",
    "example": "ground that slants downward or upward : ground that slopes",
    "exampleJP": "（定義）"
  },
  {
    "id": 2694,
    "word": "happiness",
    "meaning": "幸せ",
    "example": "the feeling of being happy",
    "exampleJP": "（定義）"
  },
  {
    "id": 2695,
    "word": "genuine",
    "meaning": "正真正銘の",
    "example": "If a person or their feelings are genuine, they are sincere and honest; real",
    "exampleJP": "（定義）"
  },
  {
    "id": 2696,
    "word": "vessel",
    "meaning": "貨物船",
    "example": "a ship or large boat",
    "exampleJP": "（定義）"
  },
  {
    "id": 2697,
    "word": "verb",
    "meaning": "動詞",
    "example": "a word (such as jump, think, happen, or exist) that is usually one of the main parts of a sentence and that expresses an action, an occurrence, or a state of being",
    "exampleJP": "（定義）"
  },
  {
    "id": 2698,
    "word": "reckon",
    "meaning": "～だと思う",
    "example": "to think that something is probably true",
    "exampleJP": "（定義）"
  },
  {
    "id": 2699,
    "word": "silly",
    "meaning": "愚か",
    "example": "stupid, small and not important",
    "exampleJP": "（定義）"
  },
  {
    "id": 2700,
    "word": "transportation",
    "meaning": "交通",
    "example": "a vehicle or system of vehicles, such as buses, trains, etc. for getting from one place to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 2701,
    "word": "harbor",
    "meaning": "湾",
    "example": "a part of the ocean, a lake, etc., that is next to land and that is protected and deep enough to provide safety for ships",
    "exampleJP": "（定義）"
  },
  {
    "id": 2702,
    "word": "comedy",
    "meaning": "コメディ",
    "example": "entertainment such as a film, play, etc. which is funny",
    "exampleJP": "（定義）"
  },
  {
    "id": 2703,
    "word": "chase",
    "meaning": "追いかける",
    "example": "to run after someone or something in order to catch them",
    "exampleJP": "（定義）"
  },
  {
    "id": 2704,
    "word": "storage",
    "meaning": "保管場所",
    "example": "when you put things in a safe place until they are needed",
    "exampleJP": "（定義）"
  },
  {
    "id": 2705,
    "word": "universe",
    "meaning": "宇宙",
    "example": "all of space and everything in it including stars, planets, galaxies, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2706,
    "word": "horrible",
    "meaning": "ひどい",
    "example": "very unpleasant or bad",
    "exampleJP": "（定義）"
  },
  {
    "id": 2707,
    "word": "sheep",
    "meaning": "羊",
    "example": "an animal with a thick woolly coat that is often raised for meat or for its wool and skin",
    "exampleJP": "（定義）"
  },
  {
    "id": 2708,
    "word": "lover",
    "meaning": "恋人",
    "example": "If two people are lovers, they have a sexual relationship but they are not married",
    "exampleJP": "（定義）"
  },
  {
    "id": 2709,
    "word": "rat",
    "meaning": "ラット",
    "example": "an animal that looks like a large mouse and has a long tail",
    "exampleJP": "（定義）"
  },
  {
    "id": 2710,
    "word": "portrait",
    "meaning": "肖像",
    "example": "a painting, drawing, or photograph of someone",
    "exampleJP": "（定義）"
  },
  {
    "id": 2711,
    "word": "innocent",
    "meaning": "潔白な、無実な",
    "example": "not guilty of committing a crime",
    "exampleJP": "（定義）"
  },
  {
    "id": 2712,
    "word": "substitute",
    "meaning": "控え",
    "example": "a person or thing that makes the place instead of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2713,
    "word": "supplement",
    "meaning": "補足",
    "example": "something that is added to make it complete, help understanding",
    "exampleJP": "（定義）"
  },
  {
    "id": 2714,
    "word": "adjustment",
    "meaning": "調整",
    "example": "a slight change that you make to something so that it works better, fits better, or is more suitable",
    "exampleJP": "（定義）"
  },
  {
    "id": 2715,
    "word": "reasonably",
    "meaning": "合理的に",
    "example": "in a fair way, showing good judgment",
    "exampleJP": "（定義）"
  },
  {
    "id": 2716,
    "word": "filter",
    "meaning": "フィルター",
    "example": "to pass a liquid or gas through a piece of equipment in order to remove solid pieces or other substances",
    "exampleJP": "（定義）"
  },
  {
    "id": 2717,
    "word": "flexible",
    "meaning": "曲げやすい",
    "example": "capable of being easily bent changed without breaking",
    "exampleJP": "（定義）"
  },
  {
    "id": 2718,
    "word": "abstract",
    "meaning": "抽象的な",
    "example": "relating to something that doesn't exist",
    "exampleJP": "（定義）"
  },
  {
    "id": 2719,
    "word": "tent",
    "meaning": "テント",
    "example": "a portable shelter that is used outdoors, is made of cloth (such as canvas or nylon), and is held up with poles and ropes",
    "exampleJP": "（定義）"
  },
  {
    "id": 2720,
    "word": "precise",
    "meaning": "正確な、精密な",
    "example": "very accurate and exact expression or detail",
    "exampleJP": "（定義）"
  },
  {
    "id": 2721,
    "word": "distant",
    "meaning": "遠い",
    "example": "existing or happening far away in space",
    "exampleJP": "（定義）"
  },
  {
    "id": 2722,
    "word": "stranger",
    "meaning": "初対面の人、知らない人",
    "example": "someone you have never met before",
    "exampleJP": "（定義）"
  },
  {
    "id": 2723,
    "word": "shade",
    "meaning": "影",
    "example": "an area of slight darkness that is produced when something blocks the light of the sun",
    "exampleJP": "（定義）"
  },
  {
    "id": 2724,
    "word": "grain",
    "meaning": "穀物",
    "example": "the seeds of plants (such as wheat, corn, and rice) that are used for food",
    "exampleJP": "（定義）"
  },
  {
    "id": 2725,
    "word": "situate",
    "meaning": "～に置く",
    "example": "to put something in a particular position",
    "exampleJP": "（定義）"
  },
  {
    "id": 2726,
    "word": "summarize",
    "meaning": "要約する",
    "example": "to describe briefly the main facts or ideas of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2727,
    "word": "leap",
    "meaning": "跳ねる",
    "example": "to jump from one place to another",
    "exampleJP": "（定義）"
  },
  {
    "id": 2728,
    "word": "snap",
    "meaning": "バキっ！　ばしん！、折る",
    "example": "to break something, such as a pencil, making a short, loud sound",
    "exampleJP": "（定義）"
  },
  {
    "id": 2729,
    "word": "probability",
    "meaning": "見込み",
    "example": "how likely it is that something will happen",
    "exampleJP": "（定義）"
  },
  {
    "id": 2730,
    "word": "leather",
    "meaning": "革",
    "example": "animal skin that is chemically treated to preserve it and that is used in making clothes, shoes, furniture, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2731,
    "word": "uncertainty",
    "meaning": "不確実なこと",
    "example": "not known, or not completely certain",
    "exampleJP": "（定義）"
  },
  {
    "id": 2732,
    "word": "swear",
    "meaning": "誓う",
    "example": "to state (something) very strongly and sincerely",
    "exampleJP": "（定義）"
  },
  {
    "id": 2733,
    "word": "refugee",
    "meaning": "難民",
    "example": "someone who has been forced to leave their country, especially because of a war",
    "exampleJP": "（定義）"
  },
  {
    "id": 2734,
    "word": "shore",
    "meaning": "岸",
    "example": "the land along the edge of an area of water (such as an ocean, lake, etc.)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2735,
    "word": "monthly",
    "meaning": "月１",
    "example": "happening or produced once a month",
    "exampleJP": "（定義）"
  },
  {
    "id": 2736,
    "word": "comprise",
    "meaning": "構成する",
    "example": "to make up or form something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2737,
    "word": "stir",
    "meaning": "かき混ぜる",
    "example": "to mix (something) by making circular movements in it with a spoon or similar object",
    "exampleJP": "（定義）"
  },
  {
    "id": 2738,
    "word": "excitement",
    "meaning": "興奮",
    "example": "a happy and enthusiastic feeling",
    "exampleJP": "（定義）"
  },
  {
    "id": 2739,
    "word": "sigh",
    "meaning": "ため息をつく",
    "example": "to breathe out slowly and noisily, often because you are annoyed or unhappy",
    "exampleJP": "（定義）"
  },
  {
    "id": 2740,
    "word": "pregnancy",
    "meaning": "妊娠",
    "example": "when a woman is pregnant",
    "exampleJP": "（定義）"
  },
  {
    "id": 2741,
    "word": "experimental",
    "meaning": "実験の",
    "example": "relating to tests, especially scientific ones",
    "exampleJP": "（定義）"
  },
  {
    "id": 2742,
    "word": "institutional",
    "meaning": "機関の",
    "example": "relating to a large and important organization, such as a government, university or bank",
    "exampleJP": "（定義）"
  },
  {
    "id": 2743,
    "word": "slice",
    "meaning": "一切れ",
    "example": "a flat piece of something that has been cut from a larger piece",
    "exampleJP": "（定義）"
  },
  {
    "id": 2744,
    "word": "wander",
    "meaning": "さまよう",
    "example": "to move around or go to different places usually without having a particular purpose or direction",
    "exampleJP": "（定義）"
  },
  {
    "id": 2745,
    "word": "empire",
    "meaning": "帝国",
    "example": "a group of countries or regions that are controlled by one ruler or one government",
    "exampleJP": "（定義）"
  },
  {
    "id": 2746,
    "word": "subsequently",
    "meaning": "その後に",
    "example": "happening after something else",
    "exampleJP": "（定義）"
  },
  {
    "id": 2747,
    "word": "gentle",
    "meaning": "優しい、穏やかな",
    "example": "having or showing a kind and quiet nature : not harsh or violent",
    "exampleJP": "（定義）"
  },
  {
    "id": 2748,
    "word": "attendance",
    "meaning": "出席者数",
    "example": "the number of people who go to an event, meeting, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2749,
    "word": "ownership",
    "meaning": "所有権",
    "example": "the state or fact of owning something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2750,
    "word": "qualification",
    "meaning": "資格",
    "example": "a special skill or type of experience or knowledge that makes someone suitable to do a particular job or activity",
    "exampleJP": "（定義）"
  },
  {
    "id": 2751,
    "word": "suspend",
    "meaning": "一時停止する",
    "example": "to stop something for a usually short period of time",
    "exampleJP": "（定義）"
  },
  {
    "id": 2752,
    "word": "functional",
    "meaning": "機能的な",
    "example": "designed to be practical or useful and not only attractive; operating correctly",
    "exampleJP": "（定義）"
  },
  {
    "id": 2753,
    "word": "voluntary",
    "meaning": "自由意志による",
    "example": "done or given by their own will and not forced to do",
    "exampleJP": "（定義）"
  },
  {
    "id": 2754,
    "word": "pale",
    "meaning": "淡い",
    "example": "light in color",
    "exampleJP": "（定義）"
  },
  {
    "id": 2755,
    "word": "stain",
    "meaning": "汚す",
    "example": "to leave a mark on something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2756,
    "word": "athlete",
    "meaning": "アスリート",
    "example": "someone who is very good at a sport and who competes with others in organized events",
    "exampleJP": "（定義）"
  },
  {
    "id": 2757,
    "word": "organic",
    "meaning": "有機栽培の",
    "example": "not using artificial chemicals when keeping animals or growing plants for food",
    "exampleJP": "（定義）"
  },
  {
    "id": 2758,
    "word": "tongue",
    "meaning": "舌",
    "example": "the soft, movable part in the mouth that is used for tasting and eating food and in human beings for speaking",
    "exampleJP": "（定義）"
  },
  {
    "id": 2759,
    "word": "server",
    "meaning": "サーバー",
    "example": "a computer that is used only for storing and managing programs and information used by other computers",
    "exampleJP": "（定義）"
  },
  {
    "id": 2760,
    "word": "structural",
    "meaning": "構造的な",
    "example": "relating to the structure of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2761,
    "word": "fool",
    "meaning": "馬鹿者",
    "example": "a person who lacks good sense or judgment : a stupid or silly person",
    "exampleJP": "（定義）"
  },
  {
    "id": 2762,
    "word": "alongside",
    "meaning": "並んで",
    "example": "next to someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2763,
    "word": "unite",
    "meaning": "団結する",
    "example": "to join together, to come together for the same goal",
    "exampleJP": "（定義）"
  },
  {
    "id": 2764,
    "word": "gently",
    "meaning": "優しく",
    "example": "in a kind and careful way as not to hurt or upset anyone or anything",
    "exampleJP": "（定義）"
  },
  {
    "id": 2765,
    "word": "compute",
    "meaning": "計算する",
    "example": "to find out by calculating or estimating",
    "exampleJP": "（定義）"
  },
  {
    "id": 2766,
    "word": "wipe",
    "meaning": "拭く",
    "example": "to clean or dry (something) by using a towel, your hand, etc.",
    "exampleJP": "（定義）"
  },
  {
    "id": 2767,
    "word": "weird",
    "meaning": "変わった",
    "example": "very strange",
    "exampleJP": "（定義）"
  },
  {
    "id": 2768,
    "word": "gaze",
    "meaning": "じっと見る",
    "example": "to look for a long time at someone or something or in a particular direction",
    "exampleJP": "（定義）"
  },
  {
    "id": 2769,
    "word": "fade",
    "meaning": "弱まる",
    "example": "to lose strength or freshness",
    "exampleJP": "（定義）"
  },
  {
    "id": 2770,
    "word": "cough",
    "meaning": "咳をする",
    "example": "to force air through your throat with a short, loud noise often because you are sick",
    "exampleJP": "（定義）"
  },
  {
    "id": 2771,
    "word": "hypothesis",
    "meaning": "仮説",
    "example": "an idea that leads to further study or discussion",
    "exampleJP": "（定義）"
  },
  {
    "id": 2772,
    "word": "royal",
    "meaning": "王族の",
    "example": "of or relating to a king or queen",
    "exampleJP": "（定義）"
  },
  {
    "id": 2773,
    "word": "theoretical",
    "meaning": "理論的な",
    "example": "related to an explanation that has not been proved",
    "exampleJP": "（定義）"
  },
  {
    "id": 2774,
    "word": "curtain",
    "meaning": "カーテン",
    "example": "a piece of cloth that hangs down from above a window and can be used to cover the window",
    "exampleJP": "（定義）"
  },
  {
    "id": 2775,
    "word": "mayor",
    "meaning": "市長",
    "example": "the person who is elected to be the leader of the group that governs a town or city",
    "exampleJP": "（定義）"
  },
  {
    "id": 2776,
    "word": "darkness",
    "meaning": "暗闇",
    "example": "when there is little or no light",
    "exampleJP": "（定義）"
  },
  {
    "id": 2777,
    "word": "aunt",
    "meaning": "叔母",
    "example": "the sister of your father or mother or the wife of your uncle",
    "exampleJP": "（定義）"
  },
  {
    "id": 2778,
    "word": "tournament",
    "meaning": "大会",
    "example": "a competition with a series of games between many teams or players, with one winner at the end",
    "exampleJP": "（定義）"
  },
  {
    "id": 2779,
    "word": "registration",
    "meaning": "登録",
    "example": "when a name or information is recorded on an official list",
    "exampleJP": "（定義）"
  },
  {
    "id": 2780,
    "word": "fragment",
    "meaning": "断片",
    "example": "a small piece of something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2781,
    "word": "listener",
    "meaning": "傍聴者",
    "example": "someone who listens",
    "exampleJP": "（定義）"
  },
  {
    "id": 2782,
    "word": "tender",
    "meaning": "思いやりのある",
    "example": "very loving and gentle : showing affection and love for someone or something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2783,
    "word": "density",
    "meaning": "密度",
    "example": "the number of people or things in a place when compared with the size of the place;  the relationship between the weight of a substance and its size",
    "exampleJP": "（定義）"
  },
  {
    "id": 2784,
    "word": "ugly",
    "meaning": "醜い",
    "example": "unpleasant to look at : not pretty or attractive",
    "exampleJP": "（定義）"
  },
  {
    "id": 2785,
    "word": "module",
    "meaning": "モジュール",
    "example": "a part of an object that can operate alone, especially a part of a spacecraft; part of a course or a textbook",
    "exampleJP": "（定義）"
  },
  {
    "id": 2786,
    "word": "faithfully",
    "meaning": "忠実に",
    "example": "in a loyal way or a way that can be trusted",
    "exampleJP": "（定義）"
  },
  {
    "id": 2787,
    "word": "autumn",
    "meaning": "秋",
    "example": "the season between summer and winter",
    "exampleJP": "（定義）"
  },
  {
    "id": 2788,
    "word": "cheek",
    "meaning": "ほお",
    "example": "the soft part of your face below your eye",
    "exampleJP": "（定義）"
  },
  {
    "id": 2789,
    "word": "attachment",
    "meaning": "愛着、添付ファイル",
    "example": "a feeling strong connection to someone or something; a computer file which is sent together with an email message",
    "exampleJP": "（定義）"
  },
  {
    "id": 2790,
    "word": "holder",
    "meaning": "所有者",
    "example": "someone who officially owns something",
    "exampleJP": "（定義）"
  },
  {
    "id": 2791,
    "word": "grin",
    "meaning": "にっこり笑う",
    "example": "to smile a big smile",
    "exampleJP": "（定義）"
  },
  {
    "id": 2792,
    "word": "noun",
    "meaning": "名詞",
    "example": "a word that is the name of something (such as a person, animal, place, thing, quality, idea, or action) and is typically used in a sentence as subject or object of a verb or as object of a preposition",
    "exampleJP": "（定義）"
  },
  {
    "id": 2793,
    "word": "fortunate",
    "meaning": "幸運",
    "example": "having good luck : enjoying good fortune : lucky",
    "exampleJP": "（定義）"
  },
  {
    "id": 2794,
    "word": "alright",
    "meaning": "大丈夫",
    "example": "good enough, although not very good; safe or well",
    "exampleJP": "（定義）"
  },
  {
    "id": 2795,
    "word": "lazy",
    "meaning": "怠惰な",
    "example": "not liking to work hard or to be active",
    "exampleJP": "（定義）"
  },
  {
    "id": 2796,
    "word": "hello",
    "meaning": "こんにちは",
    "example": "used as a greeting",
    "exampleJP": "（定義）"
  },
  {
    "id": 2797,
    "word": "hunger",
    "meaning": "空腹",
    "example": "a very great need for food : a severe lack of food",
    "exampleJP": "（定義）"
  },
  {
    "id": 2798,
    "word": "insure",
    "meaning": "保険を掛ける",
    "example": "to buy insurance for (something, such as property or health)",
    "exampleJP": "（定義）"
  },
  {
    "id": 2799,
    "word": "ashamed",
    "meaning": "恥ずかしい",
    "example": "feeling shame, guilt or embarrassment",
    "exampleJP": "（定義）"
  },
  {
    "id": 2800,
    "word": "found",
    "meaning": "設立する",
    "example": "to start an organization, especially by providing money",
    "exampleJP": "（定義）"
  },
  {
    "id": 2801,
    "word": "thirst",
    "meaning": "渇き",
    "example": "an uncomfortable feeling that is caused by the need for something to drink",
    "exampleJP": "（定義）"
  }
];

if (typeof module !== 'undefined') {
    module.exports = NGSL_WORDS;
}
