/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { devices } from 'redux/reducers/devices';
import { dataSelector } from 'redux/selectors/devices';
import { FILTER_TYPE_OPTIONS, SORT_BY_OPTIONS } from 'utils/constants';
import { customSortBy } from 'utils/constants/helpers';
import Toolbar from 'components/toolbar';
import Table from 'components/table';

function Dashboard() {
  const dispatch = useDispatch();
  const devicesData = useSelector(dataSelector, shallowEqual);
  const [selectedTypeFilter, setSelectedTypeFilter] = useState(FILTER_TYPE_OPTIONS[0]);
  const [selectedSortByOption, setSelectedSortByOption] = useState(SORT_BY_OPTIONS[0]);
  const [filteredDevices, setFilteredDevices] = useState([]);

  const handleTypeFilterChange = ({ target: { value } }) => {
    const filterType = FILTER_TYPE_OPTIONS.find((option) => option.value === value);
    let newFilteredDevices;
    if (value === FILTER_TYPE_OPTIONS[0].value) {
      newFilteredDevices = devicesData;
    } else {
      newFilteredDevices = devicesData.filter(({ type }) => type === value);
    }
    setSelectedTypeFilter(filterType);
    setFilteredDevices(newFilteredDevices);
  };

  const handleSortByChange = ({ target: { value } }) => {
    const sortByOption = SORT_BY_OPTIONS.find((option) => option.value === value);
    const newFilteredDevices = [...filteredDevices];
    customSortBy(newFilteredDevices, value);
    setSelectedSortByOption(sortByOption);
    setFilteredDevices(newFilteredDevices);
  };

  useEffect(() => {
    dispatch(devices.get());
  }, []);

  useEffect(() => {
    const newFilteredDevices = [...devicesData];
    customSortBy(newFilteredDevices, selectedSortByOption.value);
    setFilteredDevices(newFilteredDevices);
    setSelectedTypeFilter(FILTER_TYPE_OPTIONS[0]);
  }, [JSON.stringify(devicesData)]);

  return (
    <>
      <Toolbar
        selectedTypeFilter={selectedTypeFilter}
        selectedSortByOption={selectedSortByOption}
        handleTypeFilterChange={handleTypeFilterChange}
        handleSortByChange={handleSortByChange}
      />
      <Table filteredDevices={filteredDevices} />
    </>
  );
}

export default Dashboard;
