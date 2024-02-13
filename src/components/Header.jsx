import React from 'react'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate()

    if(!sessionStorage.getItem("id")){
        navigate("add")
    }
    return (
        <div>


            <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="add">Blog App</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="add">Add Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="view">View My Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="viewall">View All</a>
                                </li>
                               
                                <li class="nav-item">
                                    <a class="nav-link" href="profile">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="delete">Delete</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="profile">Update</a>
                                </li>
                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </nav>


        </div>
    )
}

export default Header