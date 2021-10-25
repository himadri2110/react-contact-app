import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    <div>Contact List</div>

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} />
        );
    });

    return <div>{renderContactList}</div>
}

export default ContactList;