import { motion } from 'framer-motion'

const BENCHMARKS = [
  {
    target: 'CLAUDE 3.5 SONNET API STREAMING',
    score: '142ms',
    width: '94%',
    highlight: true,
    note: 'Custom prompt optimization & edge proxy',
  },
  {
    target: 'LIGHTHOUSE WEB PERFORMANCE (CORE VITALS)',
    score: '98 / 100',
    width: '90%',
    highlight: false,
    note: 'Zero unused JS, Vite bundle tree-shaking',
  },
  {
    target: 'MONGODB AGGREGATION QUERY LATENCY',
    score: '34ms',
    width: '76%',
    highlight: false,
    note: 'Indexed compound keys & lean query projection',
  },
  {
    target: 'REST API ENDPOINT RESPONSE TIME',
    score: '48ms',
    width: '68%',
    highlight: false,
    note: 'Express middleware compression & cache headers',
  },
]

export default function Benchmarks() {
  return (
    <section id="benchmarks" className="py-24 border-b border-[#252525] bg-[#0B0B0B] relative">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Technical Evidence Copy */}
          <div className="lg:col-span-5 text-left">
            <div className="eyebrow-label mb-4">
              <span className="eyebrow-marker" />
              <span>BENCHMARK DATA</span>
            </div>
            
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-[#F2F2F0] leading-tight mb-6">
              Independent measurements, not claims.
            </h2>

            <p className="font-sans text-base md:text-lg text-[#777777] leading-relaxed mb-8">
              Rigorous performance testing across real network conditions. Every system is built to minimize latency, eliminate runtime bottlenecks, and maximize responsiveness under load.
            </p>

            <div className="border-t border-[#252525] pt-6 space-y-3 font-mono text-xs text-[#555555]">
              <div className="flex items-center justify-between">
                <span>TEST HARNESS:</span>
                <span className="text-[#F2F2F0]">Vite 8 + Vercel Edge</span>
              </div>
              <div className="flex items-center justify-between">
                <span>CONCURRENCY PROFILE:</span>
                <span className="text-[#F2F2F0]">100 simulated requests</span>
              </div>
              <div className="flex items-center justify-between">
                <span>VERIFICATION STATUS:</span>
                <span className="text-[#FF6900]">PASSING // 100% SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flat Technical Benchmark Bars */}
          <div className="lg:col-span-7 space-y-6">
            {BENCHMARKS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#111111] border border-[#252525] p-5 hover:border-[#303030] transition-colors duration-150"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-semibold tracking-wider text-[#F2F2F0]">
                    {item.target}
                  </span>
                  <span className={`font-mono text-sm font-bold ${item.highlight ? 'text-[#FF6900]' : 'text-[#777777]'}`}>
                    {item.score}
                  </span>
                </div>

                {/* Progress Track */}
                <div className="w-full bg-[#151515] h-2 mb-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                    className={`h-full ${item.highlight ? 'bg-[#FF6900]' : 'bg-[#555555]'}`}
                  />
                </div>

                <div className="font-mono text-[10px] text-[#555555]">
                  {item.note}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
