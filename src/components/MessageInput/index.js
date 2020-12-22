import React from 'react'
import './MessageInput.css'

const MessageInput = ({inputValue,onChange,onSend}) =>(
    <div className="input-group">
        <div className="input-group-attach">
            <button>+</button>
        </div>
        <div className="input-group-text">
            <input placeholder="Введите сообщение" value={inputValue} onChange={(e)=>onChange(e.target.value)} onKeyDown={(e)=>e.key==="Enter" && onSend()}></input>
        </div>
        <div className="input-group-send">
            <button onClick={()=>onSend()}>▶</button>
        </div>
    </div>
)

export default MessageInput