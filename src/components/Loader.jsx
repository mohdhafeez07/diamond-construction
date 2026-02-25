import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const taglineWords = ["BUILDING", "BEYOND", "BOUNDARIES"];

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center text-center w-full max-w-[320px] sm:max-w-none">

        {/* LOGO — overshoot + settle */}
        <motion.img
          src={logo}
          alt="Diamond Construction"
          layoutId="site-logo"
          initial={{ scale: 1.6 }}
          animate={{ scale: [1.6, 1.08, 1] }}
          transition={{
            duration: 2.4,
            times: [0, 0.7, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-28 sm:w-36 md:w-52 object-contain"
        />

        {/* BRAND NAME */}
        <div className="mt-6 sm:mt-8 leading-none overflow-hidden">

          {/* DIAMOND */}
          <div className="relative inline-block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-heading
                text-2xl
                sm:text-3xl
                md:text-5xl
                tracking-[0.22em]
                relative z-10
                whitespace-nowrap
              "
            >
              DIAMOND
            </motion.div>

            {/* GOLD SHIMMER */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                delay: 1.2,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="
                absolute inset-0
                bg-gradient-to-r
                from-transparent via-gold/50 to-transparent
                skew-x-12
                opacity-70
                pointer-events-none
              "
            />
          </div>

          {/* CONSTRUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.35,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-2
              font-display
              text-sm
              sm:text-base
              md:text-xl
              tracking-[0.32em]
              text-gold
              whitespace-nowrap
            "
          >
            CONSTRUCTION
          </motion.div>
        </div>

        {/* TAGLINE — WORD-BASED (NO MID-WORD BREAKS) */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-3 flex-wrap">
          {taglineWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.2 + i * 0.25,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[11px]
                sm:text-xs
                md:text-sm
                tracking-[0.28em]
                text-muted
                whitespace-nowrap
              "
            >
              {word}
            </motion.span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
