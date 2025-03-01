import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const  Footer = () => {
  return (
    <footer className="bg-white text-black py-4 px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-700">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <img src="src/apple-touch-icon.png" alt="Logo" className="h-10" />
        <span className="text-lg font-semibold text-white">CyTry</span>
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-sm mt-3 md:mt-0">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Services</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </nav>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-3 md:mt-0">
        <a href="#" className="hover:text-white transition"><FaFacebook size={18} /></a>
        <a href="#" className="hover:text-white transition"><FaTwitter size={18} /></a>
        <a href="#" className="hover:text-white transition"><FaInstagram size={18} /></a>
        <a href="#" className="hover:text-white transition"><FaLinkedin size={18} /></a>
      </div>

      {/* Copyright */}
      <p className="text-xs mt-3 md:mt-0 text-gray-500">
        © {new Date().getFullYear()} CyCity Inc. All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;
