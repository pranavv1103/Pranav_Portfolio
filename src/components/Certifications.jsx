import { SectionHeader } from './ui/SectionHeader'
import { RevealStagger, RevealItem } from './ui/Reveal'
import { certifications } from '../data'

const colorMap = {
  amber:   'bg-amber-500/10   border-amber-500/20   hover:border-amber-500/40',
  purple:  'bg-purple-500/10  border-purple-500/20  hover:border-purple-500/40',
  cyan:    'bg-cyan-500/10    border-cyan-500/20    hover:border-cyan-500/40',
  sky:     'bg-sky-500/10     border-sky-500/20     hover:border-sky-500/40',
  indigo:  'bg-indigo-500/10  border-indigo-500/20  hover:border-indigo-500/40',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40',
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 bg-[#080c16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Validated outside the classroom."
        />

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map(({ title, issuer, icon, color }) => {
            const c = colorMap[color] ?? colorMap.indigo
            return (
              <RevealItem key={title}>
                <div className={`flex items-center gap-4 p-5 rounded-xl border ${c} transition-colors duration-300`}>
                  <div className="text-2xl shrink-0">{icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-200">{title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{issuer}</div>
                  </div>
                </div>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
