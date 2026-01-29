import React from "react";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import useMacbookStore from "../Store/index.js";

import { Box, OrbitControls } from "@react-three/drei";
const ProductViewer = () => {
    const { color, setColor, scal, setScal } = useMacbookStore();
    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>{" "}
            <div className="controls">
                <p className="info">
                    MacBook Pro {scal}" in {color}{" "}
                </p>
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control flex gap-2">
                        <div onClick={() => setColor("#adb5bd")} className={clsx("bg-neutral-300", color == "#adb5bd" && "active")}></div>{" "}
                        <div onClick={() => setColor("#2c2e2c")} className={clsx("bg-neutral-900", color == "#2c2e2c" && "active")}></div>{" "}
                    </div>
                    <div className="size-control ">
                        <div onClick={() => setScal(0.06)} className={clsx(scal == 0.06 ? "bg-white text-black" : "text-white bg-transparent")}>
                            <p>14"</p>
                        </div>
                        <div onClick={() => setScal(0.08)} className={clsx(scal == 0.08 ? "bg-white text-black" : "text-white bg-transparent")}>
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>
            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
                {/* <MacbookModel14 scal={0.06} position={[-1, 0, 0]} /> */}
                <OrbitControls enableZoom={false} />
            </Canvas>
        </section>
    );
};
export default ProductViewer;
