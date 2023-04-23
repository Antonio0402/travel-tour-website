import {
  Card,
  CardHeader,
  Text,
  Image,
  Heading,
  Divider,
  CardBody,
  VStack,
  HStack,
  CardFooter,
  Flex,
  Badge,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCartShopping,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  Tour,
  tourDetailAtom,
  selectAtom,
  vnd,
  totalDataAtom,
  addToCartdAtom,
  isHotelOpen,
} from "../store";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";

const TourCard = ({
  element,
  filter,
}: {
  element: React.RefObject<HTMLDivElement>;
  filter: Tour;
}) => {
  const [addToCard, setaddToCard] = useAtom(addToCartdAtom);
  const selected = useAtomValue(selectAtom);
  const setSelected = useSetAtom(selectAtom);
  const setOpenTourDetail = useSetAtom(tourDetailAtom);
  const setOpenHotel = useSetAtom(isHotelOpen);
  const setTotal = useSetAtom(totalDataAtom);

  const toast = useToast();

  if (filter.tourId === selected) {
    element?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
  return (
    <Card
      height="max-content"
      key={filter.tourId}
      maxW="280px"
      overflow="hidden"
      cursor="pointer"
      p="4"
      aria-selected={filter.tourId === selected}
      _selected={{
        bg: "orange.200",
        color: "white",
      }}
    >
      <Image
        src={filter.imageUrl}
        alt={`image-${filter.imageName}`}
        borderRadius="md"
      />
      <CardHeader display="grid" gap="1">
        <Text fontSize="xs" color="gray.400">
          {filter.location.province} - {filter.location.locationName}
        </Text>
        <Heading as="h4" size="sm" noOfLines={1}>
          {filter.tourName}
        </Heading>
        <Divider />
      </CardHeader>
      <CardBody py="0">
        <VStack>
          <Text fontSize="xs" noOfLines={3}>
            {filter.description}
          </Text>
          <HStack>
            <FontAwesomeIcon icon={faStar} size="sm" color="orange" />
            <Text fontSize="xs" color="gray.400">
              {filter.reviewStar}
            </Text>
            <Text fontSize="xs" color="gray.400">
              ({filter.reviewNumber} reviews)
            </Text>
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter>
        <VStack w="full">
          <Text fontWeight="bold">{vnd.format(filter.price)} / person</Text>
          <Flex gap="2" alignItems="center">
            <Text fontSize="sm" color="orange.400">
              Durations:{" "}
              <Badge
                variant="subtle"
                colorScheme="orange"
                color="slategray"
                borderRadius="sm"
              >
                {filter.duration} ngày
              </Badge>
            </Text>
            <IconButton
              onClick={() => {
                toast({
                  title: `${filter.tourName.slice(
                    0,
                    50
                  )}... đã được thêm vào giỏ hàng`,
                  position: "top",
                  status: "success",
                  isClosable: true,
                });
                setSelected(filter.tourId);
                setaddToCard(filter.tourId);
                setTotal(filter.price);
              }}
              icon={<FontAwesomeIcon icon={faCartShopping} />}
              colorScheme="orange"
              size="sm"
              // borderRadius="md"
              aria-label={`tour-${filter.tourId}`}
              hidden={filter.tourId === addToCard ? true : false}
            />
            <IconButton
              onClick={() => {
                setSelected(RESET);
                setaddToCard(RESET);
                setTotal(RESET);
              }}
              icon={<FontAwesomeIcon icon={faTrash} />}
              colorScheme="orange"
              size="sm"
              // borderRadius="md"
              aria-label={`tour-${filter.tourId}`}
              hidden={filter.tourId === addToCard ? false : true}
            />
          </Flex>
          <Button
            size="sm"
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
            fontSize="sm"
            colorScheme="orange"
            variant="outline"
            onClick={() => {
              setOpenTourDetail({
                code: filter.tourId,
                location: filter.location.locationCode,
              });
              setOpenHotel(true);
            }}
          >
            Chi tiết tour
          </Button>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
