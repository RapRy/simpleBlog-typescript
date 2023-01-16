import React from "react";
import Link from "next/link";
import moment from "moment";

import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ArticleIcon from "@mui/icons-material/Article";

import { CategoryType } from "../../../types/categoryType";
import { TopicType } from "../../../types/topicType";

type Props = {
  categories: CategoryType[];
  topic: TopicType;
  type: String;
  headerText: String;
};

const TopicReuse = ({
  categories,
  topic,
  type = "sm",
  headerText = "",
}: Props): JSX.Element => {
  const secondText = () => {
    switch (headerText) {
      case "latest topics":
        // return dateString(latest);
        return `added on ${moment(topic?.createdAt).format("MMM D YYYY")}`;
      case "hot topics":
        return `${topic?.meta?.replies?.length} Replies`;
      default:
        return null;
    }
  };

  return (
    <div>
      <Link
        href={`/forum/${categories
          ?.find((cat) => cat._id === topic?.ref?.category)
          ?.name.replaceAll(" ", "-")}/${topic?._id}`}
      >
        <a
          style={{
            textDecoration: "none",
          }}
        >
          <ListItem
            sx={(theme) => ({
              padding: theme.spacing(1),
              backgroundColor: theme.palette.background.paper,
            })}
          >
            <ListItemIcon
              sx={{
                display: "inline",
                minWidth: 35,
              }}
            >
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText
              primary={topic?.title}
              secondary={secondText()}
              sx={(theme) => ({
                "& .MuiListItemText-primary": {
                  color: theme.palette.common.black,
                  fontSize: ".9rem",
                  fontWeight: theme.typography.fontWeightBold,
                  whiteSpace: "nowrap",
                  overflowX: "hidden",
                  textOverflow: "ellipsis",
                },
                "& .MuiListItemText-secondary": {
                  fontSize: ".7rem",
                  color: theme.palette.common.black,
                },
              })}
            />
            {/* <ListItemText
              primary={secondText()}
              sx={(theme) => ({
                fontSize: ".7rem",
                color: theme.palette.common.black,
                marginLeft: theme.spacing(1),
              })}
            /> */}
          </ListItem>
        </a>
      </Link>
    </div>
  );
};

export default TopicReuse;
