import './App.css';
import { useState } from 'react';

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

  console.log(showEvents);

  return (
    <div className="App">
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
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
