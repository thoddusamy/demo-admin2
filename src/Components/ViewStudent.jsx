import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function ViewStudent() {
    let { id } = useParams()

    let [getData, setGetData] = useState([])

    useEffect(() => {
        let getData = async () => {
            let getFetchData = await axios.get(`https://62ad8a95402135c7acc26bf2.mockapi.io/students/${id}`)
            setGetData(getFetchData.data)
        }
        getData()
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