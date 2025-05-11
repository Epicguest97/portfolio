// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls, Html } from '@react-three/drei';
// import { useEffect, useState, useRef } from 'react';
// import Model from './Model';

// // Camera values display component with interactive controls
// const CameraPositionLogger = () => {
//   const { camera } = useThree();
//   const [cameraValues, setCameraValues] = useState({
//     position: [0, 0, 0],
//     fov: 0
//   });
  
//   const xInputRef = useRef(null);
//   const yInputRef = useRef(null);
//   const zInputRef = useRef(null);
//   const fovInputRef = useRef(null);
  
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
  
//   // Apply camera position and FOV from input fields
//   const updateCameraPosition = () => {
//     camera.position.set(
//       parseFloat(xInputRef.current.value),
//       parseFloat(yInputRef.current.value),
//       parseFloat(zInputRef.current.value)
//     );
//     camera.fov = parseFloat(fovInputRef.current.value);
//     camera.updateProjectionMatrix();
//   };

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
//         width: '280px'
//       }}
//     >
//       <div>
//         <div style={{ marginBottom: '10px' }}>
//           Current: [{cameraValues.position.join(', ')}], FOV: {cameraValues.fov}
//         </div>
        
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px', marginBottom: '10px' }}>
//           <div>
//             <label style={{ fontSize: '12px', display: 'block', marginBottom: '2px' }}>X</label>
//             <input
//               ref={xInputRef}
//               type="number"
//               step="0.5"
//               defaultValue={cameraValues.position[0]}
//               style={{ width: '100%', padding: '3px', fontSize: '12px' }}
//             />
//           </div>
//           <div>
//             <label style={{ fontSize: '12px', display: 'block', marginBottom: '2px' }}>Y</label>
//             <input
//               ref={yInputRef}
//               type="number"
//               step="0.5"
//               defaultValue={cameraValues.position[1]}
//               style={{ width: '100%', padding: '3px', fontSize: '12px' }}
//             />
//           </div>
//           <div>
//             <label style={{ fontSize: '12px', display: 'block', marginBottom: '2px' }}>Z</label>
//             <input
//               ref={zInputRef}
//               type="number" 
//               step="0.5"
//               defaultValue={cameraValues.position[2]}
//               style={{ width: '100%', padding: '3px', fontSize: '12px' }}
//             />
//           </div>
//           <div>
//             <label style={{ fontSize: '12px', display: 'block', marginBottom: '2px' }}>FOV</label>
//             <input
//               ref={fovInputRef}
//               type="number"
//               min="10"
//               max="120"
//               step="5"
//               defaultValue={cameraValues.fov}
//               style={{ width: '100%', padding: '3px', fontSize: '12px' }}
//             />
//           </div>
//         </div>
        
//         <button
//           onClick={updateCameraPosition}
//           style={{
//             background: '#3182ce',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             padding: '5px 10px',
//             cursor: 'pointer',
//             width: '100%'
//           }}
//         >
//           Move Camera
//         </button>
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
//       {/* Camera logger with interactive controls */}
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