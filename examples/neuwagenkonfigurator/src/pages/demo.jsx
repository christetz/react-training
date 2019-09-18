import React from 'react';
import { Headline } from '../components/atomics/Headline';
import { Toolbar } from '../components/molecuels/Toolbar';
import { MainLayout } from '../components/templates/MainLayout';
import { KatalogSidebar } from '../components/molecuels/KatalogSidebar';
import { SelectionProvider } from '../components/providers/SelectionProvider';
import { BauteileSelection } from '../components/molecuels/BauteileSelection';
import { FahrzeugSelektion } from '../components/organisms/FahrzeugSelektion';

export function Demo() {
  return (
    <SelectionProvider>
      {({ shouldToolbarButtonEnabled, selectBauteil, selectFahrzeug, hasFahrzeug, hasBauteil }) => {
        return (
          <MainLayout
            renderToolbar={() => (
              <Toolbar
                onHinzufuegen={() => alert('Muss ich noch machen!')}
                renderTitle={() => <Headline text="Neuwagenkonfigurator" />}
                isEnabled={shouldToolbarButtonEnabled}
              />
            )}
            renderKatalogSidebar={() => <KatalogSidebar />}
            renderContent={() => (
              <main style={{ border: '1px solid black' }}>
                <FahrzeugSelektion />
                <BauteileSelection onBauteilSelected={selectedBauteil => selectBauteil(selectedBauteil)} />
                <div>
                  <button onClick={() => selectBauteil({ id: 'Bauteil' })}>Bauteilselektion</button>
                </div>
                <div>
                  <button onClick={() => selectFahrzeug({ id: 'Fahrzeug' })}>Fahrzeugselektion</button>
                </div>
              </main>
            )}
          />
        );
      }}
    </SelectionProvider>
  );
}
