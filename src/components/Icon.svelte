<script>
  import { Zap, Plug, Cable, Cast, Video, Webcam, Mic, Camera, Phone, Volume2 } from 'lucide-svelte';

  const iconMap = { Zap, Plug, Cable, Cast, Video, Webcam, Mic, Camera, Phone, Volume2 };

  let { name, size = 20, strokeWidth = 1.75 } = $props();
  let DynIcon = $derived(iconMap[name]);
</script>

<DynIcon {size} {strokeWidth} />
