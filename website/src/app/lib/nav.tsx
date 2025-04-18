'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaHome, FaShoppingCart } from 'react-icons/fa'

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
    className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 text-[#463F3A] transition-all duration-300 ${
      scrolled
        ? 'bg-[#F6EEE1]/70 backdrop-blur-md shadow-md'
        : 'bg-[#F6EEE1]'
    }`}
    
    
    >
      {/* Left */}
      <div className='flex space-x-4'>
        <Link href="/" className="flex items-center space-x-2">
          <FaHome />
          <span>Home</span>
        </Link>
        <a href="/contact" onClick={ () => {
          
          window.location.reload();
        }} className="flex items-center space-x-2">
        <span>Contact</span>
        </a>
        <Link href="product" className="flex items-center space-x-2">
        <span>Product</span></Link>
      </div>

      {/* Center */}
      <div>
        <Link href="/" className="text-xl font-bold">R8</Link>
      </div>

      {/* Right */}
      <div>
        <Link href="/cart" className="flex items-center space-x-2">
          <FaShoppingCart />
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  )
}
