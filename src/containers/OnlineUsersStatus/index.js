import React from 'react'
import {OnlineUsersCount} from '../../components'

import { connect } from 'react-redux'
import action from "../../redux/actions/action"

const OnlineUsersStatus = ({users}) =>(
    <OnlineUsersCount count={users.users.length}/>
)

function mapStateToProps (state) {
    return {
        users : state.users
    }
  }

export default connect(mapStateToProps,action)(OnlineUsersStatus) 