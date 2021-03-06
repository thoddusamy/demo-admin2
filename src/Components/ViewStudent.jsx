import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../Axios'


function ViewStudent() {
    let { id } = useParams()

    let [getData, setGetData] = useState([])

    useEffect(() => {
        try {
            let getData = async () => {
                let getFetchData = await axios.get(`/students/${id}`)
                setGetData(getFetchData.data)
            }
            getData()
        } catch (error) {
            alert('Something Went Wrong!')
        }
    }, [])

    return (
        <div>
            <div>Student Name: {getData.name}</div>
            <div>Class: {getData.class}</div>
            <div>Medium: {getData.medium}</div>
            <div>Age: {getData.age}</div>
            <div>Date of Birth: {getData.dob}</div>
            <div>Location: {getData.location}</div>
        </div>
    )
}

export default ViewStudent