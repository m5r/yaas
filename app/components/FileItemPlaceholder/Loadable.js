/**
 *
 * Asynchronously loads the component for FileItemPlaceholder
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
