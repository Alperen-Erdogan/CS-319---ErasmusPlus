import React from 'react';
import './test.css';
import Popup from './components/Popup';
import { useState } from 'react';
import NewApplication from './NewApplication';

function Test() {
  const [buttonPopup, setButtonPopup] = useState(false);
    return (
      <div className="App">
        <main>
          <h1>Popup Test</h1>
          <br></br>
          <button onClick={() => setButtonPopup(true)}>Open Popup</button>
        </main>
        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
          <NewApplication/>
        </Popup>
        
      </div>
    );
}

export default Test;