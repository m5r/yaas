/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';
import Grid from 'material-ui/Grid';
import withStyles from 'material-ui/styles/withStyles';

import Form from 'containers/Form/Loadable';
import FileList from 'containers/FileList/Loadable';

const styles = (theme) => ({
  gridContainer: {
    marginTop: '20px',
    height: 'calc(100% - 20px - 56px)',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 20px - 64px)',
    },
  },
});

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container spacing={0} className={classes.gridContainer}>
          <Form />
          <FileList />
        </Grid>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default withStyles(styles)(HomePage);
