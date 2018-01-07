import { createSelector } from 'reselect';

export const selectFileList = (state) => state.get('fileList');

export const selectFiles = () => createSelector(
  selectFileList,
  (fileListState) => fileListState.get('files'),
);

export const selectError = () => createSelector(
  selectFileList,
  (fileListState) => fileListState.get('error'),
);
