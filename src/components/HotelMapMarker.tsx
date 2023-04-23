import { Coords } from "../store";
import useAdvanceMarker from "../hooks/useAdvanceMarker";

const HotelMapMarker = ({
  map,
  position,
  children,
}: {
  map: google.maps.Map;
  position: Coords;
  children: React.ReactNode;
}) => {
  useAdvanceMarker(map, position, children);

  return null;
};

export default HotelMapMarker;
