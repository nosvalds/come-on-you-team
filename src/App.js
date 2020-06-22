import React from 'react';

// Components
import Header from './components/Header/Header'
import PlayerEntry from './components/PlayerEntry';
import Pitch from './components/Pitch/Pitch';
import TeamInfo from './components/TeamInfo/TeamInfo';
import Footer from './components/Footer/Footer';


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
