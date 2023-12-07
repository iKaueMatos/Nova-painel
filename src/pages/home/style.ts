import styled from "styled-components";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1400px",
};

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;

  @media screen and (max-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    grid-auto-rows: minmax(120px, auto);
  }

  .box {
    padding: 20px;
    border-radius: 10px;
    border: 2px solid $soft-bg;
  }
`;

const BoxOne = styled.div`
  grid-column: span 1;
  grid-row: span 3;
`;

const BoxSecondary = styled.div`
  grid-column: span 1;
  grid-row: span 3;
`;

const BoxThree = styled.div`
  grid-column: span 2;
  grid-row: span 2;

  @media screen and (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export { BoxOne, BoxSecondary, BoxThree, Container };

