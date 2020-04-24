import React from 'react';
import './App.css';
import MainProjectPage from './components/MainProjectPage';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import { addProjects } from './actions/projects';
import Axios from 'axios'
import PageTemplate from './components/PageTemplate'
import NewProject from './components/NewProject'


export default class App extends React.Component {

  componentDidMount() {
    Axios.get(`http://localhost:8080/projects/full`).then(res => {
        const data = res.data;
        this.props.dispatch(addProjects(data));
    })

}
  
  render() {
    return (

      <div>
        <Switch>
          <Route path="/" exact={true}>
            <Homepage />
          </Route>

          <Route path="/projects" exact={true}>
            <MainProjectPage />
          </Route>

          <Route path="/projects/new">
            <PageTemplate content={<NewProject/>} />
          </Route>

          <Route>
            <h2> Insert 404 page here! </h2>
          </Route>
        </Switch>
      </div >

    )
  }
}


