import styled from "styled-components";

const breakpoints = {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    xxl: "1400px",
};

export const ContainerPieChartBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        media screen and(max-width:${breakpoints.xxl}) {
            font-size:24px;
        }
    }

    .chart {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 14px;

    .option {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }
`;

export const Title = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
`;