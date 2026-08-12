import React from 'react';
import { motion } from 'motion/react';

export const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#fff8fa] flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center flex flex-col items-center"
      >
        <h1 className="font-editorial text-5xl sm:text-7xl text-[#2b141e] font-bold tracking-tight">
          Flora Magia
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1.5, ease: "easeInOut" }}
          className="h-px bg-pink-300 mt-4 max-w-[200px] w-full"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-pink-600 font-serif italic mt-4 text-sm tracking-widest uppercase"
        >
          24/7 Floral Atelier
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
