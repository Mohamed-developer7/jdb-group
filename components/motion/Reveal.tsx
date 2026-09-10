"use client";

import { motion } from "framer-motion";
import { revealUp, viewportOnce } from "@/lib/motion";
import { ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={revealUp}
    >
      {children}
    </motion.div>
  );
}
