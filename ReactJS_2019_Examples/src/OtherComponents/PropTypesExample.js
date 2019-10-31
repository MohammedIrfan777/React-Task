import React from 'react';

class PropTypesExample extends React.Component{
    constructor(props){
        super();        
    }
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}
export default PropTestExample;
