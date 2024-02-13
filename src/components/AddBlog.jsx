import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'

const AddBlog = () => {



    const [inputfield, changeInputfield] = useState(
        {

            user_id: sessionStorage.getItem("id"),
            title: "",
            blog: "",
            


        }
    )

    const inputHandler = (event) => {
        changeInputfield({ ...inputfield, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputfield)
        axios.post("http://127.0.0.1:8000/blog/addblog/", inputfield).then( 
            (response) => {
                alert(response.data.status)
            }
        )

    }



    return (
        <div>

<Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">User Id </label>
                                <input type="text" className="form-control" name='user_id' value={inputfield.user_id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name='title' value={inputfield.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Blog</label>
                                <input type="text" className="form-control" name='blog' value={inputfield.blog} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button onClick={readValue} className="btn btn-success">Submit</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default AddBlog