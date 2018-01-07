import { createSelector } from 'reselect';

export const selectForm = (state) => state.get('form');

export const selectUrl = () => createSelector(
  selectForm,
  (formState) => formState.get('url'),
);
