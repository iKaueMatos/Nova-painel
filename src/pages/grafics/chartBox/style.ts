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

  @media screen and(max-width:${breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const BoxInfo = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and(max-width:${breakpoints.sm}) {
    gap: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and(max-width:${breakpoints.sm}) {
    gap: 20px;
  }

  @media screen and(max-width:${breakpoints.xxl}) {
    font-size: 14px;
  }

  h1 {
    @media screen and(max-width:${breakpoints.xxl}) {
      font-size: 20px;
    }
  }
`;

export const ChartInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Chart = styled.div`
  width: 100%;
  height: 100%;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  .percentage {
    font-weight: bold;
    font-size: 20px;

    @media screen and(max-width:${breakpoints.xxl}) {
      font-size: 16px;
    }
  }
`;

export const Duration = styled.span`
  font-size: 14px;
`;