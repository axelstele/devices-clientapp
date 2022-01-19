import { createSelector } from 'reselect';

export const devicesSelector = ({ devices }) => devices;

export const dataSelector = createSelector(
  devicesSelector,
  (devices) => devices?.data,
);
