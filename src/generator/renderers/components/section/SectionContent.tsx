import React from 'react';

interface SectionContentProps {
  children: React.ReactNode;
}

function SectionContent({ children }: SectionContentProps) {
  return <div className="dcv2-section-content">{children}</div>;
}

export default SectionContent;
