import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const ViewAllBlog = () => {


    const [data, changeData] = useState(
        []
    )


    const fetchData = () => {
        console.log(data)
        axios.post("http://127.0.0.1:8000/blog/viewblog/").then(
            (response)=>{
                changeData(response.data)
            }
        )
    }

    useEffect(() => { fetchData() }, [])



    return (
        <div>

<Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value,index)=>{
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
            </div>



        </div>
    )
}

export default ViewAllBlog