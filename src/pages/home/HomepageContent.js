import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import React from "react";
import Fade from "react-reveal/Fade";

const server = "https://temporaryshopmanagerapi.onrender.com"; //"http://localhost:5759";

const HomePageDiv = styled.div`
  position: relative;
  overflow-x: hidden;

  width: 100%;
  height: 86vh;
  display: flex;
  flex-direction: column;

  align-items: center;

  .tableDiv {
    padding: 10px 0;
    width: 80%;
    height: 100%;

    .search {
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      justify-content: right;

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

const HomepageContent = () => {
  let searchIconWidthHeight = 16;

  const [tableHead, setTableHead] = useState([
    "loading..",
    "loading..",
    "loading..",
    "loading..",
  ]);
  const [tableData, setTableData] = useState([
    {
      name: "loading..",
      phoneNumber: "loading..",
      date: { date: "loading.." },
      catagory: "unpaid",
      id: "loading..",
    },
  ]);

  useEffect(() => {
    (async () => {
      let res = await fetch(`${server}/api/home/tablehead`);
      let data = await res.json();

      setTableHead(data);
    })();

    (async () => {
      let myEmail = "afsin.sayem1@gmail.com";
      let res_id = await fetch(`${server}/api/myinfo/${myEmail}`);
      let { id } = await res_id.json();

      let res = await fetch(`${server}/api/customer/all/${id}`);
      let { customerInfo } = await res.json();

      setTableData(customerInfo);
    })();
  }, []);

  function handleBack() {
    //left
    document.querySelector(".tableDiv").classList.remove("anim-left");

    document
      .querySelector(".customer-details")
      .classList.remove("anim-left-details");
    //right
    document.querySelector(".tableDiv").classList.add("anim-right");

    document
      .querySelector(".customer-details")
      .classList.add("anim-right-details");

    let selObj = {
      batch: "paid-unpaid-batch",
      name: "detail-name",
      phoneNumber: "detail-phn-num",
      date: "detail-date",
      catagory: "detail-catagory",
    };

    for (const k in selObj) {
      if (Object.hasOwnProperty.call(selObj, k)) {
        const el = selObj[k];

        document.querySelector(`.${el}`).innerHTML = "loading..";
      }
    }
  }

  return (
    <HomePageDiv>
      <div className="tableDiv">
        <div className="search">
          <div>
            <input
              id="homeSearch"
              type="text"
              className="search-input"
              placeholder="Search.."
            />
            <label htmlFor="homeSearch">
              <Image
                src="/img/svg/search.svg"
                alt="search"
                width={searchIconWidthHeight}
                height={searchIconWidthHeight}
              />
            </label>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              {tableHead && tableHead.map((itm, i) => <th key={i}>{itm}</th>)}
            </tr>
          </thead>
          <tbody>
            {tableData &&
              tableData.map((itm, i) => (
                <TableRowWithData itm={itm} key={i} id_={i} />
              ))}
          </tbody>
        </table>
      </div>

      <div className="customer-details">
        <div>
          <div className="scroll-here"></div>

          <div>
            <IoIosArrowDropleftCircle
              size={30}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                handleBack();
              }}
            />
          </div>

          <div className="detail-info-container">
            <div className="paid-unpaid-batch">loading..</div>

            <p>
              Name: <span className="detail-name">loading..</span>
            </p>
            <p>
              Phone Number: <span className="detail-phn-num">loading..</span>
            </p>
            <p>
              Date: <span className="detail-date">loading..</span>
            </p>
            <p>
              Catagory: <span className="detail-catagory">loading..</span>
            </p>
          </div>
        </div>
      </div>
    </HomePageDiv>
  );
};

function TableRowWithData({ itm, id_ }) {
  let rightArrowIconWidthHeight = 18;
  let paidIconWidthHeight = 22;
  let topPaidIconWidthHeight = 24;

  let { name, phoneNumber, date, catagory, id } = itm;

  function handleTrClick(customerId) {
    //left
    document.querySelector(".tableDiv").classList.add("anim-left");

    document
      .querySelector(".customer-details")
      .classList.add("anim-left-details");
    //right
    document.querySelector(".tableDiv").classList.remove("anim-right");

    document
      .querySelector(".customer-details")
      .classList.remove("anim-right-details");
    //scrollIntoView
    setTimeout(() => {
      document.querySelector(".scroll-here").scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 150);
    //get one customer details
    (async () => {
      let myEmail = "afsin.sayem1@gmail.com";
      let res_id = await fetch(`${server}/api/myinfo/${myEmail}`);
      let { id } = await res_id.json();

      let res = await fetch(`${server}/api/customer/one/${id}/${customerId}`);
      let customerInfo = await res.json();

      let selObj = {
        batch: "paid-unpaid-batch",
        name: "detail-name",
        phoneNumber: "detail-phn-num",
        date: "detail-date",
        catagory: "detail-catagory",
      };

      for (const k in selObj) {
        if (Object.hasOwnProperty.call(selObj, k)) {
          const el = selObj[k];

          if (k === "catagory") {
            document.querySelector(`.${el}`).innerHTML = `
              <img
                src=${
                  customerInfo[0][k] === "paid"
                    ? "/img/svg/active/paid.svg"
                    : "/img/svg/paid.svg"
                }
                alt="paid"
                width=${paidIconWidthHeight}
                height=${paidIconWidthHeight}
              />
              (${customerInfo[0][k]})`;
          } else if (k === "batch") {
            //<img src="" alt="paid-unpaid-batch" />
            document.querySelector(`.${el}`).innerHTML = `
              <img src=${
                customerInfo[0].catagory === "paid"
                  ? "/img/svg/active/paid.svg"
                  : "/img/svg/paid.svg"
              } alt="paid-unpaid-batch" 
              width=${topPaidIconWidthHeight}
              height=${topPaidIconWidthHeight} />
            `;
          } else if (k === "date") {
            document.querySelector(`.${el}`).innerHTML = customerInfo[0][k][k];
            document.querySelector(`.${el}`).innerHTML += `,`;
            document.querySelector(`.${el}`).innerHTML += `&nbsp;`;
            document.querySelector(`.${el}`).innerHTML +=
              customerInfo[0][k]["time"];
          } else {
            document.querySelector(`.${el}`).innerHTML = customerInfo[0][k];
          }
        }
      }
    })();
  }

  return (
    <Fade bottom>
      <tr
        onClick={() => {
          id != "loading.." && handleTrClick(id);
        }}
      >
        <td className="capitalize-name">{name}</td>
        <td>{phoneNumber}</td>
        <td>{date.date}</td>
        <td title={catagory === "paid" ? "Paid" : "Unpaid"}>
          <span>
            <Image
              src={
                catagory === "paid"
                  ? "/img/svg/active/paid.svg"
                  : "/img/svg/paid.svg"
              }
              alt="paid"
              width={paidIconWidthHeight}
              height={paidIconWidthHeight}
            />
          </span>

          <Image
            src="/img/svg/arrow_right.svg"
            alt="arrow-right"
            width={rightArrowIconWidthHeight}
            height={rightArrowIconWidthHeight}
          />
        </td>
      </tr>
    </Fade>
  );
}

export default HomepageContent;
