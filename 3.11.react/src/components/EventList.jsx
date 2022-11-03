import React from "react";

export default function EventList(props) {
  const { forecast, handleRemoval } = props;
  const buttons = forecast.map(weather => (
    <button
      key={weather.id}
      id={weather.id}
      onClick={() => handleRemoval(weather.id)}
    >
      {weather.weather}
    </button>
  ));

  return <div>{buttons}</div>;
}
