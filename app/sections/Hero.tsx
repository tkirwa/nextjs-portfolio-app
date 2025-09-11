"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Tonny Kirwa
      </motion.h1>
      <p className="text-lg max-w-xl">
        Systems architect & people-first leader building resilient, scalable operations and empowering teams through clarity and automation.
      </p>
    </section>
  );
}
