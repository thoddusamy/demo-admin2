import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewProduct() {
    const { id } = useParams()

    const [viewData, setViewData] = useState([])

    useEffect(() => {
        let getViewData = async () => {
            let viewFetch = await axios.get(`https://62ad8a95402135c7acc26bf2.mockapi.io/products/${id}`)
            setViewData(viewFetch.data)
        }
        getViewData()
    }, [])


    return (
        <div>
            <div className='mb-4'><img src={viewData.img} width='250' height='250' /></div>
            <div className='mb-2 ml-4'>Mobile Name: <b>{viewData.mobname}</b></div>
            <div className='mb-2 ml-4'>Buyed Count: <b>{viewData.buyedcount}</b></div>
            <div className='mb-2 ml-4'>Orginal Price: <b>{viewData.orgprice}</b></div>
            <div className='mb-2 ml-4'>Sale Price: <b>{viewData.saleprice}</b></div>
        </div>
    )
}

export default ViewProduct