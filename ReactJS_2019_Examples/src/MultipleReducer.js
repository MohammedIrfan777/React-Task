import {createStore,combineReducers} from 'redux';

const showreducer =(state=0, action)=>{
 switch(action.type){
     case "ADD":
     state = state + action.payload
     break;
     case "SUB":
     state = state - action.payload
     break;
 }
 return state;
};
const userReducer=(state={name:"Shailaja",age:34},action)=>{
  switch(action.type){
      case "SET_NAME":
      state={
        ...state,
        name:action.payload
      };
      break;
      case "SET_AGE":
      state={
          ...state,
          age:action.payload
      };
      break;
  }
  return state;
};
const store= createStore(combineReducers({showreducer,userReducer}));

store.subscribe(()=>{
  console.log("Store is updated",store.getState());
});

store.dispatch({
    type:"ADD",
    payload:10
});

store.dispatch({
    type:"ADD",
    payload:80
});

store.dispatch({
    type:"SUB",
    payload:10
});
store.dispatch({
  type:"SET_AGE",
  payload:10
});