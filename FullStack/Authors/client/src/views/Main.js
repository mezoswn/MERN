import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [ authors, setAuthors ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
                setLoaded(true);
            })
            .catch(err => console.log("Error: ", err))
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <>
            <h1>Favorite Authors</h1>
            <Link to={'/new'}>Add an author</Link>            
            {loaded && <AuthorList authors={ authors } removeFromDom={ removeFromDom } />}
        </>
    )
}