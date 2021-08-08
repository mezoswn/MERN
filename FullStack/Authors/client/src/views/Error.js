import React from 'react';
import { Link } from '@reach/router';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <div>
            <p>We're sorry, but we could not find the author you are looking for.</p>
            <p>Would you like to add this author to our database?</p>
            <Link to={'/new'}>
                <button>Yes</button>
            </Link>
            <Link to={'/'}>
                <button>No</button>
            </Link>
        </div>
    )
}