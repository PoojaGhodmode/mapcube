import { useParams } from "react-router-dom";
import Button from "../Button";

const ThreeDContainer = () => {
  const { lat, lng, zoom } = useParams();
  console.log(lat, lng, zoom);

  return (
    <>
      <Button text="Go to Map" linkto="/"  />
      
    </>
  );
};

export default ThreeDContainer;
