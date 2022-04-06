/**
 * Be liberal in what you accept and strict in what you produce
 */
// using a namespace here so that you dont get errors from sibling file

/*
namespace postels1 {
  declare type Feature = {};
  declare function setCamera(camera: CameraOptions): void;
  declare function viewportForBounds(bounds: LngLatBounds): CameraOptions;
  declare function calculateBoundingBox(feature: Feature): LngLatBounds;

  // loose type - nothing required
  interface CameraOptions {
    center?: LngLat;
    zoom?: number;
    bearing?: number;
    pitch?: number;
  }
  // loose type - union of shapes
  type LngLat =
    | {
        lng: number;
        lat: number;
      }
    | {
        lon: number;
        lat: number;
      }
    | [number, number];
  // loose type
  type LngLatBounds =
    | { northeast: LngLat; southwest: LngLat }
    | [LngLat, LngLat]
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
}
*/ 