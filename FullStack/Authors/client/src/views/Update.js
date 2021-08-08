import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { id } = props;
    const [ author, setAuthor ] = useState();
    const [ loaded, setLoaded ] = useState(false);
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                if(res.data.name === 'CastError') {
                    navigate('/error')
                } else {
                    setAuthor(res.data);
                    setLoaded(true);
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/'+id, author)
            .then(res => navigate('/'))
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
            <h1>Update Author</h1>
            <Link to={'/'}>Home</Link>
            <br />
            {errors.map((err, index) => <small key={ index }>{err}</small>)}
            {loaded && (
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialName={author.name} />
            )}
        </div>
    )
}