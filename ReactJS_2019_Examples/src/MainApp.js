import React,{Component} from 'react';
import {MapExample} from './OtherComponents/MapExample';
import FilterExample from './OtherComponents/FilterExample';
import PropTypesExample from './OtherComponents/FilterExample';
import FormExample from './OtherComponents/FormExample';

import RefExample from './OtherComponents/RefExample';
import LifeCycleHooks from './OtherComponents/LifeCycleHooks';
import HighMain from './HighMain';

export default class MainApp extends Component{

    render(){
        const number =[1,2,3,4];
        const name='shailaja';
        const list =[
            { name: 'Rani', friend: true },
            { name: 'Roopa', friend: true },
            { name: 'Ramesh', friend: false },
            { name: 'Reena', friend: false },
            { name: 'Rajesh', friend: true },
            { name: 'Rakesh', friend: false }
            ];

       return(
          <div>
              <HighMain></HighMain>             
          </div>   
        );
   }
}