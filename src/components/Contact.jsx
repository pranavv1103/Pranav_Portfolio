import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Download, ArrowUpRight } from 'lucide-react'
import { WaterfallSection, WaterfallGroup, WaterfallItem } from './ui/Reveal'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pranavtej.lalapeta@gmail.com',
    href: 'mailto:pranavtej.lalapeta@gmail.com',
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
    value: 'Orlando, FL · Open to remote',
    href: null,
    color: 'emerald',
  },
]

const colorMap = {
  indigo:  'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20',
  purple:  'bg-purple-500/10 border-purple-500/20 text-purple-400 hover:bg-purple-500/20',
  cyan:    'bg-cyan-500/10   border-cyan-500/20   text-cyan-400   hover:bg-cyan-500/20',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20',
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 bg-[#07090f]">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-indigo-600/6 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <WaterfallSection>
          <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-indigo-400 uppercase mb-4">
            <span className="w-6 h-[1px] bg-indigo-400/60" />
            Contact
            <span className="w-6 h-[1px] bg-indigo-400/60" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 leading-[1.1] mb-5">
            Let's build something.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            I'm actively looking for full-time software engineering roles.
            If you're building interesting systems and need someone who can work across the stack
            with backend depth, I'd love to connect.
          </p>

          {/* Primary CTA */}
          <motion.a
            href="mailto:pranavtej.lalapeta@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors duration-200 shadow-[0_0_30px_rgba(99,102,241,0.3)] hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] mb-8"
          >
            <Mail size={16} />
            Send me an email
            <ArrowUpRight size={14} />
          </motion.a>

          {/* Resume download */}
          <div className="mb-12">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 border border-white/10 hover:border-white/25 px-5 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>

          {/* Links grid */}
          <WaterfallGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left" stagger={0.1}>
            {links.map(({ icon: Icon, label, value, href, color }) => {
              const c = colorMap[color]
              const inner = (
                <motion.div
                  whileHover={{ y: -2, x: 1 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-colors duration-200 ${c} group`}
                >
                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] shrink-0">
                    <Icon size={16} className="text-slate-400 group-hover:text-slate-200 transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 font-medium mb-0.5">{label}</div>
                    <div className="text-sm text-slate-300 font-medium truncate">{value}</div>
                  </div>
                  {href && (
                    <ArrowUpRight size={13} className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors" />
                  )}
                </motion.div>
              )
              return href ? (
                <WaterfallItem key={label}><a href={href} target="_blank" rel="noopener noreferrer">{inner}</a></WaterfallItem>
              ) : (
                <WaterfallItem key={label}><div>{inner}</div></WaterfallItem>
              )
            })}
          </WaterfallGroup>
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
