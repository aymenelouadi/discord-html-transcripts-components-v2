import React from 'react';
import { SeparatorSpacingSize } from 'discord.js';

/**
 * Discord Components V2 – Separator
 * Renders a visual divider line with optional spacing sizes.
 */
function DiscordSeparator({ divider, spacing }: { divider: boolean | null; spacing: SeparatorSpacingSize }) {
  const spacingClass =
    spacing === SeparatorSpacingSize.Large ? 'dcv2-separator-spacing-lg' : 'dcv2-separator-spacing-sm';

  return (
    <div className={`dcv2-separator ${spacingClass}`}>
      {divider && <hr className="dcv2-separator-line" />}
    </div>
  );
}

export default DiscordSeparator;
