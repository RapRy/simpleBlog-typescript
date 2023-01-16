import React from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import SearchIcon from "@mui/icons-material/Search";

import { useUser } from "../../hooks/useUser";

import { CategoryType } from "../../types/categoryType";
import { TopicType } from "../../types/topicType";
import { ErrorResType } from "../../types";

import TopicReuse from "../reusable/topics/TopicReuse";

const drawerWidth = 320;

type DataType = {
  categories: CategoryType[];
  latest_topics: TopicType[];
  hot_topics: TopicType[];
};

type Props = {
  data: DataType;
  children: React.ReactNode;
};

const ForumMenu = ({ data, children }: Props): JSX.Element => {
  const user = useUser();

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
            </Link>{" "}
            |{" "}
            <Link href="/forum">
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1.2rem",
                }}
              >
                The Forum
              </a>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Avatar>R</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="left"
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "transparent",
              border: "none",
              paddingX: 1,
            },
          }}
        >
          <Toolbar />
          {/* categories panel */}
          <Box
            padding={2}
            borderRadius="10px"
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <TextField
              type="text"
              name="search"
              placeholder="Search"
              fullWidth
              sx={(theme) => ({
                fontSize: ".75rem",
                fontWeight: 500,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "5px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: theme.spacing(1.2, 2, 1.2, 0),
                },
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Divider
              sx={{
                marginY: 2,
                bgcolor: "#ccc",
              }}
            />

            <Typography
              variant="h6"
              sx={(theme) => ({
                fontWeight: 500,
                color: theme.palette.common.white,
                fontSize: ".85rem",
                marginBottom: 2,
              })}
            >
              Categories
            </Typography>
            {data?.categories &&
              data?.categories?.map((item, i) => (
                <Link key={i} href={item.name.toLowerCase()}>
                  <a
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                        textTransform: "capitalize",
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: ".8rem",
                        textAlign: "left",
                        padding: theme.spacing(1, 2),
                        borderRadius: 1,
                        transition: theme.transitions.create([
                          "background-color",
                        ]),
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                        },
                      })}
                    >
                      {item.name}
                    </Typography>
                  </a>
                </Link>
              ))}
          </Box>
          {/* latest topic panel */}
          <Box padding={0} marginTop={2}>
            <Link href={`/forum/latest-topics`}>
              <a
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="body1"
                  sx={(theme) => ({
                    color: theme.palette.secondary.dark,
                    fontSize: ".9rem",
                    fontWeight: theme.typography.fontWeightBold,
                    textTransform: "uppercase",
                    marginBottom: theme.spacing(1),
                  })}
                >
                  Latest topics
                </Typography>
              </a>
            </Link>
            <List
              sx={(theme) => ({
                borderRadius: theme.shape.borderRadius,
                padding: theme.spacing(1),
                backgroundColor: theme.palette.background.paper,
              })}
            >
              {data?.latest_topics.map((item, i) => (
                <div key={i}>
                  <TopicReuse
                    headerText="latest topics"
                    type="sm"
                    categories={data?.categories}
                    topic={item}
                  />
                </div>
              ))}
            </List>
          </Box>
          {/* hottest topic panel */}
          <Box padding={0} marginTop={2}>
            <Link href={`/forum/hot-topics`}>
              <a
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography
                  variant="body1"
                  sx={(theme) => ({
                    color: theme.palette.secondary.dark,
                    fontSize: ".9rem",
                    fontWeight: theme.typography.fontWeightBold,
                    textTransform: "uppercase",
                    marginBottom: theme.spacing(1),
                  })}
                >
                  Hot topics
                </Typography>
              </a>
            </Link>
            <List
              sx={(theme) => ({
                borderRadius: theme.shape.borderRadius,
                padding: theme.spacing(1),
                backgroundColor: theme.palette.background.paper,
              })}
            >
              {data?.hot_topics.map((item, i) => (
                <div key={i}>
                  <TopicReuse
                    headerText="hot topics"
                    type="sm"
                    categories={data?.categories}
                    topic={item}
                  />
                </div>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      <Box component="main" style={{ width: "100%" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default ForumMenu;
