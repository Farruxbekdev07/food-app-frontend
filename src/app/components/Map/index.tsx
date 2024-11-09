import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { transportTypesRoutes } from "../../constants/map";
import { Box, BoxProps } from "@mui/material";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

type Props = {
  destination: L.LatLngTuple;
  transport: keyof typeof transportTypesRoutes;
};

const Map: FC<BoxProps & Props> = ({ destination, transport, ...boxProps }) => {
  const [position, setPosition] = useState<L.LatLngTuple>([
    40.136315, 67.825148,
  ]);
  const [route, setRoute] = useState<L.LatLngTuple[]>([]);
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
      });
    }
  }, []);

  useEffect(() => {
    const fetchRoute = async () => {
      const [startLat, startLng] = position;
      const [endLat, endLng] = destination;

      try {
        const response = await axios.get(
          `https://api.openrouteservice.org/v2/directions/${transportTypesRoutes[transport]}?api_key=${process.env.REACT_APP_OPEN_ROUTE_SERVICE_API_KEY}&start=${startLng},${startLat}&end=${endLng},${endLat}`
        );

        if (response.data.features && response.data.features.length > 0) {
          const routeData = response.data.features[0];

          const routeCoords = routeData.geometry.coordinates.map(
            ([x, y]: L.LatLngTuple) => [x, y]
          );

          setRoute(routeCoords);
          setDuration(routeData.properties.segments[0].duration);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (position.length === 2 && destination.length === 2) {
      fetchRoute();
    }
  }, [position, destination]);

  return (
    <Box {...boxProps}>
      <MapContainer
        center={position}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        />
        <Marker position={position}></Marker>
        <Marker position={destination}></Marker>
        {route.length > 0 && <Polyline positions={route} color="red" />}
      </MapContainer>
    </Box>
  );
};

export default Map;
