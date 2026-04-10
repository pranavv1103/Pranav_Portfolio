import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Download, ArrowUpRight, Send, User, MessageSquare } from 'lucide-react'
import { SpotlightCard } from './ui/SpotlightCard'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pranavlalapeta@gmail.com',
    href: 'mailto:pranavlalapeta@gmail.com',
    color: 'indigo',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/pranavv1103',
    href: 'https://github.com/pranavv1103',
    color: 'purple',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/pranavtejlalapeta',
    href: 'https://linkedin.com/in/pranavtejlalapeta',
    color: 'cyan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'USA · Open to remote',
    href: null,
    color: 'emerald',
  },
]

const colorMap = {
  indigo:  { bg: 'bg-indigo-500/[0.06]', border: 'border-indigo-500/15', hover: 'group-hover:border-indigo-500/35 group-hover:bg-indigo-500/[0.10]', spotlight: 'rgba(99,102,241,0.07)' },
  purple:  { bg: 'bg-purple-500/[0.06]', border: 'border-purple-500/15', hover: 'group-hover:border-purple-500/35 group-hover:bg-purple-500/[0.10]', spotlight: 'rgba(168,85,247,0.07)' },
  cyan:    { bg: 'bg-cyan-500/[0.06]',   border: 'border-cyan-500/15',   hover: 'group-hover:border-cyan-500/35   group-hover:bg-cyan-500/[0.10]',   spotlight: 'rgba(6,182,212,0.07)' },
  emerald: { bg: 'bg-emerald-500/[0.06]', border: 'border-emerald-500/15', hover: 'group-hover:border-emerald-500/30 group-hover:bg-emerald-500/[0.08]', spotlight: 'rgba(16,185,129,0.07)' },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.open(`mailto:pranavlalapeta@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-20 bg-[#060b18] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.18] pointer-events-none" />

      {/* Animated orbs — multi-axis */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-indigo-600/[0.06] blur-3xl pointer-events-none"
        animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-700/[0.04] blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[280px] h-[280px] rounded-full bg-cyan-700/[0.03] blur-3xl pointer-events-none"
        animate={{ x: [0, -14, 0], y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />
      {/* Decorative orbit rings */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-indigo-500/[0.06] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-purple-500/[0.05] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      />
      {/* Accent beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-px h-48 bg-gradient-to-b from-transparent via-indigo-400/12 to-transparent"
          style={{ top: '8%', left: '18%', rotate: '20deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.12, 0.4, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-px h-40 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"
          style={{ bottom: '12%', right: '16%', rotate: '-14deg', transformOrigin: 'top' }}
          animate={{ opacity: [0.08, 0.3, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <WaterfallSection>
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-indigo-400 uppercase mb-4">
              <span className="w-6 h-[1px] bg-indigo-400/60" />
              Contact
              <span className="w-6 h-[1px] bg-indigo-400/60" />
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-4">
              Let's build something.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
              I'm actively looking for full-time software engineering roles.
              If you're building interesting systems and need someone who can work across the stack
              with backend depth, I'd love to connect.
            </p>
          </div>

          {/* Two-column layout: form + links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* ── Left: Contact form ── */}
            <WaterfallItem>
              <SpotlightCard
                spotlightColor="rgba(99,102,241,0.07)"
                className="rounded-2xl border border-white/[0.10] bg-[#0e1f3a] backdrop-blur-sm p-7"
              >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-slate-400 tracking-wide">
                      <User size={12} className="text-indigo-400" />
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="What's your good name?"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-slate-400 tracking-wide">
                      <Mail size={12} className="text-indigo-400" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="What's your email address?"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="flex items-center gap-1.5 text-xs font-medium text-slate-400 tracking-wide">
                      <MessageSquare size={12} className="text-indigo-400" />
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="How can I help you?"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/[0.04] transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Send button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(99,102,241,0.55)' }}
                    whileTap={{ scale: 0.97 }}
                    className="relative overflow-hidden w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 shadow-[0_0_28px_rgba(99,102,241,0.3)]"
                  >
                    {/* Shimmer sweep */}
                    <motion.span
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.14) 50%, transparent 60%)' }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.55, ease: 'easeInOut' }}
                    />
                    {sent ? (
                      <>Opening mail client<span className="animate-pulse">…</span></>
                    ) : (
                      <><Send size={14} /> SEND MESSAGE</>
                    )}
                  </motion.button>
                </form>
              </SpotlightCard>
            </WaterfallItem>

            {/* ── Right: Links + resume ── */}
            <div className="flex flex-col gap-4">
              <WaterfallGroup className="flex flex-col gap-3" stagger={0.1}>
                {links.map(({ icon: Icon, label, value, href, color }) => {
                  const c = colorMap[color]
                  const inner = (
                    <SpotlightCard
                      spotlightColor={c.spotlight}
                      className={`group flex items-center gap-4 p-4 rounded-xl border ${c.border} ${c.bg} ${c.hover} backdrop-blur-sm transition-all duration-200`}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex items-center gap-4 w-full"
                      >
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          transition={{ duration: 0.2 }}
                          className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] shrink-0"
                        >
                          <Icon size={16} className="text-slate-400 group-hover:text-slate-200 transition-colors" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-slate-600 font-medium mb-0.5">{label}</div>
                          <div className="text-sm text-slate-300 font-medium truncate">{value}</div>
                        </div>
                        {href && (
                          <ArrowUpRight size={13} className="text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
                        )}
                      </motion.div>
                    </SpotlightCard>
                  )
                  return href ? (
                    <WaterfallItem key={label}><a href={href} target="_blank" rel="noopener noreferrer">{inner}</a></WaterfallItem>
                  ) : (
                    <WaterfallItem key={label}><div>{inner}</div></WaterfallItem>
                  )
                })}
              </WaterfallGroup>

              {/* Resume download */}
              <WaterfallItem>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.28)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 border border-white/10 px-5 py-2.5 rounded-xl transition-colors duration-200 w-full justify-center"
                >
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Download size={14} />
                  </motion.span>
                  Download Resume
                </motion.a>
              </WaterfallItem>
            </div>

          </div>
        </WaterfallSection>
      </div>

      {/* Footer */}
      <div className="relative mt-24 pt-8 border-t border-white/[0.05] text-center">
        <p className="text-xs text-slate-600">
          Designed & built by{' '}
          <span className="text-slate-500 font-medium">Pranav Tej Lalapeta</span>
          {' '}· {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
