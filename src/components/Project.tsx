// // import { CardCarousel } from "@/components/ui/card-carousel"

// function Project() {
//   const images = [
//     { id:1,src: "/card/1.png", alt: "Image 1" , title:'Swipe-Ecommerce' ,
//     desicription:'Scalable e-commerce interface powered by React and Tailwind with robust cart functionality. ',
//     stack:'React, Tailwind CSS, Toastify',
//     link:'https://swipe-ecommerce-nine.vercel.app/',
//     date:'(06/2025 - 06/2025)'
//     },
//     { id:2,src: "/card/1.png", alt: "Image 1" , title:'Netflix Clone' ,
//     desicription:'Developed dynamic content dashboard with authentication and a mobile-optimized UI.',
//     stack:'React, Firebase Auth, TMDB API',
//     link:'https://netflix-clone-bay-beta.vercel.app/',
//     date:'(05/2025 - 05/2025)'
//     },
//     { id:3,src: "/card/1.png", alt: "Image 1" , title:'Real-Time Chat App' ,
//     desicription:'Built a chat platform with presence and collaboration features using Socket.IO and React. ',
//     stack:'React, MongoDB, Socket.IO, Tailwind CSS',
//     link:'https://real-time-chat-app-2-er2z.onrender.com/',
//     date:'(07/2025 - 07/2025)'
//     },
//     { id:4,src: "/card/1.png", alt: "Image 1" , title:' iPhonewebsite_clone' ,
//     desicription:'Created a basic HTML/CSS clone of an Apple iPhone product page, replicating its layout, visuals, and UI elements for educational and practice purposes.',
//     stack:'HTML , CSS , JS',
//     link:'https://vhghgfdhgfjhg.github.io/iPhonewebsite__clone/',
//     date:''
//     },
//     { id:5,src: "/card/1.png", alt: "Image 1" , title:'Food-Recipes-bot' ,
//     desicription:'This project uses HTML/CSS for structure and styling, JavaScript for interactivity, and an API to dynamically fetch and display food recipes.',
//     stack:'HTML , CSS , JS , API',
//     link:'https://vhghgfdhgfjhg.github.io/Food-Recipes-bot/',
//     date:''
//     },
//     { id:6,src: "/card/1.png", alt: "Image 1" , title:'' ,
//     desicription:'Chatbot-JS',
//     stack:'JavaScript, CSS, HTML, API',
//     link:'https://vhghgfdhgfjhg.github.io/Chatbot-JS/',
//     date:''
//     },
//     { id:7,src: "/card/1.png", alt: "Image 1" , title:'Image-Search-engine' ,
//     desicription:'images can search using key words like ex;- tree ,forest.',
//     stack:'JavaScript, CSS, HTML,API',
//     link:'https://github.com/vhghgfdhgfjhg/Image-Search-engine',
//     date:''
//     },
//     { id:8,src: "/card/1.png", alt: "Image 1" , title:'expense-income-track' ,
//     desicription:'it is Expense & Income Track to check daily expense and income .',
//     stack:'JavaScript, CSS, HTML , React, Tailwindcss ',
//     link:'https://vhghgfdhgfjhg.github.io/expense-income-track/',
//     date:''
//     },
//     { id:9,src: "/card/1.png", alt: "Image 1" , title:'BMI-Calculator' ,
//     desicription:'it is to check the BODY MASS INDEX which gives you result like ex:- underweight , Normal weight.',
//     stack:'React,Tailwind Css',
//     link:'https://vhghgfdhgfjhg.github.io/BMI-Calculator/',
//     date:''
//     },
//     { id:10,src: "/card/1.png", alt: "Image 1" , title:'WizardZ-website' ,
//     desicription:'',
//     stack:'HTML ,CSS, GSAP',
//     link:'https://vhghgfdhgfjhg.github.io/WizardZ-website/',
//     date:''
//     },

//   ]

//   return (
//     <div className="pt-40">
//       {images.map((card)=>(
//         <div key={card.id}></div>
//       ))}
//     </div>
//   )
// }
// export default Project;

export default function Project() {
  const images = [
    {
      id: 1,
      src: "/src/assets/ecommerce.png",
      alt: "ecommerce",
      title: "Swipe-Ecommerce",
      desicription:
        "Scalable e-commerce interface powered by React and Tailwind with robust cart functionality. ",
      stack: "React, Tailwind CSS, Toastify",
      link: "https://swipe-ecommerce-nine.vercel.app/",
      date: "(06/2025 - 06/2025)",
    },
    {
      id: 2,
      src: "/src/assets/netflix.png",
      alt: "netflix",
      title: "Netflix Clone",
      desicription:
        "Developed dynamic content dashboard with authentication and a mobile-optimized UI.",
      stack: "React, Firebase Auth, TMDB API",
      link: "https://netflix-clone-bay-beta.vercel.app/",
      date: "(05/2025 - 05/2025)",
    },
    {
      id: 3,
      src: "/src/assets/1.png",
      alt: "ChatApp",
      title: "Real-Time Chat App",
      desicription:
        "Built a chat platform with presence and collaboration features using Socket.IO and React. ",
      stack: "React, MongoDB, Socket.IO, Tailwind CSS",
      link: "https://real-time-chat-app-2-er2z.onrender.com/",
      date: "(07/2025 - 07/2025)",
    },
    {
      id: 4,
      src: "/src/assets/Iphone.png",
      alt: "Iphone",
      title: " iPhonewebsite_clone",
      desicription:
        "Created a basic HTML/CSS clone of an Apple iPhone product page, replicating its layout, visuals, and UI elements for educational and practice purposes.",
      stack: "HTML , CSS , JS",
      link: "https://vhghgfdhgfjhg.github.io/iPhonewebsite__clone/",
      date: "",
    },
    {
      id: 5,
      src: "/src/assets/food.png",
      alt: "Food search",
      title: "Food-Recipes-bot",
      desicription:
        "This project uses HTML/CSS for structure and styling, JavaScript for interactivity, and an API to dynamically fetch and display food recipes.",
      stack: "HTML , CSS , JS , API",
      link: "https://vhghgfdhgfjhg.github.io/Food-Recipes-bot/",
      date: "",
    },
    {
      id: 6,
      src: "/src/assets/chatbot.png",
      alt: "Chatbot",
      title: "Chatbot-JS",
      desicription: "AI website created using JavaScript.",
      stack: "JavaScript, CSS, HTML, API",
      link: "https://vhghgfdhgfjhg.github.io/Chatbot-JS/",
      date: "",
    },
    {
      id: 7,
      src: "/src/assets/imagesearch.png",
      alt: "imagesearch",
      title: "Image-Search-engine",
      desicription: "images can search using key words like ex;- tree ,forest.",
      stack: "JavaScript, CSS, HTML,API",
      link: "https://github.com/vhghgfdhgfjhg/Image-Search-engine",
      date: "",
    },
    {
      id: 8,
      src: "/src/assets/Expense.png",
      alt: "Expense",
      title: "expense-income-track",
      desicription:
        "it is Expense & Income Track to check daily expense and income .",
      stack: "JavaScript, CSS, HTML , React, Tailwindcss ",
      link: "https://vhghgfdhgfjhg.github.io/expense-income-track/",
      date: "",
    },
    {
      id: 9,
      src: "/src/assets/bmi.png",
      alt: "BMI",
      title: "BMI-Calculator",
      desicription:
        "it is to check the BODY MASS INDEX which gives you result like ex:- underweight , Normal weight.",
      stack: "React,Tailwind Css",
      link: "https://vhghgfdhgfjhg.github.io/BMI-Calculator/",
      date: "",
    },
    {
      id: 10,
      src: "/src/assets/wizard.png",
      alt: "wizard",
      title: "WizardZ-website",
      desicription: "",
      stack: "HTML ,CSS, GSAP",
      link: "https://vhghgfdhgfjhg.github.io/WizardZ-website/",
      date: "",
    },
  ];
  return (
    <>
      <div className="relative w-full py-10">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#015c6e_0,transparent_85%),radial-gradient(at_41%_94%,#00b7e9_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
          <h2 className="text-2xl font-semibold text-white mb-6">Projects</h2>

          <div className="flex flex-nowrap gap-6 w-full overflow-x-auto min-h-[24rem] pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {images.map((card) => (
              <div
                key={card.id}
                className="bg-white/5 text-white border border-white/10 rounded-lg p-4 min-w-[300px] max-w-[300px] flex-shrink-0 flex flex-col justify-between"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm mb-1">
                  <strong>Stack:</strong> {card.stack}
                </p>
                <p className="text-sm mb-3">{card.desicription}</p>
                <div className="flex items-center justify-between text-sm mt-auto pt-2">
                  <span>{card.date}</span>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
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
