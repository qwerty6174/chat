const action = {
    LogIn:()=>( {
        type: "LOG_IN"
    }),
    OnLogIn: () => dispatch =>{
        dispatch(action.LogIn())
    },
    NewUser:(items)=>({
        type: "SET_USERS",
        payload: items
    }),
    OnNewUser: items => dispatch =>{
        dispatch(action.NewUser(items));
    },
    CurrentUser: (item)=>({
        type: "SET_CURRENT_USER",
        payload: item
    }),
    SetCurrentUser: items => dispatch =>{
        dispatch(action.CurrentUser(items))
    },
    SetMessages:(items)=>({
        type: "SET_MESSAGES",
        payload:items
    }),
    OnSetMessages:items=> dispatch=>{
        dispatch(action.SetMessages(items))
    }
}

export default action;