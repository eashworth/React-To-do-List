import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Do the bins',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with Sarah',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Sandra',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
