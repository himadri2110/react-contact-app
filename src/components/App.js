import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Footer from "./Footer";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contacts);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // Filter ID to remove contact
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // Retrieve items from Local Storage
  useEffect(() => {
    const retrievedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (retrievedItems) {
      setContacts(retrievedItems);
    }
  }, []);

  // Add items to Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
      <Footer />
    </div>
  );
}

export default App;
