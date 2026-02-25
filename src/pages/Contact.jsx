import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pt-20 md:pt-40 px-6 md:px-16 max-w-7xl mx-auto pb-32">
      
      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2 className="font-heading text-4xl md:text-5xl mb-6">
          Contact <span className="italic text-gold">Us</span>
        </h2>

        <p className="text-muted max-w-3xl leading-relaxed">
          At Diamond Construction, every enduring structure begins with a clear
          conversation. Whether you’re planning a residence, evaluating a
          commercial opportunity, or seeking expert guidance — our team is here
          to assist you with transparency and confidence.
        </p>
      </motion.div>

      {/* CONTACT METHODS */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 mb-28">
        {/* CARD */}
        {[
          {
            icon: <Phone size={22} />,
            title: "Call Us",
            desc: "Speak directly with our team for project discussions and site visits.",
            value: "+91 76193 19696",
            href: "tel:+917619319696",
          },
          {
            icon: <FaWhatsapp size={22} />,
            title: "WhatsApp",
            desc: "Quick queries, updates, and brochure requests via WhatsApp.",
            value: "+91 97420 36696",
            href: "https://wa.me/919742036696",
            external: true,
          },
          {
            icon: <Mail size={22} />,
            title: "Email Us",
            desc: "For detailed discussions, documentation, or collaborations.",
            value: "diamondconstruction6696@gmail.com",
            href: "mailto:diamondconstruction6696@gmail.com",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="
              h-full
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
              flex flex-col
              justify-between
              hover:border-gold/40
              transition
            "
          >
            <div>
              <div className="mb-6 flex items-center justify-start text-gold">
                {item.icon}
              </div>

              <h3 className="font-heading text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            <p className="mt-6 text-gold tracking-widest text-sm break-all">
              {item.value}
            </p>
          </motion.a>
        ))}
      </div>

      {/* OFFICE + MAP */}
      <div className="grid gap-16 lg:grid-cols-2 items-start">
        {/* OFFICE TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-heading text-3xl mb-6">
            Our <span className="italic text-gold">Office</span>
          </h3>

          <div className="h-[2px] w-20 bg-gold mb-6" />

          <p className="text-muted leading-relaxed max-w-lg mb-8">
            Our office is located in Mangalore, supporting projects across key
            residential and commercial corridors. Every development is grounded
            in local expertise, regulatory compliance, and long-term value.
          </p>

          <div className="flex gap-4 items-start">
            <MapPin className="text-gold mt-[3px] shrink-0" />
            <p className="text-muted leading-relaxed">
              Diamond Construction<br />
              Shop No. 301, Lotus Paradise Centre<br />
              Kodailbail, Mangaluru – 575003
            </p>
          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            relative
            w-full
            h-[360px] sm:h-[420px]
            rounded-2xl
            overflow-hidden
            border border-white/10
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31115.96172169027!2d74.81079991083983!3d12.875846699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b857a848e0f%3A0x407904a62332f671!2sLOTUS%20PARADISE%20CENTRE!5e0!3m2!1sen!2sin!4v1768132590722!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Diamond Construction Office Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
