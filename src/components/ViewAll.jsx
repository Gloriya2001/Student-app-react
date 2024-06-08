import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {


    const [data, changeData] = useState(


        [

            { "abc": "ddd", "aa": 3 },
            { "abc": "rrr", "aa": 4 },
            { "abc": "yyy", "aa": 6 }

        ]

    )





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
                                            <img src="https://media.istockphoto.com/id/1365601848/photo/portrait-of-a-young-woman-carrying-her-schoolbooks-outside-at-college.jpg?s=612x612&w=0&k=20&c=EVxLUZsL0ueYFF1Nixit6hg-DkiV52ddGw_orw9BSJA=" class="card-img-top" alt="...">
                                            </img>
                                            <div className="card-body">
                                                <h5 className="card-title">Name : {value.abc}</h5>
                                                <a href="#" class="btn btn-primary">Show profile</a>
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