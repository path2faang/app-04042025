import React from 'react';
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-heading-color">About Us</h1>
      <p className="mt-4 text-lg">Discover more about our mission and vision.</p>
    </motion.div>
  );
};

export default AboutPage;