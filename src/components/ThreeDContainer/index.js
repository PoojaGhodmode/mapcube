import { useParams } from "react-router-dom";
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  StandardMaterial,
  Texture,
  ArcRotateCamera,
  PointLight,
  Color3,
} from "@babylonjs/core";

import SceneComponent from "babylonjs-hook";

// const url;

const ThreeDContainer = () => {
  const { lat, lng, zoom } = useParams();
  console.log(lat, lng, zoom);

  let box;
  const onSceneReady = (scene) => {
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
    var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    var pl = new PointLight("pl", Vector3.Zero(), scene);
    pl.diffuse = new Color3(1, 1, 1);
    pl.specular = new Color3(1, 1, 1);
    pl.intensity = 0.8;

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 1;

    // Our built-in 'box' shape.
    box = MeshBuilder.CreateBox("box", { size: 5 }, scene);

    box.rotation.x = 0;
    box.scaling.x = 1;

    //create material
    const material = new StandardMaterial("material", scene);
    material.diffuseTexture = new Texture(
      "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/-122.0406,39.1364,9,0/500x500?access_token=pk.eyJ1IjoicG9vamFnaG9kbW9kZSIsImEiOiJja3NycmJqZmowcGsxMnBvNmI5NjhvajQwIn0.BpIkzKjBu9vr3P6At7D_iQ",
      scene
    );
    material.bumpTexture = new Texture(
      "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-122.0406,39.1364,9,0/500x500?access_token=pk.eyJ1IjoicG9vamFnaG9kbW9kZSIsImEiOiJja3NycmJqZmowcGsxMnBvNmI5NjhvajQwIn0.BpIkzKjBu9vr3P6At7D_iQ",
      scene
    );
    box.material = material;
  };

  return (
    <div>
      <SceneComponent antialias onSceneReady={onSceneReady} id="my-canvas" />
    </div>
  );
};

export default ThreeDContainer;
