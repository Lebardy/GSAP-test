import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);
const photos = [
  {
    src: "../public/images/SY.jpg",
    title: "Sid and Ysa Graduation Shoot",
    link: "https://www.facebook.com/share/p/15f8aTq3Gd/",
  },
  {
    src: "../public/images/AWAKE.jpg",
    title: "AWAKE - Victory Dumaguete Youth Event",
    link: "https://www.facebook.com/share/p/1DfWtR9ZWE/",
  },
  {
    src: "../public/images/Grad.jpg",
    title: "Graduation Banquet of Victory Dumaguete College Seniors",
  },
  {
    src: "../public/images/AKIVA.jpg",
    title: "AKIVA 2025 - Ultimate Frisbee Tournament",
    link: "https://www.facebook.com/share/p/1Vb1gMJxN1/",
  },
  {
    src: "../public/images/UBG.jpg",
    title: "UBG - Ultimate Frisbee Tournament",
    link: "https://www.facebook.com/share/p/16PUs4uZJv/",
  },
];

const Photography = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const cards = containerRef.current?.querySelectorAll(".photo-card");

      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 40,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
                once: true, // ensures animation only happens once
              },
            }
          );
        });
      }
    },
    { scope: containerRef }
  );

  useEffect(() => {
    document.body.style.backgroundColor = "#0f0f0f"; // Set the background color for the photography page
    document.body.style.fontFamily = "Josefin Sans, sans-serif"; // Set the font family for the photography page
  }, []);
  return (
    <>
      <div className="container flex flex-col items-center justify-center text-white p-8">
        <h2 className="text-4xl font-bold mb-6 text-white-400">Recent Photos</h2>
        <div ref={containerRef} className="grid md:grid-cols-1 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="photo-card bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src={photo.src} alt={photo.title} className="w-full h-auto rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">{photo.title}</h3>
              {photo.link && (
                <a href={photo.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  View on Facebook
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Photography;
