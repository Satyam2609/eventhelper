"use client"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ShopAdminPage from "./ShopAdminPage"

export default function shopadmin() {
  return (
    <div className="bg-[#fffaf0]">
      <Navbar/>
      <ShopAdminPage />
      <Footer/>

    </div>
  )
}
