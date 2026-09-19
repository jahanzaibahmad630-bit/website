import { ReactThreeFiber } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fluidMaterial: ReactThreeFiber.Object3DNode<any, any>;
      imgMaterial: ReactThreeFiber.Object3DNode<any, any>;
    }
  }
}

declare module "*.glsl" {
  const value: string;
  export default value;
}

declare module "*.vert" {
  const value: string;
  export default value;
}

declare module "*.frag" {
  const value: string;
  export default value;
}

export {};
