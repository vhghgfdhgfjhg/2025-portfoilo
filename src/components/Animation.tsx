import React, { useCallback, useEffect, useRef, useState } from "react";

// Tailwind doesn't cover all animation needs, so we define some keyframes in a style tag at the end.

const codeSnippets = [
  'const app = () => {}',
  'function render() {',
  'useState(false)',
  'useEffect(() => {',
  'return <div>',
  'npm install',
  'git commit -m',
  'async/await',
  'fetch("/api")',
  'export default',
  'import React',
  'className="',
  'onClick={() =>',
  'map((item) =>',
  'filter(x => x',
  'reduce((acc',
  'setTimeout(',
  'addEventListener',
  'querySelector',
  'getElementById',
  'createElement',
  'appendChild',
  'style.display',
  'transition: all',
  'transform: scale',
  'opacity: 0.8',
  'z-index: 999',
  'position: absolute',
  'flex-direction',
  'justify-content',
  'align-items',
  'grid-template',
  'media queries',
  'responsive',
  '@keyframes',
  'animation:',
  'border-radius',
  'box-shadow',
  'linear-gradient',
  'rgba(255,',
  'px solid',
  'margin: auto',
  'padding: 1rem',
  'width: 100%',
  'height: 100vh',
  'overflow: hidden'
];

type FloatingEl = {
  id: number,
  text: string,
  left: string,
  duration: number,
  delay: number,
  colorIdx: number
};

type Shape = {
  id: number,
  width: number,
  height: number,
  left: string,
  top: string,
  duration: number,
  delay: number,
  even: boolean
};

type Dot = {
  id: number,
  left: string,
  top: string,
  delay: number
};

type Glow = {
  id: number,
  left: number,
  top: number
};

const FLOATING_COLORS = [
  "text-teal-300/60", // main
  "text-red-400/60",  // odd
  "text-yellow-300/60" // 3n
];

const Animation: React.FC = () => {
  const [floating, setFloating] = useState<FloatingEl[]>([]);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [dots, setDots] = useState<Dot[]>([]);
  const [glows, setGlows] = useState<Glow[]>([]);
  const animIdRef = useRef(0); // for unique IDs

  // Grid mouse interaction
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial batch of floating code
    const newEls: FloatingEl[] = [];
    for (let i = 0; i < 8; ++i) {
      newEls.push({
        id: animIdRef.current++,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        left: `${Math.random() * 100}%`,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 5,
        colorIdx: i % 3
      });
    }
    setFloating(newEls);

    // Initial shapes
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
        even: i % 2 === 1
      });
    }
    setShapes(newShapes);

    // Initial dots
    const newDots: Dot[] = [];
    for (let i = 0; i < 15; ++i) {
      newDots.push({
        id: animIdRef.current++,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 3
      });
    }
    setDots(newDots);
  }, []);

  // Floating code, interval spawning
  useEffect(() => {
    const spawn = () => {
      setFloating(prev => [
        ...prev,
        {
          id: animIdRef.current++,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          left: `${Math.random() * 100}%`,
          duration: 15 + Math.random() * 10,
          delay: Math.random() * 5,
          colorIdx: prev.length % 3
        }
      ]);
    };
    const interval = setInterval(spawn, 2000);
    return () => clearInterval(interval);
  }, []);

  // Remove floating after animation (cleanup)
  useEffect(() => {
    if (floating.length === 0) return;
    const timeouts = floating.map(f =>
      setTimeout(
        () =>
          setFloating(cur => cur.filter(x => x.id !== f.id)),
        (f.delay + f.duration + 1) * 1000 // buffer
      )
    );
    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [floating]);

  // Mouse cursor for grid & glow effect
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    if (gridRef.current) {
      gridRef.current.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    }
    // Add glow
    setGlows(prev =>
      [...prev, { id: animIdRef.current++, left: e.clientX, top: e.clientY }]
    );
  }, []);

  // Remove glows after 1s
  useEffect(() => {
    if (glows.length === 0) return;
    const timeout = setTimeout(() => {
      setGlows(prev => prev.slice(1));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [glows]);

  return (
    <div
      className="relative w-full h-screen min-h-screen overflow-hidden font-mono select-none"
      onMouseMove={handleMouseMove}
      style={{ background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)" }}
    >
      {/* Grid pattern */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(100,255,218,0.1) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(100,255,218,0.1) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
          zIndex: 1,
          animation: "gridMove 20s linear infinite"
        }}
      />

      {/* Animated geometric shapes */}
      {shapes.map(s => (
        <div
          key={s.id}
          className="shape absolute"
          style={{
            width: s.width,
            height: s.height,
            left: s.left,
            top: s.top,
            borderRadius: s.even ? "20%" : "50%",
            background: s.even
              ? "linear-gradient(45deg,rgba(255,206,84,0.1),rgba(100,255,218,0.1))"
              : "linear-gradient(45deg,rgba(100,255,218,0.1),rgba(255,107,107,0.1))",
            animation: `drift ${s.duration}s ease-in-out ${s.delay}s infinite`
          }}
        />
      ))}

      {/* Pulsing Dots */}
      {dots.map(d => (
        <div
          key={d.id}
          className="dot absolute"
          style={{
            width: 4,
            height: 4,
            left: d.left,
            top: d.top,
            background: "#64ffda",
            borderRadius: "50%",
            animation: `pulse 3s ease-in-out ${d.delay}s infinite`
          }}
        />
      ))}

      {/* Floating code elements */}
      {floating.map(({ id, text, left, duration, delay, colorIdx }) => (
        <div
          key={id}
          className={`code-element pointer-events-none absolute font-mono text-[14px] ${FLOATING_COLORS[colorIdx]}`}
          style={{
            left: left,
            animation: `float ${duration}s linear ${delay}s`
          }}
        >
          {text}
        </div>
      ))}

      {/* Cursor glow effect */}
      {glows.map(g => (
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
            animation: "pulse 1s ease-out forwards"
          }}
        />
      ))}

      {/* Main content */}
      <div className="container flex items-center justify-center h-screen relative z-10">
        <div className="main-content text-center text-teal-300 z-20 p-8 rounded-2xl border border-teal-300/30 bg-[#0f0f23cc] backdrop-blur-md max-w-lg w-full mx-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-xl" style={{ textShadow: "0 0 20px rgba(100,255,218,0.5)" }}>
            Frontend Developer
          </h1>
          <p className="text-base md:text-lg opacity-80">
            Building visually engaging and performant interfaces with passion for design, code and interactivity.
          </p>
        </div>
      </div>

      {/* Custom keyframes/extra CSS */}
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

export default Animation;
