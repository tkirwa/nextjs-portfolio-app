"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="MacBook with code on desk"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm Tonny Kirwa
      </motion.h1>

      <p className="text-lg max-w-xl">
        Systems architect & people-first leader building resilient, scalable operations and empowering teams through clarity and automation.
      </p>
    </section>
  );
}
