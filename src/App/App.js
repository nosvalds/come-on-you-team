import React from 'react';

// import the ReactRouter components, use HashRouter for github pages deployment
import {
  HashRouter as Router,
  Route,
  Switch,
  } from "react-router-dom";

// Standard Components
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Pitch from '../components/Pitch/Pitch';
import Footer from '../components/Footer/Footer';
import FourOhFour from '../components/FourOhFour/FourOhFour';

// React-Redux (state/dispatch passed from index.js)
import TeamInfo from '../components/TeamInfo';
import PlayerEntry from '../components/PlayerEntry';
import TeamSize from '../components/TeamSize';
import MatchOptions from '../components/MatchOptions';
import PitchBanner from '../components/PitchBanner';
import MatchHistory from '../components/MatchHistory';

function App({ teamSize }) {
  return (
    <main className="main-app">
      <Router>
        <Header />
        <Nav />
          <Switch>
            <Route exact path="/">
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
            </Route>
            <Route exact path="/match-history" >
              <MatchHistory />
            </Route>
            <FourOhFour />
          </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
