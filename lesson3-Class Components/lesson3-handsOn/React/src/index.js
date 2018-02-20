import React, { Component } from 'react';
import {render} from 'react-dom';

class TodoList extends React.Component {
  render(){
    return(
      <span>
        <h1>{this.props.title}</h1>
        <ul>
          <li>{this.props.items[0]}</li>
          <li>{this.props.items[1]}</li>
          <li>{this.props.items[2]}</li>
        </ul>
      </span>
    )
  }
}

render(
  <TodoList title="Student todo" items={['Sign up for code review', 'Finish TodoList component', 'Get lots of sleep']}/>
  ,document.getElementById('root')
)