import React, { Component } from 'react';
import User from './User';
import EventExample from './EventExample';
import PureComponent from './PureComponent';

class App extends Component {
  render() {
    return (
      <div name = {1+1}>Hello
      <User title="This is property"></User>     
      <br/>
      <EventExample></EventExample>
      <br/>
       This is the pure function example.
       <PureComponent></PureComponent>
       </div>      
    );
  }
}

export default App;
