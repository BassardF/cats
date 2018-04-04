import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Switch, Route } from 'react-router-dom';

import Cafe from '../pages/Cafes/Cafes';
import Search from '../pages/Search/Search';

const styles = {};

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route path='/:country/:city/catfes' component={Cafe}/>
        </Switch>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
