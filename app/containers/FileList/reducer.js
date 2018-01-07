/*
 *
 * FileList reducer
 *
 */

import { fromJS } from 'immutable';
import storage from 'utils/storage';
import {
  ADD_FILE,
  ADD_FILE_ERROR,
  ADD_FILE_SUCCESS,
  LOAD_FILES,
  LOAD_FILES_ERROR,
  LOAD_FILES_SUCCESS,
  REMOVE_FILE,
  REMOVE_FILE_ERROR,
  REMOVE_FILE_SUCCESS,
} from './constants';

const initialState = fromJS({
  files: [],
  error: null,
  trash: [],
});

function fileListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FILES:
      return state
        .set('error', null);
    case LOAD_FILES_ERROR:
      return state
        .set('error', action.error);
    case LOAD_FILES_SUCCESS:
      return state
        .set('files', fromJS(action.files));
    case ADD_FILE:
      if (state.get('files').filter((file) => file.get('source') === action.file.source).size > 0) {
        // File is already present in the list
        return state
          .set('error', null);
      }

      return state
        .set('error', null)
        .set('files', fromJS([action.file, ...state.get('files')]));
    case ADD_FILE_ERROR: {
      const fileIndexToRemove = state.get('files').findIndex(
        (file) => file.get('source') === action.file.source && file.get('url') === undefined
      );

      if (fileIndexToRemove < 0) {
        return state
          .set('error', action.error);
      }

      return state
        .set('error', action.error)
        .set(
          'files',
          state.get('files').remove(fileIndexToRemove),
        );
    }
    case ADD_FILE_SUCCESS:
      storage.getItem('files')
        .then(
          (files) => storage.setItem('files', [action.file, ...files])
        );

      return state
        .set('error', null)
        .set(
          'files',
          state.get('files').set(
            state.get('files').findIndex(
              (file) => file.get('source') === action.file.source
            ),
            fromJS(action.file),
          ),
        );
    case REMOVE_FILE: {
      if (state.get('files').filter((file) => file.get('source') === action.file.source).size === 0) {
        // File is no longer present in the list
        return state;
      }
      const fileIndexToRemove = state.get('files').findIndex(
        (file) => file.get('source') === action.file.source
      );

      return state
        .set('error', null)
        .set(
          'trash',
          state.get('files').get(fileIndexToRemove),
        )
        .set(
          'files',
          state.get('files').remove(fileIndexToRemove),
        );
    }
    case REMOVE_FILE_ERROR: {
      const fileIndexFromTrash = state.get('trash').findIndex((file) => file.get('source') === action.file.source);

      return state
        .set('error', action.error)
        .set(
          'files',
          [state.get('trash').get(fileIndexFromTrash), ...state.get('files')],
        )
        .set(
          'trash',
          state.get('trash').remove(fileIndexFromTrash),
        );
    }
    case REMOVE_FILE_SUCCESS:
    default:
      return state;
  }
}

export default fileListReducer;
