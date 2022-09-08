import { OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import randomWord from "./randomword.js";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();

  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);

    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "teal" : "#134e4a"),
      0.1,
    );
  });
  return (
    <Text
      scale={1.5}
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}>
      {children}
    </Text>
  );
}

function Cloud({ count = 8, radius = 50 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
          randomWord(),
        ]);
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {word}
    </Word>
  ));
}

const Model = () => {
  return (
    <group>
      <mesh>
        <Cloud count={10} radius={50} />
        <OrbitControls
          enabled={true}
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={1}
          enableDamping={true}
        />
      </mesh>
    </group>
  );
};
export default function Globe() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 80 }}>
      <fog attach='fog' args={["#11111", 10,110]} />
      <Model />
    </Canvas>
  );
}