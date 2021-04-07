// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component { // components allow for more functionality
  constructor() {
    super(); // calls constrcutor method on component class gives access to this.state
    this.state = {
      people: [
        {
          name: "Frank",
          id: "123"

        },
        {
          name: "Bob",
          id: "456"
        },
        {
          name: "Joe",
          id:"789"
        }
      ]
    }
  }
  

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.people.map(person => {
              return <h1 key={person.id}>{person.name}</h1>;
            })
          }
        </ul>
      </div>
    )
  }
}
// in jsx anything in between {} will be JavaScript
// this.setState takes an object of all properties you want to chnage
// cannot change state with out this.setState

export default App;
