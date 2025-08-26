import { useState, useEffect } from "react";
import './body.css';

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shortText = `
Hello! I'm Vinojan.R, a passionate individual from Sri Lanka.  
My interests revolve around cybersecurity, web development, UI/UX design, and graphic design, which together define my unique blend of creativity and technical expertise.
My fascination with technology began years ago when I first explored the world of coding and design.  
I was fascinated not only by how websites and applications are built but also by how security plays a vital role in protecting them.  
Since then, I’ve dedicated myself to learning both the technical side of programming and the creative side of digital design.
`;

  const fullText = `
Hello! I'm Vinojan.R, a passionate individual from Sri Lanka.  
My interests revolve around cybersecurity, web development, UI/UX design, and graphic design, which together define my unique blend of creativity and technical expertise.

My fascination with technology began years ago when I first explored the world of coding and design.  
I was fascinated not only by how websites and applications are built but also by how security plays a vital role in protecting them.  
Since then, I’ve dedicated myself to learning both the technical side of programming and the creative side of digital design.

Through countless hours of practice, projects, and exploration, I’ve gained experience in multiple areas:
🔒 Cybersecurity – Diving into ethical hacking, penetration testing, and securing networks to ensure data safety.
💻 Web Development – Developing clean, responsive, and user-friendly websites that bring ideas to life.
🎨 UI/UX Design – Designing digital experiences that are both beautiful and functional, focusing on the end-user journey.
🖌️ Graphic Design – Crafting creative visuals, posters, logos, and branding materials that communicate ideas effectively.

I believe technology is not just about coding—it’s about solving problems, improving lives, and creating meaningful experiences.  
My creative side helps me design solutions, while my technical side ensures those solutions are built securely and efficiently.

Currently, I am expanding my skills by working on personal projects, contributing to collaborative work, and staying updated with the latest trends in security and design.  
My dream is to become a professional who can secure digital environments while also shaping creative experiences that inspire and connect people globally.

🚀 For me, every day is an opportunity to learn something new, challenge myself, and push the boundaries of what technology and design can achieve.
`;

  return (
    <div>
      <p className="md:text-[21px] text-green-500 whitespace-pre-line">
        {isMobile ? (expanded ? fullText : shortText) : fullText}
      </p>

     
      {isMobile && (
        <div className="mt-2 text-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="py-2.5 px-6 text-sm rounded-lg border border-solid border-emerald-200 text-emerald-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-emerald-600 hover:text-white"
          >
            {expanded ? "Read Less ▲" : "Read More ▼"}
          </button>
        </div>
      )}
    </div>
  );
}
