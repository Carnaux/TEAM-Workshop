import { useState } from "react";
import "./App.css";
import { Bike } from "./components/Bike";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function App() {
  const [selectedPart, setSelectedPart] = useState<string>("");

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 3.5], fov: 35 }}>
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, -5]}
          castShadow
        />
        <Environment preset="city" background blur={1} />
        <ambientLight />
        <OrbitControls
          makeDefault
          enabled={selectedPart !== "" ? false : true}
          enableDamping={true}
          autoRotate={selectedPart !== "" ? false : true}
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        <ContactShadows
          resolution={512}
          position={[0, -0.6, 0]}
          opacity={1}
          scale={10}
          blur={2}
          far={0.8}
        />
        <Bike
          position={[0, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          selectedPart={selectedPart}
          setSelectedPart={setSelectedPart}
        />
      </Canvas>
    </>
  );
}

export default App;
