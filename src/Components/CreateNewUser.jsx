import React from 'react'
import { useFormik } from 'formik'
import axios from '../Axios'
import { useNavigate } from 'react-router-dom'

function CreateNewUser() {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            name: '',
            class: '',
            medium: '',
            age: '',
            dob: '',
            location: '',
        },

        validate: (values) => {
            const errors = {}

            if (!values.name) {
                errors.name = '*required'
            } else if (values.name.length < 5) {
                errors.name = 'Length must be more than 5'
            } else if (values.name.length > 20) {
                errors.name = 'Length must be less than 20'
            }

            if (!values.class) {
                errors.class = '*required'
            } else if (values.class.length > 4) {
                errors.class = 'Length must be less than 4'
            }

            if (!values.medium) {
                errors.medium = '*required'
            } else if (values.medium.length < 5) {
                errors.medium = 'Lenght must be morethan 5'
            } else if (values.medium.length > 7) {
                errors.medium = 'Length must be less than 7'
            }

            if (!values.age) {
                errors.age = '*required'
            } else if (values.age > 18) {
                errors.age = 'Age must be less than 18'
            } else if (values.age < 4) {
                errors.age = 'Age 4 and above childrens only accepted'
            }

            if (!values.dob) {
                errors.dob = '*required'
            }

            if (!values.location) {
                errors.location = '*required'
            }

            return errors
        },

        onSubmit: async (values) => {
            try {
                await axios.post("/students", values)
                alert('Student Added successfully...!')
                navigate('/mainpage/students')
            } catch (error) {
                alert('Something went wrong!')
            }
        }
    })

    return (
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <label>Student Name</label>
                        <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name}
                            className={formik.errors.name ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.name ? <span style={{ color: 'red' }}>{formik.errors.name}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Class</label>
                        <input type="text" name='class' onChange={formik.handleChange} value={formik.values.class}
                            className={formik.errors.class ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.class ? <span style={{ color: 'red' }}>{formik.errors.class}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Medium</label>
                        <input type="text" name='medium' onChange={formik.handleChange} value={formik.values.medium}
                            className={formik.errors.medium ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.medium ? <span style={{ color: 'red' }}>{formik.errors.medium}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Age</label>
                        <input type="number" name='age' onChange={formik.handleChange} value={formik.values.age}
                            className={formik.errors.age ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.age ? <span style={{ color: 'red' }}>{formik.errors.age}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Date of Birth</label>
                        <input type="date" name='dob' onChange={formik.handleChange} value={formik.values.dob}
                            className={formik.errors.dob ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.dob ? <span style={{ color: 'red' }}>{formik.errors.dob}</span> : null
                        }
                    </div>
                    <div className="col-6">
                        <label>Location</label>
                        <input type="text" name='location' onChange={formik.handleChange} value={formik.values.location}
                            className={formik.errors.location ? 'error-bdr form-control' : 'form-control'} />
                        {
                            formik.errors.location ? <span style={{ color: 'red' }}>{formik.errors.location}</span> : null
                        }
                    </div>
                </div>
                <button className='btn btn-primary mt-3'>Add student</button>
            </form>
        </div>
    )
}

export default CreateNewUser