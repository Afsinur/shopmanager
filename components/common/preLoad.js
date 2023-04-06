import styled from "@emotion/styled";
import { useEffect } from "react";

const PreloadDiv = styled.div`
  .loader-container {
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100%;

    display: grid;
    align-items: center;
    justify-content: center;

    z-index: 9999;

    background-color: #fff;
  }

  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--theme-main-color);
    margin: -4px 0 0 -4px;
  }

  .lds-roller {
    .child-1 {
      animation-delay: -0.036s;
      :after {
        top: 63px;
        left: 63px;
      }
    }

    .child-2 {
      animation-delay: -0.072s;
      :after {
        top: 68px;
        left: 56px;
      }
    }

    .child-3 {
      animation-delay: -0.108s;
      :after {
        top: 71px;
        left: 48px;
      }
    }

    .child-4 {
      animation-delay: -0.144s;
      :after {
        top: 72px;
        left: 40px;
      }
    }

    .child-5 {
      animation-delay: -0.18s;
      :after {
        top: 71px;
        left: 32px;
      }
    }

    .child-6 {
      animation-delay: -0.216s;
      :after {
        top: 68px;
        left: 24px;
      }
    }

    .child-7 {
      animation-delay: -0.252s;
      :after {
        top: 63px;
        left: 17px;
      }
    }

    .child-8 {
      animation-delay: -0.288s;
      :after {
        top: 56px;
        left: 12px;
      }
    }
  }

  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PreLoad = ({ load }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loader-container").style.display = "none";
    }, 200);
  }, [load]);

  return (
    <PreloadDiv>
      <div class="loader-container">
        <div class="lds-roller">
          <div className="child-1"></div>
          <div className="child-2"></div>
          <div className="child-3"></div>
          <div className="child-4"></div>
          <div className="child-5"></div>
          <div className="child-6"></div>
          <div className="child-7"></div>
          <div className="child-8"></div>
        </div>
      </div>
    </PreloadDiv>
  );
};

export default PreLoad;
