export default function CodeBlock() {
  return (
    <>
      <div className="relative w-full max-w-2xl rounded-xl p-0.5">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#015c6e_0,transparent_85%),radial-gradient(at_41%_94%,#00b7e9_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
          <div className="flex items-center justify-between pb-4">
            <span className="text-base font-semibold text-white">SKILLS</span>
          </div>
          <pre className="m-0 overflow-x-auto rounded-lg bg-transparent p-0 text-sm leading-relaxed whitespace-pre text-blue-100">
            <code className=" flex flex-col">
              <span className="text-[#1fcdfc]">
                <span className=" text-white text-wrap">Programming Languages : - </span>JavaScript (ES6), Python
              </span>
              <span className="text-[#1fcdfc]">
                <span className=" text-white text-wrap">Frameworks & Libraries : - </span>React.js, Next.js, Tailwind CSS,
                React Bootstrap,
                <br /> GSAP, Socket.IO, Mongoose, Express.js
              </span>
              <span className="text-[#1fcdfc]">
               <span className=" text-white text-wrap">Tools & Technologies : - </span>GitHub, Vite, Postman, VS Code,
                Netlify, Vercel,<br /> Render, Framer Motion, RESTful APIs, JWT
                Authentication, MongoDB
              </span>
              <span className="text-[#1fcdfc]">
               <span className=" text-white text-wrap">Soft Skills :- </span>Problem Solving, Documentation & Research, Team
                Collaboration
              </span>
              <span className="text-[#1fcdfc]">
                <span className=" text-white text-wrap">AI & Productivity Tools :-</span>ChatGPT, Perplexity AI ,canva AI
              </span>
            </code>
          </pre>
        </div>
      </div>

      <style>{`
        .code-border-anim {
          position: absolute;
          z-index: -10;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          border-radius: 1rem;
          overflow: hidden;
          pointer-events: none;
        }
        .code-border-anim::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 10rem;
          background: linear-gradient(
            0deg,
            hsla(0,0%,100%,0) 0%,
            hsl(189,100%,50%) 40%,
            hsl(189,100%,50%) 60%,
            hsla(0,0%,40%,0) 100%
          );
          transform: translate(-50%, -50%) rotate(0deg);
          transform-origin: left;
          animation: border-rotate 8s linear infinite;
          z-index: 2;
          pointer-events: none;
        }
        @keyframes border-rotate {
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
