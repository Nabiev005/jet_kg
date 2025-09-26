import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Loader from "./components/UI/Loader";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader 1.5 секунда чыгып турат
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
