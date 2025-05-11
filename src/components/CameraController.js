import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

const CameraController = ({ isFixed, targetPosition }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => {
    if (isFixed && targetPosition) {
      camera.position.lerp(targetPosition, 0.05);
      camera.lookAt(-0.15, 0.08, 1.68);

      if (controlsRef.current) {
        controlsRef.current.update();
      }
    }
  });

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