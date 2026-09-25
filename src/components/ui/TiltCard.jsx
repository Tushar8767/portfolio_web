"use client";

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

/**
 * Subtle 3D tilt card interaction on hover.
 * Kept from existing implementation, refined.
 */
export default function TiltCard({ children, className = "", intensity = 6 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [intensity, -intensity]), {
    stiffness: 160,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-intensity, intensity]), {
    stiffness: 160,
    damping: 20,
  });

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

