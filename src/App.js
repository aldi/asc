import React, { useEffect, useRef, useState } from 'react';
import AlertStream from './components/AlertStream';
import { createAlertStream } from './utils';
import '../src/styles/globals.css';

// you may decrease this if you're feeling brave!
const INTERVAL_DURATION = 1000;

export default function App() {
  const [items, setItems] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  // clear the alert stream
  function handleClearTapped() {
    setItems([]);
  }

  // start the alert stream
  function handleStartTapped() {
    if (!interval.current) {
      setIsRunning(true);
      interval.current = createAlertStream({
        onNewAlert: setItems,
        intervalDuration: INTERVAL_DURATION,
      });
    }
  }

  // stop the alert stream
  function handleStopTapped() {
    if (interval.current) {
      interval.current();
      interval.current = null;
      setIsRunning(false);
    }
  }

  // start the alert stream on mount
  useEffect(() => {
    if (!interval.current) {
      interval.current = createAlertStream({
        onNewAlert: setItems,
        intervalDuration: INTERVAL_DURATION,
      });
      setIsRunning(true);
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-body p-4">
        <div className="container">
          <p className="title is-2 has-text-centered">Alert Stream Challenge</p>
          <div className="buttons is-centered">
            <button
              className="button is-link is-outlined is-light"
              disabled={isRunning}
              onClick={handleStartTapped}
            >
              Start
            </button>
            <button
              className="button is-link is-outlined is-light"
              disabled={!isRunning}
              onClick={handleStopTapped}
            >
              Stop
            </button>
            <button
              className="button is-link is-outlined is-light"
              disabled={!items.length}
              onClick={handleClearTapped}
            >
              Clear
            </button>
          </div>
        </div>
        <AlertStream data={items} />
      </div>
    </section>
  );
}
