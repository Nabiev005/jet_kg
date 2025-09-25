import { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Jet KG </h1>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Башкы бет</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Кызматтар</Link>
        <Link to="/pricing" onClick={() => setMenuOpen(false)}>Баалар</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Байланыш</Link>
      </nav>

      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
