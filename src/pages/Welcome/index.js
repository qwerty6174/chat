import React from 'react'
import {Link} from "react-router-dom";

import './Welcome.css'

function Index ({logIn}){
    return(
        <div className="welcome_page">
            <div className="welcome_form">
                <h2 className="welcome_form-title">Войти в чат</h2>
                <p className="welcome_form-info">Пользователь будет создан автоматически</p>
                <Link to="/im"><button className="welcome_form-button" onClick={()=>logIn()}>Войти</button></Link>
            </div>
        </div>
    )
}

export default Index;