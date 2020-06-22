import React from 'react';

// Components
import Header from './components/Header/Header'
import PlayerEntry from './components/PlayerEntry';
import Pitch from './components/Pitch/Pitch';

function App() {
  return (
    <main className="main-app">
      <Header />
      <PlayerEntry />
      <Pitch />
    </main>
  );
}

export default App;
