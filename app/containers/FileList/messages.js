/*
 * FileList Messages
 *
 * This contains all the text for the FileList component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.FileList';

export default defineMessages({
  fileAlreadyPresent: {
    id: `${scope}.fileAlreadyPresent`,
    defaultMessage: 'File is already present in the list!',
  },
  unknownError: {
    id: `${scope}.unknownError`,
    defaultMessage: '{message} - Please retry',
  },
});
