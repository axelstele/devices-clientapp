import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { devices } from 'redux/reducers/devices';
import { dataSelector, selectedFilterSelector, selectedOrderByOptionSelector } from 'redux/selectors/devices';
import { FILTER_TYPE_OPTIONS, SORT_BY_OPTIONS } from 'utils/constants';
import { customSortBy } from 'utils/constants/helpers';
import Toolbar from 'components/toolbar';
import Table from 'components/table';

function Dashboard() {
  const dispatch = useDispatch();
  const devicesData = useSelector(dataSelector, shallowEqual);
  const selectedTypeFilter = useSelector(selectedFilterSelector, shallowEqual);
  const selectedSortByOption = useSelector(selectedOrderByOptionSelector, shallowEqual);
  const [filteredDevices, setFilteredDevices] = useState([]);

  const handleTypeFilterChange = ({ target: { value } }) => {
    const filterType = FILTER_TYPE_OPTIONS.find((option) => option.value === value);
    let newFilteredDevices = [...devicesData];
    if (value !== FILTER_TYPE_OPTIONS[0].value) {
      newFilteredDevices = newFilteredDevices.filter(({ type }) => type === value);
    }
    dispatch(devices.setFilter(filterType));
    customSortBy(newFilteredDevices, selectedSortByOption.value);
    setFilteredDevices(newFilteredDevices);
  };

  const handleSortByChange = ({ target: { value } }) => {
    const sortByOption = SORT_BY_OPTIONS.find((option) => option.value === value);
    const newFilteredDevices = [...filteredDevices];
    customSortBy(newFilteredDevices, value);
    dispatch(devices.setOrderBy(sortByOption));
    setFilteredDevices(newFilteredDevices);
  };

  useEffect(() => {
    let newFilteredDevices = [...devicesData];
    if (selectedTypeFilter.value !== FILTER_TYPE_OPTIONS[0].value) {
      newFilteredDevices = newFilteredDevices.filter(
        ({ type }) => type === selectedTypeFilter.value,
      );
    }
    customSortBy(newFilteredDevices, selectedSortByOption.value);
    setFilteredDevices(newFilteredDevices);
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
