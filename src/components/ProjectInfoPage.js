import React, { Component } from 'react';
import TaskCard from './TaskCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { addTasks } from '../actions/projects'

// Read more about ownProps
// Returns data on the currently accessed project.
const mapStateToProps = (state, ownProps) => {
    return {
        project: state.projects.find(({ projectId }) => projectId === parseInt(ownProps.match.params.id))
    };
};

class ProjectInfoPage extends Component {

    state = {
        doneRetrieving: false
    }

    componentDidMount() {
        // console.log(`Welcome to project ID #${this.props.match.params.id}`);
        // console.log(this.props.project);
        Axios.get(`http://localhost:8080/projects/${this.props.project.projectId}/tasks`).then(res => {
            const data = res.data;
            this.props.dispatch(addTasks(parseInt(this.props.match.params.id), data));
            this.setState({ doneRetrieving: true })
        });


    }

    render() {
        return (
            <div className="container" id="pageHeader">

                <header className="text-center text-light my-4">
                    <nav className="navbar navbar-expand navbar-light">
                        <div className="collapse navbar-collapse" id="left">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/"><div className="btn"><i className="fa fa-home"></i></div></Link>
                                </li>
                                <li className="nav-item active">
                                    <button className="btn"><i className="fa fa-bars"></i></button>
                                </li>
                                <li className="nav-item">
                                    <form className="search">
                                        <input className="form-control m-auto" type="text" name="search" placeholder="Search for tasks..." />
                                    </form>
                                </li>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse" id="right">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/#">EDIT PROJECT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">DELETE PROJECT</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/projects"> <div className="nav-link">CLOSE</div> </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                {/* <!-- Everything else goes here --> */}

                <div className="my-projectcontainer">
                    <div className="container">
                        <div className="row">
                            <div className="col"> <b> Project ID: </b> {this.props.project.projectId} </div>
                            <div className="col"> <b> Name: </b> {this.props.project.projectName} </div>
                            <div className="col"> <b> Status: </b> {this.props.project.projectStatus}s</div>
                            <div className="w-100"></div>
                            <div className="col"> <b> Deadline: </b> {new Date(this.props.project.projectDeadline).toLocaleString('lt-LT')} </div>
                            <div className="col"> <b> Create date: </b> {new Date(this.props.project.projectCreatedOn).toLocaleString('lt-LT')} </div>
                            <div className="col"> <b> Project manager: </b> {this.props.project.projectManager}</div>
                        </div>
                    </div>
                    <div className="container my-description">
                        <div className="row">
                            <div className="col-12"> <b> Description: </b> {this.props.project.projectDescription} </div>
                        </div>
                    </div>
                </div>


                <div className="my-taskbar">
                    <div className="container">
                        <div className="row">
                            <div><a className="col" href="/#">ALL</a></div>
                            <div><a className="col" href="/#">NOT STARTED</a></div>
                            <div><a className="col" href="/#">IN PROGRESS</a></div>
                            <div><a className="col" href="/#">CLOSED</a></div>
                            <div><a className="col" href="taskform.html">NEW TASK+</a></div>
                        </div>
                    </div>
                </div>

                <div className="my-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="col-1">ID</th>
                                <th className="col-4">NAME</th>
                                <th className="col-1">PRIORITY</th>
                                <th className="col-1">STATUS</th>
                                <th className="col-1">CREATED ON</th>
                                <th className="col-1">MODIFIED ON</th>
                                <th className="col-1">DEADLINE</th>
                                <th className="col-1">VIEW</th>
                                <th className="col-1">DEL</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.doneRetrieving ?
                                this.props.project.tasks.map(task => <TaskCard key={task.taskId}
                                    id={task.taskId}
                                    name={task.taskName}
                                    priority={task.taskPriority}
                                    created={new Date(task.taskCreatedOn).toLocaleDateString('lt-LT')}
                                    modified={new Date(task.taskModifiedOn).toLocaleDateString('lt-LT')}
                                    deadline={new Date(task.taskDeadline).toLocaleDateString('lt-LT')}
                                    status={task.tastStatus}
                                />) : null}

                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ProjectInfoPage);