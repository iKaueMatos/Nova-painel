import styled from "styled-components";

export const Action = styled.div`
  display: flex;
  gap: 15px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const ContainerDataTable = styled.div`
  .dataGrid {
    background: white;
  }

  .MuiDataGrid-toolbarContainer {
    flex-direction: row-reverse;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
