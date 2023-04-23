import HotelMarker from "../components/HotelMarker";
import { useAtomValue } from "jotai";
import { isHotelOpen, mapContainerAtom } from "../store";

const Hotels = () => {
  const openHotel = useAtomValue(isHotelOpen);
  const mapContainer = useAtomValue(mapContainerAtom);
  return (
    <>{openHotel && mapContainer && <HotelMarker map={mapContainer!} />}</>
  );
};

export default Hotels;
