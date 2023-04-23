import { useEffect } from "react";
import { useGoogleMap } from "@ubilabs/google-maps-react-hooks";
import { Coords, Filter, selectAtom } from "../store";
import { useSetAtom } from "jotai";

const MapMarker = ({ coords, filter }: { coords: Coords; filter: Filter }) => {
  const infoWindow = new google.maps.InfoWindow();
  const setSelected = useSetAtom(selectAtom);
  const map = useGoogleMap();

  // Add markers to the map
  useEffect(() => {
    if (!map) return;
    if (isNaN(coords.lat) || isNaN(coords.lng)) return;

    const marker = new google.maps.Marker({ map, clickable: true });
    const initialBounds = new google.maps.LatLngBounds();

    initialBounds.extend(coords);

    marker.setPosition({
      lat: coords.lat,
      lng: coords.lng,
    });

    const content = (filter: Filter) => `
      <h1>${filter.title}</h1>
      <p>${filter.overall_rating} (${filter.number_of_ratings} reviews)</p>`;

    infoWindow.setPosition({ lat: coords.lat, lng: coords.lng });
    infoWindow.setContent(content(filter));
    infoWindow.open({ map });

    map?.setCenter(initialBounds.getCenter());

    marker.addListener("click", () => setSelected(filter.tour_id));

    // Clean up markers
    return () => {
      marker.setMap(null);
      infoWindow.close();
    };
  }, [coords.lat, coords.lng, map]);

  return null;
};

export default MapMarker;
