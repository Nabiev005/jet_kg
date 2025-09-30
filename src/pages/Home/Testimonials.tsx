import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

import ayjanImg from "../../assets/testimonials/ayjan.jpg";
import bekzatImg from "../../assets/testimonials/bekzat.jpg";
import nurizaImg from "../../assets/testimonials/nuriza.jpg";

const testimonials = [
  {
    id: 1,
    name: "Айжан",
    text: "Jet KG аркылуу заказымды 1 күндө алдым! Абдан ыкчам жана ишенимдүү кызмат.",
    img: ayjanImg,
  },
  {
    id: 2,
    name: "Бекзат",
    text: "Регионго чейин эч көйгөйсүз жеткирип беришти. Абдан ыраазымын!",
    img: bekzatImg,
  },
  {
    id: 3,
    name: "Нуриза",
    text: "Баасы да жакшы, кызматы да сапаттуу экен. Рахмат!",
    img: nurizaImg,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2>Кардарлардын пикирлери</h2>
      <div className={styles.grid}>
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={t.img} alt={t.name} className={styles.avatar} />
            <p className={styles.text}>"{t.text}"</p>
            <h4 className={styles.name}>– {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
