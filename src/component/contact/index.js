import Heading from "../heading";

import "./index.css";

export default function Contact({ name, image, rate, time, info, phone }) {
  return (
    <div className="contact">
      <div className="contact__block">
        <img className="contact__img" alt="Icon" src={image}></img>
        <div>
          <Heading> Господар - {name}</Heading>
          <div className="contact__bar">
            <span>{phone}</span>
            <span>{time}</span>
            <span>{rate}</span>
          </div>
        </div>
      </div>
      <p className="contact__text"> {info} </p>
    </div>
  );
}
