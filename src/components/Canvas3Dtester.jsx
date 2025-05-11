// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls, Html } from '@react-three/drei';
// import { useEffect, useState } from 'react';
// import Model from './Model';

// // Camera values display component with Html wrapper
// const CameraPositionLogger = () => {
//   const { camera } = useThree();
//   const [cameraValues, setCameraValues] = useState({
//     position: [0, 0, 0],
//     fov: 0
//   });
  
//   useFrame(() => {
//     setCameraValues({
//       position: [
//         parseFloat(camera.position.x.toFixed(2)),
//         parseFloat(camera.position.y.toFixed(2)),
//         parseFloat(camera.position.z.toFixed(2))
//       ],
//       fov: parseFloat(camera.fov.toFixed(1))
//     });
//   });
  
//   // Use HTML overlay within Canvas with Html component
//   return (
//     <Html
//       as='div'
//       className="camera-logger"
//       style={{
//         position: 'absolute',
//         top: '10px',
//         left: '10px',
//         background: 'rgba(0,0,0,0.7)',
//         color: 'white',
//         padding: '10px',
//         borderRadius: '4px',
//         fontFamily: 'monospace',
//         fontSize: '14px',
//         pointerEvents: 'none'
//       }}
//     >
//       <div>position: [{cameraValues.position.join(', ')}]</div>
//       <div>fov: {cameraValues.fov}</div>
//       <div style={{ fontSize: '12px', marginTop: '5px', opacity: 0.8 }}>
//         Copy these values to your Canvas component
//       </div>
//     </Html>
//   );
// };

// // Simple component to lock model in place
// const LockModel = () => {
//   const { scene } = useThree();
  
//   useEffect(() => {
//     scene.traverse((object) => {
//       if (object.isMesh) {
//         object.matrixAutoUpdate = false;
//         object.updateMatrix();
//       }
//     });
    
//     return () => {
//       scene.traverse((object) => {
//         if (object.isMesh) {
//           object.matrixAutoUpdate = true;
//         }
//       });
//     };
//   }, [scene]);
  
//   return null;
// };

// const Canvas3D = () => {
//   return (
//     <Canvas 
//       camera={{ 
//         position: [0, 2, 13], 
//         fov: 50 
//       }}
//       style={{ width: '100%', height: '90vh' }}
//     >
//       {/* Camera logger now INSIDE Canvas */}
//       <CameraPositionLogger />
      
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
      
//       <LockModel />
      
//       <OrbitControls 
//         enableZoom={true}
//         enablePan={false}
//         enableRotate={true}
//         maxPolarAngle={Math.PI / 2} 
//         minPolarAngle={Math.PI / 3}
//       />
      
//       <Model />
//     </Canvas>
//   );
// };

// export default Canvas3D;
