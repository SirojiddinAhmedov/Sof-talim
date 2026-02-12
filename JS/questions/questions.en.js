// JS/questions/questions.en.js
// English placement test (30 questions)

export const QUESTIONS_EN = [
  {
    id: 1,
    level: "A1",
    type: "mcq",
    q: "You meet someone for the first time. What do you say?",
    options: [
      "How old you?",
      "Hello, nice to meet you.",
      "Where you go?",
      "Me happy."
    ],
    answer: 1
  },
  {
    id: 2,
    level: "A1",
    type: "mcq",
    q: "(Imagine: picture of a messy room) What do you say?",
    options: [
      "This room is very clean.",
      "This room is very messy.",
      "This room is sleeping.",
      "This room is fast."
    ],
    answer: 1,
    media: { kind: "image", src: "" } // keyin rasm qo'shsangiz src yozasiz
  },
  {
    id: 3,
    level: "A1",
    type: "mcq",
    q: "(Imagine: a man drinking coffee in a cafe) What is he doing?",
    options: [
      "He is sleeping.",
      "He is drinking coffee.",
      "He is running.",
      "He is cooking."
    ],
    answer: 1,
    media: { kind: "image", src: "" }
  },
  {
    id: 4,
    level: "A1",
    type: "mcq",
    q: 'Choose the correct reply: “How are you?”',
    options: [
      "I am 18 years old.",
      "I’m fine, thank you.",
      "I go home.",
      "Blue color."
    ],
    answer: 1
  },
  {
    id: 5,
    level: "A2",
    type: "mcq",
    q: "Your phone battery is 1%. What do you say?",
    options: [
      "My phone is dying.",
      "My phone is eating.",
      "My phone is sleeping.",
      "My phone is flying."
    ],
    answer: 0
  },
  {
    id: 6,
    level: "A2",
    type: "mcq",
    q: "You want to borrow a pen. What do you say?",
    options: [
      "Give me pen.",
      "Pen now.",
      "Can I borrow your pen, please?",
      "You pen me."
    ],
    answer: 2
  },
  {
    id: 7,
    level: "A2",
    type: "mcq",
    q: 'Which word is closest to “happy”?',
    options: [
      "Angry",
      "Sad",
      "Glad",
      "Tired"
    ],
    answer: 2
  },
  {
    id: 8,
    level: "A2",
    type: "mcq",
    q: "You are late for class. What do you say?",
    options: [
      "I no come.",
      "Sorry, I’m late.",
      "Late is good.",
      "I late yesterday."
    ],
    answer: 1
  },
  {
    id: 9,
    level: "A2",
    type: "mcq",
    q: "Choose the correct sentence:",
    options: [
      "I have been there yesterday.",
      "I went there yesterday.",
      "I go there yesterday.",
      "I am there yesterday."
    ],
    answer: 1
  },
  {
    id: 10,
    level: "A2",
    type: "mcq",
    q: "Finish the sentence: “If I speak English well, I can…”",
    options: [
      "get better job opportunities",
      "close the door slowly",
      "forget my name",
      "break the table"
    ],
    answer: 0
  },

  // 11–20: Observation / logic (media placeholders)
  {
    id: 11,
    level: "B1",
    type: "mcq",
    q: "(Imagine: a billiard table with balls) Look at the table. How many balls are on it?",
    options: ["12", "15", "18", "20"],
    answer: 1,
    media: { kind: "video", src: "" }
  },
  {
    id: 12,
    level: "B1",
    type: "mcq",
    q: "(Imagine: a man puts keys, phone, and wallet on a table, then leaves) What did he forget?",
    options: ["Phone", "Keys", "Wallet", "Bag"],
    answer: 2,
    media: { kind: "video", src: "" }
  },
  {
    id: 13,
    level: "B1",
    type: "mcq",
    q: "(Imagine: traffic light changes green → yellow → red) What will happen next?",
    options: [
      "Cars will speed up.",
      "Cars will stop.",
      "Cars will fly.",
      "Cars will disappear."
    ],
    answer: 1,
    media: { kind: "video", src: "" }
  },
  {
    id: 14,
    level: "B1",
    type: "mcq",
    q: "(Imagine: cooking clip: onions + pan + oil) What is she probably making?",
    options: ["Salad", "Soup", "Fried food", "Ice cream"],
    answer: 2,
    media: { kind: "video", src: "" }
  },
  {
    id: 15,
    level: "B1",
    type: "mcq",
    q: "(Imagine: three people: one wet, one with umbrella, one dry) Who was in the rain?",
    options: [
      "The dry person",
      "The person with umbrella",
      "The wet person",
      "All of them"
    ],
    answer: 2,
    media: { kind: "image", src: "" }
  },
  {
    id: 16,
    level: "B1",
    type: "mcq",
    q: "(Imagine: a boy opens fridge, closes it, opens again) Why did he open the fridge again?",
    options: [
      "He forgot what was inside.",
      "He wants to sleep.",
      "He is bored.",
      "He is angry."
    ],
    answer: 0,
    media: { kind: "video", src: "" }
  },
  {
    id: 17,
    level: "B1",
    type: "mcq",
    q: '(Imagine: clock shows 8:55 and a bus says “9:00”) What should the person do?',
    options: ["Walk slowly.", "Run.", "Sit down.", "Go home."],
    answer: 1,
    media: { kind: "image", src: "" }
  },
  {
    id: 18,
    level: "B1",
    type: "mcq",
    q: "(Imagine: two people talk; one looks confused, the other explains with hands) What is happening?",
    options: [
      "They are fighting.",
      "One is teaching the other.",
      "They are sleeping.",
      "They are dancing."
    ],
    answer: 1,
    media: { kind: "video", src: "" }
  },
  {
    id: 19,
    level: "B1",
    type: "mcq",
    q: "(Imagine: empty glass, full bottle, thirsty person) What will probably happen next?",
    options: [
      "He will drink water.",
      "He will throw the bottle.",
      "He will sleep.",
      "He will cry."
    ],
    answer: 0,
    media: { kind: "image", src: "" }
  },
  {
    id: 20,
    level: "B1",
    type: "mcq",
    q: "(Imagine: student checks phone, smiles, then runs) Why is he running?",
    options: ["He is late.", "He is sick.", "He is tired.", "He is hungry."],
    answer: 0,
    media: { kind: "video", src: "" }
  },

  // 21–30: Advanced mixed (C1/C2-ish)
  {
    id: 21,
    level: "C1",
    type: "mcq",
    q: 'Choose the sentence that best matches the meaning: "He accepted the offer reluctantly."',
    options: [
      "He was excited.",
      "He agreed but without enthusiasm.",
      "He refused immediately.",
      "He was surprised."
    ],
    answer: 1
  },
  {
    id: 22,
    level: "C1",
    type: "mcq",
    q: 'Read: "The committee postponed the decision, citing insufficient data." What is the real reason?',
    options: [
      "They are confident.",
      "They need more information.",
      "They forgot.",
      "They disagree."
    ],
    answer: 1
  },
  {
    id: 23,
    level: "C1",
    type: "mcq",
    q: 'Which word best replaces “meticulous” in this sentence? "She is meticulous about her research."',
    options: [
      "Careless",
      "Detailed and careful",
      "Lazy",
      "Fast"
    ],
    answer: 1
  },
  {
    id: 24,
    level: "C1",
    type: "mcq",
    q: 'Complete logically: "If the policy is implemented without public support, it will likely…" ',
    options: [
      "succeed easily",
      "face resistance",
      "be forgotten",
      "save money"
    ],
    answer: 1
  },
  {
    id: 25,
    level: "C1",
    type: "mcq",
    q: 'Read: "His apology sounded sincere, yet his actions remained unchanged." What does this imply?',
    options: [
      "He truly changed.",
      "He did not mean it seriously.",
      "He was confused.",
      "He was proud."
    ],
    answer: 1
  },
  {
    id: 26,
    level: "C1",
    type: "mcq",
    q: 'Choose the best response: Manager: "This project is behind schedule." You:',
    options: [
      "That’s not my problem.",
      "I’ll review the delays and propose solutions.",
      "I don’t care.",
      "It is finished."
    ],
    answer: 1
  },
  {
    id: 27,
    level: "C2",
    type: "mcq",
    q: "Which sentence contains a subtle criticism?",
    options: [
      "Your report is quite interesting.",
      "Your report is flawless.",
      "Your report needs major revision.",
      "Your report is excellent."
    ],
    answer: 2
  },
  {
    id: 28,
    level: "C2",
    type: "mcq",
    q: 'Identify the hidden assumption: "Online education is cheaper, so it must be better."',
    options: [
      "Cheap things are useless.",
      "Lower cost means higher quality.",
      "Education is boring.",
      "Teachers are unnecessary."
    ],
    answer: 1
  },
  {
    id: 29,
    level: "C2",
    type: "mcq",
    q: 'Complete the argument: "While technology improves efficiency, excessive dependence on it may…" ',
    options: [
      "increase creativity",
      "reduce critical thinking",
      "save time",
      "create jobs"
    ],
    answer: 1
  },
  {
    id: 30,
    level: "C2",
    type: "mcq",
    q: 'Choose the best summary: "Although the company expanded rapidly, poor management led to declining profits."',
    options: [
      "Growth guaranteed success.",
      "Expansion caused problems.",
      "Management improved profits.",
      "The company failed immediately."
    ],
    answer: 1
  }
];
