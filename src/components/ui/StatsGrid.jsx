import { motion } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Years of Excellence in Mangalore",
  },
  {
    value: "10+",
    label: "Major Milestones Achieved",
  },
  {
    value: "50,000+",
    label: "Sq Ft Area Executed in Projects",
  },
  {
    value: "500+",
    label: "Happy Customers",
  },
];

export default function StatsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        w-full
        max-w-xl lg:max-w-2xl
        mx-auto
        rounded-3xl
        overflow-hidden
        bg-gradient-to-br from-black/70 via-black/60 to-gold/10
        backdrop-blur-xl
        border border-gold/20
        shadow-[0_0_60px_rgba(184,155,94,0.12)]
      "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {stats.map((item, i) => (
          <div
            key={i}
            className="
              relative
              px-6 py-8
              sm:px-8 sm:py-10

              border-gold/20
              border-b border-r

              /* FIX EDGES ONLY */
              sm:[&:nth-child(2n)]:border-r-0
              [&:nth-child(3)]:sm:border-b-0
              [&:nth-child(4)]:sm:border-b-0
            "
          >
            {/* NUMBER */}
            <motion.p
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-number
                text-gold
                font-semibold
                tracking-tight
                leading-none

                text-3xl
                sm:text-4xl
                lg:text-5xl
              "
            >
              {item.value}
            </motion.p>

            {/* LABEL */}
            <p
              className="
                mt-3
                text-xs sm:text-sm
                uppercase
                tracking-widest
                text-muted
                max-w-[14rem]
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
