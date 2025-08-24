export default function Navbar(){
    return(
        <div>
            <header class="w-full bg-gray-900 text-white shadow-md">
                <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                     <h1 class="text-3xl font-bold tracking-wide">Portfolio.</h1>

                    <nav class="hidden md:flex space-x-8 text-lg font-medium">
                    <a href="#home" class="hover:text-blue-400 transition">Home</a>
                    <a href="#about" class="hover:text-blue-400 transition">About Me</a>
                    <a href="#projects" class="hover:text-blue-400 transition">Projects</a>
                    <a href="#skills" class="hover:text-blue-400 transition">Skills</a>
                    <a href="#blog" class="hover:text-blue-400 transition">Achivement</a>
                    <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
                    </nav>
    
                    <a href="your-cv.pdf" download 
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition">
                    Download CV
                    </a>
                </div>
            </header>

        </div>
    )
}