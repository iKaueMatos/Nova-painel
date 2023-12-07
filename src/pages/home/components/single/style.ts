import styled from "styled-components";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1400px",
};

export const ContainerSigle = styled.div`
  display: flex;

  @media screen and(max-width:${breakpoints.xl}) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const View = styled.div`
  flex: 1;

  h1 {
    font-weight: 500;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const TopInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Details = styled.div`
  font-size: 18px;

  .item {
    margin: 30px 0px;
  }

  .itemTitle {
    font-weight: 600;
    margin-right: 10px;
    text-transform: capitalize;
  }
`;

export const Hr = styled.hr`
  width: 90%;
  height: 0;
  border: 0.5px solid gray;
  margin: 20px 0px;

  @media screen and(max-width:${breakpoints.md}) {
    display: none;
  }
`;

export const Activities = styled.div`
  flex: 1;

  h2 {
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  li {
    list-style-type: none;
    position: relative;
    width: 1px;
    padding-top: 50px;
    background-color: #f45b69;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f45b69;
    transform: translateX(-50%);
  }
`;

export const Container = styled.div`
  min-width: 480px;
  padding: 15px;
  background-color: #f45b6810;

  @media screen and(max-width:${breakpoints.md}) {
    min-width: 250px;
  }

  p {
    margin-bottom: 5px;
  }
`;

export const Time = styled.time`
  font-size: 12px;
`;

export const Chart = styled.div`
    margin-top: 50px;
    width: 80%;
    height: 400px;

    @media screen and(max-width:${breakpoints.md}) {
        display:none;
    }
`;

