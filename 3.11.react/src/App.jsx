import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";

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
  const subtitle = "check them out";
  return (
    <div className="App">
      <Title title={"These are the events"} subtitle={subtitle} />

      {showEvents && buttons}
      {showEvents ? (
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      ) : (
        <button onClick={() => setShowEvents(true)}>Display Events</button>
      )}
      <Modal>
        <h2>10% off your next purchase</h2>
        <p>use code NOTHINGMATTERS at the checkout.</p>
      </Modal>
    </div>
  );
}

export default App;
