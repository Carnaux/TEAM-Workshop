import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  HoverOpacityEnter,
  HoverOpacityLeave,
  ResetOpacity,
} from "../utils/HoverOpacity";

export const Bike = (props: any) => {
  const ref = useRef(null);
  const gltf = useLoader(GLTFLoader, "/bike.glb");

  useEffect(() => {
    if (ref.current) {
      gltf.scene.traverse((child) => {
        if (child instanceof Mesh) {
          child.material.transparent = true;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [ref.current]);

  useEffect(() => {
    if (props.resetCamera) {
      ResetOpacity(gltf);
    }
  }, [props.resetCamera]);

  const handleMouseOver = (e: any) => {
    e.stopPropagation();
    const objName = e.object.name;

    if (props.selectedPart !== "") return;

    if (objName.includes("Garfo")) {
      HoverOpacityEnter(gltf, "Garfo");
    } else if (objName.includes("Gearbox")) {
      HoverOpacityEnter(gltf, "Gearbox");
    } else if (objName.includes("mola")) {
      HoverOpacityEnter(gltf, "mola");
    } else if (objName.includes("Quadro")) {
      HoverOpacityEnter(gltf, "Quadro");
    }
  };

  const handleMouseLeave = (e: any) => {
    e.stopPropagation();

    if (props.selectedPart !== "") return;

    const objName = e.object.name;

    if (objName.includes("Garfo")) {
      HoverOpacityLeave(gltf, "Garfo");
    } else if (objName.includes("Gearbox")) {
      HoverOpacityLeave(gltf, "Gearbox");
    } else if (objName.includes("mola")) {
      HoverOpacityLeave(gltf, "mola");
    } else if (objName.includes("Quadro")) {
      HoverOpacityLeave(gltf, "Quadro");
    }
  };

  const handleMouseClick = (e: any) => {
    e.stopPropagation();
    const objName = e.object.name;

    if (objName.includes("Garfo")) {
      props.setSelectedPart("Garfo");
    } else if (objName.includes("Gearbox")) {
      props.setSelectedPart("Gearbox");
    } else if (objName.includes("mola")) {
      props.setSelectedPart("mola");
    } else if (objName.includes("Quadro")) {
      props.setSelectedPart("Quadro");
    }
  };

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      {...props}
      onPointerEnter={(e: any) => {
        handleMouseOver(e);
      }}
      onPointerOut={(e: any) => {
        handleMouseLeave(e);
      }}
      onClick={(e: any) => {
        handleMouseClick(e);
      }}
    />
  );
};
