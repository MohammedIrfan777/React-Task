import React,{Component} from 'react';

//statefull component

export class MapExample extends React.Component{
    constructor(props){
        super();

    }
    render(){
     const numbers = this.props.numbers
     const listItems = numbers.map((number) =>
     <li key={number.toString()}>
       {number}
     </li>
   );
        return(
            <div>
                <p>The Map iteration</p>
              <ul>{listItems}</ul>
            </div>
        );
    }
}
