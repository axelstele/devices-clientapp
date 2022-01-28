import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { devices } from 'redux/reducers/devices';
import { remove } from 'endpoints/devices';

export function* callRemoveDevice({ payload: { id } }) {
  try {
    yield call(remove, { id });
    yield put(devices.removeSuccess({ id }));
  } catch {
    // TODO handle error
  }
}

export default function* watchRemoveDevice() {
  yield all([takeLatest(devices.remove.type, callRemoveDevice)]);
}
