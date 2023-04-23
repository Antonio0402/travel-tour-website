import { atom, useAtom } from "jotai";
import { editHotelAtom, postEditedHotel, type Hotel } from "../store";
import { Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import EditHotel from "./EditHotel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const confirmAtom = atom<boolean>(false);

const Hotel = ({ currentHotel }: { currentHotel: Hotel }) => {
  const [editHotel, setEditHotel] = useAtom(editHotelAtom);
  const [isConfirm, setIsConfirm] = useAtom(confirmAtom);
  const [, mutateHotel] = useAtom(postEditedHotel);
  return (
    <Flex justify="space-between" align="center" gap="2" w="full">
      {editHotel && !isConfirm ? (
        <EditHotel currentHotel={currentHotel} />
      ) : (
        <Text fontWeight="bold" fontSize="sm" w="full">
          {currentHotel.hotelName}
        </Text>
      )}
      <IconButton
        onClick={() => {
          setEditHotel(currentHotel.hotelCode);
          setIsConfirm(false);
        }}
        icon={<FontAwesomeIcon icon={faPenToSquare} />}
        colorScheme="orange"
        size="xs"
        // borderRadius="md"
        aria-label={`edit-${currentHotel.hotelCode}`}
        hidden={editHotel ? true : false}
      />
      <HStack hidden={editHotel ? false : true}>
        <IconButton
          onClick={() => setEditHotel(null)}
          icon={<FontAwesomeIcon icon={faXmark} />}
          colorScheme="orange"
          size="xs"
          // borderRadius="md"
          aria-label={`accept-${currentHotel.hotelCode}`}
        />
        <IconButton
          onClick={() => {
            mutateHotel([,]);
            setIsConfirm(true);
          }}
          icon={<FontAwesomeIcon icon={faCheck} />}
          colorScheme="orange"
          size="xs"
          // borderRadius="md"
          aria-label={`deny-${currentHotel.hotelCode}`}
        />
      </HStack>
    </Flex>
  );
};

export default Hotel;
