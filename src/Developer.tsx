import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Gym Membership Website",
    description: "A static responsive website for a gym using HTML, Bootstrap, and JavaScript.",
    link: "https://titanforge.lebardy.tech",
  },
  {
    title: "Wheel of Names",
    description: "A wheel of names application built with React and Tailwind CSS.",
    link: "https://week7-librando.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    link: "https://github.com/yourusername/api-demo",
  },
];

const Developer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".project-card");

      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="container flex flex-col items-center justify-center text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Recent Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-neutral-900 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-300">{project.title}</h3>
            <p className="mt-2 text-neutral-300">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-green-500 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developer;
