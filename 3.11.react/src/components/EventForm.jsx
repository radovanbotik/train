import React from "react";
import "./EventForm.css";

export default function EventForm() {
  return (
    <form className="event-form">
      <label htmlFor="newevent">Weather</label>
      <input type="text" id="newevent" name="newevent" />
      <label htmlFor="eventdate">Date</label>
      <input type="date" id="eventdate" name="eventdate" />
      <button type="submit">submit</button>
    </form>
  );
}
