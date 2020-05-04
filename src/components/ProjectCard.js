import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { removeProjectById } from '../actions/projects'
import Axios from 'axios'
import { Link } from "react-router-dom";

export default class ProjectCard extends Component {

    // state = {
    //     expanded: false
    // }

    // handleClick = () => {
    //     this.setState({
    //         expanded: !this.state.expanded
    //     })
    // }

    handleRemove = () => {
        this.props.dispatch(removeProjectById(this.props.projectId));
        Axios.delete(`http://localhost:8080/projects/${this.props.projectId}`)
    }

    render() {
        return (
            <li className="projectElement list-unstyled pt-1 pb-2 mt-1">
                <div className="row">
                    <div className="col-7" > {this.props.projectName} </div>
                    <Link to={`/projects/${this.props.projectId}`}> <span className="col-1" href="/#">View project</span> </Link>
                    <div className="col-1" > {this.props.status} </div>
                    <div className="col-1" > {this.props.doneTasks}/{this.props.totalTasks} </div>

                    <Link to={`/projects/${this.props.projectId}/edit`}><div className="col-1"> <FontAwesomeIcon icon={faPencilAlt} /> </div></Link>
                    <div className="col-1" onClick={this.handleRemove}> <FontAwesomeIcon icon={faTrashAlt} /> </div>
                </div>

                {/* {this.state.expanded && <div> {this.props.projectDescription} </div>} */}

            </li>
        )
    }
}
