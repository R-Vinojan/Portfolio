import './body.css'
import About from './About'
export default function Body(){
    return(
        <>
        <div class="flex flex-col md:flex-row h-156 mb-4 ml-6 mr-6 text-[#20C20E]">
      <div class="flex flex-row md: flex-col md:flex-row h-156 flex-[60%]">
      <div class="flex flex-[65%] md:flex-[67] pt-5 md:pt-40">
            <h1 class="text-[25px] md:text-[40px]">Hello there!<br /> I am Vinojan.R<br /><p class="my-font text-[31px] md:text-[60px]">cyber security</p></h1>
       </div>
      <div class="flex flex-[40%] md:flex-[33%] items-end justify-center overflow-visible ">
            <img src="./pic.png" class="absolute h-90 z-10 pr-5  md:h-160" alt="My Image" />
      </div>
      </div>
      <div class="flex-[40%] pt-5 md:pt-40 ">
            <h1 class="text-[25px] md:text-[40px]">Wecome to my<br /><b class="my-font text-[43px] md:text-[60px]">portfolio</b></h1>
       </div>
    </div>
    <div class="flex flex-col gap-4 mr-4 ml-4">
        <div class="border-2 border-green-300 rounded-md h-auto bg-black backdrop-blur-md p-1.5" >
          <h1 class="text-center text-green-500 text-[30px] font-bold">My story</h1>
            <About />
          </div>
          <div class="h-auto p-4 justify-center">
          <h1 class="text-center text-white text-2xl font-bold ">Skills</h1>
       <div class="grid grid-cols-3 md:grid-cols-5 gap-4 p-4 place-items-center">
  <div class="h-20 w-20 bg-black rounded-full overflow-hidden flex border-2 border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./python.png" class="h-20 w-20 object-cover" alt="python" />
  </div>
  <div class="h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./html.png" class="h-16 w-16 object-cover" alt="html" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./css.png" class="object-cover" alt="css" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./js.png" class="h-16 w-16 object-cover" alt="js" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./kali.jpg" class="object-cover" alt="kali" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./Linux.jpg" class="h-20 w-20 object-cover" alt="linux" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./vite.svg" class="h-16 w-16 object-cover" alt="vite" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./figma.png" class="object-cover" alt="figma" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./react.png" class=" object-cover" alt="react" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./tailwind.jpg" class="object-cover" alt="tw" />
  </div>
  <div class="h-20 w-20 black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./photoshop.png" class="object-cover" alt="ps" />
  </div>
  <div class="h-20 w-20 bg-black rounded-full overflow-hidden flex items-center justify-center border-2 hover:border-sky-400 shadow-[0_0_10px_2px_rgba(56,189,248,0.9),0_0_25px_10px_rgba(56,189,248,0.6)]">
    <img src="./illust.png" class="object-cover h-25 w-25" alt="illus" />
  </div>
</div>

          </div>
           <div class="h-auto p-4
                        bg-green-500/20          
                        backdrop-blur-md         
                        backdrop-saturate-150   
                        border border-white/20   
                        rounded-xl shadow-lg">
          <h1 class="text-center text-white text-2xl font-bold">My projects</h1>
          <div class="flex flex-col gap-3 pt-4">
            <div>
              <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="./image.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Responsive portfolio</h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here is my fine looking cyber security portfolio,this is one of my greate project</p>
                    </div>
              </a>
            </div>
            <div>
              <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="./image2.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Responsive UI/UX design</h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here is one of my figma design UI/UX ,this is for ride hailing application</p>
                    </div>
              </a>
            </div>
            <div>
              <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="./image3.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Responsive UI/UX design</h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here is one of my figma design UI/UX ,this is for our first year project website</p>
                    </div>
              </a>
            </div>
            <div>
              <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-100 md:rounded-none md:rounded-s-lg" src="./image4.png" alt=""/>
                    <div class="flex flex-col justify-between p-4 leading-normal">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">My art gallery</h5>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here is my fine looking cyber security portfolio,this is one of my greate project</p>
                    </div>
              </a>
            </div>
          </div>
          </div>                      
               <div class="flex flex-col gap-4 h-110 pl-4 pr-4 pd-4">
          <h1 class="text-center text-white text-2xl font-bold">my achivements</h1>
        <div class="flex flex-col gap-4 md:flex-row">          
                <div class="h-20 w-full bg-blue-500 border-2 border-sky-400 rounded-md shadow-[0_0_5px_skyblue] transition-shadow duration-300 md:h-95 w-20  hover:shadow-[0_0_25px_skyblue]"></div>             
                <div class="h-20 w-full bg-blue-500 border-2 border-sky-400 rounded-md shadow-[0_0_5px_skyblue] transition-shadow duration-300 md:h-95 w-20  hover:shadow-[0_0_25px_skyblue]"></div>   
                <div class="h-20 w-full bg-blue-500 border-2 border-sky-400 rounded-md shadow-[0_0_5px_skyblue] transition-shadow duration-300 md:h-95 w-20  hover:shadow-[0_0_25px_skyblue]"></div>   
                <div class="h-20 w-full bg-blue-500 border-2 border-sky-400 rounded-md shadow-[0_0_5px_skyblue] transition-shadow duration-300 md:h-95 w-20  hover:shadow-[0_0_25px_skyblue]"></div>   
          </div>
        </div>  
        </div>
        </>
        
    )
}