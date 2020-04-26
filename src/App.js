import React from 'react';
import './App.css';
import MainProjectPage from './components/MainProjectPage';
import { Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import { addProjects } from './actions/projects';
import Axios from 'axios'
import PageTemplate from './components/PageTemplate'
import NewProject from './components/NewProject'
import ProjectInfoPage from './components/ProjectInfoPage';


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

          <Route path="/projects/new" exact={true}>
            <PageTemplate content={<NewProject/>} />
          </Route>

          <Route path="/projects/:id" exact={true} component={ProjectInfoPage}/>
           
          <Route>
            <h2> Insert 404 page here! </h2>
          </Route>

        </Switch>
      </div >

    )
  }
}


