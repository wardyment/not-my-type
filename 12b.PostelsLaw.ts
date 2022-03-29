/**
 * Be liberal in what you accept and strict in what you produce
 */
declare type Feature = {};
declare function setCamera(camera: CameraOptions): void;
declare function viewportForBounds(bounds: LngLatBounds): Camera;
declare function calculateBoundingBox(feature: Feature): LngLatBounds;

// strict type
interface Camera {
  center: LngLat;
  zoom: number;
  bearing: number;
  pitch: number;
}
// loose type - nothing required
interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
  center?: LngLatLike
}
// strict type
interface LngLat {
  lng: number;
  lat: number;
}
// loose type - union of shapes
type LngLatLike = LngLat | { lon: number; lat: number } | [number, number];
// loose type
type LngLatBounds =
  | { northeast: LngLatLike; southwest: LngLatLike }
  | [LngLatLike, LngLatLike]
  | [number, number, number, number];


function focusOnFeature(f: Feature) {
  const bounds = calculateBoundingBox(f);
  // camera could be one of 19 different value types
  const camera = viewportForBounds(bounds);
  setCamera(camera);
  const {
    center: { lat, lng },
    zoom,
  } = camera;
  window.location.search = `?v=@${lat},${lng}z${zoom}`;
}

// Input types tend to be broader than output types
// Introduce a canonical form for return types and a loose form for parameters