export const smallRoomCards = [
  {
    slug: "trinh-chieu-co-day",
    title: "Trình chiếu có dây",
    desc: "Kết nối laptop qua HDMI",
    icon: "Cable",
    steps: [
      "Lấy cáp HDMI trên bàn họp",
      "Cắm cáp HDMI vào laptop",
      "Chuyển nguồn TV sang HDMI tương ứng",
    ],
    detailSteps: [
      "Lấy cáp HDMI đặt sẵn trên bàn hoặc trong ngăn kéo bàn họp.",
      "Cắm đầu cáp vào cổng HDMI hoặc USB-C (dùng adapter) của laptop.",
      "Nhấn nút 'Source' trên remote TV và chọn 'HDMI 1'.",
      "Laptop sẽ tự động nhận nguồn HDMI.",
    ],
  },
  {
    slug: "trinh-chieu-khong-day",
    title: "Trình chiếu không dây",
    desc: "Kết nối laptop qua ClickShare",
    icon: "Cast",
    steps: [
      "Cắm USB ClickShare vào laptop",
      "Chờ thiết bị tự nhận diện và kết nối",
      "Bấm nút ClickShare để chia sẻ màn hình",
    ],
    detailSteps: [
      "Lấy ClickShare Button tại giá đỡ trên bàn.",
      "Cắm vào cổng USB-A hoặc USB-C của laptop (dùng adapter USB-C nếu cần).",
      "Chờ đèn trên Button chuyển sang trắng — phần mềm sẽ tự cài.",
      "Nhấn nút tròn để bắt đầu chia sẻ màn hình. Đèn xanh = đang chiếu.",
      "Nhấn lại nút tròn để dừng chia sẻ.",
    ],
  },
  {
    slug: "hop-video",
    title: "Họp Teams / Zoom",
    desc: "Dùng webcam USB và loa TV cho cuộc họp",
    icon: "Webcam",
    steps: [
      "Cắm webcam USB vào laptop",
      "Mở Teams hoặc Zoom và chọn webcam vừa cắm",
      "Chọn loa TV làm audio output",
    ],
    detailSteps: [
      "Cắm webcam USB vào cổng USB trên laptop hoặc hub bàn họp.",
      "Mở Microsoft Teams hoặc Zoom.",
      "Vào Settings → Devices/Video và chọn 'USB Webcam' từ danh sách camera.",
      "Microphone: chọn 'USB Webcam Mic' hoặc micro rời nếu có.",
      "Speaker: chọn 'TV / HDMI Audio' để âm thanh phát qua loa TV.",
    ],
  },
  {
    slug: "am-thanh",
    title: "Điều chỉnh âm thanh",
    desc: "Tăng giảm âm lượng loa TV hoặc loa ngoài",
    icon: "Volume2",
    steps: [
      "Dùng remote TV để điều chỉnh âm lượng",
      "Tắt tiếng khi cần bằng nút Mute trên remote",
    ],
    detailSteps: [
      "Âm lượng loa TV: dùng nút Volume +/− trên remote TV.",
      "Tắt tiếng nhanh: nhấn nút Mute trên remote TV.",
      "Nếu âm thanh từ cuộc họp online bị vọng: giảm volume TV xuống hoặc dùng tai nghe.",
    ],
  },
  {
    slug: "ho-tro",
    title: "Gọi hỗ trợ kỹ thuật",
    desc: "Liên hệ bộ phận AV/IT khi cần hỗ trợ",
    icon: "Phone",
    steps: [
      "Hotline nội bộ: 0853134368",
    ],
    detailSteps: [
      "Hotline nội bộ: gọi số 0853134368 (phục vụ giờ hành chính 8:00–17:30, thứ Hai–Sáu).",
      "Ngoài giờ hành chính: nhắn tin qua Zalo.",
    ],
  },
];
