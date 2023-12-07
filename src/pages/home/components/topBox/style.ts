import styled from "styled-components";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1400px",
};

export const ContainerTopBox = styled.div`
  h1 {
    margin-bottom: 20px;

    @media screen and(max-width:${breakpoints.xxl}) {
      font-size: 24px;
    }
  }
`;

export const List = styled.div`
  .listItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

export const User = styled.div`
    display: flex;
    gap: 20px;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;

        @media screen and(max-width:${breakpoints.xxl}) {
        display: none;
        }

        @media screen and(max-width:${breakpoints.lg}) {
        display: block;
    }
`;
    
export const UserTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    `;
    
export const Username = styled.span`
    font-size: 14px;
    font-weight: 500;
`;

export const Email = styled.span`
    font-size: 12px;

    @media screen and(max-width:${breakpoints.xxl} {
        display: none;
    }

    @media screen and(max-width:${breakpoints.lg} {
        display: block;
    }
`;

export const Amount = styled.span`
  font-weight: 500;
`;
