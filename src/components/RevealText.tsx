import { motion } from 'framer-motion'
import React from 'react'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

const RevealText: React.FC<RevealTextProps> = ({ text, className = '', delay = 0 }) => {
  const letters = Array.from(text)
  return (
    <span className={className} aria-label={text}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.025, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block will-change-transform"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default RevealText
