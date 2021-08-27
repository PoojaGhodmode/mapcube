import { useState } from "react";
import { useParams } from "react-router-dom";
import getImageURL from "../utils/getimageurl";
import Button from "./Button";
import ThreeDContainer from "./ThreeDContainer";

const MapModel = () => {
  const { lat, lng, zoom } = useParams();
  console.log(lat, lng, zoom);

  const { url1, url2 } = getImageURL(lng, lat, zoom);

  return (
    <div>
      <ThreeDContainer url1={url1} url2={url2} />
      <Button text="Go to Map" linkto="/" />
    </div>
  );
};

export default MapModel;
