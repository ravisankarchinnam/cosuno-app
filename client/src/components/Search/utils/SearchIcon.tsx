import React from "react";
import {styled} from "@mui/material/styles";
import {Search as MuiSearchIcon} from "@mui/icons-material";

const Container = styled("div")(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchIcon = () => (
  <Container>
    <MuiSearchIcon color="primary" />
  </Container>
);

export default SearchIcon;
