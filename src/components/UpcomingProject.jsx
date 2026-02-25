import { motion } from "framer-motion";
import { MapPin, Home, Layers, Ruler, Download, MessageCircle, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import projectImage from "../assets/images/projects/project3.jpeg";

export default function UpcomingProject() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
            Upcoming <span className="italic text-gold">Project</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-black
            "
          >
            <img
              src={projectImage}
              alt="Diamond Habitat"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-2xl sm:text-3xl mb-4">
              Diamond Habitat
            </h3>

            <p className="text-muted leading-relaxed max-w-xl">
              Diamond Habitat is a thoughtfully designed premium residential
              apartment project located in the heart of Deralakatte, Mangaluru.
              The project blends modern architecture with warm, elegant interiors,
              offering a refined living experience tailored for contemporary families.
            </p>

            <p className="mt-4 text-muted leading-relaxed max-w-xl">
              With carefully planned layouts, ambient lighting, and premium finishes,
              every space is crafted to provide comfort, functionality, and long-term
              value. Diamond Habitat focuses on quality construction, aesthetic harmony,
              and a peaceful lifestyle close to key educational, medical, and commercial hubs.
            </p>

            {/* DETAILS */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              <Detail
                icon={Home}
                label="Configuration"
                value="2 & 3 BHK Apartments"
              />
              <Detail
                icon={Layers}
                label="Structure"
                value="Stilt + Upper Floors"
              />
              <Detail
                icon={Ruler}
                label="Built Quality"
                value="Premium Specifications"
              />
              <Detail
                icon={MapPin}
                label="Location"
                value="Deralakatte, Mangaluru"
              />
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-5">
              
              {/* DOWNLOAD */}
              <a
                href="/brochures/Diamond-Habitat.pdf"
                download
                className="
                  inline-flex items-center gap-2
                  px-7 py-4
                  rounded-full
                  bg-gradient-to-r from-gold to-goldSoft
                  text-bg
                  font-semibold
                  tracking-widest
                  text-sm
                  hover:brightness-110
                  transition
                "
              >
                <Download size={16} />
                DOWNLOAD BROCHURE
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/919742036696?text=Hi%20I%20am%20interested%20in%20Diamond%20Habitat"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-7 py-4
                  rounded-full
                  bg-white/5
                  backdrop-blur-md
                  border border-white/25
                  text-white
                  tracking-widest
                  text-sm
                  hover:border-gold hover:text-gold
                  transition
                "
              >
                <MessageCircle size={16} />
                GET A QUOTE
              </a>

              {/* EXPLORE */}
              <NavLink
                to="/projects#diamond-habitat"
                className="
                  inline-flex items-center gap-2
                  px-7 py-4
                  rounded-full
                  border border-white/20
                  text-white/80
                  tracking-widest
                  text-sm
                  hover:text-gold hover:border-gold
                  transition
                "
              >
                EXPLORE OTHER PROJECTS
                <ArrowRight size={16} />
              </NavLink>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ---------- DETAIL ITEM ---------- */

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="
          flex items-center justify-center
          w-9 h-9
          rounded-md
          bg-gold/10
          text-gold
          shrink-0
        "
      >
        <Icon size={18} strokeWidth={2} />
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-muted">
          {label}
        </p>
        <p className="text-sm sm:text-base font-medium mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}
