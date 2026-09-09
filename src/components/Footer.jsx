import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#252525] text-left pt-16 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#F2F2F0] tracking-wider">
              <span className="w-2 h-2 bg-[#FF6900]" />
              <span>AYUSH SONI // ENGINEERING</span>
            </div>
            
            <p className="font-sans text-sm text-[#777777] max-w-sm leading-relaxed">
              Industrial full stack engineering and AI systems architecture. Built with React 18, Node.js, and Claude API.
            </p>

            <div className="font-mono text-[11px] text-[#555555] pt-2">
              LUCKNOW, UP, INDIA • UTC+5:30
            </div>
          </div>

          {/* Col 2: Architecture & Specs (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F2F2F0] font-semibold">
              SECTIONS
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#777777]">
              <li>
                <a href="#about" className="hover:text-[#F2F2F0] transition-colors duration-150">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F2F2F0] transition-colors duration-150">
                  Deployed Systems
                </a>
              </li>
              <li>
                <a href="#benchmarks" className="hover:text-[#F2F2F0] transition-colors duration-150">
                  Benchmarks
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F2F2F0] transition-colors duration-150">
                  Tech Matrix
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F2F2F0] transition-colors duration-150">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Deployed Systems (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F2F2F0] font-semibold">
              DEPLOYED WORK
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#777777]">
              <li>
                <a
                  href="https://zenin-tech-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6900] transition-colors duration-150 flex items-center gap-1"
                >
                  <span>ZeniN AI Mentor</span>
                  <FiArrowUpRight className="text-[10px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://quizii-by-ayush.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6900] transition-colors duration-150 flex items-center gap-1"
                >
                  <span>Quizii Assessment</span>
                  <FiArrowUpRight className="text-[10px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://hirecore.localplayer.dev/landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6900] transition-colors duration-150 flex items-center gap-1"
                >
                  <span>HireCoreOS Platform</span>
                  <FiArrowUpRight className="text-[10px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ayushsoni30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F2F0] transition-colors duration-150 flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <FiArrowUpRight className="text-[10px]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Network (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F2F2F0] font-semibold">
              NETWORK
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#777777]">
              <li>
                <a
                  href="https://github.com/ayushsoni30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F2F0] transition-colors duration-150 flex items-center gap-1.5"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ayushsoni3030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F2F0] transition-colors duration-150 flex items-center gap-1.5"
                >
                  <FiLinkedin />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=ayushsoni55aa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F2F0] transition-colors duration-150 flex items-center gap-1.5"
                >
                  <FiMail />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 border-t border-[#252525] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#555555]">
          <div>
            DESIGNED & DEVELOPED BY AYUSH SONI © {currentYear}
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#777777]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6900]" />
              SYSTEM_STATUS: OPERATIONAL
            </span>
            <span>SPEC: DESIGN_MD_DITTO</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
