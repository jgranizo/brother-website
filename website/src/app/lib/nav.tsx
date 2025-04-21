'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaHome, FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center px-8 py-4 text-[#463F3A] transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6EEE1]/70 backdrop-blur-md shadow-md'
          : 'bg-[#F6EEE1]'
      }`}
    >
      {/* Left - Takes up equal flexible space */}
      <div className='flex-1 flex justify-start space-x-4'> {/* flex-1 is on the parent div */}
        <Link href="/" className="flex items-center space-x-2">
          <FaHome />
          <span>Home</span>
        </Link>
        {/* Consider Link component for better SPA navigation */}
        <a href="/contact" className="flex items-center space-x-2">
          <span>Contact</span>
        </a>
        <Link href="/product" className="flex items-center space-x-2">
          <span>Product</span>
        </Link>
      </div>

      {/* Center - Logo Wrapper - Takes only its content width */}
      <div className="flex-none px-4"> {/* flex-none is on the parent div */}
        <Link href="/">
          {/* Adjust height/width as needed for visual balance */}
          <Image src="/box.png" alt="Logo" width={45} height={45}></Image>
        </Link>
      </div>

      {/* Right - Takes up equal flexible space */}
      <div className='flex-1 flex justify-end'> {/* flex-1 is on the parent div */}
        <Link href="/cart" className="flex items-center space-x-2"> {/* Inner link just styles its content */}
          <FaShoppingCart />
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  )
}
