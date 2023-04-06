import styled from "@emotion/styled";

export const SignupCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    padding: 8px 30px;
    text-transform: uppercase;
    color: var(--light-black);

    font-weight: 600;
    font-size: 0.75rem;
    cursor: pointer;

    :hover {
      color: var(--deep-black);
    }
  }
`;

export let NavDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 15px 0;

  div.nav-content-wrapper {
    width: 80%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .logo-cont {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .lgo-lgoDiv {
        margin-right: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      .lgo-txtDiv {
        p.website-name {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--deep-black);
        }

        p.website-slogan {
          font-size: 0.7rem;
          font-weight: 300;
        }
      }

      @media screen and (max-width: 425px) {
        z-index: 999;

        padding: 4px;

        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        background-color: aliceblue;

        .lgo-lgoDiv,
        .lgo-txtDiv {
          position: relative;
          width: fit-content;
        }
      }
    }

    ul {
      overflow: hidden;
      list-style: none;
      display: flex;
      flex-direction: row;

      background-color: aliceblue;
      padding: 8px 20px;
      border-radius: 30px;

      box-shadow: 0px 0px 4px 0px rgb(0 0 0 / 20%);

      li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        margin: 0 20px;

        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          padding: 5px;

          transition: 150ms ease-in-out;
          transition-property: background-color, border-radius, padding,
            box-shadow;

          &:not(.active_) {
            :hover {
              background-color: #4169e144;
              border-radius: 50%;
              padding: 5px;

              box-shadow: 0px 0px 4px 2px #4169e144;
            }
          }
        }
      }

      @media screen and (max-width: 425px) {
        z-index: 999;

        position: fixed;
        bottom: 0;
        left: 0;

        width: 100%;
        justify-content: space-between;

        li {
          margin: 0 0;
        }
      }
    }
  }
`;
