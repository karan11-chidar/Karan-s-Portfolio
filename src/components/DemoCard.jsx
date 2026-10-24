import React, { useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

export const DemoCard = () => {
  // Card element ka direct reference paane ke liye (No React Re-renders)
  const cardRef = useRef(null);

  // GSAP Mouse Move Handler (Physics Execution)
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Direct DOM transformation via GSAP
    gsap.to(cardRef.current, {
      rotateY: x * 0.1,
      rotateX: -y * 0.1,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  // GSAP Mouse Leave Handler (Reset position)
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    // Motion handles standard entry animation on mount
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-8 bg-slate-900 border border-slate-800 rounded-2xl w-80 text-center shadow-xl cursor-pointer"
      style={{ perspective: 1000 }}
    >
      {/* GSAP handles heavy interactive mouse tilt */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="p-6 bg-slate-800/80 rounded-xl border border-blue-500/30"
      >
        <h3 className="text-lg font-bold text-blue-400">GSAP + Motion Card</h3>
        <p className="text-xs text-slate-400 mt-2">
          Entry Motion se huyi, tilt GSAP se ho raha hai.
        </p>
      </div>
    </motion.div>
  );
};
