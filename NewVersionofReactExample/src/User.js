import React, {Component} from 'react';
import User1 from './User1';

class User extends Component{
    state={
        users:[{name:"shailaja", age:20}]
    }
    render(){
     return(
        <div>
         <h1>This is class Component</h1>
           {this.props.title}
           <User1 age={this.state.users[0].age}>{this.state.users[0].name}</User1>
        </div>
     );
   }
  }
export default User;