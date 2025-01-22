"use client"

import React, { useState } from "react"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Check } from "lucide-react"
import { ScheduleCallModal } from "./components/schedule-call-modal"

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black flex flex-col">
      {/* Navigation */}
      <Navigation openModal={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <div className="relative flex items-center bg-black min-h-[calc(100vh-5rem)] flex-grow">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-3/5 space-y-8">
              <div className="flex items-center space-x-4">
                <span className="bg-[#4E930F] text-white px-4 py-2 rounded-full text-base font-semibold">
                  Gratis Advies
                </span>
              </div>

              <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className="text-[#4E930F]">Duurzame oplossingen</span> voor een
                <br className="hidden md:inline" /> groenere toekomst
              </h1>

              <p className="text-white/80 text-lg leading-relaxed">
                Bij <span className="text-[#4E930F] font-semibold">LelieSolar</span> bieden we innovatieve oplossingen
                op het gebied van <span className="font-semibold">zonnepanelen</span> en{" "}
                <span className="font-semibold">laadpalen</span>. Onze hoogwaardige producten en persoonlijke service
                zorgen ervoor dat u zorgeloos kunt overstappen naar
                <span className="text-[#4E930F] font-semibold"> duurzame energie</span>.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black hover:bg-[#4E930F] hover:text-white flex items-center space-x-2 text-lg px-6 py-3 rounded-md transition-colors duration-200"
              >
                <span>Vraag offerte aan</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full md:w-2/5 mt-8 md:mt-0 md:pl-8 hidden md:block relative h-[500px]">
              <Image src="/images/placeholder.svg" alt="Hero Afbeelding" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>

      {/* Waarom kiezen voor LelieSolar? Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#4E930F]">Waarom kiezen voor LelieSolar?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Hoogwaardige kwaliteit"
              description="Wij bieden alleen de beste producten voor optimale prestaties."
            />
            <FeatureCard
              title="Professionele installatie"
              description="Onze gecertificeerde monteurs zorgen voor een perfecte installatie."
            />
            <FeatureCard
              title="Persoonlijk advies"
              description="We bieden service op maat, afgestemd op uw specifieke behoeften."
            />
          </div>
        </div>
      </section>

      {/* Onze Producten Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#4E930F]">Onze Producten</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <ProductCard
              image="images/laadpaal.svg?height=300&width=400&text=Laadpaal"
              alt="Laadpalen"
              title="Laadpalen"
              description="Slimme laadpalen voor uw elektrische voertuig, geschikt voor thuis en zakelijk gebruik."
              link="/laadpalen"
              linkText="Meer over laadpalen"
            />
            <ProductCard
              image="images/zonnepanelen.svg?height=300&width=400&text=Zonnepanelen"
              alt="Zonnepanelen"
              title="Zonnepanelen"
              description="Hoogefficiënte zonnepanelen voor maximale energieopbrengst."
              link="/zonnepanelen"
              linkText="Meer over zonnepanelen"
            />
            <ProductCard
              image="images/thuisbatterij1.svg?height=300&width=400&text=Thuisbatterij"
              alt="Thuisbatterijen"
              title="Thuisbatterijen"
              description="Efficiënte batterijen om de energie van uw zonnepanelen op te slaan."
              link="/thuisbatterijen"
              linkText="Meer over thuisbatterijen"
            />
          </div>
        </div>
      </section>

      {/* Klantenervaringen Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#4E930F]">Klantenervaringen</h2>
          <div className="max-w-3xl mx-auto bg-[#3A6F0C] p-8 rounded-lg shadow-md">
            <p className="text-white mb-4 italic">
              "Geweldige service en snelle installatie! Ik ben enorm tevreden met mijn zonnepanelen van LelieSolar."
            </p>
            <p className="font-semibold text-white">– Michelle uit Tilburg</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Schedule Call Modal */}
      <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="flex items-start space-x-4">
      <Check className="w-6 h-6 text-[#4E930F] flex-shrink-0" />
      <div>
        <h3 className="font-semibold text-[#4E930F] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function ProductCard({ image, alt, title, description, link, linkText }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={alt}
        width={400}
        height={300}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="bg-[#4E930F] text-white px-4 py-2 rounded-md hover:bg-[#3A6F0C] transition-colors duration-200 inline-block"
        >
          {linkText}
        </Link>
      </div>
    </div>
  )
}

