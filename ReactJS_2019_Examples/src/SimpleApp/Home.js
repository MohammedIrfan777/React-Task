import React from 'react';

export class Home extends React.Component{
       
    constructor(props){
        super();
        this.age=props.age;
    }
    onChangeAge(){
        console.log(this.age);
        this.age += 5;
    }
    render(){
        var show ="Show the data";
       
        return(
           <div>
               <p>In a new Component!</p>
               <p>{show}</p>
               <p>Your componey name is {this.props.name}</p> 
               <p>Your age is {this.props.age}</p>             
              <p>user name ={this.props.user.name}</p> 
              <div>
                  <ul>
                      {this.props.user.hobbies.map((hobby ,i)=><li key={i}>{hobby}</li>)}
                  </ul>
              </div>
              <button onClick={this.onChangeAge.bind(this)}>MakeOlder!!</button>
              <p>Your age is {this.age}</p>
           </div>
        );
    }

}
