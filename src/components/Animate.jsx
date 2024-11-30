import { motion } from 'framer-motion';

const Animate = ({ children }) => {
    //create a react component for animation on scroll using framer motion
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;