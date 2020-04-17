import React from 'react';
import './App.css';
import MainProjectPage from './components/MainProjectPage'
import { Switch, Route } from "react-router-dom"
import Homepage from './components/Homepage'

function App() {
  return (

    <div>
      <Switch>
      <Route path="/" exact={true}>
        <Homepage />
      </Route>

      <Route path="/projects">
        <MainProjectPage />
      </Route>

      <Route>
        <h2> Insert 404 page here! </h2>
      </Route>
        </Switch>
      </div >
    
  )
}

export default App;
