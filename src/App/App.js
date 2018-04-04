import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './App.css';

import AppContext from '../components/context/AppContext';

import Header from '../components/Header/Header';
import Router from '../components/Router/Router';

const styles = {};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContext>
          <Header/>
          <Router/>
        </AppContext>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
