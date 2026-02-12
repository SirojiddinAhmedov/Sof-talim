import { QUESTIONS_EN } from "./questions/questions.en.js";
import { QUESTIONS_RU } from "./questions/questions.ru.js";
import { QUESTIONS_AR } from "./questions/questions.ar.js";
import { QUESTIONS_MATH } from "./questions/questions.math.js"; // ✅ qo‘shildi

const BANK = {
  en: { name: "English Test", questions: QUESTIONS_EN },
  ru: { name: "Русский тест", questions: QUESTIONS_RU },
  ar: { name: "اختبار العربية", questions: QUESTIONS_AR },
  math: { name: "Math Test", questions: QUESTIONS_MATH } // ✅ qo‘shildi
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
  nextBtn.textContent = (index === questions.length - 1) ? "Finish" : "Next";
}

nextBtn.onclick = () => {
  if (selected === null) {
    const msg =
      lang === "ru" ? "Выберите вариант!" :
      lang === "ar" ? "اختر إجابة!" :
      "Choose an answer!";
    alert(msg);
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

  const pct = score / questions.length;

  // Default (EN)
  let level =
    pct < 0.4 ? "Beginner" :
    pct < 0.7 ? "Elementary" :
    "Intermediate";

  // RU label
  if (lang === "ru") {
    level =
      pct < 0.4 ? "Начальный" :
      pct < 0.7 ? "Базовый" :
      "Средний";
  }

  // AR label (ixtiyoriy, oddiy)
  if (lang === "ar") {
    level =
      pct < 0.4 ? "مبتدئ" :
      pct < 0.7 ? "متوسط" :
      "جيد";
  }

  // MATH label (UZ) — xohlasangiz o‘zgartirasiz
  if (lang === "math") {
    level =
      pct < 0.4 ? "Boshlang‘ich" :
      pct < 0.7 ? "O‘rta" :
      "Yaxshi";
  }

  const title =
    lang === "ru" ? "Результат" :
    lang === "ar" ? "النتيجة" :
    "Result";

  const levelLabel =
    lang === "ru" ? "Уровень" :
    lang === "ar" ? "المستوى" :
    "Level";

  const restartText =
    lang === "ru" ? "Пройти снова" :
    lang === "ar" ? "إعادة" :
    "Restart";

  resultEl.innerHTML = `
    <h2>${title}</h2>
    <h3>${score} / ${questions.length}</h3>
    <p>${levelLabel}: <b>${level}</b></p>
    <button class="restart" onclick="location.reload()">${restartText}</button>
  `;

  resultEl.classList.remove("hidden");
}
