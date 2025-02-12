const AboutMe = () => {
    const techStack = [
        { name: "React", img: "/react.png" },
        { name: "Node.js", img: "/nodejs.jpg" },
        { name: "Python", img: "/python.jpg" },
        { name: "C", img: "/c.png" },
        { name: "C++", img: "/cpp.png" },
        { name: "Express", img: "/express.png" },
        { name: "Ghidra", img: "/ghidra.png" },
        { name: "GitHub", img: "/github.png" },
        { name: "JavaScript", img: "/js.jpg" },
        { name: "MongoDB", img: "/mongo.png" },
        { name: "Sanity", img: "/sanity.png" },
        { name: "TypeScript", img: "/ts.jpg" },
        { name: "Burp Suite", img: "/burp.png" },
        { name: "Wireshark", img: "/wire.jpg" },
        { name: "Autopsy", img: "/autopsy.jpg" }
      ];
  
    const education = [
      { degree: "Electrical Engg.", school: "Jamia Millia Islamia", year: "2023-2027" },
    ];
  
    const experience = [
      { role: "Tech Team", company: "IEEE-JMI", duration: "2024-2025" },
      { role: "Graphics Team", company: "TRS-JMI", duration: "2023-2025" }
    ];
  
    return (
      <div className="w-screen mx-auto px-4 py-8">
        {/* Tech Stack Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-lime-500 shadow-lg p-2 mb-4 overflow-hidden transition-transform hover:scale-105">
                  <img 
                    src={tech.img} 
                    alt={tech.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-large font-bold">{tech.name.toLocaleUpperCase()}</span>
              </div>
            ))}
          </div>
        </section>
  
        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Education</h2>
          <div className="items-center justify-center flex">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border-2 border-lime-400 shadow-sm md:w-1/3 lg:w-2/3 w-screen">
                <h3 className="font-semibold text-lg text-lime-400">{edu.degree}</h3>
                <p className="text-white">{edu.school}</p>
                <p className="text-white text-sm mt-2">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Experience Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border-2 border-lime-400 shadow-sm">
                <h3 className="font-semibold text-lg text-lime-400">{exp.role}</h3>
                <p className="text-white">{exp.company}</p>
                <p className="text-white text-sm mt-2">{exp.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default AboutMe;