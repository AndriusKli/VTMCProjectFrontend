import React, { Component } from 'react'
import Axios from 'axios'
import Project from './Project'

export default class ProjectList extends Component {

    
    state = {
        projects: []
    }

    // componentDidMount() {
    //     Axios.get(`http://localhost:8080/projects`)..then(res => {
    //         const data = res.data;
    //         this.setState({projects: data});
    //     })
    // }
    
    render() {
        return (
            <div>
                <ul id="projectContainer">

                    <Project />

                    <br />
                </ul>
            </div>
        )
    }
}
