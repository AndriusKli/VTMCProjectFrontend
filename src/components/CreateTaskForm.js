import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class CreateTaskForm extends Component {

    state = {
        "taskName": '',
        "taskDescription": '',
        "taskPriority": "Low",
        "taskStatus": "Not started",
        "taskDeadline": '',
        "taskRole": '',
        "taskStory": '',
        "taskPurpose": '',
        "taskAcceptance": ''
    }

    handleUpdate = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value.trim()
        }, () => console.log(this.state));
       
    }

    validateFields() {        
        const { taskName, taskDescription, taskDeadline, taskRole, taskStory, taskPurpose, taskAcceptance} = { ...this.state };
        const nameValid = (taskName.length < 100 && taskName !== '');
        const descriptionValid = (taskDescription.length < 300 && taskDescription !== '');
        const termValid = (taskDeadline !== '' && Date.parse(taskDeadline) >= Date.now());
        const roleValid = (taskRole.length < 50 && taskRole !=='');
        const storyValid = (taskStory !== '' && taskStory.length < 500);
        const purposeValid = (taskPurpose !== '' && taskPurpose.length < 300);
        const acceptanceValid = (taskAcceptance !== '' && taskAcceptance.length < 500);

        return nameValid && descriptionValid && termValid && roleValid && storyValid && purposeValid && acceptanceValid;        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateFields()) {
            
            const payload = {
                ...this.state
            };

            console.log("submitting");
            console.log(payload);
            Axios.post(`http://localhost:8080/projects/${this.props.match.params.id}/tasks`, payload);
            setTimeout(() => {
                this.props.history.push(`/projects/${this.props.match.params.id}`);
            }, 500)
                   
        } else {
            alert("There are errors in your form, please try again.");
        }
    }


    render() {
        return (
            <form className="container col-md-6" id="pageform">
                <div className="row">
                    <label className="col-2"> Project ID: </label>
                    <div className="col-10"> {this.props.match.params.id} </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onChange={(event) => this.handleUpdate(event)} type="name" className="form-control" name="taskName" />
                    </div>
                </div>

                <div className="form row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea onChange={(event) => this.handleUpdate(event)} className="form-control" name="taskDescription" style={{ resize: "none" }} rows="3"></textarea>
                    </div>
                </div>
                <br />

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Priority</label>
                    <div className="col-sm-10">
                        <select onChange={(event) => this.handleUpdate(event)} name="taskPriority">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Status</label>
                    <div className="col-sm-10">
                        <select onChange={(event) => this.handleUpdate(event)} name="taskStatus">
                            <option value="Not started">Not started</option>
                            <option value="In progress">In progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Term</label>
                    <div className="col-sm-10">
                        <input onChange={(event) => this.handleUpdate(event)} type="date" className="form-control" name="taskDeadline" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-10">
                        <input onChange={(event) => this.handleUpdate(event)} type="name" className="form-control" name="taskRole" />
                    </div>
                </div>


                <div className="form row">
                    <label className="col-sm-2 col-form-label">User story</label>
                    <div className="col-sm-10">
                        <textarea onChange={(event) => this.handleUpdate(event)} className="form-control" name="taskStory" rows="5" style={{ resize: "none" }}></textarea>
                    </div>
                </div>
                <br />

                <div className="form row">
                    <label className="col-sm-2 col-form-label">Purpose</label>
                    <div className="col-sm-10">
                        <textarea onChange={(event) => this.handleUpdate(event)} className="form-control" name="taskPurpose" rows="2" style={{ resize: "none" }}></textarea>
                    </div>
                </div>
                <br />

                <div className="form row">
                    <label className="col-sm-2 col-form-label">Acceptance criteria</label>
                    <div className="col-sm-10">
                        <textarea onChange={(event) => this.handleUpdate(event)} className="form-control" name="taskAcceptance" rows="5" style={{ resize: "none" }}></textarea>
                    </div>
                </div>



                <br />
                <div className="form-group row text-right mb-3">
                    <div className="col-sm-12">                    
                        <button onClick={(event) => this.handleSubmit(event)} type="submit" className="btn btn-primary">Save</button>                      
                        <Link to={`/projects/${this.props.match.params.id}`}><div className="btn btn-info" role="button">Close</div></Link>
                    </div>
                </div>
            </form >

        )
    }
}

export default withRouter(CreateTaskForm);
