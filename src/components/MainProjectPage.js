import React from 'react'
import ProjectContainer from './ProjectContainer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterBySearch, filterStatusBy } from '../actions/filters'

const MainProjectPage = (props) => (
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
                                <input className="form-control m-auto" type="text" name="search"
                                    id="projectSearch" placeholder="Search by name..." onChange={(event) => {
                                        props.dispatch(filterBySearch(event.target.value.trim()))
                                    }} />
                            </form>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="right">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/#" onClick={(event) => {
                                event.preventDefault();
                                props.dispatch(filterStatusBy())
                            }} >ALL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" onClick={(event) => {
                                event.preventDefault();
                                props.dispatch(filterStatusBy("Not started"))
                            }} >NOT STARTED</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" onClick={(event) => {
                                event.preventDefault();
                                props.dispatch(filterStatusBy("In progress"))
                            }} >IN PROGRESS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#" onClick={(event) => {
                                event.preventDefault();
                                props.dispatch(filterStatusBy("Complete"))
                            }} >COMPLETE</a>
                        </li>
                    </ul>
                </div>

            </nav>

            <div>
                <Link to="/projects/new"><div className="new-project-link" href="/#">NEW PROJECT+</div></Link>
            </div>
        </header>

        <ProjectContainer />

        <br />
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(MainProjectPage);