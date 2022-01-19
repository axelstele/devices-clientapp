import React from 'react';
import PropTypes from 'prop-types';
import { AddButton } from 'styled/button';
import {
  ADD, DEVICE_TYPE, FILTER_TYPE_OPTIONS, SORT_BY, SORT_BY_OPTIONS,
} from 'utils/constants';
import { useHistory } from 'react-router-dom';
import { ToolbarContainer, Select } from 'styled/toolbar-container';

function Toolbar({
  selectedTypeFilter, selectedSortByOption, handleTypeFilterChange, handleSortByChange,
}) {
  const history = useHistory();

  const handleAdd = () => {
    history.push('device');
  };

  return (
    <ToolbarContainer>
      <AddButton type="button" onClick={handleAdd}>{ADD}</AddButton>
      <label htmlFor="typeFilter">
        {DEVICE_TYPE}
        <Select id="typeFilter" name="typeFilter" value={selectedTypeFilter.value} onChange={handleTypeFilterChange}>
          {FILTER_TYPE_OPTIONS.map(
            ({ value, label }) => <option key={value} value={value}>{label}</option>,
          )}
        </Select>
      </label>
      <label htmlFor="sortBy">
        {SORT_BY}
        <Select id="sortBy" name="sortBy" value={selectedSortByOption.value} onChange={handleSortByChange}>
          {SORT_BY_OPTIONS.map(
            ({ value, label }) => <option key={value} value={value}>{label}</option>,
          )}
        </Select>
      </label>
    </ToolbarContainer>
  );
}

Toolbar.propTypes = {
  selectedTypeFilter: PropTypes.exact({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  selectedSortByOption: PropTypes.exact({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  handleTypeFilterChange: PropTypes.func.isRequired,
  handleSortByChange: PropTypes.func.isRequired,
};

export default Toolbar;
