import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  console.log(id, name, email);

  return (
    <div className="contact-card">
      <img src={user} alt="user" />

      <div className="content">
        <div className="card-name">{props.contact.name}</div>
        <div className="card-email">{props.contact.email}</div>
      </div>

      <i
        className="far fa-trash-alt"
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
