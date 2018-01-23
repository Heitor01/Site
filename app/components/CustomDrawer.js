import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';

import img from './foto.png';

const style = {
  marginTop: '-43%',
  height: 270,
  width: 270,
  backgroundImage: '-webkit-radial-gradient(2em,circle, rgb(255, 255, 255), rgb(0, 0, 0))',
  display: 'flex',
};
const avatar = {
  height: 80,
  width: 80,
  marginTop: '50%',
  marginLeft: '5%',
};
const email = {
  marginLeft: '37%',
  color: 'white',
  marginTop: '-10%',
  fontFamily: 'monospace',
  fontSize: 13,
};

class CustomDrawer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Drawer open={this.state.open} onClose={this.handleClose} >
          <div tabIndex={0} role="button" onClick={this.handleClose} onKeyDown={this.handleClose} >
            <Paper style={style}>
              <Avatar src={img} style={avatar} />
            </Paper>
            <Typography type="body1" style={email}>
              jessica@uproc.com.br
            </Typography>
            <List>
              <ListItem button>
                <i className="material-icons">system_update_alt</i>
                <ListItemText primary="Importar do ML" />
              </ListItem>
              <ListItem button>
                <i className="material-icons">list</i>
                <ListItemText primary="Lista de pacotes" />
              </ListItem>
              <ListItem button>
                <i className="material-icons">supervisor_account</i>
                <ListItemText primary="Configuração de contas" />
              </ListItem>
              <ListItem button>
                <i className="material-icons">help</i>
                <ListItemText primary="Ajuda" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default CustomDrawer;
