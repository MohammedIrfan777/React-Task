import React from "react";
import {Header} from './Header';
export class RootElement extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <div id="rootElement">{this.props.children}</div>
            </div>            
        );

    }
}