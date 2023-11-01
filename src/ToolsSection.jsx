// ToolsSection.jsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import useCursorStore from './cursorStore';
import ToolCube from './ToolCube';


import reactLogo from "./assets/logos/react.png";
import viteLogo from "./assets/logos/vite.svg";
import awsLogo from "./assets/logos/aws.svg"
import dockerLogo from "./assets/logos/docker2.svg"
import fastapiLogo from "./assets/logos/fastapi.svg"
import gcpLogo from "./assets/logos/gcp.png"
import javaLogo from "./assets/logos/java.svg"
import javascriptLogo from "./assets/logos/javascript.png"
import nodejsLogo from "./assets/logos/nodejs.svg"
import postgreLogo from "./assets/logos/postgre.png"
import pythonLogo from "./assets/logos/python.svg"
import pytorchLogo from "./assets/logos/pytorch.svg"
import springLogo from "./assets/logos/spring.svg"
import tensorflowLogo from "./assets/logos/tensorflow.svg"
import threejsLogo from "./assets/logos/threejs.png"
import numpyLogo from "./assets/logos/numpy.svg"
import pandasLogo from "./assets/logos/pandas.svg"
import anacondaLogo from "./assets/logos/anaconda.png"
import openaiLogo from "./assets/logos/openai.svg"
import gymnasium from "./assets/logos/gymnasium.svg"
import djangoLogo from "./assets/logos/django.svg"
import githubLogo from "./assets/logos/github.svg"
import nextLogo from "./assets/logos/next.svg"
import mavenLogo from "./assets/logos/maven.png"
import linuxLogo from "./assets/logos/linux.png"

const ToolsSection = () => {
  const setMousePosition = useCursorStore(state => state.setMousePosition);

  return (
    <div onMouseMove={(e) => setMousePosition(e.clientX, e.clientY)} style={{ width: '1000px', height: '100vh' , display: 'inline-block'}}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* Render your ToolCubes here. For demonstration, I'm using one ToolCube */}
        <ToolCube texture={gcpLogo} index={0}/>
        <ToolCube texture={reactLogo} index={1}/>
        <ToolCube texture={postgreLogo} index={2} />
        <ToolCube texture={dockerLogo} index={3}/>
        <ToolCube texture={fastapiLogo} index={4}/>
        <ToolCube texture={mavenLogo} index={5}/> 
        <ToolCube texture={javaLogo} index={6} />
        <ToolCube texture={linuxLogo} index={7}/>
        <ToolCube texture={viteLogo} index={8}/>
        <ToolCube texture={awsLogo} index={9}/>
        <ToolCube texture={pythonLogo} index={10}/>
        <ToolCube texture={pytorchLogo} index={11}/>
        <ToolCube texture={numpyLogo} index={12}/> 
        <ToolCube texture={tensorflowLogo} index={13}/>
        <ToolCube texture={pandasLogo} index={14}/>
        <ToolCube texture={githubLogo} index={15}/>
        <ToolCube texture={threejsLogo} index={16}/> 
        <ToolCube texture={nextLogo} index={17}/>
        <ToolCube texture={openaiLogo} index={18}/>
        <ToolCube texture={gymnasium} index={19}/>
        <ToolCube texture={djangoLogo} index={20}/>
        <ToolCube texture={springLogo} index={21}/> 
        <ToolCube texture={anacondaLogo} index={22}/> 
        <ToolCube texture={nodejsLogo} index={23} /> 
        <ToolCube texture={javascriptLogo} index={24} />
      </Canvas>
    </div>
  );
};

export default ToolsSection;
