import React from 'react';

const propsexample =(props)=>{
    return (
      <div>
        <p onClick={props.click}>I'm {props.name} and {props.age}year old!</p>   
        <p>{props.children}</p>     
      </div>
    )
};
//if we use class and component we need to use the props as
//this.props.name
export default propsexample;