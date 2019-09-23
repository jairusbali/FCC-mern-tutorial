import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState(null);

  function onChangeUser(e) {
    setUser({ username: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();

    console.log("submitting " + user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            // placeholder="ex: 10"
            onChange={onChangeUser}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
