import { tourDetailAtom, type Coords, type Tour } from "../store";
import { useSetAtom } from "jotai";
import useAdvanceMarker from "../hooks/useAdvanceMarker";

const TourMapMarker = ({
  tour,
  map,
  position,
  handleClick,
  children,
}: {
  tour: Tour;
  map: google.maps.Map;
  position: Coords;
  handleClick: (tourId: number) => void;
  children: React.ReactNode;
}) => {
  const setOpenTourDetail = useSetAtom(tourDetailAtom);

  useAdvanceMarker(
    map,
    position,
    children,
    tour,
    handleClick,
    setOpenTourDetail
  );

  // useEffect(() => {
  //   let container: HTMLDivElement;
  //   if (!rootRef.current) {
  //     container = document.createElement("div");
  //     rootRef.current = createRoot(container);

  //     markerRef.current = new google.maps.marker.AdvancedMarkerView({
  //       position,
  //       content: container,
  //     });
  //   }

  //   return () => {
  //     container.remove();
  //     rootRef.current = null;
  //     markerRef.current = null;
  //   };
  // }, []);

  // useEffect(() => {
  //   rootRef.current?.render(children);
  //   markerRef.current!.position = position;
  //   markerRef.current!.map = map;

  //   const initialBounds = new google.maps.LatLngBounds();
  //   initialBounds.extend(position);

  //   map.setCenter(initialBounds.getCenter());

  //   const onClick = markerRef.current?.addListener("click", () => {
  //     handleClick(tour.tourId);
  //     setOpenTourDetail(RESET);
  //   });

  //   return () => onClick?.remove();
  // }, [map, position, children]);

  return null;
};

export default TourMapMarker;
