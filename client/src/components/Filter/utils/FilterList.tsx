import React, { useState, MouseEvent } from 'react';
import { IconButton, Menu, Tooltip } from '@mui/material';
import { FilterList as FilterListIcon } from '@mui/icons-material';
import { useAppContext } from 'context/AppContext';
import { ISpeciality } from 'context/types';
import FilterListItem from './FilterListItem';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const PaperProps = {
  style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
  },
};

interface FilterListProps {
  selectedFilters: string[];
  onSelectFilter: (filter: string) => void;
}

const FilterList = ({ selectedFilters, onSelectFilter }: FilterListProps) => {
  const { specialities } = useAppContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickListItem = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectFilter = (filter: string) => {
    onSelectFilter(filter);
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Filter list">
        <IconButton color="primary" onClick={handleClickListItem}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="filters"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={PaperProps}
        MenuListProps={{
          'aria-labelledby': 'filters',
          role: 'listbox',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {specialities.map(({ id, name }: ISpeciality) => (
          <FilterListItem
            key={id}
            value={name}
            selected={selectedFilters?.includes(name)}
            onClick={handleSelectFilter}
          />
        ))}
      </Menu>
    </>
  );
};

export default FilterList;
