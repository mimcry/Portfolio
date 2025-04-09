"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
}

export default function WorkExperience() {
  const experiences: ExperienceItem[] = [
    {
      title: "React Native Developer",
      company: "Yaks Inc.",
      location: "Kathmandu, Nepal",
      period: "Sep 2024 - Nov 2024",
      description: [
        "Assisted a team of developers in building and maintaining a healthcare app that connects users with medical professionals",
        "Worked with React Native,Tailwind Css and RESTful APIs , contributing to app stability and bug fixes",
        "Optimized app performance, improving load times and response speed for a better user experience",
        "Collaborated with healthcare professionals and the UX team to enhance the app interface and overall usability"
      ],            
      skills: ["React", "TypeScript", "Tailwind Css", "Redux", "RESTful APIs", "Responsive Design", "Performance Optimization"],
    },
    {
        title: "Next JS Developer",
        company: "Yaks Inc.",
        location: "Kathmandu, Nepal",
        period: "Nov 2024 - Feb 2025",
        description: [
            "Assisted a team of developers in building and maintaining Achivee.com, a central platform for event organization using Next.js",
            "Implemented modern Next.js architecture with React and TypeScript to enhance app stability and performance",
            "Optimized application performance, reducing load times and improving SEO with Next.js features",
            "Collaborated with the UX team to refine the platform’s interface, boosting user engagement"
          ],          
        skills: ["Next.js", "TypeScript", "Redux", "Graphql", "Responsive Design",  "Performance Optimization"],
      },
      {
        title: "Frontend Engineer (Web & Mobile)",
        company: "Neatly",
        location: "USA",
        period: "April 2025 - Present",
        description: [
          "Worked with a team to design and develop a Cleaning Management System app for hosts and cleaners, improving task scheduling and real-time updates",
          "Built responsive web and mobile interfaces using Next.js and React Native with TypeScript for unified cross-platform development",
          "Integrated Firebase services including Firestore, FCM, and Authentication for real-time data sync and secure user management",
          "Implemented WebSocket communication to enable live updates on task assignments and cleaning status",
          "Enhanced UI consistency and responsiveness using TailwindCSS across web and mobile views",
          "Collaborated with designers and stakeholders to refine UX and boost user engagement for both hosts and cleaners"
        ],
        skills: [
          "Next.js",
          "React Native",
          "TypeScript",
          "TailwindCSS",
          "Firebase",
          "FCM",
          "WebSocket",
          "Redux",
          "GraphQL",
          "Responsive Design",
          "Performance Optimization"
        ],
      }
      
  
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
          Work <span className="text-[#00abf0]">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00abf0] to-purple-500"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#00abf0] z-10"></div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-20px)] ${index % 2 === 0 ? "md:pl-0 md:pr-10" : "md:pl-10 md:pr-0"} pl-10`}
                  >
                    <Card className="bg-gray-900 border-gray-800 hover:border-[#00abf0] transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center mt-2 text-[#00abf0]">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-4 mt-2 text-gray-400 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <ul className="list-disc pl-5 space-y-1 text-gray-300">
                            {exp.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span key={i} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

