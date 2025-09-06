import React, { useState } from "react"
import { GraduationCap } from "lucide-react"

const EducationSection = ({ education }) => {
  const [activeMetrics, setActiveMetrics] = useState(null)

  return (
    <section className="mb-20 px-4 w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-green-400">[</span>
          <span className="text-gray-200 mx-2">EDUCATION</span>
          <span className="text-green-400">]</span>
        </h2>
        <p className="text-gray-400 text-lg font-mono max-w-2xl mx-auto">
          &gt; Academic credentials and learning journey
        </p>
      </div>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-6 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-green-900/20 border border-green-700/30 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-mono font-semibold text-green-300 mb-2">
                  &gt; {edu.degree}
                </h3>
                <p className="text-green-400 font-mono text-sm mb-2">{edu.school}</p>
                <p className="text-gray-400 font-mono text-xs border-t border-green-900/30 pt-2 mt-2">
                  [PERIOD] {edu.year}
                </p>
                <button
                  onClick={() => setActiveMetrics(index)}
                  className="mt-3 bg-green-900/40 text-green-300 px-4 py-1 rounded-md border border-green-700/40 hover:bg-green-800/60 hover:border-green-500/50 transition-all duration-300 font-mono text-xs"
                >
                  [SHOW_METRICS]
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup for metrics */}
      {activeMetrics !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-black/80 border border-green-600/50 rounded-lg shadow-lg p-8 w-11/12 md:w-3/4 lg:w-1/2 font-mono">
            <h3 className="text-2xl font-bold text-green-300 mb-6">&gt; Metrics</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {education[activeMetrics].metrics.map((m, i) => (
                <li key={i}>- {m}</li>
              ))}
            </ul>
            <div className="text-right mt-6">
              <button
                onClick={() => setActiveMetrics(null)}
                className="bg-green-900/40 text-green-300 px-4 py-2 rounded-md border border-green-700/40 hover:bg-green-800/60 hover:border-green-500/50 transition-all duration-300 text-sm tracking-wider"
              >
                [CLOSE]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default EducationSection
