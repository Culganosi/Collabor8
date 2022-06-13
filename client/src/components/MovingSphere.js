import React from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";


export default function MovingSphere() {
  return (      //the cool blob in the middle of the landing page
    <Sphere visible args={[1, 500, 1000]} scale={2}> 
    <MeshDistortMaterial
      attach="material" //
      color="#8352FD"
      distort={0.8}
      speed={1.5}
      roughness={10}
    />
  </Sphere>
  )
}


