import Link from "next/link"
import { Facebook, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              Salon <span className="text-[#00abf0]">Gautam</span>
            </h3>
            <p className="text-gray-400 mt-2">Web Developer</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#home" className="text-gray-400 hover:text-[#00abf0] transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-400 hover:text-[#00abf0] transition-colors">
              About
            </Link>
            <Link href="#services" className="text-gray-400 hover:text-[#00abf0] transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-[#00abf0] transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-[#00abf0] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/saalon.gautam" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-[#00abf0] transition-colors" />
            </Link>
            <Link href="https://github.com/mimcry" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-gray-400 hover:text-[#00abf0] transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/salon-gautam-3633b1248/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#00abf0] transition-colors" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400 text-sm">
          © {new Date().getFullYear()} Salon Gautam. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

