import React, { useState } from "react";

const VenueInformation = (props) => {};

const Button = (props) => {
  return (
    <div>
      <button value={props.value} onClick={props.func}>
        {props.text}
      </button>
    </div>
  );
};
const Venues = () => {
  const [venue, setVenue] = useState("");
  const [venues, setVenues] = useState([
    {
      name: "The Fillmore",
      address: "1805 Geary Blvd, San Francisco, CA 94115",
      phone: "(415) 346-6000",
    },
    {
      name: "Bill Graham Civic Auditorium",
      address: "99 Grove St, San Francisco, CA 94102",
      phone: "(415) 624-8900",
    },
    {
      name: "Bottom of the Hill",
      address: "1233 17th St, San Francisco, CA 94107",
      phone: "(415) 626-4455",
    },
  ]);

  const handleVenueChange = (event) => {
    setVenue(event.target.value);
    console.log("Venue:", venue);
  };

  return (
    <div>
      <div>
        <ul>
          {venues.map((venue, x) => (
            <li key={x}>
              <Button
                value={venue.name}
                func={handleVenueChange}
                text={venue.name}
              />
              <ul>
                <li>{venue.address}</li>
                <li>{venue.phone}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Venues;
