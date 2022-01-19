/* eslint-disable camelcase */
import axios from 'axios-config';

export const get = async () => axios.get(
  '/devices',
);

export const add = async ({ system_name, type, hdd_capacity }) => axios.post(
  '/devices',
  { system_name, type, hdd_capacity },
);

export const edit = async ({
  id, system_name, type, hdd_capacity,
}) => axios.put(
  `/devices/${id}`,
  {
    id, system_name, type, hdd_capacity,
  },
);

export const remove = async ({ id }) => axios.delete(
  `/devices/${id}`,
  { id },
);
