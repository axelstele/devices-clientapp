/* eslint-disable import/no-named-as-default */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import devices from './devices';

export default (history) => combineReducers({
  router: connectRouter(history),
  devices,
});
