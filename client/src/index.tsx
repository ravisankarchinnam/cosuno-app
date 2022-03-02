import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import AppContextProvider from "context/AppContext";

ReactDOM.render(
  <AppContextProvider>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </AppContextProvider>,
  document.querySelector("#root"),
);
