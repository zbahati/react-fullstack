import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useState } from 'react'

const CreatePost = () => {
    const [message, setMessage] = useState(null);
    
    const initialValues = {
        title: "",
        postText: "",
        userName: "",
    }

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/api/posts/", data)
        .then((response)=> {
            setMessage(response.data.message)
        })
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title should be added!"),
        postText: Yup.string().max(100).required(),
        userName: Yup.string().min(3).max(20).required()
    })


    return (
        <div className='formPage'>
            {message && <p class="message">{message}</p>}
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='formContainer'>
                <Field className="input" name="title" placeholder="Title" />
                <ErrorMessage name="title" component="span" />
                <Field className="input" name="postText" placeholder="post text" />
                <ErrorMessage name="postText" component="span" />
                <Field className="input" name="userName" placeholder="username " />
                <ErrorMessage name="userName" component="span" />

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
        </div>
    )
}

export default CreatePost;