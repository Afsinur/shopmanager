import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import SortIcon from "@mui/icons-material/Sort";
import React from "react";
import Fade from "react-reveal/Fade";
import { HomePageDiv } from "../styles/home.styled";
//for accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Box } from "@mui/material";
//for accordion
//for toggle
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
//for toggle
//for select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//for select

const server = "http://localhost:5759"; //"https://temporaryshopmanagerapi.onrender.com";

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

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <HomePageDiv>
      <div className="tableDiv">
        <div className="search">
          <Accordion
            sx={{
              width: "100%",
              boxShadow: "unset",
            }}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton
                  value="left"
                  aria-label="left aligned"
                  id="filter-tgl-btn"
                >
                  <SortIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </AccordionSummary>

            <AccordionDetails className="accordion-details">
              <Box sx={{ with: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                      backgroundColor: "#fff",
                      padding: "2px",
                    }}
                  >
                    Catagory
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>All</MenuItem>
                    <MenuItem value={20}>Paid</MenuItem>
                    <MenuItem value={30}>Unpaid</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </AccordionDetails>
          </Accordion>

          <div style={{ alignSelf: "flex-end" }}>
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
              fill="var(--deep-black)"
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
