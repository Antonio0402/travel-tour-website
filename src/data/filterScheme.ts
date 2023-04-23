
export type FilterValue = {
  categoryCode?: string,
  locationCode?: string,
  hotelCode?: string;
}

export type FilterScheme = {
  items: {
    name: string;
    value: string;
    location?: string;
  }[];
  placeholder: string;
  queryName: string;
}[];

export const filterScheme = [
  {
    items:[
      { name: "Cá nhân", value: "tourcanhan"},
      { name: "Theo đoàn", value: "tourdoan"},
    ],
      placeholder: "Loại tour",
      queryName: "categoryCode",
  },
  {
    items: [
      { name: "Cần Thơ", value: "cantho" },
      { name: "Đà Lạt", value: "dalat" },
      { name: "Đà Nẵng", value: "danang" },
      { name: "Hà Nội", value: "hanoi" },
      { name: "Hồ Chí Minh", value: "hochiminh" },
      { name: "Hội An", value: "hoian" },
      { name: "Huế", value: "hue" },
      { name: "Phú Quốc", value: "phuquoc" },
      { name: "Sapa", value: "sapa" },
    ],
    placeholder: "Địa điểm",
    queryName: "locationCode",
  },
  {
    items: [
      { name: "ACE Hotel Saigon", value: "aceSaiGon", location: "hochiminh"},
      { name: "Azerai Can Tho Resort", value: "azeraiCanTho", location: "cantho"},
      { name: "Khách sạn Caravelle Sài Gòn", value: "caravelle", location: "hochiminh"},
      { name: "Casa Eco Mekong Farmstay", value: "casaEco", location: "cantho"},
      { name: "Golf Valley Hotel", value: "golfValley", location: "dalat"},
      { name: "Iris Hotel Can Tho", value: "irisCanTho", location: "cantho"},
      { name: "Island Lodge Phu Quoc", value: "islandLodge", location: "phuquoc"},
      { name: "La An Central Boutique Villa", value: "laAnHoiAn", location: "hoian"},
      { name: "La Siesta Hoi An Resort & Spa", value: "laSiestaHoiAn", location: "hoian"},
      { name: "Lotte Hotel Hanoi", value: "lotteHanoi", location: "hanoi"},
      { name: "Muong Thanh Grand Da Nang Hotel", value: "mtgDaNang", location: "danang"},
      { name: "Mango Bay Resort", value: "mangoBay", location: "phuquoc"},
      { name: "Muong Thanh Holiday Hoi An Hotel", value: "mthHoiAn", location: "hoian"},
      { name: "Pullman Hanoi Hotel", value: "pullmanHaNoi", location: "hanoi"},
      { name: "Khách sạn Sky Gem Central", value: "skyGemCentral", location: "hochiminh"},
      { name: "SOJO Ga Hanoi", value: "sojoGaHaNoi", location: "hanoi"},
      { name: "Khu nghỉ dưỡng và Spa Mikazuki Nhật Bản", value: "spaMikazuki", location: "danang"},
      { name: "Terracotta Hotel & Resort Đà Lạt", value: "terracottaDaLat", location: "dalat"},
      { name: "The Luxe Hotel", value: "theLuxeDalat", location: "dalat"},
      { name: "VinOasis Phu Quoc", value: "vinOasis", location: "phuquoc"},
      { name: "Khách sạn Zalo Sea", value: "zaloSea", location: "danang"},
    ],
    placeholder: "Khách sạn",
    queryName: "hotelCode",
  }
]

// export const hotelsScheme = 

export const initialFilter = {
  categoryCode: "",
  locationCode: "",
  hotelCode: "",
}