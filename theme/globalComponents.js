import styled from "@emotion/styled";
import { breakpoints } from "./breakpoints";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => breakpoints.md} {
    padding: 0;
    flex-direction: column;
  }

  @media ${(props) => breakpoints.sm} {
    padding: 0;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.div`
  font-weight: 800;
  font-size: 65px;
  line-height: 72px;
  width: max-content;
  max-width: 100%;
  margin-bottom: 16px;
  padding: 58px 0 16px;

  @media ${(props) => breakpoints.md} {
    font-size: 56px;
    line-height: 56px;
    margin-bottom: 12px;
    padding: 40px 0 12px;
  }

  @media ${(props) => breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 8px;
    padding: 16px 0 8px;
    max-width: 100%;
  }
`;

export const SectionText = styled.div`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;

  @media ${(props) => breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

  @media ${(props) => breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ButtonDesign = styled.button`
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
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  }

  @media ${(props) => breakpoints.md} {
    width: 184px;
    height: 48px;
    font-size: 20px;
    margin-bottom: 1rem;
  }

  @media ${(props) => breakpoints.sm} {
    width: 100%;
    height: 34px;
    font-size: 16px;
    margin-bottom: 32px;
  }
`;
