import React from 'react'
import ProjectContainer from './ProjectContainer'

export default class Main extends React.Component {


    render() {
        return (
            <div className="container" id="pageHeader">

                <header className="text-center text-light my-4">
                    <nav className="navbar navbar-expand navbar-light">
                        <div className="collapse navbar-collapse" id="left">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a href="index.html" className="btn"><i className="fa fa-home"></i></a>
                                </li>
                                <li className="nav-item active">
                                    <button className="btn"><i className="fa fa-bars"></i></button>
                                </li>
                                <li className="nav-item">
                                    <form className="search">
                                        <input className="form-control m-auto" type="text" name="search" placeholder="Search by name..." />
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

            </div>
        )
    }
}