import './assets/css/App.css';
import React from 'react';
import Protfolio from './Components/Profolio';
function App() {
  return (
    <>    
      <div className="App" sx={{padding:'0', bgcolor: '#cfe8fc'}}>
        <Protfolio/>
      </div>
    </>

  );
}

export default App;
