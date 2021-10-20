import React from 'react';
import { Switch, Route } from 'react-router-dom';
// layout
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';
// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

import "./defaults.scss";

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => (
        <HomepageLayout>
          <Homepage />
        </HomepageLayout>
      )} />
      <Route path='/registration' render={() => (
        <MainLayout>
          <Registration />
        </MainLayout>
      )} />
      <Route />
    </Switch>
  );
}

export default App;
