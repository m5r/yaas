/**
 *
 * FileList
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';

import Grid from 'material-ui/Grid';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import FileItem from 'components/FileItem/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { logger } from 'utils/logger';
import { selectError, selectFiles } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFiles, removeFile } from './actions';
import messages from './messages';

const styles = (theme) => ({
  grid: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '25%',
    },
    display: 'flex',
    'overflow-y': 'auto',
    height: 'calc(100% - 72px)',
  },
  avatar: {
    width: '80px',
    height: '60px',
    borderRadius: 0,
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
});

export class FileList extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
    error: PropTypes.any,
    files: PropTypes.object,
    dispatchLoadFiles: PropTypes.func,
    dispatchRemoveFile: PropTypes.func,
  };

  componentDidMount() {
    this.props.dispatchLoadFiles();
  }

  toastId;

  render() {
    const { classes, error, files, dispatchRemoveFile } = this.props;

    if (error && !toast.isActive(this.toastId)) {
      const errorMessage = messages[error] ? messages[error] : {
        ...messages.unknownError,
        values: {
          message: error.message,
        },
      };

      logger.error('Caught error:', error);

      this.toastId = toast.error(
        <FormattedMessage {...errorMessage} />,
        { position: 'bottom-center', hideProgressBar: true },
      );
    }

    return (
      <Grid item xs={12} md={6} className={classes.grid}>
        <List>
          {
            files &&
            files.map((file, index) =>
              (<FileItem
                key={file.get('source')}
                source={file.get('source')}
                thumbnail={file.get('thumbnail')}
                title={file.get('title')}
                url={file.get('url')}
                zIndex={files.size - index}
                isLast={index + 1 === files.size}
                handleDeleteClick={dispatchRemoveFile}
              />)
            )
          }
        </List>
      </Grid>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  files: selectFiles(),
  error: selectError(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLoadFiles() {
    return dispatch(loadFiles());
  },
  dispatchRemoveFile(source) {
    return dispatch(removeFile({ source }));
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'fileList', reducer });
const withSaga = injectSaga({ key: 'fileList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withStyles(styles)(FileList));
