import { fromJS } from 'immutable';
import formReducer from '../reducer';
import { changeUrl } from '../actions';

describe('formReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      url: '',
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(formReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeUrl action correctly', () => {
    const fixture = 'https://www.youtube.com/watch?v=uUcEzxQO4_0';
    const expectedResult = state.set('url', fixture);

    expect(formReducer(state, changeUrl(fixture))).toEqual(expectedResult);
  });
});
