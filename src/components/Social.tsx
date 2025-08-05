import React from "react";

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/vhghgfdhgfjhg",
    bg: "bg-gray-900 hover:bg-gray-800",
    icon: (
      <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: "View my repositories",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-k-n-6b4212282/",
    bg: "bg-blue-600 hover:bg-blue-700",
    icon: (
      <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "Professional network",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/akash.k._.n/",
    bg: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    icon: (
      <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: "Photos & stories",
  },
];

const Social: React.FC = () => (
  <div className="max-h-screen bg-transparent flex items-center justify-center p-2 w-full">
    <div className=" bg-transparent rounded-2xl shadow-2xl p-4 w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Let's Connect!</h1>
        <p className="text-white">Find me on social media or drop me an email</p>
      </div>

        <div className=" flex flex-wrap items-center justify-around w-full">
            {/* Email Section */}
      <div className="mb-8 p-4 bg-gray-50 rounded-xl w-full">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          Email Me
        </h2>
        <a
          href="mailto:akashkn5140@gmail.com"
          className="text-blue-600 hover:text-blue-800 font-medium break-all"
        >
          akashkn5140@gmail.com
        </a>
      </div>

      {/* Social Media Links */}
      <div className="space-y-4 w-full">
        <h2 className="text-lg font-semibold text-white mb-4">Follow Me On</h2>
        {SOCIALS.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center p-4 text-white rounded-xl
              transition-all duration-300 ease-in-out
              ${s.bg}
              transform hover:-translate-y-1 hover:shadow-2xl
              focus:ring-4 focus:ring-blue-300 focus:outline-none
            `}
          >
            {s.icon}
            <div>
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm opacity-75">{s.label}</div>
            </div>
          </a>
        ))}
      </div>
        </div>
      

      <div className="mt-8 text-center">
        <p className="text-white text-sm">
          I'd love to hear from you! Click any link above to connect.
        </p>
      </div>
    </div>
  </div>
);

export default Social;
