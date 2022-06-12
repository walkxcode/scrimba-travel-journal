import React from "react";

import marker from "../assets/marker.svg";

function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.imageUrl} alt={props.title} />
      <div className="card--content">
        <div className="card--location_section">
          <img src={marker} alt="Marker" />
          <p className="card--location">{props.location}</p>
          <a className="card--link" href={props.googleMapsUrl}>
            View on Google Maps &rarr;
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <p className="card--date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
