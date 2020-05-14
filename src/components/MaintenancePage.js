import React from 'react'
import { useHistory } from 'react-router';
import Axios from 'axios';
import FileSaver from 'file-saver';
import { Link, useParams } from 'react-router-dom';


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



<div className="dropdown-menu">
  <span className="dropdown-item-text">Dropdown item text</span>
  <a className="dropdown-item" href="#">Action</a>
  <a className="dropdown-item" href="#">Another action</a>
  <a className="dropdown-item" href="#">Something else here</a>
</div>



      <div className="container">
        
        <div className="row justify-content-md-center">
        


          <div class="col col-md-3">
            <div className="card border">
              <div className="card-header clr-dwntaskcsv text-center">Task CSV</div>

              <a href="#!" onClick={handleTaskRetrieval} className="card-body">
            <div className="text-center ">
              <h5 className="mb-2 h5 text-nowrap ">Download</h5>
            </div>
            
            
          </a>

                
            </div>


          </div>
          <div class="col-md-3">
            <div className="card border">
              <div className="card-header clr-dwnprojectcsv text-center">Project CSV</div>

              <a href="#!" onClick={handleProjectRetrieval} className="card-body card-body-cascade">
            <div className="text-center ">
              <h5 className="mb-2 h5text-nowrap">Download</h5>
            </div>
            
            
          </a>

                
            </div>
          </div>
        </div>
      </div>

      



      {/* <div>
        <button onClick={handleProjectRetrieval} className="btn">Export projects</button>
        <button onClick={handleTaskRetrieval} className="btn">Export tasks</button>
        <button className="btn">Reset data</button>
        <button onClick={handleReturn} className="btn fixed-top-rigth">Backd</button>
      </div> */}
    </div>

  )
}

export default MaintenancePage;