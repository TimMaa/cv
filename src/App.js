import React, { useState } from 'react';

import './styles/App.scss';

import MainInfo from './pages/MainInfo';
import Start from './pages/Start';

function App() {

  let [ entered, setEntered ] = useState(false);

  return (
    <div className="App">
      <div style={{ display: entered ? "none" : "block" }} onClick={() => setEntered(!entered)}>
        <Start />
      </div>
      <div style={{ display: entered ? "block" : "none" }}>
        <MainInfo />
      </div>
      <div class="copyright">by Tim Maaßen - 2019</div>
    </div>
  );
}

export default App;
