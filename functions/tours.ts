import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const data = {
  "tours": [
    {
      "tourId": 1,
      "tourName": "Tour du lịch khám phá miền Tây sông nước",
      "location": {
        "locationCode": "cantho",
        "locationName": "Cần Thơ",
        "province": "Cần Thơ",
        "longitude": 105.745553490247,
        "latitude": 10.0451722450781,
      },
      "categoryCode": "tourdoan",
      "hotel": {
        "hotelCode": "casaEco",
        "hotelName": "Casa Eco Mekong Farmstay",
        "hotelprice": 1300000,
        "locationCode": "cantho",
        "address":
          "77, Quốc Lộ 91B, phường Thới An Đông, Bình Thủy, Thành phố Cần Thơ, Việt Nam",
        "longitude": 105.704910784141,
        "latitude": 10.0604754063773,
      },
      "duration": 2,
      "description":
        "Tham quan chợ nổi Cái Răng trên du thuyền địa phương có hướng dẫn viên\nThưởng thức bữa sáng ngon miệng với các món ăn đặc trưng của Việt Nam\nDịch vụ đón và trả khách thuận tiện và dễ dàng đến và đi từ khách sạn của bạn ở Cần Thơ\nCảm nhận lòng hiếu khách của cư dân Việt Nam địa phương trong chuyến đi thư giãn này",
      "reviewStar": 4.3,
      "reviewNumber": 431,
      "price": 1266500,
      "imageName": "Tour du lịch khám phá miền Tây sông nước",
      "imageUrl":
        "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/w6vonbfaaej7cmpdjfme.webp",
      "note": "Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HCM – MỸ THO – BẾN TRE – TOUR CẦN THƠ (Ăn sáng, trưa, tối)\n– Buổi sáng: Xe và hướng dẫn viên Du Lịch Bến Nghé đón đoàn tại điểm hẹn, khởi hành đi Tiền Giang. Đến Trung Lương, quý khách dừng chân tại Mekong Reststop, thưởng thức đặc sản hủ tíu Mỹ Tho.\n+ Sau khi dạo một vòng thành phố Mỹ Tho, du khách đi thuyền máy trên sông Tiền ngắm cồn Long, Lân, Quy, Phụng, cầu Rạch Miễu. Thuyền đậu tại cồn Thới Sơn, quý khách bách bộ vào cơ sở nuôi ong lấy mật, nghe đàn ca Tài Tử, thưởng thức trái cây miệt vườn. Quý khách chèo thuyền trên rạch nhỏ vào tham quan làng nghề truyền thống, lò kẹo dừa…\n+ Thuyền tiếp tục đưa khách qua Cồn Phụng, thuộc tỉnh Bến Tre tham quan khu di tích Đạo Dừa. Đoàn dùng bữa trưa với đặc sản Miền Tây.\n– Buổi chiều: Quý khách về lại bến thuyền, di chuyển xuống Cần Thơ nhận phòng nghỉ ngơi.\n+ Xe đưa quý khách tham quan Chợ cổ Cần Thơ, bến Ninh Kiều, cầu Cần Thơ.\n– Buổi tối: Đoàn lên du thuyền du ngoạn trên sông Hậu, dùng bữa tối, thưởng thức đờn ca tài tử.\nNGÀY 2 | CHỢ NỔI CÁI RĂNG – MỸ KHÁNH – TP.HCM (Ăn sáng, trưa)\n– Buổi sáng: Sau khi dùng điểm tâm, trả phòng, đoàn xuống đò đi chợ nổi Cái Răng, một trong những chợ nổi lớn nhất Đồng Bằng Sông Cửu Long, tìm hiểu đời sống thương hồ của người Nam Bộ, mua đặc sản Miền Tây.\n+ Xe đưa quý khách vào vườn du lịch Mỹ Khánh, thăm nhà cổ của ông hội đồng, xem đua heo, thư giãn tại nhà vườn.\n+ Sau khi dùng cơm trưa, đoàn viếng Thiền Viện Trúc Lâm Phương Nam, thiền viện lớn nhất miền Tây Nam Bộ.\n– Buổi chiều, xe đưa đoàn trở về Tp.HCM. Trên đường về,  đoàn dừng chân mua trái cây làm quà. Về đến điểm đón ban đầu, chia tay, kết thúc chương trình du lịch Tiền Giang – Cần Thơ.",
    },
    {
      "tourId": 2,
      "tourName":
        "Tour 2N1D Khám Phá Chợ Nổi Cái Răng và Đồng Bằng Sông Cửu Long Khởi Hành Từ TP. HCM",
      "location": {
        "locationCode": "cantho",
        "locationName": "Cần Thơ",
        "province": "Cần Thơ",
        "longitude": 105.745553490247,
        "latitude": 10.0451722450781,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "azeraiCanTho",
        "hotelName": "Azerai Can Tho Resort",
        "hotelprice": 1200000,
        "locationCode": "cantho",
        "address":
          "Thửa đất 4,  Cồn Ấu, Phường Hưng Phú, Hưng Phú, Cái Răng, Thành phố Cần Thơ, Việt Nam",
        "longitude": 105.794372165723,
        "latitude": 10.0400629961284,
      },
      "duration": 2,
      "description":
        "Khám phá vẻ đẹp của sông nước Miền Tây với tour trọn gói 2N1D cùng mức giá cực kỳ ưu đãi trên Klook\nTham quan các địa điểm nổi tiếng mang đậm phong cách của người dân đồng bằng sông Cửu Long\nTrải nghiệm thú vị với các hoạt động đặc trưng của người dân bản địa như chèo xuồng ba lá, đi thuyền trên sông Tiền...\nThưởng thức các món ăn đặc sản của miền Tây như trái cây tươi, uống nước dừa, mật ong...\nDùng bữa tối trên du thuyền tại bến Ninh Kiều và đặc biệt là đờn ca tài tử nổi tiếng khắp Việt Nam\nTận hưởng không gian tất bật và rộn rã của chợ nổi Cái Răng - Một trong những chợ nổi vẫn giữ được nét văn hóa riêng của miền Tây",
      "reviewStar": 4.7,
      "reviewNumber": 136,
      "price": 1640280,
      "imageName":
        "Tour 2N1D Khám Phá Chợ Nổi Cái Răng và Đồng Bằng Sông Cửu Long Khởi Hành Từ TP. HCM",
      "imageUrl":
        "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hc702kvncqxw7oa5pwki/TourRi%C3%AAng1Ng%C3%A0yThamQuan%C4%90%E1%BB%93ngB%E1%BA%B1ngS%C3%B4ngC%E1%BB%ADuLong.webp",
      "note": " Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HCM – TIỀN GIANG - BẾN TRE - CẦN THƠ (Ăn sáng, trưa, tối)\n– Buổi sáng: Xe và hướng dẫn viên của Du Lịch Bến Nghé đón quý khách tại Cung Văn Hóa Lao Động, khởi hành tour du lịch Tiền Giang – Bến Tre – Cần Thơ.\n+ Quý khách dùng bữa sáng tại nhà hàng Trung Lương.\n+ Sau khi dạo một vòng thành phố Mỹ Tho, du khách đi thuyền máy trên sông Tiền ngắm cồn Long, Lân, Quy, Phụng, cầu Rạch Miễu. Thuyền đậu tại cồn Thới Sơn, quý khách bách bộ vào cơ sở nuôi ong lấy mật, nghe đàn ca Tài Tử, thưởng thức trái cây miệt vườn. Quý khách chèo thuyền trên rạch nhỏ vào tham quan làng nghề truyền thống, lò kẹo dừa…\n+ Thuyền tiếp tục đưa khách qua Cồn Phụng, thuộc tỉnh Bến Tre tham quan khu di tích Đạo Dừa. Đoàn dùng bữa trưa với đặc sản Miền Tây.\n– Buổi chiều: Quý khách về lại bến thuyền, di chuyển xuống Cần Thơ nhận phòng nghỉ ngơi.\n+ Xe đưa quý khách tham quan Chợ cổ Cần Thơ, bến Ninh Kiều, cầu Cần Thơ.\n– Buổi tối: Đoàn lên du thuyền du ngoạn trên sông Hậu, dùng bữa tối, thưởng thức đờn ca tài tử.\nNGÀY 2 | CẦN THƠ - TP.HCM (Ăn sáng, trưa)\n– Buổi sáng: Sau khi dùng điểm tâm, trả phòng, đoàn xuống đò đi chợ nổi Cái Răng, một trong những chợ nổi lớn nhất Đồng Bằng Sông Cửu Long, tìm hiểu đời sống thương hồ của người Nam Bộ, mua đặc sản Miền Tây.\n+ Xe đưa quý khách vào vườn du lịch Mỹ Khánh, thăm nhà cổ của ông hội đồng, xem đua heo, thư giãn tại nhà vườn.\n+ Sau khi dùng cơm trưa, đoàn viếng Thiền Viện Trúc Lâm Phương Nam, thiền viện lớn nhất miền Tây Nam Bộ.\n– Buổi chiều: Xe đưa đoàn trở về Tp.HCM. Trên đường về, đoàn dừng chân mua trái cây làm quà. Về đến điểm đón ban đầu, chia tay, kết thúc chương trình du lịch Tiền Giang – Bến Tre – Cần Thơ",
    },
    {
      "tourId": 3,
      "tourName": "Tour Đồng Bằng Sông Cửu Long Từ Hồ Chí Minh Bằng Xe Limousine",
      "location": {
        "locationCode": "cantho",
        "locationName": "Cần Thơ",
        "province": "Cần Thơ",
        "longitude": 105.745553490247,
        "latitude": 10.0451722450781,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "casaEco",
        "hotelName": "Casa Eco Mekong Farmstay",
        "hotelprice": 1300000,
        "locationCode": "cantho",
        "address":
          "77, Quốc Lộ 91B, phường Thới An Đông, Bình Thủy, Thành phố Cần Thơ, Việt Nam",
        "longitude": 105.704910784141,
        "latitude": 10.0604754063773,
      },
      "duration": 1,
      "description":
        "Bắt đầu chuyến phiêu lưu tìm hiểu đồng bằng sông Cửu Long từ Hồ Chí Minh! Nhẹ nhàng thư giãn trong chiếc limousine cao cấp khi di chuyển đến Mỹ Tho. Đầu tiên, bạn sẽ ghé qua chùa Vĩnh Tràng - một điểm du lịch tâm linh nổi tiếng ở thành phố Mỹ Tho. Đây là nơi giao thoa văn hóa phương Đông và phương Tây và là một điểm check-in khá nổi tiếng dành cho mọi đối tượng. Sau khi đến Mỹ Tho, lên thuyền và thư thái ngắm nhìn quang cảnh hai bên bờ sông khu vực đồng bằng sông Cửu Long, đắm mình trong làn gió mang đậm hương vị Miền Tây Nam Bộ.\nGhé qua một ngôi làng địa phương để thưởng thức trái cây, trà và rượu mật ong. Dừng chân tại một xưởng sản xuất kẹo dừa tại địa phương và học cách làm kẹo dừa. Có cơ hội để xem một buổi biểu diễn âm nhạc dân gian mang đậm chất miền Nam Việt Nam được thực hiện bởi người dân địa phương. Dùng bữa trưa ngon miệng và tham quan địa điểm lần cuối trước khi đi phà về TP. Hồ Chí Minh.",
      "reviewStar": 4.6,
      "reviewNumber": 61,
      "price": 1203659,
      "imageName":
        "Tour Đồng Bằng Sông Cửu Long Từ Hồ Chí Minh Bằng Xe Limousine",
      "imageUrl":
        "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ljpwq2jc8zbnyi1o6ndy.webp",
      "note": "Gía trên chưa bao gồm khách sạn",
      "content":
        "Tạm rời xa nhịp sống hối hả của thành phố và tận hưởng chuyến phiêu lưu trong ngày đến đồng bằng sông Cửu Long\nTham quan nhiều địa điểm nổi tiếng như chùa Vĩnh Tràng, một trong những ngôi chùa lớn nhất trong khu vực\nKhám phá hệ thống sông ngòi trên chiếc thuyền động cơ cùng hướng dẫn viên chuyên nghiệp\nTìm hiểu cuộc sống của người dân địa phương khi bạn tham quan đảo dừa\nDu lịch vòng quanh đồng bằng sông Cửu Long và Hồ Chí Minh trên chiếc xe limousine sang trọng, hiện đại",
    },
    {
      "tourId": 4,
      "tourName": "Tour du lịch Đà Lạt – Thành phố mộng mơ",
      "location": {
        "locationCode": "dalat",
        "locationName": "Đà Lạt",
        "province": "Lâm Đồng",
        "longitude": 108.449690479941,
        "latitude": 11.9395094744159,
      },
      "categoryCode": "tourdoan",
      "hotel": {
        "hotelCode": "golfValley",
        "hotelName": "Golf Valley Hotel",
        "hotelprice": 1200000,
        "locationCode": "dalat",
        "address": "94 Đường Bùi Thị Xuân, Phường 2, Thành phố Đà Lạt, Lâm Đồng",
        "longitude": 108.44059810439,
        "latitude": 11.9475545595852,
      },
      "duration": 4,
      "description":
        "Đà Lạt vốn được mệnh danh là Thành phố mộng mơ, một điểm du lịch và nghỉ ngơi lý tưởng dành cho du khách cả trong và ngoài nước. Đến với Đà Lạt, bạn sẽ được đắm mình trong tiết trời mát mẻ, trong gió, trong hương hoa, trong tiếng vi vu của rừng thông bạt ngàn…Tour du lịch Đà Lạt 3 ngày 3 đêm sẽ mang đến du khách một hành trình đầy ắp niềm vui và kỉ niệm!",
      "reviewStar": 3.9,
      "reviewNumber": 254,
      "price": 1800000,
      "imageName": "Tour du lịch Đà Lạt – Thành phố mộng mơ",
      "imageUrl":
        "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/hfeqlbybzkrujmtvwbqi.webp",
      "note": " Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HỒ CHÍ MINH – ĐÀ LẠT\n– Buổi tối: Xe và hướng dẫn viên Du Lịch Bến Nghé đón khách tại điểm hẹn, khởi hành đi Đà Lạt, mở đầu chương trình tour du lịch Đà Lạt 3 ngày. Quý khách nghỉ ngơi trên xe.\nNGÀY 2 | KHÁM PHÁ ĐÀ LẠT NGÀN HOA (Ăn sáng, trưa, tối)\n– Buổi sáng: Đến Thành Phố Đà Lạt, quý khách dùng điểm tâm. Xe đưa Quý khách tham quan Vườn Hoa Minh Tâm với hàng trăm loài hoa đua nở màu sắc sặc sỡ như: hoa Cẩm Tú Cầu, hoa Cẩm Chướng, hoa Bất Tử, hoa Phong Lan, hoa Hồng, Mimosa,… Quý khách tiếp tục tham quan Biệt Điện Bảo Đại (Dinh III) là nơi nghỉ dưỡng và làm việc của vị vua cuối cùng Triều Nguyễn. Đoàn dùng cơm trưa tại nhà hàng, nhận phòng khách sạn và nghỉ ngơi.\n– Buổi chiều: Xe đưa đoàn tham quan nhà thờ Domain de Maria được mệnh danh là “Nhà Thờ Lãnh Địa Đức Bà”. Đoàn khởi hành tham quan Thiền Viện Trúc Lâm, có thể đi cáp treo qua đồi Rôbin ngắm cảnh rừng thông, hồ Tuyền Lâm thơ mộng bên rặng núi Voi từ trên cao (Chi phí tự túc).\n– Buổi tối: Quý khách tự do đi dạo và khám phá Đà Lạt về đêm, tự do thưởng thức các món ngon ở chợ đêm, hương vị cà phê phố núi ở Cà phê Thủy Tạ, ngắm cảnh Hồ Xuân Hương, nghỉ đêm tại Đà Lạt.\nNGÀY 3 | GA ĐÀ LẠT - LANGBIANG - CHÙA TÀU (Ăn sáng, trưa, tối)\n– Buổi sáng: Quý khách dùng điểm tâm, xe đưa đoàn tới Ga Đà Lạt, nơi được xếp hạng di tích cấp Quốc Gia. Đoàn sẽ được tham quan xe lửa chạy bằng hơi nước, đường răng cưa có một không hai còn lại của Đất Nước, tiếp tục khởi hành tham quan và chinh phục đỉnh núi Lang Biang huyền thoại, Quý khách đi thưởng ngoạn quần thể phong cảnh đẹp nhất từ trên đỉnh LangBiang. Quý khách đi bộ leo núi hoặc đi xe Jeep để chinh phục đỉnh Langbiang từ đỉnh núi, chiêm ngưỡng toàn cảnh thành phố Đà Lạt thơ mộng, huyền ảo trong sương mù. Đoàn dùng cơm trưa tại nhà hàng, nghỉ ngơi.\n– Buổi chiều: Xe đưa đoàn tham quan Chùa Tàu được mệnh danh là “ Thiên Vương Cổ Sát” khám phá và thử trí tò mò với “bàn xoay huyền bí”. Đoàn tham quan cơ sở mứt Đà Lạt quý khách thưởng thức các đặc sản mứt Đà Lạt miễn phí và mua quà về cho người thân và gia đình mình. Quý khách dùng cơm chiều tại nhà hàng.\n– Buổi tối: Quý khách tự do khám phá phố đêm Đà Lạt hoặc xe đưa đoàn vào xã Lát tham gia đêm lửa trại, uống rượu cần, văn nghệ cồng chiêng, giao lưu văn hóa với các chàng trai cô gái dân tộc Đạ Lạch, nghỉ đêm tại Đà Lạt.\nNGÀY 4 | ĐÀ LẠT - THÁC DATANLA - TP HỒ CHÍ MINH (Ăn sáng, trưa)\n– Buổi sáng: Đoàn dùng bữa sáng, làm thủ tục trả phòng khách sạn. Xe đưa quý khách ra chợ Đà Lạt mua sắm rau quả, hoa tươi…Chia tay Đà Lạt, đoàn khởi hành về TP.HCM. Trên đường đoàn dừng chân tham quan thác Đatanla, thác nước hùng vĩ của Đà Lạt, chinh phục cảm giác mạnh với hệ thống máng trượt. Đoàn dùng cơm trưa tại nhà hàng Tp.Bảo Lộc, thưởng thức trà, cà phê miễn phí.\n– Buổi chiều: Xe và hướng dẫn Du Lịch Bến Nghé đưa đoàn về điểm đón ban đầu, chia tay, kết thúc chương trình tour du lịch Đà Lạt.",
    },
    {
      "tourId": 5,
      "tourName": "Tour du lịch Đà Lạt – Mùa Cỏ Hồng",
      "location": {
        "locationCode": "dalat",
        "locationName": "Đà Lạt",
        "province": "Lâm Đồng",
        "longitude": 108.449690479941,
        "latitude": 11.9395094744159,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "terracottaDaLat",
        "hotelName": "Terracotta Hotel & Resort Đà Lạt",
        "hotelprice": 1500000,
        "locationCode": "dalat",
        "address":
          "Phân khu chức năng 7.9, KDL hồ Tuyền Lâm, Phường 3, Đà Lạt, Tỉnh Lâm Đồng, Việt Nam",
        "longitude": 108.438010882302,
        "latitude": 11.8951446544838,
      },
      "duration": 4,
      "description":
        '""Mùa hội cỏ hồng” là sự kiện văn hóa du lịch Đà Lạt độc đáo, lần đầu tiên tổ chức ở tỉnh Lâm Đồng và Việt Nam, đây là hoạt động mở đầu cho chuỗi hoạt động để hướng đến Festival Hoa Đà Lạt. Hãy cùng du lịch Bến Nghé tham gia Tour du lịch Đà Lạt – Mùa hội cỏ hồng để thỏa sức chiêm ngưỡng đồi cỏ hồng đẹp tựa trong tranh.',
      "reviewStar": 4.1,
      "reviewNumber": 189,
      "price": 3850000,
      "imageName": "Tour du lịch Đà Lạt – Mùa Cỏ Hồng",
      "imageUrl":
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/hfeqlbybzkrujmtvwbqi.webp",
      "note": " Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HỒ CHÍ MINH – ĐÀ LẠT\n– Buổi tối: Xe và hướng dẫn viên Du Lịch Bến Nghé đón khách tại điểm hẹn, khởi hành đi Đà Lạt, mở đầu chương trình tour du lịch Đà Lạt – mùa cỏ hồng. Qúy khách nghỉ ngơi trên xe.\nNGÀY 2 | VƯỜN DƯA PEPINO - GA ĐÀ LẠT - CHÙA LINH PHƯỚC - ĐỒI CHÈ CẦU ĐẤT (Ăn sáng, trưa, tối)\nBuổi sáng: Đến Đà Lạt, đoàn dùng điểm tâm, xe đưa quý khách tham quan:\n+ Quảng trường Lâm Viên\n+ Vườn dưa Pepino, vườn dưa hấu tí hon có nguồn gốc từ Nam Mỹ. Quý khách có thể mua dưa tại vườn. Tiếp tục tham quan Vườn rau thủy canh công nghệ cao – chiêm ngưỡng nhiều lại hoa đặc sắc và tận mắt nhìn thấy những trái dâu chín mọng được trồng trên giàn cao cùng hệ thống tưới tiêu khép kín.\n+ Tham quan Showroom Hoa Khô du khách có thể tận mắt nhìn thấy công nghệ sấy hoa khô của Đà Lạt.\n+ Ghé cơ sở mứt tham quan và thưởng thức các loại mứt miễn phí.\n+ Quý khách dùng cơm trưa, về khách sạn nhận phòng nghỉ ngơi.\n– Buổi chiều: Xe đưa đoàn đi tham quan Nhà Ga Xe Lửa – Đây được xem là nhà ga cổ kính nhất Việt Nam và Đông Dương. Quý khách có thể trải nghiệm tuyến đường sắt 7km đến Trại Mát tham quan chùa Linh Phước – ngôi chùa có kiến trúc độc đáo với hình tượng Rồng được làm bằng 12.000 vỏ chai bia, tham quan công trình 18 tầng địa ngục. (Chi phí tự túc)\n+ Tiếp tục, xe đưa đoàn đi tham quan Đồi chè Cầu Đất.\n– Buổi tối: Sau khi dùng cơm tối, quý khách đi dạo Đà Lạt về đêm, thưởng thức các món ngon tại chợ đêm Âm Phủ, hương vị cà phê phố núi ở quán Thủy Tạ, uống sữa đậu nành nóng, đi xe đạp đôi, xe ngựa kéo ngắm cảnh hồ Xuân Hương và cảm nhận cái se lạnh đặc trưng của Đà Lạt.\nNGÀY 3 | QUẢNG TRƯỜNG LÂM VIÊN - QUE GRADEN - VƯỜN DÂU - KDL LANGBIANG (Ăn sáng, trưa, tối)\n– Buổi sáng: Sau khi dùng bữa sáng buffet, xe đưa quý khách đến Đồi cỏ Hồng – tham gia chương trình “Mùa hội Cỏ Hồng” tự do tham quan, chụp ảnh hòa mình vào các chương trình Hội ảnh Cỏ Hồng.\n+ Tiếp tục đoàn ghé tham quan Thung Lũng Vàng, nơi có những vườn hoa trông rừng thông, có ngọn suối uốn mình bên đồi hoa, nơi có vườn cây cảnh khoe mình trong khung cảnh lãng mạng.\n+ Quý khách dùng bữa trưa tại nhà hàng.\n– Buổi chiều: Xe đưa đoàn đi tham quan nhà thờ Domain De Marie – một công trình độc đáo kết hợp giữa kiến trúc Châu Âu và Tây Nguyên. Tiếp tục hành trình khởi hành về huyện Lạc Dương đoàn tham quan KDL Lang Biang, chinh phục ngọn núi cao hơn 2.000m với câu chuyện tình lãng mạng của chàng Lang và nàng H’Biang, tại đây Quý khách có dịp ngắm toàn cảnh thành phố sương mù.\n– Buổi tối: Sau khi dùng cơm tối, quý khách có thể tham dự đêm văn nghệ cồng chiêng, uống rượu cần, dùng thịt nướng, giao lưu văn hóa với người Tây Nguyên.\nNGÀY 4 | ĐÀ LẠT - TP HỒ CHÍ MINH (Ăn sáng, trưa)\n– Buổi sáng: Quý khách dùng điểm tâm, trả phòng, xe đưa đoàn rời Đà Lạt về Tp.Hồ Chí Minh.\n+  Trên đường về quý khách ghé tham quan thác Datanla, quý khách sẽ được hòa mình vào thiên nhiên, chiêm ngưỡng một cảnh quan sinh động.\n+ Quý khách dùng cơm trưa, thưởng thức đặc sản trà, cà phê, mua sắm tại danh trà Tâm Châu.\n– Buổi chiều: Xe và hướng dẫn Du Lịch Bến Nghé đưa đoàn về điểm đón ban đầu, chia tay, kết thúc chương trình tour du lịch Đà Lạt.",
    },
    {
      "tourId": 6,
      "tourName": "Tour du lịch Đà Nẵng – Bà Nà – Hội An",
      "location": {
        "locationCode": "danang",
        "locationName": "Đà Nẵng",
        "province": "Đà Nẵng",
        "longitude": 108.198804955923,
        "latitude": 16.0544154754518,
      },
      "categoryCode": "tourdoan",
      "hotel": {
        "hotelCode": "spaMikazuki",
        "hotelName": "Khu nghỉ dưỡng và Spa Mikazuki Nhật Bản",
        "hotelprice": 1900000,
        "locationCode": "danang",
        "address":
          "Đường Nguyễn Tất Thành,Phường Hòa Hiệp Nam, Hòa Hiệp Nam, Liên Chiểu, Đà Nẵng, Việt Nam",
        "longitude": 108.146085656563,
        "latitude": 16.0944807956342,
      },
      "duration": 3,
      "description":
        "Tour du lịch Đà Nẵng – Cù Lao Chàm – Hội An đưa quý khách khám phá thiên đường biển miền Trung với cảnh đẹp Đà Nẵng, Cù Lao Chàm hoang sơ, bình yên như tranh và một Hội An cổ kính đẹp mộng mơ. Hay bạn sẽ bắt gặp ngay hơi thở của Miền Tây qua khu du lịch sinh thái Rừng dừa Bảy Mẫu với hệ sinh thái động thực vật vô cùng đa dạng và phong phú, đến đây bạn sẽ cảm thấy cuộc sống yên bình đến lạ mọi lo lắng, bộn bề của cuộc sống như dần tan biến.",
      "reviewStar": 3.5,
      "reviewNumber": 301,
      "price": 76500000,
      "imageName": "Tour du lịch Đà Nẵng – Bà Nà – Hội An",
      "imageUrl":
        "https://res.klook.com/image/upload/c_fill,w_843,h_474/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/bbd5fyz0ieyvc30bw9bh.webp",
      "note": " Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HCM – ĐÀ NẴNG – KDL BÀ NÀ (Ăn tối)\n– Buổi sáng: Nhân viên Du Lịch Bến Nghé đón quý khách tại sân bay Tân Sơn Nhất, làm thủ tục đón chuyến bay đi Đà Nẵng.\n+ Đến Đà Nẵng, xe đón quý khách tham quan Bà Nà Hills – nơi quý khách khám phá những khoảnh khắc giao mùa bất ngờ Xuân – Hạ – Thu – Đông trong 1 ngày. Quý khách sẽ cảm nhận được bồng bềnh giữa chốn bồng lai tiên cảnh, trải nghiệm ngồi cáp treo dài nhất Việt Nam (gần 6.000m), tham quan vườn hoa, hầm rượu, chùa Linh Ứng, Thích Ca Phật Đài, đặc biệt là tham quan và chụp ảnh Cầu Vàng có kiến trúc độc nhất vô nhị với đôi bàn tay khổng lồ nâng đỡ Cầu Vàng tuyệt đẹp (chi phí tự túc).\n+ Đoàn dùng bữa trưa buffet tại Bà Nà.\n+ Tham quan Cầu Vàng, Làng Pháp, vui chơi tại khu Fantasy,…\n– Buổi chiều: Đoàn khởi hành về lại Đà Nẵng, nhận phòng khách sạn, tự do tắm biển Mỹ Khê.\n– Buổi tối: Quý khách dùng bữa tối tại nhà hàng, tự do dạo phố Đà Nẵng.\n+ Hoặc quý khách có thể ngồi thuyền trên sông Hàn ngắm thành phố Đà Nẵng lung linh về đêm với hàng loạt cây cầu độc đáo và nổi tiếng (chi phí tự túc).\nNGÀY 2 | CÙ LAO CHÀM/RỪNG DỪA BẢY MẪU – PHỐ CỔ HỘI AN (Ăn sáng, tối)\n– Buổi sáng: Quý khách ăn sáng buffet, sau đó làm thủ tục trả phòng khách sạn. Quý khách chọn 1 trong 2 chương trình sau:\nLỰA CHỌN 1: THAM QUAN CÙ LAO CHÀM, LẶN NGẮM SAN HÔ:\n+ Đoàn khởi hành vào Hội An ngồi tàu cao tốc đi tham quan Cù Lao Chàm, khu dự trữ sinh quyển Thế giới gồm cụm đảo ngoài khơi biển Đông cách Hội An 12 hải lý (chi phí tự túc).\n+ Tham quan chùa Hải Tạng hơn 400 năm tuổi, Âu thuyền – khu vực tránh bão của ngư dân, Khu dân cư & các lăng miếu cổ.\n+ Ăn trưa tại nhà hàng ở Cù Lao Chàm.\n+ Quý khách tiếp tục thăm khu bảo tồn biển tại bãi Bắc, hòn Dài và lặn ngắm san hô.\nLỰA CHỌN 2: THAM QUAN KHU DU LỊCH SINH THÁI RỪNG DỪA BẢY MẪU:\n+ 10h00 Đoàn khởi hành đi tham quan Khu du lịch sinh thái Rừng dừa Bảy Mẫu (Chi phí tự túc).\n+ Quý khách dùng cơm trưa, chụp hình, nghỉ ngơi tại khu du lịch sinh thái.\n+ Đoàn tập trung tại Khu du lịch rừng dừa Bảy Mẫu tham gia các hoạt động làm lưới đánh cá bằng cách truyền thống, câu cá,… các trò chơi dân gian đạp niêu, đua thuyền, đua thúng, thi câu cá,…\n– Buổi tối: Quý khách dùng bữa tối, sau đó về khách sạn nghỉ ngơi.\nNGÀY 3 | ĐÀ NẴNG – TẮM BIỂN – MIKAZUKI – TP.HCM (Ăn sáng, trưa)\n– Buổi sáng: Đoàn dùng bữa sáng buffet, tự do nghỉ ngơi, tắm biển Mỹ Khê.\n+ Hoặc quý khách có thể tham quan và trải nghiệm Khu phức hợp Công viên nước Mikazuki theo phòng cách Nhật Bản (Chi phí tự túc).\n+ Đoàn trả phòng khách sạn, dùng bữa trưa tại nhà hàng.\n– Buổi chiều: Xe đưa đoàn di chuyển đến sân bay Đà Nẵng làm thủ tục đón chuyến bay về lại TP.HCM, kết thúc chương trình.",
    },
    {
      "tourId": 7,
      "tourName": "Tour du lịch Bà Nà – Lăng Cô – Đà Nẵng 1 ngày",
      "location": {
        "locationCode": "danang",
        "locationName": "Đà Nẵng",
        "province": "Đà Nẵng",
        "longitude": 108.198804955923,
        "latitude": 16.0544154754518,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "mtgDaNang",
        "hotelName": "Muong Thanh Grand Da Nang Hotel",
        "hotelprice": 2000000,
        "locationCode": "danang",
        "address": "962 Ngô Quyền, An Hải Tây, Sơn Trà, Đà Nẵng, Việt Nam",
        "longitude": 108.233083062084,
        "latitude": 16.0648754706147,
      },
      "duration": 1,
      "description":
        "Quý khách được khám phá tour du lịch Bà Nà – Lăng Cô – Đà Nẵng 1 ngày tạo nhiều điều kiện thuận lợi cho du khách đến với thiên đường miền Trung để khám phá không chỉ những di sản nổi tiếng mà còn chiêm ngưỡng cảnh sắc thiên nhiên tuyệt vời.",
      "reviewStar": 4.2,
      "reviewNumber": 191,
      "price": 900000,
      "imageName": "Tour du lịch Bà Nà – Lăng Cô – Đà Nẵng 1 ngày",
      "imageUrl":
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/wppzr5ttcrx7ofj1tq6d.webp",
      "note": "Gía trên chưa bao gồm khách sạn",
      "content":
        "NGÀY 1 | ĐÀ NẴNG - BÀ NÀ - LĂNG CÔ (Ăn sáng, trưa)\n07h30: Xe và hướng dẫn đón khách tại điểm hẹn, khởi hành Tour du lịch Bà Nà – Lăng Cô – Đà Nẵng đi tham quan khu du lịch Bà Nà – Núi Chúa, mệnh danh là Đà Lạt/ Sa Pa thứ 2 tại miền Trung, với khí hậu tuyệt vời được ví như mùa Xuân của nước Pháp.\n09h00: Quý khách thưởng ngoạn khung cảnh Bà Nà trên cao bằng hệ thống cáp treo hiện đại nhất Đông Nam Á. Quý khách chinh phục đỉnh núi Chúa ở độ cao 1.487m so với mực nước biển, thưởng ngoạn quang cảnh núi rừng Bà Nà và tham gia các trò chơi hấp dẫn tại Fantasy Park : Tháp rơi tự do, Công viên khủng long, Đường đua rực lửa…\n11h00: Hướng dẫn đưa quý khách bách bộ tham quan Chùa Linh Ứng Bà Nà, và tượng Phật Thích Ca tọa thiền có chiều cao 27m tính từ đế tháp.\n11h45: Quý khách xuống cáp , tạm biệt Bà Nà , khởi hành đến Lăng Cô.\n12h30: Quý khách dừng chân ăn trưa tại trạm dừng chân Hải Vân và nghỉ ngơi.\n13h30: Xe và hướng dẫn đưa Quý khách tham quan hầm đường bộ Hải Vân ( hầm đường bộ dài nhất Đông Nam Á) và biển Lăng Cô. chiêm ngưỡng Đèo Hải Vân trên đỉnh đèo Hải Vân. Phía Nam có bảng bằng đá khắc “ Hải Vân Quan”, Phía Bắc ghi “ Thiên Hạ Đệ Nhất Hùng Quan” bằng chữ Hán. Hải Vân quan là công trình kiến trúc có giá trị lịch sử và nghệ thuật cao. được xây dựng vào năm 1826 ( năm Minh Mạng thứ 7)\n15h00: Đến Lăng Cô Quý khách tham quan chụp hình lưu niệm, tắm biển tự do.\n16h30: Qúy khách khởi hành về Đà Nẵng, Kết thúc chuyến Tour du lịch Bà Nà – Lăng Cô – Đà Nẵng.",
    },
    {
      "tourId": 8,
      "tourName": "Tour một ngày ở Hà Nội",
      "location": {
        "locationCode": "hanoi",
        "locationName": "Hà Nội",
        "province": "Hà Nội",
        "longitude": 105.833616166698,
        "latitude": 21.0278661449005,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "sojoGaHaNoi",
        "hotelName": "SOJO Ga Hanoi",
        "hotelprice": 1300000,
        "locationCode": "hanoi",
        "address": "115 Trần Hưng Đạo, Cửa Nam, Quận Hoàn Kiếm, Hà Nội, Việt Nam",
        "longitude": 105.84157372504,
        "latitude": 21.0239342175813,
      },
      "duration": 1,
      "description":
        "Ghé thăm những địa danh tuyệt nhất Hà Nội với tour trong một ngày\nViếng nơi an nghỉ cuối cùng của Chủ Tịch Hồ Chí Minh ở Lăng Bác\nNgắm những ngôi chùa tuyệt đẹp của thành phố: Chùa Trấn Quốc và Chùa Một Cột\nKhám phá phong cảnh thiên nhiên tuyệt vời dọc theo Hồ Hoàn Kiếm, tham quan Văn Miếu Quốc Tử Giám và di tích nhà tù Hoả Lò hoặc Bảo tàng phụ nữ Việt Nam\nThêm lựa chọn xem biểu diễn múa rối nước độc đáo hoặc tham gia một chuyến đi xe đạp ở thành phố vào cuối tour",
      "reviewStar": 4.3,
      "reviewNumber": 421,
      "price": 645000,
      "imageName": "Tour một ngày ở Hà Nội",
      "imageUrl":
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/7fde4a57-Hanoi-In-One-Day.webp",
      "note": "Gía trên chưa bao gồm khách sạn",
      "content":
        "NGÀY 1 | CITY TOUR HÀ NỘI (Ăn sáng, trưa)\n– Buổi sáng: Xe và hướng dẫn viên Du Lịch Bến Nghé đón quý khách tại điểm hẹn, khởi hành tham quan chương trình tour du lịch City tour Hà Nội:\n+ Chùa Trấn Quốc được xây dựng cách đây gần 1000 năm\n+ Quần thể Khu di tích Hồ Chí Minh (Lăng chủ tịch HCM, nhà sàn, ao cá, Chùa Một Cột)\n+ Bảo tàng Dân tộc học nơi hội tụ nhiều nét văn hóa của 54 dân tộc anh em\n– Đoàn dùng cơm trưa tại nhà hàng.\n– Buổi chiều: Đoàn khởi hành tham quan Văn Miếu Quốc Tử Giám trường đại học đầu tiên của Việt Nam.\n+ Tiếp tục tham quan đền Ngọc Sơn và Hồ Hoàn Kiếm.\n+  Xe đưa quý khách về điểm đón ban đầu, Du Lịch Bến Nghé chia tay, kết thúc chương trình du lịch City tour Hà Nội.",
    },
    {
      "tourId": 9,
      "tourName": "Tour lễ hội Đền Gióng – Chùa Kiến Sơ – Đền Đô – Hà Nội",
      "location": {
        "locationCode": "hanoi",
        "locationName": "Hà Nội",
        "province": "Hà Nội",
        "longitude": 105.833616166698,
        "latitude": 21.0278661449005,
      },
      "categoryCode": "tourdoan",
      "hotel": {
        "hotelCode": "lotteHanoi",
        "hotelName": "Lotte Hotel Hanoi",
        "hotelprice": 1700000,
        "locationCode": "hanoi",
        "address": "Số 54 Liễu Giai, Cống Vị, Quận Ba Đình, Hà Nội, Việt Nam",
        "longitude": 105.812301858719,
        "latitude": 21.0318760991251,
      },
      "duration": 1,
      "description":
        "Phiêu lưu một ngày sông nước trên con sông dài nhất Việt Nam với những thắng cảnh thiên nhiên, những ngôi đền cổ, di tích lịch sử lâu đời và những nét văn hóa truyền thống đậm đà bản sắc của cư dân trong những ngôi làng trù phú nhờ phù sa của con sông, những cánh đồng lúa bát ngát, bãi ngô bãi mía sẽ là những trải nghiệm khó quên cho hành trình du thuyền trên sông Hồng.",
      "reviewStar": 3.2,
      "reviewNumber": 154,
      "price": 545000,
      "imageName": "Tour lễ hội Đền Gióng – Chùa Kiến Sơ – Đền Đô – Hà Nội",
      "imageUrl":
        "https://dulichbennghe.vn/wp-content/uploads/2020/03/dulichbennghe-dendo.jpg",
      "note": "Gía trên chưa bao gồm khách sạn",
      "content":
        "NGÀY 1 | HÀ NỘI - ĐỀN GIÓNG - CHÙA KIẾN SƠ - ĐỀN ĐÔ (Ăn sáng, trưa)\n– Buổi sáng: 06h30:Xe và hướng dẫn viên Du Lịch Bến Nghé đón quý khách tại điểm hẹn mở đầu Tour lễ hội Đền Gióng – Chùa Kiến Sơ – Đền Đô – Hà Nội, khởi hành đi tham quan lòng sông Hồng.\n+ 07h30: Tàu rời bến ngược dòng Sông Hồng, sau đó xuôi dòng Sông Đuống\n+ 09h40: Tàu cập bến Đổng Viên. Ô tô đón khách tại bến\n+ 10h00: Quý khách đến thăm Đền Gióng, chùa Kiến Sơ.\n+ 11h00: Xe tiếp tục đưa đoàn đi thăm Đền Đô.\n+ 11h20: Quý khách thăm Đền Đô và nghe hát quan họ tại Thủy đình.\n+ 12h30: Đoàn ăn trưa tại đền, thưởng thức bánh phu thê và mua quà.\n– Buổi chiều: 13h30: Quý khách lên xe trở lại tàu.\n+ 16h30: Tàu về bến, kết thúc chương trình Tour lễ hội Đền Gióng – Chùa Kiến Sơ – Đền Đô – Hà Nội.",
    },
    {
      "tourId": 10,
      "tourName": "Tour du lịch Làng gốm Bát Tràng – Thành Cổ Loa",
      "location": {
        "locationCode": "hanoi",
        "locationName": "Hà Nội",
        "province": "Hà Nội",
        "longitude": 105.833616166698,
        "latitude": 21.0278661449005,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "lotteHanoi",
        "hotelName": "Lotte Hotel Hanoi",
        "hotelprice": 1700000,
        "locationCode": "hanoi",
        "address": "Số 54 Liễu Giai, Cống Vị, Quận Ba Đình, Hà Nội, Việt Nam",
        "longitude": 105.812301858719,
        "latitude": 21.0318760991251,
      },
      "duration": 1,
      "description":
        "Làng gốm Bát Tràng nằm ở ven sông Hồng, thuộc huyện Gia Lâm ngoại thành Hà Nội. Cái tên Bát Tràng có nghĩa là “cái sân lớn”, và làng có lịch sử hình thành từ thời Lê. Đây là làng gốm lâu đời nổi tiếng nhất ở Việt Nam, cũng như là địa điểm mà du khách trong và ngoài nước không thể không một lần ghé thăm. Làng gốm Bát Tràng chuyên sản xuất những loại gốm sứ đa dạng cả về chủng loại lẫn kiểu dáng. Điều thú vị nhất khi đến Bát Tràng là các bạn có thể trực tiếp ngắm nhìn các nghệ nhân làm ra những sản phẩm gốm đầy tinh tế hay được tự tay nặn những sản phẩm theo ý thích.",
      "reviewStar": 4.7,
      "reviewNumber": 591,
      "price": 495000,
      "imageName": "Tour du lịch Làng gốm Bát Tràng – Thành Cổ Loa",
      "imageUrl":
        "https://dulichbennghe.vn/wp-content/uploads/2020/03/du-lich-ben-nghe-ha-noi-bat-trang.jpg",
      "note": "Gía trên chưa bao gồm khách sạn",
      "content":
        "NGÀY 1 | HÀ NỘI - LÀNG GỐM BÁT TRÀNG - THÀNH CỔ LOA (Ăn trưa)\n– Buổi sáng: Xe đón khách tại điểm hẹn, khởi hành Tour du lịch Làng gốm Bát Tràng – Thành Cổ Loa.\n+ Xe đưa khách đi tham quan Làng Gốm Bát Tràng (nghề làm gốm có từ thế kỷ 15 và hiện nay đã được xuất khẩu khắp thế giới).\n+ Tiếp theo quý khách tiếp tục tham quan Thành Cổ Loa và đền thờ An Dương Vương, nơi được coi là thủ đô thứ hai của Việt Nam được xây dựng từ thế kỷ 3 trước Công Nguyên là một công trình phòng ngự chống giặc ngoại xâm nổi tiếng của dân tộc ta.\n+ Đoàn dùng cơm trưa tại nhà hàng.\n– Buổi chiều: Xe đưa quý khách trở về Hà Nội. Về đến điểm đón ban đầu, Du Lịch Bến Nghé chia tay, kết thúc Tour du lịch Làng gốm Bát Tràng – Thành Cổ Loa.",
    },
    {
      "tourId": 11,
      "tourName": "Tour du lịch TP Hồ Chí Minh – Địa đạo Củ Chi 1 ngày",
      "location": {
        "locationCode": "hochiminh",
        "locationName": "Hồ Chí Minh",
        "province": "Hồ Chí Minh",
        "longitude": 106.630646177225,
        "latitude": 10.8207685321832,
      },
      "categoryCode": "tourdoan",
      "hotel": {
        "hotelCode": "skyGemCentral",
        "hotelName": "Khách sạn Sky Gem Central",
        "hotelprice": 1700000,
        "locationCode": "hochiminh",
        "address":
          "26-28 Đông Du, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
        "longitude": 106.705229317659,
        "latitude": 10.7769781740253,
      },
      "duration": 1,
      "description":
        "Nhắc tới Sài Gòn người ta thường nghĩ tới một thành phố hiện đại, nhộn nhịp bậc nhất cả nước mà ít ai nhớ rằng Sài Gòn cũng mang nhiều dấu ấn lịch sử của riêng mình, đặc biệt là các bảo tàng ghi dấu lại những chiến tích anh hùng của dân tộc, hay về phương thức sinh hoạt hay tôn giáo của người dân bản địa từ Bảo tàng chiến tích chiến tranh, chùa Thiên Hậu,…Công ty xin giới thiệu đến quý khách tour du lịch TP Hồ Chí Minh – Địa đạo Củ Chi 1 ngày, tiết kiệm thời gian để quý khách hiểu về Sài Gòn xưa và nay cũng như đến Củ Chi – nơi ghi dấu ấn lịch sử vang dội của Sài Gòn. Địa đạo Củ Chi nằm cách trung tâm Sài Gòn khoảng 70 km. Đây là nơi thu nhỏ lại trận đồ biến hóa của quân và dân Củ Chi trong cuộc kháng chiến chống suốt 30 năm đem lại độc lập tự do cho tổ quốc.\n",
      "reviewStar": 4.9,
      "reviewNumber": 512,
      "price": 765000,
      "imageName": "Tour du lịch TP Hồ Chí Minh – Địa đạo Củ Chi 1 ngày",
      "imageUrl":
        "https://dulichbennghe.vn/wp-content/uploads/2020/03/DIA-DAO-CU-CHI.png",
      "note": "Gía trên chưa bao gồm khách sạn",
      "content":
        "NGÀY 1 | THAM QUAN TP HỒ CHÍ MINH - ĐỊA ĐẠO CỦ CHI (Ăn sáng, trưa)\nBUỔI SÁNG: THAM QUAN TP HỒ CHÍ MINH\n08h00: Xe và hướng dẫn Công ty Du Lịch Bến Nghé đón đoàn tại điểm hẹn, khởi hành tham quan Hồ Chí Minh các địa điểm sau:\n+ Bảo tàng chiến tranh: nơi lưu giữ những chiến tích anh hùng của dân tộc, những quá khứ của chiến tranh. Những hiện vật, những hình ảnh còn sót lại như những bằng chứng đanh thép tố cáo tội ác của bọn thực dân xâm lược, đồng thời phản ánh ý chí chiến đấu, chiến thắng để giành lại độc lập dân tộc của nhân dân ta. Nơi đây như một khoảng lặng lịch sử yên ắng giữa Sài Gòn náo nhiệt.\n+ Chợ Bình Tây: còn được biết với tên gọi là Chợ Lớn Mới được xây dựng vào những năm 20 của thế kỷ XX với tuổi đời đã gần 100 năm, nằm tại quận 6, thành phố Hồ Chí Minh. Hiện nay, chợ tới 2300 quầy sạp, kinh doanh hơn 30 mặt hàng khác nhau, chủ yếu là các loại gia vị, bánh, mứt, quần áo, giày dép, đồ gia dụng…được chia thành 5 khu vực rõ rệt. Du khách sẽ không khỏi choáng ngợp với các hàng hóa da dạng tại đây. Có thể mua sắm hàng hóa lưu niệm, hoặc thưởng thức các loại đặc sản không chỉ ở Sài Gòn mà còn trên các vùng miền của đất nước.\n+ Chùa Thiên Hậu: mang màu sắc cổ kính giữa lòng Sài Gòn náo nhiệt. Ngôi chùa hơn 200 năm tuổi này là một chốn linh thiêng giữa đất Sài Gòn phồn hoa, nhắc nhở người ta tìm về chốn bình yên, thanh bình để cầu phước lành cho gia đình và những người yêu thương. Nơi đây biểu hiện nét đẹp văn hóa tâm linh của người Sài Gòn và cả du khách thập phương đến chiêm bái.\n12h00: Quý khách vào nhà hàng dùng bữa trưa, nghỉ ngơi. Sau đó đoàn tiếp tục khởi hành đến tham quan địa đạo Củ Chi.\nBUỔI CHIỀU: THAM QUAN ĐỊA ĐẠO CỦ CHI\n13h30: Đoàn đến địa đạo nghe thuyết minh về lịch sử hào hùng và công sức của cha ông trong quá trình kháng chiến. Địa đạo Củ Chi có chiều dài lên đến khoảng 250 km, từ đường “xương sống” địa đạo tỏa rộng như mạng nhện trong lòng đất, bao gồm các công trình: đường hầm, chiến hào, ụ, ổ chiến đấu, hầm ăn, ngủ, hội họp, bếp, giếng nước, kho dự trữ…Các công trình ăn thông với nhau hoặc có thể độc lập chấm dứt tùy địa hình, du khách sẽ không khỏi bất ngờ khi trực tiếp tham quan công trình vĩ đại này và chiến đấu ở địa đạo và được xem những thước phim tài liệu quý báu về chiến tranh, về cách mà quân dân Việt Nam đã chiến thắng vũ khí hiện đại tân tiến chỉ với ý chí dân tộc.\nNgoài ra Quý khách sau khi tham quan còn được thưởng thức món ăn đặc sản “Khoai mì Củ chi”, 1 món ăn đã tồn tại suốt trong thời kỳ gian nan kháng chiến của dân tộc Việt Nam anh hùng. Được tận mắt chứng kiến những vũ khí thô sơ tự chế, bẫy chông bằng tre…, bò trườn trong các đường địa đạo, và xem người dân địa phương làm bánh tráng và rượu gạo.\nĐoàn khởi hành về lại TP Hồ Chí Minh, HDV chia tay và hẹn gặp lại quý khách.",
    },
    {
      "tourId": 12,
      "tourName": "Tour du lịch Trăng mật Đà Nẵng – Hội An 4 ngày",
      "location": {
        "locationCode": "hoian",
        "locationName": "Hội An ",
        "province": "Quảng Nam",
        "longitude": 108.338793241682,
        "latitude": 15.8809695388562,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "laSiestaHoiAn",
        "hotelName": "La Siesta Hoi An Resort & Spa",
        "hotelprice": 1700000,
        "locationCode": "hoian",
        "address": "134 Hùng Vương, Thanh Hà, Hội An, Tỉnh Quảng Nam, Việt Nam",
        "longitude": 108.316389810452,
        "latitude": 15.8800239513171,
      },
      "duration": 4,
      "description":
        "Đôi khi, tình yêu không chỉ là cảm giác được nhìn thấy nhau, mà còn là cảm giác được cùng nhau nhìn và cảm nhận cuộc sống xung quanh theo đúng nghĩa của nó. Hãy làm cho tình yêu của bạn thăng hoa với những giờ phút tuyệt vời tại những bãi biển đẹp nhất miền Trung. Công ty du lịch Bến Nghé sẽ là người đồng hành tin cậy của bạn, chúng tôi xin được giới thiệu tour du lịch Trăng mật Đà Nẵng – Hội An 4 ngày 3 đêm.",
      "reviewStar": 4.9,
      "reviewNumber": 213,
      "price": 8100000,
      "imageName": "Tour du lịch Trăng mật Đà Nẵng – Hội An 4 ngày",
      "imageUrl":
        "https://dulichbennghe.vn/wp-content/uploads/2022/02/Hoi-An.png",
      "note": " Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HỒ CHÍ MINH – HỘI AN\nThiên đường tình yêu của bạn sẽ là một trong những khu Resort đẹp nhất miền Trung: Hội An Beach Resort ****.\nChỉ ngay khi đặt chân vào khu nghỉ dưỡng này, bạn sẽ ngạc nhiên bởi một không gian tràn ngập màu xanh, màu của cỏ cây, của sự sống và của biển trời vô tận.\nĐón chào đôi uyên ương tại sảnh sẽ là những nhân viên phục vụ nhiệt tình – tất nhiên rồi – và bất ngờ hơn, sẽ là một chai rượu vang được bật nắp để đón chào đôi uyên ương, chúc cho đôi bạn có một kỳ nghỉ thi vị đầy ngọt ngào và hạnh phúc trăm năm.\nNhưng đó chưa phải là tất cả, căn phòng tân hôn tràn ngập trong mùi hương nồng nàn của hoa hồng được trang trí tựa như những cung bậc trầm bổng của tình yêu. Khi màn đêm buông, bươc trong không gian tràn ngập ánh sáng lung linh đèn lồng của phố Hội, bạn đừng bỏ lỡ cơ hội cùng người ấy thắp lên chiếc đèn hoa đăng, thả trôi theo dòng sông Thu Bồn và thầm cầu nguyện cho những ước vọng tình yêu vĩnh cửu.\nNGÀY 2 | HỘI AN HOẶC BIỂN CỬA ĐẠI\nSau bữa sáng tự chọn tại khách sạn, đôi bạn có thể lựa chọn chương trình thăm Phố cổ Hội An trong nửa ngày, hoặc nghỉ ngơi tắm biển Cửa Đại.\nVới chiếc xe đạp tình yêu, đôi bạn sẽ có những phút giây thật ngọt ngào khi tự mình khám phá những góc phố nhỏ Hội An, những con phố uốn mình ôm lấy dòng sông phẳng lặng.\nBạn sẽ không thể quên những giờ phút khó quên với người ấy khi được cùng nhau sống trong không gian tình yêu của hoa và nếm vị ngọt ngào của những loại quả nhiệt đới và ấm ngọt của rượu vang. Một thiên đường hiện hữu thật sự!\n NGÀY 3 | TỰ DO KHÁM PHÁ QUẢNG NAM\nTỉnh dậy sau một ngày khám phá Hội An, bạn hãy lựa chọn bữa sáng cho riêng mình tại khách sạn. Mua tour riêng để tham quan thánh địa Mỹ Sơn, Cù lao Chàm hay cùng thong thả đạp xe dọc bãi biển Cửa Đại, đó sẽ là những lựa chọn cho riêng đôi bạn trong khoảng thời gian này.\nRất có thể, những khám phá mới về thiên nhiên và con người nơi di sản thế giới này sẽ đem đến cho hai bạn những cảm nhận hoàn toàn khác về cuộc sống. Và được khám phá những khoảng lặng của mình và người thân, còn gì tuyệt vời hơn nữa.\nNGÀY 4 | ĐÀ NẴNG - TP HỒ CHÍ MINH\nSau bữa điểm tâm sáng tại khách sạn, hai bạn làm thủ tục trả phòng. Xe của chúng tôi đã chờ sẵn hai bạn ngoài sảnh, đưa hai bạn ra sân bay làm thủ tục đáp chuyến bay về TP. HCM, kết thúc tour du lịch Trăng mật Đà Nẵng – Hội an 4 ngày.\n",
    },
    {
      "tourId": 13,
      "tourName": "Tour du lịch khám phá đảo ngọc Phú Quốc",
      "location": {
        "locationCode": "phuquoc",
        "locationName": "Phú Quốc",
        "province": "Kiên Giang",
        "longitude": 103.981447502507,
        "latitude": 10.2889499576163,
      },
      "categoryCode": "tourdoan",
      "hotel": {
        "hotelCode": "vinOasis",
        "hotelName": "VinOasis Phu Quoc",
        "hotelprice": 1300000,
        "locationCode": "phuquoc",
        "address":
          "Bãi Dài, Gành Dầu, xã Gành Dầu, Phú Quốc, Tỉnh Kiên Giang, Việt Nam",
        "longitude": 103.855561156888,
        "latitude": 10.329918192594,
      },
      "duration": 3,
      "description":
        "Đến với tour Phú Quốc 3 ngày 2 đêm Quý khách sẽ tham quan những điểm đến hấp dẫn, thưởng thức các món ăn đặc sản nơi đây. Phú Quốc sẽ mang đến những trải nghiệm tuyệt vời của Quý du khách mà ít nơi đâu có được với biển xanh, cát trắng, nắng vàng.",
      "reviewStar": 4.6,
      "reviewNumber": 813,
      "price": 7450000,
      "imageName": "Tour du lịch khám phá đảo ngọc Phú Quốc",
      "imageUrl":
        "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/w_800/activities/ploi3m2erhrzy6appq48.webp",
      "note": " Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HỒ CHÍ MINH – PHÚ QUỐC (Ăn trưa, tối)\n– Buổi sáng: Xe và hướng dẫn viên của Du Lịch Bến Nghé đón quý khách tại sân bay Tân Sơn Nhất, đáp chuyến bay đi Phú Quốc, khởi hành tour du lịch Phú Quốc.\n– Xe đón quý khách về khách sạn nhận phòng, tắm biển.\n– Buổi chiều: Xe đưa quý khách khởi hành tham quan Đông Đảo:\n+ Làng chài Hàm Ninh: một ngôi làng cổ của đảo vẫn còn tồn tại cho đến ngày nay, khách có thể mua và thưởng thức hải sản tươi sống, quà lưu niệm, hải sản khô.\n+ Suối Tranh: Du khách khám phá rừng nguyên sinh, leo núi, tắm suối và tận hưởng làn nước trong mát của con suối bắt nguồn từ dãy núi Hàm Ninh.\n+ Khu vườn tiêu Suối Đá: tìm hiểu về cách trồng tiêu tại vườn. Tiêu Phú Quốc nổi tiếng với hạt to, đen và cay thơm. Du khách có thể mua tiêu về làm quà tại nhà vườn.\n+ Nhà thùng nước mắm Khải Hoàn: Tìm hiểu cách chế biến nước mắm cá cơm rất nổi tiếng trong và ngoài nước theo cách làm truyền thống của người dân Phú Quốc với hàm lượng dinh dưỡng rất cao.\n+ Rượu sim: loại rượu vang làm từ trái sim rừng chín. Gặp gỡ và trò chuyện với người đầu tiên chế biến ra rượu sim sơn tại cơ sở sản xuất rượu sim Bảy Gáo.\n+ Chùa Sư Muôn: Ngôi chùa cổ xinh đẹp với không gian thoáng mát, thanh tịnh.\n+ Trên đường về, đoàn ghé tham quan Dinh Cậu, biểu tượng văn hóa, tín ngưỡng của ngư dân Phú Quốc.\n+ Tham quan trang trại nuôi Ong mật\n– Buổi tối: Quý khách dùng cơm tối, tự do thư giãn hoặc khám phá Đảo Ngọc về đêm, tham quan chợ đêm Dinh Cậu, mua những món quà nhỏ để lưu dấu kỷ niệm du lich Phú Quốc.\nNGÀY 2 | KHÁM PHÁ ĐẢO NGỌC PHÚ QUỐC (Ăn sáng, trưa, tối)\nNGÀY 3 | PHÚ QUỐC - TP. HỒ CHÍ MINH (Ăn sáng)\nDịch vụ bao gồm và không bao gồm\nGIÁ TOUR BAO GỒM\n– Vận chuyển: Xe đời mới, máy lạnh đưa đón tham quan suốt chương trình.\n– Khách sạn: Tiêu chuẩn 2 khách/phòng.\n+ Hotel 2 sao: Galaxy, Gold Beach, Trường Thịnh, Phú Hồng,…\n+ Khách sạn 3 sao: Lam Hà, Nice Life, Lê Vân,…\n+ Resort 3 sao: Orange, Sea Star\n+ Khách sạn 4 sao: Ocean Pearl\n+ Khách sạn 5 sao: Thiên Thanh\n– Ăn uống: Khách được lo ăn theo chương trình từ trưa ngày đi đến sáng ngày về, bao gồm: 2 bữa sáng, 2 bữa trưa, 2 bữa tối. Quý khách sẽ dùng đặc sản địa phương khi đoàn đến, thực đơn được thay đổi từng bữa.\n– Hướng dẫn viên: Thuyết minh và phục vụ ăn, nghỉ, tham quan cho Quý khách.\n– Tham quan: Vé vào cửa tất cả các điểm tham quan theo chương trình. Chi phí câu cá, lặn ngắm san hô.\n– Bảo hiểm: Bảo hiểm du lịch trọn gói suốt tour.\n– Quà tặng: Nón du lịch Bến Nghé.\n– Dịch vụ khác: Khăn lạnh, nước suối theo chương trình.",
    },
    {
      "tourId": 14,
      "tourName": "Tour du lịch Phú Quốc – Vinpearl Safari",
      "location": {
        "locationCode": "phuquoc",
        "locationName": "Phú Quốc",
        "province": "Kiên Giang",
        "longitude": 103.981447502507,
        "latitude": 10.2889499576163,
      },
      "categoryCode": "tourcanhan",
      "hotel": {
        "hotelCode": "mangoBay",
        "hotelName": "Mango Bay Resort",
        "hotelprice": 1700000,
        "locationCode": "phuquoc",
        "address":
          "Bãi Biển Ông Lãng, xã Cửa Dương, Phú Quốc, Tỉnh Kiên Giang, Việt Nam",
        "longitude": 103.935697104739,
        "latitude": 10.2585654286318,
      },
      "duration": 3,
      "description":
        "Không chỉ tắm biển thuần túy, chương trình tour du lịch Phú Quốc – Vinpearl Safari còn đưa du khách đến với “Vương quốc động vật hoang dã” Vinpearl Safari. Hành trình hứa hẹn sẽ mang đến cho du khách những kỉ niệm tuyệt vời nhất.",
      "reviewStar": 3.5,
      "reviewNumber": 124,
      "price": 5850000,
      "imageName": "Tour du lịch Phú Quốc – Vinpearl Safari",
      "imageUrl":
        "https://dulichbennghe.vn/wp-content/uploads/2020/03/du-lich-ben-nghe-du-lich-phu-quoc2.jpg",
      "note": " Chương trình trọn gói, không được áp dụng chính sách miễn giảm, ưu tiên vào điểm tham quan (nếu có) dành cho trẻ em, người cao tuổi, người có công với cách mạng  vì vậy công ty sẽ không hoàn lại phần chênh lệch cho các khách hàng thuộc diện ưu tiên này.",
      "content":
        "NGÀY 1 | TP.HỒ CHÍ MINH – PHÚ QUỐC (Ăn trưa, tối)\n– Buổi sáng: Xe và hướng dẫn viên của Du Lịch Bến Nghé đón quý khách tại sân bay Tân Sơn Nhất, đáp chuyến bay đi Phú Quốc, khởi hành tour du lịch Phú Quốc.\n– Xe đón quý khách về khách sạn nhận phòng, tắm biển.\n– Buổi chiều: Xe đưa quý khách khởi hành tham quan Đông Đảo:\n+ Làng chài Hàm Ninh: một ngôi làng cổ của đảo vẫn còn tồn tại cho đến ngày nay, khách có thể mua và thưởng thức hải sản tươi sống, quà lưu niệm, hải sản khô.\n+ Suối Tranh: Du khách khám phá rừng nguyên sinh, leo núi, tắm suối và tận hưởng làn nước trong mát của con suối bắt nguồn từ dãy núi Hàm Ninh.\n+ Khu vườn tiêu Suối Đá: tìm hiểu về cách trồng tiêu tại vườn. Tiêu Phú Quốc nổi tiếng với hạt to, đen và cay thơm. Du khách có thể mua tiêu về làm quà tại nhà vườn.\n+ Nhà thùng nước mắm Khải Hoàn: Tìm hiểu cách chế biến nước mắm cá cơm rất nổi tiếng trong và ngoài nước theo cách làm truyền thống của người dân Phú Quốc với hàm lượng dinh dưỡng rất cao.\n+ Rượu sim: loại rượu vang làm từ trái sim rừng chín. Gặp gỡ và trò chuyện với người đầu tiên chế biến ra rượu sim sơn tại cơ sở sản xuất rượu sim Bảy Gáo.\n+ Chùa Sư Muôn: Ngôi chùa cổ xinh đẹp với không gian thoáng mát, thanh tịnh.\n+ Trên đường về, đoàn ghé tham quan Dinh Cậu, biểu tượng văn hóa, tín ngưỡng của ngư dân Phú Quốc.\n+ tham quan trang trại nuôi Ong mật\n– Buổi tối: Quý khách dùng cơm tối, tự do thư giãn hoặc khám phá Đảo Ngọc về đêm, tham quan chợ đêm Dinh Cậu, mua những món quà nhỏ để lưu dấu kỷ niệm du lich Phú Quốc.\nNGÀY 2 | KHÁM PHÁ ĐẢO NGỌC PHÚ QUỐC (Ăn sáng, trưa, tối)\n– Buổi sáng: Quý khách dùng điểm tâm, sau đó xe đưa khách bắt đầu khám phá Nam Đảo Ngọc:\n+ Ngọc Trai Việt Nhật: Khu liên doanh nuôi cấy ngọc trai cao cấp tại du lịch Phú Quốc. Nơi ra đời những viên ngọc trai tuyệt đẹp.\n+ Nhà lao cây dừa: còn lưu lại tội ác chiến tranh của đế quốc Mỹ tại “địa ngục trần gian” Phú Quốc.\n+ Cơ sở sản xuất chế biến khô.\n+ Quý khách tham quan Bãi Sao, một trong những bãi biển đẹp nhất Phú Quốc với bãi cát trắng, mịn, dài thẳng tắp, du khách sẽ được đắm mình trong làn nước biển xanh mát.\n– Buổi chiều: Xe đưa quý khách đến Vinpearl Safari, một trong những vườn thú bán hoang dã đầu tiên tại Việt Nam với hàng trăm loài động vật quý hiếm được đưa từ về từ nhiều quốc gia khác nhau trên thế giới.\n– Buổi tối: Đoàn dùng cơm tối, tự túc khám phá hoặc có thể tham gia chương trình thẻ mực.\nNGÀY 3 | PHÚ QUỐC - TP. HỒ CHÍ MINH (Ăn sáng)\n– Buổi sáng: Quý khách dùng điểm tâm, tự do mua sắm tại chợ Dương Đông. Đoàn trả phòng khách sạn, xe đưa quý khách ra sân bay Phú Quốc đáp chuyến bay về lại TP.HCM.\n– Buổi trưa: Đến sân bay Tân Sơn Nhất, chia tay đoàn, kết thúc tour du lịch Phú Quốc.",
    },
  ],
  "locations": [
    {
      "locationCode": "cantho",
      "locationName": "Cần Thơ",
      "province": "Cần Thơ",
      "longitude": 105.745553490247,
      "latitude": 10.0451722450781,
    },
    {
      "locationCode": "dalat",
      "locationName": "Đà Lạt",
      "province": "Lâm Đồng",
      "longitude": 108.449690479941,
      "latitude": 11.9395094744159,
    },
    {
      "locationCode": "danang",
      "locationName": "Đà Nẵng",
      "province": "Đà Nẵng",
      "longitude": 108.198804955923,
      "latitude": 16.0544154754518,
    },
    {
      "locationCode": "hanoi",
      "locationName": "Hà Nội",
      "province": "Hà Nội",
      "longitude": 105.833616166698,
      "latitude": 21.0278661449005,
    },
    {
      "locationCode": "hochiminh",
      "locationName": "Hồ Chí Minh",
      "province": "Hồ Chí Minh",
      "longitude": 106.630646177225,
      "latitude": 10.8207685321832,
    },
    {
      "locationCode": "hoian",
      "locationName": "Hội An",
      "province": "Quảng Nam",
      "longitude": 108.338793241682,
      "latitude": 15.8809695388562,
    },
    {
      "locationCode": "hue",
      "locationName": "Huế",
      "province": "Thừa Thiên Huế",
      "longitude": 107.592733828638,
      "latitude": 16.46310058441,
    },
    {
      "locationCode": "phuquoc",
      "locationName": "Phú Quốc",
      "province": "Kiên Giang",
      "longitude": 103.981447502507,
      "latitude": 10.2889499576163,
    },
    {
      "locationCode": "sapa",
      "locationName": "Sapa",
      "province": "Lào Cai",
      "longitude": 103.844146590239,
      "latitude": 22.3362577430111,
    },
  ],
  "hotels": [
    {
      "hotelCode": "aceSaiGon",
      "hotelName": "ACE Hotel Saigon",
      "hotelprice": 1300000,
      "locationCode": "hochiminh",
      "address":
        "139H Nguyễn Trãi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      "longitude": 106.690195511486,
      "latitude": 10.7689649321798,
    },
    {
      "hotelCode": "azeraiCanTho",
      "hotelName": "Azerai Can Tho Resort",
      "hotelprice": 1200000,
      "locationCode": "cantho",
      "address":
        "Thửa đất 4,  Cồn Ấu, Phường Hưng Phú, Hưng Phú, Cái Răng, Thành phố Cần Thơ, Việt Nam",
      "longitude": 105.794372165723,
      "latitude": 10.0400629961284,
    },
    {
      "hotelCode": "caravelle",
      "hotelName": "Khách sạn Caravelle Sài Gòn",
      "hotelprice": 1300000,
      "locationCode": "hochiminh",
      "address":
        "19 - 23 Công Trường Lam Sơn, Phường Bến Nghé, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      "longitude": 106.703612524351,
      "latitude": 10.7762651691411,
    },
    {
      "hotelCode": "casaEco",
      "hotelName": "Casa Eco Mekong Farmstay",
      "hotelprice": 1300000,
      "locationCode": "cantho",
      "address":
        "77, Quốc Lộ 91B, phường Thới An Đông, Bình Thủy, Thành phố Cần Thơ, Việt Nam",
      "longitude": 105.704910784141,
      "latitude": 10.0604754063773,
    },
    {
      "hotelCode": "golfValley",
      "hotelName": "Golf Valley Hotel",
      "hotelprice": 1200000,
      "locationCode": "dalat",
      "address": "94 Đường Bùi Thị Xuân, Phường 2, Thành phố Đà Lạt, Lâm Đồng",
      "longitude": 108.44059810439,
      "latitude": 11.9475545595852,
    },
    {
      "hotelCode": "irisCanTho",
      "hotelName": "Iris Hotel Can Tho",
      "hotelprice": 1100000,
      "locationCode": "cantho",
      "address":
        "224 Đường 30 tháng 4, Xuân Khánh, Xuân Khánh, Ninh Kiều, Thành phố Cần Thơ, Việt Nam",
      "longitude": 105.776134084141,
      "latitude": 10.0268597221777,
    },
    {
      "hotelCode": "islandLodge",
      "hotelName": "Island Lodge Phu Quoc",
      "hotelprice": 1200000,
      "locationCode": "phuquoc",
      "address":
        "Ấp 2, Xã Ông Lang, xã Cửa Dương, Phú Quốc, Tỉnh Kiên Giang, Việt Nam",
      "longitude": 103.938877082649,
      "latitude": 10.2679626636744,
    },
    {
      "hotelCode": "laAnHoiAn",
      "hotelName": "La An Central Boutique Villa",
      "hotelprice": 1300000,
      "locationCode": "hoian",
      "address": "9 Ngô Quyền, Minh An, Hội An, Tỉnh Quảng Nam, Việt Nam",
      "longitude": 108.328059453837,
      "latitude": 15.8747922265625,
    },
    {
      "hotelCode": "laSiestaHoiAn",
      "hotelName": "La Siesta Hoi An Resort & Spa",
      "hotelprice": 1700000,
      "locationCode": "hoian",
      "address": "134 Hùng Vương, Thanh Hà, Hội An, Tỉnh Quảng Nam, Việt Nam",
      "longitude": 108.316389810452,
      "latitude": 15.8800239513171,
    },
    {
      "hotelCode": "lotteHanoi",
      "hotelName": "Lotte Hotel Hanoi",
      "hotelprice": 1700000,
      "locationCode": "hanoi",
      "address": "Số 54 Liễu Giai, Cống Vị, Quận Ba Đình, Hà Nội, Việt Nam",
      "longitude": 105.812301858719,
      "latitude": 21.0318760991251,
    },
    {
      "hotelCode": "mangoBay",
      "hotelName": "Mango Bay Resort",
      "hotelprice": 1700000,
      "locationCode": "phuquoc",
      "address":
        "Bãi Biển Ông Lãng, xã Cửa Dương, Phú Quốc, Tỉnh Kiên Giang, Việt Nam",
      "longitude": 103.935697104739,
      "latitude": 10.2585654286318,
    },
    {
      "hotelCode": "mtgDaNang",
      "hotelName": "Muong Thanh Grand Da Nang Hotel",
      "hotelprice": 2000000,
      "locationCode": "danang",
      "address": "962 Ngô Quyền, An Hải Tây, Sơn Trà, Đà Nẵng, Việt Nam",
      "longitude": 108.233083062084,
      "latitude": 16.0648754706147,
    },
    {
      "hotelCode": "mthHoiAn",
      "hotelName": "Muong Thanh Holiday Hoi An Hotel",
      "hotelprice": 1200000,
      "locationCode": "hoian",
      "address":
        "9 Phước Trạch, Phước Hải, Âu Cơ, Cửa Đại, Hội An, Tỉnh Quảng Nam, Việt Nam",
      "longitude": 108.372005269181,
      "latitude": 15.8927557451516,
    },
    {
      "hotelCode": "pullmanHaNoi",
      "hotelName": "Pullman Hanoi Hotel",
      "hotelprice": 1200000,
      "locationCode": "hanoi",
      "address": "40 Str Entrance, Cát Linh/61, Giảng Võ, Hà Nội",
      "longitude": 105.82871919771,
      "latitude": 21.0299670190008,
    },
    {
      "hotelCode": "skyGemCentral",
      "hotelName": "Khách sạn Sky Gem Central",
      "hotelprice": 1700000,
      "locationCode": "hochiminh",
      "address":
        "26-28 Đông Du, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      "longitude": 106.705229317659,
      "latitude": 10.7769781740253,
    },
    {
      "hotelCode": "sojoGaHaNoi",
      "hotelName": "SOJO Ga Hanoi",
      "hotelprice": 1300000,
      "locationCode": "hanoi",
      "address": "115 Trần Hưng Đạo, Cửa Nam, Quận Hoàn Kiếm, Hà Nội, Việt Nam",
      "longitude": 105.84157372504,
      "latitude": 21.0239342175813,
    },
    {
      "hotelCode": "spaMikazuki",
      "hotelName": "Khu nghỉ dưỡng và Spa Mikazuki Nhật Bản",
      "hotelprice": 1900000,
      "locationCode": "danang",
      "address":
        "Đường Nguyễn Tất Thành,Phường Hòa Hiệp Nam, Hòa Hiệp Nam, Liên Chiểu, Đà Nẵng, Việt Nam",
      "longitude": 108.146085656563,
      "latitude": 16.0944807956342,
    },
    {
      "hotelCode": "terracottaDaLat",
      "hotelName": "Terracotta Hotel & Resort Đà Lạt",
      "hotelprice": 1500000,
      "locationCode": "dalat",
      "address":
        "Phân khu chức năng 7.9, KDL hồ Tuyền Lâm, Phường 3, Đà Lạt, Tỉnh Lâm Đồng, Việt Nam",
      "longitude": 108.438010882302,
      "latitude": 11.8951446544838,
    },
    {
      "hotelCode": "theLuxeDalat",
      "hotelName": "The Luxe Hotel",
      "hotelprice": 1200000,
      "locationCode": "dalat",
      "address": "17-17Bis 3/4 , Phường 3, Đà Lạt, Tỉnh Lâm Đồng, Việt Nam",
      "longitude": 108.447023699819,
      "latitude": 11.9301942907585,
    },
    {
      "hotelCode": "vinOasis",
      "hotelName": "VinOasis Phu Quoc",
      "hotelprice": 1300000,
      "locationCode": "phuquoc",
      "address":
        "Bãi Dài, Gành Dầu, xã Gành Dầu, Phú Quốc, Tỉnh Kiên Giang, Việt Nam",
      "longitude": 103.855561156888,
      "latitude": 10.329918192594,
    },
    {
      "hotelCode": "zaloSea",
      "hotelName": "Khách sạn Zalo Sea",
      "hotelprice": 1700000,
      "locationCode": "danang",
      "address": "36 Mỹ Khê 4, Phước Mỹ, Sơn Trà, Đà Nẵng, Việt Nam, 550000",
      "longitude": 108.245741399521,
      "latitude": 16.0569911949293,
    },
  ],
};

const handler: Handler = async (
  event: HandlerEvent,
  _context: HandlerContext
) => {

  if(event.httpMethod === "PATCH") {
    if(event.body) {
      const params = JSON.parse(event.body);
      const { tourId, hotel } = params;
      if (tourId) {
        for(const tour of data.tours) {
          if(tour.tourId === tourId) {
            const redundancy = tour.price - tour.hotel.hotelprice;
            const price = hotel.hotelprice + redundancy;
            tour.hotel = hotel;
            tour.price = price;
            break;
          }
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
