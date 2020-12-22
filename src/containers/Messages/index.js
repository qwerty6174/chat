import React, { useEffect,useRef } from 'react'
import {Messages as BaseMessages} from '../../components'
import { connect } from 'react-redux'
import socket from '../../socket'
import action from "../../redux/actions/action"

const Messages = ({OnSetMessages,messages})=>{
    const messagesRef = useRef(null);
    useEffect(()=>{
        socket.on("ROOM:NEW_MESSAGE",messages=> OnSetMessages(messages));
        console.log("socket",messages)
    },[]) 

    useEffect(()=>{
        if(messagesRef.current){
        messagesRef.current.scrollTo(0,9999999);}
    })
    
    return(
        <>
            {messages.payload && messages.payload.length ? <BaseMessages items={messages.payload} blockref={messagesRef}/>:<div className="empty"><h2>Сообщений нет, начните диалог...</h2></div>}
        </>
    )
}

function mapStateToProps (state) {
    return {
        messages: state.messages
    }
  }

export default connect(mapStateToProps,action)(Messages)   