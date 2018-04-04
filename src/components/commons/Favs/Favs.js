import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
};

class Favs extends Component {

  componentDidMount(){
    this.props.refreshFavs();
  }

  render() {
    return (
      <div>
          {this.props.favs.length}
      </div>
    );
  }
}

Favs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Favs);
