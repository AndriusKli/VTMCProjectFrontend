import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


export default class Project extends Component {


    render() {
        return (
            <li className="row pt-1 pb-2 mt-1 projectElement">
                <div className="col-8"> Task name task name task name task name task name task name task name task name</div>
                <div className="col-1"> In progress </div>
                <div className="col-1"> 14/25 </div>
                <div className="col-1"> <FontAwesomeIcon icon={faPencilAlt} /> </div>
                <div className="col-1"> <FontAwesomeIcon icon={faTrashAlt} /> </div>
            </li>
        )
    }
}
