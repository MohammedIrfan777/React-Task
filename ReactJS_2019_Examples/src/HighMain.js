import React,{Component} from 'react';

import './HighOrderComponent/ButtonOne';
import ButtonOne from './HighOrderComponent/ButtonOne';

 class HighMain extends React.Component{
    render(){
        return(
            <div>
              <ButtonOne disable></ButtonOne>
            </div>
        );
    }
}
export default HighMain;