import React,{Suspense} from "react";
import '../design/Demo.css';
import { Canvas } from "@react-three/fiber";
import {BoxGeometry} from 'three';
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from '../images/box.jpg';

const Box=()=>{
    const colorMap=useLoader(TextureLoader,texture);
    return(
        <mesh geometry={new BoxGeometry(3,3,3)} rotation={[90,0,20]}>
            <meshStandardMaterial map={colorMap}/>
        </mesh>
    );
}

const ThreeD=()=>{
    return(
        <div className="container">
            <Canvas className="canvas">
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1} />
                <directionalLight position={[-2,5,2]} intensity={1} />
                <Suspense fallback={null}>
                    <Box/>
                </Suspense>
            </Canvas>
        </div>
    );
}

export default ThreeD;
            
