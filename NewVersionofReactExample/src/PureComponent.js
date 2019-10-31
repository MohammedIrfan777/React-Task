import React, {Component} from 'react';

const Temp =(props)=>{
    console.log("render Temp");
    return(<div>{props.val}</div>)
}

class PureComponent extends Component{
   state={
       val:1,
   }
   componentDidMount(){
    setInterval(()=>{
        this.setState(()=>{
         return{val:Math.random()}
        });
     },2000)    
   }

   shouldComponentUpdate(nextProp, nextState){
    console.log('nextState',nextState);
    console.log('currentState',this.state)
    return ( this.state.val === nextState ? false:true )
    }

   render(){
       console.log("rendered app");
       return(
           <div>
               <Temp val= {this.state.val}></Temp>
           </div>
       );
   }
}

export default PureComponent;