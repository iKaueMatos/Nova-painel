import styled from "styled-components";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  xxl: "1400px",
};

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  gap: 10px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;

  .icon {
    @media screen and (max-width: ${breakpoints.sm}) {
      display: none;
    }
  }
`;

export const Navigation = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Notification = styled.div`
  position: relative;
`;

export const Span = styled.span`
  background-color: red;
  color: white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
