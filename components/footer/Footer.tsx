import React from "react";
import Link from "next/link";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.background.default,
        padding: theme.spacing(6, 0),
      })}
    >
      <Container>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={12} lg={4}>
            <Typography
              variant="h4"
              sx={(theme) => ({
                color: theme.palette.primary.main,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: "1.3rem",
                marginBottom: theme.spacing(1),
              })}
            >
              University of Schools Colleges
            </Typography>
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: theme.palette.common.black,
                fontSize: ".75rem",
              })}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </Typography>
            <List component="ul">
              <ListItem
                disableGutters
                sx={(theme) => ({
                  color: theme.palette.common.black,
                  padding: 0,
                })}
              >
                <ListItemIcon
                  sx={(theme) => ({
                    minWidth: theme.spacing(3),
                  })}
                >
                  <PhoneIcon
                    sx={(theme) => ({
                      color: theme.palette.common.black,
                      fontSize: ".9rem",
                    })}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="(000) 000 - 0000)"
                  sx={(theme) => ({
                    ".MuiListItemText-primary": {
                      fontSize: ".85rem",
                    },
                  })}
                />
              </ListItem>
              <ListItem
                disableGutters
                sx={(theme) => ({
                  color: theme.palette.common.black,
                  padding: 0,
                })}
              >
                <ListItemIcon
                  sx={(theme) => ({
                    minWidth: theme.spacing(3),
                  })}
                >
                  <PhoneIcon
                    sx={(theme) => ({
                      color: theme.palette.common.black,
                      fontSize: ".9rem",
                    })}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="(000) 000 - 0000)"
                  sx={(theme) => ({
                    ".MuiListItemText-primary": {
                      fontSize: ".85rem",
                    },
                  })}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            sx={(theme) => ({
              sm: {
                marginTop: theme.spacing(3),
              },
            })}
          >
            <List
              component="ul"
              sx={(theme) => ({
                display: "inline-block",
                padding: theme.spacing(0, 3),
                "&:first-child": {
                  paddingLeft: theme.spacing(0),
                },
                "&:last-child": {
                  paddingRight: theme.spacing(0),
                },
              })}
            >
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/forum">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="The Forum"
                    />
                  </a>
                </Link>
              </ListItem>
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/events">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="Events"
                    />
                  </a>
                </Link>
              </ListItem>
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/announcements">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="Announcements"
                    />
                  </a>
                </Link>
              </ListItem>
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/requirements">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="Requirements"
                    />
                  </a>
                </Link>
              </ListItem>
            </List>
            <List
              component="ul"
              sx={(theme) => ({
                display: "inline-block",
                padding: theme.spacing(0, 3),
                "&:first-child": {
                  paddingLeft: theme.spacing(0),
                },
                "&:last-child": {
                  paddingRight: theme.spacing(0),
                },
              })}
            >
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/scholarships">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="Scholarships"
                    />
                  </a>
                </Link>
              </ListItem>
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/vision-and-mission">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="Vision and Mision"
                    />
                  </a>
                </Link>
              </ListItem>
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/alumni">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="Alumni"
                    />
                  </a>
                </Link>
              </ListItem>
              <ListItem sx={{ fontSize: ".85rem" }}>
                <Link href="/about">
                  <a style={{ textDecoration: "none" }}>
                    <ListItemText
                      sx={(theme) => ({
                        ".MuiListItemText-primary": {
                          color: theme.palette.common.black,
                          fontSize: ".85rem",
                          fontWeight: theme.typography.fontWeightBold,
                          transition: "color 300ms ease-in-out",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        },
                      })}
                      primary="About"
                    />
                  </a>
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} lg={2}>
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: theme.palette.common.black,
                fontWeight: theme.typography.fontWeightBold,
                fontSize: ".85rem",
              })}
            >
              Connect with us
            </Typography>
            <IconButton
              sx={(theme) => ({
                padding: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                "&:hover": {
                  background: "transparent",
                },
              })}
            >
              <FacebookIcon
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  transition: "color 300ms ease-in-out",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                })}
              />
            </IconButton>
            <IconButton
              sx={(theme) => ({
                padding: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                "&:hover": {
                  background: "transparent",
                },
              })}
            >
              <LinkedInIcon
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  transition: "color 300ms ease-in-out",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                })}
              />
            </IconButton>
            <IconButton
              sx={(theme) => ({
                padding: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                "&:hover": {
                  background: "transparent",
                },
              })}
            >
              <TwitterIcon
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  transition: "color 300ms ease-in-out",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                })}
              />
            </IconButton>
            <IconButton
              sx={(theme) => ({
                padding: theme.spacing(1),
                borderRadius: theme.shape.borderRadius,
                "&:hover": {
                  background: "transparent",
                },
              })}
            >
              <InstagramIcon
                sx={(theme) => ({
                  color: theme.palette.primary.main,
                  transition: "color 300ms ease-in-out",
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                })}
              />
            </IconButton>
          </Grid>
        </Grid>
        <Typography
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.primary.dark,
            fontSize: ".7rem",
            textAlign: "center",
            marginTop: theme.spacing(6),
          })}
        >
          Copyright © 2021 University of Schools Colleges All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
