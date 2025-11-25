'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiCookingPot, GiHotMeal, GiChiliPepper } from 'react-icons/gi';
import { MdOutlineEco } from 'react-icons/md';

const features = [
  {
    icon: GiCookingPot,
    title: 'Authentic Recipes',
    description: 'Traditional recipes passed down through generations'
  },
  {
    icon: MdOutlineEco,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest, locally sourced ingredients'
  },
  {
    icon: GiChiliPepper,
    title: 'Bold Flavors',
    description: 'Spices and flavors that transport you to the streets of India'
  },
  {
    icon: GiHotMeal,
    title: 'Made with Love',
    description: 'Every dish is prepared with passion and care'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-amber-100/80 max-w-3xl mx-auto leading-relaxed">
            Welcome to Kavitha Street Foods, Brisbane&apos;s premier Indian and Sri Lankan food truck.
            Located at South Bank, we bring authentic street food flavors to the heart of Brisbane.
            Our traditional recipes, passed down through generations, serve the vibrant Indian and
            Sri Lankan communities of Brisbane and all food lovers seeking genuine South Asian cuisine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)"
              }}
              className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-amber-900/30 hover:border-amber-600/50 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <feature.icon className="text-6xl text-amber-500 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-amber-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-amber-100/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
