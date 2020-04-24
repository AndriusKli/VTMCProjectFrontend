import React from 'react'
import Project from './Project'
import { connect } from 'react-redux'
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

// Can probably get rid of this component by moving it into MainProjectPage