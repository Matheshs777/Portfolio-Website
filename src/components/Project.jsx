import React, { useState, useEffect, useRef } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  
  // 1. Create a ref to track this specific project's div on the screen
  const projectRef = useRef(null);

  // 2. Set up the observer for mobile scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When this project is at least 50% visible on the screen, set the preview
        if (entry.isIntersecting) {
          setPreview(image);
        }
      },
      { threshold: 0.5 } // 0.5 means 50% visibility
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [image, setPreview]);

  return (
    <>
      {/* 3. Attach the ref to the main wrapper div */}
      <div
        ref={projectRef}
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="arrow" />
        </button>
      </div>
      
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;