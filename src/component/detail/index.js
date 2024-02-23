import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import imgBath from "./bath.svg";
import imgBedrooms from "./bedrooms.svg";
import imgBeds from "./beds.svg";
import imgGuests from "./guests.svg";

export default function Detail({ ...rest }) {
  return (
    <Box shadow>
      <div className="detail">
        <Heading>Деталі властивості:</Heading>
        <List {...rest} />
      </div>
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="detail__list">
      <ListItem imageSrc={imgGuests}>
        <span>{guests}</span>
        <span> гості</span>
      </ListItem>
      <ListItem imageSrc={imgBedrooms}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>
      <ListItem imageSrc={imgBeds}>
        <span> {beds}</span>
        <span> ліжко</span>
      </ListItem>
      <ListItem imageSrc={imgBath}>
        <span> {baths}</span>
        <span> ванна кімната</span>
      </ListItem>
    </ul>
  );
}
