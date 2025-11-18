import React, { PropsWithChildren } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionProps extends PropsWithChildren {
  id?: string
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default Section
