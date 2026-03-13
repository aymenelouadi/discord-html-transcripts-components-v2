import React from 'react';
import { type MessageActionRowComponent, ComponentType } from 'discord.js';
import { parseDiscordEmoji } from '../../../utils/utils';
import { getSelectTypeLabel } from './utils';

/**
 * Discord Components V2 – Select Menu
 * Renders a static (non-interactive) dropdown that mirrors Discord’s visual style.
 */
function DiscordSelectMenu({
  component,
}: {
  component: Exclude<MessageActionRowComponent, { type: ComponentType.Button }>;
}) {
  const isStringSelect = component.type === ComponentType.StringSelect;
  const placeholder = component.placeholder || getSelectTypeLabel(component.type);
  const options = isStringSelect ? (component as { options?: { label: string; description?: string | null; emoji?: { id?: string | null; name?: string | null; animated?: boolean } }[] }).options : undefined;

  return (
    <div className="discord-select-menu">
      <span className="discord-select-menu-placeholder">{placeholder}</span>
      <span className="discord-select-menu-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path fill="currentColor" d="M7 10L12 15L17 10H7Z" />
        </svg>
      </span>

      {/* Static preview of options – hidden until hovered/focused */}
      {isStringSelect && options && options.length > 0 && (
        <div
          className="discord-select-menu-options"
          style={{ display: 'none' }}
        >
          {options.map((option, idx) => (
            <div key={idx} className="discord-select-menu-option">
              {option.emoji && (
                <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  <img
                    src={parseDiscordEmoji(option.emoji as Parameters<typeof parseDiscordEmoji>[0])}
                    alt=""
                    width={20}
                    height={20}
                    style={{ objectFit: 'contain' }}
                  />
                </span>
              )}
              <span>
                <div className="discord-select-menu-option-label">{option.label}</div>
                {option.description && (
                  <div className="discord-select-menu-option-desc">{option.description}</div>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DiscordSelectMenu;
