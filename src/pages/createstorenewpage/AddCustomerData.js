import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io";
import { useRouter } from "next/router";

const server = "https://temporaryshopmanagerapi.onrender.com"; //"http://localhost:5759";

const AddCustomerDataDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .add-a-data-container {
    width: 80%;

    input,
    select {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: none;
      border-radius: 6px;

      background-color: rgba(0, 0, 0, 0.05);
    }

    .customer-primary-info {
      width: 360px;

      @media screen and (max-width: 425px) {
        width: 100%;
      }
    }

    .add-btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      button {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 425px) {
    padding: 25px 0;
  }
`;

const AddCustomerData = () => {
  const router = useRouter();
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
          <div className="customer-primary-info">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="customerName"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Phone Number"
                name="customerPhoneNumber"
                required
              />
            </div>

            <div>
              <select name="customerCatagory" required>
                <option value="">Select a Catagory</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
          </div>

          <div className="add-btn">
            <button type="submit">
              <IoIosAddCircle size={30} />
            </button>
          </div>
        </form>
      </div>
    </AddCustomerDataDiv>
  );
};

export default AddCustomerData;
