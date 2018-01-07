/**
 *
 * FileItem
 *
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles/index';
import FileItemPlaceholder from 'components/FileItemPlaceholder/Loadable';
import FileItemSecondaryAction from 'components/FileItemSecondaryAction/Loadable';

const styles = (theme) => ({
  grid: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '25%',
    },
    display: 'flex',
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

class FileItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
    source: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    zIndex: PropTypes.number,
    isLast: PropTypes.bool,
    handleDeleteClick: PropTypes.func,
  };

  render() {
    const { classes, source, thumbnail, title, url, zIndex, isLast, handleDeleteClick } = this.props;

    return (
      <Fragment key={source}>
        <ListItem style={{ zIndex }}>
          {typeof url === 'undefined' ?
            <FileItemPlaceholder /> :
            <Fragment>
              <ListItemAvatar>
                <Avatar
                  src={thumbnail}
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={title}
                secondary={(
                  <Hidden smDown>
                    <a
                      className={classes.link}
                      href={source}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {source}
                    </a>
                  </Hidden>
                )}
              />
            </Fragment>
          }
          <FileItemSecondaryAction
            source={source}
            url={url}
            handleDeleteClick={handleDeleteClick}
          />
        </ListItem>
        {!isLast && <Divider />}
      </Fragment>
    );
  }
}

export default withStyles(styles)(FileItem);
