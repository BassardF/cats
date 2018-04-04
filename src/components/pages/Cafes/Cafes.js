import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {};

class Cafe extends Component {
  render() {
    return (
      <div>
        Cafes
      </div>
    );
  }
}

Cafe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cafe);
