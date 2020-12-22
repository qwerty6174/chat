import React from 'react'
import { connect } from 'react-redux'
import socket from '../../socket'
import axios from 'axios'

import action from "../../redux/actions/action"
import {Welcome as BaseWelcome} from '../../pages'
import words from '../../words'

const Welcome = ({OnLogIn,SetCurrentUser,OnNewUser})=>{
    function randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
    const logIn= async ()=>{
        const fullname = words[randomInteger(0,19)] + " " + words[randomInteger(20,28)]
        const user={
            avatar: "https://loremflickr.com/320/240",
            fullname:   fullname
        }
        OnLogIn();
        SetCurrentUser(user);
        socket.emit("ROOM:JOIN",{user});
        const {data} = await axios.get('http://localhost:8888/');
        OnNewUser(data);
    }
    return(<BaseWelcome logIn={logIn} SetCurrentUser={SetCurrentUser} />)
}

function mapStateToProps (state) {
    return {
        auth: state.auth,
        users : state.users
    }
  }

export default connect(mapStateToProps,action)(Welcome)   