import { InputBase, InputBaseProps, styled } from '@mui/material';
import React from 'react';

const SearchInput = styled((props: InputBaseProps) => <InputBase {...props} />)(
  ({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  })
);

export default SearchInput;
