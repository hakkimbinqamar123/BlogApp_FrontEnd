import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const User = () => {


    const [data, changeData] = useState(
        {
            uset_id: sessionStorage.getItem("id")
        }
    )

    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }

    const [result, changeResult] = useState([])

    const valueRead = () => {
        console.log(data)
        axios.post("",data).then(
            (response) => {
                changeResult(response.data)
            }
        )
    }

    useEffect(()=>{valueRead()}, [])




    return (
        <div>

<Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">


                            {result.map(
                                (index,value)=>{
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <div class="card" >
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{value.name}</h5>
                                           
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">{value.email}</li>
                                            <li class="list-group-item">{value.password}</li>
                                            
                                        </ul>
                                        
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

export default User