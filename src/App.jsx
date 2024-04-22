import { useState } from 'react'
import './App.css'
import "./componentes/Piano"
import { Piano } from './componentes/Piano';

function App() {
  return (
    <div className='App'>
        <header className='App-header'>
          <Piano/>
        </header>
    </div>
  );
}

export default App;
