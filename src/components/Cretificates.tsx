export default function Project() {
  const images = [
    { id: 1, src: "/css.jpg", link:"" },
    { id: 2, src: "/frontend.jpg" , link:""},
    { id: 3, src: "/html-1.jpg" , link:""},
    { id: 4, src: "/javascript_basic .jpg", link:"" },
    { id: 5, src: "/javascript-1.jpg" , link:""},
    { id: 6, src: "/microsoft-1.jpg" , link:""},
    { id: 7, src: "/react-1.jpg" , link:""},
    { id: 8, src: "/sql.jpg" , link:""},
  ];

      return (
    <>
      <div className="relative w-full py-10 ">
        <div className="code-border-anim" />
        <div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#015c6e_0,transparent_85%),radial-gradient(at_41%_94%,#00b7e9_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] p-6 shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]">
          <h2 className="text-2xl font-semibold text-white mb-6">Certificates</h2>

          <div className="flex flex-nowrap gap-6 w-full overflow-x-auto pb-2 scroll-smooth hide-scrollbar min-h-[24rem] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {images.map((card) => (
              <div
                key={card.id}
                className="bg-white/5 text-white border border-white/10 rounded-lg p-4 min-w-[300px] max-w-[300px] flex-shrink-0 flex flex-col justify-between h-[400px]"
              >
                <img
                  src={card.src}
                  className="w-full max-h-screen object-cover rounded-md "
                />
                
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