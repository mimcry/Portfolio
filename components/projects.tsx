"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/mimcry",
      demo: "#",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with user authentication and payment integration",
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/mimcry",
      demo: "#",
    },
    {
      title: "Blog Application",
      description: "Content management system with markdown support and user comments",
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/mimcry",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-[#00abf0]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-[#00abf0] transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-48 w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 hover:border-[#00abf0] hover:bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" /> Code
                    </Button>
                  </Link>
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 hover:border-[#00abf0] hover:bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

