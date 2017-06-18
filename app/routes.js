'use strict'

// react
import React from 'react';
import { connect } from 'react-redux'; 
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// components
import store from './store';
import Home from './components/Home';
import Root from './components/Root';
import { getAirportData } from './reducers/AirportData';

const fetchAirports = () => {
  console.log('here');
  store.dispatch(getAirportData());
}

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={ Root } >
      <IndexRoute component={ Home } onEnter={ fetchAirports }/>
    </Route>
  </Router>
);

const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Routes);