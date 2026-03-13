import type { CSSProperties } from 'react';
import { ButtonStyle } from 'discord.js';

// Container styles
export const containerStyle = {
  display: 'grid',
  gap: '4px',
  width: '100%',
  maxWidth: '516px',
  borderRadius: '8px',
  overflow: 'hidden',
} satisfies CSSProperties;

// Base image style
export const baseImageStyle = {
  overflow: 'hidden',
  position: 'relative',
  background: '#2b2d31',
} satisfies CSSProperties;

// Button style mapping
export const ButtonStyleMapping = {
  [ButtonStyle.Primary]: 'primary',
  [ButtonStyle.Secondary]: 'secondary',
  [ButtonStyle.Success]: 'success',
  [ButtonStyle.Danger]: 'destructive',
  [ButtonStyle.Link]: 'link',
  [ButtonStyle.Premium]: 'premium',
} as const;

export const globalStyles = `
  /* ─── Discord Components V2 ─── */
  /* Forked & redesigned by aymenelouadi */
  /* https://github.com/aymenelouadi/discord-html-transcripts-components-v2 */

  /* ── V2 Container ── */
  .dcv2-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 516px;
    background-color: #2b2d31;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    overflow: hidden;
    margin: 4px 0;
    box-sizing: border-box;
  }

  .dcv2-container.has-accent {
    border-left: none;
  }

  .dcv2-container-inner {
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    gap: 8px;
  }

  .dcv2-container-accent-bar {
    width: 4px;
    border-radius: 4px 0 0 4px;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 100%;
  }

  .dcv2-container-accent-wrap {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  /* ── V2 Section ── */
  .dcv2-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    max-width: 516px;
    gap: 8px;
    padding: 8px 0;
    box-sizing: border-box;
  }

  .dcv2-section-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    min-width: 0;
  }

  .dcv2-section-accessory {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ── V2 Separator ── */
  .dcv2-separator {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .dcv2-separator-line {
    width: 100%;
    height: 1px;
    background-color: rgba(79, 83, 89, 0.48);
    border: none;
    margin: 0;
  }

  .dcv2-separator-spacing-sm {
    padding: 4px 0;
  }

  .dcv2-separator-spacing-lg {
    padding: 8px 0;
  }

  /* ── V2 Media Gallery ── */
  .dcv2-media-gallery {
    display: grid;
    gap: 4px;
    width: 100%;
    max-width: 516px;
    border-radius: 8px;
    overflow: hidden;
    margin: 4px 0;
  }

  .dcv2-media-gallery-item {
    overflow: hidden;
    position: relative;
    background: #1e1f22;
    cursor: pointer;
  }

  .dcv2-media-gallery-item img,
  .dcv2-media-gallery-item video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .dcv2-media-gallery-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  /* ── V2 Thumbnail ── */
  .dcv2-thumbnail {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
    background: #1e1f22;
  }

  .dcv2-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* ── V2 Text Display ── */
  .dcv2-text-display {
    color: #dbdee1;
    font-size: 14px;
    line-height: 1.375;
    font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  /* ── Buttons ── */
  .discord-button {
    color: #ffffff !important;
    padding: 2px 16px;
    border-radius: 3px;
    text-decoration: none !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    height: 32px;
    min-height: 32px;
    min-width: 60px;
    cursor: pointer;
    font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-align: center;
    box-sizing: border-box;
    border: none;
    outline: none;
    transition: filter 0.1s ease, opacity 0.1s ease;
    user-select: none;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .discord-button:hover {
    filter: brightness(0.85);
  }

  .discord-button.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .discord-button-emoji {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
  }

  .discord-button-emoji img {
    width: 16px;
    height: 16px;
  }

  .discord-button-link-icon {
    display: inline-flex;
    align-items: center;
    opacity: 0.7;
    flex-shrink: 0;
  }

  .discord-button-primary {
    background-color: #5865f2;
  }

  .discord-button-secondary {
    background-color: #4e5058;
  }

  .discord-button-success {
    background-color: #248046;
  }

  .discord-button-destructive {
    background-color: #da373c;
  }

  .discord-button-link {
    background-color: #4e5058;
  }

  .discord-button-premium {
    background: linear-gradient(to right, #e79232, #c559de);
    color: #ffffff !important;
  }

  /* ── Action Row ── */
  .dcv2-action-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 4px 0;
  }

  /* ── Select Menu ── */
  .discord-select-menu {
    margin: 4px 0;
    position: relative;
    width: 100%;
    max-width: 516px;
    min-height: 40px;
    background-color: #1e1f22;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 4px;
    color: #b5bac1;
    cursor: pointer;
    font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: space-between;
    box-sizing: border-box;
    user-select: none;
  }

  .discord-select-menu-placeholder {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
  }

  .discord-select-menu-arrow {
    display: flex;
    align-items: center;
    margin-left: 8px;
    flex-shrink: 0;
    color: #80848e;
  }

  .discord-select-menu-options {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background-color: #2b2d31;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 4px;
    z-index: 100;
    max-height: 320px;
    overflow-y: auto;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
  }

  .discord-select-menu-option {
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #dbdee1;
    font-size: 14px;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .discord-select-menu-option:last-child {
    border-bottom: none;
  }

  .discord-select-menu-option:hover {
    background-color: rgba(88, 101, 242, 0.2);
  }

  .discord-select-menu-option-label {
    font-weight: 500;
  }

  .discord-select-menu-option-desc {
    color: #80848e;
    font-size: 12px;
    margin-top: 2px;
  }

  /* ── Action Row wrapper ── */
  .discord-action-row-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 4px 0;
  }

  /* ── V2 File Attachment ── */
  .dcv2-file {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #2b2d31;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 8px;
    padding: 10px 16px;
    max-width: 516px;
    margin: 4px 0;
    box-sizing: border-box;
    cursor: pointer;
  }

  .dcv2-file-icon {
    width: 32px;
    height: 40px;
    color: #949cf7;
    flex-shrink: 0;
  }

  .dcv2-file-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
  }

  .dcv2-file-name {
    color: #00a8fc;
    font-size: 14px;
    font-weight: 500;
    font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-decoration: none;
  }

  .dcv2-file-name:hover {
    text-decoration: underline;
  }

  .dcv2-file-size {
    color: #80848e;
    font-size: 12px;
    font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;
