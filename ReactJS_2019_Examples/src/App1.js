import React from 'react';
import {render} from 'react-dom';
import {Router, Route,browserHistory,IndexRoute} from "react-router";

import {RootElement} from './ReactRouterExample/RootElement';
import {Home} from './ReactRouterExample/Home';
import {User} from './ReactRouterExample/User';

class App1 extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={RootElement}>
                   <IndexRoute component={Home}/>
                   <Route path={"user/:id"} component={User}/>
                      
                   
                   <Route path={"home"} component={Home} />                    
                </Route>                
            </Router>
        );
    }
}
export default App1;