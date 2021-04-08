import './App.css';
import React from 'react';

class App extends React.Component { // components allow for more functionality
  constructor() {
    super(); // calls constrcutor method on component class gives access to this.state
    this.state = {
      people: []
    }
  }
  
  componentDidMount() { //  grabs data from api and sets state after mounting
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({people: users}))
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
