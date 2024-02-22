import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

function App() {
  const comp = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      })
      .to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      })
      .from("#welcome", {
        opacity: 0,
        duration: 0.5,
      })
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative " ref={comp}>
      <div
        id="intro-slider"
        className="absolute top-0 left-0 p-10 h-screen bg-slate-400 font-fredoka z-10 w-full flex flex-col gap-10 tracking-tight font-bold"
      >
        <h1 className="text-9xl" id="title-1">
          I'm Developer
        </h1>
        <h1 className="text-9xl" id="title-2">
          From Nepal
        </h1>
        <h1 className="text-9xl" id="title-3">
          Happy Code
        </h1>
      </div>
      <div className="h-screen bg-slate-900 flex justify-center place-items-center">
        <h1 id="welcome" className="text-white text-9xl font-bold font-fredoka">
          Welcome to Saurav Github
        </h1>
      </div>
    </div>
  );
}

export default App;
