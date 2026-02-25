import { motion } from "framer-motion";
import {
    Building2,
    Briefcase,
    MapPin,
    ShieldCheck,
    Smile,
    Award,
} from "lucide-react";

const features = [
    {
        icon: Building2,
        title: "Extensive",
        subtitle: "Experience",
        desc: "Decades of on-ground expertise delivering residential and commercial spaces with precision and reliability.",
    },
    {
        icon: Briefcase,
        title: "Diverse",
        subtitle: "Portfolio",
        desc: "From thoughtfully planned homes to functional commercial developments, our work reflects versatility and purpose.",
    },
    {
        icon: MapPin,
        title: "Prime",
        subtitle: "Locations",
        desc: "Projects located in well-connected, fast-growing neighbourhoods designed for long-term value.",
    },
    {
        icon: ShieldCheck,
        title: "Quality",
        subtitle: "Construction",
        desc: "Built with trusted materials, skilled craftsmanship, and uncompromising construction standards.",
    },
    {
        icon: Smile,
        title: "Customer",
        subtitle: "Trust",
        desc: "Transparent communication and timely delivery that builds confidence and lasting relationships.",
    },
    {
        icon: Award,
        title: "Commitment",
        subtitle: "to Excellence",
        desc: "Every project reflects our dedication to ethical practices, consistency, and refined execution.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 text-center"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-white">
                        Why <span className="italic text-gold">Choose Us</span>
                    </h2>


                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
                        Building with Purpose
                    </h2>
                </motion.div>

                {/* FEATURES GRID */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08 }}
                                className="
                  relative
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-md
                  p-8
                  hover:border-gold/40
                  transition
                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                    w-12 h-12
                    rounded-lg
                    flex items-center justify-center
                    bg-gold/10
                    text-gold
                    mb-6
                  "
                                >
                                    <Icon size={22} strokeWidth={2} />
                                </div>

                                {/* TITLE */}
                                <h3 className="font-heading text-lg sm:text-xl leading-tight">
                                    {item.title}
                                    <br />
                                    <span className="text-gold italic">
                                        {item.subtitle}
                                    </span>
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-4 text-muted leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* STATEMENT SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="
            mt-32
            grid gap-12 lg:grid-cols-2
            items-center
          "
                >
                    {/* LEFT */}
                    <div>
                        <h3 className="font-heading text-3xl sm:text-4xl leading-tight">
                            Thoughtfully designed spaces,
                            <br />
                            <span className="text-gold italic">
                                built to stand the test of time.
                            </span>
                        </h3>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        <div className="h-[2px] w-20 bg-gold mb-6" />
                        <p className="text-muted max-w-md leading-relaxed">
                            At Diamond Construction, every project begins with intention —
                            balancing aesthetics, functionality, and durability to create
                            environments that support better living today and enduring value
                            for the future.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
