import { createSlice, createAction } from '@reduxjs/toolkit';

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
};

const slice = createSlice({
  name: 'devices',
  initialState: {
    data: [],
  },
  reducers: {
    getSuccess: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
  },
});

export default slice.reducer;
