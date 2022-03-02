import React from "react";
import {AppBar, Container, Link, Toolbar} from "@mui/material";

const Header = () => (
  <AppBar position="static" color="inherit" sx={{boxShadow: 1, mb: 4}}>
    <Toolbar sx={{boxShadow: 0, py: 3}}>
      <Container maxWidth="lg">
        <Link href="/">
          <img src="assets/logo.svg" alt="logo" />
        </Link>
      </Container>
    </Toolbar>
  </AppBar>
);

export default Header;
