import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber'; // <-- Added useThree
import * as THREE from 'three';

export function LaptopModel({ texturePath, ...props }) {
  const { scene } = useGLTF('/models/asus_rog_strix_scar_17.gltf');
  const activeVideoRef = useRef(null);
  
  // Access the WebGL renderer to get max graphics capabilities
  const { gl } = useThree(); 

  useEffect(() => {
    if (!texturePath || !scene) return;

    const isVideo = texturePath.endsWith('.mp4') || texturePath.endsWith('.webm');

    // Helper function to apply the texture properly
    const applyTextureToScreen = (texture) => {
      texture.flipY = true; 
      
      // --- ZOOM OUT FIX ---
      texture.center.set(0.5, 0.5); 
      texture.repeat.set(1.2, 1.2); 
      // --------------------

      // --- TRUE HD QUALITY FIX ---
      // Maximizes texture crispness when viewed at an angle
      texture.anisotropy = gl.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      // ---------------------------

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
            name: 'Layar', 
            side: THREE.DoubleSide,
          });
          child.material.needsUpdate = true;
        }
      });
    };

    if (isVideo) {
      if (activeVideoRef.current) {
        activeVideoRef.current.pause();
        activeVideoRef.current.removeAttribute('src');
        activeVideoRef.current.load();
      }

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
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(texturePath, (texture) => {
        applyTextureToScreen(texture);
      });
    }
  }, [scene, texturePath, gl]);

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/asus_rog_strix_scar_17.gltf');