"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Navigation items
  const navItems = [
    { name: "home", path: isHomePage ? "#home" : "/" },
    { name: "about", path: isHomePage ? "#about" : "/#about" },
    { name: "experience", path: isHomePage ? "#experience" : "/#experience" },
    { name: "projects", path: isHomePage ? "#projects" : "/projects" },
    { name: "skills", path: isHomePage ? "#skills" : "/#skills" },
    { name: "contact", path: isHomePage ? "#contact" : "/#contact" },
  ];

  // For home page active section tracking
  const [activeSection, setActiveSection] = useState("home");

  // Update active section based on scroll position (only on home page)
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Offset for header height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Set active section based on current page
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname === "/projects") {
      setActiveSection("projects");
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 lg:px-20 w-screen">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text"
        >
          Salon Gautam
        </Link>

        <div className="md:hidden ">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block w-5 h-0.5 bg-white transition-all duration-300",
                  menuOpen && "rotate-45 translate-y-2"
                )}
              ></span>
              <span
                className={cn(
                  "block w-5 h-0.5 bg-white transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              ></span>
              <span
                className={cn(
                  "block w-5 h-0.5 bg-white transition-all duration-300",
                  menuOpen && "-rotate-45 -translate-y-2"
                )}
              ></span>
            </div>
          </Button>
        </div>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "capitalize relative py-1 transition-colors",
                activeSection === item.name
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {item.name}
              {activeSection === item.name && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-2">
          <Link
            href="https://github.com/mimcry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link
            href="https://x.com/salongauta34848?t=PZn0d64pRfqbBDHaQQgF4Q&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/salon-gautam-3633b1248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0  z-40 bg-black/90 backdrop-blur-lg border-b border-white/10"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "capitalize py-3 px-6 transition-colors",
                    activeSection === item.name
                      ? "text-white bg-white/5"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex justify-center gap-4 py-4 border-t border-white/10 mt-2">
                <Link
                  href="https://github.com/mimcry"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://x.com/salongauta34848?t=PZn0d64pRfqbBDHaQQgF4Q&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/salon-gautam-3633b1248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
