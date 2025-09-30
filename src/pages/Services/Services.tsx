import { motion } from "framer-motion";
import Card from "../../components/UI/Card";
import styles from "./Services.module.css";

// сүрөттөрдү импорттойбуз
import bishkekImg from "../../assets/bishkek.jpg";
import regionsImg from "../../assets/regions.jpg";
import expressImg from "../../assets/express.jpg";

const Services = () => {
  const services = [
    {
      title: "📦 Бишкек ичинде",
      desc: "Шаар ичинде заказдарды тез жеткирип беребиз.",
      img: bishkekImg,
    },
    {
      title: "🚚 Облустарга",
      desc: "Кыргызстандын бардык аймактарына жеткиребиз.",
      img: regionsImg,
    },
    {
      title: "⚡ Экспресс",
      desc: "Күндүн ичинде 24 сааттык экспресс жеткирүү.",
      img: expressImg,
    },
  ];

  return (
    <section className={styles.services}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Кызматтарыбыз
      </motion.h2>

      <div className={styles.grid}>
        {services.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <img src={s.img} alt={s.title} className={styles.image} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
