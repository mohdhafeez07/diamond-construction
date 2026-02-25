import { motion } from "framer-motion";

import project1 from "../assets/images/projects/project1.jpeg";
import project2 from "../assets/images/projects/project2.jpeg";
import project3 from "../assets/images/projects/project3.jpeg";
import project4 from "../assets/images/projects/project4.jpeg";

/* ---- PROJECT DATA ---- */
const projects = [
  {
    name: "Diamond Avenue",
    status: "Completed",
    image: project1,
  },
  {
    name: "Diamond Queen",
    status: "Completed",
    image: project2,
  },
  {
    name: "Diamond Habitat",
    status: "Ongoing Construction",
    image: project3,
  },
  {
    name: "Diamond Arcade",
    status: "Completed",
    image: project4,
  },
];

export default function Projects() {
  return (
    <section className="pt-20 md:pt-28 pb-28 md:pb-36 px-6 md:px-16 max-w-7xl mx-auto">
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-heading text-4xl md:text-5xl mb-16"
      >
        Our <span className="italic text-gold">Projects</span>
      </motion.h2>

      {/* GRID */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              rounded-2xl
              overflow-hidden
              bg-white/5
              border border-white/10
              backdrop-blur-md
              hover:border-gold/40
              transition
            "
          >
            {/* IMAGE */}
            <div className="relative aspect-[3/4] bg-black/40">
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* TOP GRADIENT FOR READABILITY */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />

              {/* STATUS BADGE */}
              <div
                className={`
                  absolute top-4 right-4 z-10
                  text-[10px] tracking-widest uppercase
                  px-3 py-1 rounded-full
                  backdrop-blur-xl
                  shadow-lg
                  ${
                    project.status === "Ongoing Construction"
                      ? "bg-gold/80 text-bg"
                      : "bg-black/70 text-white"
                  }
                `}
              >
                {project.status}
              </div>
            </div>

            {/* NAME */}
            <div className="p-6 text-center">
              <h3 className="font-heading text-lg md:text-xl">
                {project.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
