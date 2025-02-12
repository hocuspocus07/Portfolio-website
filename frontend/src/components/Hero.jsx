import React from 'react'

function Hero() {
    return (
        <div id="container" className="flex px-24 justify-center relative w-screen">

            <div id="container" className="p-10 sm:p-16 md:p-10 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
                <div className="md:mr-10">
                    <img
                        className="rounded-lg min-w-[100px] w-80 h-auto md:w-auto md:h-96"
                        src="me.jpeg"
                        alt="image of myself"
                    />
                </div>
                <div className="w-full sm:w-[70%] md:w-[65%] lg:w-[65%]">
                    <h1 className="text-white league-bold text-3xl mt-6 mb-8">
                        SYED SAJJAD HASNAIN
                    </h1>

                    <p className="text-white w-full sm:w-[35rem] md:w-[50rem] lg:w-[50rem] mb-10">
                    I am an Electrical Engineering student with a major in Cybersecurity. I enjoy solving CTFs, exploring penetration testing, cryptography, and anything that sharpens my security skills. On the side, I'm learning MERN stack development, building secure and functional web applications. Always curious and eager to learn, I'm constantly exploring new technologies. 
                    </p>

                    <div id="portfolio" className="flex flex-wrap justify-center items-center gap-4 w-full">
                        <a rel="noopener" target="_blank" href="resume.pdf" className="bg-gray-800 rounded-lg p-5 w-80 flex items-center gap-2 text-lime-400 justify-center hover:bg-blue-950 hover:scale-110 transition-all duration-300">
                        <span className='text-xl'><ion-icon name="document-sharp"></ion-icon></span>
                            <span>Download resume</span>
                        </a>
                        <a rel="noopener" target="_blank" href="https://ssajjad-portfolio.netlify.app/" className="bg-gray-800 rounded-lg p-5 w-80 flex items-center gap-1 text-lime-400 justify-center hover:bg-blue-950 hover:scale-110 transition-all duration-300">
                        <span className='text-xl'><ion-icon name="desktop-sharp"></ion-icon></span>
                        <span>Windows95 themed portfolio (old)</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero