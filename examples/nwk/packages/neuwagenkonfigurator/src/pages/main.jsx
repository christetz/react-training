import React from 'react';
import { Headline } from '../components/atomics/Headline';
import { Toolbar } from '../components/molecuels/Toolbar';
import { MainLayout } from '../components/templates/MainLayout';
import { KatalogSidebar } from '../components/molecuels/KatalogSidebar';

export function Main() {
  return (
    <MainLayout
      renderToolbar={() => (
        <Toolbar
          onHinzufuegen={() => alert('Muss ich noch machen!')}
          renderTitle={() => <Headline text="Neuwagenkonfigurator" />}
        />
      )}
      renderKatalogSidebar={() => <KatalogSidebar />}
      renderContent={() => (
        <main style={{ border: '1px solid black' }}>
          <div>Fahrzeugselektion</div>
          <div>Bauteilselektion</div>
        </main>
      )}
    />
  );
}
