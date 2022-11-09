import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Typography from "@mui/material/Typography";

import HomeMenu from "../components/layout/HomeMenu";
import Hero from "../components/home/Hero";
import CoursesOffered from "../components/home/CoursesOffered";
import UpcomingEvents from "../components/home/UpcomingEvents";
import Footer from "../components/footer/Footer";

const Home: NextPage = () => {
  return (
    <HomeMenu>
      <Hero />
      <CoursesOffered />
      <UpcomingEvents />
      <Footer />
    </HomeMenu>
  );
};

export default Home;
