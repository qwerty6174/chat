const initialState =  {loggedIn: false};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState,{type,payload})=>{
    switch(type){
        case "LOG_IN":
            return{...state,  loggedIn: true };
        default:
            return state;
    }
}