import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCpu, FiServer, FiLayers, FiDatabase, FiPlay, FiCheck, FiActivity } from 'react-icons/fi'

const NODES = [
  {
    id: 'client',
    title: 'CLIENT LAYER',
    tech: 'React 18 + Vite',
    status: 'ACTIVE',
    latency: '12ms',
    icon: FiLayers,
    desc: 'Component tree optimization, client-side caching, zero layout shift.',
  },
  {
    id: 'gateway',
    title: 'API GATEWAY',
    tech: 'Node / Express',
    status: 'OPTIMAL',
    latency: '24ms',
    icon: FiServer,
    desc: 'Stateless JWT validation, CORS rate limiters, gzip stream compression.',
  },
  {
    id: 'ai',
    title: 'AI INFERENCE',
    tech: 'Claude 3.5 Sonnet',
    status: 'STREAMING',
    latency: '142ms',
    icon: FiCpu,
    desc: 'Dynamic prompt evaluation, domain-restricted mentor context, token streaming.',
  },
  {
    id: 'db',
    title: 'PERSISTENCE',
    tech: 'MongoDB Atlas',
    status: 'CONNECTED',
    latency: '18ms',
    icon: FiDatabase,
    desc: 'Compound index queries, persistent session threading, lean projections.',
  },
]

const INFERENCE_STEPS = [
  { role: 'SYS', text: 'Initializing AI context session with Claude 3.5 Sonnet...' },
  { role: 'REQ', text: 'POST /v1/mentor/eval { prompt: "Architect scalable MERN + RAG pipeline" }' },
  { role: 'RES', text: 'Analyzing requirements: Partitioning microservices, applying compound indexing...' },
  { role: 'RES', text: 'Inference speed: 454 tok/s | TTFT: 112ms | Memory footprint: 34.2 MB' },
  { role: 'OK', text: 'System ready: 3 production applications deployed and operational.' },
]

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('topology') // 'topology' | 'stream' | 'telemetry'
  const [selectedNode, setSelectedNode] = useState(NODES[2]) // Default to AI
  const [streamIndex, setStreamIndex] = useState(INFERENCE_STEPS.length)
  const [isStreaming, setIsStreaming] = useState(false)

  // Interactive Stream Runner
  const runStream = () => {
    setIsStreaming(true)
    setStreamIndex(1)
  }

  useEffect(() => {
    if (!isStreaming) return
    if (streamIndex < INFERENCE_STEPS.length) {
      const timer = setTimeout(() => {
        setStreamIndex((prev) => prev + 1)
      }, 650)
      return () => clearTimeout(timer)
    } else {
      setIsStreaming(false)
    }
  }, [isStreaming, streamIndex])

  return (
    <div className="w-full max-w-lg mx-auto bg-[#111111] border border-[#252525] rounded-[4px] overflow-hidden shadow-2xl text-left select-none group">
      
      {/* 1. Technical Window Header with Tabs */}
      <div className="px-4 py-3 bg-[#0E0E0E] border-b border-[#252525] flex flex-wrap items-center justify-between gap-3">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#252525]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#252525]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#252525]" />
          <span className="font-mono text-[10px] text-[#555555] ml-2 hidden sm:inline">
            CORE_CONSOLE // v2.4
          </span>
        </div>

        {/* Minimal Navigation Tabs (DESIGN.md Section 19) */}
        <div className="flex items-center gap-1 border border-[#252525] p-0.5 bg-[#141414]">
          <button
            onClick={() => setActiveTab('topology')}
            className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
              activeTab === 'topology'
                ? 'bg-[#F2F2F0] text-[#0B0B0B] font-bold'
                : 'text-[#777777] hover:text-[#F2F2F0]'
            }`}
          >
            TOPOLOGY
          </button>
          <button
            onClick={() => setActiveTab('stream')}
            className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
              activeTab === 'stream'
                ? 'bg-[#F2F2F0] text-[#0B0B0B] font-bold'
                : 'text-[#777777] hover:text-[#F2F2F0]'
            }`}
          >
            STREAM
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
              activeTab === 'telemetry'
                ? 'bg-[#F2F2F0] text-[#0B0B0B] font-bold'
                : 'text-[#777777] hover:text-[#F2F2F0]'
            }`}
          >
            TELEMETRY
          </button>
        </div>
      </div>

      {/* 2. Interactive Body Area */}
      <div className="p-5 md:p-6 min-h-[360px] flex flex-col justify-between bg-[#111111]">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: SYSTEM TOPOLOGY & NODE GRAPH */}
          {activeTab === 'topology' && (
            <motion.div
              key="topology"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-[#777777] border-b border-[#202020] pb-2">
                <span>INTERACTIVE NODE TOPOLOGY</span>
                <span className="flex items-center gap-1.5 text-[#FF6900]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6900] animate-ping" />
                  FLOW: NORMAL
                </span>
              </div>

              {/* 4 Node Grid with Interactive Selection */}
              <div className="grid grid-cols-2 gap-3 relative">
                {NODES.map((node) => {
                  const Icon = node.icon
                  const isSelected = selectedNode.id === node.id

                  return (
                    <div
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`p-3.5 bg-[#151515] border cursor-pointer transition-all duration-150 relative ${
                        isSelected
                          ? 'border-[#FF6900] bg-[#181818]'
                          : 'border-[#252525] hover:border-[#353535]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon
                          className={`text-sm ${
                            isSelected ? 'text-[#FF6900]' : 'text-[#777777]'
                          }`}
                        />
                        <span className="font-mono text-[9px] text-[#555555]">
                          {node.latency}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] font-bold text-[#F2F2F0]">
                        {node.title}
                      </div>
                      <div className="font-mono text-[10px] text-[#777777] mt-0.5 truncate">
                        {node.tech}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Selected Node Deep-Dive Drawer */}
              <div className="mt-4 p-4 bg-[#0E0E0E] border border-[#252525]">
                <div className="flex items-center justify-between border-b border-[#202020] pb-2 mb-2 font-mono text-[10px]">
                  <span className="text-[#FF6900] font-bold">
                    [INSPECTION] // {selectedNode.title}
                  </span>
                  <span className="text-[#555555] uppercase">
                    STATUS: {selectedNode.status}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#888888] leading-relaxed">
                  {selectedNode.desc}
                </p>
                <div className="mt-3 pt-2 border-t border-[#1C1C1C] flex justify-between font-mono text-[9px] text-[#555555]">
                  <span>LATENCY BUDGET: OK</span>
                  <span>STACK: {selectedNode.tech}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: REAL-TIME INFERENCE STREAM */}
          {activeTab === 'stream' && (
            <motion.div
              key="stream"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-[#777777] border-b border-[#202020] pb-2">
                <span>CLAUDE_3.5_SONNET RUNTIME STREAM</span>
                <button
                  onClick={runStream}
                  disabled={isStreaming}
                  className="flex items-center gap-1 text-[10px] text-[#FF6900] hover:text-[#FFA200] disabled:opacity-50 cursor-pointer font-mono"
                >
                  <FiPlay className="text-[9px]" />
                  <span>{isStreaming ? 'STREAMING...' : 'RERUN STREAM'}</span>
                </button>
              </div>

              {/* Terminal Output Log */}
              <div className="bg-[#0A0A0A] border border-[#252525] p-3.5 font-mono text-[11px] space-y-2 min-h-[220px]">
                {INFERENCE_STEPS.slice(0, streamIndex).map((step, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start gap-2 leading-relaxed"
                  >
                    <span
                      className={`text-[9px] px-1 py-0.2 border shrink-0 ${
                        step.role === 'SYS'
                          ? 'border-[#303030] text-[#777777]'
                          : step.role === 'REQ'
                          ? 'border-[#FF6900]/40 text-[#FF6900]'
                          : step.role === 'OK'
                          ? 'border-green-500/40 text-green-400'
                          : 'border-[#252525] text-[#999999]'
                      }`}
                    >
                      {step.role}
                    </span>
                    <span className="text-[#C0C0C0] text-[11px]">{step.text}</span>
                  </motion.div>
                ))}

                {isStreaming && (
                  <div className="flex items-center gap-1.5 text-[#FF6900] text-[10px] pt-1">
                    <span className="w-1.5 h-1.5 bg-[#FF6900] animate-ping" />
                    <span>evaluating tokens...</span>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 3: SYSTEM HEALTH & TELEMETRY */}
          {activeTab === 'telemetry' && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-[#777777] border-b border-[#202020] pb-2">
                <span>SYSTEM HEALTH METRICS</span>
                <span className="text-green-400 font-mono text-[10px]">ALL PASSING</span>
              </div>

              {/* Monospace Metric Table */}
              <div className="space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 bg-[#151515] border border-[#202020]">
                  <span className="text-[#777777]">API_GATEWAY_THROUGHPUT</span>
                  <span className="text-[#F2F2F0] font-bold">1,240 req/s</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#151515] border border-[#202020]">
                  <span className="text-[#777777]">AVG_TTFT (CLAUDE_STREAM)</span>
                  <span className="text-[#FF6900] font-bold">114ms</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#151515] border border-[#202020]">
                  <span className="text-[#777777]">MONGODB_QUERY_COMPRESSION</span>
                  <span className="text-[#F2F2F0] font-bold">84.2%</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-[#151515] border border-[#202020]">
                  <span className="text-[#777777]">EDGE_CACHE_HIT_RATIO</span>
                  <span className="text-green-400 font-bold">98.6%</span>
                </div>
              </div>

              {/* Dynamic Waveform Simulation */}
              <div className="p-3 bg-[#0E0E0E] border border-[#252525]">
                <div className="flex justify-between font-mono text-[9px] text-[#555555] mb-2">
                  <span>REALTIME JITTER PROFILE</span>
                  <span className="text-[#FF6900]">±2.4ms STABLE</span>
                </div>
                <div className="h-8 w-full flex items-end">
                  <svg viewBox="0 0 200 30" className="w-full h-full text-[#FF6900]">
                    <path
                      d="M 0,15 Q 20,5 40,18 T 80,12 T 120,24 T 160,8 T 200,15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* 3. Window Status Bar (DESIGN.md Section 13/20) */}
      <div className="px-4 py-2.5 bg-[#0E0E0E] border-t border-[#252525] flex items-center justify-between font-mono text-[10px] text-[#555555]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6900]" />
          <span className="text-[#777777]">EDGE_DEPLOYED // VERCEL</span>
        </div>
        <div className="flex items-center gap-3">
          <span>SLA: 99.9%</span>
          <span className="text-[#FF6900]">TLS 1.3</span>
        </div>
      </div>

    </div>
  )
}
