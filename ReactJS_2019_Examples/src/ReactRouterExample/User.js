import React from 'react';
import {browserHistory} from 'react-router';

export class User extends React.Component{
    onNaviHome(){
     browserHistory.push("/home");
    }
    render(){
        return(
            <div>
                <h2> The User page for Prama pass in Route link</h2>
                    <p>User ID :{this.props.params.id} </p>
                <button onClick={this.onNaviHome} >Go Back!</button>   
            </div>
        );
    }
}