import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Model = () => {
  const { scene, animations } = useGLTF('/models/comp.glb', true);

  useEffect(() => {
    if (animations.length > 0) {
      const mixer = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.stop();  // Stop all animations
      });
    }
  }, [scene, animations]);

  return <primitive object={scene} scale={1.5} />;
};

export default Model;
