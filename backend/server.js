import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Agar frontend va backend boshqa domen/portda bo'lsa kerak bo'ladi
app.use(cors());

// JSON body qabul qilish
app.use(express.json());

const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

if (!BOT_TOKEN || !CHAT_ID) {
  console.error("❌ .env ichida BOT_TOKEN yoki CHAT_ID topilmadi");
}

app.get("/health", (req, res) => {
  res.json({ ok: true, message: "Server ishlayapti ✅" });
});

// Frontend shu endpointga yuboradi
app.post("/api/lead", async (req, res) => {
  try {
    const { name, phone, course } = req.body || {};

    // Minimal validatsiya (frontenddan kelganini ham tekshiramiz)
    if (!name || String(name).trim().length < 3) {
      return res.status(400).json({ ok: false, error: "Ism noto‘g‘ri" });
    }

    const phoneStr = String(phone || "").trim();
    // "+998" bilan yoki shunchaki raqam bilan kelishi mumkin
    const cleaned = phoneStr.replace(/\s/g, "");
    const phoneDigits = cleaned.startsWith("+998")
      ? cleaned.replace("+998", "")
      : cleaned;

    if (!/^\d{9}$/.test(phoneDigits)) {
      return res.status(400).json({ ok: false, error: "Telefon noto‘g‘ri" });
    }

    if (!course || String(course).trim().length < 2) {
      return res.status(400).json({ ok: false, error: "Kurs tanlanmagan" });
    }

    const message =
      `📝 Yangi ariza\n\n` +
      `👤 Ismi: ${String(name).trim()}\n` +
      `📚 Kurs: ${String(course).trim()}\n` +
      `📞 Telefon: +998${phoneDigits}\n\n` +
      `⏰ Vaqt: ${new Date().toLocaleString("uz-UZ")}`;

    const tgUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const tgRes = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const tgData = await tgRes.json();

    if (tgData.ok === true) {
      return res.json({ ok: true });
    }

    console.error("Telegram xatosi:", tgData);
    return res.status(502).json({ ok: false, error: "Telegramga yuborilmadi" });
  } catch (err) {
    console.error("Server xatosi:", err);
    return res.status(500).json({ ok: false, error: "Server xatosi" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend ishga tushdi: http://localhost:${PORT}`);
});
