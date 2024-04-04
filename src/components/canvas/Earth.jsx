import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");
  return <primitive object={scene} scale={2.2} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 0, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={2} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={15}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          MINPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
