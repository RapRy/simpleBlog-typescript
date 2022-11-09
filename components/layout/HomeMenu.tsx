import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Props = {
  children: React.ReactNode;
};

const drawerWidth = 240;
const navItems = ["Forum", "Events", "Announcements", "About", "Contact"];

const HomeMenu = ({ children }: Props): JSX.Element => {
  const { asPath } = useRouter();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} paddingTop={5}>
      <List>
        {navItems.map((item, i) => (
          <>
            <ListItem key={i}>
              <Link href={`/${item}`}>
                <a style={{ textDecoration: "none" }}>
                  <ListItemText
                    primary={item}
                    disableTypography
                    sx={{
                      color: asPath.includes(item) ? "primary.light" : "#fff",
                      fontSize: ".8rem",
                      fontWeight: 600,
                      paddingX: 2,
                      paddingY: "5px",
                      "&:hover": {
                        color: "primary.light",
                      },
                    }}
                  />
                </a>
              </Link>
            </ListItem>
            <Divider variant="middle" />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color="transparent"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="body1"
            fontSize={"1.6rem"}
            fontWeight={900}
            textTransform="uppercase"
            component="div"
            sx={{ flexGrow: 1, color: "primary.main" }}
          >
            <Link href="/">
              <a style={{ textDecoration: "none", color: "inherit" }}>Logo</a>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <Link href={`/${item.toLowerCase()}`} key={i}>
                <a style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      color: asPath.includes(item) ? "primary.light" : "#fff",
                      marginX: 2,
                      textTransform: "unset",
                      "&:hover": {
                        background: "transparent",
                        color: "primary.light",
                      },
                    }}
                    disableRipple={true}
                  >
                    {item}
                  </Button>
                </a>
              </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "none" },
              "&:hover": {
                background: "transparent",
              },
            }}
            size="large"
          >
            <MenuIcon
              fontSize={"large"}
              sx={{
                color: "#fff",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "primary.main",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" style={{ width: "100%" }}>
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>
  );
};

export default HomeMenu;
