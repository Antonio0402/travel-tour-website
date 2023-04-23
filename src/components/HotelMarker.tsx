import { atom, useAtom, useAtomValue } from "jotai";
import { tourDataAtom, vnd } from "../store";
import { Suspense, useDeferredValue, useMemo } from "react";
import Loading from "./Loading";
import HotelMapMarker from "./HotelMapMarker";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const highlightAtom = atom<string | null>(null);

const HotelMarker = ({ map }: { map: google.maps.Map }) => {
  const tourData = useAtomValue(tourDataAtom);
  const defferedData = useDeferredValue(tourData);
  const memoizedMap = useMemo(() => map, [map]);

  const [highlight, setHighlight] = useAtom(highlightAtom);

  return (
    <Suspense fallback={<Loading />}>
      <HotelMapMarker
        map={memoizedMap}
        key={defferedData?.hotel.hotelCode}
        position={{
          lng: defferedData?.hotel.longitude!,
          lat: defferedData?.hotel.latitude!,
        }}
      >
        <Card
          key={defferedData?.hotel.hotelCode}
          sx={{
            borderRadius: "8px",
          }}
          p="4"
          maxW="200px"
          overflow="hidden"
          cursor="pointer"
          zIndex={10}
          textAlign="center"
          bg={defferedData?.hotel.hotelCode === highlight ? "orange" : "white"}
          onMouseEnter={() => setHighlight(defferedData?.hotel.hotelCode!)}
          onMouseLeave={() => setHighlight(null)}
        >
          <CardHeader>
            <Heading fontWeight="bold" as="h6" size="xs" noOfLines={1}>
              <FontAwesomeIcon icon={faHotel} size="1x" color="orange" />{" "}
              {defferedData?.hotel.hotelName}
            </Heading>
            <Divider />
          </CardHeader>
          <CardBody>
            <Text as="em" fontSize="xs" color="gray.400">
              {vnd.format(defferedData?.hotel.hotelprice!)}
            </Text>
          </CardBody>
        </Card>
      </HotelMapMarker>
      <HotelMapMarker
        map={memoizedMap}
        key={defferedData?.location.locationCode}
        position={{
          lng: defferedData?.location.longitude!,
          lat: defferedData?.location.latitude!,
        }}
      >
        <Card
          key={defferedData?.location.locationCode}
          sx={{ borderRadius: "8px" }}
          p="4"
          maxW="200px"
          overflow="hidden"
          cursor="pointer"
          zIndex={10}
          textAlign="center"
          bg={
            defferedData?.location.locationCode === highlight
              ? "orange.400"
              : "white"
          }
          onMouseEnter={() =>
            setHighlight(defferedData?.location.locationCode!)
          }
          onMouseLeave={() => setHighlight(null)}
        >
          <CardHeader>
            <Heading fontWeight="bold" as="h6" size="xs" noOfLines={1}>
              <FontAwesomeIcon icon={faLocationDot} size="1x" color="orange" />{" "}
              {defferedData?.location.locationName}
            </Heading>
            <Divider />
          </CardHeader>
          <CardBody>
            <Text as="em" fontSize="xs" color="gray.400">
              {defferedData?.location.province}
            </Text>
          </CardBody>
        </Card>
      </HotelMapMarker>
    </Suspense>
  );
};

export default HotelMarker;
