/**
 *
 * FileItemSecondaryAction
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Grow from 'material-ui/transitions/Grow';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import { ListItemSecondaryAction } from 'material-ui/List';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';
import { Delete as DeleteIcon, FileDownload as FileDownloadIcon, MoreVert as MoreVertIcon } from 'material-ui-icons';
import { Manager, Popper, Target } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointerEventsNone: {
    pointerEvents: 'none',
  },
  pointerEventsAuto: {
    pointerEvents: 'auto',
  },
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
    width: '100%',
    height: '100%',
  },
  progress: {
    margin: `0 ${theme.spacing.unit * 1.5}px`,
  },
});

class FileItemSecondaryAction extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
    source: PropTypes.string,
    url: PropTypes.string,
    handleDeleteClick: PropTypes.func,
  };

  state = {
    isMenuOpen: false,
  };

  handleClick = () => this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));

  handleClose = () => this.setState({ isMenuOpen: false });

  render() {
    const { classes, source, url, handleDeleteClick } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <ListItemSecondaryAction className={classes.root}>
        <Hidden smDown>
          {
            typeof url === 'undefined' ?
              <CircularProgress size={24} className={classes.progress} /> :
              <a
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton aria-label='Download'>
                  <FileDownloadIcon />
                </IconButton>
              </a>
          }
          <IconButton
            aria-label='Delete'
            onClick={() => handleDeleteClick(source)}
          >
            <DeleteIcon />
          </IconButton>
        </Hidden>
        <Hidden mdUp>
          <Fragment>
            <Manager>
              <Target>
                <IconButton
                  aria-label='More'
                  aria-owns={isMenuOpen ? 'secondary-action' : null}
                  aria-haspopup='true'
                  onClick={this.handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
              </Target>
              <Popper
                placement='bottom-end'
                eventsEnabled={isMenuOpen}
                className={classNames({ [classes.pointerEventsNone]: !isMenuOpen })}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow in={isMenuOpen} id='secondary-action'>
                    <Paper>
                      <MenuList
                        role='menu'
                      >
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.pointerEventsNone}
                        >
                          <a
                            href={source}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={classNames(classes.link, { [classes.pointerEventsAuto]: isMenuOpen })}
                          >
                            <FormattedMessage {...messages.openOriginalResource} />
                          </a>
                        </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.pointerEventsNone}
                          disabled={typeof url === 'undefined'}
                        >
                          <a
                            href={url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={classes.link}
                          >
                            <FormattedMessage {...messages.download} />
                          </a>
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleDeleteClick(source)}
                        >
                          <FormattedMessage {...messages.delete} />
                        </MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                </ClickAwayListener>
              </Popper>
            </Manager>
          </Fragment>
        </Hidden>
      </ListItemSecondaryAction>
    );
  }
}

export default withStyles(styles)(FileItemSecondaryAction);
