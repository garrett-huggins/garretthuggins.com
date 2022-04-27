import {
  Section,
  SectionText,
  SectionTitle,
} from "../../theme/globalComponents";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { LeftSection, Contacts, ContactLink } from "./HeroStyles";
import { Text, Grid, GridItem } from "@chakra-ui/react";

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle>
        <Text as="h2">
          Welcome to
          <br />
          my personal portfolio
        </Text>
      </SectionTitle>
      <SectionText>
        <Text as="p">
          I am a frontend engineer and freelance developer with a passion for
          learning
        </Text>
      </SectionText>
      <Contacts>
        <Grid templateColumns="repeat(3, 1fr)" w="75%">
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.5rem"
          >
            <ContactLink href="mailto:gjhuggins@student.ysu.edu">
              <GoMail />
            </ContactLink>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.5rem"
          >
            <ContactLink
              href="https://github.com/garrett-huggins"
              target="_blank"
            >
              <FaGithub />
            </ContactLink>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="1.5rem"
          >
            <ContactLink
              href="https://www.linkedin.com/in/garretthuggins/"
              target="_blank"
            >
              <FaLinkedin />
            </ContactLink>
          </GridItem>
        </Grid>
      </Contacts>
    </LeftSection>
  </Section>
);

export default Hero;
