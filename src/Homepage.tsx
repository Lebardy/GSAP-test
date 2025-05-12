import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";
import "./App.css";

gsap.registerPlugin(SplitText);

function Homepage() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const h1 = wrapperRef.current?.querySelector("h1");
      if (!h1) return;

      const split = new SplitText(h1, { type: "words,chars" });

      // Entrance animation
      gsap.set(split.chars, { opacity: 0 });

      gsap.to(split.chars, {
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "power1.inOut",
      });

      const wordMap = {
        developer: {
          backgroundColor: "#1a1a1a", // Dark background
          color: "#22c55e", // Green text
          fontFamily: "monospace", // Monospace font
        },
        photographer: {
          backgroundColor: "#0f0f0f", // Dark gray/black
          color: "#ffffff", // Clean white text
          fontFamily: "josefin sans", // Clean font
        },
        student: {
          backgroundColor: "#1e293b", // Dark slate
          color: "#44a0a6 ", // Soft slate text
          fontFamily: "Georgia, serif",
        },
      };

      const cleanupFns: (() => void)[] = [];

      Object.entries(wordMap).forEach(([word, styles]) => {
        const el = Array.from(split.words).find((w) => w.textContent?.toLowerCase().replace(".", "") === word) as HTMLElement | undefined;

        if (el) {
          const onEnter = () => {
            gsap.to("body", {
              backgroundColor: styles.backgroundColor,
              color: styles.color,
              fontFamily: styles.fontFamily,
              duration: 1.5,
              ease: "power2.out",
            });

            gsap.to("h1", {
              color: styles.color,
              duration: 1.5,
              ease: "power2.out",
            });

            gsap.to(".container", {
              opacity: 1,
              duration: 1.5,
              ease: "power2.out",
            });
          };

          el.addEventListener("mouseenter", onEnter);
          cleanupFns.push(() => el.removeEventListener("mouseenter", onEnter));
        }
      });

      return () => {
        cleanupFns.forEach((fn) => fn());
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="container flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center max-w-xl leading-relaxed">
        Hi, I'm Jan Librando. <br />
        <span className="cursor-pointer block text-left">
          <Link to="/developer">developer</Link>
        </span>
        <span className="cursor-pointer block text-left photo">
          <Link to="/photography">photographer</Link>
        </span>
        <span className="cursor-pointer block text-left">
          <a href="https://www.asiancollege.edu.ph/">student</a>
        </span>
      </h1>
    </div>
  );
}

export default Homepage;
