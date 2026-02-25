import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import StatsGrid from "./ui/StatsGrid";

export default function AboutPreview() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid gap-20 lg:grid-cols-2 items-center">
        
        {/* LEFT — TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-white">
            About <span className="italic text-gold">Us</span>
          </h2>

          <p className="mt-6 text-muted leading-relaxed max-w-xl">
            Diamond Construction is a trusted residential and commercial builder
            in Mangalore, delivering quality-driven spaces with precision,
            integrity, and timeless architectural excellence.
          </p>

          <p className="mt-4 text-muted leading-relaxed max-w-xl">
            With years of on-ground expertise, we craft spaces that balance
            functionality, aesthetics, and durability — built to serve
            generations.
          </p>

          <NavLink
            to="/about"
            className="
              inline-block mt-10
              text-gold tracking-widest text-sm
              border-b border-gold/40
              hover:border-gold
              transition
            "
          >
            READ MORE ABOUT US →
          </NavLink>
        </motion.div>

        {/* RIGHT — STATS (ONLY ONE INSTANCE) */}
        <StatsGrid />
      </div>
    </section>
  );
}
