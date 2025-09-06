import React, { useEffect, useState } from 'react';
import { client } from '../sanity/client.ts';
import Card from './Cards.jsx';
import { motion } from "framer-motion"

function ProjComp() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type=="project"]{name,description,link,repo,"imageUrl":preview.asset->url}`)
      .then((data) => setProjects(data))
      .catch((error) => console.log("error:", error));
  }, []);

  const handleRepoClick = (repoUrl) => {
    window.open(repoUrl, '_blank');
  };

  return (
    <div className='text-center w-screen text-white min-h-screen py-8'>
      <h1 className='text-4xl m-4 font-bold font-mono text-green-400'>
        <span className="text-green-600">[</span>PROJECTS<span className="text-green-600">]</span>
      </h1>
      <p className="text-gray-400 font-mono mb-8">&gt; Click on a project to view it</p>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col justify-center items-center bg-black/40 backdrop-blur-sm border border-green-800/30 rounded-lg p-6 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] transition-all duration-500"
          >
            <Card title={proj.name} description={proj.description} image={proj.imageUrl} link={proj.link} repo={proj.repo}/>
            <button
              className='w-[160px] h-10 bg-black/40 border border-green-700/30 text-green-400 rounded-lg mt-4 hover:bg-green-900/40 hover:border-green-500/50 transition-all duration-300 font-mono text-sm'
              onClick={() => handleRepoClick(proj.repo)}
            >
              VIEW_REPO
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProjComp;
