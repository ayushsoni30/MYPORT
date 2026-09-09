import { useState } from 'react'
import { FiCopy, FiCheck } from 'react-icons/fi'

const CODE_SAMPLE = `# Clone and inspect ZeniN AI technical mentor
git clone https://github.com/ayushsoni30/ZENIN--TECH--AI.git
cd ZENIN--TECH--AI
npm install

# Run backend & Claude API integration locally
npm run dev
# Server listening on http://localhost:5000 [OK]
# Claude API context stream initialized [200]`

export default function CodeSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SAMPLE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Developer Integration Copy */}
          <div className="lg:col-span-5 text-left">
            <div className="eyebrow-label mb-4">
              <span className="eyebrow-marker" />
              <span>DEVELOPER WORKFLOW</span>
            </div>

            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0] leading-tight mb-6">
              Or start with three lines of code.
            </h2>

            <p className="font-sans text-base md:text-lg text-[#777777] leading-relaxed mb-8">
              Every production system I build is architected for clean local reproduction, instant containerization, and zero-friction CI/CD deployment.
            </p>

            <div className="space-y-3 font-mono text-xs text-[#777777]">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#FF6900] shrink-0" />
                <span>Modular ES Module architecture with strict typing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#FF6900] shrink-0" />
                <span>Pre-configured Claude API streaming & rate limiters</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#FF6900] shrink-0" />
                <span>Single-command Docker container builds</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Window (DESIGN.md Section 20) */}
          <div className="lg:col-span-7">
            <div className="bg-[#151515] border border-[#252525] rounded-xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#111111] border-b border-[#252525] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#303030]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#303030]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#303030]" />
                  <span className="font-mono text-[11px] text-[#555555] ml-2 select-none">
                    bash — quickstart.sh
                  </span>
                </div>
                
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 font-mono text-[11px] text-[#777777] hover:text-[#F2F2F0] transition-colors duration-150 cursor-pointer"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-[#FF6900]" />
                      <span className="text-[#FF6900]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Window Body */}
              <div className="p-6 font-mono text-xs md:text-sm text-left overflow-x-auto leading-relaxed bg-[#0E0E0E]">
                <pre className="text-[#F2F2F0]">
                  <code>
                    <span className="text-[#555555]"># 1. Clone repository</span>{'\n'}
                    <span className="text-[#FF6900]">git</span> clone https://github.com/ayushsoni30/ZENIN--TECH--AI.git{'\n'}
                    <span className="text-[#FF6900]">cd</span> ZENIN--TECH--AI && <span className="text-[#FF6900]">npm</span> install{'\n\n'}
                    <span className="text-[#555555]"># 2. Start dev server with Claude API integration</span>{'\n'}
                    <span className="text-[#FF6900]">npm</span> run dev{'\n'}
                    <span className="text-[#777777]">&gt; Server listening on http://localhost:5000 [OK]</span>{'\n'}
                    <span className="text-[#777777]">&gt; Claude 3.5 Sonnet context stream initialized [200]</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
