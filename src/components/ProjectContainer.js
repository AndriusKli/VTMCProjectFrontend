import React, { Component } from 'react'
import Project from './Project'
import { connect } from 'react-redux'
import { removeProjectById } from '../actions/projects'
import selectProjects from '../selectors/projects';

const ProjectContainer = (props) => (
    <div>
        <ul id="projectContainer">
            {props.projects.map(project =>
                <Project key={project.projectId} projectId={project.projectId} projectName={project.projectName} status={project.projectStatus} doneTasks={project.completeTasks}
                    totalTasks={project.totalTasks} projectDescription={project.projectDescription} dispatch={props.dispatch}/>
            )}
        </ul>
    </div>
);

// Returns an array of projects that get run through a filter. The filter takes the current projects and filters them by the set
// status AND search value.
const mapStateToProps = (state) => {
    return {
        projects: selectProjects(state.projects, state.filters)
    };
};

export default connect(mapStateToProps)(ProjectContainer);







// export default class ProjectList extends Component {


//     state = {
//         projects: []
//     }

    // componentDidMount() {
    //     Axios.get(`http://localhost:8080/projects/full`).then(res => {
    //         const data = res.data;
    //         this.setState({ projects: data });
    //     })
    // }

//     handleDelete = (event, id) => {
//         event.preventDefault();
//         console.log(`Delete pressed for project id ${id}`);
//         Axios.delete(`http://localhost:8080/projects/${id}`); // Should probably wrap in a try block just in case.
//         const updatedState = this.state.projects.filter(project => project.projectId !== id);
//         this.setState({ projects: updatedState });
//     }

//     render() {
//         return (
// <div>
//     <ul id="projectContainer">

//         {this.state.projects.map(project =>
//             <Project key={project.projectId} projectName={project.projectName} status={project.projectStatus} doneTasks={project.completeTasks}
//                 totalTasks={project.totalTasks} projectDescription={project.projectDescription} handleDelete={event => this.handleDelete(event, project.projectId)} />
//         )}

//     </ul>
// </div>
//     )
// }
// }