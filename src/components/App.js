import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contacts);
    setContacts([...contacts, contact]);
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
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
