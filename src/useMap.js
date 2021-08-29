import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import { useEffect, useRef, useState } from "react";

export const useMap = () => {
  const MAPBOX_TOKEN = process.env.REACT_APP_MAP_TOKEN;
  mapboxgl.accessToken = MAPBOX_TOKEN;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(82);
  const [lat, setLat] = useState(21);
  const [zoom, setZoom] = useState(3);
  let isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    if (map.current) return; // initialize map only once
    if (isMounted.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      });
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        minLength: 4,
      });
      geocoder.addTo(map.current);
    }
    return () => {
      isMounted.current = false;
    };
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    if (isMounted.current) {
      map.current.on("move", () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
    }
    return () => {
      isMounted.current = false;
    };
  });

  return {
    mapContainer,
    lat,
    lng,
    zoom,
  };
};
