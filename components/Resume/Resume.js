import { Box, Grid, GridItem } from "@chakra-ui/react";
import {
  Break,
  ResumeHead,
  Education,
  Experiences,
  Skills,
  SelectProjects,
} from "./ResumeStyles";

const Resume = () => {
  return (
    <Box
      sx={{
        "@media print": {
          color: "black",
          fontFamily: "serif",
        },
      }}
    >
      <Grid templateColumns="repeat(3,1fr)" gap={0} mt={1}>
        <ResumeHead />
        <GridItem colSpan={3} mt={1}>
          <Break />
          <p>
            Highly motivated and detail-oriented developer with a passion for
            learning.
          </p>
          <Education />
          <Experiences />
          <Skills />
          <SelectProjects />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Resume;
