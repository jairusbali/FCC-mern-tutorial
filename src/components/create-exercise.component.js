import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateExercise = () => {
  const [users, setUsers] = useState({
    users: []
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then(res => {
        if (res.data.length > 0) {
          console.log(res.data);
          setUsers({ users: res.data });
        }
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div>
      <ul>
        {users.users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateExercise;
