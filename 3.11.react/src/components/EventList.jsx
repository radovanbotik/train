import React from "react";
import styles from "./EventList.module.css";

export default function EventList(props) {
  const { forecast, handleRemoval } = props;
  const buttons = forecast.map(weather => (
    <button
      className={styles.button}
      key={weather.id}
      id={weather.id}
      onClick={() => handleRemoval(weather.id)}
    >
      <h2>{weather.weather}</h2>
      <h3>{weather.date}</h3>
      <h4>{weather.location}</h4>
    </button>
  ));

  return <div>{buttons}</div>;
}
