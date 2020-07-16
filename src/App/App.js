import React from 'react';

// import the react-router components, use HashRouter for github pages deployment
import {
  HashRouter as Router,
  Route,
  Switch,
  } from "react-router-dom";

// Standard React Components
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import FourOhFour from '../components/FourOhFour/FourOhFour';


// React-Redux (state and dispatch passed from index.js)
import Instructions from '../components/Instructions';
import MatchHistory from '../components/MatchHistory';
import MatchPlay from '../components/MatchPlay';

function App() {
  return (
    <main className="main-app">
      <Router>
        <Header />
        <Nav />
        <Instructions />
          <Switch>
            <Route exact path="/" component={ MatchHistory } />
            <Route exact path="/play" component={ MatchPlay } />
            <FourOhFour />
          </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
