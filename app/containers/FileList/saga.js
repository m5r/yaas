import { call, put, select, takeLatest } from 'redux-saga/effects';
import storage from 'utils/storage';
import axios from 'axios';

import { ADD_FILE, LOAD_FILES, REMOVE_FILE } from './constants';
import { fileAdded, fileAddingError, fileRemoved, fileRemovingError, filesLoaded, filesLoadingError } from './actions';
import { selectFiles } from './selectors';

export function* getFiles() {
  try {
    const files = yield call([storage, storage.getItem], 'files');

    if (!files) {
      yield call([storage, storage.setItem], 'files', []);
      yield put(filesLoaded([]));
    } else {
      yield put(filesLoaded(files));
    }
  } catch (err) {
    yield put(filesLoadingError(err));
  }
}

export function* addFile({ file: { source } }) {
  const files = yield select(selectFiles());
  const isFilePresent = yield files.filter(
    (file) =>
      file.get('source') === source &&
      file.get('title') !== undefined
  ).size !== 0;

  if (isFilePresent) {
    yield put(fileAddingError('fileAlreadyPresent', { source }));
  } else {
    try {
      const { data } = yield call(axios.post, 'https://api.yaas.tools/', { url: source });
      yield put(fileAdded(data));
    } catch (err) {
      yield put(fileAddingError(err, { source }));
    }
  }
}

export function* removeFile({ file: { source } }) {
  try {
    const files = yield call([storage, storage.getItem], 'files');
    yield call([storage, storage.setItem], 'files', files.filter((file) => file.source !== source));
    yield put(fileRemoved());
  } catch (err) {
    yield put(fileRemovingError(err, { source }));
  }
}

export default function* fileListData() {
  yield takeLatest(LOAD_FILES, getFiles);
  yield takeLatest(ADD_FILE, addFile);
  yield takeLatest(REMOVE_FILE, removeFile);
}
