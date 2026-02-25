import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import FloatingQuote from "./components/FloatingQuote";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3400); // loader duration (tweak if needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />

      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <FloatingQuote />
          <Footer />
        </>
      )}
    </>
  );
}
