import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="ex: running"
            onChange={onChangeDescription}
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            className="form-control"
            id="duration"
            placeholder="ex: 10"
            onChange={onChangeDuration}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <DatePicker
            type="text"
            className="form-control"
            selected={date}
            onSelect={onChangeDate}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditExercise;
