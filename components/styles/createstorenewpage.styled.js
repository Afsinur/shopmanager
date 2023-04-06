import styled from "@emotion/styled";

export const AddCustomerDataDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  #demo-simple-select-label {
    background-color: #fff;
    padding: 2px;
  }

  .add-a-data-container {
    width: 80%;

    .add-btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        cursor: pointer;

        background: unset;
        border: none;

        margin: 8px;
      }
    }
  }

  @media screen and (max-width: 425px) {
    padding: 25px 0;
  }
`;
