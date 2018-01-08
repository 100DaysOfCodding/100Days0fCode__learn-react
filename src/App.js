import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

	state = {
		persons: [
		  { name: 'Gerta', age: 24 },
		  { name: 'Saul', age: 24 },
		  { name: 'Anxhi', age: 24 }
		]
	}
  render() {
    return (
      <div className="App">
      <h1>Exited About 100DaysOfCode</h1>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}  />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobies: Racing</Person>
      </div>
    );
  }
}

export default App;
