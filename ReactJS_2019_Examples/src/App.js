import React, { Component } from 'react';
import Person from './Person/Person';
import PropsExample from './Person/PropExample';
import {Header} from './SimpleApp/Header';
import {Home} from './SimpleApp/Home';
import {StateChange} from './SimpleApp/StateChange';


class App extends Component {
 /* constructor(){
    super();
    this.state={
      homeMounted:true
    };
  }*/
  state={
    propsexample :[
      {name:"Sonata", age:30},
      {name:"GV", age:20}
    ]
  }

  user={
    name:"Shailaja",
    hobbies: ["Painting", "Sports"]
  }

  clickHandler = () => {
    console.log('was clicked');
  }
  stateHandler=()=>{
    this.setState({
      propsexample :[
        {name:"Simple", age:50},
        {name:"GV", age:20}
      ]
    })
  }
  //change the state of a component to check the lifecycle methods

  /*onChangeHomeMounted(){
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }*/
  //pass the function from child to parent.
  onShow(){
    alert("Welcome to ReactJS");
  }
  render() {
    /*let homeCom="";
    if(this.state.homeMounted){
      homeCom =(<StateChange initialAge={30} show={this.onShow}/>);
    }*/
    return (
     <div className="App">
      <h1> Hi, I am React app</h1>
      <button onClick={this.clickHandler}> ClickOnThis </button>
      <button onClick={this.stateHandler}>Change State</button>
      <Person />
      <PropsExample name="Shaiala" age="23"></PropsExample>
      <PropsExample name="Roopa"  age="32">This is childern example</PropsExample>
      <PropsExample 
      name={this.state.propsexample[0].name} 
      age={this.state.propsexample[0].age}
      click={this.stateHandler}></PropsExample>
      <div>
        <Header />
      </div>
      <div>
        <Home name={"Sonata"} age={25} user={this.user}/>
      </div>
      <div>
      <StateChange initialAge={30} show={this.onShow}/>
      </div>
       </div>  
                
    );
  }
}

export default App;
