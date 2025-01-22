import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, FileText, Briefcase } from "lucide-react"

function Footer() {
  const menuItems = [
    { name: "Thuisbatterij", href: "/thuisbatterij" },
    { name: "Laadpaal", href: "/laadpaal" },
    { name: "Service", href: "/service" },
    { name: "Zonnepanelen", href: "/zonnepanelen" },
    { name: "Reviews", href: "/reviews" },
  ]

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8">
          <Image src="/images/logo.svg" alt="LelieSolar Logo" width={150} height={58} className="h-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <nav className="grid grid-cols-1 gap-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#4E930F] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="space-y-3 text-gray-400">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-center group">
              <Phone className="w-5 h-5 mr-3 text-[#4E930F]" />
              <span className="group-hover:text-[#4E930F] transition-colors duration-200">+31 6 17943954</span>
            </p>
            <p className="flex items-center group">
              <Mail className="w-5 h-5 mr-3 text-[#4E930F]" />
              <span className="group-hover:text-[#4E930F] transition-colors duration-200">info@leliesolar.nl</span>
            </p>
            <p className="flex items-center group">
              <MapPin className="w-5 h-5 mr-3 text-[#4E930F]" />
              <span className="group-hover:text-[#4E930F] transition-colors duration-200">
                Persephonestraat 9-03, 5151 SP Tilburg
              </span>
            </p>
            <p className="flex items-center group">
              <FileText className="w-5 h-5 mr-3 text-[#4E930F]" />
              <span className="group-hover:text-[#4E930F] transition-colors duration-200">
                BTW-nummer: NL003281126B37
              </span>
            </p>
            <p className="flex items-center group">
              <Briefcase className="w-5 h-5 mr-3 text-[#4E930F]" />
              <span className="group-hover:text-[#4E930F] transition-colors duration-200">KvK-nummer: 78067529</span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Over LelieSolar</h3>
            <p className="text-gray-400 mb-4">
              LelieSolar is uw betrouwbare partner voor duurzame energieoplossingen. Wij bieden hoogwaardige
              zonnepanelen, thuisbatterijen en laadpalen voor een groenere toekomst.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4E930F] transition-colors duration-200"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4E930F] transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4E930F] transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} LelieSolar. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  )
}

export default Footer

