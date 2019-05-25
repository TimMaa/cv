import React, { useState } from 'react';

import './styles/App.scss';

import MainInfo from './pages/MainInfo';
import Start from './pages/Start';

import FlyOutTransition from './transitions/FlyOutTransition'

function App() {

  const [start, setStart] = useState(true);

  return (
    <div className="app">
      <FlyOutTransition in={start}>
        <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => setStart(!start)}>
          <Start />
        </div>
      </FlyOutTransition>
      <MainInfo />
    </div>
  );
}

export default App;
