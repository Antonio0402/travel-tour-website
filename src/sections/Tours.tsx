import { useAtomValue } from "jotai";
import { isHotelOpen, mapContainerAtom } from "../store";
import TourMarker from "../components/TourMarker";

const Tours = () => {
  const openHotel = useAtomValue(isHotelOpen);
  const mapContainer = useAtomValue(mapContainerAtom);
  return (
    <>{!openHotel && mapContainer && <TourMarker map={mapContainer!} />}</>
  );
};

export default Tours;
