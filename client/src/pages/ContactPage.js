import React from 'react';
import { motion } from "motion/react";

const ContactPage = () => {
  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-heading-color">Contact Us</h1>
      <p className="mt-4 text-lg">Feel free to reach out to us anytime.</p>
    </motion.div>
  );
};

export default ContactPage;