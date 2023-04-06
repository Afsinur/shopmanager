import styled from "@emotion/styled";

export const HomePageDiv = styled.div`
  position: relative;
  overflow-x: hidden;

  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;

  align-items: center;

  #panel1a-header {
    padding: unset;
    box-shadow: unset;
  }

  .tableDiv {
    padding: 10px 0;
    width: 80%;
    height: 100%;

    .search {
      padding: 10px 0;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-start;

      svg {
        fill: var(--deep-black);
      }

      > div {
        position: relative;

        img {
          position: absolute;
          top: 0;
          left: 0;
          cursor: pointer;

          margin: 10px 0px 0px 12px;
        }

        input {
          box-shadow: 0 0 4px 2px var(--theme-main-color);
          cursor: pointer;

          width: 35px;
          padding: 8px 8px 8px 30px;
          border: none;
          border-radius: 35px;

          transition: 150ms ease-in-out;
          transition-property: padding, width;
        }

        input:hover,
        input:focus {
          padding: 8px 8px 8px 34px;
          width: 200px;
        }

        input:focus {
          outline: 2px solid var(--theme-main-color);
        }
      }
    }

    table {
      border-spacing: 0;
      width: 100%;

      thead {
        > tr {
          th {
            transition: 150ms ease-in-out;
            transition-property: border-bottom, border-top;

            border-bottom: 1px solid var(--td-border-bottom-color);
          }
        }
      }

      thead:hover {
        > tr {
          th {
            border-bottom: 1px solid var(--td-border-bottom-hover-color);
          }
        }
      }

      th,
      td {
        vertical-align: top;
        font-size: 0.875rem;
      }

      th {
        padding: 0 12px 12px 12px;
        text-align: left;

        font-weight: 300;
        color: var(--th-color);
      }

      td {
        padding: 12px;
        color: var(--td-color);
      }

      tbody {
        td:last-child {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          > img {
            opacity: 0;
            transition: 150ms ease-in-out;
            transition-property: opacity;
          }
        }

        > tr:not(:nth-child(1)) {
          td {
            transition: 150ms ease-in-out;
            transition-property: border-bottom, border-top;

            border-top: 1px solid var(--td-border-bottom-color);
          }
        }

        > tr:hover + tr {
          td {
            border-top: 1px solid var(--td-border-bottom-hover-color);
          }
        }

        > tr:hover {
          cursor: pointer;

          td:last-child {
            > img {
              opacity: 1;
            }
          }
        }
      }
    }

    .capitalize-name {
      text-transform: capitalize;
    }

    @media screen and (max-width: 425px) {
      width: 100%;

      .search {
        width: 100%;
      }
    }
  }

  .anim-left {
    animation: slide-left 150ms ease-in-out 1 forwards;
  }
  .anim-right {
    animation: slide-right 150ms ease-in-out 1 forwards;
  }

  @keyframes slide-left {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%);
      opacity: 0;
    }
  }
  @keyframes slide-right {
    0% {
      transform: translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .customer-details {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    transform: translateX(100%);

    > div {
      width: 80%;
      padding: 10px 0;
    }

    .detail-info-container {
      padding: 10px 5px;

      .paid-unpaid-batch {
        display: flex;
        justify-content: flex-end;
        font-size: 14px;
        color: var(--deep-black);
        font-weight: 400;

        margin-bottom: 15px;
      }

      p {
        display: flex;
        font-size: 14px;
        margin: 5px 0;
        color: var(--th-color);

        span {
          display: flex;
          flex-direction: row;
          align-items: center;

          padding-left: 10px;
          color: var(--deep-black);
          font-weight: 400;

          img {
            margin-right: 5px;
          }
        }
      }
    }
  }

  .anim-left-details {
    animation: slide-left-details 150ms ease-in-out 1 forwards;
  }
  .anim-right-details {
    animation: slide-right-details 150ms ease-in-out 1 forwards;
  }

  @keyframes slide-left-details {
    0% {
      transform: translateX(50%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  @keyframes slide-right-details {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @media screen and (max-width: 425px) {
    .tableDiv,
    .customer-details {
      padding: 25px 5px 5px 5px;
    }

    .tableDiv {
      th {
        padding: 0 5px 5px !important;
      }

      td {
        padding: 12px 5px !important;
      }
    }

    .customer-details {
      > div {
        width: 100%;
      }
    }
  }
`;
