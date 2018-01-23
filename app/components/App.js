import React from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Login from './Login';
import Order from './Order';
import Orders from './Orders';
import CustomDrawer from './CustomDrawer';
import Pedidos from './Pedidos';

const styles = {
  root: {
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgb(0, 188, 212)',
    WebkitFontSmoothing: 'antialiased',
  },
  flex: {
    flex: 1,
  },
  appbar: {
    flexWrap: 'wrap',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  tabs: {
    width: '100%',
  },
};

const App = (props) => {
  const { classes } = props;
  let open_drawer = null;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" className={classes.menuButton} onClick={() => open_drawer.handleToggle()}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomDrawer ref={(ref) => { open_drawer = ref; }} />

      <Route path="/" exact component={Login} />
      <Route path="/pedidos" exact component={Pedidos} />
      <Route path="/orders" exact component={Orders} />
      <Route path="/order/:id" exact component={Order} />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
