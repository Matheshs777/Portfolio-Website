import { useState, useEffect } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  // 1. Add state to detect if the user is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check on mount
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return; // Prevent updating coordinates on mobile
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      
      {myProjects.map((project) => (
        <motion.div
          key={project.id}
          // 2. Automatically trigger the preview when scrolling into view
          onViewportEnter={() => setPreview(project.texture)} // Update 'project.texture' to whatever your image key is
          onViewportLeave={() => setPreview(null)}
          // Triggers when 50% of the project component is visible on screen
          viewport={{ amount: 0.5 }} 
        >
          <Project {...project} setPreview={setPreview} />
        </motion.div>
      ))}

      {preview && (
        <motion.img
          className={`fixed z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80 ${
            isMobile 
              ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" // 3. Center fixed on mobile
              : "top-0 left-0" // Positioned by spring values on desktop
          }`}
          src={preview}
          // 4. Only apply the mouse-follow spring physics on desktop
          style={isMobile ? {} : { x: springX, y: springY }} 
        />
      )}
    </section>
  );
};

export default Projects;