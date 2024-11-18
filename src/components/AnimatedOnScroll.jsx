import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedOnScroll = ({
  children,
  initial = { opacity: 0, y: 140 }, // Default: Start from bottom
  animate = { opacity: 1, y: 0 },  // Default: Move to original position
  transition = { duration: 0.5 },  // Default: Animation duration
  className = "", // Additional styling
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation to repeat
    threshold: 0.1, // Trigger animation when 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={initial} // Initial state
      animate={inView ? animate : initial} // Animate only when in view
      transition={transition} // Animation speed and type
      className={className} // Apply custom styles
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
