import React from 'react';

/**
 * Discord Components V2 – Thumbnail
 * Small image displayed as a section accessory.
 */
function DiscordThumbnail({ url, description }: { url: string; description?: string | null }) {
  return (
    <div className="dcv2-thumbnail">
      <img src={url} alt={description ?? 'Thumbnail'} />
    </div>
  );
}

export default DiscordThumbnail;
