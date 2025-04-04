import React from 'react';
import { motion } from "motion/react";

const HomePage = () => {
  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-heading-color">Welcome to Our University</h1>
      <p className="mt-4 text-lg">Explore our campus, courses, and services.</p>
    </motion.div>
  );
};

export default HomePage;