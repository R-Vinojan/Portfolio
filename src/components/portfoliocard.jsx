import { useState, useRef, useEffect } from "react";

export default function PortfolioCard({ title, description, imageSrc, link }) {
  const [expanded, setExpanded] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.style.height = expanded
        ? `${descRef.current.scrollHeight}px` // expand to fit content
        : "4rem"; // collapsed height
    }
  }, [expanded]);

  return (
    <a
      href={link}
      className="flex flex-col md:flex-row items-start bg-gray-900 border border-gray-200 rounded-lg shadow-sm
                 hover:bg-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300"
    >
      {/* Fixed image */}
      <div className="w-full h-auto  md:w-100 overflow-hidden rounded-t-lg md:rounded-none md:rounded-l-lg">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-between p-4 flex-1">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-white dark:text-white ">
          {title}
        </h5>

        <p
          ref={descRef}
          className="mb-3 font-normal text-white dark:text-gray-400 overflow-hidden transition-all duration-300"
        >
          {description}
        </p>

        <button
          onClick={(e) => {
            e.preventDefault(); // prevent following the link
            setExpanded(!expanded);
          }}
          className="text-sky-500 font-semibold hover:underline w-max"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </a>
  );
}
