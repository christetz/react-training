import React from 'react';
import { render } from 'react-dom';
import { Headline } from './components/atomics/Headline';
import { Main } from './pages/main';
import { NeuesFahrzeugSeite } from './pages/neues-fahrzeug';

render(<NeuesFahrzeugSeite />, document.getElementById('root'));
