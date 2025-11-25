"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";
import siteConfig from "@/utils/config";

const contactInfo = [
  {
    icon: FaPhoneAlt,
    title: "Call Us",
    details: siteConfig.contact.phone,
    color: "text-amber-500",
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Find Us",
    details: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.suburb}`,
    color: "text-amber-500",
    href: `https://maps.google.com/?q=${encodeURIComponent(
      siteConfig.contact.address.full
    )}`,
  },
  {
    icon: FaClock,
    title: "Operating Hours",
    details: siteConfig.hours.display,
    color: "text-amber-500",
  },
  {
    icon: FaEnvelope,
    title: "Email Us",
    details: siteConfig.contact.email,
    color: "text-amber-500",
    href: `mailto:${siteConfig.contact.email}`,
  },
];

const socialLinks = [
  {
    icon: FaFacebook,
    name: "Facebook",
    color: "hover:text-amber-500",
    href: siteConfig.social.facebook,
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    color: "hover:text-amber-500",
    href: siteConfig.social.instagram,
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    color: "hover:text-amber-500",
    href: siteConfig.social.tiktok,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
            We&apos;d love to hear from you! Visit our food truck or reach out
            to us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const CardWrapper = info.href ? "a" : "div";
            const cardProps = info.href
              ? {
                  href: info.href,
                  target: info.href.startsWith("http") ? "_blank" : undefined,
                  rel: info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined,
                }
              : {};

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
                }}
                className="h-full"
              >
                <CardWrapper
                  {...cardProps}
                  className="bg-zinc-900/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center border border-amber-900/30 hover:border-amber-600/50 transition-all block h-full"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4"
                  >
                    <info.icon className={`text-5xl ${info.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-amber-100/60 leading-relaxed">
                    {info.details}
                  </p>
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-amber-500 mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-5xl text-amber-100 ${social.color} transition-colors`}
                aria-label={social.name}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t-2 border-amber-900/30 text-center"
        >
          {/* Logo in Footer */}
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16">
              <Image
                src="/logos/logo.svg"
                alt="Kavitha Street Foods Logo"
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>
          <p className="text-amber-100/60 text-lg mb-2">
            <span className="font-bold text-amber-400">{siteConfig.name}</span>
          </p>
          <p className="text-amber-100/60 text-sm mb-2">
            {siteConfig.contact.address.full}
          </p>
          <p className="text-amber-100/60 text-lg mb-4">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Made with{" "}
            <span className="text-amber-500">❤️</span> for food lovers in
            Brisbane
          </p>

          {/* ExcelBees Credit */}
          <p className="text-amber-100/30 text-xs">
            Proudly supported by{" "}
            <a
              href="https://www.excelbees.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400/60 hover:text-amber-400 transition-colors underline"
            >
              ExcelBees
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
