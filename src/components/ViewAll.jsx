import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewAll = () => {


    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("").then(
            (response) => { changeData(response.data) }
        ).catch().finally()
    }
useEffect(()=>{fetchData()},[])




    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">


                            <h1>Student Profile</h1>

                            {data.map(

                                (value, index) => {


                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div className="card">
                                            <img src={value.img} class="card-img-top" alt="...">
                                            </img>
                                            <div className="card-body">
                                                <h5 className="card-title">{value.name}</h5>
                                                <h3>{value.collegeName}</h3>
                                                <Link to="#" class="btn btn-primary"></Link>
                                            </div>
                                        </div>


                                    </div>




                                }
                            )


                            }


                        </div>

                    </div>


                </div>
            </div>
        </div>


    )
}

export default ViewAll