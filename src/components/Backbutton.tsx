import React, { useEffect, useState } from "react";

const Backbutton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling 200px
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll to top
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={`
        fixed bottom-8 right-8 z-50
        bg-gradient-to-br from-blue-500 to-purple-600
        text-white text-3xl rounded-full shadow-lg
        p-4
        transition-all duration-500 ease-in-out
        hover:scale-110 hover:shadow-[0_0_40px_6px_rgba(59,130,246,0.25)]
        outline-none
        ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      style={{ boxShadow: "0 8px 24px 0 rgba(30,64,175,0.18)" }}
    >
      <svg
        className="w-8 h-8 mx-auto animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default Backbutton;
