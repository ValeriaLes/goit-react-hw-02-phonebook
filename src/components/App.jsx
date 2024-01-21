import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Wrapper } from './App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();

    const dublicate = contacts.find(item => {
      const currentName = item.name.toLowerCase();
      const currentNumber = item.number;

      return currentName === normalizedName || currentNumber === number;
    });

    return Boolean(dublicate)

   
    
  }

  addContact = data => {
    

    if (this.isDublicate(data)) {
      return alert('This contact is already in your phonebook');
    }
    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  changeFilter = ({target}) => {

    this.setState({
      filter: target.value
    })
  }

  getFilteredContacts () {

    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase()
    const filteredBooks = contacts.filter(({name, number}) => {
        const normalizedName = name.toLowerCase()

        return (normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter))
    })

    return filteredBooks
  }

  onDelete = (id) => {
  
    this.setState(({contacts}) => {
        const newContacts = contacts.filter(item => item.id !== id)
        return {
          contacts: newContacts
        }
    })

    
  };

  render() {
    const  contacts = this.getFilteredContacts()
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.changeFilter}/>
        <ContactList contacts={contacts} onDelete={this.onDelete} />
      </Wrapper>
    );
  }
}

export default App;
