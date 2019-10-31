import React from 'react';

export class StateChange extends React.Component{
    constructor(props){
        super();
        this.state={
            age:props.initialAge
          };
    }

    onChangeAge(){
        console.log(this.age);
        this.setState({
            age:this.state.age + 3
          });
    }

    //Life Cycle Method of ReactJS

  /*  componentWillMount(){
        console.log("component will mount");        
    }

    componentDidMount(){
        console.log("component did mount");        
    }

    componentWillReceiveProps(nextProps){
        console.log("component recived the next props", nextProps);
    }

    shouldComponentUpdate(nextProps,newState){
        console.log("should comonent update",nextProps,newState);
    }
    componentWillUpdate(nextProps,newState){
        console.log("Component will update",nextProps,newState);
    }
    componentDidUpdate(preProps,preState){
        console.log("Component did update", preProps,preState);
    }

    componentWillUnmount(){
        console.log("Component Will unmount");
    }*/

    render(){
        return(
              <div>
                   <p>Your age is {this.state.age}</p>                  
                   <button onClick={this.onChangeAge.bind(this)}>MakeOlder!!</button>
                   <br></br>
                   <button onClick={this.props.show}>Click</button>
                   
              </div>
        );
    }
}