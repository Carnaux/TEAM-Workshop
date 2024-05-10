import { Mesh } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export const HoverOpacityEnter = (gltf: GLTF, name: string) => {
  gltf.scene.traverse((child) => {
    if (child instanceof Mesh) {
      if (!child.name.includes(name)) {
        child.material.opacity = 0.2;
        child.material.needsUpdate = true;
      }
    }
  });
};

export const HoverOpacityLeave = (gltf: GLTF, name: string) => {
  gltf.scene.traverse((child) => {
    if (child instanceof Mesh) {
      if (!child.name.includes(name)) {
        child.material.opacity = 1;
        child.material.needsUpdate = true;
      }
    }
  });
};

export const ResetOpacity = (gltf: GLTF) => {
  gltf.scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.material.opacity = 1;
      child.material.needsUpdate = true;
    }
  });
};
