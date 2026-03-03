"use client";
import { Star } from "lucide-react";
import {motion} from "framer-motion"

export default function EventShow() {
  return (
    <section className="w-full bg-[#fffaf0] py-16">
      <div className="max-w-9xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-10 px-6">

        <div className="bg-[#e6d3a3] rounded-2xl relative overflow-hidden shadow-lg w-full max-w-xl">

          <div className="absolute top-6 right-6 z-10">
            <motion.div initial={{x:80 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:1}} className="h-15 w-40 rounded-xl p-2 bg-[#6b4f2a]"><motion.p  initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1}} className="text-white">Contact with your requirment</motion.p></motion.div>
          </div>

          <div className="flex justify-center pt-10">
            <img
              src="/shop.png"
              alt="shop"
              className="w-full max-h-[320px] object-contain"
            />
          </div>

          <div className="px-6 pb-6">
            <h1 className="text-[#5a4123] text-2xl font-semibold mb-3">
              Hello this is a cart shop
            </h1>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  className="text-[#c59a2e] fill-[#c59a2e]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-[#5a4123]">
            Discover Amazing Shopping Experience
          </h2>

          <p className="text-[#7a6a55] leading-relaxed break-words">
            wjddfnowfjneevwjddfnowfjneevwjddfnowfjneevwjddfnowfjneevwjddfnowfjneev
            wjddfnowfjneevwjddfnowfjneevwjddfnowfjneevwjddfnowfjneevwjddfnowfjneev
            wjddfnowfjneevwjddfnowfjneevwjddfnowfjneevwjddfnowfjneevwjddfnowfjneev
          </p>

          <button className="bg-[#6b4f2a] text-[#fffaf0] px-6 py-3 rounded-xl hover:scale-105 transition">
            Explore Now
          </button>
        </div>

      </div>
    </section>
  );
}