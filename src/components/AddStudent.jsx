import React from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h2>Add Student Details</h2>

            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Admission No.</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Roll No.</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Parent Name</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <label htmlFor="" className="form-label">College Name</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">date of birth</label>
                <input type="date" name="" id="" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Email-id</label>
                <input type="text" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" name="" id="" className="form-control" />


              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <lablel className="form-label">Confirm Password</lablel>
                <input type="password" name="" id="" className="form-control" />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <button className="btn btn-success">Register</button>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddStudent