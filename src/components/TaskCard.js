import React, { Component } from 'react'

export default class TaskCard extends Component {
    render() {
        return (
            <tr className="taskItem">
                <th className="col-1">{this.props.id}</th>
                <td className="col-4">{this.props.name}</td>
                <td className="col-1">{this.props.priority}</td>
                <td className="col-1">{this.props.status}</td>
                <td className="col-1">{this.props.created}</td>
                <td className="col-1">{this.props.modified}</td>
                <td className="col-1">{this.props.deadline}</td>
                <td className="col-1">View task</td>
                <td className="col-1">Del</td>
            </tr>
        )
    }
}
