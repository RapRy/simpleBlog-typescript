import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  colorType: String;
  count: Number;
  text: String;
  icon: JSX.Element;
  allUsersCount: null | Number;
};

const StatCounter = ({
  colorType,
  count,
  text,
  icon,
  allUsersCount,
}: Props): JSX.Element => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        margin: theme.spacing(0, 2, 2, 0),
        display: "inline-block",
        background: theme.palette.common.white,
      })}
    >
      {icon}
      <Typography
        variant="h1"
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightBold,
          fontSize: "2.2rem",
          display: "inline-block",
          textAlign: "right",
          paddingLeft: theme.spacing(2),
          color:
            colorType === "primary"
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
        })}
      >
        {String(count)}
        {allUsersCount && (
          <Typography
            variant="body1"
            component="span"
            sx={(theme) => ({
              fontSize: "1.6rem",
              color: theme.palette.common.black,
              display: "inline-block",
              marginLeft: theme.spacing(1),
            })}
          >{` / ${allUsersCount}`}</Typography>
        )}
      </Typography>
      <Typography
        variant="body1"
        sx={(theme) => ({
          textAlign: "left",
          fontSize: ".9rem",
          color: theme.palette.common.black,
          fontWeight: theme.typography.fontWeightBold,
          textTransform: "uppercase",
        })}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default StatCounter;
