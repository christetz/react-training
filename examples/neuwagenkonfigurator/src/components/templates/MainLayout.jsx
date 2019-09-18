import React from 'react';

export function MainLayout({
  renderToolbar = () => null,
  renderKatalogSidebar = () => null,
  renderContent = () => null,
}) {
  return (
    <div>
      <div>{renderToolbar()}</div>
      <div>{renderKatalogSidebar()}</div>
      <div>{renderContent()}</div>
    </div>
  );
}
