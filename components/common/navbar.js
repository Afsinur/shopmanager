import Link from "next/link";
import useWindowSize from "@/js/hooks/useWindowSize";
import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { NavDiv } from "../styles/common.styled";
import Image from "next/image";

const Navbar = ({ pos }) => {
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
          <div className="logo-cont">
            <Fade left>
              <div className="lgo-lgoDiv">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  title="Shop Manager"
                  width={logoImgHeightWidth}
                  height={logoImgHeightWidth}
                />
              </div>
            </Fade>

            <div className="lgo-txtDiv">
              <Flip right>
                <p className="website-name">Shop Manager</p>
              </Flip>
              <Flip right>
                <p className="website-slogan">Make it easy</p>
              </Flip>
            </div>
          </div>

          <ul>
            <li>
              <Link href="./home" className={pos == 1 ? "active_" : ""}>
                <img
                  src={`/img/svg${pos == 1 ? "/active" : ""}/home.svg`}
                  alt="home"
                  title="Home"
                  style={{ width: `${linkImgHeightWidth}px` }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="./createstorenewpage"
                className={pos == 2 ? "active_" : ""}
              >
                <img
                  src={`/img/svg${pos == 2 ? "/active" : ""}/new-page.svg`}
                  alt="new page"
                  title="New Page"
                  style={{ width: `${linkImgHeightWidth}px` }}
                />
              </Link>
            </li>
            <li>
              <Link href="./managestore" className={pos == 4 ? "active_" : ""}>
                <img
                  src={`/img/svg${pos == 4 ? "/active" : ""}/cart.svg`}
                  alt="managestore"
                  title="Store Management"
                  style={{ width: `${linkImgHeightWidth}px` }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="./storesettings"
                className={pos == 5 ? "active_" : ""}
              >
                <img
                  src={`/img/svg${pos == 5 ? "/active" : ""}/settings.svg`}
                  alt="settings"
                  title="Settings"
                  style={{ width: `${linkImgHeightWidth}px` }}
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
