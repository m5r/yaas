/*
 * FileItemSecondaryAction Messages
 *
 * This contains all the text for the FileItemSecondaryAction component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.FileItemSecondaryAction';

export default defineMessages({
  openOriginalResource: {
    id: `${scope}.openOriginalResource`,
    defaultMessage: 'Open original resource',
  },
  download: {
    id: `${scope}.download`,
    defaultMessage: 'Download',
  },
  delete: {
    id: `${scope}.delete`,
    defaultMessage: 'Delete',
  },
});
