import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export default class Project extends Component {

    state = {
        expanded: false
    }

    handleClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }


    render() {
        return (
            <li className="projectElement list-unstyled pt-1 pb-2 mt-1">
                <div className="row">
                    <div className="col-8" onClick={this.handleClick}> {this.props.projectName} </div>
                    <div className="col-1" onClick={this.handleClick}> {this.props.status} </div>
                    <div className="col-1" onClick={this.handleClick}> {this.props.doneTasks}/{this.props.totalTasks} </div>
                    <div className="col-1" > <FontAwesomeIcon icon={faPencilAlt} /> </div>
                    <div className="col-1" onClick={this.props.handleDelete}> <FontAwesomeIcon icon={faTrashAlt} /> </div>
                </div>

                {this.state.expanded && <div> {this.props.projectDescription} </div>}

            </li>
        )
    }
}
