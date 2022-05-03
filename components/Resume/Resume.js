import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Break, ResumeHead, Education, Experiences } from "./ResumeStyles";

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
          <Education />
          <Experiences />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Resume;
