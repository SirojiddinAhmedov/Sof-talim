// ========================================
// FORM VA INPUT ELEMENTLARI
// ========================================
const form = document.getElementById("hero");
const statusText = document.getElementById("status");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const courseSelect = document.getElementById("course");

// ========================================
// INPUT VALIDATSIYA VA FORMATLASH
// ========================================

// Ism inputi - faqat harflar va bo'sh joy
nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^A-Za-zА-Яа-яЁёЎўҚқҒғҲҳ ]/g, "");
});

// Telefon inputi - avtomatik +998 bilan boshlash
phoneInput.addEventListener("focus", () => {
  if (!phoneInput.value) {
    phoneInput.value = "+998";
  }
});

// Telefon inputi - faqat raqamlar va formatlash
phoneInput.addEventListener("input", (e) => {
  let value = phoneInput.value.replace(/\D/g, "");
  
  if (!value.startsWith("998")) {
    value = "998";
  }
  
  if (value.length > 12) {
    value = value.slice(0, 12);
  }
  
  phoneInput.value = "+" + value;
});

// Telefon inputi - backspace bilan +998 o'chmasligi
phoneInput.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" && phoneInput.value === "+998") {
    e.preventDefault();
  }
});

// ========================================
// XABARLARNI KO'RSATISH FUNKSIYASI
// ========================================
function showStatus(message, isError = false) {
  statusText.textContent = message;
  statusText.style.color = isError ? "#ff4444" : "#4CAF50";
  statusText.style.display = "block";
  
  setTimeout(() => {
    statusText.textContent = "";
    statusText.style.display = "none";
  }, 5000);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const course = courseSelect.value.trim();

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Yuborilmoqda...";

  const BOT_TOKEN = "8209490453:AAGh1NE356FGya857OQLwwBD3yglQD_PFZ4";
  const CHAT_ID = "1643264376";

  const message =
`📝 Yangi ariza

👤 Ismi: ${name}
📚 Kurs: ${course}
📞 Telefon: ${phone}

⏰ Vaqt: ${new Date().toLocaleString("uz-UZ")}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    });

    const data = await res.json();

    if (data.ok) {
      showStatus("✅ Ariza yuborildi! Tez orada bog'lanamiz", false);
      form.reset();
      phoneInput.value = "+998";
    } else {
      showStatus("❌ Xatolik: Telegram javobi ok emas", true);
      console.log(data);
    }
  } catch (err) {
    console.error(err);
    showStatus("❌ Internet/Telegram ulanish xatosi", true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});




// Mavjud validatsiya kodlari (Ism, Telefon) tepada qoladi...

// const submitBtn = form.querySelector("button"); // Tugmani aniqlab olamiz

// form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const originalText = submitBtn.textContent;
//     const name = nameInput.value;
//     const phone = phoneInput.value;
//     const course = courseSelect.value;

//     // Tugmani vaqtincha muzlatamiz
//     submitBtn.disabled = true;
//     submitBtn.textContent = "Yuborilmoqda...";

//     try {
//         const res = await fetch("http://localhost:3000/api/lead", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ name, phone, course }),
//         });

//         const data = await res.json();

//         if (data.ok) {
//             // 1. Yashil xabarni ko'rsatish
//             showStatus("✅ Ariza yuborildi! Tez orada bog'lanamiz", false);
            
//             // 2. Inputlarni tozalash
//             form.reset(); 
//             phoneInput.value = "+998"; // Telefonni boshlang'ich holatga qaytarish
//         } else {
//             showStatus("❌ Xatolik yuz berdi, qayta urinib ko'ring", true);
//         }
//     } catch (err) {
//         console.error("Yuborishda xatolik:", err);
//         showStatus("❌ Server bilan aloqa uzildi", true);
//     } finally {
//         // Tugmani yana faollashtiramiz
//         submitBtn.disabled = false;
//         submitBtn.textContent = originalText;
//     }
// });


// ========================================
// KARUSEL (CAROUSEL) FUNKSIYALARI
// ========================================
const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let isAnimating = false;
let autoSlideInterval = null;

// Card kengligini olish
function getCardWidth() {
  const card = carousel.querySelector(".course-card");
  if (!card) return 0;
  const gap = 20;
  return card.offsetWidth + gap;
}

// Boshlang'ich holatni sozlash
function initCarousel() {
  if (!carousel || carousel.children.length === 0) return;
  
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
  const w = getCardWidth();
  carousel.style.transform = `translateX(-${w}px)`;
  carousel.style.transition = "none";
}

// Keyingi slaydga o'tish
function nextSlide() {
  if (isAnimating || !carousel) return;
  isAnimating = true;

  const w = getCardWidth();
  carousel.style.transition = "transform 0.4s ease";
  carousel.style.transform = `translateX(-${w * 2}px)`;

  const handler = () => {
    carousel.removeEventListener("transitionend", handler);
    carousel.style.transition = "none";
    carousel.appendChild(carousel.firstElementChild);
    carousel.style.transform = `translateX(-${w}px)`;
    isAnimating = false;
  };

  carousel.addEventListener("transitionend", handler);
}

// Oldingi slaydga o'tish
function prevSlide() {
  if (isAnimating || !carousel) return;
  isAnimating = true;

  const w = getCardWidth();
  carousel.style.transition = "none";
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
  carousel.style.transform = `translateX(-${w * 2}px)`;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      carousel.style.transition = "transform 0.4s ease";
      carousel.style.transform = `translateX(-${w}px)`;
    });
  });

  const handler = () => {
    carousel.removeEventListener("transitionend", handler);
    isAnimating = false;
  };

  carousel.addEventListener("transitionend", handler);
}

// Tugmalar uchun event listener
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });
}

// ========================================
// AUTO ROTATE FUNKSIYALARI
// ========================================
function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

// ========================================
// DRAG VA SWIPE FUNKSIYALARI
// ========================================
let startX = 0;
let isDragging = false;

function getX(e) {
  return e.type.includes("mouse") ? e.pageX : e.changedTouches[0].clientX;
}

function startDrag(e) {
  stopAutoSlide();
  isDragging = true;
  startX = getX(e);
  if (carousel) {
    carousel.style.cursor = "grabbing";
  }
}

function endDrag(e) {
  if (!isDragging) return;
  isDragging = false;

  if (carousel) {
    carousel.style.cursor = "grab";
  }

  const endX = getX(e);
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }

  startAutoSlide();
}

// Drag event'larni qo'shish
if (carousel) {
  carousel.style.cursor = "grab";
  
  carousel.addEventListener("mousedown", startDrag);
  carousel.addEventListener("touchstart", startDrag, { passive: true });
  
  carousel.addEventListener("mouseup", endDrag);
  carousel.addEventListener("touchend", endDrag);
  carousel.addEventListener("mouseleave", endDrag);
  
  // Drag paytida rasm sudrab ketishini oldini olish
  carousel.addEventListener("dragstart", (e) => e.preventDefault());
}

// ========================================
// WINDOW RESIZE HANDLERI
// ========================================
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (carousel) {
      const w = getCardWidth();
      carousel.style.transition = "none";
      carousel.style.transform = `translateX(-${w}px)`;
    }
  }, 100);
});

// ========================================
// FAQ ACCORDION
// ========================================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  
  if (question) {
    question.addEventListener("click", () => {
      // Boshqa barcha faq'larni yopish
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      
      // Bosilgan faq'ni ochish/yopish
      item.classList.toggle("active");
    });
  }
});

// ========================================
// MOBILE MENU (BURGER)
// ========================================
const burger = document.getElementById("burger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Menyuni ochish/yopish
function toggleMenu() {
  if (burger) burger.classList.toggle("active");
  if (sideMenu) sideMenu.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
  
  // Body scroll'ni boshqarish
  document.body.style.overflow = sideMenu && sideMenu.classList.contains("active") ? "hidden" : "";
}

// Menyuni yopish
function closeMenu() {
  if (burger) burger.classList.remove("active");
  if (sideMenu) sideMenu.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Burger tugmasi
if (burger) {
  burger.addEventListener("click", toggleMenu);
}

// Overlay bosilganda
if (overlay) {
  overlay.addEventListener("click", closeMenu);
}

// Menu linklari bosilganda
if (sideMenu) {
  sideMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
      
      // Smooth scroll uchun
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }
    });
  });
}

// ESC tugmasi bilan yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sideMenu && sideMenu.classList.contains("active")) {
    closeMenu();
  }
});

// ========================================
// SAHIFA YUKLANGANDA ISHGA TUSHIRISH
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  // Karuselni ishga tushirish
  initCarousel();
  startAutoSlide();
  
  // Telefon inputiga default qiymat
  if (phoneInput && !phoneInput.value) {
    phoneInput.value = "+998";
  }
  
  console.log("✅ Sahifa to'liq yuklandi va skript ishladi");
});

// ========================================
// SAHIFA YOPILGANDA TOZALASH
// ========================================
window.addEventListener("beforeunload", () => {
  stopAutoSlide();
});


//Scroling uchun cod
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".course-btn");
  if (!btn) return;

  e.preventDefault();
  e.stopPropagation();

  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ____________________________________________________
// Ballar jadvali uchun Google sheetdan ma'lumot olish
// ______________________________________________________________\

const API_URL = "https://script.google.com/macros/s/AKfycbw1D5wIk9tZWz_u2_2QlcRm17GtLnDXrQ5tg8YT5zaJjpaNB05QqOelZ9Fh9b4YZRVQ/exec";

const metaEl = document.getElementById("meta");
const listEl = document.getElementById("list");
const errEl = document.getElementById("err");
const searchEl = document.getElementById("search");
const searchResultEl = document.getElementById("searchResult");

let rows = [];        // sorted rows
let indexRows = [];   // for search
let greenKey = null;  // current green-highlighted row key

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setGreen(el, on) {
  if (!el) return;
  // Yashil highlight (CSS qo'shmasdan, JS bilan)
  el.style.background = on ? "#dcfce7" : ""; // light green
  el.style.borderColor = on ? "#86efac" : "";
}

function clearGreen() {
  if (!greenKey) return;
  const prev = listEl.querySelector(`[data-key="${CSS.escape(greenKey)}"]`);
  setGreen(prev, false);
  greenKey = null;
}

function makeKey(name, points, idx) {
  return `${name}__${points}__${idx}`;
}

function renderList(data) {
  listEl.innerHTML = "";

  data.forEach((u) => {
    const item = document.createElement("div");
    item.className = "item";
    item.dataset.key = u.key;

    item.innerHTML = `
      <div class="rank">
        <span class="medal">${u.pos === 1 ? "🥇" : u.pos === 2 ? "🥈" : u.pos === 3 ? "🥉" : ""}</span>
        <span>#${u.pos}</span>
      </div>
      <div class="name" title="${escapeHtml(u.name)}">${escapeHtml(u.name)}</div>
      <div class="points">${u.points} ball</div>
    `;

    listEl.appendChild(item);
  });

  // Agar qidiruvdan keyin yashil row saqlansin
  if (greenKey) {
    const el = listEl.querySelector(`[data-key="${CSS.escape(greenKey)}"]`);
    setGreen(el, true);
  }
}

function scrollToKey(key) {
  const el = listEl.querySelector(`[data-key="${CSS.escape(key)}"]`);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function showSearchResult(found) {
  if (!found) {
    searchResultEl.classList.add("hidden");
    searchResultEl.innerHTML = "";
    return;
  }

  searchResultEl.classList.remove("hidden");
  searchResultEl.innerHTML = `
    <div class="row">
      <div>
        <b>${escapeHtml(found.name)}</b><br/>
        <span>O‘rin: <b>#${found.pos}</b> | Ball: <b>${found.points}</b></span>
      </div>
      <button class="btn" id="showBtn">Ko‘rsatish</button>
    </div>
  `;

  document.getElementById("showBtn").addEventListener("click", () => {
    // Ko‘rsatish bosilganda ham yashil bo‘lib tursin + scroll
    clearGreen();
    greenKey = found.key;
    const el = listEl.querySelector(`[data-key="${CSS.escape(greenKey)}"]`);
    setGreen(el, true);
    scrollToKey(greenKey);
  });
}

function findBestMatch(qLower) {
  // 1) Avval exact match (butun ism teng)
  const exact = indexRows.find(r => r.nameLower === qLower);
  if (exact) return exact;

  // 2) Keyin partial match (ichida bor)
  const partial = indexRows.find(r => r.nameLower.includes(qLower));
  return partial || null;
}

async function load() {
  try {
    errEl.textContent = "";
    metaEl.textContent = "Yuklanmoqda...";

    const res = await fetch(API_URL + "?t=" + Date.now());
    if (!res.ok) throw new Error("API javobi xato: " + res.status);

    const json = await res.json();
    const raw = Array.isArray(json.data) ? json.data : [];

    // Muhim: sheet tartibi (idx) saqlanadi.
    const normalized = raw
      .map((x, idx) => ({
        name: String(x.name ?? "").trim(),
        points: Number(x.points) || 0,
        idx // sheetdagi original tartib: kichik idx = oldin yozilgan
      }))
      .filter(x => x.name.length > 0);

    // Sort: ball DESC, teng bo'lsa sheet tartibi ASC (idx)
    normalized.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return a.idx - b.idx;
    });

    // Bu yerda raqamlar UNIQUE bo‘ladi: #1, #2, #3...
    rows = normalized.map((x, i) => ({
      name: x.name,
      points: x.points,
      idx: x.idx,
      pos: i + 1,
      key: makeKey(x.name, x.points, x.idx)
    }));

    indexRows = rows.map(r => ({ ...r, nameLower: r.name.toLowerCase() }));

    renderList(rows);
    metaEl.textContent = `Yangilangan: ${new Date(json.updatedAt || Date.now()).toLocaleString("uz-UZ")}`;

    // Qidiruv holatini saqlab qolamiz (xohlasangiz reset qilamiz)
    // searchEl.value = "";
    // showSearchResult(null);

  } catch (e) {
    metaEl.textContent = "Yuklab bo‘lmadi.";
    errEl.textContent = "Xatolik: " + e.message;
  }
}

// Qidiruv:
// - ro‘yxat o‘rni o‘zgarmaydi
// - topilgan o‘quvchi qatori yashil bo‘ladi
// - Ko‘rsatish bosilganda scroll bo‘ladi va yashil qoladi
searchEl.addEventListener("input", () => {
  const q = searchEl.value.trim();
  const qLower = q.toLowerCase();

  if (!q) {
    clearGreen();
    showSearchResult(null);
    return;
  }

  const found = findBestMatch(qLower);

  clearGreen();
  if (found) {
    greenKey = found.key;
    const el = listEl.querySelector(`[data-key="${CSS.escape(greenKey)}"]`);
    setGreen(el, true);
  }

  showSearchResult(found);
});

load();

// xohlasangiz avtomatik yangilanish:
setInterval(load, 30000);

 (function () {
    const scroller = document.querySelector(".gifts__scroller");
    if (!scroller) return;

    scroller.addEventListener("wheel", (e) => {
      // Shift bosilmagan bo'lsa ham gorizontalga o'tkazamiz
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        scroller.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  })();

  // ====================================
  // Sovg'lar kartochkasi uchun joy
  // ======================================

  const gifts = [
  { img: "../images/airpods.webp",  name: "Telefon",    points: 1000 },
  { img: "headphones.png", name: "Quloqchin", points: 600 },
  { img: "powerbank.png", name: "Powerbank", points: 450 },
  { img: "backpack.png", name: "Ryukzak", points: 800 },
  { img: "keyboard.png", name: "Klaviatura", points: 550 },
  { img: "mouse.png", name: "Sichqoncha", points: 300 },
  { img: "math4.png",  name: "Telefon",    points: 1000 },
  { img: "headphones.png", name: "Quloqchin", points: 600 },
  { img: "powerbank.png", name: "Powerbank", points: 450 },
  { img: "backpack.png", name: "Ryukzak", points: 800 },
  { img: "keyboard.png", name: "Klaviatura", points: 550 },
  { img: "mouse.png", name: "Sichqoncha", points: 300 },
  // xohlagancha qo‘shaverasan
];

const basePath = "images/gifts/"; // hamma rasm shu papkada

const container = document.getElementById("giftsContainer");

container.innerHTML = gifts.map(gift => `
  <article class="gift">
    <div class="gift__imgWrap">
      <img class="gift__img"
           src="${basePath}${gift.img}"
           alt="${gift.name}"
           loading="lazy">
    </div>
    <div class="gift__meta">
      <div class="gift__name">${gift.name}</div>
      <div class="gift__points"> ⭐️ ${gift.points} ball</div>
    </div>
  </article>
`).join("");