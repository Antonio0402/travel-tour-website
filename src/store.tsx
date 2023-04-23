import { WritableAtom, atom } from "jotai";
import {
  atomsWithMutation,
  atomsWithQuery,
  queryClientAtom,
} from "jotai-tanstack-query";
import { FilterValue, initialFilter } from "./data/filterScheme";
import { RESET, atomWithReset } from "jotai/utils";

const queryClient = queryClientAtom.init;

export interface Coords extends google.maps.LatLngLiteral {}

let filteredData: Tour[] = [];
let filter: Tour | undefined;

export type Data = {
  tours: Tour[];
  locations: Location[];
  hotels: Hotel[];
};

export type Filter = {
  tour_id: number;
  title: string;
  overall_rating: number;
  number_of_ratings: number;
};

export type Tour = {
  tourId: number;
  tourName: string;
  location: {
    locationCode: string;
    locationName: string;
    province: string;
    longitude: number;
    latitude: number;
  };
  categoryCode: string;
  hotel: {
    hotelCode: string;
    hotelName: string;
    hotelprice: number;
    locationCode: string;
    address: string;
    longitude: number;
    latitude: number;
  };
  duration: number;
  description: string;
  reviewStar: number;
  reviewNumber: number;
  price: number;
  imageName: string;
  imageUrl: string;
  note: string;
  content: string;
};

export type Hotel = {
  hotelCode: string;
  hotelName: string;
  hotelprice: number;
  locationCode: string;
  address: string;
  longitude: number;
  latitude: number;
};

export type Location = {
  locationCode: string;
  locationName: string;
  province: string;
  longitude: number;
  latitude: number;
};

const getCoordinates = async () =>
  new Promise<Coords>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });

const getData = async () => {
  const res = await fetch("/.netlify/functions/tours");
  const data = await res.json();
  return data;
};

const updateHotel = async (tourId: number, hotel: Hotel) => {
  const res = await fetch(".netlify/functions/tours", {
    method: "PATCH",
    body: JSON.stringify({ tourId, hotel }),
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();
  return data;
};

const [CoordsQueryAtom] = atomsWithQuery<Coords>((_get) => ({
  queryKey: ["coords"],
  queryFn: getCoordinates,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
}));

export const [dataQueryAtom] = atomsWithQuery<Data>((_get) => ({
  queryKey: ["data"],
  queryFn: getData,
}));

export const [, postEditedHotel] = atomsWithMutation((get) => ({
  mutationKey: ["data"],
  mutationFn: () => {
    const tourId = get(tourDetailAtom)?.code;
    const hotel = get(hotelDataAtom);
    if (tourId && hotel) return updateHotel(tourId, hotel);
    return Promise.reject("Can't update hotel");
  },
  onSuccess: () => {
    queryClient.invalidateQueries(["data"]);
  },
}));

export const dataAtom = atom<Data | null>(null);

const CoordsDataAtom = atom<Coords | null>(null);

export const CoordsAtom = atom(async (get) => {
  if (get(CoordsDataAtom)) {
    const filter = get(filtersAtom);
    const data = get(dataAtom);
    const locations = data?.locations;
    const coordsData = locations?.find(
      (location) => filter?.locationCode === location.locationCode
    );
    if (coordsData?.latitude && coordsData.longitude) {
      return {
        lng: coordsData?.longitude,
        lat: coordsData?.latitude,
      };
    }
    return get(CoordsDataAtom);
  }
  return await get(CoordsQueryAtom);
});

const filterDataAtom = atom<FilterValue>(initialFilter);

export const filtersAtom = atom(
  (get) => get(filterDataAtom),
  (_get, set, filter: Partial<FilterValue>) => {
    set(filterDataAtom, (prev) => {
      if (filter.locationCode) {
        return {
          ...prev,
          ...filter,
        };
      }
      return {
        ...prev,
        hotelCode: "",
        ...filter,
      };
    });
  }
);

export const filteredDataAtom = atom((get) => {
  const filter = get(filtersAtom);
  const data = get(dataAtom);
  const tours = data?.tours;
  if (filter.categoryCode && tours) {
    filteredData = tours.filter(
      (tour) => filter.categoryCode === tour.categoryCode
    );
  }

  if (filter.categoryCode && filter.locationCode) {
    filteredData = filteredData.filter(
      (tour) => filter.locationCode === tour.location.locationCode
    );
    if (filter.hotelCode) {
      filteredData = filteredData.filter(
        (tour) => filter.hotelCode === tour.hotel.hotelCode
      );
    }
  }

  // const filteredData: Tour[] = data.tours.filter((tour) => {
  //   return get(filterDataAtom).categoryCode
  //     ? get(filterDataAtom).categoryCode === tour.categoryCode
  //       ? get(filterDataAtom).locationCode
  //         ? get(filterDataAtom).locationCode === tour.location.locationCode
  //           ? true
  //           : false
  //         : true
  //       : false
  //     : false;
  // });
  return filteredData;
});

export const selectAtom = atomWithReset<number | null>(null);

export const tourDetailAtom = atomWithReset<{
  code: number;
  location: string;
} | null>(null);

export const amountAtom = atomWithReset<number>(1);

export const totalAtom = atomWithReset<number>(0);

export const totalDataAtom = atom(
  (get) => get(amountAtom) * get(totalAtom),
  (_get, set, amountValue: number | typeof RESET) => {
    if (amountValue !== RESET) {
      set(totalAtom, amountValue);
    } else {
      set(totalAtom, RESET);
    }
  }
);

function atomWithToggle(initialValue?: boolean) {
  const anAtom = atom(initialValue, (get, set, nextValue: boolean) => {
    const update = nextValue ?? !get(anAtom);
    set(anAtom, update);
  });
  return anAtom;
}

export const isHotelOpen = atomWithToggle(false);

export const tourDataAtom = atom((get) => {
  const filteredData = get(filteredDataAtom);
  const tourId = get(tourDetailAtom)?.code;
  const hotel = get(hotelDataAtom);

  if (tourId) {
    filter = filteredData.find((tour) => tour.tourId === tourId);
    if (filter && hotel) {
      const redundancy = filter.price - filter.hotel.hotelprice;
      const price = hotel.hotelprice + redundancy;
      filter = { ...filter, price, hotel };
    }
    return filter;
  }
  return null;
});

export const addToCartdAtom = atomWithReset<number | null>(null);

export const mapContainerAtom = atom<google.maps.Map | null>(null);

export const editHotelAtom = atom<string | null>(null);

export const hotelsAtom = atom((get) => {
  const location = get(tourDetailAtom)?.location;
  const data = get(dataAtom);
  const hotelsData = data?.hotels;
  if (location) {
    const hotels = hotelsData?.filter(
      (hotel) => hotel.locationCode === location
    );
    return hotels;
  }
  return null;
});

export const hotelDataAtom = atom((get) => {
  const hotels = get(hotelsAtom);
  const editHotel = get(editHotelAtom);
  if (editHotel) {
    const hotel = hotels?.find((hotel) => hotel.hotelCode === editHotel);
    return hotel;
  }
  return null;
});

export const vnd = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

// function atomWithClick(initialValue: any | null) {
//   const anAtom = atom(initialValue, (_get, set, state: any | typeof RESET) => {
//     let update;
//     if (state === RESET) {
//       (update = initialValue), set(anAtom, update);
//     } else {
//       update = state;
//       set(anAtom, update);
//     }
//   });
//   return anAtom;
// }

export function onClickListener(
  markerRef: React.MutableRefObject<google.maps.marker.AdvancedMarkerView | null>,
  handleClick: (...arg: any[]) => any,
  prop?: any,
  isActive?: (state: any | typeof RESET) => void,
  state?: any | typeof RESET
) {
  const onClick = markerRef.current?.addListener("click", () => {
    handleClick(prop);
    if (isActive) {
      isActive(state);
    }
  });
  return onClick;
}
