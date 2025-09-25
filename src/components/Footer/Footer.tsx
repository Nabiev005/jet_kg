import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Jet KG</h3>
          <p>📞 +996 702952200</p>
          <p>✉️ info@jetkg.kg</p>
        </div>
        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} Jet KG. Бардык укуктар корголгон.</p>
      </div>
    </footer>
  );
};

export default Footer;
