import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col items-center space-y-4 p-[90]">
        <Image src="/r8.jfif" alt="Audi R8" width={400} height={300} className="rounded-lg" unoptimized />
        <h1 className="text-4xl font-bold">Audi R8</h1>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"><a href='/product'>View</a></button>
      </div>

      {/* Product Details */}
      <div className="text-center">
        <p className="text-lg text-gray-700">The reason why you should buy the product</p>
      </div>

      {/* Another Product View */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/r8v2.jfif" alt="Audi R8" width={600} height={400} className="rounded-lg" unoptimized/>
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"><a href='/product'>View</a></button>
      </div>
    </div>
  );
}
