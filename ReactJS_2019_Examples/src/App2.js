import React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';

import {User} from './ReduxExample/User';
import {Main} from './ReduxExample/Main';
import {setName} from './actions/userAction';

class App2 extends React.Component{
      render(){
        return(
            <div>
                <Main changeUsername={()=>this.props.setName("Roopa")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.userReducer,
        show:state.showReducer
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
       setName:(name)=>{
           dispatch(setName(name));
       /* dispatch({
            type:"SET_NAME",
            payload:name
        });*/

       }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App2)