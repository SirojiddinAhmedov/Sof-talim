import 'dotenv/config'; // .env faylini yuklash
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/lead', async (req, res) => {
    const { name, phone, course } = req.body;

    const message = `🔔 **Yangi ariza!**\n\n👤 Ism: ${name}\n📞 Tel: ${phone}\n📚 Kurs: ${course}`;

    const token = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const telegramResponse = await axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown'
        });

        if (telegramResponse.data.ok) {
            res.status(200).json({ ok: true });
        } else {
            res.status(500).json({ ok: false });
        }
    } catch (error) {
        console.error("Telegram error:", error.response ? error.response.data : error.message);
        res.status(500).json({ ok: false, error: "Botga yuborishda xatolik" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server http://localhost:${PORT} portida ishga tushdi`));