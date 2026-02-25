import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const itemText =
  "text-sm leading-relaxed tracking-wide text-muted";

export default function Footer() {
  return (
    <footer id="site-footer" className="relative">
      <div className="relative rounded-t-[36px] overflow-hidden border-t border-gold/20 bg-gradient-to-br from-black/80 via-black/60 to-gold/10 backdrop-blur-xl">

        {/* Grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        {/* Tubelight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-[2px] bg-gold rounded-full">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[260px] h-[36px] bg-gold/25 blur-2xl" />
        </div>

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-20">
          {/* LOGO UNDER TUBELIGHT (MOBILE ONLY) */}
          <motion.div
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-12 md:hidden"
          >
            <img
              src={logo}
              alt="Diamond Construction"
              className="h-16 object-contain"
            />
          </motion.div>

          <div className="grid gap-14 md:gap-16 md:grid-cols-3 items-start text-center md:text-left">

            {/* QUICK LINKS */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-xs tracking-[0.32em] text-white/80 mb-8">
                QUICK LINKS
              </p>

              <ul className="space-y-4">
                {["About", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className={`${itemText} hover:text-gold transition inline-flex`}
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* LOGO (DESKTOP ONLY) */}
            <motion.div
              custom={2}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="hidden md:flex justify-center"
            >
              <img
                src={logo}
                alt="Diamond Construction"
                className="h-20 object-contain"
              />
            </motion.div>

            {/* CONTACT */}
            <motion.div
              custom={3}
              variants={reveal}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-xs tracking-[0.32em] text-white/80 mb-8">
                CONTACT US
              </p>

              <ul className="space-y-4">
                {/* ADDRESS */}
                <li>
                  <a
                    href="https://maps.app.goo.gl/WwQDQkzUKVDszupQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-start gap-3 text-left ${itemText} hover:text-gold transition max-w-[320px]`}
                  >
                    <MapPin className="text-gold mt-[3px] shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    <span className="text-center md:text-left">
                      Diamond Construction, Shop No. 301<br />
                      Lotus Paradise Centre,<br />
                      Kodailbail, Mangaluru – 575003
                    </span>
                  </a>
                </li>

                {/* CALL */}
                <li>
                  <a
                    href="tel:+917619319696"
                    className={`flex items-center gap-3 justify-center md:justify-start ${itemText} hover:text-gold transition`}
                  >
                    <Phone className="text-gold shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    <span>+91 76193 19696</span>
                  </a>
                </li>

                {/* EMAIL */}
                <li>
                  <a
                    href="mailto:diamondconstruction6696@gmail.com"
                    className={`flex items-center gap-3 justify-center md:justify-start ${itemText} hover:text-gold transition break-all`}
                  >
                    <Mail className="text-gold shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    <span>diamondconstruction6696@gmail.com</span>
                  </a>
                </li>

                {/* WHATSAPP */}
                <li>
                  <a
                    href="https://wa.me/919742036696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 justify-center md:justify-start ${itemText} hover:text-gold transition`}
                  >
                    <FaWhatsapp className="text-gold shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                    <span>+91 97420 36696</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gold/15">
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row gap-3 justify-between text-[11px] tracking-widest text-muted text-center md:text-left">
            <span>© {new Date().getFullYear()} DIAMOND CONSTRUCTION</span>
            <span>BUILDING BEYOND BOUNDARIES</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
