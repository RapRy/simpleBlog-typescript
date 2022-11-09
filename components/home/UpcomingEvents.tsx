import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import Head from "next/head";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

type EventType = {
  img: string;
  date: {
    month: string;
    day: number;
    year: number;
    startTime: string;
    lastTime: string;
  };
  title: string;
  location: string;
  description: string;
};

const events = [
  {
    img: "event1.jpg",
    date: {
      month: "June",
      day: 16,
      year: 2021,
      startTime: "8:00 am",
      lastTime: "12:30 pm",
    },
    title: "Event Name 2021",
    location: "Event 1 Venue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis iaculis lectus odio orci elit tempor urna eget. Ipsum, viverra lobortis tortor metus amet tellus dignissim nis.",
  },
  {
    img: "event2.jpg",
    date: {
      month: "July",
      day: 22,
      year: 2021,
      startTime: "9:00 am",
      lastTime: "2:30 pm",
    },
    title: "Event Name 2021",
    location: "Event 2 Venue",
    description:
      "Felis iaculis lectus odio orci elit tempor urna eget. Ipsum, viverra lobortis tortor metus amet tellus dignissim nis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    img: "event1.jpg",
    date: {
      month: "June",
      day: 19,
      year: 2021,
      startTime: "8:00 am",
      lastTime: "12:30 pm",
    },
    title: "Event Name 2021",
    location: "Event 3 Venue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis iaculis lectus odio orci elit tempor urna eget. Ipsum, viverra lobortis tortor metus amet tellus dignissim nis.",
  },
  {
    img: "event2.jpg",
    date: {
      month: "June",
      day: 18,
      year: 2021,
      startTime: "8:00 am",
      lastTime: "12:30 pm",
    },
    title: "Event Name 2021",
    location: "Event 4 Venue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis iaculis lectus odio orci elit tempor urna eget. Ipsum, viverra lobortis tortor metus amet tellus dignissim nis.",
  },
  {
    img: "event1.jpg",
    date: {
      month: "June",
      day: 25,
      year: 2021,
      startTime: "8:00 am",
      lastTime: "12:30 pm",
    },
    title: "Event Name 2021",
    location: "Event 5 Venue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis iaculis lectus odio orci elit tempor urna eget. Ipsum, viverra lobortis tortor metus amet tellus dignissim nis.",
  },
  {
    img: "event2.jpg",
    date: {
      month: "June",
      day: 28,
      year: 2021,
      startTime: "8:00 am",
      lastTime: "12:30 pm",
    },
    title: "Event Name 2021",
    location: "Event 6 Venue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis iaculis lectus odio orci elit tempor urna eget. Ipsum, viverra lobortis tortor metus amet tellus dignissim nis.",
  },
  {
    img: "event1.jpg",
    date: {
      month: "June",
      day: 30,
      year: 2021,
      startTime: "8:00 am",
      lastTime: "12:30 pm",
    },
    title: "Event Name 2021",
    location: "Event 7 Venue",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis iaculis lectus odio orci elit tempor urna eget. Ipsum, viverra lobortis tortor metus amet tellus dignissim nis.",
  },
];

const EventComponent = ({ event }: { event: EventType }): JSX.Element => {
  const theme = useTheme();

  return (
    <Box position="relative" padding={(theme) => theme.spacing(0, 4)}>
      <Grid
        container
        direction="row"
        alignItems="flex-end"
        spacing={4}
        sx={(theme) => ({
          padding: theme.spacing(0, 2),
          marginBottom: theme.spacing(2),
          xs: {
            padding: theme.spacing(0, 1),
          },
        })}
      >
        <Grid item xs={2} sx={{ position: "relative" }} alignSelf="flex-end">
          <div
            style={{
              marginBottom: theme.spacing(1),
              marginLeft: theme.spacing(1),
              width: "100%",
            }}
          >
            <Image
              src={`/images/calendar-icon.svg`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Grid>
        <Grid item xs={10}>
          <Link href="/">
            <a>
              <div
                style={{
                  position: "relative",
                  height: 152,
                  display: "block",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: 10,
                  boxShadow: theme.shadows[2],
                }}
              >
                <Image
                  src={`/images/${event.img}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </a>
          </Link>
        </Grid>
      </Grid>
      <div>
        <Link href="/">
          <a style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              sx={(theme) => ({
                fontWeight: theme.typography.fontWeightBold,
                fontSize: "1.4rem",
                color: theme.palette.primary.dark,
                marginBottom: theme.spacing(1),
                xs: {
                  padding: theme.spacing(0, 1),
                },
                sm: {
                  padding: theme.spacing(0, 2),
                },
              })}
            >{`${event.date.day} ${event.date.month} ${event.date.year}`}</Typography>
          </a>
        </Link>
        <Typography
          variant="h5"
          sx={(theme) => ({
            fontSize: "1rem",
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.common.black,
            marginBottom: theme.spacing(2),
            xs: {
              padding: theme.spacing(0, 1),
            },
            sm: {
              padding: theme.spacing(0, 2),
            },
          })}
        >
          {event.title}
        </Typography>
      </div>
      <Box
        sx={(theme) => ({
          marginBottom: theme.spacing(2),
        })}
      >
        <Typography
          variant="body1"
          sx={(theme) => ({
            display: "inline-block",
            fontWeight: 600,
            color: theme.palette.common.black,
            fontSize: ".75rem",
            "&:first-child": {
              marginRight: theme.spacing(2),
            },
          })}
        >
          <AccessTimeFilledIcon
            sx={(theme) => ({
              color: theme.palette.common.black,
              fontSize: ".8rem",
              transform: "translateY(2px)",
              marginRight: "3px",
            })}
          />{" "}
          {`${event.date.startTime} - ${event.date.lastTime}`}
        </Typography>
        <Typography
          variant="body1"
          sx={(theme) => ({
            display: "inline-block",
            fontWeight: 600,
            color: theme.palette.common.black,
            fontSize: ".75rem",
            "&:first-child": {
              marginRight: theme.spacing(2),
            },
          })}
        >
          <LocationOnIcon
            sx={(theme) => ({
              color: theme.palette.common.black,
              fontSize: ".8rem",
              transform: "translateY(2px)",
              marginRight: "3px",
            })}
          />{" "}
          {event.location}
        </Typography>
      </Box>
      <Typography
        sx={(theme) => ({
          color: theme.palette.common.black,
          fontSize: ".7rem",
          lineHeight: 1.7,
          marginBottom: theme.spacing(3),
          wordWrap: "break-word",
        })}
        variant="body1"
      >
        {event.description}
      </Typography>
      <Button
        variant="pill-primary"
        sx={(theme) => ({
          padding: theme.spacing(2, 3),
          width: "100%",
        })}
      >
        more details
      </Button>
      <Box
        position="absolute"
        top="105px"
        left="5%"
        bgcolor={theme.palette.background.default}
        width="90%"
        height="72%"
        zIndex="-1"
        borderRadius={theme.spacing(2)}
      ></Box>
    </Box>
  );
};

const ArrowNext = (props: any): JSX.Element => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon sx={{ fontSize: "3rem" }} />
    </div>
  );
};

const ArrowPrev = (props: any): JSX.Element => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon sx={{ fontSize: "3rem" }} />
    </div>
  );
};

const UpcomingEvents = (): JSX.Element => {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        background: "#fff",
      }}
    >
      <Container
        sx={(theme) => ({
          paddingTop: theme.spacing(10),
        })}
      >
        <Typography variant="mainHeader">Upcoming events</Typography>
        <Slider {...slickSettings}>
          {events.map((event, i) => (
            <EventComponent key={i} event={event} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default UpcomingEvents;
