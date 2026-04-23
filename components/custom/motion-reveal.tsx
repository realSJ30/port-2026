"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionRevealProps = HTMLMotionProps<"div">;

export function MotionReveal({
  children,
  transition,
  ...props
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut", ...transition }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
