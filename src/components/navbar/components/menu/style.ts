import styled from "styled-components";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1400px",
};

export const ContainerNavigation = styled.div`
    width: 250px;
    padding: 5px 20px;
    border-right: 2px solid $soft-bg;

    @media screen and(max-width:${breakpoints.lg}) {
      width: max-content;
    }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    .title {
      font-size: 12px;
      font-weight: 200;
      color: $soft-color;
      text-transform: uppercase;
    }
    
    @media screen and(max-width:${breakpoints.lg}) {
      display: none;
    }

    .listItem {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;
    }

    &:hover {
      background-color: $soft-bg;
    }

    .listItemTitle{
      @media screen and(${breakpoints.lg}) {
        display: none;
      }
  }

`;