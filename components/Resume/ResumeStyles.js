import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { experiences } from "../../data/experiences";
import { resumeProjects } from "../../data/resume-projects";
import { FaGithub, FaLinkedin, FaAddressCard } from "react-icons/fa";

export const Break = styled.hr`
  border-top: 1px solid #8c8b8b;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-position: inside;
  font-size: 14px;
`;

export const SkillsList = styled.ul`
  justify-content: space-around;
  list-style-position: inside;
  font-size: 14px;
`;

export const ListItem = styled.li`
  padding: 0 5px;
`;

export const ResumeSocials = ({ children, icon }) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={2}>{icon}</Box>
      <Text
        fontSize={{ base: "0.5rem", xxs: "0.75rem", xs: "14px" }}
        sx={{
          "@media print": {
            fontSize: "14px",
          },
        }}
      >
        {children}
      </Text>
    </Box>
  );
};

export const ResumeHead = () => {
  return (
    <>
      <GridItem colSpan={2} rowSpan={1} alignSelf="end" justifySelf="left">
        <Text
          as="h1"
          fontSize={{ base: "1.2rem", xs: "2rem", sm: "3rem" }}
          colSpan={2}
          lineHeight={1}
          sx={{
            "@media print": {
              fontSize: "3rem",
            },
          }}
        >
          Garrett Huggins
        </Text>
        <Text
          fontSize={{ base: "0.5rem", xxs: "0.75rem", xs: "14px" }}
          sx={{
            "@media print": {
              fontSize: "14px",
            },
          }}
        >
          (321) 394-1663 | gjhuggins@student.ysu.edu
        </Text>
      </GridItem>
      <GridItem
        colSpan={1}
        rowSpan={1}
        alignSelf="center"
        justifySelf="right"
        alignItems="center"
      >
        <ResumeSocials icon={<FaGithub />}>garrett-huggins</ResumeSocials>
        <ResumeSocials icon={<FaLinkedin />}>/in/garretthuggins</ResumeSocials>
        <ResumeSocials icon={<FaAddressCard />}>
          garretthuggins.com
        </ResumeSocials>
      </GridItem>
    </>
  );
};

export const Education = () => {
  return (
    <Box mt={2}>
      <Text as="h2" fontSize="1.5rem">
        Education
      </Text>
      <Break />
      <Grid
        templateColumns="repeat(3,1fr)"
        gap={0}
        fontSize="1rem"
        lineHeight="1.25rem"
      >
        <GridItem colSpan={2}>
          <Text fontWeight="bold">
            Bachelor of Science in Information Technology
          </Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text float="right" color="#bdbdbd" fontSize="14px">
            May 2024
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          <Box float="left">
            <Text as="em" ml={2}>
              Youngstown State University
            </Text>
            <List>
              <ListItem>Minor in Mathematics</ListItem>
              <ListItem>Graduating with Honors</ListItem>
            </List>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export const Experiences = () => {
  return (
    <Box mt={2}>
      <Text as="h2" fontSize="1.5rem">
        Relevant Experiences
      </Text>
      <Break />
      {experiences.map(
        ({ id, company, position, startDate, endDate, description }) => {
          return (
            <Grid
              key={id}
              templateColumns="repeat(3,1fr)"
              gap={0}
              fontSize="1rem"
              mt={2}
              lineHeight="1.25rem"
            >
              <GridItem colSpan={2}>
                <Text float="left" fontWeight="bold">
                  {position}
                </Text>
                <br />
                {/* check for company */}
                {company ? (
                  <Text ml={2} as="em">
                    {company}
                  </Text>
                ) : (
                  <></>
                )}
              </GridItem>
              <GridItem colSpan={1}>
                <Text float="right" color="#bdbdbd" fontSize="14px">
                  {startDate}-{endDate}
                </Text>
              </GridItem>

              <GridItem colSpan={3}>
                {/* check for description list */}
                <Box float="left">
                  {description.length > 1 ? (
                    <>
                      {description.map((desc) => (
                        <ListItem key={description.indexOf(desc)}>
                          {desc}
                        </ListItem>
                      ))}
                    </>
                  ) : (
                    <Text>{description}</Text>
                  )}
                </Box>
              </GridItem>
            </Grid>
          );
        }
      )}
    </Box>
  );
};

export const Skills = () => {
  return (
    <Box mt={2} w="100%" lineHeight={1}>
      {/* LARGE */}
      <Grid
        templateColumns="repeat(3,1fr)"
        fontSize="1.5rem"
        display={{ base: "none", sm: "grid" }}
        sx={{
          "@media print": {
            display: "grid",
          },
        }}
      >
        <GridItem colSpan={1}>
          <Text as="h2">Skills</Text>
        </GridItem>
        <GridItem colSpan={1} justifySelf="center">
          <Text as="h2">Languages</Text>
        </GridItem>
        <GridItem colSpan={1} justifySelf="center">
          <Text as="h2">Technologies</Text>
        </GridItem>
      </Grid>
      {/* SMALL */}
      <Grid
        templateColumns="repeat(2,1fr)"
        fontSize="1.5rem"
        display={{ base: "grid", sm: "none" }}
        sx={{
          "@media print": {
            display: "none",
          },
        }}
      >
        <GridItem colSpan={1}>
          <Text as="h2">Languages</Text>
        </GridItem>
        <GridItem colSpan={1} justifySelf="center">
          <Text as="h2">Technologies</Text>
        </GridItem>
      </Grid>

      <Break />

      {/* SMALL */}
      <Grid
        templateColumns="repeat(2,1fr)"
        display={{ base: "grid", sm: "none" }}
        sx={{
          "@media print": {
            display: "none",
          },
        }}
      >
        <GridItem colSpan={1}>
          <SkillsList>
            <ListItem>Javascript</ListItem>
            <ListItem>HTML/CSS</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>SQL</ListItem>
            <ListItem>C++</ListItem>
          </SkillsList>
        </GridItem>
        <GridItem colSpan={1} justifySelf="center">
          <SkillsList>
            <ListItem>React.js</ListItem>
            <ListItem>Next.js</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>Git/GitHub</ListItem>
            <ListItem>MongoDB</ListItem>
          </SkillsList>
        </GridItem>
      </Grid>

      {/* LARGE */}
      <Grid
        templateColumns="repeat(3,1fr)"
        display={{ base: "none", sm: "grid" }}
        sx={{
          "@media print": {
            display: "grid",
          },
        }}
      >
        <GridItem colSpan={1}>
          <SkillsList>
            <ListItem>Avid Learner</ListItem>
            <ListItem>Dynamic Design Patterns</ListItem>
            <ListItem>Software Documentation</ListItem>
            <ListItem>Development Standards</ListItem>
            <ListItem>Continuous Integration Systems</ListItem>
          </SkillsList>
        </GridItem>
        <GridItem colSpan={1} justifySelf="center">
          <SkillsList>
            <ListItem>Javascript</ListItem>
            <ListItem>HTML/CSS</ListItem>
            <ListItem>Python</ListItem>
            <ListItem>SQL</ListItem>
            <ListItem>C++</ListItem>
          </SkillsList>
        </GridItem>
        <GridItem colSpan={1} justifySelf="center">
          <SkillsList>
            <ListItem>React.js</ListItem>
            <ListItem>Next.js</ListItem>
            <ListItem>Node.js</ListItem>
            <ListItem>Git/GitHub</ListItem>
            <ListItem>MongoDB</ListItem>
          </SkillsList>
        </GridItem>
      </Grid>
    </Box>
  );
};

export const SelectProjects = () => {
  return (
    <Box mt={2} w="100%" fontSize="14px" lineHeight={1.2}>
      <Text as="h2" fontSize="1.5rem">
        Select Projects
      </Text>
      <Break />
      {resumeProjects.map(({ id, title, link, description }) => {
        return (
          <Box key={id}>
            <Box mt={1} display="flex">
              <Text fontWeight="bold" mr={2}>
                {title}
              </Text>
              <Text fontSize="12px" alignSelf="center">
                {link}
              </Text>
            </Box>
            <Text>{description}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
