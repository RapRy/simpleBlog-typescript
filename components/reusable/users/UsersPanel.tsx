import React from "react";
import Link from "next/link";
import moment from "moment";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ForumIcon from "@mui/icons-material/Forum";
import CommentIcon from "@mui/icons-material/Comment";

import { UsersType } from "../../../types/userType";

type Props = {
  users: UsersType[];
  header: String;
};

const UsersPanel = ({ users, header }: Props): JSX.Element => {
  return (
    <Container
      sx={(theme) => ({
        marginBottom: theme.spacing(6),
      })}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={2}
      >
        <Typography
          variant="body1"
          sx={(theme) => ({
            color: theme.palette.primary.dark,
            fontSize: ".9rem",
            fontWeight: theme.typography.fontWeightBold,
            textTransform: "uppercase",
          })}
        >
          {header}
        </Typography>
        <Link
          href={`/forum/${header.toLocaleLowerCase().replaceAll(" ", "-")}`}
        >
          <Button
            sx={(theme) => ({
              padding: 0,
              color: theme.palette.primary.main,
              fontSize: ".8rem",
              fontWeight: theme.typography.fontWeightBold,
              textTransform: "lowercase",
              transition: "color 400ms linear",
              "&:hover": {
                background: "transparent",
                color: theme.palette.primary.dark,
              },
            })}
            startIcon={<DynamicFeedIcon fontSize="small" />}
          >
            show more
          </Button>
        </Link>
      </Stack>
      <Grid container spacing={4}>
        {users?.map((item, key) => (
          <Grid item xs={6} sm={4} md={3} key={key}>
            <Container
              sx={(theme) => ({
                padding: theme.spacing(2, 1),
                background: theme.palette.common.white,
                borderRadius: theme.spacing(2),
              })}
            >
              <Box position="relative">
                {header === "New users" && (
                  <Box
                    sx={(theme) => ({
                      position: "absolute",
                      top: theme.spacing(-1),
                      zIndex: 5,
                      left: theme.spacing(-2),
                    })}
                  >
                    <IconButton
                      disableFocusRipple
                      disableRipple
                      sx={(theme) => ({
                        backgroundColor: theme.palette.primary.light,
                        marginLeft: theme.spacing(1),
                        borderRadius: theme.spacing(1),
                        padding: "5px",
                        boxShadow: theme.shadows[3],
                        color: theme.palette.common.white,
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main,
                        },
                      })}
                    >
                      <PersonAddIcon />
                    </IconButton>
                  </Box>
                )}
                <Link href={`/forum/profile/${item._id}}`}>
                  <div>
                    <Avatar
                      sx={(theme) => ({
                        width: theme.spacing(8),
                        height: theme.spacing(8),
                        margin: "0 auto 20px",
                      })}
                      src={
                        item.accountType === 0
                          ? `${process.env.PUBLIC_URL}/assets/defaultProPic.jpg`
                          : `${process.env.PUBLIC_URL}/assets/adminProPic.jpg`
                      }
                    >
                      {item.username.charAt(0)}
                    </Avatar>
                    <Typography
                      variant="body1"
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: theme.palette.common.black,
                        fontSize: ".9rem",
                        textAlign: "center",
                      })}
                    >
                      {item.username}
                    </Typography>
                    {header === "New users" && (
                      <Typography
                        variant="body1"
                        sx={(theme) => ({
                          textAlign: "center",
                          color: theme.palette.common.black,
                          fontWeight: theme.typography.fontWeightMedium,
                          fontSize: ".7rem",
                          marginBottom: "20px",
                        })}
                      >
                        {item.email}
                      </Typography>
                    )}
                    {header === "Active users" && (
                      <Box
                        sx={(theme) => ({
                          textAlign: "center",
                          marginBottom: theme.spacing(2),
                        })}
                      >
                        <Box
                          sx={(theme) => ({
                            display: "inline-block",
                            marginRight: theme.spacing(2),
                            "&:last-child": {
                              marginRight: 0,
                            },
                          })}
                        >
                          <Typography
                            variant="body1"
                            sx={(theme) => ({
                              fontSize: ".8rem",
                              color: theme.palette.common.black,
                            })}
                          >
                            <ForumIcon
                              sx={(theme) => ({
                                color: theme.palette.secondary.main,
                                fontSize: ".9rem",
                                verticalAlign: "middle",
                                marginRight: "5px",
                              })}
                            />
                            {item.post.topics.length}
                          </Typography>
                        </Box>
                        <Box
                          sx={(theme) => ({
                            display: "inline-block",
                            marginRight: theme.spacing(2),
                            "&:last-child": {
                              marginRight: 0,
                            },
                          })}
                        >
                          <Typography
                            variant="body1"
                            sx={(theme) => ({
                              fontSize: ".8rem",
                              color: theme.palette.common.black,
                            })}
                          >
                            <CommentIcon
                              sx={(theme) => ({
                                color: theme.palette.secondary.main,
                                fontSize: ".9rem",
                                verticalAlign: "middle",
                                marginRight: "5px",
                              })}
                            />
                            {item.post.replies.length}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    <Typography
                      variant="body1"
                      sx={(theme) => ({
                        color: theme.palette.grey.A200,
                        fontWeight: theme.typography.fontWeightMedium,
                        fontSize: ".7rem",
                        textAlign: "center",
                      })}
                    >
                      {header === "Active users"
                        ? `last activity on ${moment(item.updatedAt).format(
                            "MMM Do YYYY"
                          )}`
                        : `joined on ${moment(item.createdAt).format(
                            "MMM Do YYYY"
                          )}`}
                    </Typography>
                  </div>
                </Link>
              </Box>
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UsersPanel;
