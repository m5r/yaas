/**
 *
 * Asynchronously loads the component for FileItemSecondaryAction
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
