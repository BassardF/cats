import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom'
import { Consumer } from '../../context/context.core';

const styles = {};

class Cafe extends Component {
  componentDidMount() {
    const { match, actions } = this.props;
    actions.refreshCatfes(match.params.country, match.params.city);
  }

  render() {
    const { state } = this.props;
    return (
      <div>
        { state.catfes.length }
      </div>
    );
  }
}

Cafe.propTypes = {
  classes: PropTypes.object.isRequired,
};

const CafeComp =  withRouter(withStyles(styles)(Cafe));

export default props => (
  <Consumer>
    {({ state, actions }) => <CafeComp {...props} state={state} actions={actions} />}
  </Consumer>
);
