"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Phone,
  ShieldCheck,
  Tag,
  Zap,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import axios from "axios";

export const shopsData = [
  {
    id: 1,
    name: "Urban Fashion Store",
    rating: 4.6,
    reviewCount: 128,
    location: "Delhi, India",
    contact: "+91 9876543210",
    heroImage: "/tentshop.png",
    description:
      "Urban Fashion Store provides modern clothing collections with premium quality fabrics and affordable pricing. Our goal is to make fashion accessible and comfortable for everyone. We specialize in contemporary styles that blend comfort with sophisticated aesthetics, ensuring you look your best for any occasion.",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?auto=format&fit=crop&q=80&w=800",
    ],
    highlights: [
      { title: "Premium Quality", icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />, desc: "Highest grade fabrics" },
      { title: "Best Pricing", icon: <Tag className="w-6 h-6 text-emerald-600" />, desc: "Value for your money" },
      { title: "Latest Trends", icon: <Zap className="w-6 h-6 text-amber-600" />, desc: "Updated weekly" },
    ],
    services: [
      "Personalized Styling",
      "Trial Rooms",
      "Global Shipping",
      "Easy Returns",
      "Custom Tailoring",
      "VIP Membership",
    ],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Shop() {

  const [data , setdata] = useState()

  
  const shop = shopsData[0];

  return (
    <main className="min-h-screen bg-[#fafaf9] py-20 text-gray-900 selection:bg-indigo-100 selection:text-indigo-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={shop.heroImage}
            alt={shop.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>

        <div className="absolute inset-0 flex items-end pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 w-fit border border-white/30">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-white text-sm font-medium">{shop.rating} Highly Rated</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                {shop.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-300" />
                  {shop.location}
                </span>
                <span className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-300" />
                  {shop.contact}
                </span>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-2xl flex items-center gap-2 group hover:bg-gray-50 transition-colors"
            >
              Contact Shop Owner
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-6 lg:px-12 py-20 space-y-32">

        {/* ================= ABOUT & STATS ================= */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            {...fadeIn}
            className="lg:col-span-12"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-4 max-w-3xl">
                <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">Established Excellence</h2>
                <h3 className="text-4xl font-bold leading-tight">About the Shop</h3>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  {shop.description}
                </p>
              </div>

              {/* HIGHLIGHTS GRID */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
              >
                {shop.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn}
                    className="group bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ================= SERVICES ================= */}
        <section className="space-y-12">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">Our Offerings</h2>
            <h3 className="text-4xl font-bold">Services Available</h3>
            <p className="text-gray-500">We provide a comprehensive range of services tailored to your needs.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {shop.services.map((service, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-indigo-100 hover:bg-indigo-50/30 transition-all cursor-default group"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="font-semibold text-lg">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ================= GALLERY ================= */}
        <section className="space-y-12 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600">Visual Experience</h2>
              <h3 className="text-4xl font-bold">Shop Gallery</h3>
            </div>
            <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all underline decoration-2 underline-offset-8">
              View All Photos <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-9xl h-[600px]">
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 md:row-span-2 overflow-hidden rounded-xl"
            >
              <img src={shop.gallery[0]} className="w-full h-full object-cover" alt="Gallery" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="overflow-hidden rounded-xl"
            >
              <img src={shop.gallery[1]} className="w-full h-full object-cover" alt="Gallery" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="overflow-hidden rounded-xl"
            >
              <img src={shop.gallery[2]} className="w-full h-full object-cover" alt="Gallery" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 overflow-hidden rounded-xl"
            >
              <img src={shop.gallery[3]} className="w-full h-full object-cover" alt="Gallery" />
            </motion.div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] bg-indigo-600 p-12 lg:p-24 overflow-hidden text-center text-white"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-6xl font-bold">Visit Us Today</h3>
            <p className="text-xl text-indigo-100">Experience premium quality and exceptional service at Urban Fashion Store. We're open daily from 10 AM to 9 PM.</p>
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <button className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold shadow-xl hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" /> Contact Now
              </button>
              <div className="flex items-center gap-4">
                <button className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <Facebook className="w-6 h-6" />
                </button>
                <button className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </motion.section>

      </div>

    </main>
  );
}
