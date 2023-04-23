import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  useToast,
  VStack,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Button,
  IconButton,
} from "@chakra-ui/react";
import {
  totalDataAtom,
  tourDetailAtom,
  selectAtom,
  vnd,
  addToCartdAtom,
  tourDataAtom,
  isHotelOpen,
} from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faHotel,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useAtomValue, useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import Hotel from "./Hotel";

const TourDetailCard = () => {
  const setOpenHotel = useSetAtom(isHotelOpen);
  const setOpenTourDetail = useSetAtom(tourDetailAtom);
  const toast = useToast();

  const setSelected = useSetAtom(selectAtom);
  const setTotal = useSetAtom(totalDataAtom);
  const setaddToCard = useSetAtom(addToCartdAtom);

  const filter = useAtomValue(tourDataAtom);

  if (!filter) {
    setOpenTourDetail(RESET);
    setOpenHotel(false);
  }

  return (
    <>
      {filter && (
        <Card
          height="max-content"
          key={filter?.tourId}
          maxW="md"
          overflow="hidden"
          cursor="pointer"
          p="4"
          bg="whiteAlpha.800"
          blur="lg"
          position="absolute"
          top="10"
          right="8"
        >
          <Image
            src={filter?.imageUrl}
            alt={`image-${filter?.imageName}`}
            borderRadius="md"
          />
          <CardHeader display="grid" gap="1">
            <Text fontSize="xs" color="gray.400">
              {filter?.location.province} - {filter?.location.locationName}
            </Text>
            <Heading as="h4" size="sm" noOfLines={1}>
              {filter?.tourName}
            </Heading>
            <Divider />
          </CardHeader>
          <CardBody py="0">
            <VStack>
              <Text fontSize="xs" noOfLines={3}>
                {filter?.description}
              </Text>
              <Accordion allowToggle variant="enclosed" w="full">
                <AccordionItem>
                  <Heading as="h4" size="xs">
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        noOfLines={1}
                        fontWeight="bold"
                        color="orange.400"
                      >
                        Lịch trình tour
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>
                    <Text fontSize="xs">{filter?.content}</Text>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Heading as="h4" size="xs">
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        noOfLines={1}
                        fontWeight="bold"
                        color="orange.400"
                      >
                        Khách sạn
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>
                    <VStack>
                      <Hotel currentHotel={filter.hotel} />
                      <Divider />
                      <Flex
                        justify="space-between"
                        align="center"
                        gap="2"
                        w="full"
                      >
                        <FontAwesomeIcon
                          icon={faHotel}
                          size="1x"
                          color="orange"
                        />
                        <Text fontSize="xs">{filter?.hotel.address}</Text>
                      </Flex>
                      <Flex
                        justify="space-between"
                        align="center"
                        gap="2"
                        w="full"
                      >
                        <FontAwesomeIcon
                          icon={faBed}
                          size="1x"
                          color="orange"
                        />
                        <Text fontSize="xs">
                          <strong>
                            {vnd.format(filter?.hotel.hotelprice!)}
                          </strong>
                          / phòng
                        </Text>
                      </Flex>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <Heading as="h4" size="xs">
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        noOfLines={1}
                        fontWeight="bold"
                        color="orange.400"
                      >
                        Ghi chú
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel pb={4}>
                    <Text as="em" fontSize="xs" w="full">
                      <FontAwesomeIcon
                        icon={faCircleExclamation}
                        color="orange"
                      />
                      {filter?.note}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              {/* <HStack>
            <FontAwesomeIcon icon={faStar} size="sm" color="orange" />
            <Text fontSize="xs" color="gray.400">
              {filter!.reviewStar}
            </Text>
            <Text fontSize="xs" color="gray.400">
              ({filter!.reviewNumber} reviews)
            </Text>
          </HStack> */}
            </VStack>
          </CardBody>
          <CardFooter>
            <VStack w="full" spacing="4">
              <Flex gap="2" alignItems="center">
                <Text fontSize="sm" color="orange.400">
                  Durations:{" "}
                  <Badge
                    variant="subtle"
                    colorScheme="orange"
                    color="slategray"
                    borderRadius="sm"
                  >
                    {filter?.duration} ngày
                  </Badge>
                </Text>
                <Text fontWeight="bold">
                  {vnd.format(filter?.price || 0)} / người
                </Text>
              </Flex>

              <HStack>
                <Button
                  size="sm"
                  fontSize="sm"
                  colorScheme="orange"
                  variant="outline"
                  onClick={() => {
                    setOpenTourDetail(RESET);
                    setOpenHotel(false);
                  }}
                >
                  Đóng
                </Button>
                <Button
                  size="sm"
                  fontSize="sm"
                  colorScheme="orange"
                  onClick={() => {
                    toast({
                      title: `${filter?.tourName.slice(
                        0,
                        50
                      )}... đã được thêm vào giỏ hàng`,
                      position: "top",
                      status: "success",
                      isClosable: true,
                    });
                    setSelected(filter?.tourId!);
                    setaddToCard(filter?.tourId!);
                    setTotal(filter?.price!);
                  }}
                >
                  Đặt tour
                </Button>
              </HStack>
            </VStack>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default TourDetailCard;
