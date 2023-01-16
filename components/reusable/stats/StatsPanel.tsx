import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import ForumIcon from "@mui/icons-material/Forum";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import { StatisticsCountType } from "../../../types";

import StatCounter from "./StatCounter";

const StatsPanel = ({
  counts,
}: {
  counts: StatisticsCountType;
}): JSX.Element => {
  console.log(counts);
  return (
    <Container
      sx={(theme) => ({
        marginBottom: theme.spacing(4),
      })}
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
        Forum Statistics
      </Typography>
      <StatCounter
        colorType="primary"
        count={counts?.registeredUsers}
        text="members"
        allUsersCount={null}
        icon={
          <PeopleIcon
            fontSize="large"
            sx={(theme) => ({
              color: theme.palette.primary.main,
              verticalAlign: "bottom",
            })}
          />
        }
      />
      <StatCounter
        colorType="secondary"
        count={counts?.activeCategories}
        text="categories"
        allUsersCount={null}
        icon={
          <FolderIcon
            fontSize="large"
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              verticalAlign: "bottom",
            })}
          />
        }
      />
      <StatCounter
        colorType="secondary"
        count={counts?.topics}
        text="topics"
        allUsersCount={null}
        icon={
          <ForumIcon
            fontSize="large"
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              verticalAlign: "bottom",
            })}
          />
        }
      />
      <StatCounter
        colorType="secondary"
        count={counts?.upvotes}
        text="up votes"
        allUsersCount={null}
        icon={
          <ThumbUpAltIcon
            fontSize="large"
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              verticalAlign: "bottom",
            })}
          />
        }
      />
      <StatCounter
        colorType="secondary"
        count={counts?.downvotes}
        text="down votes"
        allUsersCount={null}
        icon={
          <ThumbDownAltIcon
            fontSize="large"
            sx={(theme) => ({
              color: theme.palette.secondary.main,
              verticalAlign: "bottom",
            })}
          />
        }
      />
    </Container>
  );
};

export default StatsPanel;
