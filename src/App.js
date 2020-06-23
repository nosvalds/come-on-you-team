import React from 'react';

// Standard Components

import Pitch from './components/Pitch/Pitch';
import TeamInfo from './components/TeamInfo/TeamInfo';
import Footer from './components/Footer/Footer';

// React-Redux (state/dispatch passed from index.js)
import PlayerEntry from './components/PlayerEntry';
import TeamSize from './components/TeamSize';
import Header from './components/Header';

function App() {
  return (
    <main className="main-app">
      <Header />
      <TeamSize initial={ 5 } min={ 3 } max={ 11 } />
      <PlayerEntry />
      <TeamInfo />
      <Pitch />
      <Footer />
    </main>
  );
}

export default App;
