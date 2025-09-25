import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/UI/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const text = `📩 Жаңы заказ:\n\n👤 Аты: ${formData.name}\n📧 Email: ${formData.email}\n💬 Билдирүү: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });

      setStatus("✅ Заказ ийгиликтүү жөнөтүлдү!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Ката чыкты. Кийин кайра аракет кылыңыз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Байланыш
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Заказ берүү үчүн төмөнкү форманы толтуруңуз.
      </motion.p>

      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Атыңыз"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Билдирүүңүз"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className={styles.buttonWrapper}>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Жөнөтүлүүдө..." : "Жөнөтүү"}
          </Button>
        </div>
      </motion.form>

      {status && <p style={{ textAlign: "center", marginTop: "1rem" }}>{status}</p>}
    </section>
  );
};

export default Contact;
