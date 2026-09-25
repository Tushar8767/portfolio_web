"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Reusable section heading with eyebrow label, h2 title, and optional description.
 */
export default function SectionHeading({ eyebrow, title, children, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <motion.div
      className={`mb-12 max-w-3xl ${alignClass}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <p className="terminal-label mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {children ? (
        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{children}</p>
      ) : null}
    </motion.div>
  );
}

