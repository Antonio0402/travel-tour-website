import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { amountAtom } from "../store";
import { useAtom } from "jotai";

const Amount = () => {
  const [amount, setAmount] = useAtom(amountAtom);
  return (
    <>
      <Text fontSize="sm" fontWeight="bold" color="orange.400">
        Persons:
      </Text>
      <Slider
        aria-label="amount"
        defaultValue={1}
        min={1}
        max={40}
        step={1}
        onChange={(val) => {
          setAmount(val);
        }}
      >
        <SliderMark
          value={amount}
          fontSize="xs"
          textAlign="center"
          bg="orange.200"
          color="white"
          p="0.5"
          mt="4"
          ml="-6"
          w="12"
          borderRadius="full"
        >
          {amount}
        </SliderMark>
        <SliderTrack bg="gray.200">
          <SliderFilledTrack bg="orange.400" />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <FontAwesomeIcon icon={faUser} color="orange" />
        </SliderThumb>
      </Slider>
    </>
  );
};

export default Amount;
