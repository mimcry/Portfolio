"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
  projectLink?: string
  projectLink2?: string
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
          "Responsive Design",
          "Performance Optimization"
        ],
        projectLink: "https://neatlyhost.com/",
      }
      ,{
  title: "Freelance Next.js Developer",
  company: "Travel Agency Management System",
  location: "Remote",
  period: " July 2025 - Present(Part-time)",
  description: [
    "Designed and developed a web-based Travel Agency Management System to streamline package listings, customer bookings, and inquiry handling",
    "Built responsive and interactive interfaces with Next.js, TypeScript, and TailwindCSS, ensuring seamless usability across devices",
    "Integrated React Query for efficient server-state management and real-time data fetching",
    "Implemented authentication and role-based access for admins, agents, and customers",
    "Optimized SEO and performance to improve discoverability and page load speed",
    "Worked independently with clients to gather requirements, propose solutions, and deliver features on time"
  ],
  skills: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "React Query",
    "Responsive Design",
    "SEO Optimization",
    "Authentication",
    "API Integration",
    "Client Communication"
  ],
  projectLink: "https://www.dmclounge.ai/",
},
    {
  title: "Full Stack Developer (AI & Automation)",
  company: "Neural Codex",
  location: "Remote",
  period: "March 2025 - Present",
  description: [
    "Developed intelligent AI agents using n8n workflow automation for seamless data processing and task automation",
    "Built full-stack applications connecting frontend React interfaces with backend Node.js systems through n8n workflows",
    "Implemented automated workflows that integrate with multiple APIs and services for end-to-end business process automation",
    "Created responsive frontend dashboards for monitoring and managing AI agent performance and workflow execution",
    "Designed and deployed scalable backend systems to support real-time data processing and agent communication",
    "Integrated AI automation solutions with existing client systems to improve efficiency and reduce manual workload"
  ],
  skills: [
    "n8n Workflow Automation",
    "AI Agent Development",
    "React",
    "Node.js",
    "Full Stack Development",
    "API Integration",
    "Workflow Design",
    "Process Automation",
    "Real-time Systems",
    "REST APIs"
  ],
  projectLink: "https://life-science-ai-self.vercel.app/",
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
                        {(exp.projectLink || exp.projectLink2) && (
                          <div className="mt-4 flex flex-wrap gap-3">
                            {exp.projectLink && (
                              <a
                                href={exp.projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#00abf0] hover:bg-[#0090d0] text-white px-4 py-2 rounded-lg text-sm transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                                {exp.company === "Neatly" ? "Neatly" : exp.company === "Travel Agency Management System" ? "DMC" : "Life Science AI"}
                              </a>
                            )}
                            {exp.projectLink2 && (
                              <a
                                href={exp.projectLink2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                                DMC
                              </a>
                            )}
                          </div>
                        )}
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

