import React, { useEffect, useState } from 'react';
import Card from '../Card';

// Data available
// ------------------
// The alert data is generated using the Chance library.
// The definitions can be seen below.
// ------------------
// key: chance.guid(),
// title: chance.sentence({ words: 5 }),
// severity: chance.integer({ min: 1, max: 5 }), (1 = highest, 5 = lowest)
// type: chance.pickone(["mechanical", "software", "human"]),
// isPrediction: chance.pickone([true, false]),
// predictionConfidence: chance.integer({ min: 70, max: 99 }), (99% = almost certain to happen)
// description: chance.paragraph({ sentences: 2 }),
// time: new Date()

const AlertStream = ({ data }) => {
  const [highSeverityItems, setHighSeverityItems] = useState([]);
  const [mediumSeverityItems, setMediumSeverityItems] = useState([]);
  const [lowSeverityItems, setLowSeverityItems] = useState([]);

  useEffect(() => {
    if (data) {
      setHighSeverityItems(data.filter((item) => item.severity === 1));
      setMediumSeverityItems(data.filter((item) => item.severity === 2 || item.severity === 3));
      setLowSeverityItems(data.filter((item) => item.severity === 4 || item.severity === 5));
    }
  }, [data]);

  return (
    <div className="columns pt-4">
      <div className="column alerts-wrapper is-one-third">
        <p className="title is-4 my-1 has-text-weight-bold has-text-centered">
          High Severity Alerts
        </p>
        <div className="alerts-column">
          {highSeverityItems.map((item) => (
            <Card item={item} key={item.key} />
          ))}
        </div>
      </div>
      <div className="column alerts-wrapper is-one-third">
        <p className="title is-4 my-1 has-text-weight-bold has-text-centered">
          Medium Severity Alerts
        </p>
        <div className="alerts-column">
          {mediumSeverityItems.map((item) => (
            <Card item={item} key={item.key} />
          ))}
        </div>
      </div>
      <div className="column alerts-wrapper is-one-third">
        <p className="title is-4 my-1 has-text-weight-bold has-text-centered">
          Low Severity Alerts
        </p>
        <div className="alerts-column">
          {lowSeverityItems.map((item) => (
            <Card item={item} key={item.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertStream;
