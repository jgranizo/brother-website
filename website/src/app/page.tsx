import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col items-center space-y-4 p-[90]">
        <Image src="/box.png" alt="Box" width={350} height={400} className="rounded-lg" unoptimized />
          </div>

     

      {/* Another Product View */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/r8v2.jfif" alt="Audi R8" width={300} height={200} className="rounded-lg" unoptimized/>
        <button className="px-6 py-2 bg-[#F6EEE1] hover:bg-[#b49d85] text-[#463F3A] "><a href='/product'>View Product</a></button>
      </div>
    </div>
  );
}
