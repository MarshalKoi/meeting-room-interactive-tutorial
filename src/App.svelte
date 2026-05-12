<script lang="ts">
  type Card = {
    title: string;
    desc: string;
    icon: string;
    steps: string[];
  };

  let activeMenu = $state<number | null>(null);

  const cards: Card[] = [
    {
      title: "Bắt đầu nhanh",
      desc: "Khởi động hệ thống phòng họp trong 30 giây",
      icon: "🚀",
      steps: [
        "Bật nguồn hệ thống AV",
        "Chọn nguồn trình chiếu trên touch panel",
        "Kiểm tra micro và camera",
      ],
    },
    {
      title: "Trình chiếu không dây",
      desc: "Kết nối laptop qua ClickShare hoặc AirPlay",
      icon: "📡",
      steps: [
        "Cắm USB ClickShare vào laptop",
        "Chờ thiết bị tự nhận diện",
        "Bấm nút để chia sẻ màn hình",
      ],
    },
    {
      title: "Họp Teams / Zoom",
      desc: "Sử dụng camera, micro và loa phòng họp",
      icon: "🎥",
      steps: [
        "Mở Teams hoặc Zoom trên máy tính",
        "Chọn camera PTZ của phòng họp",
        "Chọn microphone và speaker AV Room",
      ],
    },
    {
      title: "Điều khiển âm thanh",
      desc: "Tăng giảm âm lượng và bật tắt micro",
      icon: "🎤",
      steps: [
        "Điều chỉnh master volume",
        "Mute/unmute micro đại biểu",
        "Kiểm tra mức tín hiệu trước khi họp",
      ],
    },
    {
      title: "Camera & Preset",
      desc: "Điều khiển camera PTZ và preset vị trí",
      icon: "📷",
      steps: [
        "Chọn camera cần điều khiển",
        "Gọi preset Chủ tọa / Toàn cảnh",
        "Điều chỉnh zoom và tracking",
      ],
    },
    {
      title: "Gọi hỗ trợ kỹ thuật",
      desc: "Liên hệ bộ phận AV/IT khi cần hỗ trợ",
      icon: "🛠️",
      steps: [
        "Hotline nội bộ: 1900 1234",
        "Quét QR để gửi ticket hỗ trợ",
        "Liên hệ kỹ thuật trực ca tầng 5",
      ],
    },
  ];
</script>

<div class="min-h-screen bg-slate-100 text-slate-900 flex justify-center p-4">
  <div class="w-full max-w-md">

    <!-- Header -->
    <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-lg mb-5">
      <div class="flex items-center justify-between mb-4">
        <div>
          <div class="text-xs uppercase tracking-[0.2em] text-slate-400">Smart AV Room</div>
          <h1 class="text-2xl font-bold mt-1">PHÒNG HỌP A-01</h1>
        </div>
        <div class="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl">
          🖥️
        </div>
      </div>

      <div class="rounded-2xl overflow-hidden border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
          alt="Meeting Room"
          class="w-full h-40 object-cover"
        />
      </div>

      <div class="grid grid-cols-3 gap-3 mt-4 text-center">
        <div class="bg-slate-50 rounded-2xl p-3 border border-slate-200">
          <div class="text-lg font-semibold">LED</div>
          <div class="text-xs text-slate-400 mt-1">163 inch</div>
        </div>
        <div class="bg-slate-50 rounded-2xl p-3 border border-slate-200">
          <div class="text-lg font-semibold">Teams</div>
          <div class="text-xs text-slate-400 mt-1">Ready</div>
        </div>
        <div class="bg-slate-50 rounded-2xl p-3 border border-slate-200">
          <div class="text-lg font-semibold">BYOD</div>
          <div class="text-xs text-slate-400 mt-1">Wireless</div>
        </div>
      </div>
    </div>

    <!-- Quick Start Banner -->
    <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-lg mb-5">
      <div class="text-sm font-medium opacity-80">Hướng dẫn nhanh</div>
      <div class="text-xl font-bold mt-1">Trình chiếu trong 3 bước</div>
      <div class="mt-4 space-y-2 text-sm font-medium">
        <div>1️⃣ Cắm USB ClickShare vào laptop</div>
        <div>2️⃣ Chờ thiết bị kết nối</div>
        <div>3️⃣ Bấm nút để trình chiếu</div>
      </div>
    </div>

    <!-- Main Cards -->
    <div class="space-y-4">
      {#each cards as card, index}
        <div
          role="button"
          tabindex="0"
          onclick={() => (activeMenu = activeMenu === index ? null : index)}
          onkeydown={(e) => (e.key === "Enter" || e.key === " ") && (activeMenu = activeMenu === index ? null : index)}
          class="group bg-white hover:bg-slate-50 transition-all duration-300 border border-slate-200 rounded-3xl p-5 shadow-md cursor-pointer"
        >
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
              {card.icon}
            </div>

            <div class="flex-1">
              <div class="flex items-center justify-between gap-3">
                <div>
                  <h2 class="text-lg font-semibold leading-tight">{card.title}</h2>
                  <p class="text-sm text-slate-500 mt-2 leading-relaxed">{card.desc}</p>
                </div>
                <div class="text-slate-400 text-xl">{activeMenu === index ? "−" : "›"}</div>
              </div>

              {#if activeMenu === index}
                <div class="mt-5 border-t border-slate-200 pt-4 space-y-3">
                  {#each card.steps as step, stepIndex}
                    <div class="flex items-start gap-3 text-sm text-slate-700">
                      <div class="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] flex items-center justify-center shrink-0 mt-0.5 font-medium">
                        {stepIndex + 1}
                      </div>
                      <div class="leading-relaxed">{step}</div>
                    </div>
                  {/each}

                  <div class="pt-3 flex gap-3">
                    <button class="flex-1 bg-slate-900 text-white rounded-2xl py-3 text-sm font-medium hover:opacity-90 transition-opacity">
                      Xem hướng dẫn
                    </button>
                    <button class="px-4 rounded-2xl border border-slate-300 text-sm font-medium hover:bg-slate-100 transition-colors">
                      PDF
                    </button>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Video Tutorial -->
    <div class="bg-white border border-slate-200 rounded-3xl p-5 shadow-lg mt-5">
      <div class="flex items-center justify-between mb-3">
        <div>
          <div class="text-sm text-slate-400">Video hướng dẫn</div>
          <div class="text-lg font-semibold mt-1">Sử dụng hệ thống AV</div>
        </div>
        <div class="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-xl">
          ▶
        </div>
      </div>
      <div class="rounded-2xl overflow-hidden border border-white/10">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="Tutorial"
          class="w-full h-40 object-cover"
        />
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center text-slate-500 text-xs mt-6 pb-8">
      AV Control System • Support Hotline: 1900 1234
    </div>

  </div>
</div>
