"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-[#00abf0]">Me</span>
        </h2>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Introduction</h3>
                <p className="text-gray-400">
                  I am a passionate web developer with a focus on creating responsive, user-friendly websites and
                  applications. With expertise in modern frameworks and technologies, I strive to deliver high-quality
                  solutions that meet client needs and exceed expectations.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-[#00abf0]">1+</h4>
                    <p className="text-sm text-gray-400">Years of experience</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-[#00abf0]">10+</h4>
                    <p className="text-sm text-gray-400">Projects completed</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-[#00abf0]">5+</h4>
                    <p className="text-sm text-gray-400">Technologies</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <div className="w-full h-full bg-gradient-to-r from-[#00abf0]/20 to-transparent rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-400">Bachelor of Computer Science</p>
                    <p className="text-[#00abf0]">2020 - Present</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

