import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-190 md:mt-90">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left: About / Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Vinojan.R</h2>
          <p className="text-gray-400 text-sm">
            Cyber Security Enthusiast | Web Developer
          </p>
          <div className="mt-4 text-sm space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:youremail@example.com"
                className="hover:text-[#20C20E]"
              >
                vinojanravichandran79@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+947xxxxxxxx" className="hover:text-[#20C20E]">
                +94 71 228 2764
              </a>
            </p>
            <p>Location: Norwood, Sri Lanka</p>
          </div>
        </div>

        {/* Middle: Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.facebook.com/ravichandran.vinojan.2025/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#20C20E]"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_vino_vinojan?igsh=b2x4Y3ZsNDVuZnBz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#20C20E]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/R-Vinojan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#20C20E]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vinojan-ravichandran-14207536a/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#20C20E]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.com/invite/ZKh4ewQK"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#20C20E]"
            >
              <FaDiscord />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div id="contact">
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#20C20E]"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="px-3 py-2 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#20C20E]"
            />
            <button
              type="submit"
              className="bg-[#20C20E] text-black font-bold py-2 rounded-lg hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2025 Vinojan.R. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
