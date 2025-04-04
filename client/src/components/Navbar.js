import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.nav
      className="flex justify-between items-center p-4 shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="text-2xl font-bold text-primary">
        {process.env.REACT_APP_NAME}
      </Link>
      <div>
        <Link to="/about" className="mx-2 text-secondary">
          About
        </Link>
        <Link to="/contact" className="mx-2 text-secondary">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;