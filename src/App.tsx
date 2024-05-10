import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Bike } from "./components/Bike";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TweenComponent } from "./components/TweenComponent";
import { CameraZoom } from "./utils/CameraZoom";
import { Vector3 } from "three";
import { UIComponent } from "./components/UIComponent";

function App() {
  const camera = useRef<any>(null);
  const controls = useRef<any>(null);
  const [selectedPart, setSelectedPart] = useState<string>("");
  const [resetCamera, setResetCamera] = useState<boolean>(false);

  useEffect(() => {
    if (selectedPart !== "" && camera.current && controls.current) {
      if (selectedPart === "Garfo") {
        CameraZoom(
          camera,
          new Vector3(0, -Math.PI / 4, 0),
          new Vector3(-1.5, 0.2, 1)
        );
      } else if (selectedPart === "Quadro") {
        CameraZoom(camera, new Vector3(0, 0, 0), new Vector3(0, 0.1, 1.2));
      } else if (selectedPart === "mola") {
        CameraZoom(camera, new Vector3(0, 0, 0), new Vector3(0.15, -0.05, 0.8));
      } else if (selectedPart === "Gearbox") {
        CameraZoom(
          camera,
          new Vector3(0, Math.PI, 0),
          new Vector3(0.7, -0.25, -0.8)
        );
      }
    }
  }, [selectedPart]);

  useEffect(() => {
    if (resetCamera) {
      setSelectedPart("");
      setResetCamera(false);
      CameraZoom(camera, new Vector3(0, 0, 0), new Vector3(0, 0, 3.5));
    }
  }, [resetCamera]);

  return (
    <>
      <Canvas shadows>
        <PerspectiveCamera
          ref={camera}
          makeDefault
          position={[0, 0, 3.5]}
          fov={35}
        />
        <ambientLight intensity={0.7} />
        <Environment preset="city" background blur={1} />
        <ambientLight />
        <OrbitControls
          ref={controls}
          makeDefault
          enabled={selectedPart !== "" ? false : true}
          enableDamping={true}
          // autoRotate={selectedPart !== "" ? false : true}
          autoRotateSpeed={0.5}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        <ContactShadows
          resolution={512}
          position={[0, -0.55, 0]}
          opacity={1}
          scale={5}
          blur={2}
          far={5}
        />
        <Bike
          position={[0, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          selectedPart={selectedPart}
          setSelectedPart={setSelectedPart}
          resetCamera={resetCamera}
        />
        <TweenComponent />
      </Canvas>
      {selectedPart !== "" && <UIComponent setResetCamera={setResetCamera} />}
    </>
  );
}

export default App;
