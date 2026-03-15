'use client';

import axios from "axios";
import { useEffect, useState } from "react";

interface shoporder {
  _id: string
  orderId: string
  orderImage: string
  orderLocation: string
  orderName: string
  orderStatus: string
}

export default function ShopAdminPage() {

  const [data, setdata] = useState<shoporder[]>([])
  const [permissions, setPermissions] = useState<{ [key: string]: "yes" | "no" }>({})

  useEffect(() => {

    const fetchdata = async () => {

      try {

        const res = await axios.get(
          "http://localhost:4000/api/orderdata",
          { withCredentials: true }
        )

        setdata(res.data.findshops)

      } catch (error: any) {

        console.log(error.response?.data?.message)

      }

    }

    fetchdata()

  }, [])


  const sendpermission = async (orderId: string, value: "yes" | "no") => {

    try {

      setPermissions((prev) => ({
        ...prev,
        [orderId]: value
      }))

      const res = await axios.post(
        "http://localhost:4000/api/orderpermission",
        {
          orderId,
          permission: value
        },
        { withCredentials: true }
      )

      console.log(res.data)

    } catch (error: any) {

      console.log(error.response?.data?.message)

    }

  }

  return (
    <div className="w-full min-h-screen p-6 md:p-10">

      <div className="max-w-6xl mx-auto space-y-8">

        {/* Header */}

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Shop Administration
          </h1>
          <p className="text-gray-500">
            Manage shop orders and permissions
          </p>
        </div>


        {/* Orders Table */}

        <div className="bg-white rounded-2xl shadow border overflow-hidden">

          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Orders</h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead>

                <tr className="bg-gray-50 text-xs uppercase text-gray-500">

                  <th className="py-4 px-6">Image</th>
                  <th className="py-4 px-6">Order Name</th>
                  <th className="py-4 px-6">Location</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-center">Permission</th>

                </tr>

              </thead>

              <tbody>

                {data.map((order) => (

                  <tr key={order._id} className="border-t hover:bg-gray-50">

                    <td className="py-4 px-6">

                      <img
                        src={order.orderImage}
                        className="w-16 h-16 object-cover rounded-lg"
                      />

                    </td>

                    <td className="py-4 px-6 font-medium">
                      {order.orderName}
                    </td>

                    <td className="py-4 px-6 text-gray-500">
                      {order.orderLocation}
                    </td>

                    <td className="py-4 px-6">

                      <span className={`px-2 py-1 rounded text-xs font-medium
                      ${order.orderStatus === 'success' && 'bg-green-100 text-green-700'}
                      ${order.orderStatus === 'onProccess' && 'bg-blue-100 text-blue-700'}
                      ${order.orderStatus === 'Pending' && 'bg-yellow-100 text-yellow-700'}
                      `}>

                        {order.orderStatus}

                      </span>

                    </td>


                    <td className="py-4 px-6 text-center">

                      { order.orderStatus !== "success" ? <div className="flex justify-center gap-2">

                        <button
                          onClick={() => sendpermission(order._id, "yes")}
                          className={`px-3 py-1 rounded text-xs font-semibold
                          ${permissions[order._id] === "yes"
                              ? "bg-green-300 text-green-900"
                              : "bg-green-100 text-green-700"
                            }`}
                        >
                          Yes
                        </button>


                        <button
                          onClick={() => sendpermission(order._id, "no")}
                          className={`px-3 py-1 rounded text-xs font-semibold
                          ${permissions[order._id] === "no"
                              ? "bg-red-300 text-red-900"
                              : "bg-red-100 text-red-700"
                            }`}
                        >
                          No
                        </button>

                      </div> : <div>Granted</div>}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )

}