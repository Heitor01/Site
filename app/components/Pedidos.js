import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * -5,
  },
  tabs: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 7,
    backgroundColor: 'rgb(63,81,181)',
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Tabs className={classes.tabs}>
        <Tab label="Importar" />
        <Tab label="Editar" />
        <Tab label="Imprimir" style={{ marginLeft: '3%' }} />
      </Tabs>
      <List>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="NICKNAME" secondary="Endereço do destinatário" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="NICKNAME" secondary="Endereço do destinatário" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary="NICKNAME" secondary="Endereço do destinatário" />
        </ListItem>
      </List>
    </Paper>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
