import { all, fork } from 'redux-saga/effects';
import watchGetDevices from './get';
import watchAddDevice from './add';
import watchEditDevice from './edit';
import watchRemoveDevice from './remove';

export default function* devicesSagas() {
  yield all([
    fork(watchGetDevices),
    fork(watchAddDevice),
    fork(watchEditDevice),
    fork(watchRemoveDevice),
  ]);
}
