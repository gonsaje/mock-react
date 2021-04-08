import './App.css';
import {CardList} from './components/card-list/card.component';
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
        <CardList people={this.state.people}>
          
        </CardList>
      </div>
    )
  }
}
// in jsx anything in between {} will be JavaScript
// this.setState takes an object of all properties you want to chnage
// cannot change state with out this.setState

export default App;
