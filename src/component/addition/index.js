import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function Addition({ ...rest }) {
  return (
    <Box shadow>
      <div className="detail">
        <Heading>Додаткові властивості</Heading>
        <List {...rest} />
      </div>
    </Box>
  );
}

function List({ rules, policy, transportation, languages, offers }) {
  return (
    <ul className="detail__list">
      <ListItem title={"Правила дому"}>
        <span> {rules}</span>
      </ListItem>
      <ListItem title={"Політика скасування"}>
        <span> {policy}</span>
      </ListItem>
      <ListItem title={"Місцевий транспорт"}>
        <span> {transportation}</span>
      </ListItem>
      <ListItem title={"Мови хоста"}>
        <span> {languages}</span>
      </ListItem>
      <ListItem title={"Спеціальні пропозиції:"}>
        <span> {offers}</span>
      </ListItem>
    </ul>
  );
}
