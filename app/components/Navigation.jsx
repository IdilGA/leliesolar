"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { ScheduleCallModal } from "./schedule-call-modal"

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Thuisbatterij", href: "/thuisbatterij" },
    { name: "Zonnepanelen", href: "/zonnepanelen" },
    { name: "Laadpaal", href: "/laadpaal" },
    { name: "Reviews", href: "/reviews" },
    { name: "Service", href: "/service" },
  ]

  return (
    <>
      <nav className="bg-black py-4">
        <div className="container mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/images/logo.svg" alt="LelieSolar Logo" width={180} height={70} className="h-auto" />
          </Link>

          {/* Hamburger menu button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-grow ml-12">
            {/* Left section (empty for spacing) */}
            <div className="w-1/4"></div>

            {/* Center section (main product links) */}
            <div className="flex items-center justify-center space-x-12">
              <Link href="/thuisbatterij" className="text-white hover:text-[#4E930F]">
                Thuisbatterij
              </Link>
              <Link href="/zonnepanelen" className="text-white hover:text-[#4E930F]">
                Zonnepanelen
              </Link>
              <Link href="/laadpaal" className="text-white hover:text-[#4E930F]">
                Laadpaal
              </Link>
            </div>

            {/* Right section (Reviews, Service, Phone) */}
            <div className="flex items-center justify-end space-x-8 w-1/4">
              <Link href="/reviews" className="text-white hover:text-[#4E930F]">
                Reviews
              </Link>
              <Link href="/service" className="text-white hover:text-[#4E930F]">
                Service
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-white hover:text-[#4E930F] flex items-center"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-[#4E930F] py-2 px-8"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsModalOpen(true)
                setIsMenuOpen(false)
              }}
              className="text-white hover:text-[#4E930F] flex items-center py-2 px-8 w-full"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>Contact</span>
            </button>
          </div>
        )}
      </nav>

      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Navigation

