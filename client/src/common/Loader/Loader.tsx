import React from "react";
import {Box, CircularProgress} from "@mui/material";
const Loader = () => {
  return (
    <Box sx={{margin: "auto", height: "100%"}}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
