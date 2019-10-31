import React,{Component} from 'react';
import FilterExample from './OtherComponents/FilterExample';

export default class FilterMain extends Component{
    render(){
        const number =[1,2,3,4];
       return(
          <div>
              <MapExample numbers={number} />
          </div>   
        );
   }
}