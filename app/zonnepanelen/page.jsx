"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { ChevronRight, Check } from "lucide-react"
import { ScheduleCallModal } from "../components/schedule-call-modal"

export default function Zonnepanelen() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Bespaar op je energierekening met zonnepanelen.
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                Met zonnepanelen van LelieSolar geniet je van duurzame energie, lagere kosten en een betere toekomst.
                Ontdek hoe eenvoudig het is om over te stappen.
              </p>
              <button
                className="bg-[#4E930F] text-white px-6 py-3 rounded-md hover:bg-[#3A6F0C] transition-colors duration-200"
                onClick={() => setIsModalOpen(true)}
              >
                Vraag vrijblijvend informatie aan
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image src="/images/zonnepanelen.svg" alt="LelieSolar Zonnepanelen" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Onze aanpak Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Onze aanpak</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Check className="w-6 h-6 text-[#4E930F] flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-[#4E930F]">Gratis intakegesprek</h3>
                <p className="text-gray-600">
                  We beginnen met een vrijblijvend gesprek om uw wensen en mogelijkheden te bespreken.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="w-6 h-6 text-[#4E930F] flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-[#4E930F]">Professionele installatie</h3>
                <p className="text-gray-600">Onze ervaren monteurs zorgen voor een vakkundige en snelle installatie.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Check className="w-6 h-6 text-[#4E930F] flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-[#4E930F]">24/7 ondersteuning</h3>
                <p className="text-gray-600">
                  Na de installatie blijven we beschikbaar voor al uw vragen en ondersteuning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidies en voordelen Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Subsidies en voordelen</h2>
          <p className="text-lg mb-8 text-gray-600">Krijg tot wel 30% terug via subsidies!</p>
          <button
            className="bg-[#4E930F] text-white px-6 py-3 rounded-md hover:bg-[#3A6F0C] transition-colors duration-200"
            onClick={() => setIsModalOpen(true)}
          >
            Vraag vrijblijvend informatie aan
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Schedule Call Modal */}
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

