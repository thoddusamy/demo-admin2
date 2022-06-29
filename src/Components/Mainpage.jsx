import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


function Mainpage() {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div class="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainpage