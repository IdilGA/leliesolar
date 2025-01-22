"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import { ContactFormModal } from "./contact-form-modal"

function OfferProposal({ onConfirm, onBack }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Offerte Voorstel</h3>
      <p>Gebaseerd op uw interesse, stellen we het volgende pakket voor:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>10 zonnepanelen (350Wp per stuk)</li>
        <li>1 omvormer</li>
        <li>Installatie en montage</li>
        <li>5 jaar garantie op installatie</li>
      </ul>
      <p className="font-bold">Geschatte prijs: €5.500 - €6.500</p>
      <p className="text-sm text-gray-600">
        Dit is een indicatie. De exacte prijs wordt bepaald na een persoonlijk gesprek en eventueel een locatiebezoek.
      </p>
      <div className="flex justify-between mt-4">
        <button
          onClick={onBack}
          className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 hover:bg-gray-300 transition-colors"
        >
          Terug
        </button>
        <button
          onClick={onConfirm}
          className="bg-[#4E930F] text-white rounded-lg px-4 py-2 hover:bg-[#3A6F0C] transition-colors"
        >
          Bevestig en ga door
        </button>
      </div>
    </div>
  )
}

const useAvailableTimeSlots = () => {
  const [slots, setSlots] = useState([])

  useEffect(() => {
    const generateTimeSlots = () => {
      const slots = []
      const now = new Date()

      // Generate slots for the next 5 working days
      for (let i = 0; i < 5; i++) {
        const date = new Date(now)
        date.setDate(date.getDate() + i)

        // Skip weekends
        if (date.getDay() === 0 || date.getDay() === 6) {
          continue
        }

        // Add two time slots per day
        const morningSlot = {
          date: date.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
          time: "tussen 09:00 en 10:00",
        }

        const afternoonSlot = {
          date: date.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
          time: "tussen 14:00 en 15:00",
        }

        // Only add future time slots
        if (date.getDate() === now.getDate()) {
          const currentHour = now.getHours()
          if (currentHour < 8) {
            slots.push(morningSlot, afternoonSlot)
          } else if (currentHour < 13) {
            slots.push(afternoonSlot)
          }
        } else {
          slots.push(morningSlot, afternoonSlot)
        }
      }
      return slots
    }

    // Initial generation
    setSlots(generateTimeSlots())

    // Update every minute
    const interval = setInterval(() => {
      setSlots(generateTimeSlots())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return slots
}

export function ScheduleCallModal({ isOpen, onClose }) {
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showOfferProposal, setShowOfferProposal] = useState(false)

  const timeSlots = useAvailableTimeSlots()

  if (!isOpen) return null

  if (showContactForm) {
    return <ContactFormModal isOpen={true} onClose={onClose} />
  }

  if (showOfferProposal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
          <OfferProposal onConfirm={() => setShowContactForm(true)} onBack={() => setShowOfferProposal(false)} />
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">Plan een belafspraak</h2>

        {/* Direct contact button */}
        <a
          href="tel:+31617943954"
          className="bg-[#4E930F] text-white rounded-lg p-4 mb-6 flex items-center justify-between group hover:bg-[#3A6F0C] transition-colors"
        >
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-3" />
            <span className="text-lg">Direct contact</span>
          </div>
          <div className="text-lg">Bel mij nu</div>
        </a>

        {/* Time slots */}
        <div className="space-y-4">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              onClick={() => setSelectedSlot(index)}
              className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                selectedSlot === index ? "border-[#4E930F] bg-[#4E930F]/5" : "border-gray-200 hover:border-[#4E930F]"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 mr-3 ${
                    selectedSlot === index ? "border-[#4E930F] bg-[#4E930F]" : "border-gray-300"
                  }`}
                />
                <div>
                  <div className="font-semibold">{slot.date}</div>
                  <div className="text-gray-600">{slot.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confirm button */}
        {selectedSlot !== null && (
          <button
            onClick={() => setShowOfferProposal(true)}
            className="w-full bg-[#4E930F] text-white rounded-lg py-3 mt-6 hover:bg-[#3A6F0C] transition-colors"
          >
            Bekijk offerte voorstel
          </button>
        )}
      </div>
    </div>
  )
}

