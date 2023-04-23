import { useEffect, useRef } from "react";
import { createRoot, type Root } from "react-dom/client";
import { Coords, Tour, onClickListener } from "../store";
import { RESET } from "jotai/utils";

const useAdvanceMarker = (
  map: google.maps.Map,
  position: Coords,
  children: React.ReactNode,
  tour?: Tour,
  handleClick?: (tourId: number) => void,
  setOpenTourDetail?: (value: any | typeof RESET) => void,
) => {

  const markerRef = useRef<google.maps.marker.AdvancedMarkerView | null>(null);
  const rootRef = useRef<Root | null>(null);

  useEffect(() => {
    let container: HTMLDivElement;
    if (!rootRef.current) {
      container = document.createElement("div");
      rootRef.current = createRoot(container);

      markerRef.current = new google.maps.marker.AdvancedMarkerView({
        position,
        content: container,
      });
    }

    return () => {
      container.remove();
      rootRef.current = null;
      markerRef.current = null;
    };
  }, []);

  useEffect(() => {
    rootRef.current?.render(children);
    markerRef.current!.position = position;
    markerRef.current!.map = map;

    const initialBounds = new google.maps.LatLngBounds();
    initialBounds.extend(position);

    map.setCenter(initialBounds.getCenter());

    let onClick: google.maps.MapsEventListener | undefined;

    if(handleClick) {
      if(tour) {
        // onClick = markerRef.current?.addListener("click", () => {
        //   handleClick(tour?.tourId);
        //   if(setOpenTourDetail) {
        //     setOpenTourDetail(RESET);
        //   }
        // });
        onClick = onClickListener(markerRef, handleClick, tour?.tourId, setOpenTourDetail, RESET)
      }
    }
    return () => {
      if(handleClick) {
        onClick?.remove();
      }
    }
  }, [map, position, children]);
}

export default useAdvanceMarker

