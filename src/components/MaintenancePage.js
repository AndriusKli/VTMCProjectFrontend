import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
import Axios from 'axios';

function MaintenancePage() {

    let history = useHistory();

    const handleReturn = (event) => {
        history.goBack();
    }

    const handleProjectRetrieval = (even) => {
        // TODO
    }

    const handleTaskRetrieval = (even) => {
        // TODO
    }
    
    const handleReset = (even) => {
        // TODO
    }


    return (
        <div>
            <button className="btn">Export data</button>
            <button className="btn">Import data</button>
            <button className="btn">Reset data</button>
            <Link to="/projects"><button className="btn3">Back</button></Link>
        </div>
    )
}

export default MaintenancePage;