import React, { useState } from "react";

const CreateUser = () => {
  const [user, setUser] = useState("");

  function onChangeUser(e) {
    setUser(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    console.log("submitting " + user);
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
