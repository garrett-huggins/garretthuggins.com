import styled from "@emotion/styled";
import { breakpoints } from "../theme/breakpoints";

export const Blog = styled.h1`
  font-weight: 800;
  font-size: 56px;
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 30px;
  @media ${(props) => breakpoints.md} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardPage = styled.div`
  padding: 15px 30px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  margin: 10px 0 0;
  @media ${(props) => breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const PostDate = styled.div`
  color: #c7c7c7;
  margin-bottom: 10px;
  padding: 3px 10px;
`;
