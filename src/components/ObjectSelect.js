import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

const ObjectSelect = ({ setIsFixed, setTargetPosition }) => {
  const { gl, camera, scene } = useThree();

  useEffect(() => {
    const handleClick = (event) => {
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        // Log the object name
        console.log("Clicked on object:", clickedObject.name);

        // Check if the clicked object is Object_13
        if (clickedObject.name === 'Object_13') {
          console.log("Object_13 clicked!");
          setTargetPosition(new THREE.Vector3(-0.15, 0.08, 1.68));
          setIsFixed(true);
        }
      }
    };

    gl.domElement.addEventListener('click', handleClick);

    return () => {
      gl.domElement.removeEventListener('click', handleClick);
    };
  }, [gl, camera, scene, setIsFixed, setTargetPosition]);

  return null;
};

export default ObjectSelect;
