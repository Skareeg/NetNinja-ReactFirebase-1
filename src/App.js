import './App.css';
import React, { useState } from 'react';
import Title from './components/Title';

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    {id: 1, title: "Birthday"},
    {id: 2, title: "Anniversary"},
    {id: 3, title: "Stream"}
  ]);

  const handleClick = id => {
    setEvents((prev) => prev.filter(event => event.id !== id));
    console.log(id);
  };

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
      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete</button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
