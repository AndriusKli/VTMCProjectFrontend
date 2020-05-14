import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterBySearch, filterStatusBy } from '../actions/filters';
import ProjectCard from './ProjectCard';
import selectProjects from '../selectors/projects';



const ProjectPage = (props) => (
    <div className="container" id="pageHeader">

        <header className="text-center text-light my-4">
            <nav className="navbar navbar-expand ">
                <div className="collapse navbar-collapse" id="left">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/"><div className="btn" onClick={() => {
                                props.dispatch(filterStatusBy(''));
                                props.dispatch(filterBySearch(''));
                            }}><i className="fa fa-home"></i></div></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/maintenance"> <button className="btn" onClick={() => {
                                props.dispatch(filterStatusBy(''));
                                props.dispatch(filterBySearch(''));
                            }}><i className="fa fa-bars"></i></button></Link>
                        </li>
                        <li className="nav-item">
                            <form className="search">
                                <input className="form-control m-auto" type="text" name="search"
                                    id="projectSearch" placeholder="Search for projects..." onChange={(event) => {
                                        props.dispatch(filterBySearch(event.target.value.trim()))
                                    }} />
                            </form>
                        </li>
                        <div className="my-taskbar">
                            <div className="container">
                                <div className="row">
                                    <div><span className="col" onClick={(event) => {
                                        event.preventDefault();
                                        props.dispatch(filterStatusBy())
                                    }}>ALL</span></div>
                                    <div><span className="col" onClick={(event) => {
                                        event.preventDefault();
                                        props.dispatch(filterStatusBy("Not started"))
                                    }} >NOT STARTED</span></div>
                                    <div><span className="col" onClick={(event) => {
                                        event.preventDefault();
                                        props.dispatch(filterStatusBy("In progress"))
                                    }}>IN PROGRESS</span></div>
                                    <div><span className="col" onClick={(event) => {
                                        event.preventDefault();
                                        props.dispatch(filterStatusBy("Complete"))
                                    }}>COMPLETE</span></div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
        </header>

        <div className="my-taskbar">
            <div className="container">
                <div className="row pb-1">
                    <Link to="/projects/new"><button className="btn-primary" onClick={() => {
                        props.dispatch(filterStatusBy(''));
                        props.dispatch(filterBySearch(''));
                    }}>NEW PROJECT+</button></Link>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr className="row">
                        <th className="col-5"> PROJECT NAME </th>
                        <th className="col-2 text-center"> INFO </th>
                        <th className="col-2 text-center"> STATUS </th>
                        <th className="col-1 text-center"> TASKS </th>
                        <th className="col-1 text-center"> EDIT </th>
                        <th className="col-1 text-center"> DELETE </th>
                    </tr>
                </thead>

                {props.projects.map(project =>
                    <ProjectCard
                        key={project.projectId} projectId={project.projectId} projectName={project.projectName} status={project.projectStatus} doneTasks={project.completeTasks}
                        totalTasks={project.totalTasks} projectDescription={project.projectDescription} dispatch={props.dispatch} />
                )}

            </table>
            <br />
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        projects: selectProjects(state.projects, state.filters)
    };
};

export default connect(mapStateToProps)(ProjectPage);