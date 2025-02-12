import React from 'react'
import Card from './Cards.jsx'

function Socials() {
  const socialsList = {
    'github': {
      title: 'Github',
      image: 'github.png',
      link:'https://github.com/hocuspocus07',
    },
    'linkedin': {
      title: 'Linkedin',
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
<div className='w-screen h-auto flex flex-col justify-center items-center'>
  <h1 className='text-white font-bold text-4xl mb-4'>Socials</h1>
    <div className='flex flex-wrap justify-center space-x-4 space-y-4 md:space-x-20 md:space-y-20'>
      {Object.keys(socialsList).map((key) => (
        <Card key={key} title={socialsList[key].title} image={socialsList[key].image} link={socialsList[key].link} />
      ))}
    </div>
    </div>
  )
}

export default Socials