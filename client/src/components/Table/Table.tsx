import React from "react";
import {
  Paper,
  Avatar,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Toolbar from "components/Toolbar";
import Pagination from "components/Pagination";
import {useAppContext} from "context/AppContext";
import parse from "html-react-parser";

interface HeadCell {
  label: string;
  value: string;
}

const headCells: HeadCell[] = [
  {
    label: "Logo",
    value: "logo",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "City",
    value: "city",
  },
  {
    label: "Specialities",
    value: "specialities",
  },
];

const Table = () => {
  const {rows, page, rowsPerPage} = useAppContext();
  return (
    <Paper>
      <Toolbar />
      <TableContainer elevation={0} component={Paper}>
        <MuiTable sx={{minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells?.map(({label, value}: HeadCell) => (
                <TableCell key={value} sortDirection="asc">
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map(({id, name, city, specialities, logo}) => (
                <TableRow key={id} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                  <TableCell component="th" scope="row">
                    <Avatar sx={{width: 56, height: 56}} alt={name} src={logo} />
                  </TableCell>
                  <TableCell>{parse(name)}</TableCell>
                  <TableCell>{city}</TableCell>
                  <TableCell>{specialities}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <Pagination />
    </Paper>
  );
};

export default Table;
