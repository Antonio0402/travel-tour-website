import { useAtomValue, useSetAtom } from "jotai";
import { filteredDataAtom, selectAtom } from "../store";
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
import { faStar } from "@fortawesome/free-solid-svg-icons";
import TourMapMarker from "./TourMapMarker";
import { Suspense, useDeferredValue, useMemo, useTransition } from "react";
import Loading from "./Loading";

const TourMarker = ({ map }: { map: google.maps.Map }) => {
  const filteredData = useAtomValue(filteredDataAtom);
  const [isPending, startTransition] = useTransition();
  const defferedData = useDeferredValue(filteredData);
  const setSelected = useSetAtom(selectAtom);

  const memoizedMap = useMemo(() => map, [map]);

  function handleClick(tourId: number) {
    setSelected(tourId);
  }

  return (
    <Suspense fallback={<Loading />}>
      {defferedData.map((tour) => (
        <TourMapMarker
          tour={tour}
          map={memoizedMap}
          key={tour.tourId}
          position={{
            lng: tour.location.longitude,
            lat: tour.location.latitude,
          }}
          handleClick={handleClick}
        >
          <Card
            key={tour.tourId}
            sx={{ borderRadius: "8px" }}
            bg="white"
            p="4"
            maxW="200px"
            overflow="hidden"
            cursor="pointer"
            zIndex={10}
          >
            <CardHeader>
              <Heading fontWeight="bold" as="h6" size="xs" noOfLines={1}>
                {tour.tourName}
              </Heading>
              <Divider />
            </CardHeader>
            <CardBody>
              <HStack>
                <FontAwesomeIcon icon={faStar} size="sm" color="orange" />
                <Text fontSize="xs" color="gray.400">
                  {tour.reviewStar}
                </Text>
                <Text fontSize="xs" color="gray.400">
                  ({tour.reviewNumber} reviews)
                </Text>
              </HStack>
            </CardBody>
          </Card>
        </TourMapMarker>
      ))}
    </Suspense>
  );
};

export default TourMarker;
