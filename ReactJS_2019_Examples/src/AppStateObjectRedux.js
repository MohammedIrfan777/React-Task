import {createStore} from 'redux';

const iniState ={
    result:1,
    lastValues:[]
};

const reducer=(state=iniState,action)=>{
    switch(action.type){
        case "ADD":
        // state.result += action.payload;
         state ={
           ...state, //spread operator in ES6 which irrates the data and give indivual value
           result:state.result+action.payload,
           lastValues:[...state.lastValues,action.payload]
         };
         break;
         case "SUB":
         //state.result -= action.payload
         state ={
           ...state,
           result:state.result - action.payload,
           lastValues:[...state.lastValues,action.payload]
         };
    }
  return state;
};

const store = createStore(reducer);

store.subscribe(()=>{
    console.log("Updated Store Values" , store.getState());
})

store.dispatch({
    type:"ADD",
    payload:10
})
store.dispatch({
    type:"ADD",
    payload:80
})

store.dispatch({
    type:"SUB",
    payload:10
})