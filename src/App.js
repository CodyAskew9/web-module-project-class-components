import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

    
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todos = {todos}/>
        <TodoForm todos = {todos}/>
      </div>
    );
  }
}

export default App;