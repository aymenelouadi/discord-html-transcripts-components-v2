import React from 'react';

interface DiscordButtonProps {
  type: string;
  url?: string;
  emoji?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * Discord Components V2 – Button
 * Supports primary, secondary, success, destructive, link, and premium styles.
 */
export function DiscordButton({ type, url, emoji, disabled, children }: DiscordButtonProps) {
  const isLink = type === 'link';
  const Tag = url ? 'a' : 'span';

  return (
    <Tag
      href={!disabled && url ? url : undefined}
      target={url ? '_blank' : undefined}
      rel={url ? 'noopener noreferrer' : undefined}
      className={`discord-button discord-button-${type}${disabled ? ' disabled' : ''}`}
    >
      {emoji && (
        <span className="discord-button-emoji">
          <img src={emoji} alt="" />
        </span>
      )}
      {children && <span>{children}</span>}
      {isLink && url && (
        <span className="discord-button-link-icon">
          <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V4.41l-4.3 4.3a1 1 0 1 1-1.4-1.42L19.58 3H16a1 1 0 0 1-1-1Z"
            />
            <path
              fill="currentColor"
              d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 1 0-2 0v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5Z"
            />
          </svg>
        </span>
      )}
    </Tag>
  );
}

export default DiscordButton;
