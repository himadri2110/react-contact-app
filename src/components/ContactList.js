import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} />;
  });

  return (
    <div className="contact-list">
      <h3>Contact List</h3>
      {renderContactList}
    </div>
  );
};

export default ContactList;
