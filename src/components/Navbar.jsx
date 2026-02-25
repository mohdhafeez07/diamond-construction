import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const location = useLocation();
  const active = location.pathname;
  const [hide, setHide] = useState(false);

  // Auto-hide when footer visible
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const items = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav
      className={`
        fixed z-50
        bottom-4 md:bottom-auto md:top-6
        inset-x-0
        flex justify-center
        transition-all duration-500 ease-out
        ${hide ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100"}
      `}
    >
      <div
        className="
          pointer-events-auto
          flex items-center gap-1
          px-2 py-2
          rounded-full
          bg-black/40 backdrop-blur-xl
          border border-white/10
          shadow-[0_20px_50px_rgba(0,0,0,0.7)]
          max-w-[95vw]
        "
      >
        {/* LOGO — NEVER SHRINKS */}
        <NavLink
          to="/"
          className="
            relative
            px-3 py-2
            rounded-full
            flex-shrink-0
          "
        >
          <motion.img
            src={logo}
            alt="Diamond Construction"
            layoutId="site-logo"
            className="h-6 md:h-7 object-contain"
          />


          {active === "/" && (
            <motion.div
              layoutId="lamp"
              className="absolute inset-0 bg-gold/10 rounded-full -z-10"
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
            />
          )}
        </NavLink>

        {/* NAV ITEMS */}
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`
                relative
                px-3 md:px-5
                py-2
                rounded-full
                text-[11px] md:text-sm
                tracking-widest
                transition-colors
                ${isActive
                  ? "text-gold"
                  : "text-white/70 hover:text-gold"
                }
              `}
            >
              {/* DESKTOP TEXT */}
              <span className="hidden md:inline">{item.name}</span>

              {/* MOBILE ICON */}
              <span className="md:hidden flex items-center justify-center">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 bg-gold/10 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-1 bg-gold rounded-t-full">
                    <div className="absolute w-12 h-5 bg-gold/30 blur-lg -top-3 -left-2" />
                  </div>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
