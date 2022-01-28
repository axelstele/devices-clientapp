/* eslint-disable camelcase */
import { createSlice, createAction } from '@reduxjs/toolkit';
import { FILTER_TYPE_OPTIONS, SORT_BY_OPTIONS } from 'utils/constants';

const get = createAction('devices/get');
const getSuccess = createAction('devices/getSuccess');
const getError = createAction('devices/getError');
const add = createAction('devices/add');
const addSuccess = createAction('devices/addSuccess');
const addError = createAction('devices/addError');
const edit = createAction('devices/edit');
const editSuccess = createAction('devices/editSuccess');
const editError = createAction('devices/editError');
const remove = createAction('devices/remove');
const removeSuccess = createAction('devices/removeSuccess');
const removeError = createAction('devices/removeError');
const setFilter = createAction('devices/setFilter');
const setOrderBy = createAction('devices/setOrderBy');

export const devices = {
  get,
  getSuccess,
  getError,
  add,
  addSuccess,
  addError,
  edit,
  editSuccess,
  editError,
  remove,
  removeSuccess,
  removeError,
  setFilter,
  setOrderBy,
};

const slice = createSlice({
  name: 'devices',
  initialState: {
    data: [],
    selectedFilter: FILTER_TYPE_OPTIONS[0],
    selectedOrderByOption: SORT_BY_OPTIONS[0],
  },
  reducers: {
    getSuccess: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    addSuccess: (state, { payload }) => ({
      ...state,
      data: [...state.data, { ...payload }],
    }),
    editSuccess: (state, {
      payload: {
        id, system_name, type, hdd_capacity,
      },
    }) => ({
      ...state,
      data: state.data.map((item) => (item.id === id ? {
        ...item, system_name, type, hdd_capacity,
      } : item)),
    }),
    removeSuccess: (state, {
      payload: { id },
    }) => ({
      ...state,
      data: state.data.filter((item) => item.id !== id),
    }),
    setFilter: (state, { payload }) => ({
      ...state,
      selectedFilter: payload,
    }),
    setOrderBy: (state, { payload }) => ({
      ...state,
      selectedOrderByOption: payload,
    }),
  },
});

export default slice.reducer;
