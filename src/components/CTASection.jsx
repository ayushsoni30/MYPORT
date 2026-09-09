import { FiArrowUpRight, FiFileText } from 'react-icons/fi'

export default function CTASection() {
  return (
    <section className="bg-[#FF6900] text-[#0B0B0B] py-24 md:py-32 px-6 md:px-12 relative z-20">
      <div className="max-w-5xl mx-auto text-left">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#0B0B0B]/80 font-bold mb-6">
          <span className="w-2 h-2 bg-[#0B0B0B] inline-block" />
          <span>PRODUCTION-READY TALENT</span>
        </div>

        {/* Huge Headline */}
        <h2 className="font-sans text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-[#0B0B0B] leading-[1.05] mb-8">
          High speed. Deep technical rigor.
          <br className="hidden sm:inline" /> Let's build together.
        </h2>

        <p className="font-sans text-lg md:text-xl text-[#0B0B0B]/85 max-w-2xl leading-relaxed mb-10 font-medium">
          Available immediately for Full Stack Developer, Frontend Engineer, and AI Integration roles. Let's engineer scalable software that solves real enterprise problems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0B0B0B] text-[#FF6900] font-mono text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-all duration-150 cursor-pointer shadow-lg"
          >
            <span>START A CONVERSATION</span>
            <FiArrowUpRight className="text-base" />
          </a>

          <a
            href="https://drive.google.com/file/d/1NSBH94j34LY_SjHJsJv7tk_PZ33ooFAx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[#0B0B0B] border-2 border-[#0B0B0B] font-mono text-sm font-bold tracking-wide uppercase px-8 py-4 rounded-full hover:bg-[#0B0B0B]/10 transition-all duration-150 cursor-pointer"
          >
            <FiFileText />
            <span>VIEW RESUME</span>
          </a>
        </div>
      </div>
    </section>
  )
}
