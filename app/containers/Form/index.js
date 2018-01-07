/**
 *
 * Form
 *
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Input, { InputAdornment, InputLabel } from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';
import { Add as AddIcon, Clear as ClearIcon } from 'material-ui-icons';

import injectReducer from 'utils/injectReducer';
import { addFile } from 'containers/FileList/actions';
import { selectUrl } from './selectors';
import reducer from './reducer';
import messages from './messages';
import { changeUrl } from './actions';

const styles = (theme) => ({
  wrapper: {
    margin: `${theme.spacing.unit}px 0 0 ${theme.spacing.unit * 2}px`,
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.primary,
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  grid: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '16.666667%',
    },
    display: 'flex',
    padding: '0 16px',
  },
});

export class Form extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
    url: PropTypes.string,
    handleChange: PropTypes.func,
    clearUrl: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  render() {
    const { classes, url, handleChange, clearUrl, handleSubmit } = this.props;

    return (
      <Grid item xs={12} md={8} className={classes.grid}>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor='link'>
            <FormattedMessage {...messages.linkLabel} />
          </InputLabel>
          <Input
            id='link'
            placeholder='e.g. https://www.youtube.com/watch?v=uUcEzxQO4_0'
            value={url}
            type='url'
            onChange={handleChange}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(url)}
            endAdornment={
              url.length ?
                <InputAdornment position='end'>
                  <IconButton onClick={clearUrl}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment> :
                null
            }
          />
        </FormControl>
        <div className={classes.wrapper}>
          <Button onClick={() => handleSubmit(url)} fab color='primary'>
            <AddIcon />
          </Button>
        </div>
      </Grid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  url: selectUrl(),
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange({ target: { value } }) {
    dispatch(changeUrl(value));
  },
  clearUrl() {
    dispatch(changeUrl(''));
  },
  handleSubmit(url) {
    dispatch(addFile({ source: url }));
    dispatch(changeUrl(''));
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'form', reducer });

export default compose(
  withReducer,
  withConnect,
)(withStyles(styles)(Form));
