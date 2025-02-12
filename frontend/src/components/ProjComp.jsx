import React, { useEffect, useState } from 'react';
import { client } from '../sanity/client.ts';
import Card from './Cards.jsx';

function ProjComp() {
    const [projects,setProjects]=useState([]);

    useEffect(()=>{
        client.fetch(`*[_type=="project"]{name,description,link,repo,"imageUrl":preview.asset->url}`)
        .then((data)=>{
            setProjects(data);
            console.log(data);
        }).catch((error)=>console.log("erorr:",error));
    },[]);
    const handleRepoClick = (repoUrl) => {
        window.open(repoUrl);
    };
  return (
    <div className='text-center w-screen text-white'>
            <h1 className='text-4xl m-4 font-bold'>Click on a project to view it.</h1>
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-20 my-20">
                {projects.map((proj, index) => (
                    <div key={index} className='flex flex-col justify-center items-center'>
                    <Card title={proj.name} description={proj.description} image={proj.imageUrl} link={proj.link} repo={proj.repo}/>
                    <button 
                            className='w-[160px] h-10 bg-gray-800 border-2 border-lime-400 text-lime-400 rounded-lg mt-4 hover:bg-lime-400 hover:text-white transition-colors font-bold hover:cursor-pointer'
                            onClick={() => handleRepoClick(proj.repo)}
                        >
                            GO TO REPO
                        </button>
</div>
                ))}
            </div>
        </div>
  )
}

export default ProjComp