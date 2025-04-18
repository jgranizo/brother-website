'use client'
import Image from "next/image"
import { useState } from "react"

export default function Product() {
  const [add, setAdd] = useState(true);
 
  return (
    <div>
    <div className="w-full max-w-5xl mx-auto p-4 ">
  <div className="flex flex-row  items-center justify-center gap-8 lg:pl-40  pt-20 md:pl-20 " >
    <div>
    <Image
      src="/r8v2.jfif"
      alt="Silver Audi R8"
      height={500}
      width={500}
      className="rounded-lg mb-0"
      unoptimized
    />
    <p className="text-center  mt-6 ">Description</p>
    </div>
<div className="flex flex-col  items-start justify-between w-full  gap-1 px-4 pl-45  py-8">
        <p className="font-bold text-lg text-gray-700 text-center md:text-left">
        Monthly Subscription
      </p>
      <p>Starting: $39.99</p>
      <p className="text-xs">Free Shipping</p>

      

      {
        add?
      <button onClick={()=>{setAdd(false)}} className="cursor-pointer  mt-60 px-6 py-2 bg-[#dbcfc3] hover:bg-[#b49d85] text-[#463F3A] shadow-md ">
      Add To Cart
    </button>
    :
    <button onClick={()=>{setAdd(true)}} className="cursor-pointer  mt-60 px-6 py-2 bg-[#dbcfc3] hover:bg-[#b49d85] text-[#463F3A] shadow-md ">
      Remove From Cart
    </button>
}
      
    </div>
  </div>

 
</div>

</div>

  )
}
