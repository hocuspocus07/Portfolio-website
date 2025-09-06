import { Download, ExternalLink } from "lucide-react"

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-shrink-0">
            <div className="relative group">
              <img
                className="rounded-lg w-72 h-72 lg:w-80 lg:h-80 object-cover shadow-2xl border-2 border-green-700/40 group-hover:border-green-400/70 transition-all duration-500"
                src="pfp.png"
                alt="Syed Sajjad Hasnain"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-green-500/10 to-green-700/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-green-500/30 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none" />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="mb-3 font-mono text-green-500 text-sm tracking-[0.2em] uppercase">
              &gt; WELCOME_TO_MY_PORTFOLIO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight font-mono leading-tight">
              <span className="text-gray-300">SYED_SAJJAD</span>
              <span className="block text-green-400 mt-2 drop-shadow-[0_0_8px_#00ff00]">HASNAIN</span>
            </h1>

            <div className="h-1 w-20 bg-green-500 mb-8 mx-auto lg:mx-0 rounded" />

            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-mono">
              &gt; Electrical Engineering student specializing in <span className="text-green-400">Cybersecurity</span>. <br />
              CTF solver, penetration testing enthusiast, and <span className="text-green-300">MERN stack developer</span>. <br />
              Continuously exploring the intersection of <span className="text-green-400">hardware</span> and <span className="text-green-300">software security</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-green-900/30 hover:bg-green-800/50 text-green-400 hover:text-green-300 px-6 py-3 rounded-lg font-mono border border-green-700/40 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,0,0.2)]"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>[DOWNLOAD_RESUME]</span>
              </a>

              <a
                href="https://ssajjad-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-black/40 hover:bg-gray-800/60 text-gray-400 hover:text-gray-200 px-6 py-3 rounded-lg font-mono border border-gray-700/40 hover:border-gray-500/50 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                <span>[LEGACY_PORTFOLIO]</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
