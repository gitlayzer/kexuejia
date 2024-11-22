import React from 'react';
import { FaBlog } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-bold text-gradient">优学课堂</span>
        </motion.div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center px-6 py-2 bg-gradient text-white rounded-lg transition-opacity hover:opacity-90"
          onClick={() => window.open('https://blog.devops-engineer.com.cn')}
        >
          <FaBlog className="mr-2" />
          我的博客
        </motion.button>
      </nav>
    </header>
  );
}

export default Header;