import * as TWEEN from "@tweenjs/tween.js";
import { Vector3 } from "three";

export const CameraZoom = (camera: any, lookAt: Vector3, position: Vector3) => {
  new TWEEN.Tween(camera.current.rotation)
    .to(
      {
        x: lookAt.x,
        y: lookAt.y,
        z: lookAt.z,
      },
      2000
    )
    .easing(TWEEN.Easing.Cubic.Out)
    .start();

  // change camera position
  new TWEEN.Tween(camera.current.position)
    .to(
      {
        x: position.x,
        y: position.y,
        z: position.z,
      },
      2000
    )
    .easing(TWEEN.Easing.Cubic.Out)
    .start();
};
