import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Students() {
    const [userData, setUserData] = useState([])

    let getdata = async () => {
        let fetchData = await axios.get('https://62ad8a95402135c7acc26bf2.mockapi.io/students')
        setUserData(fetchData.data)
    }

    useEffect(() => {
        getdata()
    }, [])

    let handleDelete = async (id) => {
        let popup = window.confirm('Confirm to delete?')
        if (popup) {
            await axios.delete(`https://62ad8a95402135c7acc26bf2.mockapi.io/students/${id}`)
            getdata()
        }
    }

    return (
        <>
            <h1 class='h3 mb-2 text-gray-800'>Students Record</h1>
            <p class='mb-4'>
                DataTables is a third party plugin that is used to generate the demo
                table below. For more information about DataTables, please visit the{' '}
                <a target='_blank' href='https://datatables.net'>
                    official DataTables documentation
                </a>
                .
            </p>
            <Link to="/mainpage/students/createstudent" className='btn btn-primary mb-3'>Create student</Link>
            <div class='card shadow mb-4'>
                <div class='card-header py-3'>
                    <h6 class='m-0 font-weight-bold text-primary'>Users List</h6>
                </div>
                <div class='card-body'>
                    <div class='table-responsive'>
                        <table
                            class='table table-bordered text-center'
                            id='dataTable'
                            width='100%'
                            cellspacing='0'
                        >
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Class</th>
                                    <th>Medium</th>
                                    <th>Age</th>
                                    <th>Date of Birth</th>
                                    <th>Location</th>
                                    <th>CRUD Buttons</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.class}</td>
                                            <td>{item.medium}</td>
                                            <td>{item.age}</td>
                                            <td>{item.dob}</td>
                                            <td>{item.location}</td>
                                            <td>
                                                <Link to={`/mainpage/students/viewstudent/${item.id}`} className='btn btn-warning btn-sm mr-2'>
                                                    View
                                                </Link>
                                                <Link to={`/mainpage/students/editstudent/${item.id}`} className='btn btn-success btn-sm mr-2'>
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDelete(item.id)} className='btn btn-danger btn-sm'>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Students
