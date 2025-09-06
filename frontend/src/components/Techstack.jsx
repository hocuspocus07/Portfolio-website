import React from "react";
import { motion } from "framer-motion";

const categories = {
  "Programming Languages": ["Python", "JavaScript", "TypeScript", "C", "C++","Bash","HTML5","CSS3"],
  "Web Development": ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "TailwindCSS", "Sanity.io","PostgreSQL","Next.js","Bootstrap"],
  "Cybersecurity Tools": ["Burp Suite", "Ghidra", "Metasploit", "Wireshark", "Autopsy", "Linux Security Tools"],
  "Frameworks & Libraries": ["Socket.io", "RESTful APIs", "Stockfish Engine"],
  "Dev Tools": ["GitHub", "Docker", "Supabase", "ShadCN"],
};

function TechStackSection({ techStack }) {
  const getCategoryItems = (categoryNames) => {
    return techStack.filter((tech) => categoryNames.includes(tech.name));
  };

  return (
    <section className="mb-20 px-4 w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-green-400">[</span>
          <span className="text-gray-200 mx-2">TECH_STACK</span>
          <span className="text-green-400">]</span>
        </h2>
        <p className="text-gray-400 text-lg font-mono max-w-2xl mx-auto">
          &gt; Languages, frameworks, and security tools powering my projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(categories).map(([categoryName, categoryTechs], idx) => {
          const items = getCategoryItems(categoryTechs);
          return (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-black/40 border border-green-800/30 rounded-xl p-6 backdrop-blur-md hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(0,255,0,0.25)] transition-all duration-500"
            >
              <h3 className="text-lg font-mono text-green-400 mb-6 tracking-wider border-b border-green-900/50 pb-2 flex items-center">
                <span className="text-green-600 mr-2">&gt;</span>
                {categoryName.toUpperCase()}
                <span className="text-green-600/70 text-xs ml-2">[{items.length}]</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {items.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col items-center group hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-lg bg-black/50 border border-green-900/30 p-2 mb-3 overflow-hidden group-hover:border-green-500/50 group-hover:shadow-[0_0_12px_rgba(0,255,0,0.15)]">
                      <img
                        src={tech.img || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-full h-full"
                      />
                    </div>
                    <span className="text-xs text-gray-400 font-mono text-center group-hover:text-green-300 transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="fixed inset-0 pointer-events-none opacity-10 z-[-1] overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              top: '-20px',
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStackSection;
