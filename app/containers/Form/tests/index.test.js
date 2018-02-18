// import React from 'react';
// import { shallow, mount } from 'enzyme';
// import { IntlProvider } from 'react-intl';
//
// import { FormControl } from 'material-ui/Form';
// import { Form, mapDispatchToProps } from '../index';
//
// const classes = {
//   buttonProgress: "Form-buttonProgress-162",
//   grid: "Form-grid-163",
//   wrapper: "Form-wrapper-161",
// };
//
describe('<Form />', () => {
  it('should render the input with the url', () => {
//     const renderedComponent = shallow(
//       <Form classes={classes} url='' />
//     );
//     expect(renderedComponent.contains(<FormControl fullWidth className={classes.formControl} />)).toEqual(true);
  });
//
//   it('should render fetch the repos on mount if a username exists', () => {
//     const submitSpy = jest.fn();
//     mount(
//       <IntlProvider locale="en">
//         <Form
//           username="Not Empty"
//           onChangeUsername={() => {}}
//           onSubmitForm={submitSpy}
//         />
//       </IntlProvider>
//     );
//     expect(submitSpy).toHaveBeenCalled();
//   });
//
//   it('should not call onSubmitForm if username is an empty string', () => {
//     const submitSpy = jest.fn();
//     mount(
//       <IntlProvider locale="en">
//         <Form
//           onChangeUsername={() => {}}
//           onSubmitForm={submitSpy}
//         />
//       </IntlProvider>
//     );
//     expect(submitSpy).not.toHaveBeenCalled();
//   });
//
//   it('should not call onSubmitForm if username is null', () => {
//     const submitSpy = jest.fn();
//     mount(
//       <IntlProvider locale="en">
//         <Form
//           username=""
//           onChangeUsername={() => {}}
//           onSubmitForm={submitSpy}
//         />
//       </IntlProvider>
//     );
//     expect(submitSpy).not.toHaveBeenCalled();
//   });
//
//   describe('mapDispatchToProps', () => {
//     describe('onChangeUsername', () => {
//       it('should be injected', () => {
//         const dispatch = jest.fn();
//         const result = mapDispatchToProps(dispatch);
//         expect(result.onChangeUsername).toBeDefined();
//       });
//
//       it('should dispatch changeUsername when called', () => {
//         const dispatch = jest.fn();
//         const result = mapDispatchToProps(dispatch);
//         const username = 'mxstbr';
//         result.onChangeUsername({ target: { value: username } });
//         expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
//       });
//     });
//
//     describe('onSubmitForm', () => {
//       it('should be injected', () => {
//         const dispatch = jest.fn();
//         const result = mapDispatchToProps(dispatch);
//         expect(result.onSubmitForm).toBeDefined();
//       });
//
//       it('should dispatch loadRepos when called', () => {
//         const dispatch = jest.fn();
//         const result = mapDispatchToProps(dispatch);
//         result.onSubmitForm();
//         expect(dispatch).toHaveBeenCalledWith(loadRepos());
//       });
//
//       it('should preventDefault if called with event', () => {
//         const preventDefault = jest.fn();
//         const result = mapDispatchToProps(() => {});
//         const evt = { preventDefault };
//         result.onSubmitForm(evt);
//         expect(preventDefault).toHaveBeenCalledWith();
//       });
//     });
//   });
});
