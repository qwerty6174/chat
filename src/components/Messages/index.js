import React from 'react'
import {Message} from '../'

import './Messages.css'

const Messages = ({blockref,items}) => (
        <div className="messages" ref={blockref}>
        {
            items.map((item,idx) =>(
                <Message  item={item} key={item + idx}/>
            ))
        }
        </div>
)

export default Messages