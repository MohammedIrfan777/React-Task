import React,{Component} from 'react';

class RefExample extends React.Component{
    onHandle=()=>{
        alert("Button submited the value");
        console.log(this.firstName.value);
    }
    onKeyUpHandle=(target , e)=>{
        if(e.keyCode === 13){
            switch(target){
              case 'firstName':
              this.lastName.focus();
              break;
              case 'lastName':
              this.age.focus();
              break;
              case 'age':
              this.submit.focus();
              break;
              default:
              this.firstName.focus();
            }
            
        }  
    }
    render(){
        return(
            <div>
              <p>First Name : 
                <input ref ={(input)=>{this.firstName=input}} 
                       onKeyUp={this.onKeyUpHandle.bind(this,'firstName')}type="text"/></p><br></br>

              <p>Last Name : 
                  <input ref ={(input)=>{this.lastName=input}} 
                         onKeyUp={this.onKeyUpHandle.bind(this,'lastName')} type="text"/></p><br></br>

              <p>Age : 
                  <input ref ={(input)=>{this.age=input}} 
                         onKeyUp={this.onKeyUpHandle.bind(this,'age')} type="text"/></p><br></br>
              
              <input type="submit" value="Submit" 
              ref ={(input)=>{this.submit=input}} 
              onKeyUp={this.onKeyUpHandle.bind(this,'submit')}onClick={this.onHandle}/>
            </div>

        );
    }
}

export default RefExample;