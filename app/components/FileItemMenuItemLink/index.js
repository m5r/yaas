/**
*
* FileItemMenuItemLink
*
*/

import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import { MenuItem } from 'material-ui/Menu';
import PropTypes from 'prop-types';

const styles = {
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
};

class FileItemMenuItemLink extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    classes: PropTypes.object,
    disabled: PropTypes.bool,
    isMenuOpen: PropTypes.bool,
    message: PropTypes.object,
    onClick: PropTypes.func,
    url: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    const { classes, disabled, isMenuOpen, message, onClick, url } = this.props;

    return (
      <MenuItem
        onClick={onClick}
        className={classes.pointerEventsNone}
        disabled={disabled}
      >
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className={classNames(classes.link, { [classes.pointerEventsAuto]: isMenuOpen })}
        >
          <FormattedMessage {...message} />
        </a>
      </MenuItem>
    );
  }
}

export default withStyles(styles)(FileItemMenuItemLink);
