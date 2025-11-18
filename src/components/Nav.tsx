import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
]

const Nav: React.FC = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-4">
        <a href="#" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">AR</a>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <span>{l.label}</span>
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-1 h-px bg-neutral-900 dark:bg-white"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 0.25 }}
                />
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    return document.documentElement.classList.contains('dark')
  })

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/70 dark:border-neutral-700/70 bg-white/70 dark:bg-neutral-900/70 hover:shadow-sm transition"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-50/60 to-white/20 dark:from-neutral-800/30 dark:to-neutral-900/30" />
      <span className="relative text-neutral-700 dark:text-neutral-200 text-sm">{dark ? '☾' : '☀'}</span>
    </button>
  )
}

export default Nav
