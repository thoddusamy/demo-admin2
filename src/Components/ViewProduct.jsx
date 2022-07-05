import axios from '../Axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewProduct() {
    const { id } = useParams()

    const [viewData, setViewData] = useState([])

    useEffect(() => {
        let getViewData = async () => {
            try {
                let viewFetch = await axios.get(`/products/${id}`)
                setViewData(viewFetch.data)
            } catch (error) {
                alert('Something went wrong!')
            }
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