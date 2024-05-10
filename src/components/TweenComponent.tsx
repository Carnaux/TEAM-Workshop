import { useFrame } from "@react-three/fiber";
import * as TWEEN from "@tweenjs/tween.js";

export const TweenComponent = () => {
  useFrame(() => {
    TWEEN.update();
  });

  return <></>;
};
