"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";

interface register {
  username:string,
  email:string,
  password:string,
  profileimage:null
}

export default function SignUp() {
  const [formdata , setformdata] = useState<register>({
    username:"",
    email:"",
    password:"",
    profileimage:null
  })

  const handlechanges = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name , value , type , files} = e.target;
    setformdata((prev) => ({...prev , [name]: type === "file" ? files : value}))

  }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const formdatasend = new FormData();

    formdatasend.append("username", formdata.username);
    formdatasend.append("email", formdata.email);
    formdatasend.append("password", formdata.password);

    if (formdata.profileimage) {
      formdatasend.append("profileimage", formdata.profileimage);
    }

    const res = await axios.post(
      "http://localhost:4000/api/register",
      formdatasend,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("user register successfully");

  } catch (error:any) {
    console.log(error.response?.data?.message);
  }
};

  const cards = [
    { id: 1, x: "5%", y: "75%", delay: 0.2, duration: 4    , opacity:0.2},
    { id: 2, x: "12%", y: "25%", delay: 0.4, duration: 5   , opacity:0.4},
    { id: 3, x: "20%", y: "8%", delay: 0.1, duration: 3.8  , opacity:0.7},
    { id: 4, x: "85%", y: "65%", delay: 0.6, duration: 4.5 , opacity:0.6},
    { id: 5, x: "75%", y: "15%", delay: 0.3, duration: 4.2 , opacity:0.2},
    { id: 6, x: "40%", y: "85%", delay: 0.5, duration: 5.2 , opacity:0.5},
    { id: 7, x: "60%", y: "10%", delay: 0.7, duration: 4.8 , opacity:0.7},
    { id: 8, x: "90%", y: "35%", delay: 0.9, duration: 5.5 , opacity:0.2},
    { id: 9, x: "63%", y: "35%", delay: 0.9, duration: 5.5 , opacity:0.3},
    { id: 10, x: "26%", y: "35%", delay: 0.9, duration: 5.5 , opacity:0.6},
    { id: 11, x: "20%", y: "75%", delay: 0.9, duration: 5.5 , opacity:0.3},
    { id: 12, x: "90%", y: "35%", delay: 0.9, duration: 5.5 , opacity:0.7},
  ];

  return (
    <div className="min-h-screen bg-[#fffaf0] flex flex-col items-center justify-center px-4 relative overflow-hidden">

      <h1 className="text-4xl font-semibold text-center max-w-xl mb-10 z-10">
        Register And Manage Your Event Professionally
      </h1>

      {/* FLOATING CARDS */}
      {cards.map((card) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: card.opacity,
            y: [0, -20, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: card.delay },
            y: {
              duration: card.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            },
          }}
          className="absolute rotate-12"
          style={{ left: card.x, top: card.y }}
        >
          <div className="flex flex-col items-center gap-3 bg-white shadow-lg rounded-xl px-4 py-3 w-28 border">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
              🏪
            </div>
            <h1 className="text-sm font-semibold text-gray-800">
              My Shop
            </h1>
          </div>
        </motion.div>
      ))}

      {/* FORM */}
      <form className="w-full max-w-md p-8 rounded-2xl space-y-5 z-10">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="border px-4 py-2 mt-2 rounded-xl outline-none focus:ring-2 focus:ring-black/20"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 mt-2 rounded-xl outline-none focus:ring-2 focus:ring-black/20"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border px-4 py-2 mt-2 rounded-xl outline-none focus:ring-2 focus:ring-black/20"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </form>

    </div>
  );
}