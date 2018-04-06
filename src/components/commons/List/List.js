import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {default as UIList, ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const styles = {};

function List(props) {
  const { state } = props;
  console.log('state', state.catfes);
  return (
    <div>
      <UIList>
        { state.catfes && state.catfes.map((catfe, index) => (
          <ListItem key={`catfe-list-${index}`}>
            <Avatar>

            </Avatar>
            <ListItemText primary={ catfe.name } secondary={ catfe.address } />
          </ListItem>
        ))}
      </UIList>
    </div>
  );
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
