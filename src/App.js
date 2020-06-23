import React from 'react';

// Standard Components
import Header from './components/Header/Header'
import Pitch from './components/Pitch/Pitch';
import TeamInfo from './components/TeamInfo/TeamInfo';
import Footer from './components/Footer/Footer';

// React-Redux (state/dispatch passed from index.js)
import PlayerEntry from './components/PlayerEntry';

function App() {
  return (
    <main className="main-app">
      <Header />
      <PlayerEntry />
      <TeamInfo />
      <Pitch />
      <Footer />
    </main>
  );
}

export default App;
