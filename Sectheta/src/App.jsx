import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./components/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Organization from "./components/Organization";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        <Navbar />
        <Hero />
        <Why />
        <Organization />
      </Box>
    </ThemeProvider>
  );
}

export default App;
