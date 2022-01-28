/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { devices } from 'redux/reducers/devices';
import {
  Form, Input, SubmitInput, Select,
} from 'styled/form';

import {
  ADD, DEVICE, EDIT, TYPE_OPTIONS, BACK,
} from 'utils/constants';
import { BackButton } from 'styled/button';

function Device() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();

  const [systemName, setSystemName] = useState('');
  const [selectedType, setSelectedType] = useState(TYPE_OPTIONS[0]);
  const [hddCapacity, setHddCapacity] = useState('');

  const handleSystemNameChange = ({ target: { value } }) => {
    setSystemName(value);
  };

  const handleTypeChange = ({ target: { value } }) => {
    const type = TYPE_OPTIONS.find((option) => option.value === value);
    setSelectedType(type);
  };

  const handleHddCapacityChange = ({ target: { value } }) => {
    setHddCapacity(value);
  };

  const handleBack = () => {
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state) {
      const { device: { id } } = state;
      dispatch(devices.edit({
        id, systemName, type: selectedType.value, hddCapacity,
      }));
    } else {
      dispatch(devices.add({ systemName, type: selectedType.value, hddCapacity }));
    }
  };

  useEffect(() => {
    if (state) {
      const { device: { type, system_name, hdd_capacity } } = state;
      const foundType = TYPE_OPTIONS.find((option) => option.value === type);
      setSystemName(system_name);
      setSelectedType(foundType);
      setHddCapacity(hdd_capacity);
    }
  }, []);

  return (
    <>
      <h3>{`${state?.device ? EDIT : ADD} ${DEVICE}`}</h3>
      <BackButton type="button" onClick={handleBack}>{BACK}</BackButton>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="System Name" type="text" id="systemName" name="systemName" value={systemName} onChange={handleSystemNameChange} required />
        <br />
        <br />
        <Select id="type" name="type" value={selectedType.value} onChange={handleTypeChange}>
          {TYPE_OPTIONS.map(
            ({ value, label }) => <option key={value} value={value}>{label}</option>,
          )}
        </Select>
        <br />
        <br />
        <Input placeholder="HDD Capacity (GB)" type="number" id="hddCapacity" name="hddCapacity" value={hddCapacity} onChange={handleHddCapacityChange} required />
        <br />
        <br />
        <SubmitInput type="submit" value={state?.device ? EDIT : ADD} />
      </Form>
    </>
  );
}

export default Device;
