"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, ExternalLink,  Search, Filter, Code, Layout, Database, Server, Globe } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Project type definition
interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  github: string
  demo: string
  featured: boolean
}

export default function ProjectsPage() {
  // Sample projects data - in a real app, this would come from a database or API
  const allProjects: Project[] = [
    {
      id: 1,
      category: "Full Stack",
      featured: true,
      title: "NYC Hilux Limo Service",
      description: "Premium limousine service platform serving the greater New York City area. Complete booking management system with admin dashboard, driver portal, and customer interface for seamless luxury transportation services.",
      image: "/limo-service.jpg",
      tags: ["Next.js", "Django", "PostgreSQL", "Admin Panel", "Driver Portal", "User Portal", "REST APIs", "Full Stack"],
      github: "https://github.com/mimcry/nyc-hilux-limo-service",
      demo: "https://nyc-hilux-limo-demo.vercel.app/",
    },
      ]
  const sections = [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
  ];
  // State for filtering and searching
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")

  // Filter projects based on search query and category
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = categoryFilter === "All" || project.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  // Get unique categories for filter dropdown
  const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))]

  // Function to get icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="h-4 w-4" />
      case "Backend":
        return <Server className="h-4 w-4" />
      case "Full Stack":
        return <Code className="h-4 w-4" />
      case "Mobile":
        return <Globe className="h-4 w-4" />
      default:
        return <Database className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white lg:px-20">
     

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Projects</span>
          </h1>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Explore my complete portfolio of projects. Each project represents a unique challenge and showcases
            different skills and technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/10 focus:border-purple-500/50 text-white placeholder:text-gray-400 w-full"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="text-gray-400 h-4 w-4" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-white/5 border-white/10 focus:border-purple-500/50 text-white w-full md:w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800 text-white">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="focus:bg-white/10 focus:text-white">
                    <div className="flex items-center gap-2">
                      {category !== "All" && getCategoryIcon(category)}
                      {category}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                  
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex gap-4">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full border-white/20 bg-black/50 text-white hover:bg-black/70"
                          >
                            <Github className="h-4 w-4 mr-2" /> Code
                          </Button>
                        </Link>
                       {project.demo !== " " && <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full border-white/20 bg-black/50 text-white hover:bg-black/70"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" /> Demo
                          </Button>
                        </Link>}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Search className="h-16 w-16 mx-auto text-gray-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria to find what you&apos;re looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-white/20 text-white hover:bg-white/10"
                onClick={() => {
                  setSearchQuery("")
                  setCategoryFilter("All")
                }}
              >
                Clear filters
              </Button>
            </motion.div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link
                href="#home"
                className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text"
              >
                Salon Gautam
              </Link>
              <p className="text-gray-400 mt-2">
                Creating exceptional digital experiences
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-4 md:mb-0">
              {sections.map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="capitalize text-gray-400 hover:text-white transition-colors"
                >
                  {section}
                </Link>
              ))}
            </nav>

            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved Salon Gautam.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

