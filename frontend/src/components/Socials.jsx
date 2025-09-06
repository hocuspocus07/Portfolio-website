import React from 'react'
import Card from './Cards.jsx'

function Socials() {
  const socialsList = {
    'github': {
      title: 'GitHub',
      image: 'github.png',
      link:'https://github.com/hocuspocus07',
    },
    'linkedin': {
      title: 'LinkedIn',
      image: 'linkedin.jpg',
      link:'https://in.linkedin.com/in/sajjadhasnain',
    },
    'tryhackme': {
      title: 'TryHackMe',
      image: 'tryhackme.png',
      link:'https://tryhackme.com/p/hocuspocus01',
    },
    'picoctf':{
      title:'PicoCTF',
      image:'picoctf.jpg',
      link:'https://play.picoctf.org/users/hocuspocus1',
    }
  }
  
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center py-12'>
      <h1 className='text-green-400 font-mono font-bold text-4xl mb-4'>
        <span className="text-green-600">[</span>SOCIALS<span className="text-green-600">]</span>
      </h1>
      <p className="text-gray-400 font-mono mb-8">&gt; Connect with me across platforms</p>
      
      <div className='flex flex-wrap justify-center gap-8'>
        {Object.keys(socialsList).map((key) => (
          <Card key={key} title={socialsList[key].title} image={socialsList[key].image} link={socialsList[key].link} />
        ))}
      </div>
    </div>
  )
}

export default Socials;