import React from 'react'
import { motion } from 'framer-motion'
import Nav from './components/Nav'
import RevealText from './components/RevealText'
import Section from './components/Section'

const accent = 'indigo'

const badge = (text) => (
  <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 px-2.5 py-0.5 text-xs text-neutral-600 dark:text-neutral-300">
    {text}
  </span>
)

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] dark:bg-[#0f0f0f] dark:text-[#e5e5e5] selection:bg-indigo-200/60 selection:text-black">
      {/* Subtle background pattern */}
      <div className="pointer-events-none fixed inset-0 [background:radial-gradient(1000px_600px_at_50%_-20%,rgba(99,102,241,0.06),transparent_60%)]" />

      <Nav />

      <main className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Hero */}
        <section className="min-h-[72vh] flex items-center">
          <div className="w-full pt-24">
            <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">Portfolio</p>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
              <RevealText text="Abhinav Reddy" />
            </h1>
            <div className={`mt-4 text-xl sm:text-2xl text-neutral-700/90 dark:text-neutral-300/90`}>
              <RevealText text="Full-Stack Developer & AI Engineer" delay={0.35} />
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-300/70 dark:border-neutral-700/70 px-4 py-2 text-sm hover:shadow-sm transition transform-gpu hover:scale-[1.01]"
              >
                View projects
                <span className={`i lucide lucide-arrow-right group-hover:translate-x-0.5 transition`}>
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" className="py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">About</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              Computer Science @ IIITDM Kancheepuram • 8.2 CGPA. I craft reliable, fast experiences across web and AI—from crisp design systems to production APIs and LLM apps. I value intentional spacing, readable type, and subtle interactions that feel effortless.
            </p>
            <p>
              Recently focused on GenAI tooling, vector search, and full‑stack systems that ship quickly without sacrificing polish.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Computer Science', 'IIITDM Kancheepuram', '8.2 CGPA'].map(badge)}
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Experience</h2>
          <div className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70">
            {[
              {
                company: 'Naukri (Engineers Ring of Honor)',
                role: 'Winner - 1st Place',
                dates: '2025',
                points: ['Led end-to-end solution from problem framing to deployment', 'Optimized models and UX for measurable impact'],
                stack: ['Python', 'FastAPI', 'Postgres'],
              },
              {
                company: 'Freelance / Personal',
                role: 'Full-Stack + AI Engineer',
                dates: '2022 — Present',
                points: ['Shipped production-grade SaaS and AI prototypes', 'Built clean APIs, modern frontends, and infra automations'],
                stack: ['React', 'TypeScript', 'Next.js', 'FastAPI', 'MongoDB'],
              },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="block py-5 group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-lg group-hover:underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700">
                      {item.company} — {item.role}
                    </h3>
                    <ul className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5 space-y-1">
                      {item.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.stack.map(badge)}
                    </div>
                  </div>
                  <div className="text-sm tabular-nums text-neutral-500 dark:text-neutral-400">{item.dates}</div>
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'CrewMind.ai',
                desc: 'Collaborative AI workflows for teams. Orchestrations, memory, and smooth operator UX to turn prompts into real outcomes.',
                tech: ['TypeScript', 'Next.js', 'OpenAI', 'Postgres'],
                links: [
                  { href: '#', label: 'GitHub' },
                  { href: '#', label: 'Demo' },
                ],
              },
              {
                title: 'EmotiCare.ai',
                desc: 'Emotion-aware mental wellness companion with lightweight on-device NLP and privacy-first design.',
                tech: ['React', 'FastAPI', 'Vector DB', 'LLMs'],
                links: [
                  { href: '#', label: 'GitHub' },
                  { href: '#', label: 'Demo' },
                ],
              },
            ].map((p, i) => (
              <article
                key={i}
                className="group relative rounded-2xl border border-neutral-200/70 dark:border-neutral-800/70 p-5 overflow-hidden bg-white/70 dark:bg-neutral-900/60 hover:shadow-sm transition"
              >
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition opacity-60 [background:radial-gradient(600px_300px_at_0%_0%,rgba(99,102,241,0.08),transparent)]" />
                <h3 className="text-lg font-medium">
                  <a href="#" className="hover:underline underline-offset-4">{p.title}</a>
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.tech.map(badge)}</div>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  {p.links.map((l, idx) => (
                    <a
                      key={idx}
                      href={l.href}
                      className="inline-flex items-center gap-1 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
                    >
                      {l.label}
                      <span aria-hidden>→</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { cat: 'Programming', items: ['Python', 'TypeScript', 'C++'] },
              { cat: 'Web', items: ['React', 'Next.js', 'FastAPI', 'Tailwind'] },
              { cat: 'AI/ML', items: ['LLMs', 'Vector Search', 'RAG', 'OpenAI'] },
              { cat: 'Databases', items: ['MongoDB', 'Postgres'] },
            ].flatMap((g) => [badge(g.cat), ...g.items.map(badge)])}
          </div>
        </Section>

        {/* Achievements */}
        <Section id="achievements" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Achievements</h2>
          <ul className="space-y-2 text-sm">
            <li className="group inline-flex items-center gap-2 rounded-md border border-neutral-200/70 dark:border-neutral-800/70 px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition">
              <span>🏆 1st Place - Naukri's Engineers Ring of Honor (2025)</span>
            </li>
            <li className="group inline-flex items-center gap-2 rounded-md border border-neutral-200/70 dark:border-neutral-800/70 px-3 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900/40 transition">
              <span>🎯 Ranked 38th All India</span>
            </li>
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" className="py-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Contact</h2>
          <div className="space-y-3 text-sm">
            <div className="flex flex-wrap gap-3 items-center">
              <a href="mailto:abhinav@example.com" className="hover:underline underline-offset-4">Email</a>
              <span className="text-neutral-400">•</span>
              <a href="https://linkedin.com" className="hover:underline underline-offset-4">LinkedIn</a>
              <span className="text-neutral-400">•</span>
              <a href="https://github.com" className="hover:underline underline-offset-4">GitHub</a>
              <span className="text-neutral-400">•</span>
              <span>+91 9121881605</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400">Chennai, India</p>
          </div>
          <footer className="py-10 text-xs text-neutral-500 dark:text-neutral-500">© {new Date().getFullYear()} Abhinav Reddy</footer>
        </Section>
      </main>
    </div>
  )
}

export default App
