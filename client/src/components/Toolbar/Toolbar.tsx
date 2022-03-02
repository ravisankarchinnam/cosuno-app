import React from 'react';
import { Toolbar as MuiToolbar, Typography } from '@mui/material';
import Search from 'components/Search';
import Filter from 'components/Filter';

const Toolbar = () => (
  <MuiToolbar
    sx={{
      pl: { sm: 2 },
      pr: { xs: 1, sm: 1 },
    }}
  >
    <Typography
      sx={{ flex: '1 1 100%' }}
      variant="h6"
      id="tableTitle"
      component="div"
    >
      Contractors
    </Typography>
    <Search />
    <Filter />
  </MuiToolbar>
);

export default Toolbar;
