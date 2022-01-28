import { createSelector } from 'reselect';

export const devicesSelector = ({ devices }) => devices;

export const dataSelector = createSelector(
  devicesSelector,
  (devices) => devices?.data,
);

export const selectedFilterSelector = createSelector(
  devicesSelector,
  (devices) => devices?.selectedFilter,
);

export const selectedOrderByOptionSelector = createSelector(
  devicesSelector,
  (devices) => devices?.selectedOrderByOption,
);
