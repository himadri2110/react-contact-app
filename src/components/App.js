import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts  = [
    {
      id: 1,
      name: 'Himadri',
      email: 'himadri@gmail.com'
    },
    {
      id: 2,
      name: 'Shah',
      email: 'shah@gmail.com'
    }
  ];

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
