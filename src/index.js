import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "@mui/material";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

// Create a root
const root = ReactDOM.createRoot(container);

// Add this in `index.js` or `App.js`
const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        margin: 0,
        padding: 0,
        fontSize: "16px",
        "@media (max-width: 600px)": {
          fontSize: "14px",
        },
      },
    }}
  />
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {globalStyles}
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
