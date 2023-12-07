import styled from "styled-components";

export const ContainerAdd = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.724);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  padding: 50px;
  border-radius: 10px;
  background-color: $main-bg;
  position: relative;
`;

export const H1 = styled.div`
  margin-bottom: 40px;
  font-size: 24px;
  color: $soft-color;
`;

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Form = styled.form`
  form {
    display: flex;
    flex-wrap: wrap;
    max-width: 500px;
    justify-content: space-between;

    .item {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;

      label {
        font-size: 14px;
      }

      input {
        padding: 10px;
        background-color: transparent;
        color: white;
        outline: none;
        border: 1px solid $soft-color;
        border-radius: 3px;
      }
    }
    button {
      width: 100%;
      padding: 10px;
      cursor: pointer;
    }
  }
`;
