<script>
  import { activeCard } from '../stores/activeCard.js';
  import Icon from './Icon.svelte';

  let { title, desc, icon, steps } = $props();

  const isOpen = $derived($activeCard === title);

  function open() {
    activeCard.set(title);
  }

  function close() {
    activeCard.set(null);
  }
</script>

<div
  role="button"
  tabindex="0"
  onclick={open}
  onkeydown={(e) => (e.key === "Enter" || e.key === " ") && open()}
  class="card"
>
  <div class="card__header">
    <div class="card__icon">
      <Icon name={icon} size={20} />
    </div>
    <div class="card__meta">
      <div class="card__top-row">
        <div>
          <h2 class="card__title">{title}</h2>
          <p class="card__desc">{desc}</p>
        </div>
        <div class="card__arrow">›</div>
      </div>
    </div>
  </div>
</div>

{#if isOpen}
  <div
    class="modal-backdrop"
    onclick={close}
    role="presentation"
  ></div>

  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    aria-label={title}
  >
    <button class="modal__close" onclick={close} aria-label="Đóng">✕</button>

    <div class="modal__header">
      <div class="modal__icon">
        <Icon name={icon} size={24} />
      </div>
      <div>
        <h2 class="modal__title">{title}</h2>
        <p class="modal__desc">{desc}</p>
      </div>
    </div>

    <div class="modal__divider"></div>

    <div class="modal__steps">
      {#each steps as step, i}
        <div class="modal__step">
          <div class="modal__step-num">{i + 1}</div>
          <div class="modal__step-text">{step}</div>
        </div>
      {/each}
    </div>
  </div>
{/if}

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
  .card:hover {
    border-color: var(--border-strong);
    box-shadow: 0 4px 16px rgba(0,0,0,0.09);
    transform: translateY(-1px);
  }

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
    align-items: center;
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

  .card__arrow {
    font-size: 22px;
    font-weight: 300;
    color: var(--grey-300);
    flex-shrink: 0;
    line-height: 1;
    transition: color 0.2s, transform 0.2s;
  }
  .card:hover .card__arrow {
    color: var(--accent);
    transform: translateX(2px);
  }

  /* ── Modal ── */

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 100;
    animation: backdrop-in 0.2s ease-out both;
  }

  .modal {
    position: fixed;
    inset: 0;
    background: var(--bg);
    z-index: 101;
    overflow-y: auto;
    padding: 56px 20px 40px;
    animation: modal-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
  }

  @keyframes backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes modal-in {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .modal__close {
    position: fixed;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid var(--border-strong);
    background: var(--surface);
    color: var(--text-sub);
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 102;
    transition: background 0.15s, color 0.15s;
  }
  .modal__close:hover {
    background: var(--grey-100);
    color: var(--text);
  }

  .modal__header {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    max-width: 440px;
    margin: 0 auto 0;
  }

  .modal__icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--accent-bg);
    border: 1px solid var(--accent-border);
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .modal__title {
    font-size: clamp(18px, 5vw, 22px);
    font-weight: 800;
    color: var(--text);
    margin: 4px 0 0;
    line-height: 1.2;
  }

  .modal__desc {
    font-size: 13px;
    color: var(--text-muted);
    margin: 6px 0 0;
  }

  .modal__divider {
    height: 1px;
    background: var(--border);
    margin: 20px auto;
    max-width: 440px;
  }

  .modal__steps {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 440px;
    margin: 0 auto;
  }

  .modal__step {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 14px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  }

  .modal__step-num {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--accent);
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .modal__step-text {
    font-size: clamp(13px, 3.4vw, 15px);
    font-weight: 500;
    color: var(--text);
    line-height: 1.55;
  }
</style>
