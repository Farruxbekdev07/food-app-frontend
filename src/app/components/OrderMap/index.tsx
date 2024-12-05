import L from "leaflet";
import axios from "axios";
import { Box, BoxProps } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { pxToRem } from "../../constants";
import { transportTypesRoutes } from "../../constants/map";

// Leaflet marker uchun default konfiguratsiya
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

type Props = {
  destination: L.LatLngTuple; // Belgilangan manzil koordinatalari
  transport: keyof typeof transportTypesRoutes; // Transport turi
};

const Map: FC<BoxProps & Props> = ({ destination, transport, ...boxProps }) => {
  const [position, setPosition] = useState<L.LatLngTuple | null>(null); // Hozirgi pozitsiya
  const [route, setRoute] = useState<L.LatLngTuple[]>([]); // Yo'nalish koordinatalari
  const [duration, setDuration] = useState<string | null>(null); // Yo'l vaqti
  const [courierPosition, setCourierPosition] = useState<L.LatLngTuple | null>(
    null
  ); // Courierning hozirgi joylashuvi
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocket ulanishi

  // Geolokatsiyani olish
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  // WebSocket orqali courier joylashuvini olish
  // useEffect(() => {
  //   const ws = new WebSocket("ws://your-backend-server-url"); // WebSocket server manzilini o'zgartiring
  //   ws.onopen = () => {
  //     console.log("WebSocket connected.");
  //   };

  //   ws.onmessage = (event) => {
  //     const data = JSON.parse(event.data);
  //     if (data.courierPosition) {
  //       setCourierPosition(data.courierPosition); // Courierning yangi pozitsiyasini olish
  //     }
  //   };

  //   setSocket(ws);

  //   return () => {
  //     if (ws) {
  //       ws.close();
  //     }
  //   };
  // }, []);

  // Yo'nalishni olish uchun OpenRouteService API'sidan foydalanish
  useEffect(() => {
    const fetchRoute = async () => {
      if (!position) return;

      const [startLat, startLng] = position;
      const [endLat, endLng] = destination;

      try {
        const response = await axios.get(
          `https://api.openrouteservice.org/v2/directions/${transportTypesRoutes[transport]}`,
          {
            params: {
              api_key:
                process.env.REACT_APP_OPEN_ROUTE_SERVICE_API_KEY ||
                "5b3ce3597851110001cf6248869abb72d7544b9191ebb2861ca77453",
              start: `${startLng},${startLat}`,
              end: `${endLng},${endLat}`,
            },
          }
        );

        if (response.data.features && response.data.features.length > 0) {
          const routeData = response.data.features[0];

          // Yo'nalish koordinatalarini olish
          const routeCoords = routeData.geometry.coordinates.map(
            ([lng, lat]: [number, number]) => [lat, lng]
          );

          setRoute(routeCoords);
          setDuration(
            `${(routeData.properties.segments[0].duration / 60).toFixed(1)} min`
          );
        }
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    if (position && destination) {
      fetchRoute();
    }
  }, [position, destination, transport]);

  return (
    <Box {...boxProps}>
      <MapContainer
        zoom={14}
        center={position || [40.136315, 67.825148]} // Pozitsiya yo'q bo'lsa, default qiymat
        style={{
          width: "100%",
          height: `calc(100vh - ${pxToRem(200)})`,
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution=""
        />
        {position && <Marker position={position} />}
        <Marker position={destination} />

        {/* Chiziq ikki marker o'rtasida */}
        {/* {position && destination && (
          <Polyline positions={[position, destination]} color="blue" />
        )} */}

        {/* Yo'nalish chizig'i */}
        {route.length > 0 && <Polyline positions={route} color="red" />}

        {/* Courierning harakatlanuvchi markeri */}
        {courierPosition && <Marker position={courierPosition} />}
      </MapContainer>
      {duration && (
        <Box mt={2} p={2} bgcolor="lightgray">
          Estimated duration: {duration}
        </Box>
      )}
    </Box>
  );
};

export default Map;
