import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'

const Delete = () => {

    const [inputfield, changeInputfield] = useState(
        {
            user_id: sessionStorage.getItem("id")
        }
    )

    const inputHandler = (event) => {
        changeInputfield({ ...inputfield, [event.target.name]: event.target.value })
    }

    const [result, changeResult] = useState([])

    const Valueread = () => {
        console.log(inputfield)
        axios.post("http://127.0.0.1:8000/blog/mypost/",inputfield).then(
            (response) => {
                changeResult(response.data)
                alert(response.data.status)
            }
        )
    }

    useEffect(() => {
        Valueread();
      }, []);
      

    return (
        <div>
            <Header />
            <div className="container">
                
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">User Id</label>
                                <input type="text" className="form-control " name='user_id' value={inputfield.user_id} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <center> <button onClick={Valueread} className="btn btn-primary">View</button></center>
                            </div>
                        </div>
                    </div>
                </div>



                {result.map(
                    (value, index) => {
                        return <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    {result.map(
                                        (value, index) => {
                                            return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                <div class="card mb-3">

                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.title}</h5>
                                                        <p class="card-text">{value.blog}</p>
                                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>

                                            </div>
                                        }
                                    )}

                                </div>
                            </div>
                        </div>
    
                        
      
                    }
                )}



            </div >

        </div >
    )
}

export default Delete