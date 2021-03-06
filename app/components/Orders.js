import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 7,
  },
  paper: {
    marginTop: theme.spacing.unit * 13,
    marginLeft: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * -1,
  },
  appbar: {
    flexWrap: 'wrap',
  },
});

function Orders(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <List>
          <ListItem button>
            <i className="material-icons" style={{ fontSize: 40, color: 'grey' }}>stop</i>
            <ListItemText primary="NICKNAME" secondary="Endereço do destinatário" />
          </ListItem>
          <ListItem button>
            <i className="material-icons" style={{ fontSize: 40, color: 'grey' }}>stop</i>
            <ListItemText primary="NICKNAME" secondary="Endereço do destinatário" />
          </ListItem>
          <ListItem button>
            <i className="material-icons" style={{ fontSize: 40, color: 'grey' }}>stop</i>
            <ListItemText primary="NICKNAME" secondary="Endereço do destinatário" />
          </ListItem>
          <ListItem button>
            <i className="material-icons" style={{ fontSize: 40, color: 'grey' }}>stop</i>
            <ListItemText primary="NICKNAME" secondary="Endereço do destinatário" />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

Orders.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Orders);

