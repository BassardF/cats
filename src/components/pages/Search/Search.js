import React, { Component, Fragment } from 'react';
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
    const { classes } = this.props;
    return (
      <div>
        <Consumer>
          {({ state, actions }) => (
            <Fragment>
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
            </Fragment>
          )}
        </Consumer>
      </div>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Search));
