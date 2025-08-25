import './body.css'
import About from './About'
import PortfolioCard from "./portfoliocard";
import Achievements from "./Achivements";
import { useState, useEffect } from "react";
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
      <span className="my-font text-[31px] md:text-[80px]">
        {displayedText}
        <span className="border-r-2 border-blue-400 animate-blink"></span>
      </span>
    );
  };

export default function Body(){
    return(
        <>
        <div flex-grow h-auto>
        <div class="flex flex-col mt-18 md:flex-row md:h-screen mb-4 ml-4 mr-4 text-[#20C20E]">            
                 <div class="flex md:flex-[40%] order-2 items-end justify-center overflow-hidden ">
                    <img src="./pic1.png" class="flex  md:h-175" alt="My Image" />
                  </div>              
              <div class="flex flex-col h-[175px] md:flex-[60%] pt-5 md:pt-40 order-1 pl-10 md:h-auto">   
  <div class="bg-black/40 backdrop-blur-xl rounded-xl p-4">
    <h1 class="text-[25px] md:text-[40px] text-cyan-400 font-bold leading-tight">
      Hello there!<br /> I am Vinojan.R<br />              
      <Typewriter />
    </h1>    
  </div>           
</div>          
        </div>
        <div id="about" class="flex flex-col gap-5 mr-4 ml-4">
                <div class="border-2 border-green-300 rounded-md h-auto bg-black backdrop-blur-md p-1.5" >
                        <h1 class="text-center text-green-500 text-[30px] font-bold">My story</h1>
                        <About />
                </div>
                <div id="skills" class="h-auto p-4 justify-center">
                        <h1 class="text-center text-white text-2xl font-bold ">Skills</h1>
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
                        <div id='projects' class="h-auto p-4
                                      bg-green-500/20          
                                      backdrop-blur-md         
                                      backdrop-saturate-150   
                                      border border-white/20   
                                      rounded-xl shadow-lg">
                                  <h1 class="text-center text-white text-2xl font-bold">My projects</h1>
                                  <div class="flex flex-col gap-3 pt-4">
                                      <PortfolioCard
                                        title="Responsive Portfolio"
                                        description="Here is my fine looking cyber security portfolio. This is one of my Here is my fine looking cyber security portfolio. This is one of great projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nulla.Here is my fine looking cyber security portfolio. This is one of my great projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit"               
                                        imageSrc="./image.png"
                                        link="#"
                                      />
                                      <PortfolioCard
                                        title="Responsive UI/UX design"
                                        description="Here is one of my figma design UI/UX ,this is for ride hailing application. This is one of great projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nulla.Here is my fine looking cyber security portfolio. This is one of my great projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit"               
                                        imageSrc="./image2.png"
                                        link="#"
                                      />
                                      <PortfolioCard
                                        title="Responsive UI/UX design"
                                        description="Here is one of my figma design UI/UX ,this is for our first year project website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nulla.Here is my fine looking cyber security portfolio. This is one of my great projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit"               
                                        imageSrc="./image3.png"
                                        link="#"
                                      />
                                      <PortfolioCard
                                        title="My art gallery"
                                        description="Here is one of my figma design UI/UX ,this is for our first year project website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tincidunt nulla.Here is my fine looking cyber security portfolio. This is one of my great projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit"               
                                        imageSrc="./image2.png"
                                        link="#"
                                      />
                                  </div>
                        </div>                      
                        <div id="blog" class="flex flex-col gap-4 h-110 pl-4 pr-4 pd-4">
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