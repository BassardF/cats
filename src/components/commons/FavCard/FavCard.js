import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Rating from '../Rating/Rating';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function FavCard(props) {
  const { classes, fav } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={fav.photos[0].url}
          title={`${fav.name} hero image`}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            { fav.name }
          </Typography>
          <Rating rating={fav.rating}/>
          <Typography component="p">
            { fav.address }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

FavCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavCard);
