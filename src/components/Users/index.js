import React from 'react'
import MemberListItem from '../User'

import './MemberList.css'

const MemberList = ({items}) =>(
    <div className="chat__memberlist">
        {
             items.map((item,idx) =>(
                <MemberListItem  user={item} key={item+idx}/>
            ))
        }
    </div>
)

export default MemberList