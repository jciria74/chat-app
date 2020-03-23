import React, {Component} from 'react';
import './App.css';
import ContactList from './components/ContactList';
import Contact from './components/Contact';

class App extends Component {

  

  render(){
    return (
      <div className="App">
        <Contact name={'Sofia Morris'} image={'https://randomuser.me/api/portraits/women/12.jpg'} onlineStatus={false}/>
        <Contact name={'Annette Bradley'} image={'https://randomuser.me/api/portraits/women/37.jpg'} onlineStatus={true}/>
        <Contact name={'Ralph Porter'} image={'https://randomuser.me/api/portraits/men/12.jpg'} onlineStatus={true}/>
      </div>
    );    
  };
}

export default App;
