import { QUESTIONS_EN } from "./questions/questions.en.js";
import { QUESTIONS_RU } from "./questions/questions.ru.js";
import { QUESTIONS_AR } from "./questions/questions.ar.js";
// agar bo'lsa

const BANK = {
  en: { name: "English Test", questions: QUESTIONS_EN },
  ru: { name: "Русский тест", questions: QUESTIONS_RU },
  ar: { name: "اختبار العربية", questions: QUESTIONS_AR }
};

const params = new URLSearchParams(location.search);
const lang = (params.get("lang") || "en").toLowerCase();

const pack = BANK[lang] || BANK.en;
const questions = pack.questions;

const titleEl = document.getElementById("title");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const counterEl = document.getElementById("counter");
const barEl = document.getElementById("bar");
const resultEl = document.getElementById("result");
const cardEl = document.querySelector(".card");

titleEl.textContent = pack.name;

let index = 0;
let score = 0;
let selected = null;

render();

function render() {
  selected = null;

  const q = questions[index];
  counterEl.textContent = `Question ${index + 1} / ${questions.length}`;
  questionEl.textContent = q.q;

  answersEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;

    btn.onclick = () => {
      selected = i;
      document.querySelectorAll(".answers button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    };

    answersEl.appendChild(btn);
  });

  barEl.style.width = (index / questions.length) * 100 + "%";

  // Next tugma matni oxirida "Finish" bo'lsin
  nextBtn.textContent = (index === questions.length - 1) ? "Finish" : "Next";
}

nextBtn.onclick = () => {
  if (selected === null) {
    alert(lang === "ru" ? "Выберите вариант!" : "Choose an answer!");
    return;
  }

  if (selected === questions[index].answer) score++;

  index++;
  if (index < questions.length) render();
  else finish();
};

function finish() {
  cardEl.classList.add("hidden");
  barEl.style.width = "100%";

  // Demo level (xohlasangiz keyin aniqroq qilamiz)
  const pct = score / questions.length;
  let level =
    pct < 0.4 ? "Beginner" :
    pct < 0.7 ? "Elementary" :
    "Intermediate";

  // Ruscha label
  if (lang === "ru") {
    level =
      pct < 0.4 ? "Начальный" :
      pct < 0.7 ? "Базовый" :
      "Средний";
  }

  resultEl.innerHTML = `
    <h2>${lang === "ru" ? "Результат" : "Result"}</h2>
    <h3>${score} / ${questions.length}</h3>
    <p>${lang === "ru" ? "Уровень" : "Level"}: <b>${level}</b></p>
    <button class="restart" onclick="location.reload()">${lang === "ru" ? "Пройти снова" : "Restart"}</button>
  `;

  resultEl.classList.remove("hidden");
}
