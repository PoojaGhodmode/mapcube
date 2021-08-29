const getImageURL = (lng, lat, zoom) => {
  const url1 = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${lng},${lat},${zoom},0/600x600?access_token=${process.env.REACT_APP_MAP_TOKEN}`;

  const url2 = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${lng},${lat},${zoom},0/600x600?access_token=${process.env.REACT_APP_MAP_TOKEN}`;
  return {
    url1,
    url2,
  };
};

export default getImageURL;
