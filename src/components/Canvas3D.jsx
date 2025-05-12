import React, { useState, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useProgress, useGLTF } from '@react-three/drei';
import { Vector3 } from 'three';
import CameraController from './CameraController';
import ObjectSelect from './ObjectSelect';
import LoadingScreen from './LoadingScreen';

// Preload model
useGLTF.preload('/models/comp.glb');

const Canvas3D = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [targetPosition, setTargetPosition] = useState(null);
  const { progress, active } = useProgress();
  const { scene } = useGLTF('/models/comp.glb', true);

  const resetCamera = useCallback(() => {
    setIsFixed(false);
    setTargetPosition(null);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {active && <LoadingScreen progress={progress} />}
      
      <Canvas 
        camera={{ position: [0, 1.2, 4.21], fov: 50 }}
        style={{ 
          width: '100vw', 
          height: '100vh', 
          background: '#020202',
          visibility: active ? 'hidden' : 'visible' 
        }}
      >
        <Suspense fallback={null}>
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
        </Suspense>
      </Canvas>

      {isFixed && !active && (
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
