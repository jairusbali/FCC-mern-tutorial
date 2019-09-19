import React, { useState } from "react";

function EditExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }
  function onChangeDescription(e) {
    setDescription(e.target.value);
  }
  function onChangeDuration(e) {
    setDuration(e.target.value);
  }
  function onChangeDate(date) {
    setDate(date);
  }
  function onChangeUsers(e) {
    setUsers(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date
    };
    console.log(exercise);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChangeUsername} />
        <input type="text" onChange={onChangeDescription} />
        <input type="text" onChange={onChangeDuration} />
        <input type="text" onChange={onChangeDate} />
        <input type="text" onChange={onChangeUsers} />

        <input type="submit" value="submit" />
      </form>

      <h1>{username}</h1>
    </div>
  );
}

export default EditExercise;
