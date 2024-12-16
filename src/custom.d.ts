declare module "axios";
declare module "leaflet";
declare module "react-leaflet";

declare module ".png" {
  const value: string;
  export default value;
}
declare module ".jpg" {
  const value: string;
  export default value;
}
declare module ".svg" {
  const value: string;
  export default value;
}
declare module "*.mp4" {
  const value: any;
  export default value;
}

declare module "leaflet" {
  type LatLng = any;
  type LatLngTuple = [number, number];
  // Qo'shimcha turlarni aniqlash
  class FeatureGroup extends L.LayerGroup<L.Layer> {}
  class Map extends L.Map {}
}

declare module "graphql-ws" {
  export function createClient(options: any): any;
}
