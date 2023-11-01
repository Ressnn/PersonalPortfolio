// ToolCube.jsx

import React, { useRef, useState } from 'react';
import { useFrame , useLoader} from '@react-three/fiber';
import useCursorStore from './cursorStore';
import { TextureLoader, Vector3, Raycaster } from 'three';
import { easing } from 'maath'

const ToolCube = ({ texture , index}) => {
  const mesh = useRef();
  const { mouseX, mouseY } = useCursorStore();
  const img = useLoader(TextureLoader, texture);

  const perRow = 5;
  const gap = 1.5; 

  const x = (index % perRow) * gap - 3; 
  const y = Math.floor(index / perRow) * gap - 3;
  const aspectRatio = img.image.width / img.image.height;

  useFrame((state) => {
    if (mesh.current) {
      // Create a target position based on the mouse position
      let targetPosition = new Vector3(state.pointer.x*2, state.pointer.y*2, 4);
      // Rotate the cube to face the target position
      mesh.current.lookAt(targetPosition);
    }
  });
  

  return (
    <mesh position={[x, y, 0]} ref={mesh} key={index}>
      <boxGeometry args={[1, 1/aspectRatio, 0]} />
      <meshBasicMaterial map={img} transparent={true}/>
    </mesh>
  );
};

export default ToolCube;