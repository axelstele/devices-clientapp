import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { devices } from 'redux/reducers/devices';
import { get } from 'endpoints/devices';

export function* callGetDevices() {
  try {
    const { data } = yield call(get);
    yield put(devices.getSuccess(data));
  } catch {
    alert('An error ocurred');
  }
}

export default function* watchGetDevices() {
  yield all([takeLatest(devices.get.type, callGetDevices)]);
}
