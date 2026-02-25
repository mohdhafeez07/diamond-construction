import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  HardHat,
  Leaf,
  Award,
  ClipboardList,
  Eye,
  Clock,
} from "lucide-react";


export default function About() {
  const viewport = { once: true, amount: 0.2 };

  return (
    <section className="pt-16 md:pt-28 pb-24 md:pb-36 px-6 md:px-16 max-w-6xl mx-auto">
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="font-heading text-4xl md:text-5xl mb-8 md:mb-10 text-white"
      >
        About <span className="italic text-gold">Us</span>
      </motion.h2>

      {/* INTRO */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-muted leading-relaxed max-w-3xl"
      >
        Diamond Construction is a Mangalore-based construction company driven by
        craftsmanship, integrity, and a deep respect for architectural quality.
        We specialise in residential and commercial developments that balance
        structural strength, thoughtful design, and long-term value.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 text-muted leading-relaxed max-w-3xl"
      >
        With years of on-ground experience, our approach is rooted in disciplined
        execution, transparent communication, and an uncompromising commitment
        to quality. Every project we undertake is built not just to meet today’s
        needs, but to endure for generations.
      </motion.p>

      {/* MISSION & VISION */}
      <div className="mt-16 md:mt-20 grid gap-16 md:grid-cols-2">
        <Block
          title="Our Mission"
          highlight="Mission"
          text="To deliver well-crafted spaces that combine structural reliability,
          functional planning, and refined aesthetics — while maintaining the
          highest standards of construction quality, safety, and ethical practice."
        />

        <Block
          title="Our Vision"
          highlight="Vision"
          text="To be recognised as a trusted construction partner known for
          reliability, thoughtful execution, and long-lasting value — shaping
          environments that serve communities with purpose."
        />
      </div>

      {/* CORE VALUES */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-28"
      >
        <h3 className="font-heading text-3xl mb-8 md:mb-10 text-white">
          What <span className="italic text-gold">Defines</span> Us
        </h3>

        <div className="grid gap-10 sm:grid-cols-2">
          <Value
            title="Integrity & Transparency"
            desc="Clear communication, honest commitments, and accountability at every stage of construction."
          />
          <Value
            title="Quality Without Compromise"
            desc="Strict material selection, skilled workmanship, and continuous quality checks."
          />
          <Value
            title="Thoughtful Planning"
            desc="Efficient layouts, practical designs, and long-term functionality."
          />
          <Value
            title="Timely Execution"
            desc="Disciplined project management and realistic timelines."
          />
        </div>
      </motion.div>

      {/* CERTIFICATIONS & COMPLIANCE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-28"
      >
        <h3 className="font-heading text-3xl md:text-4xl mb-10 md:mb-14 text-white text-center">
          Certifications &{" "}
          <span className="italic text-gold">Compliance</span>
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={FileCheck}
            title="Local"
            highlight="Approvals"
            desc="All developments follow municipal and planning authority regulations with proper approvals."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="RERA"
            highlight="Compliance"
            desc="Where applicable, projects adhere to RERA norms ensuring transparency and buyer protection."
          />
          <FeatureCard
            icon={HardHat}
            title="Structural"
            highlight="Safety"
            desc="Designs reviewed by qualified engineers and executed as per IS safety standards."
          />
          <FeatureCard
            icon={Leaf}
            title="Environmental"
            highlight="Practices"
            desc="Responsible construction methods with safety measures and environmental compliance."
          />
        </div>
      </motion.div>


      {/* WHY CLIENTS TRUST US */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 md:mt-32"
      >
        <h3 className="font-heading text-3xl md:text-4xl mb-10 md:mb-14 text-white text-center">
          Why Clients{" "}
          <span className="italic text-gold">Trust Us</span>
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Award}
            title="Proven"
            highlight="Track Record"
            desc="Successfully delivered residential and commercial projects with consistent quality."
          />
          <FeatureCard
            icon={ClipboardList}
            title="Transparent"
            highlight="Process"
            desc="Clear documentation, open communication, and realistic commitments."
          />
          <FeatureCard
            icon={Eye}
            title="Attention"
            highlight="to Detail"
            desc="Every element is monitored from structural execution to final finishes."
          />
          <FeatureCard
            icon={Clock}
            title="Long-Term"
            highlight="Reliability"
            desc="Buildings designed to perform well over time, not just at handover."
          />
        </div>
      </motion.div>


      {/* PHILOSOPHY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-28 max-w-4xl"
      >
        <h3 className="font-heading text-3xl mb-6 text-white">
          Our <span className="italic text-gold">Philosophy</span>
        </h3>

        <p className="text-muted leading-relaxed">
          We view construction as a responsibility — one that shapes how people
          live, work, and interact with their surroundings. Our philosophy is to
          build with intention, respect materials, and never lose sight of the
          people who will occupy the spaces we create.
        </p>

        <p className="mt-6 text-muted leading-relaxed">
          At Diamond Construction, success is measured not by speed alone, but
          by durability, performance, and the trust our buildings earn over
          time.
        </p>
      </motion.div>
    </section>
  );
}

/* ---------- REUSABLE BLOCKS ---------- */

function Block({ title, highlight, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h3 className="font-heading text-2xl mb-4 text-white">
        {title.split(" ")[0]}{" "}
        <span className="italic text-gold">{highlight}</span>
      </h3>
      <p className="text-muted leading-relaxed">{text}</p>
    </motion.div>
  );
}

function Value({ title, desc }) {
  return (
    <div className="border-l border-gold/30 pl-6">
      <h4 className="font-heading text-lg text-white mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function Compliance({ title, desc }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <h4 className="font-heading text-lg text-white mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function Trust({ title, desc }) {
  return (
    <div className="border border-gold/20 rounded-xl p-6">
      <h4 className="font-heading text-lg text-white mb-2">
        {title}
      </h4>
      <p className="text-sm text-muted leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, highlight, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative
        rounded-2xl
        bg-white/5
        border border-white/10
        backdrop-blur-md
        p-8
        hover:border-gold/40
        hover:shadow-[0_0_40px_rgba(184,155,94,0.08)]
        transition
      "
    >
      {/* ICON */}
      <div className="w-12 h-12 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-6">
        <Icon size={22} strokeWidth={2} />
      </div>

      {/* TITLE */}
      <h4 className="font-heading text-lg leading-tight">
        {title}
        <br />
        <span className="italic text-gold">{highlight}</span>
      </h4>

      {/* DESC */}
      <p className="mt-4 text-sm text-muted leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
