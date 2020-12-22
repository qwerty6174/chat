import React from 'react'
import './Message.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import classNames from 'classnames'
import parseISO from 'date-fns/parseISO'

const Message = ({item})=>(
        <div className={classNames("message",{"message--isme" : item.isMe })}>
            <div className="message__avatar">
                <img src={item.author.avatar} alt={`Avatar`}/>
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <div className="message__text">
                        <p>{item.text}</p>
                    </div>
                </div>
                <span className="message__date">{item.author.fullname}, {formatDistanceToNow((parseISO(item.date)),{ addSuffix: true, locale: ruLocale })}</span>
            </div>
        </div>
)

export default Message