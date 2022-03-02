import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const UserLogin = () => {
  const [values, setValues] = useState({
    userName: "",
    password: "",
  });
  const history = useHistory();
  const handleUserNameInput = (event) => {
    setValues({ ...values, userName: event.target.value });
  };
  const handleUserPassword = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios.post("/api/users/login", values).then((res) => {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.userName);
       history.push("/");
      history.go(0);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleUserNameInput}
            value={values.firstName}
            type="name"
            placeholder="userName"
          />
        </label>
        <label>
          {" "}
          <input
            type="password"
            onChange={handleUserPassword}
            value={values.password}
          />
        </label>
        <button type="submit"> log in</button>
      </form>
    </div>
  );
};
export default UserLogin;
