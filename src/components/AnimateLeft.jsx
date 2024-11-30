import { motion } from 'framer-motion'; 

const AnimateLeft = ({ children }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -150 }}  // Changed y to x with negative value
        whileInView={{ opacity: 1, x: 0 }}  // Changed y to x
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.5,  // Slightly increased duration for smoother animation
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    );
  };


export default AnimateLeft