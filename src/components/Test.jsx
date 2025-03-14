import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Animate each section
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { x: "100%" }, // Start position (off-screen to the right)
        {
          x: "0%", // End position (fully visible)
          scrollTrigger: {
            trigger: section,
            start: "top center", // Start animation when section reaches the center of the viewport
            end: "bottom center", // End animation when section leaves the viewport
            scrub: true, // Smooth animation based on scroll
          },
        }
      );
    });
  }, []);

  return (
    <div style={{ height: "300vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            style={{
              width: "100vw",
              height: "100vh",
              background: `hsl(${index * 100}, 70%, 80%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              position: "absolute",
            }}
          >
            Section {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;