"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  BookCopy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ContactForm from "@/components/contact-form";
import { useInView } from "react-intersection-observer";
import WorkExperience from "@/components/work-experience";
import { Toast, Toaster } from "react-hot-toast";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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

  const projects = [
    {
      title: "Foodie Mobile App",
      description:
        "A food delivery app with a food allergy alert system, built using React Native and Node.js.",
      image: "/foodie.jpg",
      tags: [
        "React Native",
        "Node.js",
        "Express js",
        "Postgres SQL",
        "Redux",
        "RESTFUL APIs",
      ],
      github: "https://github.com/mimcry/Foodie-Mobile-App",
      demo: " ",
    },
    {
      title: "Clothing Store",
      description:
        "An online store for clothing items, with a modern user interface and functionality.",
      image: "/bella.png",
      tags: ["React", "Node.js", "Express js", "Material UI", "RESTFUL APIs"],
      github: "https://github.com/mimcry/Online-Clothing-Store",
      demo: "https://stunning-chebakia-26098d.netlify.app/",
    },
    {
      title: "Hotel Website",
      description:
        "Simple hotel website about booking a room and ordering a food.",
      image: "/hotel.png",
      tags: ["React", "Node.js", "Express js", "Material UI", "RESTFUL APIs"],
      github: "https://github.com/mimcry/Restaurant-hotel",
      demo: "https://664b30e45b0c79a5a632697d--elaborate-medovik-94140a.netlify.app",
    },
  ];

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 50 },
    { name: "Express.js", level: 75 },
    { name: "CSS/SCSS", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Material UI", level: 90 },
    { name: "Redux", level: 75 },
    { name: "Postgres SQL", level: 70 },
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
                    Hello, I'm
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mt-2"
                  >
                    <span className="block">Full Stack</span>
                    <span className="block mt-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                      Developer
                    </span>
                  </motion.h1>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 text-lg max-w-lg"
                >
                  Hi, I'm Salon Gautam – a Full-Stack Developer from Nepal. I
                  build dynamic web and mobile apps using React.js, Node.js,
                  Next.js, and React Native. I'm focused on creating seamless,
                  user-friendly experiences. Let's turn your ideas into reality!{" "}
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
                    className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 cursor-pointer"
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
                Full-Stack Developer & AI Enthusiast
              </h3>

              <p className="text-gray-300">
                I'm a passionate **Full-Stack Developer** with 2+ years of
                experience in building modern web and mobile applications. I
                specialize in **React** and its ecosystem, focusing on crafting
                responsive, user-friendly, and high-performance interfaces.
              </p>

              <p className="text-gray-300">
                My journey in software development began with a curiosity about
                how websites and apps function. Over time, I've expanded my
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
        className="py-20 bg-gradient-to-b from-transparent to-black/30"
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
              My{" "}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Projects
              </span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is built with a
              focus on performance, accessibility, and user experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 cursor-pointer"
          
              >
                View All Projects <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
              I've worked with a variety of technologies and tools in the web
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
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "Postges SQL",
                      "Firebase",
                    ],
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
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative touch,
                I'd love to hear about it.
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
                      className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer"
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
                      className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer"
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
                      className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/40 cursor-pointer"
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
