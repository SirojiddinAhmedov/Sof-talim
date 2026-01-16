// // ========================================
// // FORM VA INPUT ELEMENTLARI
// // ========================================
// const form = document.getElementById("hero");
// const statusText = document.getElementById("status");
// const nameInput = document.getElementById("name");
// const phoneInput = document.getElementById("phone");
// const courseSelect = document.getElementById("course");

// // ========================================
// // INPUT VALIDATSIYA VA FORMATLASH
// // ========================================

// // Ism inputi - faqat harflar va bo'sh joy
// nameInput.addEventListener("input", () => {
//   nameInput.value = nameInput.value.replace(/[^A-Za-zА-Яа-яЁёЎўҚқҒғҲҳ ]/g, "");
// });

// // Telefon inputi - avtomatik +998 bilan boshlash
// phoneInput.addEventListener("focus", () => {
//   if (!phoneInput.value) {
//     phoneInput.value = "+998";
//   }
// });

// // Telefon inputi - faqat raqamlar va formatlash
// phoneInput.addEventListener("input", (e) => {
//   let value = phoneInput.value.replace(/\D/g, "");
  
//   if (!value.startsWith("998")) {
//     value = "998";
//   }
  
//   if (value.length > 12) {
//     value = value.slice(0, 12);
//   }
  
//   phoneInput.value = "+" + value;
// });

// // Telefon inputi - backspace bilan +998 o'chmasligi
// phoneInput.addEventListener("keydown", (e) => {
//   if (e.key === "Backspace" && phoneInput.value === "+998") {
//     e.preventDefault();
//   }
// });

// // ========================================
// // XABARLARNI KO'RSATISH FUNKSIYASI
// // ========================================
// function showStatus(message, isError = false) {
//   statusText.textContent = message;
//   statusText.style.color = isError ? "#ff4444" : "#4CAF50";
//   statusText.style.display = "block";
  
//   setTimeout(() => {
//     statusText.textContent = "";
//     statusText.style.display = "none";
//   }, 5000);
// }

// // ========================================
// // FORM SUBMIT VA TELEGRAM GA YUBORISH
// // ========================================
// // ... (Validatsiya va boshqa kodlaringiz o'zgarishsiz qoladi)

// // ========================================
// // FORM SUBMIT VA SERVERGA YUBORISH
// // ========================================
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const name = nameInput.value.trim();
//   const phone = phoneInput.value.trim();
//   const course = courseSelect.value.trim();

//   // Validatsiyalar
//   if (name.length < 3) {
//     showStatus("❌ Iltimos, ismingiz kamida 3 harf bo'lsin", true);
//     return;
//   }

//   const phoneNumber = phone.replace("+998", "");
//   if (!/^\d{9}$/.test(phoneNumber)) {
//     showStatus("❌ Iltimos, to'g'ri telefon raqam kiriting", true);
//     return;
//   }

//   if (!course) {
//     showStatus("❌ Iltimos, kursni tanlang", true);
//     return;
//   }

//   const submitBtn = form.querySelector('button[type="submit"]');
//   const originalText = submitBtn.textContent;
//   submitBtn.disabled = true;
//   submitBtn.textContent = "Yuborilmoqda...";

//   // DIQQAT: Bu tokenni backend serverda saqlang!
//   // Frontend kodida token saqlash XAVFLI!
//   const BOT_TOKEN = "8344143650:AAGJ0EB5EyIqhPsNtT-t0GoDA9Fh5AFI9WU";
//   const CHAT_ID = "1497284051";
  
//   const message = `
// 📝 Yangi ariza

// 👤 Ismi: ${name}
// 📚 Kurs: ${course}
// 📞 Telefon: ${phone}

// ⏰ Vaqt: ${new Date().toLocaleString("uz-UZ")}
// `;

//   const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: { 
//         "Content-Type": "application/json" 
//       },
//       body: JSON.stringify({
//         chat_id: CHAT_ID,
//         text: message
//       }),
//     });

//     const data = await res.json();
//     console.log("Telegram javobi:", data);

//     if (data.ok === true) {
//       showStatus("✅ Ariza yuborildi! Tez orada bog'lanamiz", false);
//       form.reset();
//       phoneInput.value = "+998";
//     } else {
//       console.error("Telegram xatosi:", data);
//       showStatus("❌ Xatolik yuz berdi, qayta urinib ko'ring", true);
//     }
//   } catch (err) {
//     console.error("Yuborishda xatolik:", err);
//     showStatus("❌ Internet aloqasini tekshiring", true);
//   } finally {
//     submitBtn.disabled = false;
//     submitBtn.textContent = originalText;
//   }
// });

// // ... (Karusel va boshqa kodlaringiz o'zgarishsiz davom etadi)
// // ========================================
// // KARUSEL (CAROUSEL) FUNKSIYALARI
// // ========================================
// const carousel = document.getElementById("carousel");
// const nextBtn = document.getElementById("nextBtn");
// const prevBtn = document.getElementById("prevBtn");

// let isAnimating = false;
// let autoSlideInterval = null;

// // Card kengligini olish
// function getCardWidth() {
//   const card = carousel.querySelector(".course-card");
//   if (!card) return 0;
//   const gap = 20;
//   return card.offsetWidth + gap;
// }

// // Boshlang'ich holatni sozlash
// function initCarousel() {
//   if (!carousel || carousel.children.length === 0) return;
  
//   carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
//   const w = getCardWidth();
//   carousel.style.transform = `translateX(-${w}px)`;
//   carousel.style.transition = "none";
// }

// // Keyingi slaydga o'tish
// function nextSlide() {
//   if (isAnimating || !carousel) return;
//   isAnimating = true;

//   const w = getCardWidth();
//   carousel.style.transition = "transform 0.4s ease";
//   carousel.style.transform = `translateX(-${w * 2}px)`;

//   const handler = () => {
//     carousel.removeEventListener("transitionend", handler);
//     carousel.style.transition = "none";
//     carousel.appendChild(carousel.firstElementChild);
//     carousel.style.transform = `translateX(-${w}px)`;
//     isAnimating = false;
//   };

//   carousel.addEventListener("transitionend", handler);
// }

// // Oldingi slaydga o'tish
// function prevSlide() {
//   if (isAnimating || !carousel) return;
//   isAnimating = true;

//   const w = getCardWidth();
//   carousel.style.transition = "none";
//   carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
//   carousel.style.transform = `translateX(-${w * 2}px)`;

//   requestAnimationFrame(() => {
//     requestAnimationFrame(() => {
//       carousel.style.transition = "transform 0.4s ease";
//       carousel.style.transform = `translateX(-${w}px)`;
//     });
//   });

//   const handler = () => {
//     carousel.removeEventListener("transitionend", handler);
//     isAnimating = false;
//   };

//   carousel.addEventListener("transitionend", handler);
// }

// // Tugmalar uchun event listener
// if (nextBtn) {
//   nextBtn.addEventListener("click", () => {
//     stopAutoSlide();
//     nextSlide();
//     startAutoSlide();
//   });
// }

// if (prevBtn) {
//   prevBtn.addEventListener("click", () => {
//     stopAutoSlide();
//     prevSlide();
//     startAutoSlide();
//   });
// }

// // ========================================
// // AUTO ROTATE FUNKSIYALARI
// // ========================================
// function startAutoSlide() {
//   stopAutoSlide();
//   autoSlideInterval = setInterval(() => {
//     nextSlide();
//   }, 3000);
// }

// function stopAutoSlide() {
//   if (autoSlideInterval) {
//     clearInterval(autoSlideInterval);
//     autoSlideInterval = null;
//   }
// }

// // ========================================
// // DRAG VA SWIPE FUNKSIYALARI
// // ========================================
// let startX = 0;
// let isDragging = false;

// function getX(e) {
//   return e.type.includes("mouse") ? e.pageX : e.changedTouches[0].clientX;
// }

// function startDrag(e) {
//   stopAutoSlide();
//   isDragging = true;
//   startX = getX(e);
//   if (carousel) {
//     carousel.style.cursor = "grabbing";
//   }
// }

// function endDrag(e) {
//   if (!isDragging) return;
//   isDragging = false;

//   if (carousel) {
//     carousel.style.cursor = "grab";
//   }

//   const endX = getX(e);
//   const diff = startX - endX;

//   if (Math.abs(diff) > 50) {
//     if (diff > 0) {
//       nextSlide();
//     } else {
//       prevSlide();
//     }
//   }

//   startAutoSlide();
// }

// // Drag event'larni qo'shish
// if (carousel) {
//   carousel.style.cursor = "grab";
  
//   carousel.addEventListener("mousedown", startDrag);
//   carousel.addEventListener("touchstart", startDrag, { passive: true });
  
//   carousel.addEventListener("mouseup", endDrag);
//   carousel.addEventListener("touchend", endDrag);
//   carousel.addEventListener("mouseleave", endDrag);
  
//   // Drag paytida rasm sudrab ketishini oldini olish
//   carousel.addEventListener("dragstart", (e) => e.preventDefault());
// }

// // ========================================
// // WINDOW RESIZE HANDLERI
// // ========================================
// let resizeTimeout;
// window.addEventListener("resize", () => {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(() => {
//     if (carousel) {
//       const w = getCardWidth();
//       carousel.style.transition = "none";
//       carousel.style.transform = `translateX(-${w}px)`;
//     }
//   }, 100);
// });

// // ========================================
// // FAQ ACCORDION
// // ========================================
// const faqItems = document.querySelectorAll(".faq-item");

// faqItems.forEach(item => {
//   const question = item.querySelector(".faq-question");
  
//   if (question) {
//     question.addEventListener("click", () => {
//       // Boshqa barcha faq'larni yopish
//       faqItems.forEach(otherItem => {
//         if (otherItem !== item) {
//           otherItem.classList.remove("active");
//         }
//       });
      
//       // Bosilgan faq'ni ochish/yopish
//       item.classList.toggle("active");
//     });
//   }
// });

// // ========================================
// // MOBILE MENU (BURGER)
// // ========================================
// const burger = document.getElementById("burger");
// const sideMenu = document.getElementById("sideMenu");
// const overlay = document.getElementById("overlay");

// // Menyuni ochish/yopish
// function toggleMenu() {
//   if (burger) burger.classList.toggle("active");
//   if (sideMenu) sideMenu.classList.toggle("active");
//   if (overlay) overlay.classList.toggle("active");
  
//   // Body scroll'ni boshqarish
//   document.body.style.overflow = sideMenu && sideMenu.classList.contains("active") ? "hidden" : "";
// }

// // Menyuni yopish
// function closeMenu() {
//   if (burger) burger.classList.remove("active");
//   if (sideMenu) sideMenu.classList.remove("active");
//   if (overlay) overlay.classList.remove("active");
//   document.body.style.overflow = "";
// }

// // Burger tugmasi
// if (burger) {
//   burger.addEventListener("click", toggleMenu);
// }

// // Overlay bosilganda
// if (overlay) {
//   overlay.addEventListener("click", closeMenu);
// }

// // Menu linklari bosilganda
// if (sideMenu) {
//   sideMenu.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", () => {
//       closeMenu();
      
//       // Smooth scroll uchun
//       const href = link.getAttribute("href");
//       if (href && href.startsWith("#")) {
//         const target = document.querySelector(href);
//         if (target) {
//           setTimeout(() => {
//             target.scrollIntoView({ behavior: "smooth" });
//           }, 300);
//         }
//       }
//     });
//   });
// }

// // ESC tugmasi bilan yopish
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape" && sideMenu && sideMenu.classList.contains("active")) {
//     closeMenu();
//   }
// });

// // ========================================
// // SAHIFA YUKLANGANDA ISHGA TUSHIRISH
// // ========================================
// document.addEventListener("DOMContentLoaded", () => {
//   // Karuselni ishga tushirish
//   initCarousel();
//   startAutoSlide();
  
//   // Telefon inputiga default qiymat
//   if (phoneInput && !phoneInput.value) {
//     phoneInput.value = "+998";
//   }
  
//   console.log("✅ Sahifa to'liq yuklandi va skript ishladi");
// });

// // ========================================
// // SAHIFA YOPILGANDA TOZALASH
// // ========================================
// window.addEventListener("beforeunload", () => {
//   stopAutoSlide();
// });

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

// ========================================
// FORM SUBMIT VA TELEGRAM GA YUBORISH
// ========================================
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const course = courseSelect.value.trim();

  // Ismni tekshirish
  if (name.length < 3) {
    showStatus("❌ Iltimos, ismingiz kamida 3 harf bo'lsin", true);
    return;
  }

  // Telefonni tekshirish
  const phoneNumber = phone.replace("+998", "");
  if (!/^\d{9}$/.test(phoneNumber)) {
    showStatus("❌ Iltimos, to'g'ri telefon raqam kiriting", true);
    return;
  }

  // Kursni tekshirish
  if (!course) {
    showStatus("❌ Iltimos, kursni tanlang", true);
    return;
  }

  // Submit tugmasini bloklash
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Yuborilmoqda...";

  // DIQQAT: Bu tokenni backend serverda saqlang!
  // Frontend kodida token saqlash XAVFLI!
  const BOT_TOKEN = "8344143650:AAGJ0EB5EyIqhPsNtT-t0GoDA9Fh5AFI9WU";
  const CHAT_ID = "1497284051";
  
  const message = `
📝 Yangi ariza

👤 Ismi: ${name}
📚 Kurs: ${course}
📞 Telefon: ${phone}

⏰ Vaqt: ${new Date().toLocaleString("uz-UZ")}
`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      }),
    });

    const data = await res.json();
    console.log("Telegram javobi:", data);

    if (data.ok === true) {
      showStatus("✅ Ariza yuborildi! Tez orada bog'lanamiz", false);
      form.reset();
      phoneInput.value = "+998";
    } else {
      console.error("Telegram xatosi:", data);
      showStatus("❌ Xatolik yuz berdi, qayta urinib ko'ring", true);
    }
  } catch (err) {
    console.error("Yuborishda xatolik:", err);
    showStatus("❌ Internet aloqasini tekshiring", true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
});

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