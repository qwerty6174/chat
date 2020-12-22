const initialState =  {
    avatar: "",
    fullname: ""
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState,{type,payload})=>{
    switch(type){
        case "SET_CURRENT_USER":
            return{...state, currentUser:payload };
        default:
            return state;
    }
}