import React from 'react'
import {MessageHeader as BaseMessageHeader} from '../../components'

import { connect } from 'react-redux'
import action from "../../redux/actions/action"

const OnlineUsersStatus = ({currentUser}) =>(
    <BaseMessageHeader currentUser={currentUser.currentUser}/>
)

function mapStateToProps (state) {
    return {
        currentUser : state.currentUser
    }
  }

export default connect(mapStateToProps,action)(OnlineUsersStatus) 