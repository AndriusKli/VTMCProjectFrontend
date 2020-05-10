import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { removeProjectById } from '../actions/projects'
import Axios from 'axios'
import { Link } from "react-router-dom";

export default class ProjectCard extends Component {

    handleRemove = () => {
        this.props.dispatch(removeProjectById(this.props.projectId));
        Axios.delete(`http://localhost:8080/api/projects/${this.props.projectId}`)
    }

    render() {
    //    const mystyle = {
    //         color: "#3f0091"
    //         this.state.hovered && this.styles.hover
    //     }; 
        return (
            <li class="a">
                <div className="row pt-1 pl-3 pb-2 mt-1">
                    <div className="col-6"> {this.props.projectName} </div>
                    <span className="col-2"> <Link id="View" to={`/projects/${this.props.projectId}`}>View project</Link></span>
                    <div className="col-2"> {this.props.status} </div>
                    <div className="col-1"> {this.props.doneTasks}/{this.props.totalTasks} </div>
                    <div className="col-1">
                    <div className="row">
                    <div className="col-10"></div>
                    <div className="col-1"> <Link to={`/projects/${this.props.projectId}/edit`}> <FontAwesomeIcon icon={faPencilAlt} /> </Link> </div>
                    <span className="col-1" onClick={this.handleRemove}> <FontAwesomeIcon icon={faTrashAlt} /> </span>
                    </div>
                    </div>

                </div>
            </li>
        )
    }
}
