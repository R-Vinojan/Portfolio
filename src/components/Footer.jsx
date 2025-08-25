import "./Footer.css"; 
export default function Footer() {
  return (
    <footer className="flex bg-animated cyber-grid relative overflow-hidden w-full mt-175 md:mt-80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white neon-text mb-4">
              CYBER SECURITY
            </h3>
            <p className="text-cyan-300">Connecting the digital realm</p>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-cyan-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-300 hover:text-white transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-300 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-cyan-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold text-white mb-4">Stay Connected</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="text-cyan-300 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-cyan-300 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-cyan-300 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-cyan-300 hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none neon-border"></div>
    </footer>
  );
}
