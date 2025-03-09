"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: {
    name: string
    level: number
  }
  index: number
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  // Calculate color based on skill level
  const getGradient = (level: number) => {
    if (level >= 85) return "from-purple-500 to-cyan-500"
    if (level >= 70) return "from-cyan-500 to-blue-500"
    return "from-blue-500 to-indigo-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getGradient(skill.level)} text-white font-medium`}>
        {skill.name}
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {skill.level}% Proficiency
      </div>
    </motion.div>
  )
}

