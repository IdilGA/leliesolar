"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export function ContactFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    postcode: "",
    houseNumber: "",
    addition: "",
    isBusinessPurchase: false,
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>

        {/* Logo */}
        <div className="mb-6">
          <Image src="/images/logo2.svg" alt="LelieSolar Logo" width={180} height={70} className="h-auto mx-auto" />
        </div>

        <h2 className="text-2xl font-bold mb-2 text-center">Vul je gegevens in</h2>
        <p className="text-center text-gray-600 mb-6">
          Een adviseur neemt contact met je op.
          <br />
          Gratis en vrijblijvend.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="title"
                value="Dhr."
                checked={formData.title === "Dhr."}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mr-2"
              />
              Dhr.
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="title"
                value="Mevr."
                checked={formData.title === "Mevr."}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mr-2"
              />
              Mevr.
            </label>
          </div>

          {/* Name fields */}
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Voornaam <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Tussenvoegsel</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
                value={formData.middleName}
                onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Achternaam <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Telefoonnummer <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {/* Address */}
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Postcode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
                value={formData.postcode}
                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Huisnr. <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
                value={formData.houseNumber}
                onChange={(e) => setFormData({ ...formData, houseNumber: e.target.value })}
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Toevoeging</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4E930F] focus:ring-[#4E930F]"
                value={formData.addition}
                onChange={(e) => setFormData({ ...formData, addition: e.target.value })}
              />
            </div>
          </div>

          {/* Business purchase */}
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-[#4E930F] focus:ring-[#4E930F]"
              checked={formData.isBusinessPurchase}
              onChange={(e) => setFormData({ ...formData, isBusinessPurchase: e.target.checked })}
            />
            <span className="ml-2">Zakelijke aankoop</span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#4E930F] text-white rounded-full py-4 hover:bg-[#3A6F0C] transition-colors duration-200"
          >
            Doorgaan
          </button>
        </form>
      </div>
    </div>
  )
}

