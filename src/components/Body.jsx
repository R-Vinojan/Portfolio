import './body.css'
import About from './About'
import PortfolioCard from "./portfoliocard";
import Achievements from "./Achivements";
import { useState, useEffect } from "react";
import useScrollReveal from "./useScrollReveal";
 const Typewriter = () => {
    const words = [
      "cyber security",
      "software developer",
      "UI/UX designer",
      "graphic designer",
      "web developer",
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);

    useEffect(() => {
      const handleTyping = () => {
        const currentWord = words[currentWordIndex];

        if (isDeleting) {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
          setSpeed(50);
        } else {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          setSpeed(150);
        }

        if (!isDeleting && displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && displayedText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      };

      const timer = setTimeout(handleTyping, speed);
      return () => clearTimeout(timer);
    }, [displayedText, isDeleting]);

    return (
      <span className="my-font text-[38px] md:text-[80px]">
        {displayedText}
        <span className="border-r-2 border-blue-400 animate-blink"></span>
      </span>
    );
  };

export default function Body(){
  useScrollReveal();
    return(
        <>
        <div flex-grow h-auto>
        <div class="flex-grow h-auto">
  <div class="flex flex-col mt- md:flex-row md:h-screen mb-4 ml-4 mr-4 text-[#20C20E]">
    
    <div class="flex md:flex-[40%] order-2 items-end justify-center animate-slide-in-right">
  <img 
    src="./pic1.png" 
    alt="My Image"
    class="max-w-auto h-full object-contain"
  />
</div>


    <div id="home" class="flex flex-col h-[175px] md:flex-[60%] pt-5 md:pt-40 order-1  md:h-auto">   
      <div class="bg-black/40 backdrop-blur-md rounded-xl p-4 animate-slide-in-left">
        <h1 class="text-[25px] md:text-[40px] text-cyan-400 font-bold leading-tight">
          Hello there!<br /> I am Vinojan.R<br />              
          <Typewriter />
        </h1>    
      </div>           
    </div>          
  </div>
</div>

        <div id="about" class="flex flex-col gap-5 mr-4 ml-4">
                <div class="border-2 border-green-300 rounded-md h-auto bg-black backdrop-blur-md p-1.5" >
                        <h1 class="text-center text-green-500 text-4xl font-bold">My story</h1>
                        <About />
                </div>
                <div id="skills" class="h-auto p-4 justify-center scroll-reveal">
                        <h1 class="text-center text-white text-4xl font-bold ">Skills</h1>
                        <div class="grid grid-cols-3 md:grid-cols-5 gap-4 p-4 place-items-center">
                               <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./python.png" class="h-16 w-16 object-cover" alt="python" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./html.png" class="h-16 w-16 object-cover" alt="html" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./css.png" class="object-cover" alt="css" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./js.png" class="h-16 w-16 object-cover" alt="js" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./kali.jpg" class="object-cover" alt="kali" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./Linux.jpg" class="h-20 w-20 object-cover" alt="linux" />
                                </div>
                               <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./vite.svg" class="h-16 w-16 object-cover" alt="vite" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./figma.png" class="object-cover" alt="figma" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./react.png" class=" object-cover" alt="react" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./tailwind.jpg" class="object-cover" alt="tw" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./photoshop.png" class="object-cover" alt="ps" />
                                </div>
                                <div class="floating h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
                                  <img src="./illust.png" class="object-cover h-25 w-25" alt="illus" />
                                </div>
                          </div>

                </div>
                        <div id='projects' class="h-auto p-4 scroll-reveal
                                      bg-green-500/20          
                                      backdrop-blur-md         
                                      backdrop-saturate-150   
                                      border border-white/20   
                                      rounded-xl shadow-lg">
                                  <h1 class="text-center text-white text-4xl font-bold">My projects</h1>
                                  <div class="flex flex-col gap-3 pt-4">
                                      <PortfolioCard
                                        title="Responsive Portfolio"
                                        description="This project is my personal portfolio website, designed to showcase
                                         my skills, projects, and experiences. Built with React.js, TailwindCSS, and Vite.js, it delivers a fast, responsive, and modern user interface. The site highlights my work through a structured layout with smooth animations and interactive navigation. It also includes a contact section and CV download option, making it easy for visitors to connect with me. The design emphasizes simplicity while reflecting my personal branding."               
                                        imageSrc="./image.png"
                                        link="https://r-vinojan.github.io/Portfolio/"                                    
                                      />
                                      <PortfolioCard
                                        title="Responsive UI/UX design"
                                        description="I designed a user-friendly interface for an electric vehicle ride-hailing app focused on sustainability and convenience. The project emphasizes intuitive navigation, clean layouts, and seamless booking flows for riders. I applied modern UI/UX principles to create wireframes, prototypes, and interactive designs that enhance usability and accessibility. The design prioritizes eco-friendly branding, easy ride selection, and a smooth payment experience, providing users with a visually appealing, efficient, and engaging mobility solution."               
                                        imageSrc="./image2.png"
                                        link="https://www.figma.com/design/ofRQwzMcBWJYY82gNHT0QE/Untitled?node-id=0-1&t=LlJrZLXdVt7rTfFS-1"
                                      />
                                      <PortfolioCard
                                        title="Responsive UI/UX design"
                                        description="As part of my first-year group project, I contributed to designing a website interface using Figma. The focus was on creating a clean, user-friendly, and responsive layout that improved navigation and accessibility. I worked collaboratively with my team to design wireframes, prototypes, and interactive mockups that reflected our project goals. The design emphasized simplicity, consistency, and visual balance, helping us deliver a polished concept that showcased both creativity and strong teamwork."               
                                        imageSrc="./image3.png"
                                        link="https://www.figma.com/files/team/1519573859046699336/project/406176744/Team-project?fuid=1509796134536818436"
                                      />
                                      <PortfolioCard
                                        title="My art gallery"
                                        description="Alongside web development and UI/UX, I also work as a graphic designer specializing in creative digital art. My designs focus on visual storytelling, blending colors, textures, and unique styles to create impactful artwork. I regularly share my creations on Instagram, which I use as a personal art gallery. I primarily design using Adobe Illustrator and Adobe Photoshop. If you’d like to explore my artwork, simply click the banner below to view my gallery."               
                                        imageSrc="./image5.png"
                                        link="https://www.instagram.com/mr.vide.xt3r/?igsh=MTU0MnRkZzNyNGEzdw%3D%3D#"
                                      />
                                  </div>
                        </div>                      
                        <div id="blog" class="flex flex-col gap-4 h-110 pl-4 pr-4 pd-4 scroll-reveal">
                                <div class="flex flex-col gap-4 md:flex-row">          
                                    <Achievements />  
                                </div>
                        </div>  
      </div>      
      </div>
      <div>

      </div>
        </>
        
    )
}