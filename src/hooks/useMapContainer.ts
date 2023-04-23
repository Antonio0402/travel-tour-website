import { atom, useAtom, useAtomValue } from "jotai";
import { useEffect, useMemo, useRef } from "react";
import useDeepCompareEffectForMaps from "./deepCompareForMaps";
import { CoordsAtom, mapContainerAtom } from "../store";

const useMapContainer = () => {

  const coords = useAtomValue(CoordsAtom);
  const mapOptions: google.maps.MapOptions = useMemo(
    () => ({
      center: coords ?? { lat: 0, lng: 0 },
      mapId: "74c94d84f794d632",
      zoom: 10,
      disableDefaultUI: true,
      // zoomControl: true,
      // zoomControlOptions: {
      //   position: 3, // Right top
      // },
    }),
    [coords?.lat, coords?.lng]
  );
  
  const [mapContainer, setMapContainer] = useAtom(mapContainerAtom);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current && !mapContainer) {
      setMapContainer(new window.google.maps.Map(ref.current, mapOptions));
    }
  }, [ref, mapContainer]);

  // because React does not do deep comparisons, a custom hook is used
  useDeepCompareEffectForMaps(() => {
    if (mapContainer) {
      mapContainer.setOptions(mapOptions);
    }
  }, [mapContainer, mapOptions]);

  return { mapContainer, ref }
}

export default useMapContainer;