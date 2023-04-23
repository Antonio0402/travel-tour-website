import { useAtomValue } from "jotai";
import { tourDetailAtom } from "../store";
import TourDetailCard from "../components/TourDetailCard";

const TourDetail = () => {
  const openTourDetail = useAtomValue(tourDetailAtom);
  return <>{openTourDetail && <TourDetailCard />}</>;
};

export default TourDetail;
