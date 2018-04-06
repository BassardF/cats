import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom'
import { Consumer } from '../../context/context.core';
import Map from '../../commons/Map/Map';
import List from '../../commons/List/List';

const styles = {};

class Cafe extends Component {
  componentDidMount() {
    const { match, actions } = this.props;
    actions.refreshCatfes(match.params.country, match.params.city);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={6} key='cafe-left-grid-section-left'>
            <List state={state} actions={actions}/>
          </Grid>
          <Grid item xs={6} key='cafe-left-grid-section-right'>
            <Map state={state} actions={actions}/>
          </Grid>
        </Grid>
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
