import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./Home";

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: "#FFF",
        dark: "#f4f6f8",
        paper: "#FFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
