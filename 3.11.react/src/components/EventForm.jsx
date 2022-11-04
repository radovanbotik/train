import React from "react";
import { useState, useRef } from "react";
import "./EventForm.css";

export default function EventForm(props) {
  const { addEvent } = props;
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const title = useRef();
  // const date = useRef();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("Trnava");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("Trnava");
  };

  const handleSubmit = e => {
    e.preventDefault();
    const event = {
      weather: title,
      date: date,
      location: location,
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
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <label htmlFor="eventdate">Date</label>
      <input
        type="date"
        id="eventdate"
        name="eventdate"
        onChange={e => setDate(e.target.value)}
        value={date}
      />
      <label htmlFor="select">Event Location:</label>
      <select id="select" onChange={e => setLocation(e.target.value)}>
        <option value="trnava">Trnava</option>
        <option value="bratislava">Bratislava</option>
        <option value="budapest">Budapest</option>
      </select>
      <button type="submit">submit</button>
    </form>
  );
}
