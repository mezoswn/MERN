import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { Link, useNavigate } from '@reach/router';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [ authors, setAuthors ] = useState([]);
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log("Error: ", err))
    }, [])

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res => {
                setAuthors([...authors, res.data])
                navigate('/');
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    return (
        <div>
            <h1>Add a New Author</h1>
            {errors.map((err, index) => <small key={ index }>{err}</small>)}
            <AuthorForm onSubmitProp={ createAuthor } initialName="" />
            <Link to={'/'}>Home</Link>
        </div>
    )
}