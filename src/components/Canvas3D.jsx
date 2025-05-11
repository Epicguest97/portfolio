import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useState, useCallback } from 'react';
import { Vector3 } from 'three';
import CameraController from './CameraController';
import ObjectSelect from './ObjectSelect';
import { useGLTF } from '@react-three/drei';

const Canvas3D = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [targetPosition, setTargetPosition] = useState(null);
  const { scene } = useGLTF('/models/comp.glb', true);

  const resetCamera = useCallback(() => {
    setIsFixed(false);
    setTargetPosition(null);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas 
        camera={{ position: [0, 1.2, 4.21], fov: 50 }}
        style={{ width: '100vw', height: '100vh', background: '#020202' }}
      >
        <ambientLight color={'#001d3d'} intensity={0.4} />
        <directionalLight color={'#00b4d8'} position={[0, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-5, 2, 2]} intensity={1} color={'#7209b7'} />
        <spotLight color={'#4361ee'} position={[2, 5, 2]} angle={0.5} intensity={2.0} penumbra={0.3} castShadow />
        <pointLight position={[5, -2, -5]} intensity={0.3} color={'#ffffff'} />
        <Environment preset="night" />

        <CameraController isFixed={isFixed} targetPosition={targetPosition} />
        <ObjectSelect 
          scene={scene} 
          setIsFixed={setIsFixed} 
          setTargetPosition={setTargetPosition} 
        />
        <primitive object={scene} scale={1.5} />
      </Canvas>

      {isFixed && (
        <button 
          onClick={resetCamera}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            background: '#4361ee',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 0 10px rgba(0, 180, 216, 0.7)'
          }}
        >
          Reset View
        </button>
      )}
    </div>
  );
};

export default Canvas3D;
