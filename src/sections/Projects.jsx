import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { LaptopModel } from '../components/LaptopModel';
import CanvasLoader from '../components/CanvasLoader';
import { myProjects } from '../constants';

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="relative c-space my-20">
      <h2 className="text-white text-3xl font-bold">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-4 h-[1px] w-full" />

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-8 w-full">
        
        {/* LEFT CARD: Text Details & Software Logos */}
        <div className="flex flex-col justify-between p-8 bg-neutral-900/80 rounded-2xl border border-neutral-800 shadow-2xl min-h-[450px]">
          
          <div className="flex flex-col gap-6">
            {/* Top Project Logo */}
            <div className="w-14 h-14 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
              <img 
                src={currentProject.logo} 
                alt="logo" 
                className="w-8 h-8 object-contain" 
              />
            </div>

            {/* Title & Descriptions */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-2xl font-bold tracking-wide">
                {currentProject.title}
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed">
                {currentProject.desc}
              </p>
              {currentProject.subdesc && (
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {currentProject.subdesc}
                </p>
              )}
            </div>
          </div>

          {/* BOTTOM SECTION: Tags, Link, and Arrows */}
          <div className="flex flex-col gap-6 mt-8">
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              {/* Software Used Logos (Tags) */}
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag) => (
                  <div 
                    key={tag.id} 
                    className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center"
                    title={tag.name}
                  >
                    <img src={tag.path} alt={tag.name} className="w-6 h-6 object-contain" />
                  </div>
                ))}
              </div>

              {/* Live Site Link */}
              <a
                href={currentProject.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
              >
                <span>Check Live Site</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-2 border-t border-neutral-800 pt-6">
              <button
                onClick={() => handleNavigation('previous')}
                className="p-3 bg-neutral-800 hover:bg-neutral-700 active:scale-95 rounded-full text-white transition-all border border-neutral-700"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => handleNavigation('next')}
                className="p-3 bg-neutral-800 hover:bg-neutral-700 active:scale-95 rounded-full text-white transition-all border border-neutral-700"
                aria-label="Next Project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
          </div>
        </div>

        {/* RIGHT CARD: 3D Laptop Display */}
        <div className="border border-neutral-800 bg-neutral-900/80 rounded-2xl h-[450px] w-full overflow-hidden relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />

            <Suspense fallback={<CanvasLoader />}>
              <Center>
                <LaptopModel
                  texturePath={currentProject.texture}
                  scale={0.8}
                  rotation={[0.2, -0.3, 0]}
                />
              </Center>
            </Suspense>

            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;