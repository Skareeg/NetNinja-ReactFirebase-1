import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {id: 1, title: "Birthday"},
    {id: 2, title: "Anniversary"},
    {id: 3, title: "Stream"}
  ]);

	const handleDelete = id => {
		setEvents((prev) => prev.filter(event => event.id !== id));
		console.log(id);
	};

  const handleModalClose = () => {
    setShowModal(false);
  }

  const subtitle = "All of the possible events of the kingdom.";

  return (
    <div className="App">
      <Title title="Mario Kingdom Events" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleDelete={handleDelete} />}

      {showModal && 
        <Modal handleClose={handleModalClose} isSalesModal={true}>
          <h2>10% off your next soul.</h2>
          <p>Use code NOPEROPE at checkout.</p>
        </Modal>
      }

      <br />
      <br />
      <button onClick={() => setShowModal(true)}>Get Coupon Code</button>
    </div>
  );
}

export default App;
