import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Box() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <img
        src={dots}
        className="absolute sm:top-10 top-40 sm:left-0 sm:h-[400px] h-[200px] opacity-30"
      />
    </motion.div>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <Box num={1} />
//       <Box num={2} />
//       <Box num={3} />
//     </div>
//   );
// }
