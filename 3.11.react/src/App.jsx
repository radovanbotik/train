import { useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [showEvents, setShowEvents] = useState(false);
  const [forecast, setForecast] = useState([
    { weather: "raining", id: 1 },
    { weather: "sunny", id: 2 },
    { weather: "windy", id: 3 },
  ]);

  const handleRemoval = id => {
    setForecast(prev => {
      return prev.filter(button => button.id !== id);
    });
  };

  const buttons = forecast.map(weather => (
    <button
      key={weather.id}
      id={weather.id}
      onClick={() => handleRemoval(weather.id)}
    >
      {weather.weather}
    </button>
  ));

  return (
    <div className="App">
      <Title />
      {showEvents && buttons}
      {showEvents ? (
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      ) : (
        <button onClick={() => setShowEvents(true)}>Display Events</button>
      )}
    </div>
  );
}

export default App;
