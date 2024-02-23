import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import imgBath from "./bath.svg";
import imgBedrooms from "./bedrooms.svg";
import imgBeds from "./beds.svg";
import imgGuests from "./guests.svg";

export default function Amenities({ ...rest }) {
  return (
    <Box shadow>
      <div className="detail">
        <Heading>Зручності:</Heading>
        <List {...rest} />
      </div>
    </Box>
  );
}

function List({
  pool,
  gym,
  freeBreakfast,
  freeWiFi,
  parking,
  petsAllowed,
  airportShuttle,
  conciergeService,
  roomService,
  childFriendly,
}) {
  return (
    <ul className="detail__list">
      <ListItem imageSrc={imgGuests}>
        <span> Тест</span>
      </ListItem>
    </ul>
  );
}
