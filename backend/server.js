// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Telegram API'ге запрос жөнөтүү үчүн

const app = express();
const PORT = 5000;

// 🔑 CORS орнотуу
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend домениң
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());  

// 🔐 .env файлдагы токен жана chat_id
import dotenv from "dotenv";
dotenv.config();

const BOT_TOKEN = process.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.VITE_TELEGRAM_CHAT_ID;

// 📩 Заказ API
app.post("/order", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Telegram'га жибериле турган текст
    const text = `📩 Жаңы заказ:\n\n👤 Аты: ${name}\n📱 Телефон: ${phone}\n📧 Email: ${email}\n💬 Билдирүү: ${message}`;

    // Telegram API'ге запрос
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    // Кайра жооп берүү
    res.json({ success: true, message: "Заказ ийгиликтүү жиберилди ✅" });
  } catch (error) {
    console.error("❌ Ката:", error);
    res.status(500).json({ success: false, message: "Сервер катасы" });
  }
});

// 🚀 Серверди иштетүү
app.listen(PORT, () => console.log(`✅ Server иштеп жатат: http://localhost:${PORT}`));
