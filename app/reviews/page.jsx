import React from "react";
import Navigation from "../components/Navigation"; // Zorg dat het pad klopt
import Footer from "../components/Footer"; // Zorg dat het pad klopt
import { ChevronRight, Check, Phone, Mail, MapPin, FileText, Briefcase } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Anna de Vries",
      location: "Tilburg",
      rating: 5,
      comment: "Geweldige service en snelle installatie! Ik ben enorm tevreden met mijn zonnepanelen van LelieSolar.",
      product: "Zonnepanelen",
    },
    {
      name: "Peter Jansen",
      location: "Drunen",
      rating: 4,
      comment:
        "De thuisbatterij werkt perfect en heeft mijn energierekening aanzienlijk verlaagd. Goede klantenservice ook!",
      product: "Thuisbatterij",
    },
    {
      name: "Sophie Bakker",
      location: "Waalwijk",
      rating: 5,
      comment: "Zeer professioneel team. De laadpaal werd snel geïnstalleerd en werkt uitstekend. Aanrader!",
      product: "Laadpaal",
    },
    {
      name: "Mark van Dijk",
      location: "Oisterwijk",
      rating: 4,
      comment:
        "Blij met mijn zonnepanelen. Het advies was goed en de installatie verliep soepel. Alleen de wachttijd was wat lang.",
      product: "Zonnepanelen",
    },
    {
      name: "Lisa Smit",
      location: "Kaatsheuvel",
      rating: 5,
      comment:
        "De combinatie van zonnepanelen en een thuisbatterij is perfect. Ik ben nu bijna volledig zelfvoorzienend!",
      product: "Zonnepanelen en Thuisbatterij",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Reviews Header Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
            Wat onze klanten zeggen over LelieSolar.
          </h1>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto text-gray-800">
            Lees de ervaringen van onze klanten en ontdek waarom zij voor LelieSolar kozen.
          </p>
        </div>
      </section>

      {/* Reviews List Section */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <p className="text-sm text-gray-800">{review.location}</p>
                <p className="text-sm text-gray-800 mb-2">{review.product}</p>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={i < review.rating ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke={i < review.rating ? "none" : "currentColor"}
                      className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.368a1 1 0 00.95.69h6.7c.97 0 1.371 1.24.588 1.81l-5.417 3.948a1 1 0 00-.364 1.118l2.062 6.368c.3.921-.755 1.688-1.54 1.118l-5.417-3.948a1 1 0 00-1.175 0l-5.417 3.948c-.785.57-1.84-.197-1.54-1.118l2.062-6.368a1 1 0 00-.364-1.118L2.26 9.805c-.783-.57-.382-1.81.588-1.81h6.7a1 1 0 00.95-.69l2.062-6.368z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Laat jouw review achter</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-800">
            Ben je tevreden over onze producten en service? Deel je ervaring en help anderen bij het maken van hun keuze.
          </p>
          <button className="bg-[#4E930F] text-white px-6 py-3 rounded-md hover:bg-[#3A6F0C] transition-colors duration-200">
            Schrijf een review
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
