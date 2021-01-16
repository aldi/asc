import React from 'react';
import SVGIcon from '../SVGIcon';
import dayjs from 'dayjs';

const Card = ({ item }) => {
  const { title, severity, type, isPrediction, predictionConfidence, description, time } = item;

  const severityColor =
    severity === 1
      ? 'has-background-danger-light'
      : severity === 2 || severity === 3
      ? 'has-background-warning-light'
      : 'has-background-info-light';
  return (
    <>
      <div className={`card fadein m-4 ${severityColor}`}>
        <div className="card-image is-flex mt-5 px-5 is-justify-content-space-between is-align-items-center">
          <SVGIcon icon={type} />
          <span className="number">{severity}</span>
          <span className="number">{`${predictionConfidence}%`}</span>
        </div>
        <div className="card-content">
          <div className="media mb-2">
            <div className="media-content">
              <p className="is-size-4 has-text-weight-bold">{title}</p>
              <p className="is-size-5 has-text-weight-semibold">
                Prediction: {isPrediction ? 'TRUE' : 'FALSE'}
              </p>
              <p className="is-size-6 has-text-weight-normal">
                {dayjs(time).format('DD/MM/YYYY HH:mm:ss')}
              </p>
            </div>
          </div>
          <div className="content">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
