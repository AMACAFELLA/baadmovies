import React, { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import useStyles from './styles';
import useAlan from './Alan';

import { Movies, Actors, MovieInfo, Navbar, Profile } from './index';

function initializeReactGA() {
  ReactGA.initialize('G-LK8HM1JKRD');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  const classes = useStyles();
  const alanBtnContainer = useRef();
  initializeReactGA();
  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/approved" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInfo />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
