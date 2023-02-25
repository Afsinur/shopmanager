import Image from "next/image";
import styled from "styled-components";
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
      }

      th {
        padding: 0 12px 12px 12px;
        text-align: left;

        font-size: 0.96rem;
        font-weight: 300;
        color: var(--th-color);
      }

      td {
        padding: 12px;
        color: var(--deep-black);
      }

      tbody {
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
  let tableHead = ["Name", "Phone Number", "Date", "Catagory"];
  let tableData = [
    {
      name: "Jahidul Islam Hridoy",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar MD. Afsinur Rahman",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "MD Safwanur Rahman Sayem",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Jahidul Islam Hridoy",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar MD. Afsinur Rahman",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "MD Safwanur Rahman Sayem",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Jahidul Islam Hridoy",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar MD. Afsinur Rahman",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "MD Safwanur Rahman Sayem",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Jahidul Islam Hridoy",
      phoneNumber: "017xxxxxxx1",
      date: "2 Feb 2023",
      catagory: "paid",
    },
    {
      name: "Shahriar MD. Afsinur Rahman",
      phoneNumber: "017xxxxxxx2",
      date: "3 Feb 2023",
      catagory: "unpaid",
    },
    {
      name: "MD Safwanur Rahman Sayem",
      phoneNumber: "017xxxxxxx3",
      date: "4 Feb 2023",
      catagory: "paid",
    },
  ];

  return (
    <HomePageDiv>
      <div className="tableDiv">
        <div className="search">
          <div>
            <input id="homeSearch" type="text" className="search-input" />
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
              {tableHead.map((itm, i) => (
                <th key={i}>{itm}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((itm, i) => (
              <TableRowWithData itm={itm} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </HomePageDiv>
  );
};

function TableRowWithData({ itm }) {
  let { name, phoneNumber, date, catagory } = itm;
  return (
    <tr>
      <td>{name}</td>
      <td>{phoneNumber}</td>
      <td>{date}</td>
      <td>{catagory}</td>
    </tr>
  );
}

export default HomepageContent;
