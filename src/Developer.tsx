import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive developer portfolio built with React and Tailwind CSS.",
    link: "https://your-portfolio.com",
  },
  {
    title: "Task Manager App",
    description: "A full-stack task management app using MERN stack.",
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "API Integration Demo",
    description: "A demo project that showcases working with third-party APIs in React.",
    link: "https://github.com/yourusername/api-demo",
  },
];

const Developer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".project-card");

    if (cards) {
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-neutral-900 text-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-green-400">Developer Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-neutral-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300">
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
