import React from 'react'
import { useHistory } from 'react-router';
import Axios from 'axios';
import FileSaver from 'file-saver';

function MaintenancePage() {

    let history = useHistory();

    const handleReturn = (event) => {
        event.preventDefault();
        history.goBack();
    }

    const handleProjectRetrieval = (event) => {
        event.preventDefault();
        Axios.get('http://localhost:8080/api/files/downloadProjectfile').then(response => {
            if (response.status === 200) {
                console.log(response.data)
                let file = new File([response.data], "projects.csv", { type: "text/csv;charset=utf-8" });
                FileSaver.saveAs(file);
            } else {
                alert("Something went wrong, try again.")
            }
        })
    }

    const handleTaskRetrieval = (event) => {
        event.preventDefault();
        Axios.get('http://localhost:8080/api/files/downloadTaskfile').then(response => {
            if (response.status === 200) {
                console.log(response.data)
                let file = new File([response.data], "tasks.csv", { type: "text/csv;charset=utf-8" });
                FileSaver.saveAs(file);
            } else {
                alert("Something went wrong, try again.")
            }
        })
    }

    // const handleReset = (event) => {
    //     // TODO
    // }


    return (
        <div>
            <button onClick={handleProjectRetrieval} className="btn">Export projects</button>
            <button onClick={handleTaskRetrieval} className="btn">Export tasks</button>
            {/* <button className="btn">Reset data</button> */}
            <button onClick={handleReturn} className="btn">Back</button>
        </div>
    )
}

export default MaintenancePage;