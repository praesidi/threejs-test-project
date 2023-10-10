import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    plaster_white_plaster_w_0: THREE.Mesh
    wood_light_wood_light1_0: THREE.Mesh
    wood_light_stripped_wood_light_str_0: THREE.Mesh
    wood_medium_wood_mid_0: THREE.Mesh
    wood_medium_drk_0: THREE.Mesh
    wood_medium_stripped_wood_mid_str_0: THREE.Mesh
    cloth_1_floor_pattern1_0: THREE.Mesh
    cloth_2_floor_fabr_b_0: THREE.Mesh
    cloth_wing_fabr_b_0: THREE.Mesh
    cloth_white_fabr_w_0: THREE.Mesh
    metal_silver_metal_0: THREE.Mesh
    stone_gray_stone_0: THREE.Mesh
    gold_gold1_0: THREE.Mesh
    polySurface36_paper_r_0: THREE.Mesh
    polySurface46_logo_0: THREE.Mesh
    paper_yellow_paper_y_0: THREE.Mesh
    paper_white_paper_w_0: THREE.Mesh
    polySurface1_roof_0: THREE.Mesh
    polySurface2_roof_0: THREE.Mesh
    polySurface3_roof_0: THREE.Mesh
    polySurface4_roof_0: THREE.Mesh
    polySurface5_roof_0: THREE.Mesh
    polySurface6_roof_0: THREE.Mesh
    polySurface7_roof_0: THREE.Mesh
    polySurface8_roof_0: THREE.Mesh
    polySurface9_roof_0: THREE.Mesh
    polySurface10_roof_0: THREE.Mesh
    polySurface11_roof_0: THREE.Mesh
    polySurface12_roof_0: THREE.Mesh
    polySurface13_roof_0: THREE.Mesh
    polySurface14_roof_0: THREE.Mesh
    polySurface15_roof_0: THREE.Mesh
    polySurface16_roof_0: THREE.Mesh
    polySurface17_roof_0: THREE.Mesh
    polySurface18_roof_0: THREE.Mesh
    polySurface19_roof_0: THREE.Mesh
    polySurface20_roof_0: THREE.Mesh
    polySurface21_roof_0: THREE.Mesh
    polySurface22_roof_0: THREE.Mesh
    polySurface23_roof_0: THREE.Mesh
    polySurface24_roof_0: THREE.Mesh
    ropes_rope_0: THREE.Mesh
    polySurface125_wood_dark1_0: THREE.Mesh
    darkness_drk_0: THREE.Mesh
    ground_soil_0: THREE.Mesh
    polySurface78_paper_r_0: THREE.Mesh
    polySurface80_paper_r_0: THREE.Mesh
    polySurface84_paper_r_0: THREE.Mesh
    polySurface88_paint_white_0: THREE.Mesh
    polySurface89_paint_white_0: THREE.Mesh
    polySurface92_circle_0: THREE.Mesh
    polySurface63_paper_r_0: THREE.Mesh
    polySurface69_letters_b_0: THREE.Mesh
    polySurface74_paper_r_0: THREE.Mesh
    polySurface94_wood_dark1_0: THREE.Mesh
    polySurface95_wood_dark1_0: THREE.Mesh
    polySurface96_wood_dark1_0: THREE.Mesh
    polySurface97_wood_dark1_0: THREE.Mesh
    polySurface98_wood_dark1_0: THREE.Mesh
    polySurface99_wood_dark1_0: THREE.Mesh
    polySurface100_wood_dark1_0: THREE.Mesh
    polySurface101_wood_dark1_0: THREE.Mesh
    polySurface102_wood_dark1_0: THREE.Mesh
    polySurface103_wood_dark1_0: THREE.Mesh
    polySurface104_wood_dark1_0: THREE.Mesh
    polySurface105_wood_dark1_0: THREE.Mesh
    polySurface106_wood_dark1_0: THREE.Mesh
    polySurface107_wood_dark1_0: THREE.Mesh
    polySurface108_wood_dark1_0: THREE.Mesh
    polySurface109_wood_dark1_0: THREE.Mesh
    polySurface110_wood_dark1_0: THREE.Mesh
    polySurface111_wood_dark1_0: THREE.Mesh
    polySurface112_wood_dark1_0: THREE.Mesh
    polySurface113_wood_dark1_0: THREE.Mesh
    polySurface114_wood_dark1_0: THREE.Mesh
    polySurface115_wood_dark1_0: THREE.Mesh
    polySurface116_wood_dark1_0: THREE.Mesh
    polySurface117_wood_dark1_0: THREE.Mesh
    polySurface118_wood_dark1_0: THREE.Mesh
    polySurface119_wood_dark1_0: THREE.Mesh
    polySurface120_wood_dark1_0: THREE.Mesh
    polySurface121_wood_dark1_0: THREE.Mesh
    polySurface122_wood_dark1_0: THREE.Mesh
    polySurface123_wood_dark1_0: THREE.Mesh
    polySurface124_wood_dark1_0: THREE.Mesh
    svgMesh1_gold1_0: THREE.Mesh
    cloth_wing1_pattern1_0: THREE.Mesh
    cloth_1_floor1_fabr_b_0: THREE.Mesh
    cloth_2_floor1_pattern1_0: THREE.Mesh
    pCube1_stone_0: THREE.Mesh
    pCube2_stone_0: THREE.Mesh
    pCube3_stone_0: THREE.Mesh
    pCube4_stone_0: THREE.Mesh
    pCube5_stone_0: THREE.Mesh
    pCube6_stone_0: THREE.Mesh
    pCube7_stone_0: THREE.Mesh
    pCube8_stone_0: THREE.Mesh
    pCube9_stone_0: THREE.Mesh
    pCube10_stone_0: THREE.Mesh
    pPlane1_moss1_0: THREE.Mesh
    polySurface264_wood_mid_0: THREE.Mesh
    polySurface265_wood_mid_0: THREE.Mesh
    polySurface266_wood_mid_0: THREE.Mesh
    polySurface267_wood_mid_0: THREE.Mesh
  }
  materials: {
    plaster_w: THREE.MeshStandardMaterial
    wood_light1: THREE.MeshStandardMaterial
    wood_light_str: THREE.MeshStandardMaterial
    wood_mid: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    wood_mid_str: THREE.MeshStandardMaterial
    pattern1: THREE.MeshStandardMaterial
    fabr_b: THREE.MeshStandardMaterial
    fabr_w: THREE.MeshStandardMaterial
    metal: THREE.MeshStandardMaterial
    stone: THREE.MeshStandardMaterial
    gold1: THREE.MeshStandardMaterial
    paper_r: THREE.MeshStandardMaterial
    logo: THREE.MeshStandardMaterial
    paper_y: THREE.MeshStandardMaterial
    paper_w: THREE.MeshStandardMaterial
    roof: THREE.MeshStandardMaterial
    rope: THREE.MeshStandardMaterial
    wood_dark1: THREE.MeshStandardMaterial
    soil: THREE.MeshStandardMaterial
    paint_white: THREE.MeshStandardMaterial
    circle: THREE.MeshStandardMaterial
    letters_b: THREE.MeshStandardMaterial
    moss1: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/scene.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.plaster_white_plaster_w_0.geometry} material={materials.plaster_w} />
      <mesh geometry={nodes.wood_light_wood_light1_0.geometry} material={materials.wood_light1} />
      <mesh geometry={nodes.wood_light_stripped_wood_light_str_0.geometry} material={materials.wood_light_str} />
      <mesh geometry={nodes.wood_medium_wood_mid_0.geometry} material={materials.wood_mid} />
      <mesh geometry={nodes.wood_medium_drk_0.geometry} material={materials.material} />
      <mesh geometry={nodes.wood_medium_stripped_wood_mid_str_0.geometry} material={materials.wood_mid_str} />
      <mesh geometry={nodes.cloth_1_floor_pattern1_0.geometry} material={materials.pattern1} position={[0, 0, 0.032]} />
      <mesh geometry={nodes.cloth_2_floor_fabr_b_0.geometry} material={materials.fabr_b} position={[-0.339, 2.781, -0.258]} rotation={[0, 0, -0.035]} scale={[1.339, 0.774, 1.071]} />
      <mesh geometry={nodes.cloth_wing_fabr_b_0.geometry} material={materials.fabr_b} position={[0, -0.052, -0.003]} scale={[1, 0.983, 1.427]} />
      <mesh geometry={nodes.cloth_white_fabr_w_0.geometry} material={materials.fabr_w} />
      <mesh geometry={nodes.metal_silver_metal_0.geometry} material={materials.metal} />
      <mesh geometry={nodes.stone_gray_stone_0.geometry} material={materials.stone} />
      <mesh geometry={nodes.gold_gold1_0.geometry} material={materials.gold1} />
      <mesh geometry={nodes.polySurface46_logo_0.geometry} material={materials.logo} position={[-0.001, -0.044, -0.062]} scale={1.008} />
      <mesh geometry={nodes.polySurface36_paper_r_0.geometry} material={materials.paper_r} />
      <mesh geometry={nodes.paper_yellow_paper_y_0.geometry} material={materials.paper_y} />
      <mesh geometry={nodes.paper_white_paper_w_0.geometry} material={materials.paper_w} />
      <mesh geometry={nodes.polySurface1_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface2_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface3_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface4_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface5_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface6_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface7_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface8_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface9_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface10_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface11_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface12_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface13_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface14_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface15_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface16_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface17_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface18_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface19_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface20_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface21_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface22_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface23_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.polySurface24_roof_0.geometry} material={materials.roof} />
      <mesh geometry={nodes.ropes_rope_0.geometry} material={materials.rope} />
      <mesh geometry={nodes.polySurface125_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.darkness_drk_0.geometry} material={materials.material} />
      <mesh geometry={nodes.ground_soil_0.geometry} material={materials.soil} position={[-0.157, -0.028, -0.047]} scale={[1.161, 0.987, 1.146]} />
      <mesh geometry={nodes.polySurface92_circle_0.geometry} material={materials.circle} position={[-0.001, -0.189, -0.021]} scale={1.009} />
      <mesh geometry={nodes.polySurface78_paper_r_0.geometry} material={materials.paper_r} />
      <mesh geometry={nodes.polySurface80_paper_r_0.geometry} material={materials.paper_r} />
      <mesh geometry={nodes.polySurface84_paper_r_0.geometry} material={materials.paper_r} />
      <mesh geometry={nodes.polySurface88_paint_white_0.geometry} material={materials.paint_white} />
      <mesh geometry={nodes.polySurface89_paint_white_0.geometry} material={materials.paint_white} />
      <mesh geometry={nodes.polySurface63_paper_r_0.geometry} material={materials.paper_r} />
      <mesh geometry={nodes.polySurface69_letters_b_0.geometry} material={materials.letters_b} />
      <mesh geometry={nodes.polySurface74_paper_r_0.geometry} material={materials.paper_r} />
      <mesh geometry={nodes.polySurface94_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface95_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface96_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface97_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface98_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface99_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface100_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface101_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface102_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface103_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface104_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface105_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface106_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface107_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface108_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface109_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface110_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface111_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface112_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface113_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface114_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface115_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface116_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface117_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface118_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface119_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface120_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface121_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface122_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface123_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.polySurface124_wood_dark1_0.geometry} material={materials.wood_dark1} />
      <mesh geometry={nodes.svgMesh1_gold1_0.geometry} material={materials.gold1} position={[-0.001, 0.077, 0.049]} scale={0.984} />
      <mesh geometry={nodes.cloth_wing1_pattern1_0.geometry} material={materials.pattern1} position={[0, -0.052, -0.003]} scale={[1, 0.983, 1.427]} />
      <mesh geometry={nodes.cloth_1_floor1_fabr_b_0.geometry} material={materials.fabr_b} />
      <mesh geometry={nodes.cloth_2_floor1_pattern1_0.geometry} material={materials.pattern1} position={[-0.339, 2.781, -0.192]} rotation={[0, 0, -0.035]} scale={[1.339, 0.774, 1.071]} />
      <mesh geometry={nodes.pCube1_stone_0.geometry} material={materials.stone} position={[2.691, -2.136, 5.886]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube2_stone_0.geometry} material={materials.stone} position={[1.561, -2.136, 8.578]} rotation={[0, 0.07, 0]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube3_stone_0.geometry} material={materials.stone} position={[-2.688, -2.136, 5.804]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube4_stone_0.geometry} material={materials.stone} position={[-2.06, -2.136, 6.813]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube5_stone_0.geometry} material={materials.stone} position={[-2.084, -2.136, 7.81]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube6_stone_0.geometry} material={materials.stone} position={[-0.733, -2.136, 7.778]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube7_stone_0.geometry} material={materials.stone} position={[-1.789, -2.136, 8.889]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube8_stone_0.geometry} material={materials.stone} position={[-1.911, -2.136, 9.975]} rotation={[0, -0.157, 0]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube9_stone_0.geometry} material={materials.stone} position={[2.75, -2.136, 4.823]} rotation={[0, 0.07, 0]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pCube10_stone_0.geometry} material={materials.stone} position={[2.75, -2.136, 3.743]} rotation={[0, -0.035, 0]} scale={[1.325, 0.11, 1]} />
      <mesh geometry={nodes.pPlane1_moss1_0.geometry} material={materials.moss1} position={[7.173, -0.749, 2.532]} rotation={[1.547, 0.026, -0.837]} scale={[3.263, 3.263, 2.874]} />
      <group position={[2.542, -7.315, 1.259]} rotation={[-0.146, -0.43, 0.15]} scale={[1.264, 1.412, 0.583]}>
        <mesh geometry={nodes.polySurface264_wood_mid_0.geometry} material={materials.wood_mid} />
        <mesh geometry={nodes.polySurface265_wood_mid_0.geometry} material={materials.wood_mid} />
        <mesh geometry={nodes.polySurface266_wood_mid_0.geometry} material={materials.wood_mid} position={[-0.001, 0.06, -0.205]} />
        <mesh geometry={nodes.polySurface267_wood_mid_0.geometry} material={materials.wood_mid} position={[-0.093, 0.023, -0.091]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.glb')
