---
title: 'Learning react: todo app'
tags:
  - React
  - JavaScript
  - App
icon: fab fa-react
date: 2019-09-14 00:22:11
---


For a long time, I wanted to explore the React world. Today it had happened. ^\_^ I must say that I am amused by the simplicity of it and React you got my attention! Since I have some experience with JS and data binding frameworks such as AngularJS and Angular, I decided to jump right in with what I usually do, learn by doing it.

So, I have decided to build a Todo app. It was really quick and easy to set it up right away. I followed the [Getting Started][1] guildline from the official site.

## Initializing the `todo-app`

Like `@angular/cli` for Angular, there is [`create-react-app`][2] for React. I have initialized the app using the following way.

```
 $ npx create-react-app todo-app
```

This created the folder and installs the default dependencies needed for an app to start. For example,

```json
"dependencies": {
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.1.1"
}
```

`react` for the React framework itselt and `react-dom` for DOM manipulation, I suppose.

It does come with some boilerplate code and a starter page with some links like the **Getting Started** and **Tour of Heroes** links for Angular starter page.

## Create the app

Then I just started editing the stuff that was already in place and ended up with an working Todo app after an hour.

```jsx
// App.jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [
        'Schoonmaken',
        'Boodschappen doen',
        'Espanol Oefeningen',
        'podcast Luisteren'
      ]
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ newTodo: value });
  };

  addNewTodo(e) {
    e.preventDefault();

    this.state.newTodo &&
      this.setState({
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ''
      });
  }

  removeTodo(index) {
    this.setState({
      todos: [...this.state.todos.filter((_value, i) => i !== index)]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form
            className="todo-new"
            noValidate
            onSubmit={(e) => this.addNewTodo(e)}
          >
            <input
              className="todo-new__input"
              type="text"
              name="todo-new"
              id="todo-new"
              value={this.state.newTodo}
              onChange={(e) => this.handleChange(e)}
            />
            <button
              className="todo-new__add"
              onClick={(e) => this.addNewTodo(e)}
            >
              Add
            </button>
          </form>

          <TodoList
            todos={this.state.todos}
            removeTodo={(i) => this.removeTodo(i)}
          />
        </header>
      </div>
    );
  }
}

export default App;
```

To get to know the communication between components, I created a child component called `TodoList` which worries about displaying the list of todos alone.

```jsx
// todo-list.jsx
export class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((todo, index) => (
          <div className="todo-list__item" key={index}>
            <span>{todo}</span>
            <span
              className="todo-list__item--remove"
              onClick={() => this.props.removeTodo(index)}
            >
              x
            </span>
          </div>
        ))}
      </div>
    );
  }
}
```

I am surprised to see that it was done within a few lines of code. O_O I like it really! I am already feeling cheating on Angular >\_O

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

That is it! A working todo app in few hours, mostly because I was bit adament on fixing few things on my own by trail and error. I like it that way as it makes me to think logically and it becomes hard to forget once you found the solution after a struggle for some time on your own! O_o

## Live DEMO: [todo-app-ashokma-com.netlify.com][3]

[1]: https://reactjs.org/docs/getting-started.html
[2]: https://create-react-app.dev/
[3]: https://todo-app-ashokma-com.netlify.com
