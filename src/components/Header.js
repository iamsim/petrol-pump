import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = ({ onLogout, username }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar>
        {/* Welcome Message on the Left */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Welcome, {username || "Guest"}
        </Typography>

        {/* Logout Button on the Right */}
        <Button
          color="inherit"
          onClick={onLogout}
          sx={{
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
