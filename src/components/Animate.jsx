import { motion } from "framer-motion";

const Animate = ({ children, time }) => {
  //create a react component for animation on scroll using framer motion
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: time }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: time,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
