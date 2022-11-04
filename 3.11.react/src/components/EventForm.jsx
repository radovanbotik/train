import React from "react";
import { useState } from "react";
import "./EventForm.css";

export default function EventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  //console.log({ title, date });

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  return (
    <form className="event-form">
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
      <p>
        Event: {title} <br /> Date: {date}
      </p>
      <p onClick={resetForm}>reset the form</p>
    </form>
  );
}
