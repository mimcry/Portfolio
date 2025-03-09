"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Layout, Database } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-[#00abf0]" />,
      title: "Web Design",
      description:
        "Creating visually appealing and user-friendly website designs that engage visitors and reflect your brand identity.",
    },
    {
      icon: <Code className="h-10 w-10 text-[#00abf0]" />,
      title: "Web Development",
      description:
        "Building responsive, fast-loading websites with clean code and modern technologies like React, Next.js, and more.",
    },
    {
      icon: <Database className="h-10 w-10 text-[#00abf0]" />,
      title: "Backend Development",
      description:
        "Developing robust server-side applications with secure APIs, database integration, and efficient data management.",
    },
  ]

  return (
    <section id="services" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-[#00abf0]">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full hover:border-[#00abf0] transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="flex items-center justify-center pt-6">
                  <div className="p-3 rounded-full bg-gray-800">{service.icon}</div>
                  <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-400">
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

