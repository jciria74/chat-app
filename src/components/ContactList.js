import React,{Component} from 'react';
import './ContactList.css';
import Contact from './Contact';

class ContactList extends Component {

    state = {
      contacts: 
      [
        {
        name: 'Jaime',
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
        connected: false
        },
        {
        name: 'Conchi',
        image: 'https://randomuser.me/api/portraits/women/50.jpg',
        connected: true
        },
        {
        name: 'Arturo',
        image: 'https://randomuser.me/api/portraits/men/49.jpg',
        connected: false
        },
        {
        name: 'Marian Brewer',
        image: 'https://randomuser.me/api/portraits/women/49.jpg',
        connected: true
        },
        {
        name: 'Rose Ryan',
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        connected: false
        }
      ]
    }
  
    checkForStatus(person){
      return (
        person.connected
        ? <Contact name={person.name} image={person.image} onlineStatus/>
        : <Contact name={person.name} image={person.image} />
      )
    }
  
    render(){
      return (
        <div className="App">
          {this.state.contacts.map((contact) => {
            return this.checkForStatus(contact);
          })
          }
        </div>
      );    
    }
  }
  

export default ContactList;