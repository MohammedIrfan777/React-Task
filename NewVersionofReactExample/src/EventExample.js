import React,{Component} from 'react';

class EventExample extends Component{
    state={
       name :"Shaialja"
    }

    changeName=(newName)=>{
        this.setState({  name:newName });
    }
    changeTextName=(event)=>{
        this.setState({name: event.target.value });
    }

  render(){
    return(
       <div>
        <br/>
        <button onClick={this.changeName.bind(this,"SimpleShailaja")}>ChangeState</button>
        <br/>
        {this.state.name}
        <br/>
        <input type="text" onChange={this.changeTextName}  value={this.state.name}/>
       </div>
    );
  }
}

export default EventExample;