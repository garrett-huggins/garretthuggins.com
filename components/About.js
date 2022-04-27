import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../theme/globalComponents";
import styled from "@emotion/styled";

const UniLink = styled.a`
  color: red;
  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>About</SectionTitle>
      <SectionText>
        Currently pursuing a Bachelor of Science in Information Technology with
        a concentration of application development and a Minor in Mathematics
        <UniLink href="https://ysu.edu/" target="_blank">
          @Youngstown State University
        </UniLink>
        .
      </SectionText>
    </Section>
  );
};

export default About;
