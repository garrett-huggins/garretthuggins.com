import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../theme/globalComponents";

export const ProjectSection = ({ children }) => {
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
      {children}
    </Section>
  );
};

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: start center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;
export const Card = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  overflow: hidden;
  @media ${(props) => breakpoints.md} {
    width: 100%;
  }
`;

export const Title = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 0.5rem 0;
  font-size: 3rem;
  @media ${(props) => breakpoints.xs} {
    font-size: 2rem;
  } ;
`;

export const Hr = styled.hr`
  width: 150px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.div`
  width: 100%;
  padding: 0 2rem;
  font-style: 2rem;
  line-height: 24px;
`;

export const UtilityList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
  background: ${(props) => props.colorMode};
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: ${(props) => props.hoverMode};
  }
`;

export const TagList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;
export const Tag = styled.li`
  font-size: 1.5rem;
  padding: 5px;
  @media ${(props) => breakpoints.sm} {
    padding: 10px;
  }
  @media ${(props) => breakpoints.xs} {
    padding: 5px;
  } ;
`;
