import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { devices } from 'redux/reducers/devices';
import { edit } from 'endpoints/devices';
import { push } from 'connected-react-router';

export function* callEditDevice({
  payload: {
    id, systemName, type, hddCapacity,
  },
}) {
  try {
    yield call(edit, {
      id, system_name: systemName, type, hdd_capacity: hddCapacity,
    });
    yield put(devices.editSuccess({
      id, system_name: systemName, type, hdd_capacity: hddCapacity,
    }));
    yield put(push('/'));
  } catch {
    alert('An error ocurred');
  }
}

export default function* watchEditDevice() {
  yield all([takeLatest(devices.edit.type, callEditDevice)]);
}
