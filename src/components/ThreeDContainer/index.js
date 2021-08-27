import {
  Vector3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  ArcRotateCamera,
  PointLight,
  Color3,
} from "@babylonjs/core";
// hook babylonjs-hook import
import SceneComponent from "babylonjs-hook";

const ThreeDContainer = ({ url1, url2 }) => {
  let box;
  const onSceneReady = (scene) => {
    scene.clearColor = new Color3(0.3, 0.35, 0.45);
    const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      15,
      new Vector3(0, 0, 0),
      scene
    );

    camera.inertia = 0.7;
    // This targets the camera to scene origin
    camera.setTarget(Vector3.Zero());

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    var pl = new PointLight("pl", Vector3.Zero(), scene);
    pl.diffuse = new Color3(1, 1, 1);
    pl.specular = new Color3(1, 1, 1);
    pl.intensity = 0.7;

    // create a cube
    box = MeshBuilder.CreateBox("box", { size: 8, wrap: true }, scene);
    box.position.y = 1;

    //create material
    const material = new StandardMaterial("material", scene);
    // for color and streets name
    material.diffuseTexture = new Texture(url1, scene);
    // for bump nature
    material.bumpTexture = new Texture(url2, scene);
    box.material = material;
  };

  return (
    <div>
      <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
    </div>
  );
};

export default ThreeDContainer;
