import React from 'react';
import { render } from 'react-dom';
import { Headline } from './components/atomics/Headline';
import { Main } from './pages/main';
import { Demo } from './pages/demo';
import { NeuesFahrzeugSeite } from './pages/neues-fahrzeug';

render(<Demo />, document.getElementById('root'));
