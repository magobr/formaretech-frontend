import React from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import api from '../../config/api'

import { history } from '../../history'

import './Login.css';

const Login = () => {

    const handleSubmit = values => {
        api.post('/login', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
                    history.push('/chat')
                }
            })
    }

    return (
        <>
            <h1>Login</h1>
            <p>Fill the fields to continue</p>

            <Formik initialValues={{}} onSubmit={handleSubmit} >
                <Form className="Login">
                    <div className="Login-Group">
                        <Field 
                            name="name" 
                            className="Login-Field" 
                        />
                        <ErrorMessage 
                            component="span"
                            name="name"
                            className="Login-Field"
                        >
                        </ErrorMessage>
                    </div>
                    <button className="Login-Btn" type="submit">Login</button>
                </Form>
            </Formik>

        </>
    )

}

export default Login