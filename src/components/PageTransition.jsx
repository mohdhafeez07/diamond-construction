import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
