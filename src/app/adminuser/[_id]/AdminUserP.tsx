"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useParams } from "next/navigation";

type Order = {
  _id: string;
  orderId: string;
  orderName: string;
  orderLocation: string;
  orderStatus: "confirmed" | "pending" | "onProccess";
  price?: string;
  client?: string;
  category?: string;
  date?: string;
};

export default function AdminUserP() {
  const [activeTab, setActiveTab] =
    useState<"all" | "confirmed" | "pending">("all");

  const [data, setData] = useState<Order[]>([]);
  const { _id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/getshoporder/${_id}`,
          { withCredentials: true }
        );

        const orders = res.data.findorderdata;

        if (Array.isArray(orders)) {
          setData(orders);
        } else {
          setData([orders]);
        }
      } catch (error: any) {
        console.log(error.response?.data?.message);
      }
    };

    fetchdata();
  }, [_id]);

  const filteredOrders = data.filter(
    (order) => activeTab === "all" || order.orderStatus === activeTab
  );

  const stats = [
    { label: "Total Orders", value: data.length, icon: "📊" },
    {
      label: "Confirmed",
      value: data.filter((o) => o.orderStatus === "confirmed").length,
      icon: "✅",
    },
    {
      label: "Pending",
      value: data.filter((o) => o.orderStatus === "pending").length,
      icon: "⏳",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf0] pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-10">
          Admin <span className="text-amber-500">Dashboard</span>
        </h1>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-2xl shadow flex gap-4 items-center"
            >
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <p className="text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TABS */}
        <div className="flex gap-3 mb-6">
          {(["all", "confirmed", "pending"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg font-semibold ${
                activeTab === tab
                  ? "bg-amber-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ORDERS */}
        <div className="grid gap-6">
          <AnimatePresence>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, idx) => (
                <motion.div
                  key={order._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-6 rounded-2xl shadow flex justify-between items-center"
                >
                  <div>
                    <p className="text-xs text-amber-500 font-bold">
                      {order.orderId}
                    </p>

                    <h3 className="text-xl font-bold">
                      {order.orderName}
                    </h3>

                    <p className="text-gray-500">
                      {order.orderLocation}
                    </p>

                    <p className="text-sm text-gray-400">
                      {order.orderStatus}
                    </p>
                  </div>

                  <button className="bg-black text-white px-5 py-2 rounded-lg">
                    Details
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20">
                <h3 className="text-gray-400 text-xl">
                  No orders found
                </h3>
                <button
                  onClick={() => setActiveTab("all")}
                  className="text-amber-600 mt-4"
                >
                  View all orders
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}       