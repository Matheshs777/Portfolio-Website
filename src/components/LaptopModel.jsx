import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function LaptopModel({ texturePath, ...props }) {
  // 1. Load the scene inside the component
  const { scene } = useGLTF('/models/asus_rog_strix_scar_17.gltf');
  const activeVideoRef = useRef(null);

  useEffect(() => {
    if (!texturePath || !scene) return;

    const isVideo = texturePath.endsWith('.mp4') || texturePath.endsWith('.webm');

    // Helper function to apply the texture properly
    const applyTextureToScreen = (texture) => {
      texture.flipY = true; // Flips the texture right-side up
      
      // --- ZOOM OUT FIX ---
      // Set the transform origin to the center of the image
      texture.center.set(0.5, 0.5); 
      // Increase these numbers (> 1) to zoom out. 
      // Adjust from 1.2 to 1.1 or 1.3 if you need it to fit differently!
      texture.repeat.set(1.2, 1.2); 
      // --------------------

      if ('colorSpace' in texture) {
        texture.colorSpace = THREE.SRGBColorSpace;
      }

      scene.traverse((child) => {
        // STRICTLY target only the screen material ('Layar') or the actual screen mesh ('Object_8')
        if (
          child.isMesh &&
          (child.material?.name === 'Layar' || child.name === 'Object_8')
        ) {
          child.material = new THREE.MeshBasicMaterial({
            map: texture,
            name: 'Layar', // Keeps the name intact for the next click
            side: THREE.DoubleSide,
          });
          child.material.needsUpdate = true;
        }
      });
    };

    if (isVideo) {
      // Clean up previous video to free up memory
      if (activeVideoRef.current) {
        activeVideoRef.current.pause();
        activeVideoRef.current.removeAttribute('src');
        activeVideoRef.current.load();
      }

      // Create an in-memory HTML5 Video Element
      const video = document.createElement('video');
      video.src = texturePath;
      video.crossOrigin = 'Anonymous';
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;

      activeVideoRef.current = video;

      video.play().catch((err) => console.warn('Video play blocked:', err));

      const videoTexture = new THREE.VideoTexture(video);
      applyTextureToScreen(videoTexture);

      return () => {
        video.pause();
        video.removeAttribute('src');
        video.load();
      };
    } else {
      // Load standard image textures (.png, .jpg, .jpeg)
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(texturePath, (texture) => {
        applyTextureToScreen(texture);
      });
    }
  }, [scene, texturePath]);

  // 2. Return the primitive object INSIDE the component
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// 3. Preload is OUTSIDE the component (and does not reference 'scene')
useGLTF.preload('/models/asus_rog_strix_scar_17.gltf');
