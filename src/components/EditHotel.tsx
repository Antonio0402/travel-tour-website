import { Select } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { Hotel, editHotelAtom, hotelsAtom, vnd } from "../store";

const EditHotel = ({ currentHotel }: { currentHotel: Hotel }) => {
  const hotels = useAtomValue(hotelsAtom);
  const [editHotel, setEditHotel] = useAtom(editHotelAtom);

  return (
    <>
      {hotels && (
        <Select
          placeholder="Khách sạn"
          w="full"
          p="2"
          defaultValue={currentHotel.hotelCode}
          value={editHotel ?? ""}
          onChange={(e) => setEditHotel(e.target.value)}
          border="1px"
          borderColor="orange.400"
        >
          {hotels.map((hotel) => (
            <option value={hotel.hotelCode} key={hotel.hotelCode}>
              {hotel.hotelName} - {vnd.format(hotel.hotelprice)}
            </option>
          ))}
        </Select>
      )}
    </>
  );
};

export default EditHotel;
