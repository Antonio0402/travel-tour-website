import { useAtom, useAtomValue } from "jotai";
import { useCallback, useEffect, useMemo } from "react";
import { CoordsAtom } from "../store";
import { Box } from "@chakra-ui/react";

// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

import {
  GoogleMapsProvider,
  useGeocodingService,
} from "@ubilabs/google-maps-react-hooks";
import MapMarker from "../components/MapMarker";

import useMapContainer from "../hooks/useMapContainer";
import TourDetail from "./TourDetail";
import Hotels from "./Hotels";
import Tours from "./Tours";

const Map = () => {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  // });
  const { ref } = useMapContainer();

  // const geocoder = useGeocodingService();

  // const filteredData = useAtomValue(filteredDataAtom);

  // const mapRef = useCallback(
  //   (node: React.SetStateAction<HTMLDivElement | null>) => {
  //     node && setMapContainer(node);
  //   },
  //   []
  // );

  // useEffect(() => {
  //   geocoder?.geocode({ location: coords }).then((res) => {
  //     if (res.results[0]) {
  //       console.log(res.results[0].address_components);
  //       console.log(res.results[0].formatted_address);
  //     }
  //   });
  // }, [coords?.lat, coords?.lng]);

  //** using @react-google-maps/api */
  // if (loadError) {
  //   return <div>Map cannot be loaded right now, sorry.</div>;
  // }

  // return isLoaded ? (
  // <GoogleMap
  //   zoom={10}
  //   center={coords || { lat: 0, lng: 0 }}
  //   mapContainerStyle={{ width: "100%", height: "100vh" }}
  // >
  //   <Marker position={coords!} />
  // </GoogleMap>
  // ) : (
  //   <Spinner />
  // );
  //**------------------------------- */

  //** using GoogleMapsProvider */
  // return (
  //   <GoogleMapsProvider
  //     googleMapsAPIKey={import.meta.env.VITE_GOOGLE_MAP_API}
  //     mapOptions={mapOptions}
  //     mapContainer={mapContainer}
  //   >
  //     <Box w="full" height="100vh" ref={mapRef} />
  //     {filteredData.map((filter) => (
  //       <MapMarker
  //         key={filter.tour_id}
  //         coords={filter.coordinates}
  //         filter={filter}
  //       />
  //     ))}
  //   </GoogleMapsProvider>
  // );
  //**------------------------ */

  return (
    <>
      <Box w="full" height="100%" id="map" ref={ref} overflow="hidden" />
      <TourDetail />
      <Hotels />
      <Tours />
    </>
  );
};

export default Map;
