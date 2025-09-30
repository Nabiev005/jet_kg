import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import styles from "./Home.module.css";
import Testimonials from "./Testimonials";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.home}>
      {/* Hero секция */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Jet KG 🚀</h1>
        <p>Шаарларга жана региондорго тез, ишенимдүү жеткирүү кызматы</p>
        <Button variant="primary" onClick={() => navigate("/contact")}>
          Заказ берүү
        </Button>
      </motion.div>

      {/* About секция */}
      <motion.div
        className={styles.about}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Jet KG – бул Кыргызстан боюнча жеткирүү кызматын көрсөткөн ишенимдүү компания. 
          Биз кардарларыбыздын убактысын баалайбыз жана товарларды мүмкүн болушунча 
          тез жеткирүүнү максат кылабыз.
        </p>
      </motion.div>

      {/* Features секция */}
      
      <div className={styles.features}>
        {[
          { title: "📦 Бишкек ичинде", text: "150 сомдон баштап жеткирүү." },
          { title: "🚚 Региондорго", text: "Кыргызстандын бардык аймактарына." },
          { title: "⚡ Экспресс", text: "24 саат ичинде жеткирүү!" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      <Testimonials />
    </section>
  );
};

export default Home;
