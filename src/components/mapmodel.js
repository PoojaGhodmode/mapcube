import { useParams } from "react-router-dom";
//helper function
import getImageURL from "../utils/getimageurl";
//components
import Button from "./Button";
import ThreeDContainer from "./ThreeDContainer";

const MapModel = () => {
  const { lat, lng, zoom } = useParams();

  const { url1, url2 } = getImageURL(lng, lat, zoom);

  return (
    <div className="container">
      <ThreeDContainer url1={url1} url2={url2} />
      <Button text="Go to Map" linkto="/" />
    </div>
  );
};

export default MapModel;
