//css

import { useMap } from "../../useMap";
import "./MapContainer.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Button from "../Button";

const MapContainer = () => {
  const { mapContainer, lng, lat, zoom } = useMap();
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
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
