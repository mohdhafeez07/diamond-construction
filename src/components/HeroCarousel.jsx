import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import avenue from "../assets/images/projects/diamond-avenue.jpg";
import avenueMobile from "../assets/images/projects/diamond-avenue-mobile.jpg";

import habitat from "../assets/images/projects/diamond-habitat.jpg";
import habitatMobile from "../assets/images/projects/diamond-habitat-mobile.jpg";

import queen from "../assets/images/projects/diamond-queen.jpg";
import queenMobile from "../assets/images/projects/diamond-queen-mobile.jpg";

const slides = [
  { desktop: avenue, mobile: avenueMobile },
  { desktop: habitat, mobile: habitatMobile },
  { desktop: queen, mobile: queenMobile },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* DESKTOP IMAGE */}
          <img
            src={slides[index].desktop}
            alt="Diamond Construction Project"
            className="hidden md:block w-full h-full object-cover"
          />

          {/* MOBILE IMAGE */}
          <img
            src={slides[index].mobile}
            alt="Diamond Construction Project"
            className="block md:hidden w-full h-full object-cover"
          />

          {/* SUBTLE LUXURY OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[3px] w-8 transition ${
              i === index ? "bg-gold" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
