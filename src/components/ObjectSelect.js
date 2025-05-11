// ObjectSelection.js
import { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ObjectSelection = () => {
  const gltf = useLoader(GLTFLoader, '/models/scene.glb');

  useEffect(() => {
    const targetObject = gltf.scene.getObjectByName('Object_13');
    if (targetObject) {
      console.log('Object_13 found:', targetObject);
      // Move the object to the desired position
      targetObject.position.set(-5, 2, 2);
    } else {
      console.log('Object_13 not found');
    }
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};

export default ObjectSelection;
