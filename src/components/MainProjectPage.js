import React from 'react'
import ProjectContainer from './ProjectContainer'
import { Link } from 'react-router-dom'

export default class Main extends React.Component {
    
    
    handleSearch = event => {
        console.log("To Do");
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
                                        <input className="form-control m-auto" type="text" name="search" id="projectSearch" onChange={this.handleSearch} placeholder="Search by name..." />
                                    </form>
                                </li>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse" id="right">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">ALL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">NOT STARTED</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">IN PROGRESS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CLOSED</a>
                                </li>
                            </ul>
                        </div>

                    </nav>

                    <div>
                        <a className="new-project-link" href="">NEW PROJECT+</a>
                    </div>
                </header>

                <ProjectContainer />

                <br />
            </div>
        )
    }
}