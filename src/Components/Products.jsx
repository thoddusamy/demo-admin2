import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StarFill } from 'react-bootstrap-icons'
import axios from '../Axios'

function Products() {
    const [productData, setProductData] = useState([])

    let fetchData = async () => {
        try {
            let getData = await axios.get("/products")
            setProductData(getData.data)
        } catch (error) {
            alert('Something went wrong!')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    let handleDelete = async (id) => {
        try {
            let confirmDelete = window.confirm("Confirm to Delete this Product?");
            if (confirmDelete) {
                await axios.delete(`/products/${id}`)
            }
            fetchData()
        } catch (error) {
            alert('Something went wrong!')
        }
    }

    return (
        <>
            <Link to="/mainpage/products/createproduct" className='btn btn-success mb-4'>Create Product</Link>
            <div className='row'>
                {productData.map((data) => {
                    return (
                        <div className='col-12 col-lg-4 col-xl-3 col-sm-12 col-md-6 mb-5'>
                            <div style={{ maxHeight: '480px' }} className='card'>
                                {/* <!-- Sale badge--> */}
                                <div
                                    className='badge bg-danger text-white position-absolute'
                                    style={{ top: '0.5rem', right: '0.5rem' }}
                                >
                                    onSale
                                </div>
                                {/* <!-- Product image--> */}
                                <img className='card-img-top image' src={data.img} />
                                {/* <!-- Product details--> */}
                                <div className='card-body p-4'>
                                    <div className='text-center'>
                                        {/* <!-- Product name--> */}
                                        <h5 className='fw-bolder'>{data.mobname}</h5>
                                        {/* <!-- Product reviews--> */}
                                        <div className='d-flex justify-content-center small text-warning mb-2'>
                                            <div>
                                                <StarFill />
                                            </div>
                                            <div>
                                                <StarFill />
                                            </div>
                                            <div>
                                                <StarFill />
                                            </div>
                                            <div>
                                                <StarFill />
                                            </div>
                                            <div>
                                                <StarFill />
                                            </div>
                                            <div className='text-dark ml-2'>({data.buyedcount})</div>
                                        </div>
                                        {/* <!-- Product price--> */}
                                        <span className='text-muted me-2 text-decoration-line-through'>
                                            ₹ {data.orgprice}
                                        </span>
                                        <b className='ml-2'>₹ {data.saleprice}</b>
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
                                    <div className='text-center'>
                                        <Link
                                            className='btn btn-info mt-auto'
                                            to={`/mainpage/products/view/${data.id}`}
                                        >
                                            View
                                        </Link>
                                        <Link to={`/mainpage/products/edit/${data.id}`}
                                            className='btn btn-success mt-auto ml-2'>
                                            Edit
                                        </Link>
                                        <button onClick={() => handleDelete(data.id)} className='btn btn-danger mt-auto ml-2'>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products