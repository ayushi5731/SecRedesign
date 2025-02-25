import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    // Outer box that spans full width, fixed to the top with a white background
    <Box
      sx={{
        backgroundColor: "#fff", // White background behind the navbar
        width: "100%",
        height:"100px",
        display: "flex",
        justifyContent: "center",
        py: 2,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    >
      {/* Red pill container with 80% width */}
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#E32933",
          borderRadius: "9999px", // fully rounded corners
          px:6,
          py: 1,
          gap: 4,
        }}
      >
        {/* Left: Placeholder image for logo with objectFit */}
        <Box
          component="img"
          src="/public/images/logo.png" // Replace with your logo URL
          alt="SecTheta Logo"
          sx={{ width: 150, height: 150, borderRadius: "50%", mr: 1, mb:1,objectFit: "contain" }}
        />

        {/* Center: Nav Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {["About", "Courses", "Free", "Blog"].map((item) => (
            <Typography
              key={item}
              variant="body1"
              sx={{
                color: "white",
                cursor: "pointer",
                fontSize:"20px",
                pl:4,
                "&:hover": { opacity: 0.8 },

              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Right: Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            borderRadius: "30px",
            textTransform: "none",
            ml:70,
            height:"50px",
            width:"60px",
            pl:6,
            pr:6,
            fontSize:"20px",
            "&:hover": {
              backgroundColor: "#f2f2f2",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
