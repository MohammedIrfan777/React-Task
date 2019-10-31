import React from 'react';

export class Main extends React.Component{
    render(){
        return(
            <div>
                <h1> The Main Page Contains</h1>
               <button onClick={()=>this.props.changeUsername('Roopa')}>Change the UserName</button>
            </div>
        );
    }
}