"use client"

import React, { useState } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { LaadpaalContactModal } from "../components/laadpaal-contact-modal"

export default function Laadpaal() {
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
                LelieSolar Slimme Laadpaal voor Elektrische Voertuigen
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                Onze slimme laadpaal biedt de perfecte oplossing voor het laden van uw elektrische voertuig. Met hoge
                laadcapaciteit, eenvoudige bediening via een app en snelle installatie door onze experts.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                  <span className="text-gray-600">Hoge laadcapaciteit tot 22kW</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                  <span className="text-gray-600">Eenvoudig te bedienen met onze app</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                  <span className="text-gray-600">Geschikt voor alle elektrische voertuigen</span>
                </div>
              </div>
              <button
                className="bg-[#4E930F] text-white px-6 py-3 rounded-md hover:bg-[#3A6F0C] transition-colors duration-200"
                onClick={() => setIsModalOpen(true)}
              >
                Vraag een offerte aan
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image src="/images/laadpaal.svg" alt="LelieSolar Smart Laadpaal" width={600} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Specificaties Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Specificaties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Technische details</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Laadvermogen: Tot 22kW</li>
                <li>Aansluiting: Type 2</li>
                <li>Netaansluiting: 3-fase</li>
                <li>IP-beschermingsklasse: IP54</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Slimme functies</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Smartphone app voor bediening en monitoring</li>
                <li>Automatische updates</li>
                <li>Energieverbruik inzicht</li>
                <li>Load balancing mogelijk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Veelgestelde vragen Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Veelgestelde vragen</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#4E930F]">Hoeveel kost deze laadpaal?</h3>
              <p className="text-gray-600">
                De prijs van onze Smart Laadpaal is afhankelijk van uw specifieke situatie en eventuele extra opties.
                Neem contact met ons op voor een persoonlijke offerte.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#4E930F]">
                Hoe snel kan de laadpaal worden geïnstalleerd?
              </h3>
              <p className="text-gray-600">
                Na goedkeuring van de offerte kunnen we meestal binnen 2-3 weken de installatie uitvoeren. De exacte
                installatietijd hangt af van uw specifieke situatie en de complexiteit van de installatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Laadpaal Contact Modal */}
      <LaadpaalContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

