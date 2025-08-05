import React, { useRef, useState } from "react";

// Data Type
interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  date: string;
  location: string;
  discription1: string;
  discription2: string;
  discription3?: string;
}

const data: ExperienceItem[] = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Plasimd Innovations",
    date: "02/2025 - 05/2025",
    location: "India, Shimoga",
    discription1: "Built and launched a personal portfolio website on Netlify optimized for mobile-first design.",
    discription2: "Increased site engagement by 25% through dynamic routing and reusable React components.",
    discription3: "Collaborated with cross-functional teams, ensuring efficient and timely delivery of project modules.",
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Aadi Foundation",
    date: "02/2025 - 02/2025",
    location: "India, Shimoga",
    discription1: "Developed a real-time weather application using React and OpenWeather API.",
    discription2: "Reduced page load times by 30% by optimizing image delivery and script execution.",
    discription3: "Implemented performance optimizations, and maintain git versions.",
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "Vodafone",
    date: "12/2023 - 12/2023",
    location: "India, Shimoga",
    discription1: "Designed predictive models using scikit-learn, achieving 85% accuracy in test sets.",
    discription2: "Applied both supervised and unsupervised learning algorithms and evaluation metrics to real-world data projects.",
  },
];

interface CardState {
  [id: number]: boolean;
}

const Experience: React.FC = () => {
  // Manage each card's flipped state independently
  const [flipped, setFlipped] = useState<CardState>({});

  // Touch x positions for swiping
  const touchStartX = useRef<{ [id: number]: number }>({});
  const touchEndX = useRef<{ [id: number]: number }>({});

  // Flip/Reset handlers
  const flipCard = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetCard = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: false }));
  };

  // Touch/Swipe handlers
  const handleTouchStart = (id: number, e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current[id] = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (id: number, e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current[id] = e.changedTouches[0].screenX;
    handleSwipe(id);
  };

  const handleSwipe = (id: number) => {
    const swipeThreshold = 40;
    const distance = Math.abs((touchEndX.current[id] ?? 0) - (touchStartX.current[id] ?? 0));
    if (distance > swipeThreshold) flipCard(id);
  };

  // Keyboard support per card
  const handleKeyDown = (id: number, e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      flipCard(id);
    } else if (e.code === "KeyR") {
      e.preventDefault();
      resetCard(id);
    }
  };

  return (
    <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex flex-nowrap gap-6 px-4 py-6">
        {data.map((item) => (
          <div
            key={item.id}
            tabIndex={0}
            className="flip-card min-w-[320px] max-w-[320px] h-80 bg-transparent rounded-xl cursor-pointer focus:outline-none relative"
            onClick={() => flipCard(item.id)}
            onTouchStart={(e) => handleTouchStart(item.id, e)}
            onTouchEnd={(e) => handleTouchEnd(item.id, e)}
            onKeyDown={(e) => handleKeyDown(item.id, e)}
            style={{ perspective: "1000px" }}
          >
            <div
              className="flip-card-inner w-full h-full relative"
              style={{
                transition: "transform 0.6s",
                transformStyle: "preserve-3d",
                transform: flipped[item.id] ? "rotateY(180deg)" : "none",
              }}
            >
              {/* Front Side */}
              <div
                className="flip-card-front absolute inset-0 rounded-xl shadow-2xl p-5 flex flex-col justify-between text-white bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#015c6e_0,transparent_85%),radial-gradient(at_41%_94%,#00b7e9_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium">
                    Experience
                  </div>
                  <div className="text-white/80 text-xs">Click to flip</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.role}</h3>
                  <p className="text-base text-white/90 mb-1">{item.company}</p>
                  <p className="text-xs text-white/80">
                    {item.date} | {item.location}
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-10 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
              {/* Back Side */}
              <div
                className="flip-card-back absolute inset-0 rounded-xl shadow-2xl p-5 flex flex-col justify-between text-white"
                style={{
                  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-medium">
                    Achievements
                  </div>
                  <div className="text-white/80 text-xs">Click to flip</div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="bg-white/10 backdrop-blur-sm rounded-lg py-2 px-3">
                    {item.discription1}
                  </li>
                  <li className="bg-white/10 backdrop-blur-sm rounded-lg py-2 px-3">
                    {item.discription2}
                  </li>
                  {item.discription3 && (
                    <li className="bg-white/10 backdrop-blur-sm rounded-lg py-2 px-3">
                      {item.discription3}
                    </li>
                  )}
                </ul>
                <div className="flex justify-center">
                  <div className="w-10 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Controls under card */}
            {/* <div className="flex justify-center space-x-3 mt-4 absolute left-0 right-0 bottom-[-56px] z-10">
              <button
                tabIndex={-1}
                onClick={(e) => {
                  e.stopPropagation();
                  flipCard(item.id);
                }}
                className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-1.5 px-4 rounded-md shadow-md text-sm transition-all duration-200 hover:shadow-lg"
              >
                Flip
              </button>
              <button
                tabIndex={-1}
                onClick={(e) => {
                  e.stopPropagation();
                  resetCard(item.id);
                }}
                className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-1.5 px-4 rounded-md shadow-md text-sm transition-all duration-200 hover:shadow-lg"
              >
                Reset
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

