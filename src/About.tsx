import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css"; // optional: for Tailwind or custom styles

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

      tl.from(".about-heading", { y: -50, opacity: 0 }).from(".about-text", { opacity: 0, y: 20 }, "-=0.5").from(
        ".social-icons a",
        {
          opacity: 0,
          y: 20,
          stagger: 0.2,
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  useEffect(() => {
    document.body.style.backgroundColor = "#1e293b"; // Dark slate
    document.body.style.color = "#44a0a6"; // Soft slate text
    document.body.style.fontFamily = "Georgia, serif";
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="about-heading text-4xl font-bold mb-4">About Me</h1>
      <p className="about-text max-w-xl text-3xl mb-6">Hi! I'm Jan Librando — a passionate developer, photographer, and lifelong student. I enjoy creating beautiful and functional web experiences, capturing moments through my lens, and continuously learning new things.</p>
      <div className="social-icons flex gap-6">
        <a href="https://www.facebook.com/LeBardy/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.svg" alt="Facebook" className="w-8 h-8 hover:scale-110 transition-transform" />
        </a>
        <a href="https://github.com/Lebardy" target="_blank" rel="noopener noreferrer">
          <img src="/github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.instagram.com/lebardyyy/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default About;
