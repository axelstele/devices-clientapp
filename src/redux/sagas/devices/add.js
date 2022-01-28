import {
  all, takeLatest, put, call,
} from 'redux-saga/effects';
import { devices } from 'redux/reducers/devices';
import { add } from 'endpoints/devices';
import { push } from 'connected-react-router';

export function* callAddDevice({ payload: { systemName, type, hddCapacity } }) {
  try {
    const { data } = yield call(add, { system_name: systemName, type, hdd_capacity: hddCapacity });
    yield put(devices.addSuccess({
      id: data.id, system_name: systemName, type, hdd_capacity: hddCapacity,
    }));
    yield put(push('/'));
  } catch {
    alert('An error ocurred');
  }
}

export default function* watchAddDevice() {
  yield all([takeLatest(devices.add.type, callAddDevice)]);
}
