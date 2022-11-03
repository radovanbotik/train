import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showModal, setShowModal] = useState(false);
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
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const subtitle = "check them out";
  return (
    <div className="App">
      <Title title={"These are the events"} subtitle={subtitle} />

      {showEvents && (
        <EventList forecast={forecast} handleRemoval={handleRemoval} />
      )}
      {showEvents ? (
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      ) : (
        <button onClick={() => setShowEvents(true)}>Display Events</button>
      )}
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Get Discount
      </button>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <h2>10% off your next purchase</h2>
          <p>use code NOTHINGMATTERS at the checkout.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
