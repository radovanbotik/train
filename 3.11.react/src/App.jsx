import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [forecast, setForecast] = useState([]);

  const addEvent = event => {
    setForecast(prev => {
      return [...prev, event];
    });
    setShowModal(false);
  };

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
        Add new event
      </button>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal} isSalesModal={true}>
          <EventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
