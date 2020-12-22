import React from 'react'
import './MemberListItem.css'


const MemberListItem = ({user})=>(
    <div className="memberlist__item">
        <div className="memberlist__item-avatar">
            <img src={user.avatar} alt="User Avatar" />
        </div>
        <div className="memberlist__item-fullname">
            <p>{user.fullname}</p>
        </div>
    </div>
)

export default MemberListItem;