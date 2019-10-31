const showReducer =(state=0, action)=>{
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
 export default showReducer; 