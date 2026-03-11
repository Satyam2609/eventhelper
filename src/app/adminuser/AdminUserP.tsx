"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useParams } from "next/navigation";

// Mock data for orders
const ORDERS = [
    {
        id: "ORD-2024-001",
        event: "Luxe Summer Wedding",
        date: "June 24, 2026",
        location: "Grand Palace Hotel",
        status: "confirmed",
        price: "$4,500",
        client: "Anita Sharma",
        category: "Wedding",
    },
    {
        id: "ORD-2024-002",
        event: "Tech Innovators Summit",
        date: "July 15, 2026",
        location: "Global Convention Center",
        status: "pending",
        price: "$12,000",
        client: "Rajesh Kumar",
        category: "Corporate",
    },
    {
        id: "ORD-2024-003",
        event: "Boho Birthday Bash",
        date: "August 02, 2026",
        location: "Sunset Garden",
        status: "confirmed",
        price: "$2,200",
        client: "Priya Varma",
        category: "Party",
    },
    {
        id: "ORD-2024-004",
        event: "Artisanal Food Festival",
        date: "September 10, 2026",
        location: "Central Park Square",
        status: "pending",
        price: "$8,500",
        client: "Vikram Singh",
        category: "Festival",
    },
];



export default function AdminUserP() {
    const [activeTab, setActiveTab] = useState<"all" | "confirmed" | "pending">("all");
    const [data , setdata] = useState()
    const {_id} = useParams()

    useEffect(() => {
        const fetchdata = async() => {
            try {
                const res = await axios.get(`http://localhost:4000/api/getshoporder/${_id}` , {
                    withCredentials:true
                })

                setdata(res.data)
                
                
            } catch (error:any) {
                console.log(error.response?.data?.message)
                
            }
        }
        fetchdata()
    },[])

    const filteredOrders = ORDERS.filter(
        (order) => activeTab === "all" || order.status === activeTab
    );

    const stats = [
        { label: "Total Orders", value: ORDERS.length, icon: "📊" },
        { label: "Confirmed", value: ORDERS.filter(o => o.status === "confirmed").length, icon: "✅" },
        { label: "Pending", value: ORDERS.filter(o => o.status === "pending").length, icon: "⏳" },
    ];

    return (
        <div className="min-h-screen bg-[#fffaf0] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            {/* BACKGROUND DECORATION */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* HEADER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Admin <span className="text-amber-500">Dashboard</span>
                    </h1>
                    <p className="mt-2 text-slate-600 text-lg">Manage your event bookings and track order status.</p>
                </motion.div>

                {/* STATS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-amber-100 shadow-xl shadow-amber-500/5 flex items-center gap-4"
                        >
                            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl">
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-slate-500 font-medium">{stat.label}</p>
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* TABS & FILTERS */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                    <div className="flex bg-white/50 backdrop-blur-sm p-1.5 rounded-2xl border border-amber-100/50">
                        {(["all", "confirmed", "pending"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-xl font-bold transition-all ${activeTab === tab
                                        ? "bg-amber-500 text-white shadow-lg shadow-amber-500/30"
                                        : "text-slate-600 hover:bg-amber-50"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="text-sm font-medium text-slate-500">
                        Showing <span className="text-amber-600">{filteredOrders.length}</span> orders
                    </div>
                </div>

                {/* ORDERS LIST */}
                <div className="grid grid-cols-1 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order, idx) => (
                                <motion.div
                                    key={order.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group bg-white/80 backdrop-blur-md p-6 rounded-[2rem] border border-white shadow-2xl shadow-amber-900/5 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-amber-200 transition-all"
                                >
                                    <div className="flex items-center gap-6 w-full md:w-auto">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl shrink-0 ${order.status === 'confirmed' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'
                                            }`}>
                                            {order.category === 'Wedding' ? '💍' : order.category === 'Corporate' ? '🏢' : '🎉'}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{order.id}</span>
                                                <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${order.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    {order.status}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800">{order.event}</h3>
                                            <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                                                <span className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                    {order.location}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                    {order.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row md:flex-row items-center gap-8 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0">
                                        <div className="text-right">
                                            <p className="text-xs font-semibold text-slate-400 uppercase">Client</p>
                                            <p className="font-bold text-slate-700">{order.client}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs font-semibold text-slate-400 uppercase">Amount</p>
                                            <p className="text-2xl font-black text-slate-900">{order.price}</p>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-6 py-3 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-lg"
                                        >
                                            Details
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="py-20 text-center bg-white/50 backdrop-blur-sm rounded-[2rem] border border-dashed border-slate-300"
                            >
                                <div className="text-5xl mb-4">📭</div>
                                <h3 className="text-xl font-bold text-slate-400">No orders found in this category</h3>
                                <button onClick={() => setActiveTab('all')} className="mt-4 text-amber-600 font-bold hover:underline">View all orders</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
