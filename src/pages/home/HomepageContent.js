import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const server = "https://temporaryshopmanagerapi.onrender.com";

const HomePageDiv = styled.div`
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

    @media screen and (max-width: 425px) {
      padding: 25px 5px 5px 5px;
      width: 100%;

      .search {
        width: 100%;
      }
    }
  }
`;

const HomepageContent = () => {
  let searchIconWidthHeight = 16;

  const [tableHead, setTableHead] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await fetch(`${server}/api/home/tablehead`);
      let data = await res.json();

      setTableHead(data);
    })();

    (async () => {
      let res = await fetch(`${server}/api/home/tabledata`);
      let data = await res.json();

      setTableData(data);
    })();
  }, []);

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
    </HomePageDiv>
  );
};

function TableRowWithData({ itm, id_ }) {
  let router = useRouter();
  let rightArrowIconWidthHeight = 18;
  let paidIconWidthHeight = 22;

  let { name, phoneNumber, date, catagory } = itm;
  return (
    <tr
      onClick={() => {
        router.push(`./home/details/${id_.toString()}`);
      }}
    >
      <td>{name}</td>
      <td>{phoneNumber}</td>
      <td>{date}</td>
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
  );
}

export default HomepageContent;
