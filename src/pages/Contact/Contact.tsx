import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../components/UI/Button";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // 🚀 Backend'ке заказ жиберебиз
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Заказ ийгиликтүү жөнөтүлдү! Биз сиз менен байланышабыз.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("❌ Серверден ката чыкты. Кийин кайра аракет кылыңыз.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Байланышта ката чыкты.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contact}>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Байланыш
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Заказ берүү үчүн төмөнкү форманы толтуруңуз.
      </motion.p>

      <motion.form
        className={styles.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
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
          type="tel"
          name="phone"
          placeholder="Телефон номери"
          value={formData.phone}
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

      {status && (
        <motion.p
          style={{ textAlign: "center", marginTop: "1rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {status}
        </motion.p>
      )}
    </section>
  );
};

export default Contact;
