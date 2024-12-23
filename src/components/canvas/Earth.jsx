import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import CanvasLoader from '../Loader'
import useDimension from '../../hooks/useDimension';

const Earth = ({isMobile}) => {

  const earth = useGLTF('./inc4.gltf')

  return (
    
    <mesh>
      <hemisphereLight 
        intensity={2.2}
        color="white"
        groundColor="black"
      />
      <spotLight 
        position={[100, 50, 10]}
        angle={0.3}
        penumbra={0.5}
        intensity={6000} 
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      <pointLight 
        position={[0, -50, 0]} 
        intensity={600} 
        color="white" 
        castShadow
      />
      <primitive 
        object={earth.scene} 
        scale={1.6} 
        position={[0, 0.1, 0]} 
        rotation-x={Math.PI / 4} 
        rotation-y={1} 
        rotation-z={0.4}
      >
        <meshStandardMaterial 
          emissive="white" 
          emissiveIntensity={1.5} 
          color="blue"
        />
      </primitive>
      <EffectComposer>
        <Bloom 
          intensity={1.2}
          luminanceThreshold={0.8}
          luminanceSmoothing={1.2}
        />
      </EffectComposer>
    </mesh>
    
  )
}

const EarthCanvas = () => {

  // const isMobile = useDimension();

  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov: 45, 
      near: 0.1, 
      far: 200, 
      position: [-4, 3, 6]
    }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate={true}
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Earth isMobile={''}/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas