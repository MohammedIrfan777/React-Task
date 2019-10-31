import React,{Comopnent} from 'react';

class LifeCycleHooks extends React.Component{
    constructor(){
        super();
        this.state={name:'shailaja'}
    }
    componentWillMount(){
      console.log('component will mount')
    }
    componentDidMount(){
        console.log('component did mount')
    }
    render(){
        return(
            <div>
               {this.state.name}  
            </div>
        );
    }
}
export default LifeCycleHooks;