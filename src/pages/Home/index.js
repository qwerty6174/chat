import React from 'react'

import {MessageHeader, Messages, OnlineUsersStatus, Users,MessageInput} from '../../containers';

import './Home.css'

const Home = () =>(
    <div className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-list">
                    <div className="chat__sidebar-list-header">
                        <OnlineUsersStatus/>
                    </div>
                    <Users/>
                </div>
            </div>
            <div className="chat__messages">
               <MessageHeader/>
                <div className="chat__messages-list">
                   <Messages/>
                </div>
                <div className="chat__messages-input">
                    <MessageInput/>
                </div>
            </div>
        </div>
    </div>
)

export default Home;