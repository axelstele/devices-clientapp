import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { EditButton, DeleteButton } from 'styled/button';
import {
  ACTIONS, DELETE, DEVICE, EDIT,
} from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { devices } from 'redux/reducers/devices';
import StyledTable from 'styled/table';

function Table({ filteredDevices }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = (device) => {
    history.push({ pathname: 'device', state: { device } });
  };

  const handleDelete = (id) => {
    dispatch(devices.remove({ id }));
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>{DEVICE}</th>
          <th>{ACTIONS}</th>
        </tr>
      </thead>
      <tbody>
        {filteredDevices?.map((device) => (
          <tr key={device.id}>
            <td>
              <span>{device.system_name}</span>
              <br />
              <span>{device.type}</span>
              <br />
              <span>{`${device.hdd_capacity} GB`}</span>
              <br />
            </td>
            <td>
              <EditButton type="button" onClick={() => handleEdit(device)}>{EDIT}</EditButton>
              <DeleteButton type="button" onClick={() => handleDelete(device.id)}>{DELETE}</DeleteButton>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  filteredDevices: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    system_name: PropTypes.string,
    type: PropTypes.string,
    hdd_capacity: PropTypes.string,
  })),
};

Table.defaultProps = {
  filteredDevices: [],
};

export default Table;
