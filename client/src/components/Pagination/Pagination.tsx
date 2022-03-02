import React from 'react';
import { TablePagination } from '@mui/material';
import { useAppContext } from 'context/AppContext';

const Pagination = () => {
  const { rows, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    useAppContext();
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={rows.length}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      backIconButtonProps={{ color: 'primary' }}
      nextIconButtonProps={{ color: 'primary' }}
    />
  );
};

export default Pagination;
