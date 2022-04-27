import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints";

export const Card = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Date = styled.div`
  margin-bottom: 20px;
  padding: 3px 10px;
  @media ${(props) => breakpoints.sm} {
    font-size: 0.75rem;
  }
`;

export const PostTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  @media ${(props) => breakpoints.sm} {
    font-size: 1rem;
  }
`;
