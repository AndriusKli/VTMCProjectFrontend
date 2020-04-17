import React, { Component } from 'react'
import Axios from 'axios'
import Project from './Project'

export default class ProjectList extends Component {


    state = {
        projects: [],        
    }

    componentDidMount() {
        Axios.get(`http://localhost:8080/projects/full`).then(res => {
            const data = res.data;
            this.setState({ projects: data });
            
            // this.state.projects.forEach(project => {
            //     Axios.get(`http://localhost:8080/projects/${project.projectId}/tasks`).then(res => {
            //         const tasks = res.data;
            //         this.setState({
            //             projectTasks: this.state.projectTasks.concat({"projectId": `${project.projectId}`, "totalTasks": `${tasks.length}`, "completeTasks": ``})
            //         });
            //         console.log(this.state.projectTasks);
            //     })
            // })
        })
    }

    handleDelete = (event, id) => {
        event.preventDefault();
        console.log(`Delete pressed for project id ${id}`);
        Axios.delete(`http://localhost:8080/projects/${id}`);
        const updatedState = this.state.projects.filter(project => project.projectId !== id);
        this.setState({projects: updatedState});
    }

    handleUpdate = (event, id) => {
        // TODO
    }

    render() {
        return (
            <div>
                <ul id="projectContainer">

                    {this.state.projects.map(project =>
                        <Project key={project.projectId} projectName={project.projectName} status={project.projectStatus} doneTasks={project.completeTasks}
                        totalTasks={project.totalTasks} projectDescription={project.projectDescription} handleDelete={event => this.handleDelete(event, project.projectId)}/>
                    )}

                    <br />
                </ul>
            </div>
        )
    }
}
