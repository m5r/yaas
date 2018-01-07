/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';

const styles = () => ({
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
});

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position='static'>
        <Toolbar>
          <Link to='/' className={classes.link}>
            <Typography type='title' color='inherit' className={classes.flex}>
              youtube-dl as a service
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
