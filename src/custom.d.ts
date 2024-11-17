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
  type LatLngTuple = [number, number];
}
