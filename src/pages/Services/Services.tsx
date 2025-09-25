import Card from "../../components/UI/Card";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Кызматтарыбыз</h2>
      <div className={styles.grid}>
        <Card>
          <h3>📦 Бишкек ичинде</h3>
          <p>Шаар ичинде заказдарды тез жеткирип беребиз.</p>
        </Card>
        <Card>
          <h3>🚚 Облустарга</h3>
          <p>Кыргызстандын бардык аймактарына жеткиребиз.</p>
        </Card>
        <Card>
          <h3>⚡ Экспресс</h3>
          <p>Күндүн ичинде 24 сааттык экспресс жеткирүү.</p>
        </Card>
      </div>
    </section>
  );
};

export default Services;
