import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader.jsx";

const ScrollControl = () => {
  const { camera } = useThree();
  const scrollY = useRef(window.scrollY);
  // Zapisz początkową pozycję kamery, aby móc do niej wrócić lub ją modyfikować
  const initialCameraZ = useRef(camera.position.z);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useFrame(() => {
    const targetZ = initialCameraZ.current - scrollY.current * 0.007;
    camera.position.z += (targetZ - camera.position.z) * 0.03;
  });

  return null;
};
const Porsche = () => {
  const earth = useGLTF("./porsche/scene.gltf");
  return <primitive object={earth.scene} position={[0, 1, 0]} scale={1.4} />;
};

const PorscheCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [4, 2.5, 4], fov: 70 }}
    >
      <ambientLight intensity={10} />
      <pointLight position={[-5, 0, 0]} intensity={80} />
      <pointLight position={[0, 5, 0]} intensity={80} />
      <pointLight position={[5, 0, 0]} intensity={80} />
      <pointLight position={[0, 0, 5]} intensity={80} />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={4}
        />
        <Porsche />
      </Suspense>
    </Canvas>
  );
};

export default PorscheCanvas;
