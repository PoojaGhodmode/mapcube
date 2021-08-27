//hook
import { useMap } from "../../useMap";
// css mapbox
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
//component
import Button from "../Button";

const MapContainer = () => {
  const { mapContainer, lng, lat, zoom } = useMap();
  return (
    <div className="container">
      <div className="sidebar">
        <p>Longitude: {lng}</p>
        <p>Latitude: {lat}</p>
        <p>Zoom: {zoom}</p>
      </div>
      <div ref={mapContainer} className="map-container" />
      <Button
        linkto={`3dContainer/${lat}/${lng}/${zoom}`}
        text="Go to 3D Model"
      />
    </div>
  );
};

export default MapContainer;
