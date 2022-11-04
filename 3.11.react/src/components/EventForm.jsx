import React from "react";
import { useState } from "react";
import "./EventForm.css";

export default function EventForm(props) {
  const { addEvent } = props;
  console.log(props);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  //console.log({ title, date });

  const resetForm = () => {
    setTitle("");
    setDate("");
  };
  const handleSubmit = e => {
    e.preventDefault();
    const event = {
      weather: title,
      date: date,
      id: Math.floor(Math.random() * 1000),
    };
    addEvent(event);
    resetForm();
  };
  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label htmlFor="newevent">Weather</label>
      <input
        type="text"
        id="newevent"
        name="newevent"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <label htmlFor="eventdate">Date</label>
      <input
        type="date"
        id="eventdate"
        name="eventdate"
        value={date}
        onChange={e => {
          setDate(e.target.value);
        }}
      />
      <button type="submit">submit</button>
    </form>
  );
}
