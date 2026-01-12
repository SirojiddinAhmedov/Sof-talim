const form = document.getElementById("leadForm");
const statusText = document.getElementById("status");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const courseSelect = document.getElementById("course");

// Inputga faqat tegishli belgilar yozilsin
nameInput.addEventListener("input", () => {
  // faqat harflar va bo'sh joy qabul qilinsin
  nameInput.value = nameInput.value.replace(/[^A-Za-zА-Яа-яЁё ]/g, "");
});

phoneInput.addEventListener("input", () => {
  // faqat raqam yozilsin, +998 qismi o'chmasin
  let val = phoneInput.value;

  if (!val.startsWith("+998")) {
    val = "+998";
  }

  // +998 dan keyingi raqamlarni olish
  let numbers = val.replace("+998", "").replace(/\D/g, ""); // faqat raqam
  if (numbers.length > 9) numbers = numbers.slice(0, 9);

  phoneInput.value = "+998" + numbers;
});

// Form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const course = courseSelect.value.trim();

  // Ismni tekshirish
  if (name.length < 3) {
    statusText.textContent = "❌ Iltimos, ismingiz kamida 3 harf bo‘lsin";
    return;
  }

  // Telefonni tekshirish: +998 dan keyin 9 raqam
  const phoneNumber = phone.replace("+998", "");
  if (!/^\d{9}$/.test(phoneNumber)) {
    statusText.textContent =
      "❌ Iltimos, telefon raqamingiz +998 dan keyin to'qqizta raqamdan iborat bo‘lsin";
    return;
  }

  // Telegramga yuborish kodi
  const BOT_TOKEN = "8344143650:AAGJ0EB5EyIqhPsNtT-t0GoDA9Fh5AFI9WU";
  const CHAT_ID = "1497284051";
  const message = `
📝 Ariza qoldiruvchi
👤 Ismi: ${name}
🖇  Kurs: ${course}
📞 Telefon raqami: ${phone}
`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (res.ok) {
      statusText.textContent = "✅ Ariza yuborildi, tez orada bog‘lanamiz!";
      form.reset();
      phoneInput.value = "+998"; // telefon reset
    } else {
      statusText.textContent = "❌ Xatolik yuz berdi, qayta urinib ko‘ring";
    }
  } catch (err) {
    statusText.textContent = "❌ Internet yoki server xatosi";
  }
});








const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const cardWidth = 280; // card + gap
let isAnimating = false;

// Boshlanishida birinchi elementni markazga tayyorlab qo‘yamiz
carousel.style.transform = `translateX(-${cardWidth}px)`;

// Oxirgi kartani boshiga olib kelamiz (doira effekti uchun)
carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);


// =======================
// 👉 NEXT (o‘ngga aylanish)
// =======================
nextBtn.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  carousel.style.transition = "transform 0.4s ease";
  carousel.style.transform = `translateX(-${cardWidth * 2}px)`;

  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.appendChild(carousel.firstElementChild);
    carousel.style.transform = `translateX(-${cardWidth}px)`;
    isAnimating = false;
  }, 400);
});


// =======================
// 👈 PREV (chapga aylanish)
// =======================
prevBtn.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  carousel.style.transition = "none";
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
  carousel.style.transform = `translateX(-${cardWidth * 2}px)`;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      carousel.style.transition = "transform 0.4s ease";
      carousel.style.transform = `translateX(-${cardWidth}px)`;
    });
  });

  setTimeout(() => {
    isAnimating = false;
  }, 400);
});


// =======================
// 🔁 AUTO ROTATE (doira bo‘ylab)
// =======================
let autoSlide = setInterval(() => {
  nextBtn.click();
}, 3000);


// =======================
// 🤏 DRAG / SWIPE
// =======================
let startX = 0;
let isDragging = false;

carousel.addEventListener("mousedown", startDrag);
carousel.addEventListener("touchstart", startDrag);

carousel.addEventListener("mouseup", endDrag);
carousel.addEventListener("touchend", endDrag);

function startDrag(e) {
  clearInterval(autoSlide);
  isDragging = true;
  startX = getX(e);
}

function endDrag(e) {
  if (!isDragging) return;
  isDragging = false;

  const endX = getX(e);
  const diff = startX - endX;

  if (diff > 50) nextBtn.click();
  else if (diff < -50) prevBtn.click();

  autoSlide = setInterval(() => {
    nextBtn.click();
  }, 3000);
}

function getX(e) {
  return e.type.includes("mouse") ? e.pageX : e.changedTouches[0].clientX;
}


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // boshqalar yopilsin (accordion effekt)
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});



const burger = document.getElementById("burger");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

// Burger bosilganda animatsiya va drawer
burger.addEventListener("click", () => {
  burger.classList.toggle("active");      // X animatsiya
  sideMenu.classList.toggle("active");    // drawer ochish
  overlay.classList.toggle("active");     // overlay
});

// Overlay bosilganda menyu yopilsin
overlay.addEventListener("click", () => {
  burger.classList.remove("active");
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// Link bosilganda menyu yopilsin
sideMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
