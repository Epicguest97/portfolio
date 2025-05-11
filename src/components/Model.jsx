import { useGLTF } from '@react-three/drei';
function Model() {
  const gltf = useGLTF('/models/Comp.glb');
  return <primitive object={gltf.scene} />;
}
// In Canvas:
<Model />

export default Model;