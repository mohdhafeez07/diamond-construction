import { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";

const testimonials = [
    {
        quote:
            "The construction quality at Diamond Avenue is excellent. From foundation to finishing, everything was delivered exactly as committed.",
        author: "Ramesh Shetty",
        role: "Home Owner",
        project: "Diamond Avenue",
        location: "Deralakatte, Mangalore",
    },
    {
        quote:
            "Diamond Queen stands out for its planning and timely delivery. The team maintained transparency throughout the project.",
        author: "Anita Rao",
        role: "Apartment Owner",
        project: "Diamond Queen",
        location: "Katipalla, Mangalore",
    },
    {
        quote:
            "Diamond Arcade was completed with strong attention to detail. The structural quality and finishing exceeded our expectations.",
        author: "Mohammed Faizal",
        role: "Commercial Unit Owner",
        project: "Diamond Arcade",
        location: "Kinnigoli",
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((i) => (i + 1) % testimonials.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const current = testimonials[activeIndex];

    return (
        <section className="relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* HEADING (same style as About Us) */}
                <div className="mb-20 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl text-white">
                        What Our <span className="italic text-gold">Clients Say</span>
                    </h2>
                </div>

                <div className="relative grid md:grid-cols-[120px_1fr] gap-12 md:gap-20">
                    {/* LEFT RAIL (DESKTOP ONLY) */}
                    <div className="hidden md:flex flex-col items-center">
                        <span className="text-xs tracking-widest uppercase text-muted [writing-mode:vertical-rl]">
                            Testimonials
                        </span>

                        <div className="mt-10 h-32 w-px bg-muted/30 relative">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-gold"
                                animate={{
                                    height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="relative max-w-3xl">
                        {/* STATIC BIG NUMBER */}
                        <div className="hidden md:block absolute -left-24 top-1/2 -translate-y-1/2 text-[16rem] font-number tracking-numbers text-white/5 pointer-events-none">
                            {String(activeIndex + 1).padStart(2, "0")}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.blockquote
                                key={activeIndex}
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -16 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="
                relative
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                font-light
                leading-snug
                text-white
              "
                            >
                                “{current.quote}”
                            </motion.blockquote>
                        </AnimatePresence>

                        {/* AUTHOR + NAV */}
                        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <div>
                                <p className="font-semibold text-white">
                                    {current.author}
                                </p>
                                <p className="text-sm text-muted">
                                    {current.role} ·{" "}
                                    <span className="text-gold">
                                        {current.project}
                                    </span>
                                </p>
                                <p className="text-xs text-muted">
                                    {current.location}
                                </p>
                            </div>

                            {/* NAV BUTTONS */}
                            <div className="flex gap-4">
                                <button
                                    onClick={() =>
                                        setActiveIndex(
                                            (i) => (i - 1 + testimonials.length) % testimonials.length
                                        )
                                    }
                                    className="
      h-12 w-12
      rounded-full
      border border-gold/30
      text-gold/70
      flex items-center justify-center
      transition
      hover:border-gold
      hover:text-gold
    "
                                    aria-label="Previous testimonial"
                                >
                                    ←
                                </button>

                                <button
                                    onClick={() =>
                                        setActiveIndex((i) => (i + 1) % testimonials.length)
                                    }
                                    className="
      h-12 w-12
      rounded-full
      border border-gold/30
      text-gold/70
      flex items-center justify-center
      transition
      hover:border-gold
      hover:text-gold
    "
                                    aria-label="Next testimonial"
                                >
                                    →
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
