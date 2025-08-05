// LoadingScreen.tsx
import React, { useEffect, useRef, useState } from "react";

const floatingCodeSnippets = [
  { text: '<div className="awesome">', style: "top-[20%] left-[10%]", delay: "animate-delay-0" },
  { text: 'const developer = "Akash";', style: "top-[60%] right-[15%]", delay: "animate-delay-1000" },
  { text: "function createMagic() {", style: "top-[30%] right-[25%]", delay: "animate-delay-2000" },
  { text: "return <Component />;", style: "bottom-[30%] left-[20%]", delay: "animate-delay-3000" },
  { text: "export default App;", style: "bottom-[20%] right-[30%]", delay: "animate-delay-4000" },
] as const;

const techIcons = [
  { icon: "⚛️", delay: "animate-delay-0" },
  { icon: "🎨", delay: "animate-delay-200" },
  { icon: "💻", delay: "animate-delay-400" },
  { icon: "🚀", delay: "animate-delay-600" },
  { icon: "✨", delay: "animate-delay-800" },
];

const SPARKLE_INTERVAL = 800;

type Sparkle = { id: number; left: number; top: number };

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Crafting digital experiences...");
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const sparkleId = useRef(0);

  // Progress bar logic
  useEffect(() => {
    let frame = 0;
    const totalFrames = 60 * 3; // 3 seconds, 60fps
    const interval = setInterval(() => {
      frame++;
      setProgress((frame / totalFrames) * 100);
      if (frame >= totalFrames) clearInterval(interval);
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, []);

  // Loading text change after 4.5s
  useEffect(() => {
    const timer = setTimeout(
      () => setLoadingText("Ready to build amazing things!"),
      4500
    );
    return () => clearTimeout(timer);
  }, []);

  // Add sparkles periodically
  useEffect(() => {
    const sparkleTimer = setInterval(() => {
      const left = Math.random() * window.innerWidth;
      const top = Math.random() * window.innerHeight;
      setSparkles((old) => [
        ...old,
        { id: sparkleId.current++, left, top }
      ]);
      // Remove old sparkles
      setTimeout(() => {
        setSparkles((old) => old.slice(1));
      }, 1800);
    }, SPARKLE_INTERVAL);
    return () => clearInterval(sparkleTimer);
  }, []);

  // Tech icon click handler
  const handleIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    target.classList.add("scale-110");
    setTimeout(() => target.classList.remove("scale-110"), 200);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-black to-blue-400 font-sans overflow-hidden w-full">
      {/* Floating code */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10">
        {floatingCodeSnippets.map((code, i) => (
          <div
            key={i}
            className={`absolute ${code.style} text-white text-opacity-10 font-mono text-sm animate-float`}
            style={{ animationDelay: `${i}s` }}
          >
            {code.text}
          </div>
        ))}
      </div>

      {/* Sparkles */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="pointer-events-none fixed w-1 h-1 bg-white rounded-full opacity-80 animate-sparkle z-20"
          style={{ left: sp.left, top: sp.top }}
        />
      ))}

      {/* Loader content */}
      <div className="z-20 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}>
          AKASH
        </h1>
        <p className="text-xl md:text-2xl font-light text-white text-opacity-90 mb-10 tracking-wider animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}>
          FRONTEND DEVELOPER
        </p>

        {/* Spinner */}
        <div className="w-20 h-20 mb-8 mx-auto relative">
          <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-20 border-t-white animate-spin" />
        </div>

        {/* Loading text */}
        <p className="text-white text-opacity-80 font-medium text-base mb-3 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          {loadingText}
        </p>

        {/* Progress bar */}
        <div className="w-[300px] h-1 bg-white bg-opacity-20 rounded mt-4 mb-3 overflow-hidden animate-fade-in-up"
            style={{ animationDelay: "1.4s" }}>
          <div
            className="h-1 bg-gradient-to-r from-white to-white/80 rounded transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Tech icons */}
        <div className="flex justify-center gap-8 mt-6 animate-fade-in-up"
          style={{ animationDelay: "1.7s" }}>
          {techIcons.map((tech, i) => (
            <div
              key={i}
              className={
                "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md bg-white bg-opacity-10 text-2xl md:text-2xl cursor-pointer animate-bounce"
              }
              style={{ animationDelay: `${i * 0.2}s` }}
              onClick={handleIconClick}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for keyframes */}
      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px);}
            to   { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fade-in-up 1s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          @keyframes float {
            0%,100% { opacity:0.1; transform:translateY(0) rotate(0deg);}
            50% { opacity:0.3; transform:translateY(-20px) rotate(5deg);}
          }
          .animate-float { animation: float 6s ease-in-out infinite;}
          @keyframes sparkle {
            0% { opacity: 0; transform: scale(0);}
            50% { opacity: 1; transform: scale(1);}
            100% { opacity: 0; transform: scale(0);}
          }
          .animate-sparkle { animation: sparkle 2s ease-out forwards;}
          .scale-110   { transform: scale(1.2) !important;}
        `}
      </style>
    </div>
  );
};

export default Loading;
