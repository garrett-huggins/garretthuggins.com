import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import Section from "./Section";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const MotionContainer = {
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  hidden: { opacity: 0, transition: { duration: 0 } },
};

const MotionTech = {
  visible: { opacity: 1, translateX: 0 },
  hidden: { opacity: 0, translateX: 200, transition: { duration: 0 } },
};

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <Section id="technologies" title="Technologies">
      <div className="overflow-hidden">
        <motion.div
          className="flex flex-wrap justify-center"
          ref={ref}
          variants={MotionContainer}
          animate={control}
        >
          <motion.p
            variants={MotionTech}
            className="text-6xl my-2 mx-4 text-cyan-400"
          >
            <SiReact />
          </motion.p>
          <motion.p
            variants={MotionTech}
            className="text-6xl  my-2 mx-4 text-black bg-white rounded-full border"
          >
            <SiNextdotjs />
          </motion.p>
          <motion.p
            variants={MotionTech}
            className="text-6xl  my-2 mx-4 text-blue-700"
          >
            <SiTypescript />
          </motion.p>
          <motion.p
            variants={MotionTech}
            className="text-6xl  my-2 mx-4 text-yellow-400"
          >
            <SiJavascript />
          </motion.p>
          <motion.p
            variants={MotionTech}
            className="text-6xl  my-2 mx-4 text-orange-500"
          >
            <SiHtml5 />
          </motion.p>
          <motion.p
            variants={MotionTech}
            className="text-6xl  my-2 mx-4 text-blue-600"
          >
            <SiCss3 />
          </motion.p>
        </motion.div>
      </div>
    </Section>
  );
}
