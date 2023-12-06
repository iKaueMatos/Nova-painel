import styled from "styled-components";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1400px",
};

export const ContainerChartBox = styled.div`
  display: flex;
  height: 100%;

  media screen and(max-width:${breakpoints.sm}) {
    flex-direction: column;
  }
`;


