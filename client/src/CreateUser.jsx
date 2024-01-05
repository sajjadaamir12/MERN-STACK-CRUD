import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, age })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label>Enter Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="enter user name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Enter Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="enter user email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label>Enter Age</label>
            <input
              type="text"
              onChange={(e) => setAge(e.target.value)}
              placeholder="enter age"
              className="form-control"
            />
          </div>

          <button className="btn btn-success"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
