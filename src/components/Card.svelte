<script>
  import { activeCard } from '../stores/activeCard.js';
  import { Zap, Wifi, Video, Mic, Camera, Phone, Plug, Volume2, Wrench, Cast } from 'lucide-svelte';

  const iconMap = { Zap, Wifi, Video, Mic, Camera, Phone, Plug, Volume2, Wrench, Cast };

  let { title, desc, icon, steps, pdfUrl } = $props();

  const IconComponent = iconMap[icon];

  function toggle() {
    activeCard.update(current => current === title ? null : title);
  }
</script>

<div
  role="button"
  tabindex="0"
  onclick={toggle}
  onkeydown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
  class="card"
  class:card--open={$activeCard === title}
>
  <div class="card__header">
    <div class="card__icon">
      <IconComponent size={20} strokeWidth={1.75} />
    </div>
    <div class="card__meta">
      <div class="card__top-row">
        <div>
          <h2 class="card__title">{title}</h2>
          <p class="card__desc">{desc}</p>
        </div>
        <div class="card__toggle" class:card__toggle--open={$activeCard === title}>
          {$activeCard === title ? '−' : '+'}
        </div>
      </div>
    </div>
  </div>

  {#if $activeCard === title}
    <div class="card__body">
      <div class="card__divider"></div>
      <div class="card__steps">
        {#each steps as step, i}
          <div class="card__step">
            <div class="card__step-num">{i + 1}</div>
            <div class="card__step-text">{step}</div>
          </div>
        {/each}
      </div>
      <div class="card__actions">
        <button class="card__btn-primary">Xem hướng dẫn</button>
        {#if pdfUrl}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            onclick={(e) => e.stopPropagation()}
            class="card__btn-secondary"
          >
            PDF
          </a>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 14px 16px;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.18s;
    user-select: none;
    -webkit-user-select: none;
  }
  .card:hover,
  .card--open {
    border-color: var(--border-strong);
    box-shadow: 0 4px 16px rgba(0,0,0,0.09);
  }
  .card:hover { transform: translateY(-1px); }

  .card__header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  .card__icon {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .card__meta { flex: 1; min-width: 0; }

  .card__top-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
  }

  .card__title {
    font-size: clamp(13px, 3.6vw, 15px);
    font-weight: 700;
    color: var(--text);
    margin: 0;
    line-height: 1.3;
  }

  .card__desc {
    font-size: clamp(11px, 3vw, 13px);
    color: var(--text-sub);
    margin: 4px 0 0;
    line-height: 1.5;
  }

  .card__toggle {
    font-size: 20px;
    font-weight: 400;
    color: var(--grey-300);
    flex-shrink: 0;
    width: 22px;
    text-align: center;
    line-height: 1;
    margin-top: 1px;
    transition: color 0.2s;
  }
  .card__toggle--open { color: var(--accent); }

  .card__body {
    animation: card-expand 0.2s ease-out both;
  }

  @keyframes card-expand {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .card__divider {
    height: 1px;
    background: var(--border);
    margin: 16px 0;
  }

  .card__steps {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .card__step {
    display: flex;
    align-items: flex-start;
    gap: 11px;
  }

  .card__step-num {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    color: var(--accent-dark);
    font-size: 11px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .card__step-text {
    font-size: clamp(12px, 3.2vw, 14px);
    font-weight: 500;
    color: var(--text);
    line-height: 1.5;
  }

  .card__actions {
    display: flex;
    gap: 8px;
    margin-top: 14px;
  }

  .card__btn-primary {
    flex: 1;
    background: var(--accent);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.2s, transform 0.1s;
  }
  .card__btn-primary:hover { background: var(--accent-dark); }
  .card__btn-primary:active { transform: scale(0.98); }

  .card__btn-secondary {
    padding: 10px 14px;
    border: 1px solid var(--border-strong);
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-sub);
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: border-color 0.2s, color 0.2s;
  }
  .card__btn-secondary:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
</style>
