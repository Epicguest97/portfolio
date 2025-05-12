import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CameraController = ({ isFixed, targetPosition }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  // Define a point more to the left
  const lookAtPoint = new THREE.Vector3(-5.0, 0.17, 2.84);

  useFrame(() => {
    if (isFixed && targetPosition) {
      // Move camera toward target position
      camera.position.lerp(targetPosition, 0.05);
      
      // Force camera to look at our left-focused point
      camera.lookAt(lookAtPoint);
      
      // Synchronize controls with camera look direction
      if (controlsRef.current) {
        controlsRef.current.target.copy(lookAtPoint);
        controlsRef.current.update();
      }
    }
  });

  // Reset the controls target whenever isFixed changes
  useEffect(() => {
    if (isFixed && controlsRef.current) {
      controlsRef.current.target.copy(lookAtPoint);
      controlsRef.current.update();
    }
  }, [isFixed, lookAtPoint]);

  return (
    <OrbitControls 
      ref={controlsRef}
      enableZoom={!isFixed}
      enablePan={!isFixed}
      enableRotate={!isFixed}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      domElement={gl.domElement}
    />
  );
};

export default CameraController;