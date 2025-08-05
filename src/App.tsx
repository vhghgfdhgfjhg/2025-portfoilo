import React, { useCallback, useEffect, useRef, useState } from "react";
import ScrollBasedVelocityDemo from "./components/mvpblocks/scrollbasedvelocity-demo";
import CircularText from "./components/mvpblocks/circular-text";
import { TextReveal } from "./components/ui/text-reveal";
import CodeBlock from "./components/mvpblocks/code-block-1";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Certificate from "./components/Cretificates";
import About from "./components/About";
import Loading from "./components/Loading";
import Backbutton from "./components/Backbutton";
import Social from "./components/Social";

// Animated Visual Background component
const codeSnippets = [
  "const app = () => {}",
  "function render() {",
  "useState(false)",
  "useEffect(() => {",
  "return <div>",
  "npm install",
  "git commit -m",
  "async/await",
  'fetch("/api")',
  "export default",
  "import React",
  'className="',
  "onClick={() =>",
  "map((item) =>",
  "filter(x => x",
  "reduce((acc",
  "setTimeout(",
  "addEventListener",
  "querySelector",
  "getElementById",
  "createElement",
  "appendChild",
  "style.display",
  "transition: all",
  "transform: scale",
  "opacity: 0.8",
  "z-index: 999",
  "position: absolute",
  "flex-direction",
  "justify-content",
  "align-items",
  "grid-template",
  "media queries",
  "responsive",
  "@keyframes",
  "animation:",
  "border-radius",
  "box-shadow",
  "linear-gradient",
  "rgba(255,",
  "px solid",
  "margin: auto",
  "padding: 1rem",
  "width: 100%",
  "height: 100vh",
  "overflow: hidden",
];
const FLOATING_COLORS = [
  "text-teal-300/60", // main
  "text-red-400/60", // odd
  "text-yellow-300/60", // 3n
];
type FloatingEl = {
  id: number;
  text: string;
  left: string;
  duration: number;
  delay: number;
  colorIdx: number;
};
type Shape = {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  even: boolean;
};
type Dot = {
  id: number;
  left: string;
  top: string;
  delay: number;
};
type Glow = {
  id: number;
  left: number;
  top: number;
};

const AnimatedBackground: React.FC = () => {
  const [floating, setFloating] = useState<FloatingEl[]>([]);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);
  const [glows, setGlows] = useState<Glow[]>([]);
  const animIdRef = useRef(0); // for unique IDs
  const gridRef = useRef<HTMLDivElement>(null);

  // Initial animated items
  useEffect(() => {
    const newEls: FloatingEl[] = [];
    for (let i = 0; i < 8; ++i) {
      newEls.push({
        id: animIdRef.current++,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: `${Math.random() * 100}%`,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 5,
        colorIdx: i % 3,
      });
    }
    setFloating(newEls);

    const newShapes: Shape[] = [];
    for (let i = 0; i < 6; ++i) {
      const size = 20 + Math.random() * 80;
      newShapes.push({
        id: animIdRef.current++,
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
        even: i % 2 === 1,
      });
    }
    setShapes(newShapes);

    const newDots: Dot[] = [];
    for (let i = 0; i < 15; ++i) {
      newDots.push({
        id: animIdRef.current++,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
      });
    }
    setDots(newDots);
  }, []);

  // Spawn floating code periodically
  useEffect(() => {
    const spawn = () => {
      setFloating((prev) => [
        ...prev,
        {
          id: animIdRef.current++,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          left: `${Math.random() * 100}%`,
          duration: 15 + Math.random() * 10,
          delay: Math.random() * 5,
          colorIdx: prev.length % 3,
        },
      ]);
    };
    const interval = setInterval(spawn, 2000);
    return () => clearInterval(interval);
  }, []);
  // Cleanup floating code after animation
  useEffect(() => {
    if (floating.length === 0) return;
    const timeouts = floating.map((f) =>
      setTimeout(
        () => setFloating((cur) => cur.filter((x) => x.id !== f.id)),
        (f.delay + f.duration + 1) * 1000
      )
    );
    return () => {
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, [floating]);

  // Mouse move: grid parallax & glow effect
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    if (gridRef.current) {
      gridRef.current.style.transform = `translate(${mouseX * 20}px, ${
        mouseY * 20
      }px)`;
    }
    setGlows((prev) => [
      ...prev,
      { id: animIdRef.current++, left: e.clientX, top: e.clientY },
    ]);
  }, []);
  // Remove glows after 1s
  useEffect(() => {
    if (glows.length === 0) return;
    const timeout = setTimeout(() => {
      setGlows((prev) => prev.slice(1));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [glows]);

  return (
    <div
      className="pointer-events-none fixed inset-0 w-full h-full min-h-screen z-0"
      onMouseMove={handleMouseMove}
      style={{
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      {/* Animated grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,255,218,0.1) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(100,255,218,0.1) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
          zIndex: 1,
          animation: "gridMove 20s linear infinite",
        }}
      />
      {/* Animated shapes */}
      {shapes.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            width: s.width,
            height: s.height,
            left: s.left,
            top: s.top,
            borderRadius: s.even ? "20%" : "50%",
            background: s.even
              ? "linear-gradient(45deg,rgba(255,206,84,0.1),rgba(100,255,218,0.1))"
              : "linear-gradient(45deg,rgba(100,255,218,0.1),rgba(255,107,107,0.1))",
            animation: `drift ${s.duration}s ease-in-out ${s.delay}s infinite`,
            zIndex: 2,
          }}
        />
      ))}
      {/* Pulsing Dots */}
      {dots.map((d) => (
        <div
          key={d.id}
          className="absolute"
          style={{
            width: 4,
            height: 4,
            left: d.left,
            top: d.top,
            background: "#64ffda",
            borderRadius: "50%",
            animation: `pulse 3s ease-in-out ${d.delay}s infinite`,
            zIndex: 3,
          }}
        />
      ))}
      {/* Floating code */}
      {floating.map(({ id, text, left, duration, delay, colorIdx }) => (
        <div
          key={id}
          className={`pointer-events-none absolute font-mono text-[14px] ${FLOATING_COLORS[colorIdx]}`}
          style={{
            left: left,
            animation: `float ${duration}s linear ${delay}s`,
            zIndex: 4,
          }}
        >
          {text}
        </div>
      ))}
      {/* Cursor Glow */}
      {glows.map((g) => (
        <div
          key={g.id}
          className="pointer-events-none absolute z-10"
          style={{
            left: g.left,
            top: g.top,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(100,255,218,0.6) 0%, transparent 70%)",
            position: "fixed",
            animation: "pulse 1s ease-out forwards",
          }}
        />
      ))}
      {/* Custom keyframes */}
      <style>
        {`
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        @keyframes drift {
            0%, 100% { transform: translateX(0) translateY(0) rotate(0deg);}
            25% { transform: translateX(100px) translateY(-50px) rotate(90deg);}
            50% { transform: translateX(-50px) translateY(-100px) rotate(180deg);}
            75% { transform: translateX(-100px) translateY(50px) rotate(270deg);}
        }
        @keyframes gridMove {
            0% { transform: translate(0, 0);}
            100% { transform: translate(50px, 50px);}
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1);}
            50% { opacity: 1; transform: scale(1.5);}
        }
        `}
      </style>
    </div>
  );
};

// Main App
const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Animated Background is always rendered behind */}
      <AnimatedBackground />
      {/* Loader: overlays background until loading is finished */}
      {loading ? (
        <div className="flex items-center justify-center min-h-screen w-full fixed inset-0 z-50">
          <Loading />
        </div>
      ) : (
        <div className="relative z-20 w-full min-h-screen text-white overflow-hidden ">
          {/* Profile and About/Education */}
          <div className="flex items-center flex-wrap sm:flex md:flex">
            <div className="flex flex-col w-full items-center sm:w-[35%] md:w-[35%] bg-transparent text-center">
              <img
                src="/akash.jpg"
                alt=""
                className="rounded-full w-[250px] h-[250px] absolute top-[2.0%] sm:top-[3.8%] "
              />
              <CircularText text="AKASH AKASH AKASH " />
              <h1 className=" text-6xl text-center pl-3 font-bold text-blue-300">
                <TextReveal>AKASH K N</TextReveal>
                {""}
              </h1>
              <h1 className=" text-3xl text-center">
                <TextReveal>FRONTEND DEVELOPER</TextReveal>
              </h1>
            </div>
            <div className="flex flex-col w-full justify-between sm:w-[65%] md:w-[65%]">
              <About />
            </div>
          </div>
          <div className="mt-2">
            <ScrollBasedVelocityDemo />
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center justify-between gap-4">
            {/* Skills */}
            <div className="w-full md:w-[45%]">
              <CodeBlock />
            </div>
            {/* Experience */}
            <div className="w-full md:w-[50%]">
              <Experience />
              {/* <StoriesContent /> */}
            </div>
          </div>
          <div className="w-full mt-3 flex flex-wrap items-center justify-evenly gap-4">
            {/* Projects */}
            <div className="w-full md:w-[45%]">
              <Project />
            </div>
            {/* Certificates */}
            <div className="w-full md:w-[50%]">
              <Certificate />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              className="
      group
      text-2xl p-4 rounded-full mb-2
      border-2 border-transparent
      transition duration-700 ease-in-out
      hover:border-blue-400 hover:scale-105 focus:scale-105 focus:border-blue-400
      outline-none
    "
              type="button"
            >
              <div
                className="
        border-2 border-white text-2xl p-4 rounded-full
        transition duration-700 ease-in-out
        bg-white bg-opacity-10
        group-hover:border-blue-300
        group-hover:shadow-[0_0_30px_0_rgba(59,130,246,0.25)]
        group-focus:border-blue-300
        group-focus:shadow-[0_0_30px_0_rgba(59,130,246,0.25)]
        backdrop-blur-sm
      "
              >
                <a
                  href="https://drive.google.com/file/d/1CBpquk4K5ry_x-g5GkXJSWvql7yYqNQo/view?usp=drive_link"
                  className="block font-bold text-white transition-colors duration-300 group-hover:text-blue-200"
                >
                  Click View My Resume
                </a>
              </div>
            </button>
          </div>

          <div>
            <Social/>
          </div>
          <Backbutton/>
        </div>
      )}
    </>
  );
};

export default App;
