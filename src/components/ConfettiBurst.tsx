import { motion } from "motion/react";

export function ConfettiBurst({ onComplete }: { onComplete: () => void }) {
  const particles = Array.from({ length: 12 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((i / particles.length) * Math.PI * 2) * 50,
            y: Math.sin((i / particles.length) * Math.PI * 2) * 50,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={i === particles.length - 1 ? onComplete : undefined}
          className="absolute w-2 h-2 rounded-full bg-amber-400"
        />
      ))}
    </div>
  );
}
