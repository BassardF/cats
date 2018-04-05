import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Consumer } from '../../context/context.core';
import CitySearch from '../../commons/CitySearch/CitySearch';
import Favs from '../../commons/Favs/Favs';

const styles = {
  citySearch: {
    maxWidth: 600
  }
};

class Search extends Component {
  selectCity(search){
    const { history } = this.props;
    if (search) {
      let [ city, , country ] = search.split(', ');
      country = country.split(' ').join('-');
      city = city.split(' ').join('-');
      history.push(`/${country.toLowerCase()}/${city.toLowerCase()}/catfes`);
    }
  }

  render() {
    const { classes, state, actions } = this.props;
    return (
      <div>
        <div className={classes.citySearch}>
          <CitySearch
            selectCity={this.selectCity.bind(this)}
            suggestions={state.searchCities}
            refreshSearchCities={actions.refreshSearchCities}
          />
          <Favs
            refreshFavs={actions.refreshFavs}
            favs={state.favs}
          />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SearchComp = withRouter(withStyles(styles)(Search));

export default props => (
  <Consumer>
    {({ state, actions }) => <SearchComp {...props} state={state} actions={actions} />}
  </Consumer>
);
