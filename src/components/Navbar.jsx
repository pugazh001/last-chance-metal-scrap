import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom"; // Import location hook
import logo from "../assets/img/logo2.png"; // Update with the correct path

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate(); // Initialize the navigation hook
  const location = useLocation(); // Get current route location

  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [activePath, setActivePath] = useState(location.pathname); // Track active route

  const handleMobileMenuOpen = (event) => setMobileMenuAnchor(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMenuAnchor(null);

  // Navigation items with paths
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Products", path: "/product" },
    { label: "Certificates", path: "/certificates" },
   
    { label: "Contact", path: "/contact" },
  ];

  // Update active path on location change
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        boxShadow: "none",
        zIndex: 1100,
        backgroundColor: "#f6f4f1",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Left: Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button onClick={() => navigate("/")}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: 80, borderRadius: "50%" }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "16px", md: "18px" },
                color: "black",
              }}
            >
              Last Chance Metal Scrap
            </Typography>
          </Button>
        </Box>

        {/* Center: Menu */}
        {!isMobile ? (
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flex: 1,
              justifyContent: "center",
            }}
          >
            {navItems.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                onClick={() => navigate(item.path)} // Navigate to the route
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: activePath === item.path ? "#FFD700" : "transparent", // Highlight active item
                  "&:hover": {
                    backgroundColor: "#FFD700",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        ) : (
          // Mobile Menu Icon
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleMobileMenuClose}
          >
            {navItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  navigate(item.path); // Navigate to the route
                  handleMobileMenuClose();
                }}
                sx={{
                  backgroundColor: activePath === item.path ? "#FFD700" : "transparent", // Highlight active item
                  "&:hover": { backgroundColor: "#FFD700" }, // Hover effect
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
