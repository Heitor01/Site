import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
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
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Pedidos
          </Typography>
        </Toolbar>
        <Tabs className={classes.tabs}>
          <Tab label="importar" />
          <Tab label="editar" />
          <Tab label="imprimir" />
        </Tabs>
      </AppBar>
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

