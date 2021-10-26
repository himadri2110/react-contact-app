import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { name, email } = props.contact;

  console.log(name, email);
  return (
    <div className="contact-card">
      <img src={user} alt="user" />

      <div className="content">
        <div className="card-name">{props.contact.name}</div>
        <div className="card-email">{props.contact.email}</div>
      </div>

      <i className="far fa-trash-alt"></i>
    </div>
  );
};

export default ContactCard;
