import { useFormik } from 'formik'
import axios from '../Axios'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
    let navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            mobname: '',
            img: '',
            buyedcount: '',
            orgprice: '',
            saleprice: '',
        },

        validate: (values) => {
            const errors = {}

            if (!values.mobname) {
                errors.mobname = '*Required'
            }

            if (!values.img) {
                errors.img = '*Required'
            }

            if (!values.buyedcount) {
                errors.buyedcount = '*Required'
            }

            if (!values.orgprice) {
                errors.orgprice = '*Required'
            }

            if (!values.saleprice) {
                errors.saleprice = '*Required'
            }
            return errors
        },

        onSubmit: async (values) => {
            try {
                await axios.post("/products", values)
                alert('Product Added Successfully...!')
                navigate('/mainpage/products')
            } catch (error) {
                alert('Something went wrong!')
            }
        }
    })
    // < TextField id = "standard-basic" label = "Standard" variant = "standard" />
    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label>Mobile Name</label>
                        <input type="text" name='mobname' onChange={formik.handleChange} value={formik.values.mobname}
                            className={formik.errors.mobname ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.mobname ? <span style={{ color: 'red' }}>{formik.errors.mobname}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Image URL</label>
                        <input type="text" name='img' onChange={formik.handleChange} value={formik.values.img}
                            className={formik.errors.img ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.img ? <span style={{ color: 'red' }}>{formik.errors.img}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Buyed Count</label>
                        <input type="number" name='buyedcount' onChange={formik.handleChange} value={formik.values.buyedcount}
                            className={formik.errors.buyedcount ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.buyedcount ? <span style={{ color: 'red' }}>{formik.errors.buyedcount}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Orginal Price</label>
                        <input type="number" name='orgprice' onChange={formik.handleChange} value={formik.values.orgprice}
                            className={formik.errors.orgprice ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.orgprice ? <span style={{ color: 'red' }}>{formik.errors.orgprice}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Sale Price</label>
                        <input type="number" name='saleprice' onChange={formik.handleChange} value={formik.values.saleprice}
                            className={formik.errors.saleprice ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.saleprice ? <span style={{ color: 'red' }}>{formik.errors.saleprice}</span> : null
                        }
                    </div>
                </div>
                <button className='btn btn-danger mt-3'>Add Product</button>
            </form>
        </div>
    )
}

export default CreateProduct

