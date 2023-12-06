import styled from "styled-components";

export const ContainerNavigation = styled.div`
    width: 250px;
    padding: 5px 20px;
    border-right: 2px solid $soft-bg;

    @include lg{
    width: max-content;
    }
`;

export const Navigation = styled.div`
.item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    .title {
      font-size: 12px;
      font-weight: 200;
      color: $soft-color;
      text-transform: uppercase;

      @include lg{
        display: none;
      }
    }

    .listItem {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;

      &:hover {
        background-color: $soft-bg;
      }

      .listItemTitle{
        @include lg{
          display: none;
        }
      }
    }
  }

`;