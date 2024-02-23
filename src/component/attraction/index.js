import "./index.css";
import { Fragment } from "react";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Attraction({ list }) {
  return (
    <Box shadow>
      <div className="detail">
        <Heading>Пам'ятки поблизу</Heading>

        <div className="">
          {list.map(({ id, ...rest }) => (
            <Fragment key={id}>
              <Item {...rest} />
            </Fragment>
          ))}
        </div>
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ul className="detail__list">
      <ListItem>
        <a href={link}>{name}</a>
      </ListItem>
    </ul>
  );
}
