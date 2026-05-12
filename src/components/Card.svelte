<script lang="ts">
  type Props = {
    title: string;
    desc: string;
    icon: string;
    steps: string[];
    pdfUrl?: string;
  };

  let { title, desc, icon, steps, pdfUrl }: Props = $props();
  let open = $state(false);
</script>

<div
  role="button"
  tabindex="0"
  onclick={() => (open = !open)}
  onkeydown={(e) => (e.key === "Enter" || e.key === " ") && (open = !open)}
  class="group bg-white hover:bg-slate-50 transition-all duration-300 border border-slate-200 rounded-3xl p-5 shadow-md cursor-pointer"
>
  <div class="flex items-start gap-4">
    <div class="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
      {icon}
    </div>

    <div class="flex-1">
      <div class="flex items-center justify-between gap-3">
        <div>
          <h2 class="text-lg font-semibold leading-tight">{title}</h2>
          <p class="text-sm text-slate-500 mt-2 leading-relaxed">{desc}</p>
        </div>
        <div class="text-slate-400 text-xl">{open ? "−" : "›"}</div>
      </div>

      {#if open}
        <div class="mt-5 border-t border-slate-200 pt-4 space-y-3">
          {#each steps as step, i}
            <div class="flex items-start gap-3 text-sm text-slate-700">
              <div class="w-6 h-6 rounded-full bg-slate-900 text-white text-[11px] flex items-center justify-center shrink-0 mt-0.5 font-medium">
                {i + 1}
              </div>
              <div class="leading-relaxed">{step}</div>
            </div>
          {/each}

          <div class="pt-3 flex gap-3">
            <button class="flex-1 bg-slate-900 text-white rounded-2xl py-3 text-sm font-medium hover:opacity-90 transition-opacity">
              Xem hướng dẫn
            </button>
            {#if pdfUrl}
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onclick={(e) => e.stopPropagation()}
                class="px-4 rounded-2xl border border-slate-300 text-sm font-medium hover:bg-slate-100 transition-colors flex items-center"
              >
                PDF
              </a>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
