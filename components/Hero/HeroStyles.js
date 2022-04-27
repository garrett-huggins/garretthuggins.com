import styled from "@emotion/styled";
import { breakpoints } from "../../theme/breakpoints";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
  }
  @media ${(props) => breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Contacts = styled.div`
  display: grid;
  width: 262px;
  height: 64px;
  border-radius: 50px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 80px;
  color: #fff;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;

  @media ${(props) => breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 20px;
    margin-bottom: 32px;
  }

  @media ${(props) => breakpoints.sm} {
    width: 100%;
    height: 48px;
    font-size: 20px;
    margin-bottom: 32px;
  }
`;

export const ContactLink = styled.a`
  padding: 5px;
  font-size: 2rem;
  background-color: black;
  border-radius: 50%;
  &:hover {
    background-color: #3668ff;
    font-size: 3rem;
  }
`;
