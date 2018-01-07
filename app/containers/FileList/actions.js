/*
 *
 * FileList actions
 *
 */

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

export const loadFiles = () => ({
  type: LOAD_FILES,
});

export const filesLoaded = (files) => ({
  type: LOAD_FILES_SUCCESS,
  files,
});

export const filesLoadingError = (error) => ({
  type: LOAD_FILES_ERROR,
  error,
});

export const addFile = (file) => ({
  type: ADD_FILE,
  file,
});

export const fileAdded = (file) => ({
  type: ADD_FILE_SUCCESS,
  file,
});

export const fileAddingError = (error, file) => ({
  type: ADD_FILE_ERROR,
  error,
  file,
});

export const removeFile = (file) => ({
  type: REMOVE_FILE,
  file,
});

export const fileRemoved = () => ({
  type: REMOVE_FILE_SUCCESS,
});

export const fileRemovingError = (error, file) => ({
  type: REMOVE_FILE_ERROR,
  error,
  file,
});
