"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Code,
  Layers,
 
  BookCopy,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import SkillBadge from "@/components/skill-badge";
import ContactForm from "@/components/contact-form";
import { useInView } from "react-intersection-observer";
import WorkExperience from "@/components/work-experience";
import { Toaster } from "react-hot-toast";

export default function Portfolio() {
  const [, setActiveSection] = useState("home");
 

  const sections = [
    "home",
    "about",
    "experience",
    "projects",
    "skills",
    "contact",
  ];

  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.5 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.3,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.3,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (experienceInView) setActiveSection("Experience");
    else if (projectsInView) setActiveSection("projects");
    else if (skillsInView) setActiveSection("skills");
    else if (contactInView) setActiveSection("contact");
  }, [
    homeInView,
    aboutInView,
    experienceInView,
    projectsInView,
    skillsInView,
    contactInView,
  ]);


  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "Python", level: 75 },
    { name: "Django", level: 70 },
    { name: "FastAPI", level: 65 },
    { name: "AI Automation", level: 80 },
    { name: "n8n", level: 75 },
    { name: "CSS/SCSS", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Material UI", level: 90 },
    { name: "Redux", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "MongoDB", level: 65 },
    { name: "Git", level: 85 },
    { name: "UI/UX Design", level: 70 },
  ];
  const downloadFile = () => {
    const cvFileUrl = "/salongautam.pdf";

    const anchor = document.createElement("a");
    anchor.href = cvFileUrl;
    anchor.download = "salongautam.pdf";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white lg:px-20">
      {/* Hero Section */}
      <section
        id="home"
        ref={homeRef}
        className="min-h-screen  flex items-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="space-y-6">
                <div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-cyan-400 font-medium"
                  >
                    Hello, I&apos;m
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mt-2"
                  >
                    <span className="block">Software</span>
                    <span className="block mt-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                      Engineer
                    </span>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-lg max-w-lg"
                >
                  Hi, I&apos;m Salon Gautam – a Software Engineer from Nepal. I
                  build dynamic web and mobile apps using React.js, Node.js,
                  Next.js, and React Native. I&apos;m focused on creating seamless,
                  user-friendly experiences. Let&apos;s turn your ideas into reality!{" "}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                 <Link href={"/projects"}>
                 <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full px-8 cursor-pointer">
                    View Projects
                  </Button></Link>
                  <Link href={"#contact"}>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white bg-white/10 rounded-full px-8 cursor-pointer"
                  >
                    Contact Me
                  </Button></Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex gap-4 pt-4"
                >
                  <Link
                    href="https://github.com/mimcry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
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
                      className="rounded-full text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
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
                      className="rounded-full text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="mailto:salongautam4@gmail.com">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/salon.jpg"
                  alt="Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 animate-bounce ">
            <Link href="#about">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white/70 hover:text-white"
              >
                <ChevronDown className="h-20 w-20" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              About{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Me
              </span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/about.jpeg"
                  alt="About Me"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">
                Software Engineer & AI Enthusiast
              </h3>

              <p className="text-gray-300">
                I&apos;m a passionate **Software Engineer** with 2+ years of
                experience in building modern web and mobile applications. I
                work across the entire technology stack - from **frontend** interfaces
                and **backend** systems to **n8n automation** workflows, creating
                comprehensive solutions that connect and streamline every part of the development process.
              </p>

              <p className="text-gray-300">
                My journey in software development began with a curiosity about
                how websites and apps function. Over time, I&apos;ve expanded my
                skills to include both frontend and backend technologies,
                constantly learning and adapting to deliver seamless digital
                experiences.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400">
                    Education
                  </h4>
                  <p className="text-gray-300">B.S. Computer Science</p>
                  <p className="text-gray-400 text-sm">
                    Kathmandu University, 2020
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400">
                    Experience
                  </h4>
                  <p className="text-gray-300">2+ Years</p>
                  <p className="text-gray-400 text-sm">
                    Frontend & Backend Development
                  </p>
                </div>
              </div>
              <div className="mx-auto items-center justify-center ">
                <h4 className="text-lg font-semibold text-cyan-400">
                  Projects
                </h4>
                <p className="text-gray-300">5+ Completed</p>
                <p className="text-gray-400 text-sm">
                  Web & Mobile Applications
                </p>
              </div>
              <div className="pt-4">
                <Button
                  onClick={downloadFile}
                  className=" bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white rounded-full px-8 cursor-pointer"
                >
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-purple-400" />,
                title: "Web Development",
                description:
                  "Building responsive, accessible, and performant web applications with modern technologies.",
              },
              {
                icon: <Layers className="h-8 w-8 text-cyan-400" />,
                title: "UI/UX Design",
                description:
                  "Creating intuitive and engaging user interfaces with a focus on user experience and accessibility.",
              },
              {
                icon: <BookCopy className="h-8 w-8 text-pink-400" />,
                title: "App Development",
                description:
                  "Developing fast, high-performance mobile apps with seamless user experiences across platforms.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="bg-black/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="experience" ref={experienceRef}>
        <WorkExperience />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-20 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                Featured Showcase
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mt-6 mb-4"
            >
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Signature Project
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            >
              A comprehensive full-stack solution showcasing advanced development capabilities, 
              automation workflows, and enterprise-grade architecture. This project demonstrates 
              my expertise in building scalable, user-centric platforms with cutting-edge technologies.
            </motion.p>
          </motion.div>

          {/* Main Project Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                {/* Project Header */}
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="NYC Hilux Limo Service"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute top-6 left-6"
                  >
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full text-sm font-semibold shadow-lg">
                      🚀 Featured Project
                    </span>
                  </motion.div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                      NYC Hilux Limo Service
                    </motion.h3>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-gray-200 text-lg max-w-2xl"
                    >
                      Premium limousine service platform with comprehensive booking management and automation workflows
                    </motion.p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 md:p-12">
                  {/* Interactive Gallery */}
                 

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-bold text-cyan-400 mb-4">Core Features</h4>
                      <div className="space-y-3">
                        {[
                          "Real-time booking management",
                          "Admin dashboard & analytics",
                          "Driver portal & route optimization",
                          "Customer interface & payments"
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="text-xl font-bold text-cyan-400 mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "Django", "PostgreSQL", "n8n", "REST APIs", "Full Stack"].map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-cyan-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Call to Action */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <a
                      href="https://nyc-hilux-limo-demo.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="h-5 w-5" />
                      View Live Demo
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              My{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Skills
              </span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              I&apos;ve worked with a variety of technologies and tools in the web
              development ecosystem. Here are some of my key skills and
              proficiencies.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill} index={index} />
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Development Approach</h3>
              <ul className="space-y-4">
                {[
                  "Component-based architecture for reusability and maintainability",
                  "Mobile-first, responsive design for all screen sizes",
                  "Performance optimization for fast load times",
                  "Clean, well-documented code following best practices",
                  "Version control with Git for collaborative development",
                  "Full-stack development with seamless front-end and back-end integration",
                  "Agile methodologies for quick iterations and flexibility",
                  "Testing for high-quality, bug-free applications (unit, integration, end-to-end)",
                  "Collaborating with cross-functional teams to meet business needs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    category: "Frontend",
                    items: [
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "MUI",
                    ],
                  },
                  {
                    category: "State Management",
                    items: [
                      "Redux",
                      "Context API",
                      "Zustand",
                      "Jotai",
                      "Recoil",
                    ],
                  },
                  {
                    category: "Backend",
                    items: [
                      "Python",
                      "Django",
                      "FastAPI",
                      "MongoDB",
                      "PostgreSQL",
                    ],
                  },
                  {
                    category: "AI & Automation",
                    items: ["AI Automation", "n8n", "Workflow Integration", "API Automation"],
                  },
                  {
                    category: "Tools",
                    items: ["Git", "VS Code", "Figma", "Webpack", "Jest"],
                  },
                ].map((group, groupIndex) => (
                  <div key={groupIndex} className="mb-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">
                      {group.category}
                    </h4>
                    <ul className="space-y-1">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-20 bg-gradient-to-t from-transparent to-black/30"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Touch
              </span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out to me using the form below.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-gray-300">
                I&apos;m currently available for freelance work and full-time
                positions. If you have a project that needs some creative touch,
                I&apos;d love to hear about it.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Mail className="h-5 w-5 text-cyan-400" />,
                    label: "Email",
                    value: "salongautam4@gmail.com",
                  },
                  {
                    icon: <Linkedin className="h-5 w-5 text-cyan-400" />,
                    label: "LinkedIn",
                    value:
                      "https://www.linkedin.com/in/salon-gautam-3633b1248/",
                  },
                  {
                    icon: <Github className="h-5 w-5 text-cyan-400" />,
                    label: "GitHub",
                    value: "https://github.com/mimcry",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/mimcry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white bg-white/10 hover:border-white/40 cursor-pointer"
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
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white bg-white/10 hover:border-white/40 cursor-pointer"
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
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white bg-white/10 hover:border-white/40 cursor-pointer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

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
      <Toaster />
    </div>
  );
}
