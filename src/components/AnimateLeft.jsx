import { motion } from 'framer-motion'; 

const AnimateLeft = ({ children, time  , x   }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: x }}  // Reduced initial offset
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.1,
          ease: "easeOut",
          type: "spring",  // Added spring type for smoother animation
          stiffness: 50,    // Lower stiffness for gentler movement
          delay: time *2 // optional: add a delay based on time
        }}
      >
        {children}
      </motion.div>
    );
  };


export default AnimateLeft