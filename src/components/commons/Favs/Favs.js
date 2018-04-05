import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import FavCard from '../FavCard/FavCard';


const styles = {};

class Favs extends Component {

  componentDidMount(){
    this.props.refreshFavs();
  }

  render() {
    console.log(this.props.favs);
    return (
      <div>
        <Grid container spacing={24}>
          { this.props.favs && this.props.favs.map(fav => {
            return (
              <Grid item xs={6} key={`fav-card-${fav.place_id}`}>
                <FavCard fav={fav}/>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

Favs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Favs);
