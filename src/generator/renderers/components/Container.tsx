import React from 'react';

interface DiscordContainerProps {
  children: React.ReactNode;
  /** hex accent color e.g. "#5865f2" */
  accentColor?: string | null;
  spoiler?: boolean;
}

/**
 * Discord Components V2 – Container
 * Renders a styled container block with optional left-side accent bar.
 */
function DiscordContainer({ children, accentColor, spoiler }: DiscordContainerProps) {
  const hasAccent = !!accentColor;

  return (
    <div className={`dcv2-container${hasAccent ? ' has-accent' : ''}`}>
      <div className="dcv2-container-accent-wrap">
        {hasAccent && (
          <div
            className="dcv2-container-accent-bar"
            style={{ backgroundColor: accentColor! }}
          />
        )}
        <div
          className="dcv2-container-inner"
          style={spoiler ? { filter: 'blur(4px)', userSelect: 'none' } : undefined}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DiscordContainer;
