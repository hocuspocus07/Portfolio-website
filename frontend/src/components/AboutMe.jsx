import TechStackSection from "./Techstack"
import ExperienceSection from "./Experience"
import EducationSection from "./Education"

const AboutMe = () => {
  const techStack = [
    // 🟢 Languages
    { name: "Python", img: "/python.png" },
    { name: "JavaScript", img: "/js.png" },
    { name: "TypeScript", img: "/ts.png" },
    { name: "C", img: "/c.png" },
    { name: "C++", img: "/cpp.png" },
    { name: "SQL", img: "/sql.png" },
    {name:"Bash", img:"/bash.png"},
    {name:"HTML5", img:"/html5.png"},
    {name:"CSS3", img:"/css3.png"},

    // 🟢 Web Development
    { name: "React.js", img: "/react.png" },
    { name: "Node.js", img: "/nodejs.png" },
    { name: "Express.js", img: "/express.png" },
    { name: "MongoDB", img: "/mongo.png" },
    { name: "MySQL", img: "/mysql.png" },
    {name:"PostgreSQL", img:"/postgresql.png"},
    { name: "TailwindCSS", img: "/tailwindcss.png" },
    { name: "Sanity.io", img: "/sanity.png" },
    {name:"Next.js", img:"/nextjs.png"},
    {name:"Bootstrap", img:"/bootstrap.png"},

    // 🟢 Cybersecurity Tools
    { name: "Burp Suite", img: "/burp.png" },
    { name: "Ghidra", img: "/ghidra.png" },
    { name: "Metasploit", img: "/metasploit.png" },
    { name: "Wireshark", img: "/wireshark.png" },
    { name: "Autopsy", img: "/autopsy.png" },
    { name: "Linux Security Tools", img: "/linux.png" },

    // 🟢 Frameworks & Libraries
    { name: "Socket.io", img: "/socket.io.png" },
    { name: "RESTful APIs", img: "/restful.png" },
    { name: "Stockfish Engine", img: "/stockfish.png" },

    // 🟢 Dev Tools
    { name: "GitHub", img: "/github.png" },
    { name: "Docker", img: "/docker.png" },
    { name: "Supabase", img: "/supabase.png" },
    { name: "ShadCN", img: "/shadcn.png" },
  ]

  const education = [
  { degree: "B.Tech in Electrical Engineering", school: "Jamia Millia Islamia", year: "2023-2027",
    metrics: ["GPA: 3.05 / 4", "Relevant coursework: Cybersecurity Fundamentals"] },
  { degree: "12th Grade (PCM+CS)", school: "JB Academy", year: "2022",
    metrics: ["94% aggregate", "Distinction in Computer Science"] },
  { degree: "10th Grade", school: "JB Academy", year: "2020",
    metrics: ["95.17% aggregate", "Distinction in CS, Math, English", "Participated in football & art competitions"] }
]

const experience = [
  { role: "Tech Team Member", company: "IEEE-JMI", duration: "2024-2025",
    metrics: ["Worked on collaborative tech projects", "Supported events & workshops"] },
  { role: "Graphics Team Member", company: "TRS-JMI", duration: "2023-2025",
    metrics: ["Designed event posters & digital assets", "Led visual branding initiatives"] },
  { role: "Web Development Team Member", company: "The Jamia Review", duration: "2025-Present",
    metrics: ["Contributed to web development tasks", "Maintained and enhanced digital presence"] }
]


  return (
    <div className="h-full w-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-16">
        <TechStackSection techStack={techStack} />
        <EducationSection education={education} />
        <ExperienceSection experience={experience} />
      </div>
    </div>
  )
}

export default AboutMe
