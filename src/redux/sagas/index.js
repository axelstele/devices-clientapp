import { all, fork } from 'redux-saga/effects';
import devicesSagas from './devices';

export default function* rootSaga() {
  yield all([
    fork(devicesSagas),
  ]);
}
