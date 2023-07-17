import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { ShoppingCartOutlined, Search } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const pages = ["Shop", "Blog", "Our Story"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          color: "00000ff",
          marginBottom: "1em",
          alignItems: "center",
        },
      },
    },
    /*  MuiToolbar:{
      styleOverrides: {
        // Name of the slot
        root: {backgroundColor:"yellow"},border: "1px solid red" },
    }, */
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          fontFamily: "Montserrat",
          color: "00000ff",
        },
      },
    },
  },
});

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="assets/logo.svg" alt="shopee" />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",

              /*   alignItems: "center", */
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    color: "#000000ff",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    marginLeft: "2em",
                  }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ color: "#000000ff" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#000000ff",
                  display: "block",
                  marginLeft: "2em",
                  fontSize: "1,2em",
                  verticalAlign: "center",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, flexWrap: "nowrap" }}>
            <Box
              sx={{
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PermIdentityIcon
                    sx={{
                      color: "#000000ff",
                      display: { xs: "none", md: "none", lg: "flex" },
                      marginLeft: "0.5em",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <IconButton>
                <ShoppingCartOutlined
                  sx={{
                    marginLeft: "0.5em",
                    color: "#000000ff",
                    display: { xs: "none", md: "flex", lg: "flex" },
                  }}
                />
              </IconButton>
              <IconButton>
                <Search
                  sx={{
                    color: "#000000ff",
                    display: { xs: "none", md: "none", lg: "flex" },
                    marginLeft: "0.5em",
                  }}
                />
              </IconButton>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon
                  sx={{
                    color: "#000000ff",
                    display: { xs: "flex", md: "none", lg: "none" },
                    marginLeft: "1em",
                  }}
                />
              </IconButton>
            </Box>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
