import React, { Component } from 'react';
import { Provider } from './context.core'
import { fetchCities } from './http/cities';
import { fetchFavs } from './http/favs';

export default class AppContext extends Component {
  state = {
    searchCities: [],
    favs: []
  }

  refreshFavs() {
    fetchFavs().then(favs=>{
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

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          actions: {
            refreshSearchCities: this.refreshSearchCities.bind(this),
            refreshFavs: this.refreshFavs.bind(this),
          }
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}
