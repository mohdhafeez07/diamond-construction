import { motion } from "framer-motion";

export default function TextReveal({ text, className = "" }) {
  if (!text) return null;

  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
          },
        },
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: {
              y: "0%",
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="inline-block mr-2 overflow-hidden"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
