import React from 'react';
import type { ButtonComponent, ThumbnailComponent } from 'discord.js';
import { Component } from '../../components';
import SectionContent from './SectionContent';
import SectionAccessory from './SectionAccessory';

interface DiscordSectionProps {
  children: React.ReactNode;
  accessory?: ButtonComponent | ThumbnailComponent;
  id: number;
}

/**
 * Discord Components V2 – Section
 * A row with text content on the left and an optional accessory (thumbnail/button) on the right.
 */
function DiscordSection({ children, accessory, id }: DiscordSectionProps) {
  return (
    <div className="dcv2-section">
      <SectionContent>{children}</SectionContent>
      {accessory && (
        <SectionAccessory>
          <Component component={accessory} id={id} />
        </SectionAccessory>
      )}
    </div>
  );
}

export default DiscordSection;
