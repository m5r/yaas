/*
 *
 * Form actions
 *
 */

import { CHANGE_URL } from './constants';

export const changeUrl = (url) => ({
  type: CHANGE_URL,
  url,
});
