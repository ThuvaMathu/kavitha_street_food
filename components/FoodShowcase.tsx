"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface MenuItem {
  image: string;
  name: string;
  description: string;
  price?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "APPETIZERS",
    items: [
      {
        image: "/images/roll.jpg",
        name: "Roll",
        description: "Delicious Sri Lankan rolls with savory fillings",
        price: "$8.99",
      },
      {
        image: "/images/cutlet.jpg",
        name: "Cutlet",
        description: "Crispy golden fried cutlets with spiced filling",
        price: "$6.99",
      },
      {
        image: "/images/patties.jpg",
        name: "Patties",
        description: "Flaky pastry filled with seasoned meat or vegetables",
        price: "$7.99",
      },
      {
        image: "/images/vada.jpg",
        name: "Vada",
        description: "South Indian crispy fried lentil fritters",
        price: "$5.99",
      },
    ],
  },
  {
    category: "MAINS",
    items: [
      {
        image: "/images/chicken-curry.jpg",
        name: "Chicken Curry",
        description: "Tender chicken in aromatic Sri Lankan spices",
        price: "$14.99",
      },
      {
        image: "/images/chicken-devilled.jpg",
        name: "Chicken Devilled",
        description: "Spicy stir-fried chicken with peppers and onions",
        price: "$15.99",
      },
      {
        image: "/images/lamb-curry.jpg",
        name: "Lamb Curry",
        description: "Rich and flavorful slow-cooked lamb curry",
        price: "$18.99",
      },
      {
        image: "/images/goat-curry.jpg",
        name: "Goat Curry",
        description: "Traditional goat curry with authentic spices",
        price: "$17.99",
      },
      {
        image: "/images/prawn-curry.jpg",
        name: "Prawn Curry",
        description: "Succulent prawns in coconut curry sauce",
        price: "$19.99",
      },
      {
        image: "/images/prawn-devilled.jpg",
        name: "Prawn Devilled",
        description: "Spicy prawns stir-fried with vegetables",
        price: "$20.99",
      },
      {
        image: "/images/fish-curry.jpg",
        name: "Fish Curry",
        description: "Fresh fish cooked in tangy tamarind curry",
        price: "$16.99",
      },
      {
        image: "/images/noodles.jpg",
        name: "Noodles",
        description: "Stir-fried noodles with vegetables and spices",
        price: "$12.99",
      },
    ],
  },
  {
    category: "RICE & BREADS",
    items: [
      {
        image: "/images/biriyani.jpg",
        name: "Biriyani",
        description: "Fragrant rice with meat and aromatic spices",
        price: "$15.99",
      },
      {
        image: "/images/fried-rice.jpg",
        name: "Fried Rice",
        description: "Flavorful rice stir-fried with vegetables and eggs",
        price: "$11.99",
      },
      {
        image: "/images/coconut-roti.jpg",
        name: "Coconut Roti",
        description: "Soft roti with sweet coconut filling",
        price: "$4.99",
      },
      {
        image: "/images/kothu-rotti.jpg",
        name: "Kothu Rotti",
        description: "Chopped roti stir-fried with vegetables and meat",
        price: "$13.99",
      },
    ],
  },
  {
    category: "TRADITIONAL BREAKFAST",
    items: [
      {
        image: "/images/puttu.jpg",
        name: "Puttu",
        description: "Steamed rice cake with coconut layers",
        price: "$9.99",
      },
      {
        image: "/images/string-hoppers.jpg",
        name: "String Hoppers",
        description: "Delicate rice noodle nests",
        price: "$8.99",
      },
      {
        image: "/images/idly.jpg",
        name: "Idly",
        description: "Bowl-shaped fermented rice pancakes",
        price: "$7.99",
      },
      {
        image: "/images/dosai.jpg",
        name: "Dosai",
        description: "Crispy South Indian rice and lentil crepes",
        price: "$8.99",
      },
    ],
  },
];

export default function FoodShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="food-showcase"
      ref={ref}
      className="py-20 bg-gradient-to-b from-zinc-900 via-amber-950/20 to-zinc-900 relative overflow-hidden"
    >
      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-900/10 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6 tracking-wide">
            OUR MENU
          </h2>
          <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
            Discover the vibrant flavors of Indian & Sri Lankan cuisine
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Category Title */}
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-amber-500 mb-8 tracking-widest"
              >
                {category.category}
              </motion.h3>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                    className="group"
                  >
                    <div className="bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-amber-900/20 hover:border-amber-700/40 transition-all duration-300 h-full flex flex-col">
                      {/* Image Container */}
                      <div className="relative w-full h-48 overflow-hidden bg-zinc-800">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />

                        {/* Price badge */}
                        {/* {item.price && (
                          <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {item.price}
                          </div>
                        )} */}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-sm text-amber-100/60 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
