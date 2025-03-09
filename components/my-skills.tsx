"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function MySkills() {
  const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "SQL", level: 55 },
  ]

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-[#00abf0]">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-[#00abf0]">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800" indicatorClassName="bg-[#00abf0]" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-[#00abf0]">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-800" indicatorClassName="bg-[#00abf0]" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

