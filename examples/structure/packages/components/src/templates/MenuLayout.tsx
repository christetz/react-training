import * as React from 'react';

interface MenuLayoutProps {
  renderMenu: () => JSX.Element;
  renderContent: () => JSX.Element;
}
export function MenuLayout({ renderContent, renderMenu }: MenuLayoutProps): JSX.Element {
  return (
    <div style={{ width: '100%' }}>
      <header style={{ width: '100%', height: 50, borderBottom: '1px solid black' }}>{renderMenu()}</header>
      <main>{renderContent()}</main>
    </div>
  );
}
