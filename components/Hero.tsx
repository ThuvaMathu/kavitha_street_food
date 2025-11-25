"use client";

import { motion } from "framer-motion";
import { FaTruck, FaArrowDown } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-amber-950 to-zinc-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-amber-600/30 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-amber-700/30 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1,
          }}
          className="mb-6 inline-block"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/app-logo.png"
              alt="Kavitha Street Foods Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-amber-500 mb-6 drop-shadow-lg tracking-wide"
        >
          Kavitha Street Foods
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-3xl text-amber-100 mb-12 drop-shadow-md font-light"
        >
          Authentic flavors on wheels, bringing joy to every street corner
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(251,191,36,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document
              .getElementById("food-showcase")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-2xl hover:from-amber-600 hover:to-orange-700 transition-all"
        >
          Explore Our Menu
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown className="text-4xl text-amber-500 opacity-70" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
