import { changeUrl } from '../actions';
import { CHANGE_URL } from '../constants';

describe('Form actions', () => {
  describe('changeUrl', () => {
    it('should return the correct type and the passed url', () => {
      const fixture = 'https://www.youtube.com/watch?v=uUcEzxQO4_0';
      const expected = {
        type: CHANGE_URL,
        url: fixture,
      };
      expect(changeUrl('https://www.youtube.com/watch?v=uUcEzxQO4_0')).toEqual(expected);
    });
  });
});
