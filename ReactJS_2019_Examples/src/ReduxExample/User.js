import React from 'react';

export class User extends React.Component{
    render(){
        return(
            <div>
                <h1> The User Name is</h1>
                <p>This is my name:{this.props.username}</p>
            </div>
        );
    }
}