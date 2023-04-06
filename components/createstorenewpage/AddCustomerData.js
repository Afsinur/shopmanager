import { IoIosAddCircle } from "react-icons/io";
import { useRouter } from "next/router";
import { AddCustomerDataDiv } from "../styles/createstorenewpage.styled";
import Fade from "react-reveal/Fade";
//for select
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//for select
//for text input
import TextField from "@mui/material/TextField";
//for text input

const server = "http://localhost:5759"; //"https://temporaryshopmanagerapi.onrender.com";

const AddCustomerData = () => {
  const router = useRouter();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function handleSubmit(e) {
    const dateTimeObj = {};

    const event = new Date();
    dateTimeObj.time = event.toLocaleTimeString("en-US");
    dateTimeObj.date = event.toDateString();

    const sendObj = {};

    sendObj.name = e.target.customerName.value;
    sendObj.phoneNumber = e.target.customerPhoneNumber.value;
    sendObj.date = dateTimeObj;
    sendObj.catagory = e.target.customerCatagory.value;

    ///customer/add/:id
    //get one customer details
    (async () => {
      let myEmail = "afsin.sayem1@gmail.com";
      let res_id = await fetch(`${server}/api/myinfo/${myEmail}`);
      let { id } = await res_id.json();

      let res = await fetch(`${server}/api/customer/add/${id}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(sendObj),
      });
      let posted = await res.json();

      if (posted.message === "customer information added successfully!") {
        router.push("./home");
      }
    })();
  }

  return (
    <AddCustomerDataDiv>
      <div className="add-a-data-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <Box sx={{ m: 1, minWidth: 120, "& > div": { margin: "10px 0" } }}>
            <Fade left>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="customerName"
                />
              </FormControl>
            </Fade>

            <Fade left>
              <FormControl fullWidth>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  name="customerPhoneNumber"
                />
              </FormControl>
            </Fade>

            <Fade left>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  name="customerCatagory"
                  required
                >
                  <MenuItem value="paid">Paid</MenuItem>
                  <MenuItem value="unpaid">Unpaid</MenuItem>
                </Select>
              </FormControl>
            </Fade>
          </Box>

          <div className="add-btn">
            <Fade right>
              <button type="submit">
                <IoIosAddCircle size={30} fill="var(--deep-black)" />
              </button>
            </Fade>
          </div>
        </form>
      </div>
    </AddCustomerDataDiv>
  );
};

export default AddCustomerData;
