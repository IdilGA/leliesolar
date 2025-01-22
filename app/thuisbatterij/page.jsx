"use client"

import React, { useState } from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { ThuisbatterijContactModal } from "../components/thuisbatterij-contact-modal"

export default function Thuisbatterij() {
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
                Duurzame energieopslag met onze thuisbatterij.
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                Met een thuisbatterij sla je de opgewekte energie van je zonnepanelen efficiënt op. Zo kun je energie
                gebruiken wanneer jij het nodig hebt en maximaal besparen op je energierekening.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                  <span className="text-gray-600">Opslagcapaciteit tot 10 kWh</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                  <span className="text-gray-600">Ondersteunt piekbelasting en energiebesparing</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                  <span className="text-gray-600">Eenvoudige installatie door onze experts</span>
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
              <Image src="/images/thuisbatterij1.svg" alt="Thuisbatterij van LelieSolar" width={600} height={600} />
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
                <li>Opslagcapaciteit: 5 tot 10 kWh</li>
                <li>Levensduur: Meer dan 10 jaar</li>
                <li>Type batterij: Lithium-ion</li>
                <li>Bedrijfstemperatuur: -10°C tot 50°C</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-600">Voordelen</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Maximaliseer het gebruik van zonne-energie</li>
                <li>Verlaag je afhankelijkheid van het net</li>
                <li>Betaal minder tijdens piekuren</li>
                <li>Energie-opslag voor noodgevallen</li>
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
              <h3 className="text-xl font-semibold mb-2 text-[#4E930F]">Hoe werkt een thuisbatterij?</h3>
              <p className="text-gray-600">
                Een thuisbatterij slaat overtollige energie van zonnepanelen op, zodat je deze later kunt gebruiken. Dit
                verhoogt je zelfvoorzienendheid en vermindert energiekosten.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#4E930F]">
                Kan ik een thuisbatterij combineren met mijn bestaande zonnepanelen?
              </h3>
              <p className="text-gray-600">
                Ja, onze thuisbatterij is compatibel met de meeste bestaande zonnepanelen en omvormers. Neem contact op
                voor een vrijblijvend advies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Thuisbatterij Contact Modal */}
      <ThuisbatterijContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

