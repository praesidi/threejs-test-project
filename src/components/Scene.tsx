import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import { Model } from './Model';


function Scene() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 15, position: [0, 20, 150] }}>
      {/* <color attach="background" args={['#776a6a']} /> */}
      <ambientLight />
      <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} >
        <Model position={[0, -12, 0]}/>
      </PresentationControls>
    </Canvas>)
}

export default Scene;