"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap } from "lucide-react"

export default function MyExperience() {
  const experiences = [
    {
      type: "education",
      title: "Bachelor of Computer Science",
      organization: "University Name",
      period: "2020 - Present",
      description: "Studying computer science with focus on web development and software engineering.",
    },
    {
      type: "work",
      title: "Frontend Developer Intern",
      organization: "Tech Company",
      period: "2022 - 2023",
      description: "Worked on developing responsive user interfaces using React and Next.js.",
    },
    {
      type: "education",
      title: "Web Development Bootcamp",
      organization: "Coding Academy",
      period: "2021",
      description: "Intensive training in modern web development technologies and practices.",
    },
    {
      type: "work",
      title: "Freelance Web Developer",
      organization: "Self-employed",
      period: "2021 - Present",
      description: "Building websites and web applications for various clients.",
    },
  ]

  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-[#00abf0]">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-[#00abf0] transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-full bg-gray-800">
                    {exp.type === "education" ? (
                      <GraduationCap className="h-5 w-5 text-[#00abf0]" />
                    ) : (
                      <Briefcase className="h-5 w-5 text-[#00abf0]" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <p className="text-sm text-gray-400">{exp.organization}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-[#00abf0] mb-2">{exp.period}</div>
                  <p className="text-gray-400">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

