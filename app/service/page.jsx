"use client"

import React, { useState } from "react"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import { ChevronRight, Check, Clock, PenToolIcon as Tool, BarChart } from "lucide-react"
import { ServiceContactModal } from "../components/service-contact-modal"

export default function Service() {
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigatie */}
      <Navigation />

      {/* Service Sectie */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-8 text-gray-800">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Onze service houdt niet op na de installatie.
              </h1>
              <p className="text-lg mb-8">
                Wij zijn er voor je, ook na de installatie. Van onderhoud en reparaties tot persoonlijk advies, onze
                service zorgt ervoor dat je altijd tevreden bent.
              </p>
              <button
                className="bg-[#4E930F] text-white px-6 py-3 rounded-md hover:bg-[#3A6F0C] transition-colors duration-200"
                onClick={() => setIsServiceModalOpen(true)}
              >
                Neem contact op
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Onze service kenmerken</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 text-[#4E930F] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Ondersteuning</h4>
                    <p className="text-gray-700">Altijd bereikbaar voor al uw vragen en problemen.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Tool className="w-6 h-6 text-[#4E930F] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Snelle reparaties</h4>
                    <p className="text-gray-700">Onze experts staan klaar om snel ter plaatse te zijn.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart className="w-6 h-6 text-[#4E930F] mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prestatie monitoring</h4>
                    <p className="text-gray-700">Continue controle voor optimale werking van uw systeem.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Onderhoudspakketten Sectie */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Onderhoudspakketten</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Basis Pakket", "Premium Pakket", "Zakelijk Pakket"].map((pakket, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{pakket}</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                    <span className="text-gray-700">Jaarlijkse inspectie</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                    <span className="text-gray-700">Reiniging van panelen</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-[#4E930F] mr-2" />
                    <span className="text-gray-700">Prestatie check</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storingen melden Sectie */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Storingen melden</h2>
          <p className="text-lg mb-6 text-gray-700">
            Ervaart u problemen met uw zonnepanelen, thuisbatterij of laadpaal? Meld het direct en wij zorgen voor een
            snelle oplossing.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-[#4E930F] text-white px-6 py-3 rounded-md hover:bg-[#3A6F0C] transition-colors duration-200"
              onClick={() => setIsServiceModalOpen(true)}
            >
              Storing melden
            </button>
            <button className="bg-white text-[#4E930F] border border-[#4E930F] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200">
              Veelgestelde vragen
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Service Contact Modal */}
      <ServiceContactModal isOpen={isServiceModalOpen} onClose={() => setIsServiceModalOpen(false)} />
    </main>
  )
}

