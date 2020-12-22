import React, { useEffect } from 'react'
import {Users as BaseUsers} from '../../components'
import { connect } from 'react-redux'
import socket from '../../socket'
import action from "../../redux/actions/action"

const Users = ({OnNewUser,users})=>{
    useEffect(()=>{
        socket.on("ROOM:JOINED",users=> OnNewUser(users));
        socket.on("ROOM:DICONNECTED",users=> OnNewUser(users));
    },[]) 
    
    return(
        <>
            {users.users.length ? <BaseUsers items={users.users}/> : <div className="chat__memberlist"><div className="empty"><span>Пользователей нет онлайн(</span></div></div>}
        </>
    )
}

function mapStateToProps (state) {
    return {
        auth: state.auth,
        users : state.users
    }
  }

export default connect(mapStateToProps,action)(Users)   