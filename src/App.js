import React from 'react'
import { Welcome } from './containers/'
import {Home} from './pages'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return ( 
  <div className="wrapper">
  <BrowserRouter>
    <Switch>
        <Route path="/im">
            <Home/>
        </Route>
        <Route path="/">
            <Welcome/>
        </Route>
    </Switch>
  </BrowserRouter>
</div>);
}

export default App;
