'use client'
import Image from "next/image"
import { useState } from "react"

export default function Product() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="p-8 flex flex-col items-center space-y-6 p-[110px]">
      <Image
        src="/r8v2.jfif"
        alt="Silver Audi R8"
        height={500}
        width={300}
        className="rounded-lg "
      />

      <p className="text-lg text-gray-700 max-w-md text-center">
        Sleek, silver Audi R8 – engineered for performance and designed to turn heads. Feel the speed.
      </p>

      <div className="flex items-center space-x-4">
        <label htmlFor="quantity" className="text-gray-700">Qty:</label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-16 text-center border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  )
}
