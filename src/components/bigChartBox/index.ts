import styled from "styled-components";

const breakpoints = {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    xxl: "1400px",
};

export const ContainerBigChartBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    media screen and(max-width:${breakpoints.xxl}) {
      font-size: 24px;
    }
  }
  .chart {
    width: 100%;
    height: 300px;
  }
`;
