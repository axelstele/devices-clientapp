import { SORT_BY_OPTIONS } from 'utils/constants';

// eslint-disable-next-line import/prefer-default-export
export const customSortBy = (devices, value) => devices.sort(
  (a, b) => {
    if (value === SORT_BY_OPTIONS[0].value) {
      return a[value].toUpperCase().localeCompare(b[value].toUpperCase());
    }
    return Number(a[value]) - Number(b[value]);
  },
);
