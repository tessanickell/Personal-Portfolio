import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function RedoAnimText() {
  const textIndex = useMotionValue(0);
  const texts = [
    "Full Stack Developer...",
    "Coffee Addict...",
    "Professional Bug Exterminator...",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 2.5,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <motion.span className="inline">{displayText}</motion.span>
      <CursorBlinker />
    </div>
  );
}

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-12 w-[2px] translate-y-1 bg-[#B988C5]"
    />
  );
}
