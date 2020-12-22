import React from 'react'

const MessageHeader = ({currentUser}) =>(
    <div className="chat__messages-header">
       {currentUser && <>
        <div className="chat__messages-header-avatar">
            <img src={currentUser.avatar} alt="Your avatar"/>
        </div>
        <div className="chat__messages-header-fullname">
            <b>{currentUser.fullname}</b>
        </div>
        </>}
    </div>
)

export default MessageHeader