import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Card from "../../components/UI/Card";
import Button from "../../components/UI/Button";
import styles from "./Pricing.module.css";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    { title: "Бишкек ичинде", price: "150 сомдон баштап" },
    { title: "Региондорго", price: "Аралыкка жараша эсептелет" },
    { title: "Экспресс", price: "24 саат ичинде жеткирүү" },
  ];

  return (
    <section className={styles.pricing}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Баалар
      </motion.h2>

      <div className={styles.grid}>
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3>{plan.title}</h3>
              <p>{plan.price}</p>
              <Button variant="primary" onClick={() => navigate("/contact")}>
                Заказ берүү
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
