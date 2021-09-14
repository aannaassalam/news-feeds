import React, { useState } from "react";
import "./sidebar.css";
import user from "../../assets/user.png";
import Select from "react-select";
import country from "country";
import validator from "validator";

function Sidebar({ view, setView, extend, setExtend }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [number, setNumber] = useState("");
  const [countrySel, setCountrySel] = useState("");

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: 300,
      marginBottom: 20,
      boxShadow: "0px 0px 10px #33333315",
    }),
    option: (provided, state) => ({
      ...provided,
      // borderBottom: "1px dotted pink",
      color: state.isSelected ? "#fff" : "#333",
      padding: 10,
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#fff",
      height: 40,
      borderRadius: 5,
      border: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: 40,
    }),
    input: (provided) => ({
      ...provided,
      height: 35,
    }),
    placeholder: (provided) => ({
      ...provided,
      top: "43%",
      color: "#ccc",
    }),
    singleValue: (provided) => ({
      ...provided,
      top: "43%",
    }),
  };

  return (
    <div className={extend ? "sidebar extended" : "sidebar"}>
      <div className="left">
        <div className="user">
          <img src={user} alt="" />
          <div>
            <h4>Hi Reader,</h4>
            <p>Here's your News!</p>
          </div>
        </div>
        {!extend && (
          <div className="toggle">
            <h3>View Toggle</h3>
            <div className="view">
              <div
                className={view === "card" ? "card-view active" : "card-view"}
                onClick={() => setView("card")}
              >
                <i className="fas fa-pager"></i>
              </div>
              <div
                className={view === "list" ? "list-view active" : "list-view"}
                onClick={() => setView("list")}
              >
                <i className="fas fa-list-ul"></i>
              </div>
            </div>
          </div>
        )}
        <div className="feedback">
          <h3>Have a Feedback?</h3>
          <button className={extend && "red"} onClick={setExtend}>
            We're Listening
          </button>
        </div>
      </div>

      <div className="right">
        <h2>Thank you so much for taking the time!</h2>
        <p className="subtitle">Please provide the below details!</p>

        <label className="input-field">
          <p>First Name</p>
          <input
            type="text"
            placeholder="John"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label className="input-field">
          <p>Last Name</p>
          <input
            type="text"
            placeholder="Doe"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label className="input-field">
          <p>Address</p>
          <textarea
            placeholder="Enter your full Postal Address"
            className="input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </label>

        <label className="input-field">
          <p>Country</p>
          <Select
            options={Object.keys(country).map((item) => ({
              label: item,
              value: item,
            }))}
            value={countrySel}
            onChange={(option) => setCountrySel(option)}
            placeholder="Select Country"
            styles={customStyles}
          />
        </label>

        <label className="input-field">
          <p>Email ID</p>
          <div className="split">
            <input
              type="text"
              placeholder="example@sample.com"
              className="input full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="err">
              {email.length > 0 &&
                !validator.isEmail(email) &&
                "Please enter a valid Email"}
            </p>
          </div>
        </label>

        <label className="input-field">
          <p>Phone Number</p>
          <div className="split">
            <input
              type="number"
              placeholder="+91"
              className="input"
              inputMode="numeric"
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
            />
            <input
              type="number"
              placeholder="123456789"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <p className="err">
              {number.length > 0 &&
                !validator.isMobilePhone(number) &&
                "Please enter a valid Phone Number"}
            </p>
          </div>
        </label>

        <button>Submit Feedback</button>
      </div>
    </div>
  );
}

export default Sidebar;
