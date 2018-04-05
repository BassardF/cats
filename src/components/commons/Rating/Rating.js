import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = {};

function iconClass (base, rating) {
  if (rating > base) return 'star';
  if (rating > base - 0.5) return 'star_half';
  return 'star_border';
}

function Rating(props) {

  const { rating } = props;
  return (
    <div>
      <Icon>{ iconClass(1, rating) }</Icon>
      <Icon>{ iconClass(2, rating) }</Icon>
      <Icon>{ iconClass(3, rating) }</Icon>
      <Icon>{ iconClass(4, rating) }</Icon>
      <Icon>{ iconClass(5, rating) }</Icon>
    </div>
  );
}

Rating.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rating);
