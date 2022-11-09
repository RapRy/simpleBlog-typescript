import React from "react";
import Image from "next/image";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CoursesOffered = (): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: "common.white",
      }}
    >
      <Container>
        <Grid
          container
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={(theme) => ({
              marginTop: theme.spacing(10),
            })}
          >
            <Typography variant="mainHeader">Courses offered</Typography>
            <Typography variant="parag-1-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              faucibus nec sed faucibus egestas etiam dapibus tortor. Proin
              adipiscing pharetra, mattis adipiscing eget placerat dignissim
              ipsum. Sed proin ac ut amet aenean nunc metus. Neque consectetur
              donec phasellus risus elementum sollicitudin vestibulum malesuada
              pellentesque.
            </Typography>
            <Box marginTop="32px">
              <Box
                marginRight="20px"
                marginBottom="20px"
                display="inline-block"
              >
                <Button variant="pill-primary">List of courses</Button>
              </Box>
              <Button variant="pill-secondary">Learn how to apply</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                right: "-90px",
                top: "-240px",
                width: "100%",
                zIndex: 2,
              }}
            >
              <Image
                src="/images/courses.png"
                layout="responsive"
                objectFit="contain"
                width="100%"
                height="100%"
                priority
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoursesOffered;
