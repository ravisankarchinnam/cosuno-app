import { Checkbox, ListItemText, MenuItem } from '@mui/material';
import React from 'react';

interface FilterListItemProps {
  value: string;
  selected: boolean;
  onClick: (newFilter: string) => void;
}

const FilterListItem = ({ value, selected, onClick }: FilterListItemProps) => {
  return (
    <MenuItem
      value={value}
      selected={selected}
      onClick={(event) => onClick(value)}
    >
      <Checkbox checked={selected} />
      <ListItemText primary={value} />
    </MenuItem>
  );
};

export default FilterListItem;
