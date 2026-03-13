import React from 'react';
import type { MediaGalleryComponent } from 'discord.js';
import { getGalleryLayout, getImageStyle } from './utils';

/**
 * Discord Components V2 – Media Gallery
 * Renders a grid of images/videos mirroring Discord’s layout algorithm.
 */
function DiscordMediaGallery({ component }: { component: MediaGalleryComponent }) {
  if (!component.items || component.items.length === 0) {
    return null;
  }

  const count = component.items.length;
  const maxVisible = 10;
  const itemsToShow = component.items.slice(0, maxVisible);
  const overflow = component.items.length - maxVisible;

  const gridStyle = getGalleryLayout(count);

  return (
    <div className="dcv2-media-gallery" style={gridStyle}>
      {itemsToShow.map((media, idx) => {
        const itemStyle = getImageStyle(idx, count);
        const isVideo = media.media.url.match(/\.(mp4|webm|mov|ogg)$/i);
        const isLast = idx === itemsToShow.length - 1;

        return (
          <div key={idx} className="dcv2-media-gallery-item" style={itemStyle}>
            {isVideo ? (
              <video src={media.media.url} muted playsInline preload="metadata" />
            ) : (
              <img
                src={media.media.url}
                alt={media.description ?? `Media ${idx + 1}`}
                title={media.description ?? undefined}
              />
            )}
            {overflow > 0 && isLast && (
              <div className="dcv2-media-gallery-overlay">+{overflow}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DiscordMediaGallery;
