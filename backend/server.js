// import 'dotenv/config'; // .env faylini yuklash
// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.post('/api/lead', async (req, res) => {
    
//     console.log("BODY:", req.body);

//     const { name, phone, course } = req.body;

//     const message = `🔔 **Yangi ariza!**\n\n👤 Ism: ${name}\n📞 Tel: ${phone}\n📚 Kurs: ${course}`;

//     const token = process.env.BOT_TOKEN;
//     const chatId = process.env.CHAT_ID;
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;

//     try {
//         const telegramResponse = await axios.post(url, {
//             chat_id: chatId,
//             text: message,
//             parse_mode: 'Markdown'
//         });

//         if (telegramResponse.data.ok) {
//             res.status(200).json({ ok: true });
//         } else {
//             res.status(500).json({ ok: false });
//         }
//     } catch (error) {
//         console.error("Telegram error:", error.response ? error.response.data : error.message);
//         res.status(500).json({ ok: false, error: "Botga yuborishda xatolik" });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`🚀 Server http://localhost:${PORT} portida ishga tushdi`));
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(cors());
app.use(express.json());

// 1) BUNI .env ga ko'chirasiz (prod uchun shart!)
const JWT_SECRET = process.env.JWT_SECRET || "CHANGE_ME_SUPER_SECRET";

// 2) Faqat 2 ta user (misol). Parollar hash bo'lishi kerak.
// Quyidagi hashlarni tayyorlash uchun pastdagi "hash chiqarish" skriptini ishlating.
const USERS = [
  {
    username: "admin",
    passwordHash: "$2a$10$LwiFOOaCq2xdVDzWxzMWau5cj9aLtmPkFClBZEv26gfdIFNhUVeCG"
  },
  {
    username: "manager",
    passwordHash: "$2a$10$zARRbkf61PWJPR3cbuGr0uFkH0x/IZ7JGFc4068JBBVjHupAkDniy"
  }
];


function auth(req, res, next) {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Token yo'q" });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ error: "Token yaroqsiz" });
  }
}

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body || {};
  const user = USERS.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: "Login yoki parol xato" });

  const ok = await bcrypt.compare(password || "", user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Login yoki parol xato" });

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "8h" });
  res.json({ token });
});

app.get("/api/me", auth, (req, res) => {
  res.json({ username: req.user.username, session: new Date().toISOString() });
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
