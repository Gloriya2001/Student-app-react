import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {

  const [data, setData] = useState(

    {
      "name": "",
      "rollNo": "",
      "admNo": "",
      "parentName": "",
      "collegeName": "",
      "dob": "",
      "emailId": "",
      "password": "",
      "confirmPassword": "",
      "img": "",


    }

  )

  const inputHandler = (event) => {

    setData({ ...data, [event.target.name]: event.target.value })

  }

  const readValue = () => {

    console.log(data)
    axios.post("",data).then(
      console.log(response.data)
      if (response.data.status == "success") {
        alert("Successfully detail Added")
      } else {
        alert("Error!!!!")
      }
    )
  }




  return (
    <div>
      <Navbar />
      <div className="container">

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h2>Add Student Details</h2>

            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label" >Name</label>
                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Admission No.</label>
                <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Roll No.</label>
                <input type="text" className="form-control" name='rollNo' value={data.rollNo} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Parent Name</label>
                <input type="text" className="form-control" name='parentName' value={data.parentName} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <label htmlFor="" className="form-label">College Name</label>
                <input type="text" className="form-control" name='collegeName' value={data.collegeName} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">date of birth</label>
                <input type="date" id="" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Email-id</label>
                <input type="text" className="form-control" name='emailId' value={data.emailId} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" id="" className="form-control" name='password' value={data.password} onChange={inputHandler} />


              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <lablel className="form-label">Confirm Password</lablel>
                <input type="password" id="" className="form-control" name='confirmPassword' value={data.confirmPassword} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <lablel className="form-label">upload Photo</lablel>
                <input type="file" id="" className="form-control" name='img' value={data.img} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <button className="btn btn-success" onClick={readValue}>Register</button>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddStudent