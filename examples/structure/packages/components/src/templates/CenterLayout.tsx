import * as React from 'react';

interface CenterLayoutProps {
  renderContent: () => JSX.Element;
}
export function CenterLayout({ renderContent }: CenterLayoutProps): JSX.Element {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginLeft: '50%' }}>{renderContent()}</div>
    </div>
  );
}
