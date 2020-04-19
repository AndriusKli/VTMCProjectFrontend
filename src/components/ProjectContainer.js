import React, { Component } from 'react'
import Axios from 'axios'
import Project from './Project'

export default class ProjectList extends Component {


    state = {
        projects: [],
        searchActive: false,
        filtered: []        
    }

    componentDidMount() {
        Axios.get(`http://localhost:8080/projects/full`).then(res => {
            const data = res.data;
            this.setState({ projects: data });
        })
    }

    handleDelete = (event, id) => {
        event.preventDefault();
        console.log(`Delete pressed for project id ${id}`);
        Axios.delete(`http://localhost:8080/projects/${id}`); // Should probably wrap in a try block just in case.
        const updatedState = this.state.projects.filter(project => project.projectId !== id);
        this.setState({projects: updatedState});
    }

    render() {
        return (
            <div>
                <ul id="projectContainer">

                    {this.state.projects.map(project =>
                        <Project key={project.projectId} projectName={project.projectName} status={project.projectStatus} doneTasks={project.completeTasks}
                        totalTasks={project.totalTasks} projectDescription={project.projectDescription} handleDelete={event => this.handleDelete(event, project.projectId)}/>
                    )}

                </ul>
            </div>
        )
    }
}
