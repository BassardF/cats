import React, { Component } from 'react';
import { Provider } from './context.core'
import { fetchCities } from './http/cities';
import { fetchFavs } from './http/favs';
import { fetchCatfes } from './http/catfes';

export default class AppContext extends Component {
  state = {
    searchCities: [],
    favs: [],
    catfes: []
  }

  refreshFavs() {
    fetchFavs().then(favs => {
      this.setState({
        favs: favs
      });
    });
  }

  refreshSearchCities(characters) {
    fetchCities(characters).then(arr => {
      this.setState({
        searchCities: arr
      });
    });
  }

  refreshCatfes(country, city) {
    fetchCatfes(country, city).then(catfes => {
      this.setState({
        catfes: catfes
      });
    });
  }

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            refreshSearchCities: this.refreshSearchCities.bind(this),
            refreshFavs: this.refreshFavs.bind(this),
            refreshCatfes: this.refreshCatfes.bind(this),
          }
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
