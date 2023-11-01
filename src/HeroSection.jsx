import React, { useRef } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import './HeroSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Planet = () => {
    const { nodes } = useGLTF('src/assets/models/planet/scene.gltf');
    
    return (
        <div className="clearfix">
            <div className="hc relative">
                <div className='planet-canvas'>
                    <Canvas className="">
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <PlanetMesh nodes={nodes} />
                    </Canvas>
                </div>

                <div className="contact-info ">
                    <h1>Name's <br/> Digital Portfolio</h1>
                    <div className='spacer'> </div>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <a href="mailto:your.email@example.com"> email@gmail.com</a>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                        +Phone Number
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                        Location
                        </li>
                    </ul>
                    <div className='spacer'> </div>
                    <p className='text'>Intro Text</p>
                </div>
            </div>
        </div>
    );
};

const PlanetMesh = ({ nodes }) => {
    const meshRefs = useRef([]);

    useFrame(() => {
        meshRefs.current.forEach(ref => {
            if (ref) {
                ref.rotation.y += 0.0015;
            }
        });
    });

    return (
        <>
            {Object.values(nodes).map((node, index) => {
                if (node.isMesh) {
                    return <primitive 
                                ref={ref => meshRefs.current[index] = ref} 
                                key={index} 
                                object={node} 
                                scale={[5, 5, 5]}  
                                position={[4, -0, -1]}
                           />;
                }
                return null;
            })}
        </>
    );
};


export default Planet;
