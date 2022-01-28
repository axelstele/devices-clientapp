export const TYPE_OPTIONS = [
  { value: 'WINDOWS_WORKSTATION', label: 'Windows Workstation' },
  { value: 'WINDOWS_SERVER', label: 'Windows Server' },
  { value: 'MAC', label: 'Mac' },
];

export const FILTER_TYPE_OPTIONS = [
  { value: 'ALL', label: 'All' },
  ...TYPE_OPTIONS,
];

export const SORT_BY_OPTIONS = [
  { value: 'system_name', label: 'System Name' },
  { value: 'hdd_capacity', label: 'HDD Capacity' },
];

export const ADD = 'Add';
export const EDIT = 'Edit';
export const DELETE = 'Delete';
export const DEVICE = 'Device';
export const ACTIONS = 'Actions';
export const DEVICE_TYPE = 'Device Type';
export const SORT_BY = 'Sort By';
export const BACK = 'Back';
