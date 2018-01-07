import { fromJS } from 'immutable';
import { selectForm, selectUrl } from '../selectors';

describe('selectForm', () => {
  it('should select the form state', () => {
    const formState = fromJS({
      url: '',
    });
    const mockedState = fromJS({
      form: formState,
    });
    expect(selectForm(mockedState)).toEqual(formState);
  });
});

describe('selectUrl', () => {
  const urlSelector = selectUrl();
  it('should select the url', () => {
    const url = 'https://www.youtube.com/watch?v=uUcEzxQO4_0';
    const mockedState = fromJS({
      form: {
        url,
      },
    });
    expect(urlSelector(mockedState)).toEqual(url);
  });
});
