import { useState } from "react";

function AchievementCard({ title, image, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-900 border-2 border-black rounded-md shadow-[0_0_5px_skyblue] hover:shadow-[0_0_25px_skyblue] transition-shadow duration-300 overflow-hidden">
      <img
        className="object-cover w-full h-40 md:h-60"
        src={image}
        alt={title}
      />

      <div className="p-4">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">
          {title}
        </h5>

        {/* Desktop: always show full text */}
        <p className="hidden md:block text-white dark:white">
          {description}
        </p>

        {/* Mobile: collapsible text */}
        <div className="md:hidden">
          {expanded && (
            <p className="text-white">{description}</p>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-sky-500 hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  // Example data (you can replace with your own)
  const cards = [
    {
      id: 1,
      title: "CompTIA Security+ Certified ",
      image: "./comp.jpg",
      description:
        "I don't have the certificate yet and i didn't even started the course yet but i will one day complate this course",
    },
    {
      id: 2,
      title: "TryHackMe Top 5%",
      image: "./tryhack.jpg",
      description:
        "Oneday I will achive the top 5% position on try hack me website  ",
    },
    {
      id: 3,
      title: "Bug Bounty Reports",
      image: "./bug.jpg",
      description:
        "As a learner I don't have any experiece and hand full skills to bug bounty but iam learning.",
    },
    {
      id: 4,
      title: "Hackathone evenets",
      image: "./hack.jpg",
      description:
        "This is another achievement description with more details about the milestone reached.",
    },
  ];

  return (
    <div id="blog" className="flex flex-col gap-6 p-4">
      <h1 className="text-center text-white text-4xl font-bold">
        My Achievements
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <AchievementCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
