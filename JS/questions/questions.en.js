// JS/questions/questions.en.js
// English placement test (30 questions)

export const QUESTIONS_EN = [
  // A1 - Elementary (Lekin mantiqiy tuzoqlar bor)
  {
    id: 1,
    level: "A1",
    type: "mcq",
    q: "O'zbek tilida 'Tish cho'tkasi' inglizchada qanday bo'ladi?",
    options: [
      "Teethbrush",
      "Toothbrush",
      "Teethsbrush",
      "Brush tooth"
    ],
    answer: 1 // Chunki ingliz tilida otlar qo'shilganda birinchisi birlikda keladi
  },
  {
    id: 2,
    level: "A1",
    type: "mcq",
    q: "I have keys but no locks. I have a space but no room. You can enter, but never leave. What am I?",
    options: [
      "A car",
      "A keyboard",
      "A house",
      "A prison"
    ],
    answer: 1
  },
  {
    id: 3,
    level: "A1",
    type: "mcq",
    q: "Ingliz tilida 'Oyoq kiyim kiyish' va 'Atir sepish' uchun qaysi bir xil fe'l ishlatiladi?",
    options: [
      "Put",
      "Dress",
      "Use",
      "Wear"
    ],
    answer: 3
  },
  {
    id: 4,
    level: "A1",
    type: "mcq",
    q: "What is the only word in English that is pronounced the same even if you take away four of its five letters?",
    options: [
      "Queue",
      "Apple",
      "Level",
      "Empty"
    ],
    answer: 0 // Q harfining o'zi qoladi, talaffuz o'zgarmaydi
  },
  {
    id: 5,
    level: "A2",
    type: "mcq",
    q: "If you are 'under the weather', what do you need?",
    options: [
      "An umbrella",
      "A coat",
      "Some medicine",
      "Sunglasses"
    ],
    answer: 2 // 'Under the weather' - o'zini yomon his qilish/kasal bo'lish
  },

  // A2 - Pre-Intermediate (Tarjima va mantiq)
  {
    id: 6,
    level: "A2",
    type: "mcq",
    q: "Ingliz tilida 'It is raining cats and dogs' gapining ma'nosi nima?",
    options: [
      "Hayvonlar yomg'irda qoldi",
      "Juda kuchli yomg'ir yog'yapti",
      "Osmondan mushuklar tushyapti",
      "Yomg'ir to'xtadi"
    ],
    answer: 1
  },
  {
    id: 7,
    level: "A2",
    type: "mcq",
    q: "I am tall when I am young, and I am short when I am old. What am I?",
    options: [
      "A human",
      "A pencil",
      "A candle",
      "A tree"
    ],
    answer: 2
  },
  {
    id: 8,
    level: "A2",
    type: "mcq",
    q: "Which month has 28 days?",
    options: [
      "Only February",
      "None of them",
      "All of them",
      "Only Leap year"
    ],
    answer: 2 // Hamma oyda kamida 28 kun bor - mantiqiy savol
  },
  {
    id: 9,
    level: "A2",
    type: "mcq",
    q: "'Break a leg!' iborasini qachon ishlatishadi?",
    options: [
      "Urushda",
      "Kasalxonada",
      "Omad tilaganda",
      "Xafa bo'lganda"
    ],
    answer: 2
  },
  {
    id: 10,
    level: "A2",
    type: "mcq",
    q: "What can you catch but not throw?",
    options: [
      "A ball",
      "A cold",
      "A fish",
      "A bus"
    ],
    answer: 1 // 'Catch a cold' - shamollab qolish
  },

  // B1 - Intermediate (O'quvchini qiynashni boshlaymiz)
  {
    id: 11,
    level: "B1",
    type: "mcq",
    q: "Ingliz tilida 'Police' so'zidan keyin qaysi fe'l keladi?",
    options: [
      "Police is coming",
      "Police are coming",
      "Police has coming",
      "Police was coming"
    ],
    answer: 1 // Police doimo ko'plikda
  },
  {
    id: 12,
    level: "B1",
    type: "mcq",
    q: "Choose the correct translation: 'Ko'z tegmasin!'",
    options: [
      "Touch wood!",
      "No eye contact!",
      "Don't look at me!",
      "Protect your eyes!"
    ],
    answer: 0
  },
  {
    id: 13,
    level: "B1",
    type: "mcq",
    q: "If I have three apples and you take away two, how many apples do you have?",
    options: [
      "One",
      "Two",
      "Three",
      "Zero"
    ],
    answer: 1 // Siz nechtasini olsangiz, shuncha sizda bo'ladi
  },
  {
    id: 14,
    level: "B1",
    type: "mcq",
    q: "What begins with T, finishes with T and has T in it?",
    options: [
      "Table",
      "Teapot",
      "Toast",
      "Ticket"
    ],
    answer: 1 // Teapot so'zining ichida 'tea' (choy) bor
  },
  {
    id: 15,
    level: "B1",
    type: "mcq",
    q: "A man goes out in heavy rain with nothing to protect him. His hair doesn't get wet. Why?",
    options: [
      "He had an umbrella",
      "He was bald",
      "He was wearing a hat",
      "He was fast"
    ],
    answer: 1 // Bald - kal
  },

  // B2 - Upper Intermediate (Daraja oshdi)
  {
    id: 16,
    level: "B2",
    type: "mcq",
    q: "Choose the correct meaning: 'The exam was a piece of cake.'",
    options: [
      "Imtihonda tort yedik",
      "Imtihon juda oson edi",
      "Imtihon shirin o'tdi",
      "Imtihon qiyin bo'ldi"
    ],
    answer: 1
  },
  {
    id: 17,
    level: "B2",
    type: "mcq",
    q: "Which word does NOT belong in this group: Bark, Leaf, Branch, Root, Book?",
    options: [
      "Bark",
      "Root",
      "Book",
      "Branch"
    ],
    answer: 2 // Qolganlari daraxt qismlari, Bark - daraxt po'stlog'i
  },
  {
    id: 18,
    level: "B2",
    type: "mcq",
    q: "I have cities, but no houses. I have mountains, but no trees. What am I?",
    options: [
      "A globe",
      "A map",
      "A desert",
      "A photo"
    ],
    answer: 1
  },
  {
    id: 19,
    level: "B2",
    type: "mcq",
    q: "Ingliz tilida 'Pants' so'zi Buyuk Britaniyada nima degani?",
    options: [
      "Shim",
      "Ichki kiyim",
      "Paypoq",
      "Ko'ylak"
    ],
    answer: 1 // Shim - Trousers, Pants - ichki kiyim (UK)
  },
  {
    id: 20,
    level: "B2",
    type: "mcq",
    q: "He is the 'black sheep' of the family. What does it mean?",
    options: [
      "U oilaning eng boyi",
      "U oilaning eng yomoni/uyatga qoldiruvchisi",
      "U oilada qo'y boqadi",
      "U oilada juda qora tanli"
    ],
    answer: 1
  },

  // C1/C2 - Advanced (Mantiqiy cho'qqi)
  {
    id: 21,
    level: "C1",
    type: "mcq",
    q: "What occurs once in a minute, twice in a moment, but never in a thousand years?",
    options: [
      "The letter 'M'",
      "A second",
      "A heartbeat",
      "The letter 'O'"
    ],
    answer: 0
  },
  {
    id: 22,
    level: "C1",
    type: "mcq",
    q: "If a brother, his sister, and their dog aren't under an umbrella, why didn't they get wet?",
    options: [
      "They were in a house",
      "It wasn't raining",
      "They were fast runners",
      "The dog was dry"
    ],
    answer: 1
  },
  {
    id: 23,
    level: "C1",
    type: "mcq",
    q: "What word is spelled incorrectly in every single dictionary?",
    options: [
      "Wrong",
      "Incorrectly",
      "False",
      "Dictionary"
    ],
    answer: 1 // 'Incorrectly' so'zi lug'atda aynan shunday yoziladi
  },
  {
    id: 24,
    level: "C2",
    type: "mcq",
    q: "I can be cracked, made, told, and played. What am I?",
    options: [
      "A joke",
      "An egg",
      "A game",
      "A story"
    ],
    answer: 0
  },
  {
    id: 25,
    level: "C2",
    type: "mcq",
    q: "Choose the correct logic: 'If yesterday was tomorrow, today would be Friday'. What day is today?",
    options: [
      "Wednesday",
      "Thursday",
      "Sunday",
      "Saturday"
    ],
    answer: 2 // Mantiqiy tahlil talab qiladigan eng qiyin savol
  }
];