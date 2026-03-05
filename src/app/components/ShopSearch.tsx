"use client"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface shop {
  shopcat:string,
  location:string
}
interface props{
  setsearchshop:(data:any) => void
}

export default function ShopSearch({setsearchshop}:props){
  const [data , setdata] = useState<shop>({
    shopcat:"",
    location:""
  })
  const router = useRouter()
 
const handlechanges = (e:React.ChangeEvent<HTMLInputElement>) => {
  const {name , value} = e.target
  setdata((prev) => ({...prev , [name]:value}))
}
  const searchshop = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:4000/api/getshop" ,data, {
        withCredentials:true

      })
console.log(res.data)
setsearchshop(res.data.data)


      
    } catch (error:any) {
      console.log(error.response?.data?.message)
      
    }
  }
    return(
       <section className="w-full bg-[#fffaf0] py-14 px-6 md:px-12">
  
  <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center gap-12">

    {/* LEFT IMAGE */}
    <div className="md:w-1/2  flex justify-center">
      <img 
        src="/searchshop.png"
        className="w-full max-w-xl rounded-2xl object-contain"
        alt="search shop"
      />
    </div>

    {/* RIGHT CARD */}
    <form onSubmit={searchshop} className="md:w-1/2 bg-[#ffd684] rounded-3xl p-8 shadow-lg">

      {/* INPUT AREA */}
      <div className="flex flex-col sm:flex-row gap-4">

        <div className="flex flex-col w-full gap-4">
          <input
            type="text"
            placeholder="Enter shop`"
            onChange={handlechanges}
            name="shopcat"
            value={data.shopcat}
            className="h-11 w-full border border-black/30 rounded-xl px-4 outline-none focus:ring-2 focus:ring-[#bc8925]"
          />

          <input
            type="text"
            onChange={handlechanges}
            name="location"
            value={data.location}
            placeholder="Enter location"
            className="h-11 w-full border border-black/30 rounded-xl px-4 outline-none focus:ring-2 focus:ring-[#bc8925]"
          />
        </div>

        <button type="submit" className="bg-[#bc8925] text-white px-8  rounded-xl hover:scale-105 transition duration-300">
          Search
        </button>

      </div>

      {/* DESCRIPTION */}
      <p className="mt-6 text-gray-700 leading-relaxed">
        Find your desired shop quickly by entering the location and shop name.
        Our smart search helps you discover nearby businesses easily, saving
        your time and connecting you with the right place instantly.
      </p>

    </form>

  </div>
</section>
    )
}