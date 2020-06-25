import React from 'react';

// Standard Components
import Header from '../components/Header/Header';
import Pitch from '../components/Pitch/Pitch';
import Footer from '../components/Footer/Footer';

// React-Redux (state/dispatch passed from index.js)
import TeamInfo from '../components/TeamInfo';
import PlayerEntry from '../components/PlayerEntry';
import TeamSize from '../components/TeamSize';
import MatchOptions from '../components/MatchOptions';
import PitchBanner from '../components/PitchBanner';


function App({ teamSize }) {
  return (
    <main className="main-app">
      <Header />
      { teamSize === 0 ?
        <TeamSize initial={ 5 } min={ 3 } max={ 11 } />
        :
        <>
          <PitchBanner />
          <PlayerEntry />
          <TeamInfo />
          <Pitch />
          <MatchOptions />
        </>
      }
      <Footer />
    </main>
  );
}

export default App;
