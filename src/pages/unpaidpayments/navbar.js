import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import useWindowSize from "@/js/hooks/useWindowSize";

let NavDiv = styled.div`
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

    div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      div:nth-child(1) {
        margin-right: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }

      div:nth-child(2) {
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

        div:nth-child(1),
        div:nth-child(2) {
          position: relative;
          width: fit-content;
        }
      }
    }

    ul {
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
        }

        :not(:nth-child(3)) a:hover {
          background-color: #4169e144;
          border-radius: 50%;
          padding: 5px;

          box-shadow: 0px 0px 4px 2px #4169e144;
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

const Navbar = () => {
  let winSize = useWindowSize();

  let logoImgHeightWidth;
  let linkImgHeightWidth;

  if (winSize.width <= 425) {
    logoImgHeightWidth = 36;
    linkImgHeightWidth = 22;
  } else if (winSize.width > 425) {
    logoImgHeightWidth = 40;
    linkImgHeightWidth = 28;
  }

  return (
    logoImgHeightWidth &&
    linkImgHeightWidth && (
      <NavDiv>
        <div className="nav-content-wrapper">
          <div>
            <div>
              <Image
                src="/img/logo.png"
                alt="logo"
                title="Shop Manager"
                width={logoImgHeightWidth}
                height={logoImgHeightWidth}
              />
            </div>

            <div>
              <p className="website-name">Shop Manager</p>
              <p className="website-slogan">Make it easy</p>
            </div>
          </div>

          <ul>
            <li>
              <Link href="./home">
                <Image
                  src="/img/svg/home.svg"
                  alt="home"
                  title="Home"
                  height={linkImgHeightWidth}
                  width={linkImgHeightWidth}
                />
              </Link>
            </li>
            <li>
              <Link href="./createstorenewpage">
                <Image
                  src="/img/svg/new-page.svg"
                  alt="new page"
                  title="New Page"
                  height={linkImgHeightWidth}
                  width={linkImgHeightWidth}
                />
              </Link>
            </li>
            <li>
              <Link href="./unpaidpayments" className="active_">
                <Image
                  src="/img/svg/active/payments.svg"
                  alt="unpaidpayments"
                  title="Unpaid Payments"
                  height={linkImgHeightWidth}
                  width={linkImgHeightWidth}
                />
              </Link>
            </li>
            <li>
              <Link href="./managestore">
                <Image
                  src="/img/svg/cart.svg"
                  alt="managestore"
                  title="Store Management"
                  height={linkImgHeightWidth}
                  width={linkImgHeightWidth}
                />
              </Link>
            </li>
            <li>
              <Link href="./storesettings">
                <Image
                  src="/img/svg/settings.svg"
                  alt="settings"
                  title="Settings"
                  height={linkImgHeightWidth}
                  width={linkImgHeightWidth}
                />
              </Link>
            </li>
          </ul>
        </div>
      </NavDiv>
    )
  );
};

export default Navbar;
