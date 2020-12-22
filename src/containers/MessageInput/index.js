import React from 'react';
import { connect } from 'react-redux'
import {MessageInput as BaseMessageInput} from '../../components'
import socket from '../../socket';

import action from "../../redux/actions/action"

const MessageInput = ({currentUser}) =>{
    const [value,setValue] = React.useState('');
    function onChange (value){setValue(value)};
    const onSend = () =>{
        const message = {
            avatar: currentUser.currentUser.avatar,
            fullname: currentUser.currentUser.fullname,
            text: value,
            date: new Date()
        }
        setValue('')
        socket.emit("ROOM:NEW_MESSAGE",{message});
    }
    return(
        <BaseMessageInput inputValue={value} onChange={onChange} onSend={onSend}/>
    )
}

function mapStateToProps (state) {
    return {
        currentUser: state.currentUser,
    }
  }

export default connect(mapStateToProps,action)(MessageInput)   